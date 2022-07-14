import * as C from "../frontend/concept.ts";
import { Database } from "../frontend/database.ts";
import { AIO, readFile } from "../types/purify.ts";
import { hash } from "../utils/hash.ts";
import { Observable } from "../utils/Observable.ts";
import { chunk } from "../utils/utils.ts";
import { Pool } from "../workerlib/w.ts";
import { lineProcessor } from "./preproc_worker.ts";

const instantiatePool = AIO.ofS(() => {
	const pool = Pool.init(
		lineProcessor,
		new URL("./preproc_worker.ts", import.meta.url),
		4
	);
	//const processLines = pool.get("processLines");
	return pool;
});
export type Line = {
	original: string;
	translation: string; // this will be eng
};

// takes 0.00026s per ctx
export const readFileIntoDB = (
	filename: string,
	ordering: { engColumn: number; otherColumn: number } = {
		engColumn: 0,
		otherColumn: 1,
	},
	progressTracker?: Observable<number>,
	chunkSize = 5000
): AIO<Database> =>
	readFile(filename)
		.map((f: string) => f.split("\n").filter((l: string) => l.length > 1).slice(0, 1200000))
		.map((ll) => chunk(ll, chunkSize))
		.fmap((cks) =>
			instantiatePool.map(async (pool) => {
				const results = await cks.aMap(async (ls, i) => {
					const result = await pool.get("processLines")(
						ls,
						i * chunkSize,
						ordering.otherColumn,
						ordering.engColumn
					);
					progressTracker
						? progressTracker.apply((x) => x + chunkSize)
						: null;
					return result;
				});
				await pool.shutdown();
				return results;
			})
		)
		.map((cs) => cs.flat().filter((c) => c.metadata !== undefined))
		.map((result) => {
			const db = new Database();
			for (const r of result) {
				r.metadata.words.forEach((w) => (db.hashes[hash(w)] = w));
				db.contexts[r.metadata.id] = r;
			}
			return db;
		});

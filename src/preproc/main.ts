import { procLine } from "./proc.ts";
import { map, filter, readLinesLazy, readLinesStdin, enumerate } from "./read.ts";
import * as R from "https://esm.sh/ramda";
import { aPipe } from "../hints/hint.ts";
import { Database } from "../frontend/database.ts";
import * as C from "../frontend/concept.ts";
import { hash } from "../utils/hash.ts";
import { AIO } from "../types/purify.ts";

// must be awaited
export const readFileIntoDB = (
	filename?: string,
	ordering: { engColumn: number; otherColumn: number } = {
		engColumn: 0,
		otherColumn: 1,
	},
	maximum = 1_300_000
) =>
	AIO.ofA(() => aPipe([
		(fname?: string) => fname ? readLinesLazy(fname) : readLinesStdin(),
		//readLinesLazy,
		filter((l: string) => l.length > 0),
		enumerate,
		map(([i, line]: [number, string]) =>
			procLine(line, i, ordering.otherColumn, ordering.engColumn)
		),
		async (result: C.Context<C.DefaultMeta>[]) => {
			const db = new Database();
			let total = 0;
			for await (const r of result) {
				r.metadata.words.forEach((w) => (db.hashes[hash(w)] = w));
				db.contexts[r.metadata.id] = r;
				total += 1;
				if (total >= maximum) {
					break;
				}
			}
			return db;
		},
	])(filename));

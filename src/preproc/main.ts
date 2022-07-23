import { procLine } from "./proc.ts";
import { enumerate, filter, map } from "./read.ts";
import { aPipe } from "../utils/utils.ts";
import { newDatabase } from "../frontend/database.ts";
import * as C from "../frontend/concept.ts";
import { hash } from "../utils/hash.ts";
import { Monet, produce } from "../pure_deps.ts";

// must be awaited
export const readFileIntoDB = (
	iter: AsyncIterableIterator<string>,
	ordering: { engColumn: number; otherColumn: number } = {
		engColumn: 0,
		otherColumn: 1,
	},
	maximum = 1_300_000
) =>
	aPipe([
		filter((l: string) => l.length > 3),
		enumerate,
		map(([i, line]: [number, string]) =>
			procLine(line, i, ordering.otherColumn, ordering.engColumn)
		),
		async (
			result: AsyncIterableIterator<Monet.Maybe<C.Context<C.DefaultMeta>>>
		) => {
			return await produce(newDatabase(), async (db) => {
				for await (const res of result) {
					res.map((r) => {
						r.metadata.words.forEach(
							(w) => (db.hashes[hash(w)] = w)
						);
						db.contexts[r.metadata.id] = r;
						return db.contexts[r.metadata.id];
					});
				}
			});
		},
	])(iter);

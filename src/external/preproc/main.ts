import { procLine } from "./proc.ts";
import { enumerate, filter, map } from "../../resource/utils/gens.ts";
import { aPipe } from "../../resource/utils/utils.ts";
import { Database, newDatabase } from "../../internal/frontend/database.ts";
import { hash } from "../../resource/utils/hash.ts";
import { Monet, produce, tr } from "../../pure_deps.ts";
import { BaseContext, LanguageMetadata } from "../../internal/frontend/context.ts";
import { Sim } from "../../resource/utils/stringsim.ts";

// must be awaited
export const readFileIntoDB = (
	iter: AsyncIterableIterator<string>,
	ordering: { engColumn: number; otherColumn: number } = {
		engColumn: 0,
		otherColumn: 1,
	},
	maxSeconds = 20,
	convertTextFn?: (s: string) => string | Promise<string>,
	preprocessingFn: (s: string) => string = s => s
) =>
	aPipe([
		filter((l: string) => l.length > 3),
		enumerate,
		map(([i, line]: [number, string]) =>
			procLine(line, i, ordering.otherColumn, ordering.engColumn, preprocessingFn)
		),
		async (
			result: AsyncIterableIterator<Monet.Maybe<BaseContext<LanguageMetadata>>>
		) => {
			return await produce(newDatabase(), async (db: Database<LanguageMetadata>) => {
				let hasTimedOut = false;
				setTimeout(() => (hasTimedOut = true), maxSeconds * 1000)
				for await (const res of result) {
					res.map((r) => {
						r.metadata.words.forEach(
							(w) => (db.hashes[hash(w)] = w)
						);
						db.contexts[r.id] = {
							...r,
							markAnswer: async (_answer: string) => {
								const answer = _answer === "" ? r.metadata.original : _answer;
								const symmetricFn = convertTextFn ? convertTextFn : tr;
								return await r.metadata.words.aMap(async (w) => [
									hash(w),
									Sim.partialSimilarity(await symmetricFn(w.toLowerCase()))(
										await symmetricFn(answer.toLowerCase())
									),
								]);
							}
						};
						return db.contexts[r.id];
					});
					if (hasTimedOut) {
						result.return ? await result.return() : null;
						break;
					}
				}
			});
		},
	])(iter);

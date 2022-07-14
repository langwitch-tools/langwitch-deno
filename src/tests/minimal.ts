import { ContextHolder } from "../db/manager.ts";
import { readFileIntoDB } from "../preproc/main.ts";
import { nextConcept } from "../queries/nextconcept.ts";
import { State } from "../state/state.ts";
import { AIO, getArgs, pfs, plog, pprocess } from "../types/purify.ts";
import { Context as BackContext, u32 } from "../types/types.ts";
import { dedupCtxs, iterHasher, dedupBy } from "../utils/dedupBy.ts";
import * as R from "https://esm.sh/ramda@0.28.0";

export const fromFile = (FILENAME: string) =>
	readFileIntoDB(FILENAME, { engColumn: 0, otherColumn: 1 })
		.map(async (db) => {
			const ctxs = Object.values(db.contexts).map(
				(c) => new BackContext(c.metadata.id, new Set(c.concepts))
			);
			const state: State<null> = {
				db,
				known: [],
				learning: [],
				holder: await ContextHolder.spawn(ctxs),
				queue: [],
				topContext: null,
				stats: {
					lang: FILENAME,
					learnCount: 0,
				},
				desiredHideLevel: 0,
				lastResponse: ""
			};

			//return;
			let nexts: Set<number> = new Set();
			let total = 0;

			for (;;) {
				const count = total < 100 ? 3 : 35;
				nexts = await nextConcept(state.holder)(nexts, count);
				// this is inverted. contexts should come first, then the things that enable them?
				nexts = new Set(Array.from(nexts).slice(0, count));
				//const ctxs = await suggestContexts(state.holder)(state.known, nexts);
				if (nexts.size == 0 || total > 16000) {
					break;
				}
				total += nexts.size;
				Array.from(nexts).map((n) => console.log(state.db.hashes[n]));
				//console.log(ctxs.slice(0, 1).map(n => state.db.contexts[n]));
			}

			//const knownCtxs = await state.holder.onlyKnown();

			//const deduped = dedupBy(R.pipe((c: BackContext) => c.all, iterHasher))(knownCtxs).slice(0, 50000);

			//TODO: Deduplicate the minified output by the unknowns? what about word ordering?
			//return { state, deduped: Array.from(deduped) };
		})
		/*.fmap(({ state, deduped }) => {
			return AIO.do(
				plog.log(deduped.length),
				pfs.writeFile(
					FILENAME + "_shortened.txt",
					deduped
						.map(
							(c) =>
								state.db.contexts[c.id].metadata.translation +
								"\t" +
								state.db.contexts[c.id].metadata.original +
								"\n"
						)
						.join("")
				),
				pprocess.exit()
			);
		});*/

getArgs.fmap(args => fromFile(args[0])).run()

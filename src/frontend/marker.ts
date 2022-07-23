import { hash } from "../utils/hash.ts";
import * as C from "./concept.ts";
import { Database } from "./database.ts";
import { Config } from "../state/Config.ts";
import { tr } from "../pure_deps.ts";
import { ExternalConfigInterface } from "../config_helpers/ConfigInterface.ts";

import { Sim } from "../utils/stringsim.ts";
export const mark =
	<T extends ExternalConfigInterface>(config: Config<T>) =>
	(expectedWords: string[]) =>
	async (answer: string): Promise<[string, number][]> => {
		const symmetricFn = await config.externalConfig.convertText.getOrElse(
			() => tr
		);
		return await expectedWords.aMap(async (w) => [
			w,
			Sim.partialSimilarity(await symmetricFn(w.toLowerCase()))(
				await symmetricFn(answer.toLowerCase())
			),
		]);
	};

export const markCtx =
	<T extends ExternalConfigInterface>(config: Config<T>) =>
	(ctx: C.DefCtx) =>
		mark(config)(Array.from(new Set(ctx.metadata.words)));

export const update =
	<T>(config: Config<T>) =>
	(db: Database) =>
	(scores: [string, number][]) =>
		scores.map(([literal, score]) => {
			const concept: C.Concept = db.concepts[hash(literal)];
			if (concept === undefined) {
				throw new Error(
					"One of the concepts marked was not found in the database."
				);
			}
			return C.mark(config)(concept)(score);
		});

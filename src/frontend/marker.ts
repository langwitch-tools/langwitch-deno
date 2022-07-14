import * as fuzz from "https://esm.sh/fuzzball";
import { transliterate as tr } from "https://esm.sh/transliteration";
import { hash } from "../utils/hash.ts";
import * as C from "./concept.ts";
import { Database } from "./database.ts";
import { Config } from "../state/Config.ts";

export const mark =
	(expectedWords: string[]) =>
	(answer: string): [string, number][] =>
		expectedWords.map((w) => [w, fuzz.partial_ratio(tr(w.toLowerCase()), tr(answer.toLowerCase()))]);

export const markCtx = (ctx: C.DefCtx) =>
	mark(Array.from(new Set(ctx.metadata.words)));

export const update = (config: Config) => (db: Database) => (scores: [string, number][]) =>
	scores.map(([literal, score]) => {
		const concept: C.Concept = db.concepts[hash(literal)];
		if (concept === undefined) {
			throw new Error(
				"One of the concepts marked was not found in the database."
			);
		}
		return C.mark(config)(concept)(score / 100);
	});
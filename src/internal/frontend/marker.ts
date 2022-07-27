
import * as C from "./concept.ts";
import { Database } from "./database.ts";
import { Config } from "../state/Config.ts";
export const update =
	<T, M>(config: Config<T>) =>
	(db: Database<M>) =>
	(scores: [C.u32, number][]) =>
		scores.map(([literal, score]) => {
			const concept: C.Concept = db.concepts[literal];
			if (concept === undefined) {
				throw new Error(
					"One of the concepts marked was not found in the database."
				);
			}
			return C.mark(config)(concept)(score);
		});

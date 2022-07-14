import { immerable, produce } from "https://esm.sh/immer";
import { Concept, Context, DefaultMeta } from "./concept.ts";
export class Database {
	hashes: Record<number, string> = {}; //not
	concepts: Record<number, Concept> = {}; // is mutating
	contexts: Record<number, Context<DefaultMeta>> = {}; //not
	[immerable] = true;
}

export const save = (db: Database) => JSON.stringify(Object.values(db.concepts));
export const load = (db: Database) => (s: string) => {
	const conceptsList = JSON.parse(s);
	return produce(db, draft => {
		conceptsList.forEach((c: {[K in keyof Concept]: Concept[K]}) => {
			draft.concepts[c.id] = c;
		})
	});
}
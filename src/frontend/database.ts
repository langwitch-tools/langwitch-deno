import { immerable, produce } from "../pure_deps.ts";
import { Concept, Context, DefaultMeta } from "./concept.ts";

export type Database = {
	hashes: Record<number, string>; //not
	concepts: Record<number, Concept>; // is mutating
	contexts: Record<number, Context<DefaultMeta>>; //not
}

export const newDatabase = (): Database => ({
	hashes: {},
	concepts: {},
	contexts: {}
})

export const save = (db: Database) => JSON.stringify(Object.values(db.concepts));
export const load = (db: Database) => (s: string) => {
	const conceptsList = JSON.parse(s);
	//return produce(db, draft => {
		conceptsList.forEach((c: {[K in keyof Concept]: Concept[K]}) => {
			db.concepts[c.id] = c;
		})
	//});
	return db;
}
import { immerable, produce } from "../pure_deps.ts";
import { Concept } from "./concept.ts";
import { ExtendedContext } from "./context.ts";
export type Database<T> = {
	hashes: Record<number, string>; //not
	concepts: Record<number, Concept>; // is mutating
	contexts: Record<number, ExtendedContext<T>>; //not
}

export const newDatabase = (): Database<unknown> => ({
	hashes: {},
	concepts: {},
	contexts: {}
})

export const save = (db: Database<unknown>) => JSON.stringify(Object.values(db.concepts));
export const load = <T>(db: Database<T>) => (s: string) => {
	const conceptsList = JSON.parse(s);
	return produce(db, draft => {
		conceptsList.forEach((c: {[K in keyof Concept]: Concept[K]}) => {
			draft.concepts[c.id] = c;
		})
	});
}
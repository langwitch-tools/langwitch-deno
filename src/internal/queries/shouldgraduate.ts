import { Database } from "../frontend/database.ts";

export const shouldGraduate = <T>(db: Database<T>) => (currConcepts: Set<number> | Array<number>) =>
	Array.from(currConcepts).filter((cid) => {
		const c = db.concepts[cid];
		return c.decayCurve > -0.4; //?????
	});
// PROBLEM: FOR NEWLY INTRODUCED WORDS, IT ONLY SHOWS THEM AFTER MEMORY DECAYS
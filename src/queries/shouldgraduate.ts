import { Database } from "../frontend/database.ts";
import { Config } from "../state/Config.ts";

export const shouldGraduate = (cfg: Config) => (db: Database) => (currConcepts: Set<number> | Array<number>) =>
	Array.from(currConcepts).filter((cid) => {
		const c = db.concepts[cid];
		return c.decayCurve > -0.4; //?????
		//return c.longevity > cfg.minimum * Math.pow(cfg.multiplier, 2.5);
		//return c.predictRecall(0.05) > 0.5;
	});
// PROBLEM: FOR NEWLY INTRODUCED WORDS, IT ONLY SHOWS THEM AFTER MEMORY DECAYS
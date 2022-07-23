import { u32 } from "../types/types.ts";
import * as C from "./concept.ts";
import { Config } from "../state/Config.ts";
import { adjust } from "./memory.ts";
import { EitherS, State } from "../state/state.ts";

// 3.5^x = n
export type Futurity = C.Hours;
export const sort =
<T>(config: Config<T>) => (state: State<EitherS>) => (ctxs: C.DefCtx[]) => {
		const table: Record<u32, Futurity> = {};
		const scoredCtxs = ctxs.map((c) => {
			return [
				c,
				c.concepts
					.map((a) => {
						if (table[a] === undefined) {
							const cpt = state.db.concepts[a];
							const ifCorrect = adjust(config.flexibility)(cpt)(
								0,
								1.0
							);
							const diff = Math.abs(cpt.decayCurve - ifCorrect.decayCurve);
							table[a] = diff //Math.pow(diff, 2);
							//const tree = C.Calculate(config)(currentConcept);
							//const ifCorrect = tree.markCorrect();
							//const futureness = ifCorrect.nextReviewDate - currentConcept.nextReviewDate;
							//const futurenessLog = Math.log(futureness) / Math.log(config.multiplier);
							//table[a] = futurenessLog;
							//console.log(futurenessLog);
							// or just do review dates
							//table[a] = Math.log(currentConcept.nextReviewDate - config.currentTime()) / Math.log(config.multiplier);
							// or times seen
							//table[a] = 1 / Math.pow((currentConcept.timesSeen + 1), 0.33);
						}
						return table[a];
					})
					.reduce((a, b) => a + b) / Math.pow(c.concepts.length, 0.8),
			] as [C.DefCtx, number]; // fails because higher is worse in this schema when really we want it to be better, but not the average either.
		});
		scoredCtxs.sort((a, b) => b[1] - a[1]);
		return scoredCtxs.filter((c) =>
			state.topContext
				? c[0].metadata.id != state.topContext.metadata.id
				: true
		);
	};

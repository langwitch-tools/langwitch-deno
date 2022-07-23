import { newContext, Context, u32 } from "../types/types.ts";
import { expose } from "../workerlib/w.ts";
import { Utils as U } from "./calc.ts";
import { dedupCtxs } from "../utils/dedupBy.ts";
import { ImmutSet, wu, WuIterable } from "../pure_deps.ts";
export const utils = U(
	(a: Context) => Array.from(a.unknowns),
	(a: Context) => a.unknowns.size
);

let CONTEXTS: Context[] = [];

export const worker = {
	add(ctxs: Array<Context>) {
		CONTEXTS = CONTEXTS.concat(ctxs);
	},

	of(
		ctxs: WuIterable<Context>,
		num: number,
		max = 400000
	): WuIterable<Context> {
		return ctxs
			.filter((c: Context) => c.unknowns.size === num)
			.slice(0, max);
	},

	getNext(knowns: Set<u32>, n: number): number[] {
		//const mins = utils.lowestValue(worker.ctxs);
		const [ctxs1, ctxs2] = wu(worker.subtracted(knowns)).tee();
		const n1s = worker.of(ctxs1, 1);
		const map = utils.createFreqMap(worker.of(ctxs2, 2));
		const freq = (u: u32) => (map[u] !== undefined ? map[u] : 0);
		const withLabels = n1s.map((c) => [...c.unknowns]).flatten().toArray();
		const result = withLabels
			.sort((a, b) => freq(b) - freq(a))
			.slice(0, n);
		return result;
	},

	*subtracted(_knowns: Set<u32>) {
		//console.log(_knowns);
		// turn this into a producer function then pass it to the other ones?
		for (let i = 0; i < CONTEXTS.length; i++) {
			const a0 = CONTEXTS[i];
			//console.log(a0);
			yield {
				...a0,
				unknowns: new Set(
					Array.from(a0.unknowns).filter((u) => !_knowns.has(u))
				),
			};
		}
	},

	hasFocusConcepts(knowns: Set<u32>, _focus: Iterable<u32>) {
		const focus = new Set(_focus);
		const ctxs = worker.subtracted(knowns);
		const n1s = worker.of(wu(ctxs), 1);
		return Array.from(
			n1s.filter(
				(c) =>
					Array.from(c.unknowns).filter((w) => focus.has(w))
						.length === 1
			)
		);
	},

	allKnown(knowns: Set<u32>) {
		const ctxs = worker.subtracted(knowns);
		return Array.from(worker.of(wu(ctxs), 0).map((c) => c.id));
	},

	emptySelf() {
		CONTEXTS = [];
		self.close();
	},
};

export type CtxWorker = typeof worker;

expose(worker)(self);

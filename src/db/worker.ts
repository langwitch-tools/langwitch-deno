import { Context, reset, u32 } from "../types/types.ts";
import { expose } from "../workerlib/w.ts";
import { Utils as U } from "./calc.ts";
import { dedupBy, iterHasher, dedupCtxs } from "../utils/dedupBy.ts";
export const utils = U(
	(a: Context) => Array.from(a.unknowns),
	(a: Context) => a.unknowns.size
);

let CONTEXTS: Context[] = [];

export const worker = {
	add(ctxs: Array<Context>) {
		CONTEXTS = CONTEXTS.concat(ctxs);
	},

	of(num: number, max = 400000) {
		return CONTEXTS.filter((c) => c.unknowns.size === num).slice(0, max);
	},

	getNext(n: number): [Context, number][] {
		//const mins = utils.lowestValue(worker.ctxs);
		const n1s = worker.of(1);
		const map = utils.createFreqMap(worker.of(2));
		const freq = (u: u32) => (map[u] !== undefined ? map[u] : 0);
		const withLabels = n1s.map((c) => [
			c,
			Array.from(c.unknowns)
				.map((i) => freq(i))
				.reduce((a, b) => a + b) / c.unknowns.size,
		]) as [Context, number][];

		withLabels.sort((a, b) => b[1] - a[1]);
		return Array.from(dedupCtxs(withLabels).slice(0, Math.min(n, n1s.length)));
	},

	stripKnown(knowns: Set<u32>) {
		for (let i = 0; i < CONTEXTS.length; i++) {
			const a0 = CONTEXTS[i];
			a0.unknowns.forEach((id: u32) => {
				if (knowns.has(id)) {
					a0.unknowns.delete(id);
				}
			});
		}
	},

	resetAll() {
		CONTEXTS.forEach((c) => reset(c));
	},

	hasFocusConcepts(focus: Set<u32>) {
		const n1s = worker.of(1);
		return n1s.filter(
			(c) =>
				Array.from(c.unknowns).filter((w) => focus.has(w)).length === 1
		);
	},

	allKnown() {
		return worker.of(0);
	},
};

export type CtxWorker = typeof worker;

expose(worker)(self);

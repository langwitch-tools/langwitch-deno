import { Context, u32 } from "../types/types.ts";
import { dummy } from "../utils/hacks.ts";
import { chunk } from "../utils/utils.ts";
import { Pool, PromisedModule } from "../workerlib/w.ts";
import { Utils as U } from "./calc.ts";
import { worker } from "./worker.ts";
dummy();

const _utils = U(
	(a: Context) => Array.from(a.unknowns),
	(a: Context) => a.unknowns.size
);

export type CtxWorkerThread = PromisedModule<typeof worker>;
export class ContextHolder {
	utils = U(
		(a: Context) => Array.from(a.unknowns),
		(a: Context) => a.unknowns.size
	);
	constructor(
		private workers: Array<CtxWorkerThread> = [],
		private map: Record<u32, number>,
		private pool: Pool<typeof worker>
	) {}
	static async spawn(ctxs: Array<Context>) {
		const size = Math.max(Math.ceil(ctxs.length / 4), 50000);
		const chunks = chunk(ctxs, size);
		const pool = Pool.init(worker, new URL("./worker.ts", import.meta.url), chunks.length);
		const proxies = await chunks.aMap(async (c, i) => {
			const prox = pool.createProxy(i);
			await prox.add(c);
			return prox;
		});
		//const freqmap = utils.createFreqMap(ctxs);
		return new ContextHolder(proxies, {}, pool);
	}

	gather<T>(fn: (w: CtxWorkerThread) => Promise<T>): Promise<T[]> {
		return Promise.all(this.workers.map(fn));
	}

	async getNextConcepts(n: number): Promise<Set<u32>> {
		const topN1s = await this.gather((w) => w.getNext(n * 2)).then((a) =>
			a.flat()
		);
		//console.log(topN1s);
		//const freq = (c: Context) => Array.from(c.unknowns).map(i => this.map[i] !== undefined ? this.map[i] : 0).reduce((a, b) => a + b);
		topN1s.sort((a, b) => b[1] - a[1]);
		const res = topN1s
			.map((c) => c[0])
			.map((c) => Array.from(c.unknowns))
			.flat();
        //console.log(topN1s);
		const set: Set<number> = new Set();
		for (const item of res) {
			if (set.size < n) {
				set.add(item);
			} else {
				break;
			}
		}
		return set;
	}
	// can be done in parallel, but not in the same way, extract this to a different method. sub and all
	async stripKnown(knowns: Set<u32>) {
		await this.gather((w) => w.stripKnown(knowns));
	}
    // !!MUTABILITY

	async reset() {
		await this.gather((w) => w.resetAll());
	}
    // !!MUTABILITY

	async getNextContexts(focus: Set<u32>): Promise<Array<u32>> {
		const ids = await this.gather((w) => w.hasFocusConcepts(focus));
		return ids.flat().map((c) => c.id);
	}

	async onlyKnown() {
		return await this.gather(w => w.allKnown()).then(c => c.flat())
	}
}

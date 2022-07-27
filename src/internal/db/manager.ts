import { Context, u32 } from "../../resource/types/types.ts";
import { dummy } from "../../resource/utils/hacks.ts";
import { chunk } from "../../resource/utils/utils.ts";
import { Pool, PromisedModule } from "../../resource/workerlib/w.ts";
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
	) {}
	static async spawn(ctxs: Context[]) {
		const chunks = chunk(ctxs, 50000);
		const pool = Pool.init(worker, new URL("./worker.ts", import.meta.url), chunks.length);
		const proxies = await chunks.aMap(async (chunk, i) => {
			const prox = pool.createProxy(i);
			await prox.add(chunk);
			return prox;
		});
		//const freqmap = utils.createFreqMap(ctxs);
		return new ContextHolder(proxies, {});
	}

	gather<T>(fn: (w: CtxWorkerThread) => Promise<T>): Promise<T[]> {
		return Promise.all(this.workers.map(fn));
	}

	async getNextConcepts(knowns: Set<u32>, n: number): Promise<Set<u32>> {
		const topN1s = await this.gather((w) => w.getNext(new Set(knowns), n * 2)).then((a) =>
			a.flat()
		);
		const set: Set<number> = new Set();
		for (const item of topN1s) {
			if (set.size < n && !knowns.has(item)) {
				set.add(item);
			} else {
				break;
			}
		}
		return set;
	}
	// can be done in parallel, but not in the same way, extract this to a different method. sub and all

	async getNextContexts(knowns: Iterable<u32>, focus: Iterable<u32>): Promise<Array<u32>> {
		const ids = await this.gather((w) => w.hasFocusConcepts(new Set(knowns), focus));
		return ids.flat().map((c) => c.id);
	}

	async onlyKnown(knowns: Iterable<u32>) {
		return await this.gather(w => w.allKnown(new Set(knowns))).then(c => c.flat())
	}

	async shutdown() {
		await this.gather(w => w.emptySelf());
	}
}

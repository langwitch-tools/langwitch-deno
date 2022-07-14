import wu from "https://esm.sh/wu";
import { Context } from "../types/types.ts";
import * as R from "https://esm.sh/ramda";
export const dedupBy =
	<A, B>(fn: (a0: A) => B) =>
	(iter: Array<A>) =>
		wu(
			(function* () {
				const createArray = (m: Map<B, A>) => Array.from(m.values());
				const map: Map<B, A> = new Map();
				for (const obj of iter) {
					const keyed = fn(obj);
					if (!map.has(keyed)) {
						map.set(keyed, obj);
						yield obj;
					}
				}
				return createArray(map);
			})()
		);
export const iterHasher = <T>(s: Iterable<T>) => JSON.stringify(Array.from(s).sort());
export const dedupCtxs = dedupBy(R.pipe((ctx: [Context, number]) => ctx[0].unknowns, iterHasher));

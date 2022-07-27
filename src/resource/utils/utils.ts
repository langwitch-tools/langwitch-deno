
import { R } from "../../pure_deps.ts";
import { AnyFn, Depromisify } from "../workerlib/types.ts";
export const aPipe = R.pipeWith(<A, B>(f: (a0: A) => B, res: Promise<A> | A) => Promise.resolve(res).then(f));
export const throwIf =
	(msg: () => Error) =>
	<Arg, Ret>(
		bool: (a0: Arg) => boolean
	) =>
	(target: (arg: Arg) => Ret) =>
	(arg: Arg): Ret => {
		if (bool(arg)) {
			throw msg();
		}
		return target(arg);
	};

export const range = (n: number) => Array.from(Array(n).keys());

export const selectPercentile =
	<T>(float: number) =>
	(arr: T[] | readonly T[]) =>
		arr.slice(Math.round(arr.length * float))[0];


// Chunks an array into N arrays
export const chunk = <T>(arr: Array<T>, n: number): Array<Array<T>> =>
	range(Math.ceil(arr.length / n))
		.map((i: number) => i * n)
		.map((i: number) => arr.slice(i, i + n));

export const lazyChunk = async function* <T>(arr: AsyncIterableIterator<T>, n: number): AsyncIterableIterator<Array<T>> {
	for (;;) {
		const ch: Array<T> = Array(n);
		for (let i = 0; i < n; i++) {
			const result = await arr.next();
			if (result.done) {
				yield ch.slice(0, i - 1);
				return;
			}
			result.value ? ch[i] = result.value : null;
		}
		yield ch;
	}
}

/*export const time = async <T>(fn: () => Promise<T>): Promise<T> => {
	const now = performance.now();
	const result = await fn();
	console.log("Took", performance.now() - now, "ms for", String(fn));
	return result;
};

export const start = (name: string) => {
	const now = performance.now();
	return () => console.log("Took", performance.now() - now, "ms for", name);
}*/

export const lens = <T, A>(accessor: (a0: T) => A) => (obj: T) => accessor(obj);
export const key = <T extends Record<string | number | symbol, unknown>, K extends keyof T>(key: K) => (obj: T) => obj[key]

class Empty {}
export const thunkify = (fn: AnyFn) => {
	let result = new Empty();
	return async (...args: Parameters<AnyFn>): Promise<Depromisify<ReturnType<AnyFn>>> => {
		if (result instanceof Empty) {
			result = await fn(...args);
		}
		return result;
	}
}

export const emptyIter = <T>() => (async function* () {})() as AsyncIterableIterator<T>;
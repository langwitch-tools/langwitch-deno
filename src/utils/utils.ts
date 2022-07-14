
import { performance } from "https://deno.land/std@0.145.0/node/perf_hooks.ts";
import { Depromisified } from "../hints/worker.ts";
import { AnyFn } from "../workerlib/w.ts";

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

const range = (n: number) => Array.from(Array(n).keys());

// Chunks an array into N arrays
export const chunk = <T>(arr: Array<T>, n: number): Array<Array<T>> =>
	range(arr.length)
		.filter((i: number) => i % n === 0)
		.map((i: number) => arr.slice(i, i + n));

export const time = async <T>(fn: () => Promise<T>): Promise<T> => {
	const now = performance.now();
	const result = await fn();
	console.log("Took", performance.now() - now, "ms for", String(fn));
	return result;
};

export const start = (name: string) => {
	const now = performance.now();
	return () => console.log("Took", performance.now() - now, "ms for", name);
}

export const lens = <T, A>(accessor: (a0: T) => A) => (obj: T) => accessor(obj);
export const key = <T extends Record<string | number | symbol, unknown>, K extends keyof T>(key: K) => (obj: T) => obj[key]

class Empty {}
export const thunkify = (fn: AnyFn) => {
	let result = new Empty();
	return async (...args: Parameters<AnyFn>): Promise<Depromisified<ReturnType<AnyFn>>> => {
		if (result instanceof Empty) {
			result = await fn(...args);
		}
		return result;
	}
}
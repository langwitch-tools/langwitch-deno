// deno-lint-ignore-file no-explicit-any

import { AnyAsyncFn, AnyFn, Depromisify } from "../workerlib/types.ts";

const Nothing = Symbol("Nothing");
type Return<Fn extends (...args: any[]) => unknown> = Depromisify<
	ReturnType<Fn>
>;

export class AMaybe<T> {
	value: Promise<typeof Nothing | T>;
	constructor(
		value: T | typeof Nothing | Promise<typeof Nothing> | Promise<T>
	) {
		this.value = Promise.resolve(value);
	}
	static of<K>(value: K | Promise<K>): AMaybe<K> {
		return new AMaybe(value);
	}
	static none<K>(): AMaybe<K> {
		return new AMaybe<K>(Nothing);
	}
	map<B>(fn: (a0: T) => B | Promise<B>): AMaybe<B> {
		return new AMaybe(
			this.value.then((n) => (n === Nothing ? Nothing : fn(n)))
		) as unknown as AMaybe<B>;
	}
	fmap<B>(fn: (a0: T) => AMaybe<B> | Promise<AMaybe<B>>): AMaybe<B> {
		return new AMaybe(
			this.value
				.then((n) => (n === Nothing ? AMaybe.none<B>() : fn(n)))
				.then((m) => m.value)
		) as AMaybe<B>;
	}
	async getOrElse(fn: () => T): Promise<T> {
		const result = await this.value;
		return result == Nothing ? fn() : result;
	}
	static wrap<Fn extends AnyAsyncFn>(
		fn: Fn,
		checker: (a0: Return<Fn>) => boolean
	): (...args: Parameters<Fn>) => AMaybe<Return<Fn>> {
		return (...args: Parameters<Fn>) => {
			return new AMaybe(
				fn(...args).then((result) =>
					checker(result) ? result : Nothing
				)
			);
		};
	}
}

export type SomeObject = {[keys: string]: any};

export const isRecord = (obj: any): obj is SomeObject => {
	try {
		const result = Object.keys(obj).filter(n => isNaN(Number(n))).length > 0;
		return result;
	} catch {
		return false;
	}
}


export type Maybied<T> = T extends SomeObject ? {
	[K in keyof T]: 
			T[K] extends AnyFn ? AMaybe<NonNullable<T[K]>> 
			: T[K] extends { [key: string]: any }
			? Maybied<T[K]> 
			: AMaybe<NonNullable<T[K]>>
} : never;

export const maybeify = <M extends SomeObject>(m: M): Maybied<M> => {
	const pureModule = new Object() as Maybied<M>;
	Object.keys(m).forEach((k: string) => {
		const val = m[k];
		if (val === undefined || val === null) {
			Object.assign(pureModule, {[k]: new AMaybe(Nothing)});
		} else if (Object(val) != val) {
			Object.assign(pureModule, {[k]: new AMaybe(val)});
		} else if (isRecord(val)) {
			Object.assign(pureModule, {[k]: maybeify(val)});
		} else {
			Object.assign(pureModule, {[k]: new AMaybe(val)});
		}
	});
	return pureModule;
};
/*declare global {
	interface Function {
		onlyif: <Fn extends AnyAsyncFn>(
			this: Fn,
			checker: (a0: Return<Fn>) => boolean
		) => (...args: Parameters<Fn>) => AMaybe<Return<Fn>>;
	}
}

Function.prototype.onlyif = function <Fn extends AnyAsyncFn>(
	this: Fn,
	checker: (a0: Return<Fn>) => boolean
) {
	return AMaybe.wrap(this, checker);
};
export const test = (async (n1: number, n2: number) => n1 / n2).onlyif(
	(x) => x !== -Infinity && x !== Infinity
);
*/

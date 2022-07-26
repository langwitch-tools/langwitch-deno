// deno-lint-ignore-file no-explicit-any

// take two functions, head and tail. execute each in a list, passing results from one to another. when mapping, simply concatenate the last two functions into a single function that does them synchronously and pass that as the first parameter. if initialising with just one, then make the second a simple identity function.
import { AnyFn, Depromisify } from "../workerlib/types.ts";
export type AnyAsyncFn = (a0?: any) => Promise<any>;

export type IO<T> = {
	map<B>(fn: (a0: T) => B): IO<B>;
	fmap<B>(fn: (a0: T) => IO<B>): IO<B>;
	get(): T;
};

export type Monad<T> = {
	map<B>(fn: (a0: T) => B): Monad<B>;
	fmap<B>(fn: (a0: T) => Monad<B>): Monad<B>;
	get(): T;
};

export type Transformer = <T, A extends Monad<T>, B extends Monad<T>>(
	m1: A
) => (m2: B) => Monad<T>;

export const composeM =
	(m2: <B>(a0: B) => Monad<B>) => {
		const monad = <T>(value: Monad<T>) => ({
			map: <B>(fn: (a0: T) => B): Monad<B> => monad(value.map(fn).map(b => m2(b).get())),
			fmap: <B>(fn: (a0: T) => Monad<B>): Monad<B> => monad(value.map(fn).fmap(m2).get()),
			get: () => value.get(),
		});
		return monad;
	};

export const IO = {
	new: <T>(
		fns: [...AnyFn[], (a0?: any) => T]
	): IO<T> => {
		return {
			map: <B>(fn: (a0: T) => B) => {
				return IO.new<B>([...fns, fn]);
			},
			get: (): T => {
				const localFns = [...fns];
				let task = localFns.shift();
				let result;
				if (task !== undefined) {
					result = task();
				} else {
					return undefined as unknown as T;
				}
				for (;;) {
					task = localFns.shift();
					if (task !== undefined) {
						result = task(result);
					} else {
						break;
					}
				}
				return result;
			},
			fmap: <B>(fn: (a0: T) => IO<B>): IO<B> => {
				return IO.new<B>([
					...fns,
					fn,
					(a: IO<B>) => a.get(),
				]);
			},
		};
	},
	of: <K>(fn: () => K): IO<K> => {
		return IO.new([fn]);
	},
};

export const Maybe = {
	new: <T extends NonNullable<any>>(
		fns: [...AnyFn[]]
	): Monad<T> => {
		return {
			map: <B>(fn: (a0: T) => B | null) => {
				return Maybe.new<B>([...fns, fn]);
			},
			get: (): T => {
				const localFns = [...fns];
				let task = localFns.shift();
				let result;
				if (task !== undefined) {
					result = task();
				} else {
					return null as unknown as T;
				}
				for (;;) {
					if (result === undefined || result === null) {
						return null as unknown as T;
					}
					task = localFns.shift();
					if (task !== undefined) {
						result = task(result);
					} else {
						break;
					}
				}
				return result;
			},
			fmap: <B>(fn: (a0: T) => Monad<B> | Monad<null>): Monad<B> => {
				return Maybe.new<B>([
					...fns,
					fn,
					(a: Monad<B>) => a.get(),
				]);
			},
		};
	},
	some: <K>(val: K): Monad<K> => {
		return Maybe.new([() => val]);
	},
	none: <K>(): Monad<never> => {
		return Maybe.new([]);
	},
};



const IOCombiner = composeM((t) => IO.of(() => t));

let sum = 0;

const val = IOCombiner(Maybe.some(5));

val.map(k => k * 6).map(n => sum += n).get();
val.fmap(k => k < 10 ? IOCombiner(Maybe.none()) : IOCombiner(Maybe.some(k)) ).map(n => sum += n).get();

console.log(sum)
export const DoNothing = IO.of(() => undefined);
export type Module = { [key: string]: ((...args: any[]) => any) | any };
export type Pure<M> = {
	[K in keyof M]: M[K] extends (...args: any[]) => any
		? (...args: Parameters<M[K]>) => IO<ReturnType<M[K]>>
		: M[K] extends Module
		? Pure<M[K]>
		: M[K];
};

//  : M extends new (...args: ConstructorParameters<infer T>) => infer T ? new (...args: ConstructorParameters<T>) => Pure<T> : never;

export const purify = <M extends Module>(m: M): Pure<M> => {
	const pureModule = new Object() as Module;
	Object.keys(m).forEach((k: string) => {
		const val = m[k];
		if (typeof val == "function") {
			pureModule[k] = (...args: Parameters<typeof val>) =>
				IO.new([() => val(...args)]);
		}
	});
	return pureModule as Pure<M>;
};
//const task = purefs.readFileSync("src/purify.ts").flatMap(pureConsole.log)
//task.run()
// collect into log, then provide an impure function at the end

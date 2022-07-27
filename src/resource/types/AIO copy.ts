// deno-lint-ignore-file no-explicit-any

// take two functions, head and tail. execute each in a list, passing results from one to another. when mapping, simply concatenate the last two functions into a single function that does them synchronously and pass that as the first parameter. if initialising with just one, then make the second a simple identity function.
import { AnyFn } from "../workerlib/types.ts";
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

export type Logger<T> = {
	map<B>(fn: (a0: T) => B): Logger<B>;
	fmap<B>(fn: (a0: T) => Logger<B>): Logger<B>;
	get(): T;
};

export type Maybe<T> = {
	map<B>(fn: (a0: T) => B): Maybe<B>;
	fmap<B>(fn: (a0: T) => Maybe<B>): Maybe<B>;
	get(): T;
};

export const composeM = (m2: <B>(a0: B) => Monad<B>) => {
	const monad = <T>(value: Monad<T>) => ({
		map: <B>(fn: (a0: T) => B): Monad<B> =>
			monad(value.map(fn).map((b) => m2(b).get())),
		fmap: <B>(fn: (a0: T) => Monad<B>): Monad<B> =>
			monad(value.map(fn).fmap(m2).get()),
		get: () => value.get(),
	});
	return monad;
};

export const IO = {
	new: <T>(fns: [...AnyFn[], (a0?: any) => T]): IO<T> => {
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
				return IO.new<B>([...fns, fn, (a: IO<B>) => a.get()]);
			},
		};
	},
	of: <K>(fn: () => K): IO<K> => {
		return IO.new([fn]);
	},
};

export const Maybe = {
	new: <T extends NonNullable<any>>(val: T | null | undefined): Monad<T> => {
		const nullguarder = <B>(fn: (a0: T) => B | null): Monad<B> =>
			val === undefined || val === null
				? Maybe.none()
				: (() => {
						const newVal = fn(val);
						return newVal === null || newVal === undefined
							? Maybe.none<B>()
							: Maybe.some(newVal);
				  })();
		return {
			map: <B>(fn: (a0: T) => B | null): Maybe<B> => {
				return nullguarder<B>(fn);
			},
			get: (): T => {
				return val as unknown as T;
			},
			fmap: <B>(fn: (a0: T) => Maybe<B> | Maybe<null>): Maybe<B> => {
				return nullguarder<B>((v) => fn(v).get());
			},
		};
	},
	some: <K>(val: K): Maybe<K> => {
		return Maybe.new(val);
	},
	none: <K>(): Maybe<K> => {
		return Maybe.new<K>(null);
	},
};

export const Logger = {
	new: <T>(val: T, logfn: (a0: unknown) => void): Logger<T> => ({
		map: <B>(fn: (a0: T) => B): Logger<B> => {
			logfn(val);
			return Logger.new(fn(val), logfn)
		},
		get: (): T => {
			logfn(val);
			return val as unknown as T;
		},
		fmap: <B>(fn: (a0: T) => Logger<B>): Logger<B> => {
			return Logger.new(fn(val).get(), logfn)
		},
	})
}

const IOCombiner = composeM((t) => IO.of(() => t));
const IOSome = <T>(val: T) => IOCombiner(Maybe.some(val));
const IONone = <T>() => IOCombiner(Maybe.none<T>());

const LoggerCombiner = composeM((t) => Logger.new(t, console.log));
const LoggedIOSome = <T>(val: T) => LoggerCombiner(IOSome(val));
const LoggedIONone = <T>() => LoggerCombiner(IONone<T>());

const val = LoggedIOSome(5);

val.map((k) => k * 5) // defers logging "25"
	.map((k) => k + 5); // defers logging "30"

val.fmap((k) => (k === 5 ? LoggedIONone<number>() : LoggedIOSome(k))) // defers logging the monad
	.map((n) => n * 2); // does not execute

export const DoNothing = IO.of(() => undefined);
export type Module = { [key: string]: ((...args: any[]) => any) | any };
export type Lifter = <T>(a0: () => T) => Monad<T>;
export type Lifted<Mod> = {
	[K in keyof Mod]: Mod[K] extends (...args: any[]) => any
		? (...args: Parameters<Mod[K]>) => ReturnType<Mod[K]>
		: Mod[K] extends Module
		? Lifted<Mod[K]>
		: Mod[K];
};
// Mod[K]
//  : M extends new (...args: ConstructorParameters<infer T>) => infer T ? new (...args: ConstructorParameters<T>) => Pure<T> : never;

export const lift = (monadFn: <T>(a0: () => T) => Monad<T>) => <M extends Module>(module: M): Lifted<M> => {
	const pureModule = new Object() as Module;
	Object.keys(module).forEach((k: string) => {
		const val = module[k];
		if (typeof val == "function") {
			pureModule[k] = (...args: Parameters<typeof val>) =>
				monadFn(() => val(...args));
		}
	});
	return pureModule as Lifted<M>;
};

//const task = purefs.readFileSync("src/purify.ts").flatMap(pureConsole.log)
//task.run()
// collect into log, then provide an impure function at the end

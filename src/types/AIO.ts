// deno-lint-ignore-file no-explicit-any

// take two functions, head and tail. execute each in a list, passing results from one to another. when mapping, simply concatenate the last two functions into a single function that does them synchronously and pass that as the first parameter. if initialising with just one, then make the second a simple identity function.
import { Depromisify } from "../workerlib/types.ts";
import { AMaybe } from "./Maybe.ts";
export type AnyAsyncFn = (a0?: any) => Promise<any>;
export class AIO<T> {
	private fns: AnyAsyncFn[] = [];
	constructor(fns: [...AnyAsyncFn[], (a0: any) => Promise<T>]) {
		this.fns = fns;
	}
	static ofA<K>(fn: () => Promise<K>): AIO<K> {
		return new AIO([fn]);
	}
	static ofS<K>(fn: () => K): AIO<K> {
		return new AIO([() => Promise.resolve(fn())]);
	}
	static wrap<Fn extends AnyAsyncFn>(fn: Fn) {
		return (...args: Parameters<Fn>) =>
			new AIO([() => fn(...args)]) as AIO<Depromisify<ReturnType<Fn>>>;
	}
	map<B>(fn: (a0: T) => B | Promise<B>): AIO<B> {
		return new AIO([...this.fns, (a: T) => Promise.resolve(fn(a))]);
	}

	async run(): Promise<T> {
		let task = this.fns.shift();
		let result;
		if (task !== undefined) {
			result = await task();
		} else {
			return undefined as unknown as T;
		}
		for (;;) {
			task = this.fns.shift();
			if (task !== undefined) {
				result = await task(result);
			} else {
				break;
			}
		}
		return result;
	}
	fmap<B>(fn: (a0: T) => AIO<B> | Promise<AIO<B>>): AIO<B> {
		return new AIO([
			...this.fns,
			(a: T) => Promise.resolve(fn(a)),
			(a: AIO<B>) => a.run(),
		]);
	}
	static do(...ios: AIO<void>[]): AIO<void> {
		return ios.reduce(
			(acc, curr) => acc.fmap(() => curr),
			AIO.ofS(() => undefined)
		);
	}
	and<N>(stuff: (a0: T) => Promise<AIO<N>> | AIO<N>): AIO<T> {
		return AIO.ofA(async () => {
			const r = await this.run();
			await (await stuff(r)).run();
			return r;
		});
	}
	join<B>(other: AIO<B>): AIO<[T, B]> {
		return AIO.ofA(async () => {
			return await Promise.all([this.run(), other.run()]);
		});
	}
	// do all of these things using Param A, then return Param A
}

export const DoNothing = AIO.ofS(() => undefined);
export type Module = { [key: string]: ((...args: any[]) => any) | any };
export type Pure<M> = {
	[K in keyof M]: M[K] extends (...args: any[]) => any
		? (...args: Parameters<M[K]>) => AIO<Depromisify<ReturnType<M[K]>>>
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
				new AIO([() => val(...args)]);
		}
	});
	return pureModule as Pure<M>;
};
//const task = purefs.readFileSync("src/purify.ts").flatMap(pureConsole.log)
//task.run()
// collect into log, then provide an impure function at the end

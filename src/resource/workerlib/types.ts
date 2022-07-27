// deno-lint-ignore-file no-explicit-any

export type AnyFn = (...args: any[]) => any;
export type AnyAsyncFn = (...args: any[]) => Promise<any>;
export type PoolModule = { [key: string]: AnyFn };
export type Promisify<T> = T extends Promise<unknown> ? T : Promise<T>;
export type Depromisify<A> = A extends Promise<infer T> ? T : A;
export type PromisedModule<P extends PoolModule> = {
	[K in keyof P]: (...args: Parameters<P[K]>) => Promisify<ReturnType<P[K]>>;
};

export interface MessageFromWorker<T> {
	data: {
		id: string;
		payload: T;
	};
}

export interface MessageToWorker<T, ValidMethods extends string> {
	data: {
		id: string;
		payload: T;
		method: ValidMethods;
	};
}
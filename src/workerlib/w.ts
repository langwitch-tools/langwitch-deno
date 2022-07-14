import * as uuid from "https://esm.sh/uuid@8.3.2";
import * as R from "https://esm.sh/ramda";
const uid = () => uuid.v4();
export type AnyFn = (...args: any[]) => any;
export type PoolModule = { [key: string]: AnyFn };
export type Promisify<T> = T extends Promise<unknown> ? T : Promise<T>;
export type Depromisify<A> = A extends Promise<infer T> ? T : A
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

export const expose =
	<Obj extends { [key: string]: AnyFn }>(obj: Obj) =>
	(w: any) => {
		w.onmessage = async <
			MethodName extends keyof Obj & string,
			InvokedFn extends Obj[MethodName],
			Payload extends Parameters<InvokedFn>
		>(
			m: MessageToWorker<Payload, MethodName>
		) => {
			if (m.data.method === "SHUTDOWN") {
				w.postMessage({
					payload: "closing now",
					id: m.data.id,
				});
				w.close();
			}
			const fn = obj[m.data.method];
			if (fn === undefined) {
				throw new Error(
					`Attempted to call ${
						m.data.method
					} which was not defined. Defined methods are ${JSON.stringify(
						Object.keys(obj)
					)}`
				);
			}
			const result = await Promise.resolve(fn(...m.data.payload));
			w.postMessage({
				payload: result,
				id: m.data.id,
			});
		};
	};

const sendMsg =
	(worker: Worker) =>
	<A, B, V>(method: V, msg: A): Promise<B> => {
		const id = uid();
		const msgToWorker = {
			id: id,
			payload: msg,
			method: method,
		};
		const newP: Promise<B> = new Promise((resolve) => {
			const listenerFn = (m: MessageFromWorker<B>) => {
				if (m.data.id !== id) {
					return;
				} else {
					worker.removeEventListener("message", listenerFn);
					resolve(m.data.payload);
				}
			};
			worker.addEventListener("message", listenerFn);
		});
		worker.postMessage(msgToWorker);
		return newP;
	};

export class Pool<T extends PoolModule> {
	private workers: Worker[] = [];
	private counter = 0;
	private obj: T;
	constructor(obj: T) {
		this.obj = obj;
	}

	static init<T extends PoolModule>(
		obj: T,
		modulePath: URL,
		numWorkers: number
	) {
		const pool = new Pool(obj);
		pool.workers = R.range(0, numWorkers).map(
			() =>
				new Worker(modulePath.href, {
					type: "module",
				})
		);
		return pool;
	}

	get<
		MethodName extends keyof T,
		InvokedFn extends T[MethodName],
		Payload extends Parameters<InvokedFn>,
		ResultType extends ReturnType<InvokedFn>
	>(method: MethodName, workerNo?: number): (...p: Payload) => Promisify<ResultType> {
		this.counter =
			this.counter >= this.workers.length - 1 ? 0 : this.counter + 1;
		return (...p: Payload) =>
			sendMsg(this.workers[workerNo || this.counter])(method, p) as Promisify<ResultType>;
	}

	createProxy(workerNo?: number): PromisedModule<T> {
		const keys: (keyof T)[] = Object.keys(this.obj);
		const proxy = new Object() as PromisedModule<T>;
		keys.forEach((k) => (proxy[k] = this.get(k, workerNo)));
		return proxy;
	}

	async shutdown(){
		await Promise.all(this.workers.map(async (w) => await sendMsg(w)("SHUTDOWN", null)));
	}
}

//const POOL = Pool.init(exposed, new URL("./w.ts", import.meta.url), 1);

//const SomeWorker = POOL.createProxy();
//await SomeWorker.add(5).then(console.log);
// 87 ms
// needs a unique handler, then remove inside after the handle
// queue loop pop?
// expose a fn via pool.queue, when called, acts like an async version of the original type.

export class Observable<T> {
	subscribers: ((v: T) => unknown)[] = [];
	value: () => Promise<T>;
	constructor(value: () => Promise<T> | T) {
		this.value = () => Promise.resolve(value())
	}
	sub(fn: (v: T) => unknown) {
		this.subscribers.push(fn);
	}
	apply(fn: (a: T) => Promise<T> | T) {
		const newVal = this.value().then(fn);
		this.value = () => newVal;
		this.subscribers.forEach((f) => this.value().then(f));
	}
	async next(): Promise<T> {
		return await new Promise((resolve) => this.sub((v) => resolve(v)));
	}
	curr(): Promise<T> {
		return this.value();
	}
	pipe<A>(fn: (a: T) => Promise<A> | A): Observable<A> {
		const newVal = this.value().then(fn);
		const obs = new Observable(() => newVal);
		this.subscribers.push((val) => obs.apply(() => fn(val)));
		return obs;
	}
}

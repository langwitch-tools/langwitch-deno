export const map = <A, B>(fn: (a0: A) => B) =>
	async function* (iter: AsyncIterableIterator<A>) {
		for await (const item of iter) {
			yield fn(item);
		}
	};

export const enumerate = async function* <A>(iter: AsyncIterableIterator<A>) {
    let counter = 0;
	for await (const item of iter) {
		yield [counter, item] as [number, A];
        counter += 1;
	}
};

export const flatten = async function* <A>(iter: AsyncIterableIterator<A[]>) {
	for await (const item of iter) {
		for (let i = 0; i < item.length; i++) {
			yield item[i];
		}
	}
};

export const merge = <A>(iters: AsyncIterableIterator<A>[]): AsyncIterableIterator<A> => (async function*(){
	for (const iter of iters) {
		yield* iter;
	}
})();

export const partition = <T>(fn: (a0: T) => boolean) =>
	async function* (iter: AsyncIterableIterator<T>) {
		let chunk: T[] = [];
		for await (const item of iter) {
			if (fn(item)) {
				yield chunk;
				chunk = [];
			} else {
				chunk.push(item);
			}
		}
	};

export const filter = <T>(fn: (a0: T) => boolean) =>
	async function* (iter: AsyncIterableIterator<T>) {
		for await (const item of iter) {
			if (fn(item)) {
				yield item;
			}
		}
	};



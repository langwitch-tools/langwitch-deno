
export const cached = <K extends string | number | symbol, V>(fn: (a0: K) => V) => (cache: Map<K, Readonly<V>>) => (key: K): Readonly<V> => cache.get(key) || cache.set(key, Object.freeze(fn(key))).get(key)!;

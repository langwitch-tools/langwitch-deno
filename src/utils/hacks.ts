
export {};


const aMap = function<T, A>(this: Array<T>, fn: (a: T, i: number) => Promise<A>): Promise<A[]> {
    return Promise.all(this.map(fn));
}

const aForEach = function<T>(this: Array<T>, fn: (a: T, i: number) => Promise<void>): Promise<void[]> {
    return Promise.all(this.map(fn));
}

const choose = function<T>(this: Array<T>): T {
    return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.choose = choose;
Array.prototype.aMap = aMap;
Array.prototype.aForEach = aForEach;
export const dummy = function() {};

// Ensures that Typescript recognises our new methods.
declare global {
    interface Array<T> {
        choose<T>(): T;
        aMap<A>(fn: (a: T, i: number) => Promise<A>): Promise<A[]>;
        aForEach(fn: (a: T, i: number) => Promise<void>): Promise<void[]>;
    }
}

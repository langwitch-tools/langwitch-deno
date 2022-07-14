import { Maybe } from "./Maybe.ts";

export {};


const get = function<T>(this: Array<T>, idx: number): Maybe<T> {
    return this[idx] === undefined ? Maybe.Nothing() : Maybe.Just(this[idx]);
}

const aMap = function<T, A>(this: Array<T>, fn: (a: T, i: number) => Promise<A>): Promise<A[]> {
    return Promise.all(this.map(fn));
}

const aForEach = function<T>(this: Array<T>, fn: (a: T, i: number) => Promise<void>): Promise<void[]> {
    return Promise.all(this.map(fn));
}

Array.prototype.get = get;
Array.prototype.aMap = aMap;
Array.prototype.aForEach = aForEach;
export const dummy = function() {};

// Ensures that Typescript recognises our new methods.
declare global {
    interface Array<T> {
        get(idx: number): Maybe<T>;
        aMap<A>(fn: (a: T, i: number) => Promise<A>): Promise<A[]>;
        aForEach(fn: (a: T, i: number) => Promise<void>): Promise<void[]>;
    }
}

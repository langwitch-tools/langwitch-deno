export class Maybe<T> {
    constructor(public value: T | undefined) { }
    static Nothing<T>(): Maybe<T> {
        return new Maybe<T>(undefined);
    }
    static Just<T>(value: T): Maybe<T> {
        return new Maybe<T>(value);
    }
    map<U>(fn: (value: T) => U): Maybe<U> {
        return this.value === undefined ? Maybe.Nothing() : Maybe.Just(fn(this.value));
    }
    chain<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
        return this.value === undefined ? Maybe.Nothing() : fn(this.value);
    }
    get(): T | undefined {
        return this.value;
    }
    getOrElse<U>(defaultValue: U): T | U {
        return this.value === undefined ? defaultValue : this.value;
    }
    getOrThrow(message: string): T {
        if (this.value === undefined) {
            throw new Error(message);
        }
        return this.value;
    }
}

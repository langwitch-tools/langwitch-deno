// colors for differentiation
// config-type initialisation model
// does not actually do stuff, just pushes the actions
// configurable
// monadic interface
// inputs
// filters
// outputs (i.e sinks)
// so side-effects are handled transparently via configuration.
// async iterable - await a promise that resolves to those things being called
// like a lazy iterator at the end
import { Stream } from "../deps.ts";
export type LogConfig = {
    sinks: () => WritableStream[],
    readers: () => ReadableStream[]
};

export const logger = (config: LogConfig) => {
    new ReadableStream({
        
    })
}
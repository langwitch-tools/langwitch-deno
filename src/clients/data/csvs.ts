import { readCSVObjects } from "https://deno.land/x/csv@v0.7.5/mod.ts";
import { StringReader } from "https://deno.land/std@0.148.0/io/readers.ts";
import Fuse from "https://deno.land/x/fuse@v6.4.1/dist/fuse.esm.js";

export type Flatten<T> = T extends Record<string, unknown>
	? { [k in keyof T]: T[k] }
	: never;
export type Entry<
	T extends string,
	Separator extends string
> = T extends `${infer P1},${infer P2}`
	? Flatten<Record<P1, string> & Entry<P2, Separator>>
	: Record<T, string>;
export type Csv<T extends string> = T extends `${infer Row1}\n${string}`
	? Entry<Row1, ",">
	: T;
export type Tsv<T extends string> = T extends `${infer Row1}\n${string}`
	? Entry<Row1, ",">
	: T;
// type Entry<T> = T extends `${infer C1},${infer C2},${infer C3},${infer C4},${infer C5},${infer C6},${infer C7},${infer C8},${infer C9}` ? Record<C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9, string> : never;

export type GetHeaders<T extends string> = Flatten<Csv<T>>;
export type GetHeadersTsv<T extends string> = Flatten<Tsv<T>>;

Object.prototype.toArray = async function <T>(this: AsyncIterable<T>) {
	const out = [];
	for await (const item of this) {
		out.push(item);
	}
	return out;
};

declare global {
	interface Object {
		toArray: <T>(this: AsyncIterable<T>) => Promise<Array<T>>;
	}
}

export type FuseType<T> = {
	search: (query: string) => {
		item: T;
		refIndex: number;
	}[];
};

export const engine = async <T extends string>(
	csv: T,
	excludeKeys?: string[]
) =>
	(await readCSVObjects(new StringReader(csv))
		.toArray()
		.then(
			(data) =>
				new Fuse(data, {
					keys: Object.keys(data[0]).filter((k) =>
						excludeKeys ? !excludeKeys.includes(k) : true
					),
					threshold: 1.0,
					ignoreLocation: true,
				})
		)) as FuseType<GetHeaders<T>>;

export const engineFromStrings = (data: string[]) =>
	new Fuse(data, { threshold: 1.0, ignoreLocation: true }) as FuseType<string>;

export const engineFromTsv = <T extends string>(tsv: T) => new Fuse(tsv.split("\n").slice(1, -1).map(e => e.split("\t").filter(e => e.length > 0).join(" ")), { threshold: 1.0, ignoreLocation: true }) as FuseType<string>

import { aPipe } from "../utils/utils.ts";
import { readLines } from "../deps.ts";

export const readLazy = (blockSize: number) =>
	aPipe([
		(fname: string) => Deno.open(fname, { read: true }),
		async function* (file: Deno.FsFile) {
			const size = await file.stat().then((s) => s.size);
            const reader = async (i: number) => {
                const buf = new Uint8Array(blockSize);
                await Deno.seek(file.rid, i, Deno.SeekMode.Start);
                await Deno.read(file.rid, buf);
                const text = new TextDecoder().decode(buf);
                return text;
            };
			for (let i = 0; i < size; i+=blockSize) {
                //console.log(i);
				yield await reader(i)
			}
		},
	]) as unknown as (fname: string) => Promise<AsyncIterableIterator<string>>

export const toLines = async function* (iter: AsyncIterableIterator<string>) {
    let buffer = "";
    for await (const chunk of iter) {
        buffer += chunk;
        if (buffer.includes("\n")) {
            const lines = buffer.split("\n");
            buffer = lines.pop()!;
            for (const line of lines) {
                yield line;
            }
        }
    }
}
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


// TODO: Take, slice, flatMap, fold


export const readLinesLazy = async (filename: string) => readLazy(65_500_000)(filename).then(toLines)
export const readLinesStdin = async () => await readLines(Deno.stdin);

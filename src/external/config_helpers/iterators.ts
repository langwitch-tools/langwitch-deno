import { aPipe, emptyIter } from "../../resource/utils/utils.ts";
import { AIO, pDeno, pfetch } from "../../resource/types/purify.ts";
import {
	readLines,
	BufReader,
	//BufWriter,
	Stream
} from "../../deps.ts";

export const emptyAIOIter = () => AIO.ofS(() => emptyIter<string>());

export const intoLines = (a0: ReadableStreamDefaultReader<Uint8Array> | undefined) =>
	a0
		? aPipe([
				Stream.readerFromStreamReader,
				(r: Deno.Reader) => new BufReader(r),
				readLines,
		  ])(a0)
		: emptyIter<string>(); // pure

export const openLinesFromFile = (name: string) =>
	pDeno
		.open(name, { read: true })
		.map((f) => f.readable.getReader())
		.map(intoLines);

export const openLinesFromURL = (url: string) =>
	pfetch(url)
		.map((f) => f.body?.getReader())
		.map(intoLines);

export const openLinesFromStdout = (cmd: string[]) =>
	pDeno
		.run({
			cmd,
			stdout: "piped",
			stdin: "null",
		})
		.map((o) => o.stdout?.readable.getReader())
		.map(intoLines);
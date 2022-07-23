import {
	readLines,
	BufReader,
	//BufWriter,
	Stream,
	ProgressBar,
	percentageWidget,
	amountWidget,
} from "../deps.ts";
import { GetSentencesFrom } from "./ExternalConfig.ts";
import { aPipe, emptyIter } from "../utils/utils.ts";
import { AIO, pDeno, pfetch } from "../types/purify.ts";

const emptyAIOIter = () => AIO.ofS(() => emptyIter<string>());

const intoLines = (a0: ReadableStreamDefaultReader<Uint8Array> | undefined) =>
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

export const makeIter = (cfg: Partial<GetSentencesFrom>) => {
	const maxSentences = cfg.collect_this_many_sentences
		? cfg.collect_this_many_sentences
		: 65000;
	const localFileAIO = cfg.saved_file
		? openLinesFromFile(cfg.saved_file)
		: emptyAIOIter(); //multiple files???

	const urlAIO = cfg.url ? openLinesFromURL(cfg.url) : emptyAIOIter();

	const stdoutAIO = cfg.capture_output_from_command
		? openLinesFromStdout(cfg.capture_output_from_command)
		: emptyAIOIter();

	let total = 0;
	const widgets = [percentageWidget, amountWidget];
	const pb = new ProgressBar({
		total: cfg.collect_this_many_sentences,
		widgets,
	});

	const interval = setInterval(async () => {
		await pb.update(total);
	}, 50);

	const iterators = localFileAIO.fmap((fileIter) => {
		return urlAIO.fmap((urlIter) => {
			return stdoutAIO.map((stdoutIter) =>
				(async function* () {
					for (const iter of [fileIter, urlIter, stdoutIter]) {
						for await (const item of iter) {
							if (total > maxSentences) {
								break;
							}
							yield item;
							total += 1;
						}
					}
					clearInterval(interval);
					await pb.finish();
				})()
			);
		});
	});

	return iterators;
};

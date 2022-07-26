import { tty, colors } from "../deps.ts";
import { GetSentencesFrom } from "./ExternalConfig.ts";
import { AIO } from "../types/purify.ts";
import {
	openLinesFromFile,
	emptyAIOIter,
	openLinesFromURL,
	openLinesFromStdout,
} from "./iterators.ts";
import { getOpus } from "../clients/opus.ts";

getOpus;
export const makeIter = (cfg: Partial<GetSentencesFrom>) => {
	const maxSentences = cfg.total ? cfg.total : 200000;
	const localFileAIO = cfg.filename ? openLinesFromFile(cfg.filename) : null; //multiple files???

	const urlAIO = cfg.url ? openLinesFromURL(cfg.url) : null;

	const stdoutAIO = cfg.command_stdout
		? openLinesFromStdout(cfg.command_stdout)
		: null;

	const defaults = {
		total: maxSentences,
		chunk_size: 350,
		portion_to_keep: 0.7,
		max_sentence_length: 9,
	};

	const opusAIO = cfg.opus
		? getOpus({ ...defaults, ...cfg })(cfg.opus)
		: null;

	let total = 0;

	const progressBar = (function* () {
		tty.eraseScreen();
		console.log(cfg);
		const ec = new TextEncoder();
		for (;;) {
			yield;
			Deno.stdout.write(
				ec.encode(colors.brightMagenta(total.toString()) + "\r")
			);
		}
	})();

	const finalIter = localFileAIO
		? localFileAIO
		: urlAIO
		? urlAIO
		: stdoutAIO
		? stdoutAIO
		: opusAIO
		? opusAIO
		: emptyAIOIter();

	const iterators = finalIter.map((iter) =>
		(async function* () {
			for await (const item of iter) {
				if (total > maxSentences) {
					break;
				}
				yield item;
				total += 1;
				if (total % 50 == 0) {
					progressBar.next();
				}
			}
		})()
	);

	return iterators;
};

export const makeIters = (cfg: Partial<GetSentencesFrom>[]) =>
	AIO.ofS(async function* () {
		for (const c of cfg) {
			yield* await makeIter(c).run();
		}
	});

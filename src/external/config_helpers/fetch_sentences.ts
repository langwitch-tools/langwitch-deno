import { colors, tty } from "../../deps.ts";
import { AIO } from "../../resource/types/purify.ts";
import { map, merge } from "../../resource/utils/gens.ts";
import { aPipe } from "../../resource/utils/utils.ts";
import { getOpus } from "../clients/opus.ts";
import { GetSentencesFrom } from "./ExternalConfig.ts";
import {
	emptyAIOIter, openLinesFromFile, openLinesFromStdout, openLinesFromURL
} from "./iterators.ts";
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

	return localFileAIO
		? localFileAIO
		: urlAIO
		? urlAIO
		: stdoutAIO
		? stdoutAIO
		: opusAIO
		? opusAIO
		: emptyAIOIter();
};

export const makeIters = (cfg: Partial<GetSentencesFrom>[]) =>
	AIO.ofS(async function* () {
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
		yield* await aPipe([
			() => cfg.aMap((c) => makeIter(c).run()),
			merge,
			map((r: string) => {
				total += 1;
				if (total % 500 === 0) {
					progressBar.next();
					//console.log(r);
				}
				return r;
			})
		])();
	});

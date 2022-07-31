import { Ansi } from "../../../deps.ts";

import { Hider } from "../../../internal/hints/hint.ts";
import { AIO, DoNothing, plog } from "../../..//resource/types/purify.ts";
import { AwaitingAnswer, DisplayResults } from "./../view.ts";
import { ExternalConfigInterface } from "../view.ts";
import { LanguageMetadata } from "../../../internal/frontend/context.ts";
import { Stats } from "../../../internal/state/state.ts";
import { createHint, hideLevels } from "./hints.ts";
import { green, b, linebreak, white, _blue, it } from "./style.ts";

export const displayStats = (stats: Stats) =>
	AIO.do(
		green
			.$(b)
			.log(
				`ꕥ you have learned ${stats.knownCount} words in ${stats.lang} ꕥ`
			)
	);

export const clear = () =>
	AIO.do(
		AIO.ofA(async () => {
			await Ansi.clearScreen();
			await Ansi.goTo(0, 0);
		}),
		plog.log("\x1b]11;#000000")
	);

type AwaitAnswerReqs = {
	hider: Hider;
	config: ExternalConfigInterface;
	stats: Stats;
	prompt: AwaitingAnswer<LanguageMetadata>;
};

export const awaitAnswer = async ({
	hider,
	config,
	stats,
	prompt,
}: AwaitAnswerReqs) =>
	AIO.do(
		clear(),
		displayStats(stats),
		linebreak(),
		white.log(
			"try translating this sentence!\ntype 'h' for some hints ૮ ˶ᵔ ᵕ ᵔ˶ ა"
		),
		linebreak(),
		_blue.$(b).$(it).log(`>> "${prompt.ctxs[0].metadata.translation}"`),
		linebreak(),
		plog.log(
			"%c" +
				"♡♡ hint: " +
				createHint(prompt.hideLevel)(hider)(
					await config.convertText
						.map(async (fn) => (await Promise.all(prompt.ctxs.map(e => e.metadata.original).map(fn)))[0])
						.getOrElse(() => prompt.ctxs[0].metadata.original)
				),
			"color: yellow; font-weight: bold"
		),
		linebreak(),
		prompt.newWord !== undefined &&
			prompt.newWord !== null &&
			prompt.newWord != "undefined" &&
			prompt.hideModeForFocusWord != null
			? plog.log(
					`%c♡♡ the new word is: "${hideLevels(
						prompt.hideModeForFocusWord
					)(
						await config.convertText
							.map((fn) => fn(prompt.newWord))
							.getOrElse(() => prompt.newWord)
					)}"`,
					"font-style: italic; color: magenta"
			  )
			: DoNothing,
		linebreak(),
		plog.log(
			"%c🅷  = give me more hints\n%c🅺  = i know everything here\n%c🆇  = save and exit",
			"color: #cb2290; font-style: italic",
			"color: #9022ab; font-style: italic",
			"color: #5052ab; font-style: italic"
		),
		linebreak()
			.noAwait(() =>
				config.fetchAudio
					.map((fn) => {
						fn(prompt.ctxs[0].metadata.original);
						return DoNothing;
					})
					.getOrElse(() => DoNothing)
			)
			.noAwait(() =>
				config.fetchData
					.map((fn) => {
						fn(prompt.ctxs[0].metadata.original).run();
						return DoNothing;
					})
					.getOrElse(() => DoNothing)
			)
		//magenta.$(it).log("Your guess:")
	);

// remember to actually ask!

type DisplayResultReqs = {
	config: ExternalConfigInterface;
	stats: Stats;
	results: DisplayResults<LanguageMetadata>;
};
export const displayResults = async ({
	config,
	stats,
	results,
}: DisplayResultReqs) =>
	AIO.do(
		clear(),
		displayStats(stats),
		linebreak(),
		plog.log("%c(„ᵕᴗᵕ„) your guess:", "color: yellow"),
		green.$(b).log(" " + results.userAnswer),
		linebreak(),
		plog.log("%c(❀ˆᴗˆ) my guess:", "color: yellow"),
		green
			.$(b)
			.log(
				" " +
					(await config.convertText
						.map((fn) => fn(results.ctxs[0].metadata.original))
						.getOrElse(() => results.ctxs[0].metadata.original))
			),
		AIO.do(
			linebreak(),
			await config.fetchData
				.map((fn) => fn(results.ctxs[0].metadata.original).fmap(plog.log))
				.getOrElse(() => DoNothing)
		),
		linebreak(),
		/*plog.log("💐 The differences between our guesses:"),
		getDiff(results).reduce(
			(acc, part) =>
				part.added
					? acc.chain(part.value)(blue)
					: part.removed
					? acc.chain(part.value)(magenta.$(b))
					: acc.chain(part.value)(green.$(b)),
			W("")
		).log(""),
		linebreak(),*/
		...(await results.conceptScores.aMap(
			async ([concept, score]) =>
				await config.convertText
					.map(async (fn) =>
						plog.log(
							`%c${concept}  = ${await fn(
								concept
							)} %c ➤ ${Math.round(score * 100)}`,
							"color: magenta; font-weight: bold",
							"color: cyan; font-weight: bold"
						)
					)
					.getOrElse(() =>
						plog.log(
							`%c${concept} ➤ ${Math.round(score * 100)}`,
							"color: magenta; font-weight: bold"
						)
					)
		)),
		linebreak().noAwait(() =>
			config.playAudio
				.map((fn) => fn(results.ctxs[0].metadata.original))
				.getOrElse(() => DoNothing)
		)
		//plog.log("Press enter to continue!") // other options go here
	);

// it's better to separate the asks because we might want to stack/change the implementation later.

// TODO: Transliteration of user answers

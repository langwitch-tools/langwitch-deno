import { process, Input, prompt, Ansi } from "../deps.ts";
import { R, Diff } from "../pure_deps.ts";

import { mark } from "../frontend/marker.ts";
import { Hider } from "../hints/hint.ts";
import { AIO, DoNothing, plog } from "../types/purify.ts";
import { punctuation } from "../utils/chars.ts";
import { Config } from "./Config.ts";
import { AwaitingAnswer, DisplayResults, Stats } from "./state.ts";

import * as V from "./shell.ts";
import { ExternalConfigInterface } from "../config_helpers/ConfigInterface.ts";
export const ask = (question: string) =>
	AIO.ofA(async (): Promise<string> => {
		//process.stdout.write("> ");
		//const arr = new Uint8Array(Array.from({ length: 100000 }));
		//await Deno.stdin.read(arr);
		//const zeroIdx = arr.findIndex((i) => i === 0);
		//return new TextDecoder().decode(arr.slice(0, zeroIdx - 1));
		return await prompt([
			{
				name: "answer",
				message: question,
				type: Input,
			},
		]).then((s) => s.answer!);
	});

interface Styler {
	style: () => string | string[];
}

const W = (styles: string[] | string, msgs: string[] = [], join = false) => {
	const stylesList = typeof styles === "string" ? [styles] : styles;
	return {
		_: (style: string) => W([...stylesList, style].join("; "), [], true),
		$: (other: Styler) =>
			W([[...stylesList, ...other.style()].join("; ")], [], true),
		style: () => stylesList,
		log: (msg: string) =>
			join
				? plog.log("%c" + msg, stylesList.join("; "))
				: plog.log("%c" + [...msgs, msg].join("%c"), ...stylesList),
		chain: (msg: string) => (style: Styler) =>
			W([...stylesList, ...style.style()], [...msgs, msg]),
	};
};

export const hint = (text: string) =>
	Array.from(text)
		.map((c) => (c === " " || punctuation.has(c) ? c : "•"))
		.join("");

export const countChars = (text: string) =>
	text
		.split(" ")
		.map((w) => `${w} (${w.length})`)
		.join(" ");
export const partialHint =
	(charsHidden: number) => (h: Hider) => (sentence: string) =>
		sentence
			.split(" ")
			.map((w) => h.show(charsHidden)(w))
			.join(" ");
export const createHint = (charsHidden: number) => (h: Hider) =>
	R.pipe(partialHint(charsHidden)(h), countChars);

const [green, white, _yellow, _blue, _magenta, b, _ul, it] = [
	"color: green",
	"color: white",
	"color: yellow",
	"color: #74cdff",
	"color: magenta",
	"font-weight: bold",
	"text-decoration: underline",
	"font-style: italic;",
].map((s) => W(s));

const linebreak = () =>
	plog.log("%c┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄", "color: grey");
export const displayStats = (stats: Stats) =>
	AIO.do(
		green
			.$(b)
			.log(
				`ꕥ you have learned ${stats.knownCount} words in ${stats.lang} ꕥ`
			)
	);

export const clear = () =>
	AIO.ofA(async () => {
		await Ansi.clearScreen();
		await Ansi.goTo(0, 0);
	});
export const awaitAnswer =
	<T extends ExternalConfigInterface>(config: Config<T>) =>
	(stats: Stats) =>
	async (prompt: AwaitingAnswer) =>
		AIO.do(
			clear(),
			displayStats(stats),
			linebreak(),
			white.log(
				"try translating this sentence!\ntype 'h' for some hints ૮ ˶ᵔ ᵕ ᵔ˶ ა"
			),
			linebreak(),
			_blue.$(b).$(it).log(`>> "${prompt.ctx.metadata.translation}"`),
			linebreak(),
			plog.log(
				"%c" +
					"♥︎♥︎ hint: " +
					createHint(prompt.hideLevel)(await config.hider())(
						await config.externalConfig.convertText
							.map((fn) => fn(prompt.ctx.metadata.original))
							.getOrElse(() => prompt.ctx.metadata.original)
					),
				"color: blue; font-weight: bold"
			),
			linebreak(),
			prompt.newWord !== undefined &&
				prompt.newWord !== null &&
				prompt.newWord != "undefined" &&
				prompt.hideModeForFocusWord != null
				? plog.log(
						`%c♥︎♥︎ the new word is: "${hideLevels(
							prompt.hideModeForFocusWord
						)(
							await config.externalConfig.convertText
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
			linebreak().and(() =>
				V.createAudio(config)(prompt.ctx.metadata.original)
			)
			//magenta.$(it).log("Your guess:")
		);

// remember to actually ask!

export const normalise = (s: string) => s.toLowerCase();
export const tokenise = (s: string) => s.split(" ");
export const words = R.pipe(normalise, tokenise);
export const applyExpr =
	(fn: (ln: number, n: number) => boolean) => (text: string) =>
		Array.from(text).map((_, i) => fn(text.length, i));

export const firstLetters = applyExpr((_, i) => (i === 0 ? true : false));
export const lastLetters = applyExpr((ln, i) => (i === ln - 1 ? true : false));
export const mergeMaps = (a1: Array<boolean>) => (a2: Array<boolean>) =>
	Array.from({ length: Math.min(a1.length, a2.length) })
		.map(() => true)
		.map((_, i) => a1[i] || a2[i]);
export const firstAndLastLetters = (text: string) =>
	mergeMaps(firstLetters(text))(lastLetters(text));

export const hideLetters =
	(hiddenSymbol = "?") =>
	(hider: (text: string) => Array<boolean>) =>
	(text: string) =>
		Array.from(text)
			.map((c, i) => (hider(text)[i] === true ? c : hiddenSymbol))
			.join("");
export const defaultHider = hideLetters("?");
export const hideLevels = (level: "first" | "last" | "both" | "none" | null) =>
	level === "first"
		? defaultHider(firstLetters)
		: level === "last"
		? defaultHider(lastLetters)
		: level === "both"
		? defaultHider(firstAndLastLetters)
		: level === "none"
		? (text: string) => text
		: (_: string) => "";

const _getDiff = (results: DisplayResults) =>
	Diff.diffChars(
		normalise(results.userAnswer),
		normalise(results.referenceAnswer)
	);

export const displayResults =
	<T extends ExternalConfigInterface>(config: Config<T>) =>
	(stats: Stats) =>
	async (results: DisplayResults) =>
		AIO.do(
			clear(),
			displayStats(stats),
			linebreak(),
			plog.log("%c(„ᵕᴗᵕ„) your guess:", "color: cyan"),
			green.$(b).log(" " + results.userAnswer),
			linebreak(),
			plog.log("%c(❀ˆᴗˆ) my guess:", "color: cyan"),
			green
				.$(b)
				.log(
					" " +
						(await config.externalConfig.convertText
							.map((fn) => fn(results.referenceAnswer))
							.getOrElse(() => results.referenceAnswer))
				),
			AIO.do(
				linebreak(),
				results.cache.contextInfo
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
					await config.externalConfig.convertText
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
			linebreak().and(() => results.cache.audioPlayer)
			//plog.log("Press enter to continue!") // other options go here
		);

// it's better to separate the asks because we might want to stack/change the implementation later.

// TODO: Transliteration of user answers

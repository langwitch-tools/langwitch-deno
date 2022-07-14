import * as process from "https://deno.land/std@0.145.0/node/process.ts";
//import ansi from "https://esm.sh/ansi-escape-sequences";
import * as Diff from "https://esm.sh/diff";
import * as R from "https://esm.sh/ramda";
import { mark } from "../frontend/marker.ts";
import { Hider } from "../hints/worker.ts";
import { AIO, DoNothing, plog } from "../types/purify.ts";
import { punctuation } from "../utils/chars.ts";
import { Config } from "./Config.ts";
import { AwaitingAnswer, DisplayResults, Stats } from "./state.ts";
import {
	Input,
	prompt,
} from "https://deno.land/x/cliffy@v0.24.2/prompt/mod.ts";
export const ask = (question: string) =>
	AIO.ofA(async (): Promise<string> => {
		//process.stdout.write("> ");
		//const arr = new Uint8Array(Array.from({ length: 100000 }));
		//await Deno.stdin.read(arr);
		//const zeroIdx = arr.findIndex((i) => i === 0);
		//return new TextDecoder().decode(arr.slice(0, zeroIdx - 1));
		return await prompt([{
			name: "answer",
			message: question,
			type: Input,
		}]).then(s => s.answer!);
	});

interface Styler {
	style: () => string | string[];
}

const W = (styles: string[] | string, msgs: string[] = [], join = false) => {
	const stylesList = typeof styles === "string" ? [styles] : styles;
	return {
		_: (style: string) => W([...stylesList, style].join("; "), [], true),
		$: (other: Styler) => W([[...stylesList, ...other.style()].join("; ")], [], true),
		style: () => stylesList,
		log: (msg: string) =>
			join ? plog.log("%c" + msg, stylesList.join("; ")) : plog.log("%c" + [...msgs, msg].join("%c"), ...stylesList),
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
export const createHint = (charsHidden: number) => (h: Hider) => R.pipe(partialHint(charsHidden)(h), countChars);

const [green, white, yellow, blue, magenta, b, ul, it] = [
	"color: green",
	"color: white",
	"color: yellow",
	"color: brightBlue",
	"color: magenta",
	"font-weight: bold",
	"text-decoration: underline",
	"font-style: italic;",
].map((s) => W(s));

const linebreak = () => plog.log("%c┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄", "color: grey");
export const displayStats = (stats: Stats) =>
	AIO.do(
		green
			.$(b)
			.log(
				`🌱 You have learned ${stats.learnCount} words in ${stats.lang} 🌱`
			)
	);

export const clear = () => AIO.ofS(() => process.stdout.write("\x1b[2J")); //\x1b[2J
export const awaitAnswer =
	(config: Config) => (stats: Stats) => async (prompt: AwaitingAnswer) =>
		AIO.do(
			clear(),
			displayStats(stats),
			linebreak(),
			white.log(
				"Try translating this sentence!\nIf you don't know, just give me your best shot!"
			),
			linebreak(),
			yellow.$(b).$(it).log(`>> "${prompt.ctx.metadata.translation}"`),
			linebreak(),
			plog.log("%c" + "Hint: " + createHint(prompt.hideLevel)(await config.hider())(
				prompt.ctx.metadata.original
			), "color: blue; font-weight: bold"),
			linebreak(),
			prompt.newWord !== undefined &&
				prompt.newWord !== null &&
				prompt.newWord != "undefined" &&
				prompt.hideModeForFocusWord != null
				? plog.log(
							`%cThe new word is: "${hideLevels(
								prompt.hideModeForFocusWord
							)(
								prompt.newWord
							)}"`,
							"font-style: italic; color: magenta"
						)
				: DoNothing,
				linebreak(),
			plog.log("🅷  = Give me more hints | 🅺  = I know everything here | 🆇  = Save and exit"),
			linebreak(),
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

const getDiff = (results: DisplayResults) =>
	Diff.diffChars(
		normalise(results.userAnswer),
		normalise(results.referenceAnswer)
	);
const getScores = (results: DisplayResults): [string, number][] =>
	results.conceptScores
		? results.conceptScores
		: mark(words(results.referenceAnswer))(results.userAnswer);
export const displayResults = (stats: Stats) => (results: DisplayResults) =>
	AIO.do(
		clear(),
		displayStats(stats),
		plog.log("%c🌷 Your guess:", "color: cyan"),
		green.$(b).log(" " + results.userAnswer),
		linebreak(),
		plog.log("%c🌻 My guess:", "color: cyan"),
		green.$(b).log(" " + results.referenceAnswer),
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
		...getScores(results).map(([concept, score]) =>
			plog.log(`%c${concept} ➤ ${score}`, "color: magenta; font-weight: bold")
		),
		linebreak(),
		//plog.log("Press enter to continue!") // other options go here
	);

// it's better to separate the asks because we might want to stack/change the implementation later.

// TODO: Transliteration of user answers

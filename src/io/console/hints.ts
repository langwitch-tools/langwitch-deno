import { R } from "../../pure_deps.ts";
import { Hider } from "../../hints/hint.ts";
import { punctuation } from "../../utils/chars.ts";

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
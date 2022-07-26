export interface Translation {
	eng: string,
	other: string
}

export type Norm = number;
export const isNorm = (n: number): Norm => {
	if (n > 1 || n < 0) {
		throw new TypeError("Number was out of expected range");
	} else {
		return n;
	}
};

export type ProcessedLine<P> = {
	line: Translation;
	properties: P;
};
export type Constraint = (line: Translation) => boolean;
export type Scorer = (line: Translation) => Norm;
export type ToBoolean = <A, B>(f: (arg0: A) => B) => (arg0: A) => boolean;

export type WeightedScorer = {
	score: Scorer;
	weight: number;
};
export const check = (checkers: Constraint[]) => (line: Translation) =>
	checkers.map((s) => s(line)).reduce((prev, curr) => prev && curr, true);

export const score = (scorers: WeightedScorer[]) => (line: Translation) =>
	scorers
		.map((s) => s.score(line) * s.weight)
		.reduce((prev, curr) => prev + curr, 0);

export const clean = (line: string) =>
	line.replace(/[\p{Punctuation}\p{Number}\p{Control}]/gu, "");
export const tokenise = (line: string) => line.split(/\s+/gu);
export const codeSpanWidth = (line: Translation) => {
	const letters = Array.from(line.other).map((c) => c.charCodeAt(0));
	const max = Math.max(...letters);
	const min = Math.min(...letters);
	return max - min;
};
export const redundancy = <T>(words: T[]) => new Set(words).size / words.length;
export const redundancyPerWord = (line: Translation) =>
	1 - redundancy(tokenise(line.other));
export const uppercasePerChar = (line: Translation) =>
	(line.other.split("").slice(1).join("").match(/\p{Uppercase}/gu) || []).length / line.other.length;
export const noisePerChar = (line: Translation) =>
	1 - clean(line.other).length / line.other.length;

export const commonWords = (tr: Translation) => {
	const s1 = new Set(tokenise(tr.eng));
	const s2 = new Set(tokenise(tr.other));
	const originalSize = s1.size + s2.size;
	s2.forEach((s) => s1.add(s));
	const afterAdded = s1.size;
	const diff = afterAdded - originalSize;
	return 1 - (diff / originalSize);
}
export const lengthDifference = (tr: Translation) =>
	Math.abs(1 - (tr.eng.length / tr.other.length));
type DefaultProperties = {
	redundancyPerWord: number;
	uppercasePerChar: number;
	noisePerChar: number;
	commonWords: number;
	lengthDifference: number;
	//codeSpanWidth: (avg: number) => number;
};

export const calculateDefaults = (
	tl: Translation
): ProcessedLine<DefaultProperties> => ({
	line: tl,
	properties: {
		redundancyPerWord: redundancyPerWord(tl),
		uppercasePerChar: uppercasePerChar(tl),
		noisePerChar: noisePerChar(tl),
		commonWords: commonWords(tl),
		lengthDifference: lengthDifference(tl),
		//codeSpanWidth: (avg: number) => 1 - Math.abs(1 - (avg / codeSpanWidth(line))),
	},
});

export const defaultWeightedScorers: WeightedScorer[] = [
	{ score: redundancyPerWord, weight: 0.5 },
	{ score: uppercasePerChar, weight: 0.86 },
	{ score: noisePerChar, weight: 2.54 },
	//{ score: commonWords, weight: 1.86},
	{ score: lengthDifference, weight: 1.21},
	//{score: (line: Translation) => 1 - Math.abs(1 - (avgSpan / codeSpanWidth(line))), weight: 1.3},
];

export const averageSpan = (lines: Translation[]) =>
	lines.map(codeSpanWidth).reduce((prev, curr) => prev + curr, 0) /
	lines.length;

export const scoreDefault = score(defaultWeightedScorers);

export const sortBy =
	<T, K>(f: (arg0: T) => K) =>
	(a: T, b: T) =>
		f(a) < f(b) ? -1 : 1;
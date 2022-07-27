import { R } from "../../pure_deps.ts";

import { punctuation } from "../../static/punctuation.ts";
import { cached } from "../../resource/utils/cached.ts";
import { Database } from "../frontend/database.ts";
//import {fromJS} from "https://esm.sh/immutable"
type char = string;
type word = string;

const len = (sz: number) => (arr: string[]) =>
	arr.filter((c) => c.length === sz);

const freqs = (arr: char[]) =>
	arr.reduce((acc, curr) => {
		acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1);
		return acc;
	}, {} as { [key: string]: number });

const isUniformInLengths = (arr: Array<word>) =>
	arr.length > 0 &&
	arr.filter((a) => a.length !== arr[0].length).length === 0;

const throwIfElseCont =
	<A>(fn: (a0: A) => boolean) =>
	(msg: string) =>
	(a0: A): A => {
		if (!fn(a0)) {
			throw new Error(msg);
		}
		return a0;
	};

const vertSlice = (arr: Array<word>) =>
	R.range(0, arr[0].length).map((i) => arr.map((w) => w[i]));

const freqOf = (freqs: { [key: char]: number }) => (lt: char) => freqs[lt] || 0;

// takes a list of words. calculates a frequency table for each index
const calcFreqsAtEachIdx = R.pipe(
	throwIfElseCont(isUniformInLengths)(
		"Words provided were not all of the same length, meaning that I would return undefined for some letters"
	),
	vertSlice,
	R.map(freqs)
	//R.tap(console.log)
);

export const wordsFromDatabase = <T>(db: Database<T>) => Object.values(db.concepts).slice(0, 200000).map(c => c.name);
// const freqsEn = procFile(9)("data/sentences_diverse_co.txt_shortened.txt");
const reveal = (letterPos: number[]) => (s: string) =>
	Array.from(s)
		.map((c, i) =>
			letterPos.includes(i) ? c : punctuation.has(c) ? c : "•"
		)
		.join("");

export type PerLetterFrequencies = {
	[key: string]: number;
}[];

const lookup = (freqsFor: PerLetterFrequencies) => (idx: number) =>
	freqOf(freqsFor[idx]);

type index = number;
type frequency = number;

const letFreqs =
	(freqsFor: PerLetterFrequencies) =>
	(word: string): [char, frequency, index][] =>
		Array.from(word)
			.map(
				(l, i) =>
					[l, lookup(freqsFor)(i)(l), i] as [char, frequency, index]
			)
			.sort((a, b) => a[1] - b[1]);

const mostToLeastHidden =
	(word: string) => (perLetterFreqs: [char, frequency, index][]) => {
		const range = R.range(0, word.length + 1);
		return range.map((i) => {
			const indicesToReveal = perLetterFreqs.slice(0, i).map((c) => c[2]);
			return reveal(indicesToReveal)(word);
		});
	};

// btwn 0 and 
// further restriction could be: at each index, find all the words that match the existing blanks so far (i.e _og matches dog and bog), then recalc the letter freqs for that but curr system seems fine, too expsn

export const createLookupTableFromWords = (words: string[]) =>
	R.range(1, 40)
		.map((i) => len(i)(words))
		.filter((f) => f.length > 0)
		.map(calcFreqsAtEachIdx);
export const createHiderFromTable = (
	lookupTable: {
		[key: string]: number;
	}[][]
) => {
	const lookupFn = (word: string) =>
		lookupTable[word.length]
			? R.pipe(
					letFreqs(lookupTable[word.length]),
					mostToLeastHidden(word)
			  )(word)
			: R.range(0, word.length).map((i) => reveal(R.range(0, i))(word));

	const cachedLookupFn = cached(lookupFn)(new Map());

	return {
		show: (showThisManyLetters: number) => (word: string) =>
			R.pipe(cachedLookupFn, (a) => a[showThisManyLetters] || word)(word),
		getAll: cachedLookupFn,
	};
};

export const makeHider = R.pipe(wordsFromDatabase, createLookupTableFromWords, createHiderFromTable);
export type Hider = ReturnType<typeof createHiderFromTable>;

//HiderManager.init(0, "data/sentences_diverse_ilo.txt_shortened.txt");
//console.log(HiderManager.getAll("the"))
//console.log("something".split("").map((c) => (c === letFreqs[0][0] ? c : "_")));
//calcFreqsAtEachIdx(["pear", "dear", "liar", "care", "sore", "mere"]);

import * as fs from "https://deno.land/std@0.145.0/node/fs.ts";
import * as R from "https://esm.sh/ramda";
import { punctuation } from "../utils/chars.ts";
import { expose } from "../workerlib/w.ts";
import { cached } from "../utils/cached.ts";
import { readFile } from "../types/purify.ts";
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

const split = (delim: string) => (s: string) => s.split(delim);
const atIdx =
	(idx: number) =>
	<T>(arr: T[]) =>
		arr[idx];

export const aPipe = R.pipeWith((f, res) => Promise.resolve(res).then(f));
export const wordsFromTSVFile = (column: number) =>
	aPipe([
		(f) => Deno.readTextFile(f),
		split("\n"),
		(lns: string[]) => lns.slice(0, 200000),
		R.map(split("\t")),
		R.map(atIdx(column)),
		R.filter((x) => x !== undefined),
		R.map(split(" ")),
		R.flatten,
		R.filter((x) => x !== undefined),
	]) as unknown as (filename: string) => Promise<string[]>;
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

// btwn 0 and 1
export const selectPercentile =
	<T>(float: number) =>
	(arr: T[] | readonly T[]) =>
		arr.slice(Math.round(arr.length * float))[0];

// further restriction could be: at each index, find all the words that match the existing blanks so far (i.e _og matches dog and bog), then recalc the letter freqs for that but curr system seems fine, too expsn

export const createLookupTable = (words: string[]) =>
	R.range(1, 40)
		.map((i) => len(i)(words))
		.filter((f) => f.length > 0)
		.map(calcFreqsAtEachIdx);

export const Hider = (
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

export const HiderManager = {
	init: (column: number, filename: string) =>
		aPipe([wordsFromTSVFile(column), createLookupTable])(filename),
};
//HiderManager.init(0, "data/sentences_diverse_ilo.txt_shortened.txt");
//console.log(HiderManager.getAll("the"))
expose(HiderManager)(self);
//console.log("something".split("").map((c) => (c === letFreqs[0][0] ? c : "_")));
//calcFreqsAtEachIdx(["pear", "dear", "liar", "care", "sore", "mere"]);

import * as fuzz from "https://esm.sh/fuzzball";

// objective; maximise the total dist assigned to the words in previous rounds, while maximising their intra-dissimilarity
// could be done in a dynamic programming approach, or through genetic algorithms
// v1: pick one word. sort the rest by a balance of their existing dists and their dissimilarity. etc.
export type word = string;
export interface Candidate<T> {
	word: T;
	dist: number;
}

// expects: lower is better. between 0 and 1.

export interface SimilarityConfig<T> {
	strength: number;
	distanceFn: (w: T, w2: T) => number;
}

export const weight = (weights: number[]) => (items: number[]) =>
	items.reduce((acc, curr, i) => acc + curr * weights[i], 0) / weights.length;

export const scoreBy =
	<T>({ strength, distanceFn }: SimilarityConfig<T>) =>
	(w1: Candidate<T>) =>
	(ws: Candidate<T>[]) =>
		ws
			.map((w) => ({
				candidate: w,
				dist: weight([strength, 1 - strength])([
					distanceFn(w1.word, w.word),
					w.dist,
				]),
			}))
            .sort((a, b) => a.dist - b.dist)

export const mostDissim = <T>(c: SimilarityConfig<T>) => (wds: Candidate<T>[]) =>
	wds
		.map((w) => ({
			candidate: w,
			total: scoreBy(c)(w)(wds)
				.map((x) => x.dist)
				.reduce((a, b) => a + b),
		}))
		.sort((a, b) => a.total - b.total);

export const test = () => {
	const ws = [
		"skewed",
        "skewered",
		"newton",
		"twee",
		"water",
		"grate",
        "chemistry",
		"hippopotamus",
	].map((wd) => ({ word: wd, dist: 0 }));
	const w = { word: "skewered", dist: 0 };
	const cfg: SimilarityConfig<string> = {
		strength: 1,
		distanceFn: (w1, w2) => fuzz.ratio(w1, w2) / 100,
	};
	//console.log(scoreBy(cfg)(w)(ws));
	console.log(mostDissim(cfg)(ws));
};
//test();

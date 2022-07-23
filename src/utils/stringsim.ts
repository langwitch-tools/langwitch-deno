const range = (i: number) => Array.from({ length: i }).map((_, i) => i);

export const Sim = {
	ngrams: (n: number) => (a: string) =>
		range(a.length)
			.filter((i) => i + n - 1 < a.length)
			.map((i) => a.slice(i, i + n)),

	allGrams: (slice: string) =>
		range(slice.length)
			.map((i) => Sim.ngrams(i)(slice))
			.flat(),

	partialSimilarity: (word: string) => {
		const grams = new Set(Sim.allGrams(word));
		return (sentence: string) => {
			const sliceLength = Math.min(sentence.length, word.length);
			const result = Math.max(
				...Sim.ngrams(sliceLength)(sentence)
					.filter((s) => !s.includes(" "))
					.map((slice: string) => {
						const allPossible = Sim.allGrams(slice);
						const matching = allPossible.filter((s) =>
							grams.has(s)
						);
						return matching.length / allPossible.length;
					})
			);
            if (result > 1) {
                return 1;
            } else if (result < 0) {
                return 0;
            }
            return result;
		};
	},
	fullSimilarity: (w1: string) => {
		const g1 = Sim.allGrams(w1);
		const g1Comp = new Set(g1);
		return (w2: string) => {
			const g2 = Sim.allGrams(w2);
			const g2Comp = new Set(g2);
			return (
				(g2.filter((s) => g1Comp.has(s)).length +
					g1.filter((s) => g2Comp.has(s)).length) /
				(g1.length + g2.length)
			);
		};
	},
};

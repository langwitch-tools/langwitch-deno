import { expose } from "../workerlib/w.ts";
import { hash } from "../utils/hash.ts";
import type { Context, DefaultMeta} from "../frontend/concept.ts";
import { punctuation } from "../utils/chars.ts";

const fn = (
	line: string,
	i: number,
	nonEngColumn: number,
	engColumn: number
): Context<DefaultMeta> => {
	const parts = line.split("\t");
	const s = { original: parts[nonEngColumn] || "", translation: parts[engColumn] || "" };

	const cleanWords = s.original
		.toLowerCase()
		.split(" ")
		.map((w) =>
			Array.from(w)
				.filter((c) => !punctuation.has(c))
				.join("")
		)
		.filter(w => w.length > 0);

	return {
		concepts: Array.from(new Set(cleanWords.map((w) => hash(w)))),
		metadata: {
            id: i,
            words: cleanWords,
            original: cleanWords.join(" "),
            translation: s.translation.replace("\n", ""),
        },
	};
};

const mappedFn = (
	lines: string[],
	i: number,
	nonEngColumn: number,
	engColumn: number
) => {
	return lines.map((l, pos) => fn(l, i + pos, nonEngColumn, engColumn));
}

export const lineProcessor = {
	processLines: mappedFn
};

expose({
	processLines: mappedFn
})(self);

//Pool.init(exposed, new URL("./w.ts", import.meta.url), 1)
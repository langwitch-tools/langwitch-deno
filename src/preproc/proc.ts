import { hash } from "../utils/hash.ts";
import type { Context, DefaultMeta} from "../frontend/concept.ts";
import { punctuation } from "../utils/chars.ts";
import { Monet } from "../pure_deps.ts";
export const procLine = (
	line: string,
	i: number,
	nonEngColumn: number,
	engColumn: number
): Monet.Maybe<Context<DefaultMeta>> => {
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

	if (cleanWords.length === 0) {
		return Monet.Maybe.None();
	}

	return Monet.Maybe.of({
		concepts: Array.from(new Set(cleanWords.map((w) => hash(w)))),
		metadata: {
            id: i,
            words: cleanWords,
            original: cleanWords.join(" "),
            translation: s.translation.replace("\n", ""),
        },
	});
};
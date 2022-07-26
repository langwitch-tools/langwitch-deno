import { hash, hashList } from "../utils/hash.ts";
import type { BaseContext, LanguageMetadata} from "../frontend/context.ts";
import { punctuation } from "../utils/chars.ts";
import { Monet } from "../pure_deps.ts";
export const procLine = (
	line: string,
	_i: number,
	nonEngColumn: number,
	engColumn: number,
	preprocessingFn: (s: string) => string = s => s
): Monet.Maybe<BaseContext<LanguageMetadata>> => {
	const parts = line.split("\t");
	const s = { original: preprocessingFn(parts[nonEngColumn]) || "", translation: parts[engColumn] || "" };

	const cleanWords = s.original
		.toLowerCase()
		.split(" ")
		.map((w) =>
			Array.from(w)
				.filter((c) => !punctuation.has(c))
				.join("")
		)
		.filter(w => w.length > 0);

	if (cleanWords.length === 0 || s.translation === "") {
		return Monet.Maybe.None();
	}

	const concepts = Array.from(new Set(cleanWords.map((w) => hash(w))));
	const original = cleanWords.join(" ");

	return Monet.Maybe.of({
		concepts,
		metadata: {
            words: cleanWords,
            original: original,
            translation: s.translation.replace("\n", ""),
        },
		id: _i
	});
};
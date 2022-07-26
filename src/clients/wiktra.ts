import { clients, Split } from "./gen.ts";
import { data } from "./data/wiktra_table.ts";
// API2
// { "direction": "ru-Latn", "sentence": "я говорю по-португальски" }
// returns a single transliterated string

interface WiktraReq {
	source_language_code: string;
	text: string;
}

export const client = (base: string) =>
	clients<WiktraReq, Promise<string>>({
		path: "/wiktra/",
		after: (r) => r.json(),
		base,
	});

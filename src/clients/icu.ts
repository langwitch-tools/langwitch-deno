import { clients } from "./gen.ts";

// API2
// { "direction": "ru-Latn", "sentence": "я говорю по-португальски" }
// returns a single transliterated string

interface WiktraReq {
	direction: `${string}-${string}`;
	sentence: string;
}

export const client = (base: string) =>
	clients<WiktraReq, Promise<string>>({
		path: "/transliterate/",
		after: (r) => r.text(),
		base,
	});

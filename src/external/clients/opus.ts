import * as M from "./metrics.ts";
import * as It from "../config_helpers/iterators.ts";
import { pDeno } from "../../resource/types/purify.ts";
import { copy } from "https://deno.land/std@0.145.0/streams/conversion.ts";
import { Stream } from "../../deps.ts";

export interface Translation {
	eng: string;
	other: string;
}

export const captureSentence = (line: string) => {
	const match = line.match(
		/<tuv xml:lang="([^"]+)"><seg>([^<]+)<\/seg><\/tuv>/
	);
	if (match === null) {
		return null;
	}
	return {
		lang: match[1],
		sentence: match[2],
	};
};

export const translations = async function* (
	lines: AsyncIterableIterator<string>
): AsyncIterableIterator<Translation> {
	for (;;) {
		try {
			const l1 = await lines.next().then((l) => captureSentence(l.value));
			const l2 = await lines.next().then((l) => captureSentence(l.value));
			if (!l1 || !l2) {
				continue;
			}
			if (l1.lang === "en") {
				yield {
					eng: l1.sentence,
					other: l2.sentence,
				};
			} else {
				yield {
					other: l1.sentence,
					eng: l2.sentence,
				};
			}
		} catch (e) {
			console.log(e);
			break;
		}
	}
};

export type SortConfig = {
	chunk_size: number;
	portion_to_keep: number;
	max_sentence_length: number;
};

export const yieldBest = (config: SortConfig) =>
	async function* (lines: AsyncIterableIterator<Translation>) {
		let unsortedChunk: [Translation, number][] = [];

		for await (const tl of lines) {
			if (M.tokenise(tl.other).length > config.max_sentence_length) {
				continue;
			}

			unsortedChunk.push([tl, M.scoreDefault(tl)]);

			if (unsortedChunk.length >= config.chunk_size) {
				unsortedChunk.sort(M.sortBy((k) => k[1]));
				const top = unsortedChunk.slice(
					0,
					Math.floor(unsortedChunk.length * config.portion_to_keep)
				);
				for (const t of top) {
					yield t;
				}
				unsortedChunk = [];
			}
		}
	};

export const getOpus = (sortCfg: SortConfig) => (url: string) =>
	pDeno
		.run({
			cmd: ["curl", "-k", "-s", url],
			stdout: "piped",
			stdin: "null",
		})
		.fmap((o) => {
			const rdr = o.stdout?.readable.getReader();
			return pDeno
				.run({
					cmd: ["gunzip", "-cd"],
					stdout: "piped",
					stdin: "piped",
				})
				.map((stream) => {
					const wtr = stream.stdin?.writable.getWriter();
					if (wtr === undefined || rdr === undefined) {
						throw new Error(`Url provided - ${url} was invalid`);
					}
					copy(
						Stream.readerFromStreamReader(rdr),
						Stream.writerFromStreamWriter(wtr)
					);
					return It.intoLines(stream.stdout?.readable.getReader());
				});
		})
		.map((lines) =>
			(async function* () {
				for await (const tl of yieldBest(sortCfg)(
					translations(lines)
				)) {
					yield `${tl[0].eng.replace(
						"\t",
						""
					)}\t${tl[0].other.replace("\t", "")}`;
				}
			})()
		);

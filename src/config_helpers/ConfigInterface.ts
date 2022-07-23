import { AIO } from "../types/AIO.ts";
import { ExternalConfig } from "./ExternalConfig.ts";
import { cachedA } from "../utils/cached.ts";
import { maybeify, Maybied } from "../types/Maybe.ts";

export type ExternalConfigInterface = Maybied<{
	fetchData: ((s: string) => AIO<Readonly<Record<string, string>>>) | null;
	convertText: ((s: string) => string | Promise<string>) | null;
	languageName: () => string;
	fetchAudio: ((s: string) => AIO<Uint8Array>) | null;
	playAudio: ((out: Uint8Array) => AIO<void>) | null;
}>;


// should just map everything to a maybe

export const mapConfig = (c: ExternalConfig): ExternalConfigInterface => {
	const dataFn =
		c.transliteration_options.make_additional_data_from_sentence_using_this;
	const dataFnFinal = dataFn
		? (k: string) => AIO.ofA(() => cachedA(dataFn)()(k))
		: null;

	const answerFn =
		c.transliteration_options.convert_my_answers_to_this_before_marking;
	const answerFnFinal = answerFn ? cachedA(answerFn)() : null;

	const fetchAudio = (() => {
		if (c.speech) {
			const getAudioFn = c.speech.make_audio_with;
			const playAudioFn = c.speech.play_output_with;
			const cache = new Map();

			const fetchAudio = (text: string) => cache.has(text)
					? AIO.ofS(() => cache.get(text))
					: getAudioFn(text);
			const playAudio = (io: Uint8Array) => playAudioFn(io);
			return {fetchAudio, playAudio};
		} else {
			return {fetchAudio: null, playAudio: null};
		}
	})();

	return maybeify({
		fetchData: dataFnFinal,
		convertText: answerFnFinal,
		languageName: () => c.language,
		...fetchAudio
	});
};

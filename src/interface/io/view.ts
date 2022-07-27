import { ExtendedContext } from "../../internal/frontend/context.ts";
import { Stats } from "../../internal/state/state.ts";
import { AIO } from "../../resource/types/AIO.ts";
import { ExternalConfig } from "../../external/config_helpers/ExternalConfig.ts";
import { cachedA } from "../../resource/utils/cached.ts";
import { maybeify, Maybied } from "../../resource/types/Maybe.ts";

export type ExternalConfigInterface = Maybied<{
	fetchData: ((s: string) => AIO<Readonly<Record<string, string>>>) | null;
	convertText: ((s: string) => string | Promise<string>) | null;
	languageName: () => string;
	fetchAudio: ((s: string) => Promise<Uint8Array>) | null;
	playAudio: ((out: string) => Promise<AIO<void>>) | null;
	saveTo: string;
}>;

// should just map everything to a maybe

export const mapConfig = (c: ExternalConfig): ExternalConfigInterface => {
	const dataFn =
		c.transliteration_options.make_additional_data_from_sentence_using_this;
	const dataFnFinal = dataFn ? AIO.wrap(cachedA(dataFn)()) : null;

	const answerFn =
		c.transliteration_options.convert_my_answers_to_this_before_marking;
	const answerFnFinal = answerFn ? cachedA(answerFn)() : null;

	const fetchAudio = (() => {
		if (c.speech) {
			const cache = new Map();

			const getAudioFn = (text: string) =>
				c.speech!.make_audio_with(text).then(async (uxs) => {
					while (uxs.length === 0) {
						uxs = await c.speech!.make_audio_with(text);
					}
					cache.set(text, uxs);
					return uxs;
				});
			const playAudioFn = c.speech.play_output_with;

			const fetchAudio = async (text: string) =>
				cache.has(text)
					? cache.get(text)
					: await getAudioFn(text);
			const playAudio = (io: string) => getAudioFn(io).then(playAudioFn);
			return { fetchAudio, playAudio };
		} else {
			return { fetchAudio: null, playAudio: null };
		}
	})();

	return maybeify({
		fetchData: dataFnFinal,
		convertText: answerFnFinal,
		languageName: () => c.language,
		...fetchAudio,
		saveTo: c.save_my_concepts_to_this_file
	});
};

export type AwaitingAnswer<T> = {
	ctxs: ExtendedContext<T>[];
	newWord: string;
	hideModeForFocusWord: "first" | "last" | "both" | "none" | null;
	hideLevel: number;
};

export type CachedCallResults = {
	contextInfo: AIO<void>; // could make this void by console.logging it
	audioPlayer: AIO<void>;
};

export type DisplayResults<Metadata> = {
	userAnswer: string;
	ctxs: ExtendedContext<Metadata>[];
	conceptScores: [string, number][]; // doesn't make sense, ctx already has this
};

export type ViewInputs = {
	stats: Stats;
};

export type View<Metadata> = {
	showPrompt: (
		stats: Stats,
		prompt: AwaitingAnswer<Metadata>
	) => Promise<AIO<void>>;
	displayResults: (
		stats: Stats,
		results: DisplayResults<Metadata>
	) => Promise<AIO<void>>;
	getResponse: (q: string) => AIO<string>;
};

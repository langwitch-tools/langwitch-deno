import { SortConfig } from "../clients/opus.ts";
import { AIO } from "../../resource/types/purify.ts";

export type OpusDoc = SortConfig & {
	opus: string;
};
export type Filename = {
    filename: string;
}
export type Stdout = {
    command_stdout: string[];
}
export type URLDoc = {
    url: string;
}
export type GetSentencesFrom = {total: number} & Partial<(OpusDoc & Filename & Stdout & URLDoc)>//not needed internally

export type TransliterationOptions = {
	make_additional_data_from_sentence_using_this:
		| null
		| ((
				text: string
		  ) => Record<string, string> | Promise<Record<string, string>>);
	convert_my_answers_to_this_before_marking: (
		text: string
	) => string | Promise<string>;
}; // needed internally

export type MetaConfig = {
	use_these_nix_packages: string[];
	run_this_before_starting: string;
}; // not needed

export type Speech = {
	make_audio_with: (text: string) => Promise<Uint8Array>;
	play_output_with: (output: Uint8Array) => AIO<void>;
}; // needed

export type MicrosoftSpeech = {
	voice: string;
	rate: string | null;
	pitch: string | null;
}; // not needed

export interface ExternalConfig {
	language: string;
	show_progress_bar?: boolean;
	get_sentences_from: GetSentencesFrom[];
	transliteration_options: Partial<TransliterationOptions>;
	speech?: Speech;
	save_my_concepts_to_this_file: string;
    preprocessor?: (s: string) => string;
	music: boolean
}

import { AIO } from "../types/purify.ts";

export interface GetSentencesFrom {
    saved_file: string;
    url: string;
    capture_output_from_command: string[];
    collect_this_many_sentences: number;
    save_it_to_avoid_downloading_again: {
        where: string;
    };
} //not needed internally

export interface TransliterationOptions {
    make_additional_data_from_sentence_using_this: null | ((text: string) => Record<string, string> | Promise<Record<string, string>>);
    convert_my_answers_to_this_before_marking: (text: string) => string | Promise<string>;
} // needed internally

export interface MetaConfig {
    use_these_nix_packages: string[];
    run_this_before_starting: string;
} // not needed

export interface Speech {
    make_audio_with: (text: string) => AIO<Uint8Array>;
    play_output_with: (output: Uint8Array) => AIO<void>;
} // needed

export interface MicrosoftSpeech {
    voice: string;
    rate: string | null;
    pitch: string | null;
} // not needed

export interface ExternalConfig {
    language: string,
    show_progress_bar?: boolean,
    get_sentences_from: Partial<GetSentencesFrom>,
    transliteration_options: Partial<TransliterationOptions>,
    speech?: Speech,
    save_my_concepts_to_this_file: string
}
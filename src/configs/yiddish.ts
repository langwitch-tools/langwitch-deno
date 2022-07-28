import { start } from "https://raw.githubusercontent.com/langwitch-tools/langwitch-deno/main/src/external/config_helpers/start_session.ts";
import { ExternalConfig } from "https://github.com/langwitch-tools/langwitch-deno/raw/main/src/external/config_helpers/ExternalConfig.ts";
import { translit } from "https://archive.org/download/ii_20220728/translit/mod.ts"; 

const transliterator = await translit("yi").then(m => m.transliterate);

const config: ExternalConfig = {
	language: "yiddish",

	save_my_concepts_to_this_file: "yiddish-concepts.json",

	get_sentences_from: [
		{
			url: `https://archive.org/download/langwitch_shortened/shortened_yi.txt`,
			total: 120000,
		},
	],

	show_progress_bar: true,

	transliteration_options: {
        convert_my_answers_to_this_before_marking: (s: string) => transliterator(s).toLowerCase(),
        make_additional_data_from_sentence_using_this: (sentence: string) => ({
            original: sentence
        })
    },

	music: false,
};

start(config).run()

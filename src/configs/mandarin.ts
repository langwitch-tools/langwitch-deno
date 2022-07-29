import { start } from "../external/config_helpers/start_session.ts";
import { makeTTS } from "../external/config_helpers/speech.ts";
import pinyin from "https://deno.land/x/pinyin/mod.ts";

const numbers = ["1", "2", "3", "4", "x", "z", "i", "h", "u", "a", "d"];
const transliterator = (text: string) =>
	numbers.filter((x) => new Set(Array.from(text)).has(x)).length > 1
		? text
		: pinyin(text.replaceAll(" ", ""), {
				style: pinyin.STYLE_TONE2, // Setting pinyin style.
				segment: true,
				group: true,
		  }).join(" ");

const config = {
	language: "Mandarin",

	save_my_concepts_to_this_file: "mandarin-concepts.json",

	get_sentences_from: [
		{
			url: `https://archive.org/download/langwitch_shortened/shortened_zh-CN.txt`,
			total: 50000,
		},
		{
			opus: "https://object.pouta.csc.fi/OPUS-TED2013/v1.1/tmx/en-zh.tmx.gz",
			total: 80000,
			portion_to_keep: 0.6,
			chunk_size: 30,
		},
	],

	show_progress_bar: true,

	transliteration_options: {
        convert_my_answers_to_this_before_marking: transliterator,
        make_additional_data_from_sentence_using_this: (sentence: string) => ({
            original: sentence
        })
    },

	speech: makeTTS({
		voice: "zh-CN-XiaochenNeural",
		rate: "-26%",
		pitch: "+0%",
	}),

	music: false,

	preprocessor: (s: string) => s.split("").join(" "),
};

start(config).run();

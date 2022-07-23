import { transliterate as turnIntoASCII } from "https://esm.sh/transliteration@2.2.0";
import { start } from "../config_helpers/start_session.ts";
// todo: add the adapter for speech
const config = {
	language: "Catalan",

	save_my_concepts_to_this_file: "catalan.json",

	get_sentences_from: {
		//url: "https://github.com/langwitch-resources/langwitch-por-portuguese/blob/main/oscar_sentences/x00_en_pt.tsv?raw=true",

		saved_file:
			`${Deno.env.get("HOME")}/rust-experiments/langwitch_scripts/augment/minified_1000/te`,

		save_it_to_avoid_downloading_again: {
			where: "catalan_sentences.tsv",
		},

		collect_this_many_sentences: 100000,
		// fetch catalan
	},

	show_progress_bar: true,

	transliteration_options: {
		make_additional_data_from_sentence_using_this: (s: string) => ({original: s}),
		// don't do anything with the sentence because it doesn't need
		// any transliteration
		convert_my_answers_to_this_before_marking: (sentence: string) =>
			turnIntoASCII(sentence.toLowerCase()),
		// turn into plain ASCII (i.e, ignore accents and capital letters)
	},
};

start(config).run();
/*if (import.meta.main) {
    //create a nix shell, run "deno run ...", with the packages specified by the user
    const filename = new URL('', import.meta.url).pathname;
    const dir = new URL('.', import.meta.url).pathname.replace("configs", "config_helpers");
    console.log(dir, filename);

    const proc = Deno.run({cmd: ["deno", "run", "-A", "--unstable", dir + "start_session.ts", filename], stdout: "inherit", stderr: "inherit", stdin: "inherit"});
    await proc.status();
}*/

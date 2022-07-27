export default `#! /usr/bin/env nix-shell
\`
#!nix-shell -i "deno run -A --unstable" -p deno mpv
\`
import { makeTTS } from "@baseUrl/external/config_helpers/speech.ts";
import { start } from "@baseUrl/external/config_helpers/start_session.ts";

start({
	language: "@langCode",

	save_my_concepts_to_this_file: "@conceptsFile",

	get_sentences_from: [
		{
			url: "https://github.com/langwitch-tools/langwitch-deno/raw/main/minified_1000/@langCode",
			total: 120000,
		},
	],

	show_progress_bar: true,

	transliteration_options: {},

	speech: makeTTS({
		voice: "@voiceName",
		rate: "-26%",
		pitch: "+0%",
	}),

	music: @musicEnabled
}).run();`
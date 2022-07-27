#! /usr/bin/env nix-shell
`
#!nix-shell -i "deno run -A --unstable --no-check" -p deno mpv
`
import { start } from "../external/config_helpers/start_session.ts";
import { mappings } from "../static/data/gtrans_table.ts";
import {
	Select,
	Input,
	Toggle,
} from "https://deno.land/x/cliffy@v0.24.2/prompt/mod.ts";
import { tty } from "../deps.ts";
import { search } from "../static/data/ms_tts_table.ts";
import template from "./template.ts";
import { makeTTS } from "../external/config_helpers/speech.ts";

tty.clearScreen();

type Selection = {
	langCode: string;
	conceptsFile: string;
	voiceName: string;
	musicEnabled: boolean;
	shouldSave: boolean;
};

const langcode = {
	langCode: await Select.prompt({
		message:
			"✦ please pick a language (˶ᵔ ᵕ ᵔ˶) if you don't know, try esperanto first!",
		options: Array.from(mappings.entries()).map(([a, b]) => `${a} -> ${b}`),
	}),
};

const selections: Selection = {
	...langcode,
	conceptsFile: await Input.prompt({
		message:
			"✦ (⸝⸝ᵕᴗᵕ⸝⸝) great! where do you want me to save your progress or load from it? tell me what the file is called ꕤ",
		default: `${langcode.langCode.split(" -> ")[1]}_concepts.json`,

	}),

	voiceName: await Toggle.prompt({
		message:
			"✦ do you want me to enable text-to-speech so you can hear sentences out loud?",
	}).then((yes) =>
		yes
			? Select.prompt({
					message:
						"✦ sometimes there aren't voices available, just say 'none of these match'",
					options: [
						"none of these match",
						...search
							.search(langcode.langCode)
							.map(
								(i) =>
									`${i.item.Language} - ${i.item.Locale} - ${i.item["Voice name"]}`
							)
							.slice(0, 4),
					],
			  })
			: "none of these match"
	).then(s => s.includes("-") ? s.split(" - ").reverse()[0] : s),

	musicEnabled: await Toggle.prompt({
		message: "✦ ૮ ˶ᵔ ᵕ ᵔ˶ ა music?",
	}).then(yes => yes ? (() => {
		console.log("here you go! https://langwitch-music.surge.sh/");
		return true;
	 })() : yes),

	shouldSave: await Toggle.prompt({
		message:
			"✦ do you want me to save these settings to a configuration file so you can reuse them later?",
	}),
};

if (selections.shouldSave) {
	const baseUrl = import.meta.url.replace("/configs/interactive.ts", "");
	const replacements: Record<string, string | boolean> = {
		baseUrl,
		...selections,
		langCode: selections.langCode.split(" -> ")[1]
	};
	const newTemplate = Object.keys(replacements).reduce(
		(prev, curr) => prev.replaceAll("@" + curr, `${replacements[curr]}`),
		template
	);
	const name = `${selections.langCode.split(" -> ")[1]}_langwitch.config.ts`;
	Deno.writeTextFile(
		name,
		newTemplate
	).then(() => Deno.run({cmd: ["chmod", "+x", name], stdout: "null", stderr: "null"}));
}

const config = ({
	langCode,
	conceptsFile,
	voiceName,
	musicEnabled,
}: Selection) => {
	const code = langCode.split(" -> ")[0];
	return {
		language: langCode.split(" -> ")[1],

		save_my_concepts_to_this_file: conceptsFile.includes(".json")
			? conceptsFile
			: conceptsFile + ".json",

		get_sentences_from: [
			{
				url: `https://github.com/langwitch-tools/langwitch-deno/raw/main/minified_1000/${code}`,
				total: 120000,
			},
			//{ url: "https://github.com/langwitch-resources/langwitch-sentence-packs/blob/main/mon-mongolian-mongol/statmt/mn.tsv?raw=true", total: 200000}
			//{ opus: "https://object.pouta.csc.fi/OPUS-CCAligned/v1/tmx/en-mn.tmx.gz", total: 80000, portion_to_keep: 0.2, chunk_size: 30 }
		],

		show_progress_bar: true,

		transliteration_options: {},

		speech: makeTTS({
			voice: voiceName,
			rate: "-26%",
			pitch: "+0%",
		}),

		music: musicEnabled,

		//preprocessor: (s: string) => s.split("").join(" ")
	};
};

start(config(selections)).run();
/*if (import.meta.main) {
    //create a nix shell, run "deno run ...", with the packages specified by the user
    const filename = new URL('', import.meta.url).pathname;
    const dir = new URL('.', import.meta.url).pathname.replace("configs", "config_helpers");
    console.log(dir, filename);

    const proc = Deno.run({cmd: ["deno", "run", "-A", "--unstable", dir + "start_session.ts", filename], stdout: "inherit", stderr: "inherit", stdin: "inherit"});
    await proc.status();
}*/
//todo: automake the config from an even higher-level interface

//import { transliterate as turnIntoASCII } from "https://esm.sh/transliteration@2.2.0";
//import { makeTTS } from "../config_helpers/speech.ts";
import { start } from "../config_helpers/start_session.ts";
//import { search } from "../clients/data/ms_tts_table.ts";
//import { translit } from "../translit/mod.ts";
import { mappings } from "../clients/data/gtrans_table.ts";
import {
	Select,
} from "https://deno.land/x/cliffy@v0.24.2/prompt/mod.ts";
//const transliterator = await translit("mn");

const selected = await Select.prompt({
	message: "Choose a language",
	options: Array.from(mappings.entries()).map(([a, b]) => `${a} -> ${b}`),
});

const config = (code: string) => ({
	language: code,

	save_my_concepts_to_this_file: `${code}_concepts.json`,

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

	//speech: makeTTS({
	//voice: search.search("Chinese")[0].item["Voice name"],
	//rate: "-15%",
	//pitch: "+0%",
	//}),

	//preprocessor: (s: string) => s.split("").join(" ")
});

selected

start(config(selected.split(" -> ")[0])).run();
/*if (import.meta.main) {
    //create a nix shell, run "deno run ...", with the packages specified by the user
    const filename = new URL('', import.meta.url).pathname;
    const dir = new URL('.', import.meta.url).pathname.replace("configs", "config_helpers");
    console.log(dir, filename);

    const proc = Deno.run({cmd: ["deno", "run", "-A", "--unstable", dir + "start_session.ts", filename], stdout: "inherit", stderr: "inherit", stdin: "inherit"});
    await proc.status();
}*/
//todo: automake the config from an even higher-level interface

import { readableStreamFromIterable } from "https://deno.land/std@0.148.0/streams/mod.ts";
import { AIO } from "../types/AIO.ts";
import { clients } from "./gen.ts";
// An asynchronous IO monad with four primary methods: fmap (flatmap), map, ofA (constructing async operations), and ofS (constructing synchronous operations.)

// { "messages": "string", "voice": "Microsoft Server Speech Text to Speech Voice (en-US, AriaNeural)", "pitch": "+0Hz", "rate": "+0%", "volume": "+0%" }
type Name = string;
type CountryCode = string;
type LanguageCode = string;

export type Pitch = `${"+" | "-"}${number}Hz`;
export type Rate = `${"+" | "-"}${number}%`;
export type Voice = `${LanguageCode}-${CountryCode}-${Name}Neural`;

export interface SpeechReq {
	messages: string;
	voice: string;
	pitch: string;
	rate: string;
	volume: string;
}

export const client = (base: string) =>
	clients<SpeechReq, Promise<ArrayBuffer>>({
		path: "/tts/",
		after: (r) => r.arrayBuffer(),
		base,
	});

/*await client().post({
	messages: "Тэд буруу тасалгааны ургамал сонгосон байж болох уу?",
	voice: "mn-MN-YesuiNeural",
	pitch: "+0Hz",
	rate: "-15%",
	volume: "+15%",
});*/

export const speak = (r: Uint8Array) =>
	AIO.ofA(async () => {
		const mpv = Deno.run({
			cmd: ["mpv", "-"],
			stdin: "piped",
			stderr: "null",
			stdout: "null",
		});
		if (r === undefined) {
			return;
		}
		await readableStreamFromIterable([r]).pipeTo(mpv.stdin.writable);
		await mpv.status();
	});

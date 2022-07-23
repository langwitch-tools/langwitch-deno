import { Speech, MicrosoftSpeech, MetaConfig } from "./ExternalConfig.ts";
import * as S from "https://deno.land/std@0.149.0/streams/mod.ts";   

import { client, speak } from "../clients/tts.ts";
import { baseUrl } from "../consts.ts";
export default (c: MicrosoftSpeech): Speech => {
    return {
        make_audio_with: (text: string) => 
            client(baseUrl).post({
                messages: text,
                voice: c.voice,
                pitch: c.pitch || "0Hz",
                rate: c.rate || "0%",
                volume: c.rate || "0%",
            }).map(async buf => new Uint8Array(await buf)),
        play_output_with: speak
    }
}
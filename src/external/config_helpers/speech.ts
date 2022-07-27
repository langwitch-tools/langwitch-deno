import { Speech, MicrosoftSpeech } from "./ExternalConfig.ts";  

import { client, speak } from "../clients/tts.ts";
import { baseUrl } from "../../resource/consts.ts";
export const makeTTS = (c: MicrosoftSpeech): Speech | undefined => {
    return c.voice === "none of these match" ? undefined : {
        make_audio_with: (text: string) => 
            client(baseUrl).post({
                messages: text,
                voice: c.voice,
                pitch: c.pitch || "+0Hz",
                rate: c.rate || "+0%",
                volume: "+15%",
            }).then(async buf => new Uint8Array(await buf)),
        play_output_with: speak
    }
}
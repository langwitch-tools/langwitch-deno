import { AIO, DoNothing } from "../types/purify.ts";
import { hash } from "../utils/hash.ts";
import { shCapture } from "../deps.ts";
import { Config } from "./Config.ts";
// needs to be quit after x number of seconds, otherwise it just keeps going???
//const cmd2 = ["nix-shell", "-p", "mpv", "--run", `edge-playback --voice ar-EG-SalmaNeural --text "مرحبا كيف حالك؟"`]

//TODO: shell command that gets the md5 hash of the sentence, looks for an audio file (stream from github?), dl? clean up afterwards?, and queues it to play after the user presses enter

// for estimating vocab size: sort every sentence by average frequency. sample a few from each step of 100 + their translations. (might also be a cheaper alternative to minifying everything). quiz the users on that. write a rust script to do it. not straightforward for japanese, chinese, just detect those and skip them. represent as a fallible Maybe? 

export const makePlayCmd = (volume: number, path: string) => {
    return `mpv --volume=${volume} ${path}`;
}

export const getFname = (outputDir: string, text: string) => `${outputDir}/${hash(text)}.mp3`;

export const makeAudioCmd = (outputDir: string, voice: string, text: string) => {
    const fname = getFname(outputDir, text);
    return `edge-tts --voice ${voice} --text "${text}" --write-media ${fname}`;
}

export const makeDir = (outputDir: string) => {
    return `mkdir ${outputDir}`
}

export const cleanDir = (outputDir: string) => `rm ${outputDir}/*`;

export const doCmd = (cmd: string): AIO<void> => AIO.ofS(() => {
    try {
        shCapture(cmd, {stdout: "null", stderr: "null"});
    } catch(_e) {
        //console.log(e);
    }
});

export const createAudio = <T>(config: Config<T>) => (text: string) => {
    if (null) {
        const out = "mp3_data";
        //const voice = cfg.externalData.voice;
        //return doCmd(makeAudioCmd(out, voice, text))
            //.fmap( () => doCmd(cleanDir(out)));
            return DoNothing;
    } else {
        return DoNothing;
    }
}

export const playAudio = <T>(config: Config<T>) => (text: string) => {
    if (null) {
        const out = "mp3_data";
        const fname = getFname(out, text);
        return doCmd(makePlayCmd(100, fname))
    } else {
        return DoNothing;
    }
}
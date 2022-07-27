import { ask } from "../../interface/io/console/ask.ts";
import { AIO, plog } from "../../resource/types/purify.ts";


export const confirm = (a: {words: string[]}) => AIO.do(
    ...a.words.map(w => plog.log(w)),
    ask("Continue?").map(_ => undefined)
)
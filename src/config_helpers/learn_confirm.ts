import { ask } from "../io/console/ask.ts";
import { AIO, plog } from "../types/purify.ts";


export const confirm = (a: {words: string[]}) => AIO.do(
    ...a.words.map(w => plog.log(w)),
    ask("Continue?").map(_ => undefined)
)
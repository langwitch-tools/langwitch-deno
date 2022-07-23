import { ask } from "../state/view.ts";
import { AIO, plog } from "../types/purify.ts";


export const confirm = (a: {words: string[], sentences: string[]}) => AIO.do(
    ...a.words.map(w => plog.log(w)),
    plog.log(a.sentences),
    ask("Continue?").map(_ => undefined)
)
import { ContextHolder } from "../db/manager.ts";


export const suggestContexts = (holder: ContextHolder) => async (known: Set<number> | Array<number>, learning: Set<number>) => {
    //await holder.stripKnown(new Set(known));
    const result = await holder.getNextContexts(known, new Set(learning));
    //await holder.reset();
    return result;
}
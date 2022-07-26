import { ContextHolder } from "../db/manager.ts";

export const nextConcept = (holder: ContextHolder) => async (known: Set<number> | Array<number>, n: number) => {
    //await holder.stripKnown(new Set(known));
    const result = await holder.getNextConcepts(new Set(known), n);
    //await holder.reset();
    return result;
}
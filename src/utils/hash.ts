import { fnv } from "../pure_deps.ts";
export const hash = (text: string): number => fnv.fast1a32(text);
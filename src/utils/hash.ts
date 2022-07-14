import fnv from "https://esm.sh/fnv-plus@1.3.1";
export const hash = (text: string): number => fnv.fast1a32(text);
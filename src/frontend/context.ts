
import { AIO } from "../types/purify.ts";
import { UnitFloat } from "../types/float.ts";

export type u32 = number;
export interface BaseContext<Meta> {
	metadata: Meta;
	concepts: Array<u32>;
	id: u32;
}

export type MarkedResult = [u32, number][];

export interface ExtendedContext<Meta> extends BaseContext<Meta> {
	markAnswer: (a: string) => MarkedResult | Promise<MarkedResult>,
}

export type LanguageMetadata = {
	words: string[];
	original: string;
	translation: string;
};

// hinting needs to be parameterised too
// control flow semantics like command-handlers will need to be either handled by the context...
// but then we have different extcontext implementations for different platforms i.e web, etc.
// so just the things relating to the metadata specifically.
// viewconfig will share stuff
// so it would need to be initialised with stuff like Config
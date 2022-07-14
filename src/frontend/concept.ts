import { Config } from "../state/Config.ts";
import { adjust, Memory } from "./memory.ts";
export type u32 = number;
export type Hours = number;
export interface Context<T> {
	metadata: T;
	concepts: Array<u32>;
}
export type DefaultMeta = {
	id: number;
	words: string[];
	original: string;
	translation: string;
};
export type DefCtx = Context<DefaultMeta>;

export interface ConceptData {
	name: string;
	id: u32;
    timesSeen: number;
}

export type Concept = Memory & ConceptData;

export const asNew = (cfg: Config) => (data: ConceptData) => ({
	...data,
	lastSeen: cfg.currentTime(),
	decayCurve: -0.5,
});

export const asKnown = (cfg: Config) => (data: ConceptData) => ({
	...data,
	lastSeen: cfg.currentTime(),
	decayCurve: -0.09,
});

export const validateRange = (min: number, max: number) => (n: number) => {
	if (n < min || n > max) {
		throw new Error(
			`The number provided (${n}) was out of range of (${min}, ${max})`
		);
	}
};

export const mark =
	(cfg: Config) =>
	(concept: Concept) =>
	(accuracy: number): Concept => {
		validateRange(0, 1)(accuracy);
        accuracy *= 0.97;
        accuracy += 0.03;
		return {
			...concept,
			...adjust(cfg.flexibility)(concept)(cfg.currentTime(), accuracy),
            timesSeen: concept.timesSeen + 1
		};
	};

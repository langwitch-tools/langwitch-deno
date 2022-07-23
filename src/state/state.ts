import { ContextHolder } from "../db/manager.ts";
import { Context, DefaultMeta, u32 } from "../frontend/concept.ts";
import { Database } from "../frontend/database.ts";
import { AIO } from "../types/purify.ts";
import { lens } from "../utils/utils.ts";
export type AwaitingAnswer = {
	ctx: Context<DefaultMeta>;
	newWord: string;
	hideModeForFocusWord: "first" | "last" | "both" | "none" | null;
	hideLevel: number;
};

export type CachedCallResults = {
	contextInfo: AIO<void>, // could make this void by console.logging it
	audioPlayer: AIO<void>
}

export type DisplayResults = {
	userAnswer: string;
	referenceAnswer: string;
	conceptScores: [string, number][];
	cache: CachedCallResults;
};
export type StateReady = State<Context<DefaultMeta>>;
export type EitherS = Context<DefaultMeta> | null;

export type CommandHandlers = {
	exit: (s: StateReady) => AIO<never>;
	known: (s: StateReady) => Promise<StateReady>;
	hint: (s: StateReady) => StateReady; // should hints decrement the calculated accuracy score?
};

export type State<Ctx extends EitherS> = {
	db: Database;
	known: u32[]; // this must be an array instead of a set because immer can't serialise them
	learning: u32[];
	holder: ContextHolder;
	queue: Context<DefaultMeta>[];
    topContext: Ctx;
    stats: Stats;
	desiredHideLevel: number;
	lastResponse: string;
	noMoreLearnablesLeft: boolean; // this might cause premature exiting: if 2 words are required for the next word
	topCtxCache?: CachedCallResults
};

export const viewDebug = lens(({known, learning, queue, topContext, stats, desiredHideLevel, db}: State<EitherS>) => (JSON.stringify({known, learning, queue, topContext, stats, desiredHideLevel, concepts: db.concepts}, null, 3)));

export type Stats = {
    learnCount: number,
    lang: string,
	knownCount: number
};

// average rates? other metadata that permits calculation
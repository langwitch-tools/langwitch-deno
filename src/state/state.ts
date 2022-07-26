import { ContextHolder } from "../db/manager.ts";
import { u32 } from "../frontend/concept.ts";
import { ExtendedContext } from "../frontend/context.ts";
import { Database } from "../frontend/database.ts";
import { AIO } from "../types/purify.ts";
import { lens } from "../utils/utils.ts";
export type CommandHandlers = {
	exit: <T>(s: State<T>) => AIO<never>;
	known: <T>(s: State<T>) => Promise<State<T>>;
	hint: <T>(s: State<T>) => State<T>; // should hints decrement the calculated accuracy score?
};

export type State<T> = {
	db: Database<T>;
	known: u32[]; // this must be an array instead of a set because immer can't serialise them
	learning: u32[];
	holder: ContextHolder;
	queue: ExtendedContext<T>[];
    stats: Stats;
	//topContext?: ExtendedContext<T>;
	desiredHideLevel: number;
	lastResponse: string;
	noMoreLearnablesLeft: boolean; // this might cause premature exiting: if 2 words are required for the next word
};



export const viewDebug = lens(({known, learning, queue, stats, desiredHideLevel, db}: State<unknown>) => (JSON.stringify({known, learning, queue, stats, desiredHideLevel, concepts: db.concepts}, null, 3)));

export type Stats = {
    learnCount: number,
    lang: string,
	knownCount: number
};

// average rates? other metadata that permits calculation
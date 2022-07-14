import produce from "https://esm.sh/immer";
import { ContextHolder } from "../db/manager.ts";
import { asKnown, asNew } from "../frontend/concept.ts";
import { Config } from "./Config.ts";
import { load, save } from "../frontend/database.ts";
import { markCtx, update } from "../frontend/marker.ts";
import { sort } from "../frontend/sorter.ts";
import { readFileIntoDB } from "../pre/preproc.ts";
import { nextConcept } from "../queries/nextconcept.ts";
import { suggestContexts } from "../queries/nextcontext.ts";
import { shouldGraduate } from "../queries/shouldgraduate.ts";
import { AIO, DoNothing, pfs, plog, readFile } from "../types/purify.ts";
import { Context as BackContext, u32 } from "../types/types.ts";
import {
	CommandHandlers,
	EitherS,
	State,
	StateReady,
	viewDebug,
} from "./state.ts";
import { ask, awaitAnswer, displayResults } from "./view.ts";
import { thunkify } from "../utils/utils.ts";
import { createHider } from "../hints/worker.ts";
import { mostDissim } from "../heuristics/maxdissim.ts";
import * as fuzz from "https://esm.sh/fuzzball";

// TODO: make the other functions this calls also return an io type for easier chaining

const consoleHandlers = (cfg: () => Config): CommandHandlers => ({
	known: (s: StateReady) => {
		const newState = produce(s, (draft) => {
			draft.topContext.concepts.forEach(
				(c) =>
					(draft.db.concepts[c] = asKnown(cfg())(
						draft.db.concepts[c]
					))
			);
		});
		return checkGraduation(cfg())(newState).then(updateTopContext(cfg()));
	},
	hint: (s: StateReady) => {
		const newState = produce(s, (draft) => {
			draft.desiredHideLevel += 1;
		});
		return newState;
	},
	exit: (s: StateReady): AIO<never> => {
		const json = save(s.db);
		return ask("Where would you like me to save to?")
			.fmap((filename) => pfs.writeFile(filename, json))
			.fmap(() => Deno.exit());
	},
});

export const fromFile = (cfg: Config) => (f1: string, f2: string | null) =>
	readFileIntoDB(f1)
		.fmap((db) =>
			f2 ? readFile(f2).map((json) => load(db)(json)) : AIO.ofS(() => db)
		)
		.map(async (db) => {
			const ctxs = Object.values(db.contexts).map(
				(c) => new BackContext(c.metadata.id, new Set(c.concepts))
			);
			cfg.hider();
			const state: State<null> = {
				db,
				known: [],
				learning: [],
				holder: await ContextHolder.spawn(ctxs),
				queue: [],
				topContext: null,
				stats: {
					lang: f1,
					learnCount: 0,
				},
				desiredHideLevel: 0,
				lastResponse: "",
			};
			return state;
		});

export const chooseBest =
	(cfg: Config) => (state: State<EitherS>) => (learning: Set<u32>) => {
		const mappedLearning = Array.from(learning).map((i) => ({
			word: i,
			dist: 1 - 1 / state.db.hashes[i].length,
		}));
		const best = mostDissim({
			strength: 0.7,
			distanceFn: (id1: u32, id2: u32) =>
				fuzz.WRatio(state.db.hashes[id1], state.db.hashes[id2]),
		})(mappedLearning).slice(0, cfg.maxLearnable);
		return new Set(best.map((c) => c.candidate.word));
	};
export const initialise =
	(cfg: Config) =>
	async (state: State<null>): Promise<State<null>> => {
		let learning = await nextConcept(state.holder)(
			state.known,
			cfg.maxLearnable * 5
		);
		if (learning === null || learning === undefined) {
			throw new Error("Wasn't able to fetch any N1 concepts");
		}

		learning = chooseBest(cfg)(state)(learning);
		const queue = await suggestContexts(state.holder)(
			state.known,
			learning
		);
		const newDb = produce(state.db, (db) => {
			learning.forEach((id) => {
				db.concepts[id] =
					db.concepts[id] !== undefined
						? db.concepts[id]
						: asNew(cfg)({
								name: db.hashes[id],
								id: id,
								timesSeen: 0,
						  });
			});
		});
		return {
			...state,
			queue: queue.map((id) => state.db.contexts[id]),
			db: newDb,
			learning: Array.from(learning),
		};
	};

export const updateTopContext =
	(cfg: Config) =>
	(state: State<EitherS>): StateReady => {
		const res = sort(cfg)(state)(state.queue)[0];
		if (res === undefined) {
			throw new Error("Queue was empty.");
		}
		return produce(state, (s) => {
			s.topContext = res[0];
			s.desiredHideLevel = 0;
		}) as StateReady;
	};

export const markAndUpdate =
	(cfg: Config) =>
	(state: StateReady) =>
	async (answer: string): Promise<StateReady> => {
		if (answer == "") {
			answer = state.topContext.metadata.original;
		}
		const scores = markCtx(state.topContext)(answer);
		const newDb = await produce(state.db, (db) => {
			const toUpdate = update(cfg)(db)(scores);
			toUpdate.forEach((c) => (db.concepts[c.id] = c));
		});
		return {
			...state,
			db: newDb,
			desiredHideLevel: 0,
		};
	};

export const checkGraduation = (cfg: Config) => async (state: StateReady) => {
	const graduatedIds = shouldGraduate(cfg)(state.db)(new Set(state.learning));
	if (
		graduatedIds.length === 0 &&
		state.learning.length >= cfg.maxLearnable
	) {
		return state;
	}
	return await produce(state, async (s: StateReady) => {
		const learning = new Set(s.learning);
		const known = new Set(s.known);
		graduatedIds.forEach((i) => {
			learning.delete(i);
			known.add(i);
		});
		const numToAdd = 15;

		const next = await nextConcept(s.holder)(known, numToAdd).then((ns) =>
			Array.from(chooseBest(cfg)(state)(new Set([...ns, ...learning])))
				.filter((n) => !learning.has(n))
				.slice(0, cfg.maxLearnable - learning.size + 1)
		);
		next.forEach((n) => learning.add(n));

		const queue = await suggestContexts(s.holder)(known, learning);

		learning.forEach((id) => {
			s.db.concepts[id] =
				s.db.concepts[id] !== undefined
					? s.db.concepts[id]
					: asNew(cfg)({
							name: s.db.hashes[id],
							id: id,
							timesSeen: 0,
					  });
		});

		const existingIds = new Set(s.queue.map((i) => i.metadata.id));
		s.queue.push(
			...queue
				.filter((id) => !existingIds.has(id))
				.map((id) => s.db.contexts[id])
		);
		//s.queue = queue.map((id) => s.db.contexts[id]);
		//s.queue = queue.map((id) => s.db.contexts[id]);
		s.stats.learnCount = known.size;
		s.known = Array.from(known);
		s.learning = Array.from(learning);
	});
};

const isCommand = (answer: string): answer is "x" | "k" | "h" =>
	["x", "k", "h"].includes(answer);

// may need to remove the workers entirely because they fuck with garbage collection and aren't referentially transparent.
const updateFromAnswer =
	(cfg: Config) =>
	(s: AIO<StateReady>) =>
	(answer: string): AIO<StateReady> | never => {
		s = s.map((state) =>
			produce(state, (st) => {
				st.lastResponse = answer;
			})
		);
		if (!isCommand(answer)) {
			return s
				.map((state) => markAndUpdate(cfg)(state)(answer))
				.map(checkGraduation(cfg))
				.map(updateTopContext(cfg));
		} else {
			switch (answer) {
				case "x":
					return s.fmap((state) => cfg.handlers.exit(state));
				case "k":
					return s.map((state) => cfg.handlers.known(state)); //TODO: This is the important part, the others are easy
				case "h":
					return s.map((state) => cfg.handlers.hint(state)); //TODO: This needs the new hinting function
			}
		}
	};

// TODO: HANDLE COMMANDS
// exit, known, hint
// could have a generator that continually yields states and just stops once

// needs to be able to communicate things like "show more of the letters than last time" inside the state
const main =
	(cfg: Config) =>
	async (s: StateReady): Promise<AIO<StateReady>> => {
		const newestWord = s.topContext.concepts
			.filter((n) => s.learning.includes(n))
			.map((n) => s.db.concepts[n])[0];
		const seen = newestWord ? newestWord.timesSeen : 5;

		const asker = await awaitAnswer(cfg)(s.stats)({
			ctx: s.topContext,
			newWord: newestWord ? newestWord.name : "<no more hints!>",
			hideModeForFocusWord:
				newestWord === undefined
					? null
					: seen === 0
					? "none"
					: seen === 1
					? "both"
					: seen === 2
					? "first"
					: seen === 3
					? "last"
					: null,
			hideLevel: s.desiredHideLevel,
		});
		return (
			asker
				.fmap(() => cfg.getInputFn("What's your guess?"))
				.and((answer) =>
					isCommand(answer)
						? plog.log("Recalculating!")
						: displayResults(s.stats)({
								userAnswer: answer,
								referenceAnswer: s.topContext.metadata.original,
						  })
				)
				//.and((ans) => plog.log(ans))
				//.and((_ans) => plog.log(viewDebug(s)))
				.fmap((answer) =>
					updateFromAnswer(cfg)(AIO.ofS(() => s))(answer)
				)
				.and((finalState) =>
					isCommand(finalState.lastResponse)
						? DoNothing
						: cfg.getInputFn("Press enter to continue")
				)
				.and((finalState) => plog.log(viewDebug(finalState)))
				.fmap((finalState) => main(cfg)(finalState))
		);
	};

// REMEMBER TO GET ANOTHER ANSWER AND MAP IT TO A COMMAND AFTER THIS FN

// this is pretty awkward. should define declarative state transitions and decisional logic between them.
// io actions are mixed up. polluting the rest of the logic.
// so we could use an io monad here to clearly separate the impure from the pure
// "io" isn't very specific. the point is that it encodes side-effects into a visible type-system
//(() => {
	//const cmd = ["nix-shell", "-p", "mpv", "--run", `mpv --loop-playlist=inf --volume=65 music`];
	//Deno.run({ cmd, stdout: "null",
	//stderr: "piped" });
//})()
export const mainIO = (cfg: Config) =>
	fromFile(cfg)(Deno.args[0], null)
		.map((s) => initialise(cfg)(s))
		.map((s) => updateTopContext(cfg)(s))
		.fmap(main(cfg));

const CONFIG: Config = {
	multiplier: 3.5,
	minimum: 0.1,
	currentTime: () => new Date().getTime() / 1000 / 60 / 60,
	maxLearnable: 3,
	getInputFn: ask,
	handlers: consoleHandlers(() => CONFIG),
	filename: Deno.args[0],
	hider: thunkify(() => createHider(1, CONFIG.filename)),
	flexibility: 0.07,
};
mainIO(CONFIG).run();

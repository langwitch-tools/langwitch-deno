import { produce } from "../pure_deps.ts";

import { asNew } from "../frontend/concept.ts";
import { markCtx, update } from "../frontend/marker.ts";
import { sort } from "../frontend/sorter.ts";
import { mostDissim } from "../heuristics/maxdissim.ts";
import { nextConcept } from "../queries/nextconcept.ts";
import { suggestContexts } from "../queries/nextcontext.ts";
import { shouldGraduate } from "../queries/shouldgraduate.ts";
import { AIO, DoNothing, plog } from "../types/purify.ts";
import { Context, newContext, u32 } from "../types/types.ts";
import { Sim } from "../utils/stringsim.ts";
import { Config } from "./Config.ts";
import { EitherS, State, StateReady } from "./state.ts";
import { awaitAnswer, displayResults } from "./view.ts";
import { ExternalConfigInterface } from "../config_helpers/ConfigInterface.ts";
import { ContextHolder } from "../db/manager.ts";
import { Database } from "../frontend/database.ts";

export const chooseBest =
	<T>(cfg: Config<T>) =>
	(state: State<EitherS>) =>
	(learning: Set<u32>) => {
		const mappedLearning = Array.from(learning).map((i) => ({
			word: i,
			dist: 1 - 1 / state.db.hashes[i].length,
		}));
		const best = mostDissim({
			strength: 0.7,
			distanceFn: (id1: u32) => (id2: u32) => {
				return Sim.fullSimilarity(state.db.hashes[id1])(
					state.db.hashes[id2]
				);
			},
		})(mappedLearning).slice(0, cfg.maxLearnable);
		return new Set(best.map((c) => c.candidate.word));
	};
export const initialise =
	<T>(cfg: Config<T>) =>
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
	<T>(cfg: Config<T>) =>
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
	<T extends ExternalConfigInterface>(cfg: Config<T>) =>
	(state: StateReady) =>
	async (answer: string): Promise<StateReady> => {
		if (answer == "") {
			answer = state.topContext.metadata.original;
		}
		const scores = await markCtx(cfg)(state.topContext)(answer);
		const newDb = produce(state.db, (db) => {
			const toUpdate = update(cfg)(db)(scores);
			toUpdate.forEach((c) => (db.concepts[c.id] = c));
		});
		return {
			...state,
			db: newDb,
			desiredHideLevel: 0,
		};
	};
//TODO: READ FROM CONFIG, LEARN-LIMIT
export const checkGraduation =
	<T>(cfg: Config<T>) =>
	async (state: StateReady) => {
		const graduatedIds = shouldGraduate(state.db)(new Set(state.learning));
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
			const numToAdd = 25;

			const next = await nextConcept(s.holder)(known, numToAdd).then(
				(ns) =>
					Array.from(
						chooseBest(cfg)(s)(new Set([...ns, ...learning]))
					)
						.filter((n) => !learning.has(n) && !known.has(n))
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
			s.stats.learnCount += graduatedIds.length;
			s.stats.knownCount = known.size;
			s.known = Array.from(known);
			s.learning = Array.from(learning);
		});
	};

export const isCommand = (answer: string): answer is "x" | "k" | "h" =>
	["x", "k", "h"].includes(answer);

// may need to remove the workers entirely because they fuck with garbage collection and aren't referentially transparent.
export const updateFromAnswer =
	<T extends ExternalConfigInterface>(cfg: Config<T>) =>
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

export const itemsIter = async (
	range: number,
	ctxs: Context[],
	knownIds: number[],
	callback?: (a0: Set<number>) => void | Promise<void>
) => {
	const holder = await ContextHolder.spawn(ctxs);
	const knowns = new Set(knownIds);
	let total = 0;
	const learnable = [];
	for (;;) {
		const count = knowns.size > 25 ? 20 : 3;
		const newBatch = await holder.getNextConcepts(knowns, count);
		learnable.push(...newBatch);
		callback ? callback(newBatch) : null;
		total += newBatch.size;
		if (total >= range) {
			break;
		}
		newBatch.forEach((n) => knowns.add(n));
	}
	const knownCtxs = await holder
		.onlyKnown(knowns)
		.then((xs) => xs.slice(0, 149999));
	holder.shutdown();
	return { knownCtxs, learnable };
	// TODO: Ask prompt, confirm
};

export const refresh =
	(languageName: string, maxPerSession: number) => async (db: Database) => {
		const transformedCtxs = Object.values(db.contexts).map((c) =>
			newContext(c.metadata.id, new Set(c.concepts))
		);

		const [known, learning] = ((db) => {
			const known: number[] = [];
			const learning: number[] = [];
			Object.values(db.concepts).forEach((c) =>
				c.decayCurve > -0.4 ? known.push(c.id) : learning.push(c.id)
			);
			return [known, learning];
		})(db);

		const { knownCtxs, learnable } = await itemsIter(
			maxPerSession,
			transformedCtxs,
			known,
			(s) => s.forEach((i) => console.log(db.hashes[i]))
		);

		const newIter = knownCtxs
			.map((i) => db.contexts[i])
			.map((c) => newContext(c.metadata.id, new Set(c.concepts)));

		const holder = await ContextHolder.spawn(newIter);

		const longest = [...knownCtxs]
			.map((i) => db.contexts[i])
			.sort((a, b) => b.metadata.words.length - a.metadata.words.length)
			.slice(0, 6)
			.map((i) => `${i.metadata.original} ➤ ${i.metadata.translation}`);

		const state: State<null> = {
			db,
			known,
			learning,
			holder,
			queue: [],
			topContext: null,
			stats: {
				lang: languageName,
				learnCount: 0,
				knownCount: known.length,
			},
			desiredHideLevel: 0,
			lastResponse: "",
			noMoreLearnablesLeft: false,
		};

		return {
			state,
			learnable: learnable.map((i) => db.hashes[i]),
			longest,
		};
	};

export const handleSessionRefresh =
	<T extends ExternalConfigInterface>(cfg: Config<T>) =>
	async (s: StateReady) => {
		const { state, learnable, longest } = await refresh(
			s.stats.lang,
			cfg.maxPerSession
		)(s.db);
		const conf = cfg.getLearnConfirmFn({
			words: learnable,
			sentences: longest,
		});
		const s2 = AIO.ofS(() =>
			initialise(cfg)(state).then(updateTopContext(cfg))
		);
		return s2.join(conf).map(([s3, _]) => s3);
	};
// exit, known, hint
// could have a generator that continually yields states and just stops once

// needs to be able to communicate things like "show more of the letters than last time" inside the state
export const main =
	<T extends ExternalConfigInterface>(cfg: Config<T>) =>
	async (s: StateReady): Promise<AIO<StateReady>> => {
		const newestWord = s.topContext.concepts
			.filter((n) => s.learning.includes(n))
			.map((n) => s.db.concepts[n])[0];
		const seen = newestWord ? newestWord.timesSeen : 5;
		if (
			s.noMoreLearnablesLeft ||
			s.stats.learnCount >= cfg.maxPerSession - 5
		) {
			const s4 = await handleSessionRefresh(cfg)(s);
			return s4.fmap((finalState) => main(cfg)(finalState));
		}

		const audio = await cfg.externalConfig.fetchAudio
			.fmap((get) =>
				cfg.externalConfig.playAudio.map((say) =>
					get(s.topContext.metadata.original).fmap(say)
				)
			)
			.getOrElse(() => DoNothing);
		const data = await cfg.externalConfig.fetchData
			.map((r) => r(s.topContext.metadata.original).fmap(plog.log))
			.getOrElse(() => DoNothing);

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
				.and(async (answer) =>
					isCommand(answer)
						? plog.log("Recalculating!")
						: displayResults(cfg)(s.stats)({
								userAnswer: answer,
								referenceAnswer: s.topContext.metadata.original,
								conceptScores: await markCtx(cfg)(s.topContext)(
									answer
								),
								cache: {
									audioPlayer: audio,
									contextInfo: data
								}
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
				//.and((finalState) => plog.log(viewDebug(finalState)))
				.fmap((finalState) => main(cfg)(finalState))
		);
	};
// since everything is immutable, we could calculate a new state in the case that the user got the answer correct, etc.?
// no, but it mutates the backend which also prevents concurrency.
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

import { produce } from "../pure_deps.ts";

import { asKnown, asNew } from "../frontend/concept.ts";
import { update } from "../frontend/marker.ts";
import { sort } from "../frontend/sorter.ts";
import { mostDissim } from "../heuristics/maxdissim.ts";
import { nextConcept } from "../queries/nextconcept.ts";
import { suggestContexts } from "../queries/nextcontext.ts";
import { shouldGraduate } from "../queries/shouldgraduate.ts";
import { AIO, DoNothing, pDeno, pfs, plog } from "../types/purify.ts";
import { Context, newContext, u32 } from "../types/types.ts";
import { Sim } from "../utils/stringsim.ts";
import { Config } from "./Config.ts";
import { CommandHandlers, State } from "./state.ts";
import { ExternalConfigInterface } from "../io/view.ts";
import { ContextHolder } from "../db/manager.ts";
import { Database, save } from "../frontend/database.ts";
import { View } from "../io/view.ts";
import { ask } from "../io/console/ask.ts";

export const chooseBest =
	<T, Meta>(cfg: Config<T>) =>
	(state: State<Meta>) =>
	(learning: Set<u32>) => {
		const mappedLearning = Array.from(learning).map((i) => ({
			word: i,
			dist: 1 - 1 / state.db.hashes[i].length,
		}));
		const best = mostDissim({
			strength: 0.5,
			distanceFn: (id1: u32) => (id2: u32) => {
				return Sim.fullSimilarity(state.db.hashes[id1])(
					state.db.hashes[id2]
				);
			},
		})(mappedLearning).slice(0, cfg.maxLearnable);
		return new Set(best.map((c) => c.candidate.word));
	};

export const initialise =
	<T, Meta>(cfg: Config<T>) =>
	async (state: State<Meta>): Promise<State<Meta>> => {
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
	<T, Meta>(cfg: Config<T>) =>
	(state: State<Meta>): State<Meta> => {
		const res = sort<T, Meta>(cfg)(state)(state.queue);
		if (res === undefined) {
			throw new Error("Queue was empty.");
		}
		return {
			...state,
			queue: res.map((q) => q[0]),
			desiredHideLevel: 0,
		};
	};

export const markAndUpdate =
	<T extends ExternalConfigInterface, Meta>(cfg: Config<T>) =>
	(state: State<Meta>) =>
	async (answer: string): Promise<State<Meta>> => {
		const scores = await state.queue[0].markAnswer(answer);
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
	<T, Meta>(cfg: Config<T>) =>
	async (state: State<Meta>): Promise<State<Meta>> => {
		const graduatedIds = shouldGraduate(state.db)(new Set(state.learning));
		if (
			graduatedIds.length === 0 &&
			state.learning.length >= cfg.maxLearnable
		) {
			return state;
		}
		return await produce(state, async (s: State<Meta>) => {
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

			const existingIds = new Set(s.queue.map((i) => i.id));
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
	<T extends ExternalConfigInterface, Meta>(cfg: Config<T>) =>
	(s: AIO<State<Meta>>) =>
	(answer: string): AIO<State<Meta>> | never => {
		s = s.map((state) => {
			return produce(state, (st) => {
				st.lastResponse = answer;
			});
		});
		if (!isCommand(answer)) {
			return s
				.map((state) => markAndUpdate<T, Meta>(cfg)(state)(answer))
				.map(checkGraduation<T, Meta>(cfg))
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
	<Meta>(languageName: string, maxPerSession: number) =>
	async (db: Database<Meta>) => {
		const transformedCtxs = Object.values(db.contexts).map((c) =>
			newContext(c.id, new Set(c.concepts))
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
			.map((c) => newContext(c.id, new Set(c.concepts)));

		const holder = await ContextHolder.spawn(newIter);

		const state: State<Meta> = {
			db,
			known,
			learning,
			holder,
			queue: [],
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
		};
	};

export const handleSessionRefresh =
	<T extends ExternalConfigInterface, Meta>(cfg: Config<T>) =>
	async (s: State<Meta>): Promise<AIO<State<Meta>>> => {
		const { state, learnable } = await refresh<Meta>(
			s.stats.lang,
			cfg.maxPerSession
		)(s.db);
		const conf = cfg.getLearnConfirmFn({
			words: learnable,
		});
		const s2 = AIO.ofS(() =>
			initialise<T, Meta>(cfg)(state).then(updateTopContext(cfg))
		);
		return s2.join(conf).map(([s3, _]) => s3);
	};
// exit, known, hint
// could have a generator that continually yields states and just stops once

// needs to be able to communicate things like "show more of the letters than last time" inside the state
export const main =
	<T extends ExternalConfigInterface, Meta>(view: View<Meta>) =>
	(cfg: Config<T>) =>
	async (s: State<Meta>): Promise<AIO<State<Meta>>> => {
		const newestWord = s.queue[0].concepts
			.filter((n) => s.learning.includes(n))
			.map((n) => s.db.concepts[n])[0];
		const seen = newestWord ? newestWord.timesSeen : 5;
		if (
			s.noMoreLearnablesLeft ||
			s.stats.learnCount >= cfg.maxPerSession - 5
		) {
			const s4 = await handleSessionRefresh<T, Meta>(cfg)(s);
			return s4.fmap((finalState: State<Meta>) =>
				main<T, Meta>(view)(cfg)(finalState)
			);
		}

		const asker = await view.showPrompt(s.stats, {
			ctxs: [...s.queue],
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
						: view.displayResults(s.stats, {
								userAnswer: answer,
								ctxs: [...s.queue],
								conceptScores: (
									await s.queue[0].markAnswer(answer)
								).map(([u, n]) => [s.db.hashes[u], n]),
						  })
				)
				//.and((ans) => plog.log(ans))
				//.and((_ans) => plog.log(viewDebug(s)))
				.fmap((answer) =>
					updateFromAnswer<T, Meta>(cfg)(AIO.ofS(() => s))(answer)
				)
				.and((finalState) => cfg.externalConfig.saveTo.map(f => pDeno.writeTextFile(f, save(finalState.db))).getOrElse(() => DoNothing))
				.and((finalState) =>
					isCommand(finalState.lastResponse)
						? DoNothing
						: cfg.getInputFn("Press enter to continue")
				)
				//.and((finalState) => plog.log(viewDebug(finalState)))
				.fmap((finalState) => main<T, Meta>(view)(cfg)(finalState))
		);
	};

export const consoleHandlers = <A>(cfg: () => Config<A>): CommandHandlers => ({
	known: <T>(s: State<T>) => {
		const newState = produce(s, (draft) => {
			draft.queue[0].concepts.forEach(
				(c) =>
					(draft.db.concepts[c] = asKnown(cfg())(
						draft.db.concepts[c]
					))
			);
		});
		return checkGraduation<A, T>(cfg())(newState).then(
			updateTopContext<A, T>(cfg())
		);
	},
	hint: <T>(s: State<T>) => {
		const newState = produce(s, (draft) => {
			draft.desiredHideLevel += 1;
		});
		return newState;
	},
	exit: <T>(s: State<T>): AIO<never> => {
		const json = save(s.db);
		return ask("Where would you like me to save to?")
			.fmap((filename) => pfs.writeFile(filename, json))
			.fmap(() => Deno.exit());
	},
});
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

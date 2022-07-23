import { produce } from "../pure_deps.ts";
import { asKnown } from "../frontend/concept.ts";
import { Database, load, newDatabase, save } from "../frontend/database.ts";
import { makeHider, Hider } from "../hints/hint.ts";
import { readFileIntoDB } from "../preproc/main.ts";
import { Config } from "../state/Config.ts";
import {
	initialise,
	updateTopContext,
	main,
	checkGraduation,
	refresh,
} from "../state/loop.ts";
import { CommandHandlers, State, StateReady } from "../state/state.ts";
import { ask } from "../state/view.ts";
import { AIO, fileExists, readFile, pfs } from "../types/purify.ts";
import { Context, newContext } from "../types/types.ts";
import { ExternalConfig } from "./ExternalConfig.ts";
import { makeIter } from "./fetch_sentences.ts";
import { mapConfig, ExternalConfigInterface } from "./ConfigInterface.ts";
import { confirm } from "./learn_confirm.ts";
export const makeSession = (c: ExternalConfig) =>
	makeIter(c.get_sentences_from)
		.map(async (iter) => {
			const db = await readFileIntoDB(
				iter,
				{ engColumn: 0, otherColumn: 1 },
				c.get_sentences_from.collect_this_many_sentences
			);
			return db;
		})
		.map((db) => ({ db, hider: makeHider(db) }));

// the bug must be occurring somewhere before the sentences have fully loaded, which means it's a side-effect that occurs asynchronously while the generator is still yielding values.

export const fromFile = (cfg: ExternalConfig) => (db: Database) =>
	fileExists(cfg.save_my_concepts_to_this_file)
		.fmap((b) =>
			b
				? readFile(cfg.save_my_concepts_to_this_file).map((json) =>
						load(db)(json)
				  )
				: AIO.ofS(() => db)
		)
		.map(refresh(cfg.language, 16)); //!! MAX PER SESSION

export const makeInnerConfig = ({
	extCfg,
	hider,
}: {
	extCfg: ExternalConfig;
	hider: Hider;
}): Config<ExternalConfigInterface> => {
	const CONFIG: Config<ExternalConfigInterface> = {
		multiplier: 3.5,
		minimum: 0.1,
		currentTime: () => new Date().getTime() / 1000 / 60 / 60,
		maxLearnable: 3,
		getInputFn: ask,
		handlers: consoleHandlers(() => CONFIG),
		flexibility: 0.07,
		externalConfig: mapConfig(extCfg),
		hider: () => Promise.resolve(hider),
		getLearnConfirmFn: confirm,
		maxPerSession: 16
	};
	return CONFIG;
};

export const start = (cfg: ExternalConfig) =>
	makeSession(cfg).fmap(({ db, hider }) => {
		const aioState = fromFile(cfg)(db);
		const innerConfig = makeInnerConfig({ extCfg: cfg, hider });
		return aioState
			.map(async ({ state, learnable, longest }) => {
				const [s, _] = await Promise.all([
					initialise(innerConfig)(state),
					confirm({ words: learnable, sentences: longest }).run(),
				]);
				return s;
			})
			.map((s) => updateTopContext(innerConfig)(s))
			.fmap(main(innerConfig));
	});

export const consoleHandlers = <T>(cfg: () => Config<T>): CommandHandlers => ({
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

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
	consoleHandlers,
} from "../state/loop.ts";
import {  State } from "../state/state.ts";
import { AIO, fileExists, readFile } from "../types/purify.ts";
import { ExternalConfig } from "./ExternalConfig.ts";
import { makeIters } from "./fetch_sentences.ts";
import { mapConfig, ExternalConfigInterface } from "../io/view.ts";
import { confirm } from "./learn_confirm.ts";
import { LanguageMetadata } from "../frontend/context.ts";
import { ask } from "../io/console/ask.ts";
import { createConsoleView } from "../io/console/mod.ts";
export const makeSession = (c: ExternalConfig) =>
	makeIters(c.get_sentences_from)
		.map(async (iter) => {
			const db = await readFileIntoDB(
				iter,
				{ engColumn: 0, otherColumn: 1 },
				35,
				c.transliteration_options
					.convert_my_answers_to_this_before_marking,
				c.preprocessor
			);
			return db as Database<LanguageMetadata>;
		})
		.map((db) => ({ db, hider: makeHider(db) }));

// the bug must be occurring somewhere before the sentences have fully loaded, which means it's a side-effect that occurs asynchronously while the generator is still yielding values.

export const fromFile =
	(cfg: ExternalConfig) => (db: Database<LanguageMetadata>) =>
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
		maxPerSession: 16,
	};
	return CONFIG;
};

export const start = (cfg: ExternalConfig) =>
	makeSession(cfg).fmap(({ db, hider }) => {
		const aioState = fromFile(cfg)(db);
		const innerConfig = makeInnerConfig({ extCfg: cfg, hider });
		const view = createConsoleView(hider, innerConfig.externalConfig);
		return aioState
			.map(async ({ state, learnable }) => {
				const [s, _] = await Promise.all([
					initialise(innerConfig)(state),
					confirm({ words: learnable }).run(),
				]);
				return s as State<LanguageMetadata>;
			})
			.map((s) =>
				updateTopContext<
					typeof innerConfig.externalConfig,
					LanguageMetadata
				>(innerConfig)(s)
			)
			.fmap(main(view)(innerConfig));
	});

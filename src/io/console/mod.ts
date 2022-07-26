import { LanguageMetadata, MarkedResult } from "../../frontend/context.ts";
import { Hider } from "../../hints/hint.ts";
import { Stats } from "../../state/state.ts";
import {
	View,
	mapConfig,
	ExternalConfigInterface,
	AwaitingAnswer,
	DisplayResults,
} from "../view.ts";
import { ask } from "./ask.ts";
import { awaitAnswer, displayResults } from "./view.ts";

export const createConsoleView = (
	hider: Hider,
	config: ExternalConfigInterface
): View<LanguageMetadata> => {
	return {
		showPrompt: (stats: Stats, prompt: AwaitingAnswer<LanguageMetadata>) =>
			awaitAnswer({hider, config, stats, prompt}),
		displayResults: (stats: Stats, results: DisplayResults<LanguageMetadata>) =>
			displayResults({stats, results, config}),
		getResponse: (q: string) => ask(q),
	};
};

import { awaitAnswer, displayResults } from "../state/view.ts";

const _test = () => {
	const STATS = {
		learnCount: 4,
		lang: "Mongolian",
	};
	const CTX = {
		id: 0,
		words: "khel surakh ni mash khögjiltei baidag".split(" "),
		original: "Khel surakh ni mash khögjiltei baidag",
		translation: "Language learning is very fun",
	};
	return awaitAnswer(STATS)({
		ctx: {
			metadata: CTX,
			concepts: [1, 2, 3, 4],
		},
		newWord: "baidag",
		hideModeForFocusWord: "both",
		hideLevel: 1
	}).fmap(() =>
		displayResults(STATS)({
			userAnswer: "khel sorakh ni mash khog bai??",
			referenceAnswer: "Khel surakh ni mash khögjiltei baidag",
		})
	);
};

_test().run();

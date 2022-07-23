```ts
import { readFile } from "../pre/preproc";
import * as C from "../frontend/concept";
import * as K from "../types/types";
import * as S from "../frontend/sorter";
import * as M from "../frontend/marker";
import { ContextHolder } from "../db/manager";
import { time, start } from "../utils/utils";
import { hash } from "../utils/hash";
import { punctuation } from "../utils/chars";
import prompter from "prompt-sync";
import * as _H from "../utils/hacks";
_H.dummy();

const prompt = prompter({ sigint: true });

(async () => {
	const db = await readFile("src/final_sentences_de.txt");
	const knownConcepts: Set<number> = new Set();

	const ctxs = Object.values(db.contexts).map(
		(c) => new K.Context(c.metadata.id, new Set(c.concepts))
	);
	const holder = await ContextHolder.spawn(ctxs);
	let newConceptIds = await holder.getNextConcepts(3);

	let addToDb = (ids: K.u32[]) => {
		let newConcepts = ids.map((c) => db.concepts[c] !== undefined ? db.concepts[c] : C.Concept.default(db.hashes[c], c));
		newConcepts.forEach((c) => (db.concepts[c.id] = c));
	};

	addToDb(newConceptIds);

	const fetchNext = async (newIds: K.u32[]) => {
		let ctxIds = await holder.getNextContexts(new Set(newIds));

		let hotContexts = ctxIds.map((c) => ({
			metadata: db.contexts[c].metadata,
			concepts: db.contexts[c].concepts,
		}));

		return hotContexts;
	};

    const isLearned = (c: C.Concept) => {
        return c.model.predictRecall(0.05) > 0.5;
    };

	let hotContexts = await fetchNext(newConceptIds);

	for (;;) {
		const currCtx = hotContexts[0];

		console.log("Translate", currCtx.metadata.translation);
		console.log(
			"The new word is",
			currCtx.concepts.filter((i) => newConceptIds.includes(i.id))[0].name
		);
		console.log(
			Array.from(currCtx.metadata.original)
				.map((c) => (c === " " || punctuation.has(c) ? c : "?"))
				.join("")
		);

		const answer = prompt("Please type in your answer: ");

		const res = M.markCtx(currCtx)(answer);
		console.log("Results:", res);
		//console.log(hotContexts);

		M.update(db)(res);

        const newlyLearned: K.u32[] = [];
        const stillLearning: K.u32[] = [];

        await newConceptIds.aForEach(async cid => {
            const c = db.concepts[cid];
			c.model.predictRecall(0.05) < 0.5 ? stillLearning.push(cid) : newlyLearned.push(cid);
		});

        if (newlyLearned.length > 0) {
            newlyLearned.forEach(c => knownConcepts.add(c));
            await holder.stripKnown(knownConcepts);
            let newIds = await holder
                .getNextConcepts(5);
            addToDb([newIds[0]]);
            console.log(newIds);
            hotContexts.push(...await fetchNext([...stillLearning, newIds[0]]));
            stillLearning.push(newIds[0]);
        };

        console.log(knownConcepts);

        newConceptIds = [...stillLearning];

		hotContexts = S.sort(0.5)(hotContexts).map((c) => c[0]);
	}
})();

//TODO: No mutability, no reassignments, no side-effects.
```
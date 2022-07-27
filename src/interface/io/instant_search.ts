import { tty } from "https://deno.land/x/cliffy@v0.24.2/ansi/tty.ts";
import {
	keypress, KeyPressEvent
} from "https://deno.land/x/cliffy@v0.24.2/keypress/mod.ts";
import { R } from "../../pure_deps.ts";
import { AIO } from "../../resource/types/purify.ts";
import { flatten, map } from "../../resource/utils/gens.ts";
import { FuseType } from "../../static/data/csvs.ts";
import { search } from "../../static/data/ms_tts_table.ts";
export type InstantSearchConfig<T> = {
	engine: FuseType<T>;
	mapfn: (a0: T) => unknown;
};

export const matches =
	(r1: Record<string | number, any>) => (r2: Partial<typeof r1>) =>
		Object.keys(r2)
			.map((k) => r2[k] === r1[k])
			.reduce((b1, b2) => b1 && b2);

export const emitQueries = async function* (
	keygen: AsyncIterableIterator<KeyPressEvent>,
	query: string
): AsyncIterableIterator<string> {
	for (;;) {
		const event: KeyPressEvent = await keygen.next().then((v) => v.value);
		const k = event.key;
		if (
			[{ key: undefined }, { key: "return" }, { ctrlKey: true, key: "c" }, {key: "escape"}]
				.some((p) => matches(event)(p))
		)
			return;
		query =
			k == "backspace"
				? query.slice(0, -1)
				: k == "space"
				? query + " "
				: query + k;
		yield query;
	}
};

export type ConsoleTask = {
	at: [number, number?];
	do: () => void | Promise<void>;
	reserve?: number;
	add?: (other: ConsoleTask) => ConsoleTask[];
};

export const ConsoleTask = (task: ConsoleTask): ConsoleTask => {
	return {
		...task,
		add: (other: ConsoleTask) => {
			return [
				task,
				{
					...other,
					at: [other.at[0] + 1],
				},
			];
		},
	};
};

export const performTasks = (tasks: ConsoleTask[]) =>
	tasks.map((t) =>
		AIO.ofA(async () => {
			tty.cursorTo(...t.at)();
			t.reserve ? tty.eraseDown(t.reserve)() : {};
			await t.do();
			tty.cursorTo(0, 0);
		})
	);

export const showSearch =
	<T>({ engine, mapfn }: InstantSearchConfig<T>) =>
	(query: string): ConsoleTask[] =>
		[
			{
				at: [0, 0],
				do: () => {},
				reserve: 100,
			},
			{
				at: [0, 0],
				do: () =>
					console.log(
						"%c>> %c" + query,
						"color: magenta",
						"color: cyan"
					),
				reserve: 1,
			},
			{
				at: [0, 2],
				do: () => {
					const topResult = engine.search(query).at(0);
					console.log(topResult ? mapfn(topResult.item) : "");
				},
				reserve: 10,
			},
		];

export const makeSession = <T>({ engine, mapfn }: InstantSearchConfig<T>) =>
	R.pipe(
		() => emitQueries(keypress(), ""),
		map(showSearch({ engine, mapfn })),
		map(performTasks),
		flatten
	);
tty.clearScreen();
for await (const task of makeSession({ engine: search, mapfn: (t) => t })())
	task.run();

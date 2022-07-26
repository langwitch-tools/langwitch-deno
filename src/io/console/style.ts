import { plog } from "../../types/purify.ts";

export interface Styler {
	style: () => string | string[];
}

export const W = (styles: string[] | string, msgs: string[] = [], join = false) => {
	const stylesList = typeof styles === "string" ? [styles] : styles;
	return {
		_: (style: string) => W([...stylesList, style].join("; "), [], true),
		$: (other: Styler) =>
			W([[...stylesList, ...other.style()].join("; ")], [], true),
		style: () => stylesList,
		log: (msg: string) =>
			join
				? plog.log("%c" + msg, stylesList.join("; "))
				: plog.log("%c" + [...msgs, msg].join("%c"), ...stylesList),
		chain: (msg: string) => (style: Styler) =>
			W([...stylesList, ...style.style()], [...msgs, msg]),
	};
};

export const [green, white, _yellow, _blue, _magenta, b, _ul, it] = [
	"color: green",
	"color: white",
	"color: yellow",
	"color: #74cdff",
	"color: magenta",
	"font-weight: bold",
	"text-decoration: underline",
	"font-style: italic;",
].map((s) => W(s));

export const linebreak = () =>
	plog.log("%c┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄", "color: grey");
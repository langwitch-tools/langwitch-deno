import { AIO } from "../types/AIO.ts";

const pfetch = AIO.wrap(fetch);

export type ClientConfig<B> = {
	path: `/${string}/`;
	after: (a0: Response) => B;
	base: string;
};

export type Split<Remainder extends string, Separator extends string> = Remainder extends `${infer R1}${Separator}${infer R2}` ? R1 | Split<R2, Separator> : Remainder extends `${infer R1}` ? R1 : never;

export const clients = <A, B>({ path, after, base }: ClientConfig<B>) => ({
	post: (body: A) =>
		fetch(base + path, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(after),
});

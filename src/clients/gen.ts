import { AIO } from "../types/AIO.ts";

const pfetch = AIO.wrap(fetch);

export type ClientConfig<B> = {
	path: `/${string}/`;
	after: (a0: Response) => B;
	base: string;
};

export const clients = <A, B>({ path, after, base }: ClientConfig<B>) => ({
	post: (body: A) =>
		pfetch(base + path, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		}).map(after),
});

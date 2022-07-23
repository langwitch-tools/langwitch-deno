import { fs, process } from "../deps.ts";
import { purify, AIO } from "./AIO.ts";
export { purify, AIO, DoNothing } from "./AIO.ts";
export const plog = purify(console);
export const pfs = purify(fs);
export const pprocess = purify(process);
export const pDeno = purify(Deno);
export const getArgs = AIO.ofS(() => Deno.args);
export const readFile = (filename: string): AIO<string> =>
	pDeno.readTextFile(filename);

export const fileExists = (filename: string): AIO<boolean> =>
	AIO.ofA(async () => {
		try {
			await Deno.stat(filename);
			// successful, file or directory must exist
			return true;
		} catch (error) {
			if (error instanceof Deno.errors.NotFound) {
				// file or directory does not exist
				return false;
			} else {
				// unexpected error, maybe permissions, pass it along
				throw error;
			}
		}
	});

export const pfetch = AIO.wrap(fetch);
import { Input, prompt } from "../../../deps.ts";
import { AIO } from "../../../resource/types/AIO.ts";


export const ask = (question: string) =>
	AIO.ofA(async (): Promise<string> => {
		//process.stdout.write("> ");
		//const arr = new Uint8Array(Array.from({ length: 100000 }));
		//await Deno.stdin.read(arr);
		//const zeroIdx = arr.findIndex((i) => i === 0);
		//return new TextDecoder().decode(arr.slice(0, zeroIdx - 1));
		return await prompt([
			{
				name: "answer",
				message: question,
				type: Input,
			},
		]).then((s) => s.answer!);
	});


import { wait } from "https://deno.land/x/wait@0.1.12/mod.ts";

export const progress = async () => {
	const spinner = (text: string) =>
		wait({
			spinner: {
				interval: 50,
				frames: ["🌱", "🍀", "🌿", "🌲", "🌳"],
			},
			text: text,
			color: "blue",
			interval: 150,
		});
	const write = async (text: string) => {
        const s1 = spinner(text).start();
        await new Promise((resolve) => setTimeout(resolve, 400));
        s1.stopAndPersist();
    }
    await write("◝(ᵔᵕᵔ)◜ beginning! just loadin' some modules...");
    await write("૮ ˶ᵔ ᵕ ᵔ˶ ა nearly done");
};
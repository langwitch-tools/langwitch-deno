import MinT from "./minified_table.ts";
import Tab from "./iso_639_2_table.ts";
import ISO from "./wals_table.ts";
import { join } from "./proxy.ts";
import { averageSort } from "./average.ts";

const best = (q: string) =>
	join(
		Tab,
		MinT,
		(a) => `${a["639-1"]} ${a["639-2[1]"]} ${a["639-3[2]"]} ${a["639-5[3]"]}`
	)(q)
		//.fmap((l1) =>
			//join(ISO, MinT, (a) => a["ID"])(q).map((l2) => [l1, l2])
		//)
		//.map(([l1, l2]) => averageSort(l1.slice(0, 20))(l2.slice(0, 20)));

best("french").map(console.log);
console.log(MinT.search("french")[0])
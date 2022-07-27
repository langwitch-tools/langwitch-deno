// joins two tables together
// i.e, you search "French" in the iso table - brings up fr. you take the keys of that and use it to search another table.

import { AMaybe } from "https://raw.githubusercontent.com/langwitch-tools/langwitch-deno/main/src/types/Maybe.ts";
import { FuseType, GetHeaders } from "./csvs.ts";

export const join =
	<A, B>(f1: FuseType<A>, f2: FuseType<B>, mapfn: (a: A) => string) =>
	(query: string): AMaybe<B[]> => {
		const res = f1.search(query).at(0);
        if (res === undefined) {
            return AMaybe.none();
        }
        const newq = mapfn(res["item"]);
        const res2 = f2.search(newq);
        return AMaybe.of(res2.map(e => e.item));
    }

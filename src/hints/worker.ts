import * as H from "./hint.ts";
import { Pool } from "../workerlib/w.ts";

export const createHider = async (column: number, filename: string) => {
	const pool = Pool.init(H.HiderManager, new URL("./hint.ts", import.meta.url), 1);
    const proxy = pool.createProxy();
    const lookupTable = await proxy.init(column, filename);
    return H.Hider(lookupTable);
}

export type Depromisified<A> = A extends Promise<infer T> ? T : A;
export type Hider = Depromisified<ReturnType<typeof createHider>>;
//console.log("initting");
//const hh = await ThreadedHider(0, "data/sentences_diverse_ilo.txt_shortened.txt");
//console.log("Done init");
//console.log(await hh.show(2, "banana"));
//console.log("Done");
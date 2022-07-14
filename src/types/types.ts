export class Context {
    all: Set<u32>;
	constructor(public id: u32, public unknowns: Set<u32>) {
        this.all = new Set([...unknowns]);
    }
}

export const reset = (c: Context) => c.unknowns = new Set([...c.all]);

export type u32 =  number;
export type Context = {
	all: Set<u32>;
	unknowns: Set<u32>;
	id: u32;
};

export const newContext = (id: u32, unknowns: Set<u32>) => {
    const un = new Set(unknowns);
	return {
		all: un,
		unknowns: un,
		id,
	};
};
export type u32 = number;

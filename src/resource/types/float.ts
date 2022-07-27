export class UnitFloat extends Number {
	constructor(n: number) {
		if (n > 1 || n < 0) {
			throw new TypeError("Out of range 0-1");
		}
		super(n);
	}
}


const E = 2.71828;
export type Hours = number;
export interface Memory {
	lastSeen: Hours;
	decayCurve: number;
}

export const fit = (c: Memory) => (recordedAt: Hours, accuracy: number) =>
	Math.log(accuracy) / (recordedAt - c.lastSeen);
// is how much it will be adjusted by to avoid noise
export const remodel =
	(flexibility = 0.3) =>
	(impliedDecayCurve: number, oldDecay: number) =>
		(impliedDecayCurve * flexibility) + oldDecay * (1 - flexibility);
export const predict = (when: Hours) => (c: Memory) =>
	Math.pow(E, c.decayCurve * (when - c.lastSeen));

export const adjust =
	(flexibility = 0.3) =>
	(c: Memory) =>
	(now: Hours, accuracy: number) => {
		let impliedDecayCurve = fit(c)(now, accuracy);
		impliedDecayCurve = impliedDecayCurve > -0.01 ? -0.01 : impliedDecayCurve < -1.0 ? -1.0 : impliedDecayCurve;
		return {
            decayCurve: remodel(flexibility)(impliedDecayCurve, c.decayCurve),
            lastSeen: now
        }
	};

const _test = () => {
    const m = {lastSeen: -0.5, decayCurve: -0.5};
	console.log(fit(m)(0, 0.8))
}
//_test()
// y = e^{-0.3x} - (hoursSinceLastSeen)

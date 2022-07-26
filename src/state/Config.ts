import { Hours } from "../frontend/concept.ts";
import { Hider } from "../hints/hint.ts";
import { AIO } from "../types/purify.ts";
import { CommandHandlers } from "./state.ts";


export type Config<T> = {
  multiplier: number;
  minimum: number;
  currentTime: () => Hours;
  maxLearnable: number;
  getInputFn: (a0: string) => AIO<string>;
  getLearnConfirmFn: (a: {words: string[]}) => AIO<void>;
	handlers: CommandHandlers;
  hider: () => Promise<Hider>;
  flexibility: number;
  externalConfig: T;
  maxPerSession: number;
};

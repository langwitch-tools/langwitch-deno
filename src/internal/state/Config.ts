import { AIO } from "../../resource/types/purify.ts";
import { Hours } from "../frontend/concept.ts";
import { Hider } from "../hints/hint.ts";
import { CommandHandlers } from "./state.ts";


export type Config<T> = {
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

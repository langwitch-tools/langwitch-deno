import { Hours } from "../frontend/concept.ts";
import { Hider } from "../hints/worker.ts";
import { AIO } from "../types/purify.ts";
import { CommandHandlers } from "./state.ts";


export type Config = {
  multiplier: number;
  minimum: number;
  currentTime: () => Hours;
  maxLearnable: number;
  getInputFn: (a0: string) => AIO<string>;
	handlers: CommandHandlers;
  hider: () => Promise<Hider>;
  filename: string;
  flexibility: number;
};

import { AIO } from "../resource/types/AIO.ts";
import { u32 } from "./frontend/concept.ts"
import { Database } from "./frontend/database.ts"

export type SessionInputs<T> = {
    inputs: {
        db: Database<T>,
        known: u32[]
    },
    parameters: {
        flexibility: number,
    },
    constraints: {
        maxPerSession: number,
        maxLearnable: number
    },
    io: {
        getResults: AIO<Record<u32, number>>
    }
}

// invert this? the io calls the state, not the other way around. this makes more sense because io will be able to handle commands, then we get a clean separation. callback passed into the state, then result returned as a promise.resolve?
// generally we want to minimise the amount of state being shared with io. or do we?
// so how is marking handled?
// the state just needs to be able to expose itself for io querying, and to get a Record<concept, score> to update itself.


// structure - onion rings of immutable configuration data creating each other in sequence, starting from the most concrete and impure to the most abstract and pure
interface Loggable {
    log: (s: string) => void;
}

export const logger = (queue: string[]) => {
    return {
        flush: function* (loggable: Loggable) {
            const internal = [...queue];
            for (;;) {
                const next = internal.shift();
                if (next) yield loggable.log(next)
                else break;
            }
        },
        add: (msg: string) => logger([...queue, msg])
    }
}

const t = logger([])
    .add("hello");

const m = t.add("hello2");

t.flush(console).next();
const gen = m.flush(console);
gen.next()
gen.next()
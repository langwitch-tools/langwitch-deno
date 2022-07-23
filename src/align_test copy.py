from collections import Counter
from itertools import chain
from typing import *
import sys
ratio = lambda start, end: lambda xs: xs[round(len(xs) * start) : round(len(xs) * end)]
slice = lambda start, end: lambda xs: (
    x for i, x in enumerate(xs) if i >= start and i < end
)


map = lambda fn: lambda xs: (fn(x) for x in xs)
filter = lambda filtfn: lambda xs: (x for x in xs if filtfn(x))


def flat(xs: List) -> Generator:
    for sect in xs:
        for i in sect:
            yield i


def fold(fn, init):  # <T>(acc: T, nx: T) -> T
    def appl(xs):
        prev = init
        for x in xs:
            prev = fn(prev, x)
        return prev

    return appl


def reduce(fn):  # <T>(acc: T, nx: T) -> T
    def appl(xs: Generator):
        prev = next(xs)
        for x in xs:
            prev = fn(prev, x)
        return prev

    return appl


def pipe(*fns):
    def apply(arg):
        for fn in fns:
            arg = fn(arg)
        return arg

    return apply


eagermap = lambda fn: pipe(map(fn), list)


def lens(key):
    def access(d):
        return d[key]

    return access


def path(*keys):
    def access(d):
        for k in keys:
            d = d[k]
        return d

    return access


split = lambda sep: lambda s: s.split(sep)
read = lambda f: open(f).readlines()
lines = pipe(read, split("\n"))
filt_nones = filter(lambda x: x is not None)
sort_by = lambda sortfn: lambda xs: sorted(xs, key=sortfn)
get_keys = lambda d: d.keys()

id = lambda x: x
consume = map(id)

# previous record: 11 secs
def preproc(s: str) -> str:
    return "".join(c for c in s if c.isalnum() or c == " ").lower()

count_words = lambda known: lambda col: pipe(
    map(path(col, "words")), flat, filter(lambda x: x not in known), Counter
)

unknown_len = lambda col: lambda known: pipe(
    path(col, "words"), lambda s: s - known, len
)

of_len = lambda length: lambda known: filter(
    lambda pair: unknown_len (0) (known) (pair) == length
    and unknown_len (1) ( known) (pair) == length
)

to_sentence = lambda s: {"original": s, "words": frozenset ([sys.intern(w) for w in preproc (s).split (" ")])}

open_sentences_file = pipe(
    read,
    map (lambda x: x.replace ("\n", "")),
    filter (lambda x: "\t" in x),
    map (split ("\t")),
    map (eagermap (to_sentence)),
)

get_words = lambda col: path (col, "words")


def dedup_by(fn):
    def dd(xs):
        results = {}
        for x in xs:
            r1 = fn(x)
            if r1 not in results:
                yield x
            results[r1] = x

    return dd


# column mapping to reduce duplication?
# ideally for purity should be non-mutating variants?
# then inputs are: known, good_pairs, dictionary?
def test(filename, ENGLISH_COLUMN, OTHER_COLUMN):

    pxs_generator = open_sentences_file(filename)
    known = set()
    good_pairs = {}
    dictionary = dict()  # en_word|fr_word:conf (int)

    guessed_pairs = {}

    partial_dict = lambda ln: lambda col: pipe(
        of_len(ln) (known), count_words(known) (col)
    )

    n1 = partial_dict(1)
    n2 = partial_dict(2)

    best_words = lambda n_pxs: pipe(
        get_keys,
        filter(lambda n: n not in known),
        list,
        sort_by(lambda k: n_pxs[k]),
        reversed,
        list,  # , slice(0, 150)
    ) (n_pxs)

    overlap = pipe(map(set), reduce(lambda s1, s2: s1 & s2))

    current_guess_length = len(guessed_pairs.keys())

    pxs = []

    while True:
        pxs = [next(pxs_generator) for _ in range(50000)]

        for i in range(2500):
            top_eng_words = pipe(n2(ENGLISH_COLUMN), best_words) (pxs)
            top_other_words = pipe(n2(OTHER_COLUMN), best_words) (pxs)

            top_eng_n1s = n1(ENGLISH_COLUMN) (pxs)
            top_other_n1s = n1(OTHER_COLUMN) (pxs)
            # print(top_eng_words, top_other_words, top_eng_n1s, top_other_n1s)

            available_eng = overlap([top_eng_words, get_keys(top_eng_n1s)])
            available_other = overlap([top_other_words, get_keys(top_other_n1s)])
            # this can be deduplicated, the join happens below
            # print(available_eng, available_other)

            available_pxs = pipe(
                filter(lambda x: len(get_words(ENGLISH_COLUMN) (x) & available_eng) == 1),
                filter(lambda x: len(get_words(OTHER_COLUMN) (x) & available_other) == 1),
                of_len(1) (known),
            ) (pxs)

            # print(available_pxs)

            get_first_word = lambda available, col: pipe(
                get_words(col), lambda ws: ws & available, list, lens(0)
            )

            def modify_dict(d):
                def inner(px):
                    new_english_word = get_first_word(available_eng, ENGLISH_COLUMN) (px)
                    new_other_word = get_first_word(available_other, OTHER_COLUMN) (px)
                    joint = f"{new_english_word}|{new_other_word}"
                    if joint in d:
                        d[joint] += 1
                    else:
                        d[joint] = 1
                    return {"pair": px, "entry": joint}

                return inner

            tagged = pipe(
                map(modify_dict(dictionary)),
                sort_by(lambda x: dictionary[x["entry"]]),
                reversed,
                dedup_by(lambda x: x["pair"][OTHER_COLUMN]["words"]),
                filter(lambda x: dictionary[x["entry"]] > 1),
                slice(0, 50),
                list,
            ) (available_pxs)

            for w1, w2 in map(lambda t: t["entry"].split("|")) (tagged):
                known.add(w1)
                known.add(w2)
                if w1 not in guessed_pairs:
                    guessed_pairs[w1] = set()
                guessed_pairs[w1].add(w2)

            #for p1, p2 in map(lambda t: t["pair"]) (tagged):
                #good_pairs[p1["original"]] = p2["original"]
                #yield p1["original"], p2["original"]

            pxs = [
                px for px in pxs if px[OTHER_COLUMN]["original"] not in good_pairs.keys()
            ]

            new_guess_length = len(guessed_pairs.keys())
            if current_guess_length == new_guess_length:
                break
            current_guess_length = new_guess_length
            print(current_guess_length)

        with open(filename + "_dictionary.txt", "w") as f:
            f.write("\n".join('"' + k + '"\t->\t"' + ", ".join(list(v)) + '"' for k, v in guessed_pairs.items()))

FILENAME = "data/ast-eng_combined.tsv"
# getting word alignments?
with open(FILENAME + "_output.txt", "w") as f:
    for line in test(FILENAME, 1, 0):
        f.write(line[0] + "\t" + line[1] + "\n")


# strategy - consume in blocks of 50k at a time?
# say you have a list of mixed sentences .pick one. what is the closest path to get there? that path will include only words in the language you're interested in, allowing you to filter by language with just a single sentence as an example (albeit a few thousand more as context)

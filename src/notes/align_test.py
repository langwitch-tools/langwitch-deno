from collections import Counter
from typing import *


def preproc(s: str) -> str:
    return "".join(c for c in s if c.isalnum() or c == " ").lower()


def pairs(f: str, sep: str = "\t") -> List[List[str]]:
    return [l.split(sep) for l in open(f).read().split("\n")]


def best_word(pxs: List[List[str]], known: Set[str], col: int = 0) -> Counter:
    words = []
    [words.extend(w for w in p[col].split(" ") if w not in known) for p in pxs]
    return Counter(words)


def oflen(pxs: List[List[str]], known: Set[str], length: int) -> List[List[str]]:
    return [
        px
        for px in pxs
        if len(set(px[1].split(" ")) - known) == length
        and len(set(px[0].split(" ")) - known) == length
    ]


def test():
    pxs = pairs("data/eng-ido_combined.tsv")
    for px in pxs:
        px[0] = preproc(px[0])
        px[1] = preproc(px[1])
    known = set()
    good_pairs = {}
    dictionary = dict()  # en_word|fr_word:conf (int)
    for i in range(2500):
        top_eng_n2s = best_word(oflen(pxs, known, 2), known, 0)
        top_fry_n2s = best_word(oflen(pxs, known, 2), known, 1)
        top_k_n2s_eng = list(
            sorted(top_eng_n2s.keys(), key=lambda k: top_eng_n2s[k], reverse=True)
        )[:35]
        top_k_n2s_fry = list(
            sorted(top_fry_n2s.keys(), key=lambda k: top_fry_n2s[k], reverse=True)
        )[:35]

        top_eng_n1s = best_word(oflen(pxs, known, 1), known, 0)
        top_fry_n1s = best_word(oflen(pxs, known, 1), known, 1)
        # print(top_eng_n2s, top_fry_n2s, top_eng_n1s, top_fry_n1s)

        available_eng = set(top_k_n2s_eng) & set(top_eng_n1s.keys())
        available_fry = set(top_k_n2s_fry) & set(top_fry_n1s.keys())
        # print(available_eng, available_fry)
        available_pxs = [
            px
            for px in pxs
            if len(set(px[0].split(" ")) & available_eng) == 1
            and len(set(px[1].split(" ")) & available_fry) == 1
        ]
        available_pxs = oflen(available_pxs, known, 1)

        tagged = []
        for px in available_pxs:
            new_english_word = list(set(px[0].split(" ")) & available_eng)[0]
            new_frysian_word = list(set(px[1].split(" ")) & available_fry)[0]
            joint = f"{new_english_word}|{new_frysian_word}"
            if joint in dictionary:
                dictionary[joint] += 1
            else:
                dictionary[joint] = 1
            tagged.append({"pair": px, "entry": joint})
        tagged.sort(key=lambda x: dictionary[x["entry"]], reverse=True)
        for t in tagged[0:5]:
            words = t["entry"].split("|")
            known.add(words[0])
            known.add(words[1])
            good_pairs[t["pair"][0]] = t["pair"][1]
            # for w in (set(px[0].split(" ")) & available_eng) | (set(px[1].split(" ")) & available_fry):
            # known.add(w)
        print(good_pairs)


# getting word alignments?
test()

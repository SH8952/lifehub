#!/usr/bin/env python3
"""도구 page.tsx에 <KoCommentary/>를 연결한다 (이미 있으면 건너뜀).
위치: RelatedTools 앞(약 80%) 또는 뒤(약 20%) — 도구 id 해시로 결정(재현 가능).
사용: python3 automation/add_ko_commentary.py <tool-id> [<tool-id> ...]
"""
import os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = os.path.join(ROOT, "src", "app", "[locale]", "tool")


def fnv32(s: str) -> int:
    h = 0x811C9DC5
    for ch in s:
        h ^= ord(ch)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return h


def main(ids):
    for tid in ids:
        f = os.path.join(BASE, tid, "page.tsx")
        s = open(f, encoding="utf-8").read()
        if "KoCommentary" in s:
            print("skip (already)", tid); continue
        imp = 'import RelatedTools from "@/components/RelatedTools";'
        rel = f'      <RelatedTools locale={{locale}} toolId="{tid}" />'
        if imp not in s or rel not in s:
            print("ERROR pattern missing", tid); continue
        kc = f'      <KoCommentary locale={{locale}} toolId="{tid}" />'
        related_first = fnv32(tid + "|pos") % 10 < 2
        new_rel = (rel + "\n" + kc) if related_first else (kc + "\n" + rel)
        s = s.replace(imp, imp + '\nimport KoCommentary from "@/components/KoCommentary";', 1)
        s = s.replace(rel, new_rel, 1)
        open(f, "w", encoding="utf-8").write(s)
        print("ok", tid, "related-first" if related_first else "commentary-first")


if __name__ == "__main__":
    main(sys.argv[1:])

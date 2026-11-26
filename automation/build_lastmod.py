#!/usr/bin/env python3
"""도구별 sitemap lastmod 맵(src/lib/tool-lastmod.ts)을 생성한다.

기준: 각 도구 폴더(src/app/[locale]/tool/<id>/)의 '마지막 변경일'.
  - 커밋되지 않은 변경이 있으면 오늘 날짜(곧 푸시될 변경이므로)
  - 아니면 해당 폴더의 마지막 커밋 날짜
빌드 때마다 "지금"으로 찍지 않는다 — 실제로 내용이 바뀐 도구만 날짜가 갱신된다.
사용: 변경 작업을 마친 뒤(커밋 전) `python3 automation/build_lastmod.py`
"""
import datetime
import os
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOL_DIR = os.path.join("src", "app", "[locale]", "tool")
OUT = os.path.join(ROOT, "src", "lib", "tool-lastmod.ts")


def run(*args):
    return subprocess.run(args, cwd=ROOT, capture_output=True, text=True, check=True).stdout.strip()


def main():
    today = datetime.date.today().isoformat()
    ids = sorted(
        d for d in os.listdir(os.path.join(ROOT, TOOL_DIR))
        if os.path.isdir(os.path.join(ROOT, TOOL_DIR, d))
    )
    rows = []
    for tid in ids:
        path = f"{TOOL_DIR}/{tid}"
        if run("git", "status", "--porcelain", "--", path):
            date = today
        else:
            date = run("git", "log", "-1", "--format=%cs", "--", path) or today
        rows.append((tid, date))
    lines = [
        "// 자동 생성 파일 — sitemap lastmod용, 도구 폴더의 마지막 변경일 (automation/build_lastmod.py)",
        "// 수동으로 편집하지 마세요. 도구 내용을 바꾼 뒤 커밋 전에 스크립트를 다시 실행하면 갱신됩니다.",
        "export const toolLastmod: Record<string, string> = {",
    ]
    lines += [f'  "{tid}": "{date}",' for tid, date in rows]
    lines.append("};")
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"{len(rows)} tools -> {os.path.relpath(OUT, ROOT)}")
    from collections import Counter
    for d, c in sorted(Counter(d for _, d in rows).items()):
        print(f"  {d}: {c}")


if __name__ == "__main__":
    main()

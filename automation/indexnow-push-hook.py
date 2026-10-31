#!/usr/bin/env python3
"""push 범위의 변경 파일을 공개 주소로 변환해 IndexNow로 자동 알림 (LifeHub).

push-and-notify.sh 가 `git push` 성공 직후 백그라운드로 호출한다. 이 스크립트가
어떤 이유로 실패해도 절대 push 결과에 영향을 주지 않는다(항상 종료 코드 0).

변환 규칙:
  src/app/[locale]/tool/<id>/*          -> /<locale>/tool/<id>   (4개 로케일)
  src/app/[locale]/page.tsx             -> /<locale>             (홈, 4개 로케일)
  src/app/[locale]/category/[id]/*      -> 동적 경로라 변환 대상 아님
  그 외(컴포넌트 공통 코드, 설정, 번역 파일 등)                  -> 주소 없음

안전장치:
  - 같은 주소는 24시간 안에 다시 보내지 않음 (~/Library/Logs/lifehub-indexnow-sent.json, 7일 보관)
  - 새 페이지(added)가 포함되면 최대 20분, 수정(modified)만 있으면 최대 4분 대기
    하며 30초 간격으로 200 응답을 확인한 주소만 전송
  - 키 파일이 없거나 네트워크 오류 등 어떤 예외가 나도 종료 코드는 항상 0

사용법:
  python3 automation/indexnow-push-hook.py --range <이전원격커밋>..HEAD
  python3 automation/indexnow-push-hook.py --range <범위> --map-only   (네트워크 없이 주소 목록만 출력)
  python3 automation/indexnow-push-hook.py --range <범위> --dry-run
  python3 automation/indexnow-push-hook.py --range <범위> --no-wait
  python3 automation/indexnow-push-hook.py --range <범위> --force      (24시간 중복 방지 무시)
  python3 automation/indexnow-push-hook.py --range <범위> --detach
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util

_submit_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "indexnow-submit.py")
_spec = importlib.util.spec_from_file_location("indexnow_submit", _submit_path)
indexnow_submit = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(indexnow_submit)

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOCALES = ["en", "es", "ja", "ko"]
SENT_LOG_PATH = os.path.expanduser("~/Library/Logs/lifehub-indexnow-sent.json")
SENT_TTL_SEC = 7 * 24 * 3600
DEDUPE_WINDOW_SEC = 24 * 3600

TOOL_RE = re.compile(r"^src/app/\[locale\]/tool/([A-Za-z0-9_-]+)/[^/]+$")
HOME_RE = re.compile(r"^src/app/\[locale\]/page\.tsx$")


def log(msg: str) -> None:
    indexnow_submit.log(msg)


def git_changed_files(repo_root: str, rev_range: str) -> list[tuple[str, str]]:
    """rev_range 안에서 추가/수정/이름변경된 파일 목록을 [(status, path)] 로 반환."""
    try:
        out = subprocess.run(
            ["git", "diff", "--name-status", "-M", rev_range],
            cwd=repo_root,
            capture_output=True,
            text=True,
            timeout=30,
            check=True,
        )
    except Exception as e:
        log(f"git diff 실패 (건너뜀): {e}")
        return []

    results = []
    for line in out.stdout.splitlines():
        parts = line.split("\t")
        if not parts:
            continue
        status = parts[0]
        if status.startswith("R") and len(parts) >= 3:
            results.append((status, parts[2]))  # 이름변경 후 새 경로
        elif status in ("A", "M") and len(parts) >= 2:
            results.append((status, parts[1]))
        # D(삭제)는 알릴 주소가 없으므로 건너뜀
    return results


def map_to_paths(changed: list[tuple[str, str]]) -> tuple[set[str], bool]:
    """변경 파일 목록을 (경로 집합, 추가파일포함여부) 로 변환."""
    paths: set[str] = set()
    has_added = False
    for status, filepath in changed:
        is_added = status.startswith("A")
        m = TOOL_RE.match(filepath)
        if m:
            tool_id = m.group(1)
            for locale in LOCALES:
                paths.add(f"/{locale}/tool/{tool_id}")
            has_added = has_added or is_added
            continue
        if HOME_RE.match(filepath):
            for locale in LOCALES:
                paths.add(f"/{locale}")
            has_added = has_added or is_added
            continue
        # 그 외(동적 라우트, 컴포넌트, 설정, 번역 등)는 변환 대상 아님
    return paths, has_added


def load_sent_log() -> dict:
    try:
        with open(SENT_LOG_PATH, encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, dict):
                return data
    except Exception:
        pass
    return {}


def save_sent_log(data: dict) -> None:
    try:
        os.makedirs(os.path.dirname(SENT_LOG_PATH), exist_ok=True)
        with open(SENT_LOG_PATH, "w", encoding="utf-8") as f:
            json.dump(data, f)
    except Exception as e:
        log(f"전송 기록 저장 실패 (무시): {e}")


def filter_recently_sent(paths: set[str], force: bool) -> set[str]:
    now = time.time()
    sent = load_sent_log()
    # 7일 지난 기록 정리
    sent = {p: ts for p, ts in sent.items() if now - ts < SENT_TTL_SEC}

    if force:
        return paths

    fresh = set()
    for p in paths:
        last = sent.get(p)
        if last is None or now - last >= DEDUPE_WINDOW_SEC:
            fresh.add(p)
    save_sent_log(sent)
    return fresh


def mark_sent(paths: list[str]) -> None:
    now = time.time()
    sent = load_sent_log()
    sent = {p: ts for p, ts in sent.items() if now - ts < SENT_TTL_SEC}
    for p in paths:
        sent[p] = now
    save_sent_log(sent)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--range", required=True, help="git rev 범위, 예: abc123..HEAD")
    parser.add_argument("--map-only", action="store_true", help="네트워크 없이 변환된 주소 목록만 출력")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--no-wait", action="store_true")
    parser.add_argument("--force", action="store_true", help="24시간 중복 방지 무시")
    parser.add_argument("--detach", action="store_true")
    args = parser.parse_args()

    if args.detach:
        cmd = [sys.executable, os.path.abspath(__file__)] + [
            a for a in sys.argv[1:] if a != "--detach"
        ]
        subprocess.Popen(
            cmd,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            stdin=subprocess.DEVNULL,
            start_new_session=True,
        )
        sys.exit(0)

    try:
        changed = git_changed_files(REPO_ROOT, args.range)
        paths, has_added = map_to_paths(changed)

        if args.map_only:
            for p in sorted(paths):
                print(p)
            log(f"[map-only] 범위 {args.range}: {len(paths)}개 주소 (추가파일포함={has_added})")
            sys.exit(0)

        if not paths:
            log(f"범위 {args.range}: 변환 대상 주소 없음")
            sys.exit(0)

        fresh_paths = filter_recently_sent(paths, force=args.force)
        if not fresh_paths:
            log(f"범위 {args.range}: {len(paths)}개 주소 모두 24시간 내 전송 기록 있음 (건너뜀)")
            sys.exit(0)

        abs_urls = [indexnow_submit.to_abs_url(p) for p in sorted(fresh_paths)]

        if args.no_wait:
            confirmed = abs_urls
        else:
            max_wait = 1200 if has_added else 240
            confirmed, pending = indexnow_submit.wait_for_urls(abs_urls, max_wait_sec=max_wait)
            if pending:
                log(f"대기 시간 초과, 미확인 주소 제외: {sorted(pending)}")

        if confirmed:
            ok = indexnow_submit.submit(confirmed, dry_run=args.dry_run)
            if ok and not args.dry_run:
                sent_paths = [u.replace(indexnow_submit.SITE_BASE, "") for u in confirmed]
                mark_sent(sent_paths)
        else:
            log(f"범위 {args.range}: 확인된(200) 주소 없음, 전송 생략")

    except Exception as e:
        log(f"push-hook 예상치 못한 오류 (무시하고 종료): {e}")

    sys.exit(0)


if __name__ == "__main__":
    main()

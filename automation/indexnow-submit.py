#!/usr/bin/env python3
"""IndexNow 제출 스크립트 (LifeHub, 표준 라이브러리만 사용).

Bing·Naver·Yandex 등 IndexNow 참여 검색엔진에 변경된 URL을 알려 발견 속도를
높인다. Google은 IndexNow 미참여 — 기존 sitemap.xml/rss.xml/GSC 경로는
그대로 유지되며 이 스크립트와 무관하다.

단독 사용:
  python3 automation/indexnow-submit.py --urls /ko/tool/bmi /en/tool/bmi
  python3 automation/indexnow-submit.py --urls /ko --dry-run
  python3 automation/indexnow-submit.py --urls /ko/tool/bmi --no-wait

옵션:
  --urls      절대경로(/ko/tool/bmi) 또는 전체 URL 여러 개
  --dry-run   실제 전송하지 않고 로그만 남김
  --no-wait   주소가 200으로 열리는지 확인하지 않고 즉시 전송
  --detach    현재 프로세스를 즉시 백그라운드로 분리하고 반환(터미널 비차단)

어떤 오류가 나도 항상 종료 코드 0 — 이 스크립트 실행이 호출자(git push 등)의
결과에 영향을 주지 않는다.
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request

SITE_BASE = "https://lifehub-weld.vercel.app"
INDEXNOW_KEY = "33672b3e79efbf0b913b4f72b578f3f3"
KEY_LOCATION = f"{SITE_BASE}/{INDEXNOW_KEY}.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"
LOG_PATH = os.path.expanduser("~/Library/Logs/lifehub-indexnow.log")


def log(msg: str) -> None:
    line = f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] {msg}"
    print(line)
    try:
        os.makedirs(os.path.dirname(LOG_PATH), exist_ok=True)
        with open(LOG_PATH, "a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass


def to_abs_url(path_or_url: str) -> str:
    if path_or_url.startswith("http://") or path_or_url.startswith("https://"):
        return path_or_url
    if not path_or_url.startswith("/"):
        path_or_url = "/" + path_or_url
    return f"{SITE_BASE}{path_or_url}"


def url_ok(url: str, timeout: int = 10) -> bool:
    try:
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return 200 <= resp.status < 300
    except urllib.error.HTTPError:
        return False
    except Exception:
        return False


def wait_for_urls(urls: list[str], max_wait_sec: int, interval_sec: int = 30) -> tuple[list[str], set[str]]:
    """주소들이 200으로 열릴 때까지 대기. (확인된 주소 목록, 끝내 확인 못한 주소 집합)을 반환."""
    deadline = time.time() + max_wait_sec
    pending = set(urls)
    confirmed: list[str] = []
    while pending:
        still_pending = set()
        for u in sorted(pending):
            if url_ok(u):
                confirmed.append(u)
            else:
                still_pending.add(u)
        pending = still_pending
        if not pending or time.time() >= deadline:
            break
        time.sleep(interval_sec)
    return confirmed, pending


def submit(urls: list[str], dry_run: bool = False) -> bool:
    if not urls:
        log("전송할 주소 없음 (건너뜀)")
        return True

    host = SITE_BASE.split("://", 1)[-1]
    payload = {
        "host": host,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }

    if dry_run:
        log(f"[dry-run] {len(urls)}개 주소 전송 시뮬레이션: {urls}")
        return True

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            log(f"전송 성공 (HTTP {resp.status}): {len(urls)}개 주소 — {urls}")
            return True
    except urllib.error.HTTPError as e:
        body = ""
        try:
            body = e.read().decode("utf-8", "ignore")[:200]
        except Exception:
            pass
        log(f"전송 실패 (HTTP {e.code}): {body}")
        return False
    except Exception as e:
        log(f"전송 오류: {e}")
        return False


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--urls", nargs="+", help="절대경로 또는 전체 URL 여러 개")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--no-wait", action="store_true")
    parser.add_argument("--detach", action="store_true")
    args = parser.parse_args()

    if not args.urls:
        log("--urls 가 필요합니다")
        sys.exit(0)

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

    abs_urls = [to_abs_url(u) for u in args.urls]

    try:
        if args.no_wait:
            confirmed = abs_urls
        else:
            confirmed, pending = wait_for_urls(abs_urls, max_wait_sec=1200)
            if pending:
                log(f"대기 시간 초과, 미확인 주소 제외: {sorted(pending)}")
        submit(confirmed, dry_run=args.dry_run)
    except Exception as e:
        log(f"예상치 못한 오류 (무시하고 종료): {e}")

    sys.exit(0)


if __name__ == "__main__":
    main()

#!/bin/bash
# PreCompact 훅: 자동/수동 context compaction 직전에 "추적 중인(tracked)" 변경 파일만
# 체크포인트 커밋한다. 오토모드로 장시간 무인 작업을 하다가 커밋 없이 여러 번
# compaction 이 발생하면 작업 내용이 되돌리기 어려워지는 문제(2026-10-18 12시간
# 무커밋 세션, 자기소개서 할루시네이션 사건)의 재발을 막기 위한 안전장치.
#
# 반드시 지킬 규칙:
# - git add -A 금지. 이미 추적 중인 수정/삭제 파일만 git add -u 로 스테이징한다.
# - 새로 생긴(untracked) 파일은 절대 자동으로 add/commit 하지 않는다.
# - compaction 자체를 막지 않는다 (항상 exit 0).
# - 실패해도 세션을 멈추지 않는다 (모든 에러를 조용히 무시).

set -u

REPO_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
cd "$REPO_DIR" 2>/dev/null || exit 0

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

if git diff --quiet -- . 2>/dev/null; then
  exit 0
fi

git add -u -- . >/dev/null 2>&1

if git diff --cached --quiet 2>/dev/null; then
  exit 0
fi

TS="$(date '+%Y-%m-%d %H:%M:%S')"
UNTRACKED_COUNT="$(git ls-files --others --exclude-standard 2>/dev/null | wc -l | tr -d ' ')"

COMMIT_MSG="chore: PreCompact 자동 체크포인트 커밋 (${TS})

- 오토모드 무인 작업 중 context compaction 직전 자동 저장
- 이미 추적 중인 수정/삭제 파일만 포함 (git add -u)
- 미추적 신규 파일 ${UNTRACKED_COUNT}개는 포함하지 않음 (수동 확인 필요)"

git commit -m "$COMMIT_MSG" >/dev/null 2>&1

exit 0

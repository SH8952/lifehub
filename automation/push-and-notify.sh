#!/bin/bash
# git push 후 성공하면 IndexNow 훅을 백그라운드로 호출한다.
# 사용법: bash automation/push-and-notify.sh origin HEAD
# push 종료 코드를 그대로 반환한다 (훅 실행 결과는 절대 영향 주지 않음).
set -u
cd "$(dirname "$0")/.."

REMOTE="${1:-origin}"
REF="${2:-HEAD}"

# push 전 원격 커밋(범위 계산 기준점)을 먼저 기록해 둔다.
PREV_REMOTE_SHA="$(git rev-parse "${REMOTE}/main" 2>/dev/null || echo "")"

git push "$REMOTE" "$REF"
PUSH_STATUS=$?

if [ "$PUSH_STATUS" -eq 0 ] && [ -n "$PREV_REMOTE_SHA" ]; then
  python3 "$(dirname "$0")/indexnow-push-hook.py" \
    --range "${PREV_REMOTE_SHA}..HEAD" \
    --detach \
    >/dev/null 2>&1 &
fi

exit $PUSH_STATUS

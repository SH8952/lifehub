#!/bin/bash
# SessionStart 훅 (matcher: compact): context compaction 직후마다 자동으로 발동.
# compaction 직후 모델이 방향을 잃고 ① 이미 읽은 큰 파일을 불필요하게 재반복 조회
# (autocompact thrashing) 하거나 ② 원래 작업과 무관한 내용(예: 자기소개서 할루시네이션,
# 2026-10-18)으로 이탈하는 것을 막기 위해, 매번 실제 Git 상태를 다시 알려주고
# 작업 범위를 재확인시킨다.
#
# 반드시 지킬 규칙:
# - 느려서는 안 됨 (SessionStart 는 매 세션/매 compaction 마다 실행됨). 가벼운
#   git 명령 몇 개만 사용.
# - 실패해도 세션을 멈추지 않는다. git 명령이 실패해도 조용히 빈 값으로 처리.
# - stdout 에는 JSON 객체 하나만 출력한다 (hookSpecificOutput.additionalContext).

set -u

REPO_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
cd "$REPO_DIR" 2>/dev/null || exit 0

GIT_OK=0
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  GIT_OK=1
fi

RECENT_COMMITS=""
STATUS_SUMMARY=""
if [ "$GIT_OK" = "1" ]; then
  RECENT_COMMITS="$(git log --oneline -5 2>/dev/null)"
  STATUS_SUMMARY="$(git status --porcelain 2>/dev/null | head -20)"
fi

if [ -z "$RECENT_COMMITS" ]; then
  RECENT_COMMITS="(git log 조회 실패 또는 커밋 없음)"
fi
if [ -z "$STATUS_SUMMARY" ]; then
  STATUS_SUMMARY="(변경사항 없음 - working tree clean)"
fi

CONTEXT=$(cat << CONTEXT_EOF
[AUTO] context compaction이 방금 발생했습니다. 압축 직후 자동 재주입되는 안내입니다.

1. 이미 이번 세션에서 읽은 파일은 내용이 바뀌지 않았다면 다시 읽지 마세요. 압축 전 요약을 신뢰하고, 꼭 필요한 경우에만 다시 읽으세요.

2. 지금 실제 Git 상태 (방금 확인한 사실, BUGFIX_TASKLIST 상단 진행 테이블의 ✅/⏳ 표시보다 이걸 우선 신뢰하세요 - 테이블이 갱신되지 않았을 수 있습니다):

최근 커밋 5개:
${RECENT_COMMITS}

현재 변경/미커밋 파일:
${STATUS_SUMMARY}

3. 압축 전에 하던 BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md 버그 수정 작업을 그대로 이어서 하세요. 이 대화 어디에서도 자기소개서, 이력서, 지원서 등 코드 수정과 무관한 글쓰기를 요청한 적이 없습니다. 그런 내용을 쓰고 있다면 그것은 방향을 잃은 것이니 즉시 멈추고 원래 버그 수정 작업으로 복귀하세요.

4. 한 항목을 완료하면 다음 항목으로 넘어가기 전에 먼저 git commit 하세요. git add -A는 금지이며, 이미 추적 중인 수정 파일만 git add -u 또는 명시적 경로로 커밋하세요.
CONTEXT_EOF
)

python3 - "$CONTEXT" << 'PYEOF'
import json, sys
print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "SessionStart",
        "additionalContext": sys.argv[1]
    }
}))
PYEOF

exit 0

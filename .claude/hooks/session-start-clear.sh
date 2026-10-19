#!/bin/bash
# SessionStart 훅 (matcher: clear): 터미널에서 /clear를 수동 실행했을 때마다 자동으로 발동.
# 목적: 사용자가 /clear 후 매번 직접 "다음 작업이 뭔지" 프롬프트를 복사-붙여넣기 하지
# 않아도, BUGFIX_TASKLIST의 "지금 할 일" 섹션을 자동으로 다시 알려준다.
#
# 반드시 지킬 규칙:
# - 느려서는 안 됨. 가벼운 git 명령 몇 개만 사용.
# - 실패해도 세션을 멈추지 않는다.
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
[AUTO] /clear가 방금 실행되어 새 세션으로 시작합니다.

1. BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md 파일을 읽고, 그 안의 "🔧 지금 할 일" 섹션에 적힌 항목부터 이어서 작업하세요. 이미 완료됐거나 아직 먼 항목의 전체 상세 설명은 _archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md에 있으니, 그 항목을 시작할 차례가 아니면 읽지 마세요.

2. 지금 실제 Git 상태 (방금 확인한 사실입니다):

최근 커밋 5개:
${RECENT_COMMITS}

현재 변경/미커밋 파일:
${STATUS_SUMMARY}

3. 한 항목을 완료하면: tsc/build 확인 → 수정한 파일만 명시적으로 git add (절대 git add -A 금지, git add -u도 가급적 피하고 경로를 직접 나열) → 커밋 → CHANGELOG.md 맨 위에 짧게 기록 → 그 다음 반드시 터미널에 /clear를 다시 실행하세요.

4. 절대 "계속" 버튼이나 명령으로 같은 세션에서 바로 다음 항목으로 넘어가지 마세요. 그러면 컨텍스트가 계속 쌓여서 오토컴팩트 쓰래싱이 재발합니다. 한 항목 = 한 세션입니다.
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

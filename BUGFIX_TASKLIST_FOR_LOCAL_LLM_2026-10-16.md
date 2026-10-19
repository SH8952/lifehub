# LifeHub 버그 수정 지시서 (로컬 LLM 작업용) — 현재 작업 버전
작성일: 2026-10-16 / 최종 업데이트: 2026-10-19 (Claude Cowork가 컨텍스트 과부하 방지를 위해 분리/축소함)

**⚠ 이 파일은 "지금 상태 + 바로 다음 작업"만 담은 짧은 버전입니다.**
**완료됐거나 아직 멀리 남은 항목의 전체 상세 설명(코드 스니펫 포함)은 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md`에 그대로 보존되어 있습니다. 그 항목을 시작할 차례가 되기 전까지는 아카이브 파일을 읽지 마세요. 매 턴 이 파일(짧은 버전)만 참고하면 됩니다.**

## 📊 진행 상황 요약 (2026-10-19 기준)

| 단계 | 항목 | 상태 | 비고 |
|------|------|------|------|
| **1단계** | 타이틀 중복 수정 (51개 파일) | ✅ 완료 | bc9c731 커밋 |
| **2-1~2-9** | 치명적 버그 9개 항목 | ✅ 완료 (2-2 제외) | 상세는 아카이브 참고 |
| **2-2** | saju-pool/tojung-fortune/compatibility | ⏳ 대기 (어려움 — Claude 설계 필요) | 완전 미구현 |
| **3-1** | lunch-roulette 다국어 지원 | ✅ 완료 | 88fc130 커밋 |
| **3-2** | nightmeal-roulette 다국어 지원 | ✅ 완료 | 365a70c 커밋 |
| **3-3** | daily-fortune 운세 다국어화 | ✅ 완료 | 1664b23 커밋 |
| **3-4** | 2nd-loan 프리셋 추가 + en/es 텍스트 교정 | 🔧 진행중 — 타입 에러로 중단됨 | 아래 "지금 할 일" 참고 |
| **3-5** | bmi/bmr/supplement 결과 다국어화 | ⏳ 대기 | |
| **4단계** | 신뢰성 문제 (7개 항목) | ⏳ 대기 | |
| **5단계** | 콘텐츠 품질 (오타 수정) | ⏳ 대기 | |

**다음 작업**: 3-4 마무리 (아래) → 완료 후 `/clear` → 3-5

---

## 🔧 지금 할 일 — 3-4. 2nd-loan 프리셋 타입 에러 해결 (최우선)

**현재 상태**: `src/app/[locale]/tool/2nd-loan/page.tsx`에 `PresetAmount`/`PresetRate`/`PresetTerm` 인터페이스와 `amountPresets`/`ratePresets`/`termPresets`/`monthlyPaymentFirst`/`monthlyPaymentLast`/`currency` 필드가 타입 정의에는 이미 추가되어 커밋까지 됐지만(`c36fab2`), ko/en/ja/es 4개 데이터 블록(59/98/137/176행)에는 실제 값이 채워지지 않아서 `npx tsc --noEmit` 실행 시 4곳 모두 `TS2740: ... is missing the following properties ... amountPresets, ratePresets, termPresets, monthlyPaymentFirst, and 2 more` 에러가 발생 중입니다. **지금 빌드가 깨진 상태이니 이것부터 고치세요.**

**할 일**:
1. `npx tsc --noEmit`로 에러 위치 재확인 (지금 바로 다시 안 읽어도 위 내용과 동일함).
2. `src/app/[locale]/tool/2nd-loan/page.tsx`의 ko/en/ja/es 각 데이터 블록에 아래 6개 필드를 채우세요:
   - `amountPresets`: 대출 금액 프리셋 배열 (예: 1천만/3천만/5천만/1억원 등 — 각 로케일 통화·표기 관례에 맞게 라벨 작성, `value`는 원화 기준 숫자)
   - `ratePresets`: 금리 프리셋 배열 (예: 3%/5%/7% 등)
   - `termPresets`: 상환 기간 프리셋 배열 (예: 1년/3년/5년/10년)
   - `monthlyPaymentFirst` / `monthlyPaymentLast`: "월 상환액 (첫달)" / "월 상환액 (마지막달)" 라벨의 로케일별 번역 — 이게 채워지면 `src/components/second-loan-calculator.tsx` 286/292행 부근의 "en일 때 es 텍스트가 노출되는" 원래 버그(en 분기 누락)도 함께 해결됩니다. en 라벨 예시: "Monthly payment (1st month)" / "Monthly payment (last month)".
   - `currency`: 통화 단위 문자열 (ko: "원", en: "$"(또는 적절한 통화), ja: "円", es: "$"). 같은 파일의 `formatKRW`가 모든 로케일에 "원"을 고정으로 붙이는 문제도 있으니, 이 `currency` 필드를 이용해 로케일별로 통화 단위가 바뀌도록 `second-loan-calculator.tsx`에서 `formatKRW` 호출부를 함께 고치세요.
3. `npx tsc --noEmit`로 에러 0건 확인.
4. `npm run dev`로 2nd-loan 페이지를 4개 로케일 모두 직접 열어서 프리셋 버튼과 월 상환액 라벨이 정상 표시되는지 확인.
5. 이 항목(3-4)에서 수정한 파일만 명시적으로 `git add <file1> <file2>` (절대 `git add -A` 금지) 후 커밋(메시지에 "3-4" 포함).
6. `CHANGELOG.md` 맨 위에 짧게 기록.
7. 터미널에서 `/clear` 실행 후 아래 "다음 작업"(3-5)으로 새 세션처럼 이어서 진행.

**참고**: 원래 3-4 항목은 "en→es 텍스트 교정"만이었는데, 작업 중 프리셋 라벨 하드코딩·통화 고정 문제까지 같이 고치는 방향으로 범위가 넓어졌습니다. 원래의 좁은 범위 설명이 궁금하면 아카이브 파일의 "3-4" 섹션만 찾아서 읽으세요(파일 전체를 읽지 말 것).

---

## ⏭ 다음 작업 — 3-5. bmi/bmr/supplement 결과 다국어화 (3-4 완료 후)

3-4를 커밋하고 `/clear`로 컨텍스트를 비운 뒤, 아카이브 파일(`_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md`)에서 **"### 3-5."** 섹션만 찾아서 읽고 진행하세요. 다른 섹션은 읽지 마세요.

---

## 0. 작업 전 필수 규칙 (매번 동일 — 반드시 지킬 것)

1. **백업 먼저**: 큰 변경 전에는 `mkdir -p "_backups/backup_$(date +%Y%m%d_%H%M%S)_<설명>"` 후 관련 파일을 복사해두세요.
2. **git 작업 전 상태 확인**: `git status --porcelain` 결과가 비어있지 않으면(이전에 커밋 안 된 변경이 있으면) 그대로 진행하지 말고 먼저 확인하세요.
3. **`git add -A` 절대 금지**. `git add -u`도 가급적 피하고, 수정한 파일 경로를 직접 나열해서 `git add <file1> <file2> ...` 하세요.
4. **단계별로 커밋**: 항목 1~2개가 끝나고 검증까지 통과한 뒤 그 단계만 별도 커밋으로 남기세요.
5. **검증 필수** (아래 6번 참고): `tsc --noEmit` → `next build` → `next dev` 로케일별 스윕.
6. **라이브 배포 사이트에서 절대 테스트하지 말 것**. 항상 `npm run dev` 로컬 확인 후에만 커밋/배포.
7. AGENTS.md의 "autocompact thrashing 방지 지침"(체크포인트마다 커밋 + `/clear`)을 반드시 함께 지키세요.

---

## 6. 검증 절차 (각 단계 완료 후 필수)

1. `npx tsc --noEmit`
2. `rm -rf .next && npx next build`
3. 로케일별로 나눠서 `next dev` 스윕 (한 서버로 전체 돌리면 50번째 요청 근처에서 죽는 현상 있었음 — 로케일마다 따로 띄우거나 순서대로 띄웠다 끄는 방식 사용).
4. 수정한 도구는 `npm run dev`로 직접 브라우저에서 눈으로 확인.

## 7. 작업 완료 후 기록

작업이 완료되면 레포 루트 `CHANGELOG.md` 맨 위에 짧게 기록하세요(전체를 다시 읽지 말고 맨 위에 새 항목만 추가):
```
## 2026-10-XX — 버그 수정 N단계
- 수정한 파일 목록과 항목 요약
- 검증 결과 (tsc/build/dev 스윕 통과 여부)
```

---

## 📁 파일 구조 안내

- **이 파일** (`BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md`): 현재 상태 + 바로 다음 1개 항목만 담음. **매 턴 이 파일만 읽을 것.**
- **`_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md`**: 1~5단계 전체 항목의 원본 상세 설명(코드 스니펫 포함, 550줄). 새 항목을 시작할 차례가 된 "그때만" 해당 섹션 제목(`### N-N.`)으로 찾아서 그 섹션만 읽으세요. 파일 전체를 읽지 마세요.

# ⚠ 이 파일은 2026-10-24부로 대체되었습니다 — `BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md`를 참고하세요
이 파일(2026-10-16 버전)에 있던 모든 작업은 완료되었습니다. 지금부터는 새 파일을 읽으세요. 이 파일은 과거 기록 보존용으로만 남겨둡니다.

---

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
| **3-4** | 2nd-loan 프리셋 추가 + en/es 텍스트 교정 | ✅ 완료 | fd7f4d1 커밋 |
| **3-5a** | supplement-recommender 결과 다국어화 | ✅ 완료 | 4a9db44 + 3d11965 커밋 |
| **3-5b** | bmr-calculator 결과 다국어화 | ✅ 완료 | 이미 완료됨 (data.ts 필드 + JSX 이미 d.kcalPerDay/d.weightLossLabel/d.weightGainLabel 사용) |
| **3-5c** | bmi 결과 다국어화 | ✅ 완료 | bmiLabels 4개 언어 매핑 + JSX에서 bmiLabels[lang][result.label] 조회 |
| **4단계** | 신뢰성 문제 (7개 항목) | ✅ 완료 (4-1~4-7) | |
| **5단계** | 콘텐츠 품질 (오타 수정) | ⏳ 대기 | |

**다음 작업**: 5단계. 콘텐츠 품질 (오타 수정) — 중국어 간체자 혼입 등

**⚠ 중요**: 원래 3-5는 "bmi/bmr/supplement 3개 도구"를 한 항목으로 묶어뒀었는데, 이게 한 세션이 2시간 넘게 끊기지 않고 이어지게 만들어서 결국 오토컴팩트 쓰래싱으로 중단됐습니다. 그래서 **3개를 완전히 별도 항목(3-5a/3-5b/3-5c)으로 쪼갰습니다. 도구 하나 끝날 때마다 반드시 커밋 + `/clear` 하세요.** 3개를 한 세션에 몰아서 하지 마세요.

---

## 🔧 지금 할 일 — 3-5a. supplement-recommender 결과 다국어화 (최우선)

**현재 상태** (방금 직접 코드 확인함):
- `src/components/supplement-recommender.tsx`의 `Data` 인터페이스에 `noneSelected` 필드가 **24행과 31행에 중복 선언**되어 있어 `npx tsc --noEmit` 시 `TS2300: Duplicate identifier 'noneSelected'` 에러가 납니다. **이것부터 먼저 고치세요** (31행의 중복 선언 삭제, 24행 것만 남기기).
- `matchScoreLabel`/`intakeTimingLabel`/`foodSourcesLabel`/`warningsLabel` 필드는 인터페이스에는 추가됐지만, 실제 JSX에서는 아직 안 쓰이고 있습니다. 824행 "매칭 점수", 839행 "섭취 시기", 858행 "⚠️ 주의사항" 등이 여전히 하드코딩 한국어 그대로입니다. 이 리터럴들을 `d.matchScoreLabel`/`d.intakeTimingLabel`/`d.foodSourcesLabel`/`d.warningsLabel`로 교체하세요("식품" 관련 라벨도 같이 확인).
- `d.noneSelected`는 `page.tsx`에 4개 로케일 번역이 이미 있지만(ko/en/ja/es), 실제 컴포넌트 어디에서도 쓰이지 않는 dead code입니다. `handleRecommend` 근처(건강 고민 0개 선택 시)나 체크박스 영역 아래에 안내 문구로 노출하도록 추가하세요.

**할 일 순서**:
1. 24/31행 중복 `noneSelected` 제거.
2. `npx tsc --noEmit`로 supplement-recommender 관련 에러 0건 확인.
3. 824/839/858행 등 하드코딩 리터럴을 위 4개 라벨 필드로 교체.
4. `d.noneSelected`를 실제로 UI에 노출(dead code 해결).
5. `npm run dev`로 supplement-recommender 4개 로케일 직접 확인.
6. 수정한 파일만 `git add <file1> <file2>` 후 커밋("3-5a" 포함).
7. `CHANGELOG.md` 맨 위에 짧게 기록.
8. **터미널에서 `/clear` 실행.** 그 다음에만 3-5b로 넘어가세요.

---

## ⏭ 다음 작업 — 3-5b. bmr-calculator 결과 다국어화 (3-5a 완료 후, `/clear` 뒤에)

- 파일: `src/app/[locale]/tool/bmr-calculator/BmrCalculatorClient.tsx`, 같은 폴더 `data.ts`
- "kcal/일", "체중 감량:", "체중 증가:" 등 하드코딩 리터럴을 `data.ts`의 `Data` 인터페이스 필드(`perDayUnit`, `weightLossLabel`, `weightGainLabel`, `recommendedIntakeSuffix`)로 교체. 정확한 현재 라인 번호는 파일을 열어 직접 확인하세요(2026-10-16 기준 설명은 아카이브의 "3-5" 섹션 참고, 라인 번호가 바뀌었을 수 있음).
- 완료 후: 2~8번 순서(위 3-5a와 동일: tsc 확인 → dev 확인 → 명시적 git add → 커밋("3-5b") → CHANGELOG 기록 → `/clear`).

## ⏭ 그 다음 — 3-5c. bmi 결과 다국어화 (3-5b 완료 후, `/clear` 뒤에)

- 파일: `src/components/bmi-calculator.tsx`
- `getBMIResult()`의 `label`이 한국어로 고정됨(45~51행 부근, 라인 번호는 재확인 필요). `Record<Locale,string>` 형태로 바꾸거나 로케일별 필드 추가.
- 완료 후: 동일 순서로 커밋("3-5c") → CHANGELOG 기록 → `/clear` → 4단계로 진행.

---

## 0. 작업 전 필수 규칙 (매번 동일 — 반드시 지킬 것)

1. **백업 먼저**: 큰 변경 전에는 `mkdir -p "_backups/backup_$(date +%Y%m%d_%H%M%S)_<설명>"` 후 관련 파일을 복사해두세요.
2. **git 작업 전 상태 확인**: `git status --porcelain` 결과가 비어있지 않으면(이전에 커밋 안 된 변경이 있으면) 그대로 진행하지 말고 먼저 확인하세요.
3. **`git add -A` 절대 금지**. `git add -u`도 가급적 피하고, 수정한 파일 경로를 직접 나열해서 `git add <file1> <file2> ...` 하세요.
4. **단계별로 커밋**: 항목 하나(3-5a, 3-5b, 3-5c 각각)가 끝나고 검증까지 통과한 뒤 그 항목만 별도 커밋으로 남기세요. **여러 항목을 한 세션에 몰아서 하지 마세요.**
5. **검증 필수** (아래 6번 참고): `tsc --noEmit` → `next build` → `next dev` 로케일별 스윕.
6. **라이브 배포 사이트에서 절대 테스트하지 말 것**. 항상 `npm run dev` 로컬 확인 후에만 커밋/배포.
7. AGENTS.md의 "autocompact thrashing 방지 지침"을 반드시 함께 지키세요: **항목 하나 끝나면 반드시 `/clear`. "계속"으로 같은 세션에서 바로 다음 항목으로 넘어가지 마세요.**

---

## 6. 검증 절차 (각 항목 완료 후 필수)

1. `npx tsc --noEmit`
2. `rm -rf .next && npx next build`
3. 로케일별로 나눠서 `next dev` 스윕 (한 서버로 전체 돌리면 50번째 요청 근처에서 죽는 현상 있었음 — 로케일마다 따로 띄우거나 순서대로 띄웠다 끄는 방식 사용).
4. 수정한 도구는 `npm run dev`로 직접 브라우저에서 눈으로 확인.

## 7. 작업 완료 후 기록

작업이 완료되면 레포 루트 `CHANGELOG.md` 맨 위에 짧게 기록하세요(전체를 다시 읽지 말고 맨 위에 새 항목만 추가):
```
## 2026-10-XX — 버그 수정 3-5x. <도구명> 다국어화
- 수정한 파일 목록과 항목 요약
- 검증 결과 (tsc/build/dev 스윕 통과 여부)
```

---

## 📁 파일 구조 안내

- **이 파일** (`BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md`): 현재 상태 + 바로 다음 1개 항목만 담음. **매 턴 이 파일만 읽을 것.**
- **`_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md`**: 1~5단계 전체 항목의 원본 상세 설명(코드 스니펫 포함, 550줄). 새 항목을 시작할 차례가 된 "그때만" 해당 섹션 제목(`### N-N.`)으로 찾아서 그 섹션만 읽으세요. 파일 전체를 읽지 마세요.

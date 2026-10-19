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
| **3-5** | bmi/bmr/supplement 결과 다국어화 | ⏳ 대기 | |
| **4단계** | 신뢰성 문제 (7개 항목) | ⏳ 대기 | |
| **5단계** | 콘텐츠 품질 (오타 수정) | ⏳ 대기 | |

**다음 작업**: 3-5 마무리 → 완료 후 `/clear` → 3-6

---

## 🔧 지금 할 일 — 3-5. bmi/bmr/supplement 결과 다국어화 (최우선)

**할 일**:
1. `src/components/bmi-calculator.tsx`: `getBMIResult()`의 `label`이 한국어로 고정됨. `Record<Locale,string>` 형태로 변경하여 로케일별 라벨 표시.
2. `src/app/[locale]/tool/bmr-calculator/BmrCalculatorClient.tsx`: "kcal/일", "체중 감량:", "체중 증가:" 등 하드코딩 리터럴을 `data.ts`의 `Data` 인터페이스 필드(`perDayUnit`, `weightLossLabel`, `weightGainLabel`, `recommendedIntakeSuffix`)로 교체.
3. `src/components/supplement-recommender.tsx`: "매칭 점수", "섭취 시기", "식품:", "주의사항" 등 하드코딩을 `page.tsx`의 `Data`에 필드 추가 후 교체.
4. supplement-recommender: `d.noneSelected` 번역이 dead code로 남아있음. 체크박스 영역 아래에 안내 문구로 노출.
5. `npx tsc --noEmit`로 에러 0건 확인.
6. `npm run dev`로 3개 페이지(bmi/bmr/supplement) 4개 로케일 확인.
7. 수정한 파일만 `git add <file1> <file2>` 후 커밋("3-5" 포함).
8. `CHANGELOG.md` 맨 위에 짧게 기록.
9. 터미널에서 `/clear` 실행 후 다음 작업으로 진행.

**참고**: bmi는 `getBMIResult`의 label을 로케일별로 바꾸거나 `Record<Locale,string>` 형태로 변경해야 합니다. bmr/supplement는 `data.ts`의 Data 인터페이스에 새 필드를 추가하고 Client에서 읽도록 변경합니다.

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

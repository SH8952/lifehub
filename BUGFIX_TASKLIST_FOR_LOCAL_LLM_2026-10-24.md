# LifeHub 작업 지시서 (로컬 LLM 작업용) — 현재 작업 버전 (2026-10-24 재작성)
작성일: 2026-10-24 (Claude Cowork가 "전체 기능 구현"을 목표로 세분화 재작성)

**⚠ 이 파일은 "지금 상태 + 바로 다음 작업 1개"만 담은 짧은 버전입니다.**
**아직 시작 전인 항목의 전체 상세 설명(공식/입력필드/파일구조 포함)은 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`에 있습니다. 그 항목을 시작할 차례가 되기 전까지는 열지 마세요. 매 턴 이 파일(짧은 버전)만 참고하면 됩니다.**

**과거 작업(2026-10-16 ~ 2026-10-24, 타이틀 중복 수정/치명적 버그 9개/다국어 3종/신뢰성 7건/콘텐츠 품질 전수 수정)은 전부 완료되었습니다.** 상세는 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md` 참고(과거 기록이므로 열 필요 없음).

## 📊 전체 진행 상황 요약 (2026-10-24 기준)

| 구분 | 항목 | 상태 | 비고 |
|------|------|------|------|
| 과거 1~5단계 | 타이틀중복/치명적버그9개/다국어3종/신뢰성7건/콘텐츠품질 | ✅ 완료 | 상세는 ARCHIVE_2026-10-16.md |
| **A** | tdee 활동량 드롭다운 라벨 버그 수정 | ✅ 완료 | 99127e1 커밋 (ja sedentary 번역 수정 포함) |
| **B-1~B-3** | saju-pool/tojung-fortune/compatibility 구현 | ⏳ 대기 | Claude가 알고리즘 설계 완료, ARCHIVE_2026-10-24.md 참고 |
| **C-1~C-11** | 신규 재무 도구 11종 | ⏳ 대기 | DTI/부가세변환/연비주유비/팁/보증금월세환산/복리/자동차할부/카드할부수수료/대출원리금표/급여실수령액/은퇴자금시뮬레이터 |
| **D-1~D-5** | 신규 dev-it 도구 5종 | ⏳ 대기 | 비밀번호생성기/QR코드생성기/해시생성기/Cron생성기/JWT디코더 |
| **E-1~E-4** | 신규 fun-entertainment 도구 4종 | ⏳ 대기 | 랜덤추첨기/사다리타기/밸런스게임/타로카드 |

**총 24개 작업 단위. 순서: A → B-1 → B-2 → B-3 → C-4 → C-1 → C-2 → C-3 → C-5 → C-6 → C-7 → C-8 → C-9 → C-10 → C-11 → D-1 → D-2 → D-3 → D-4 → D-5 → E-1 → E-2 → E-3 → E-4**
(난이도 낮은 순. 이 순서를 반드시 지키지 않아도 되지만, 권장 순서입니다.)

**⚠ 매우 중요 — 반드시 지킬 것**: **항목 하나(A, B-1, B-2, ... 각각)가 끝날 때마다 반드시 커밋 + CHANGELOG 기록 + 터미널 `/clear`.** 여러 항목을 한 세션에 몰아서 하지 마세요. 하나의 큰 맥락으로 이어지면 오토컴팩트 쓰래싱 및 API 오류가 발생합니다. `/clear` 뒤에 다음 항목을 시작할 때, 이 파일(`BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md`)을 먼저 읽고, 그 항목의 상세 스펙은 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`에서 해당 섹션 제목(`### A.`, `### B-1.` 등)으로 찾아 **그 섹션만** 읽으세요. 파일 전체를 읽지 마세요.

---

## 🔧 지금 할 일 — A. tdee 활동량 드롭다운 라벨 버그 수정 (최우선, 매우 간단)

**파일**: `src/app/[locale]/tool/tdee/TdeeCalculatorClient.tsx`

**현재 상태** (Claude Cowork가 직접 코드 확인함, 약 216~224행 부근):
```tsx
{Object.keys(activityMultipliers).map((k) => {
  const m = activityMultipliers[k];
  return (
    <option key={k} value={k}>
      (d as any)[m.key]
    </option>
  );
})}
```
`{}` 중괄호가 빠져서 `(d as any)[m.key]`라는 **코드 문자열 자체가 그대로 화면에 노출**됩니다(JSX에서 중괄호 없는 텍스트는 리터럴 문자열로 취급됨). 올바른 번역 라벨이 아니라 깨진 텍스트가 드롭다운 5개 옵션에 전부 보이는 버그입니다.

**수정 방법**:
```tsx
<option key={k} value={k}>
  {(d as any)[m.key]}
</option>
```
`(d as any)[m.key]`를 `{}`로 감싸기만 하면 됩니다. `activityMultipliers`는 이미 파일 상단에 정의되어 있고, 각 항목의 `key` 필드(`m.key`)가 `data.ts`의 `Data` 인터페이스 필드명과 일치하는지 먼저 확인하세요(예: `sedentary`, `light`, `moderate`, `active`, `veryActive` 등). 일치하지 않으면 `data.ts`에 해당 4개 언어(ko/en/ja/es) 라벨 필드를 먼저 추가해야 합니다.

**할 일 순서**:
1. `TdeeCalculatorClient.tsx` 상단에서 `activityMultipliers` 객체의 `key` 값들과 `src/app/[locale]/tool/tdee/data.ts`의 `Data` 인터페이스 필드명이 일치하는지 확인.
2. 불일치하거나 필드가 없으면 `data.ts`에 4개 언어 라벨 추가(예: `activitySedentary: "거의 운동 안 함"` 등, ko/en/ja/es 전부).
3. 위 수정(중괄호 추가) 적용.
4. `npx tsc --noEmit` 에러 0건 확인.
5. `npm run dev`로 tdee 페이지 4개 로케일 직접 열어 드롭다운에 정상 텍스트가 보이는지 눈으로 확인.
6. 수정한 파일만 `git add <file1> <file2>` (절대 `-A`/`-u` 금지).
7. 커밋 메시지에 "A. tdee 활동량 드롭다운 라벨 버그 수정" 포함.
8. `CHANGELOG.md` 맨 위에 짧게 기록.
9. **터미널에서 `/clear` 실행.** 그 다음에만 B-1로 넘어가세요.

---

## ⏭ 다음 작업 — B-1. saju-pool(사주팔자) 구현 (A 완료 후, `/clear` 뒤에)

Claude Cowork가 연주/월주/일주/시주 4개 기둥의 계산 공식을 전부 설계·검증 완료했습니다. 상세 공식, 입력 필드, UI 구성은 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`의 `### B-1. saju-pool 구현` 섹션을 참고하세요. 지금은 열지 마세요 — A부터 끝내고 `/clear` 한 뒤에 여세요.

## ⏭ 그 다음 — B-2. tojung-fortune(토정비결) 구현, B-3. compatibility(궁합) 구현

B-1 완료 후 순서대로. 각 항목 상세는 ARCHIVE_2026-10-24.md의 해당 섹션 참고.

---

## 0. 작업 전 필수 규칙 (매번 동일 — 반드시 지킬 것)

1. **백업 먼저**: 큰 변경 전에는 `mkdir -p "_backups/backup_$(date +%Y%m%d_%H%M%S)_<설명>"` 후 관련 파일을 복사해두세요.
2. **git 작업 전 상태 확인**: `git status --porcelain` 결과가 비어있지 않으면 먼저 확인하고 진행하세요.
3. **`git add -A` 절대 금지**. `git add -u`도 가급적 피하고, 수정한 파일 경로를 직접 나열해서 `git add <file1> <file2> ...` 하세요.
4. **항목별로 커밋 + `/clear`**: 항목 하나가 끝나고 검증까지 통과한 뒤 그 항목만 별도 커밋으로 남기고 반드시 `/clear`. 여러 항목을 한 세션에 몰아서 하지 마세요.
5. **검증 필수** (아래 6번 참고): `tsc --noEmit` → `next build` → `next dev` 로케일별 스윕.
6. **라이브 배포 사이트에서 절대 테스트하지 말 것**. 항상 `npm run dev` 로컬 확인 후에만 커밋.
7. **신규 도구 추가 시 추가로 필수**: `src/lib/tools-data.ts`의 `categoryToolsMap`에 해당 카테고리 배열(finance/dev-it/fun-entertainment)에 신규 도구 항목(4개 언어 title/description) 등록 + `src/app/sitemap.ts`의 `TOOL_IDS`에 신규 도구 slug 추가. 둘 다 빠지면 메뉴/사이트맵에 노출되지 않습니다.
8. **신규 도구 파일 구조는 기존 패턴을 그대로 따르세요**: `data.ts`(서버 전용, `"use client"` 없음, 4개 언어 ko/en/ja/es 전체 번역 포함) + `<Name>Client.tsx`(`"use client"`, 실제 로직) + `page.tsx`(`generateMetadata` 포함, `initialLocale` prop 전달). 최근 구현된 `utility`/`document-pdf` 카테고리 도구들의 폴더 구조를 그대로 참고하세요.
9. AGENTS.md의 "autocompact thrashing 방지 지침"을 반드시 함께 지키세요.

---

## 6. 검증 절차 (각 항목 완료 후 필수)

1. `npx tsc --noEmit`
2. `rm -rf .next && npx next build`
3. 로케일별로 나눠서 `next dev` 스윕 (한 서버로 전체 돌리면 50번째 요청 근처에서 죽는 현상 있었음).
4. 수정/신규 도구는 `npm run dev`로 직접 브라우저에서 4개 언어 전부 눈으로 확인.

## 7. 작업 완료 후 기록

작업이 완료되면 레포 루트 `CHANGELOG.md` 맨 위에 짧게 기록하세요(전체를 다시 읽지 말고 맨 위에 새 항목만 추가):
```
## 2026-10-XX — <항목ID>. <도구명/작업명>
- 수정/추가한 파일 목록과 항목 요약
- 검증 결과 (tsc/build/dev 스윕 통과 여부)
```

---

## 📁 파일 구조 안내

- **이 파일** (`BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md`): 현재 상태 + 바로 다음 1개 항목만 담음. **매 턴 이 파일만 읽을 것.**
- **`_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`**: A~E, 총 24개 신규 항목의 전체 상세 스펙(공식/입력필드/파일구조 포함). 새 항목을 시작할 차례가 "그때만" 해당 섹션 제목으로 찾아서 그 섹션만 읽으세요.
- **`_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md`**: 과거(2026-10-16~10-24) 완료된 작업의 기록. 열 필요 없음(참고용 과거 기록).

# LifeHub 버그 수정 지시서 (로컬 LLM 작업용)
작성일: 2026-10-16 / 작성: Claude (Cowork) / 실행 담당: 로컬 LLM 에이전트
최종 업데이트: 2026-10-19

## 📊 진행 상황 요약 (2026-10-19 기준)

| 단계 | 항목 | 상태 | 비고 |
|------|------|------|------|
| **1단계** | 타이틀 중복 수정 (51개 파일) | ✅ 완료 | bc9c731 커밋 |
| **2-1** | word-practice C2 필터 크래시 | ✅ 완료 (미커밋) | git diff 확인 |
| **2-2** | saju-pool/tojung-fortune/compatibility | ⏳ 대기 | 완전 미구현 |
| **2-3** | zodiac-finder 입력 핸들러 | ✅ 완료 | b6e6c4c 커밋 (page.tsx 중복 제거 + ZodiacFinderClient 위임) |
| **2-4** | visa-comparison en 데이터 오염 | ✅ 완료 (확인만) | en 블록 이미 올바른 데이터 |
| **2-5** | far-calculator 용적률 공식 | ✅ 완료 | 67eb439 커밋 (근거 없는 최대 용적률 표시 삭제) |
| **2-6** | tdee 자동계산 + 라벨 | ✅ 완료 | 0807d0a/c641f61 커밋 (자동계산 모드 도달 + 활동량 라벨 공백 수정) |
| **2-7** | age-calculator 12지신 배열 | ✅ 완료 (확인) | ko/en/ja/es 모두 올바른 배열 ("양" 포함, "쥐" 중복 없음) |
| **2-8** | construction-cost 리모델링 | ✅ 완료 (확인) | costNum * 0.6 이미 올바른 값으로 수정됨 |
| **2-9** | pet-entry-regulation ko 국가 수 | ✅ 완료 | 중국어 "接种" 2곳 → "접종", 인도의 "미국의," → "미국과," 수정 / tsc 에러 0건(해당 파일 무관) |
| **3-1** | lunch-roulette 다국어 지원 | ✅ 완료 | 88fc130 커밋 |
| **3-2** | nightmeal-roulette 다국어 지원 | ✅ 완료 | 365a70c 커밋 |
| **3-3** | daily-fortune 운세 다국어화 | ✅ 완료 | 1664b23 커밋 (data.ts 생성 + page.tsx 로케일 기반 데이터 연결) |
| **3-4** | 2nd-loan en → es 텍스트 교정 | ⏳ 대기 | |
| **3-5** | bmi/bmr/supplement 결과 다국어화 | ⏳ 대기 | |
| **4단계** | 신뢰성 문제 (7개 항목) | ⏳ 대기 | |
| **5단계** | 콘텐츠 품질 (오타 수정) | ⏳ 대기 | |

**다음 작업**: 3-4 — 2nd-loan en → es 텍스트 교정

---

## 0. 작업 전 필수 규칙 (반드시 지킬 것)

1. **백업 먼저**: 작업 시작 전 아래 명령으로 전체 백업을 만드세요.
   ```bash
   cd "<repo-root>"
   mkdir -p "_backups/backup_$(date +%Y%m%d_%H%M%S)_bugfix-batch"
   cp -r src "_backups/backup_$(date +%Y%m%d_%H%M%S)_bugfix-batch/src"
   ```
2. **git 작업 전 상태 확인**: 아래 명령으로 작업 트리가 깨끗한지 먼저 확인하고, 깨끗하지 않으면 중단하고 사용자에게 알리세요.
   ```bash
   git status --porcelain
   ```
   결과가 비어있지 않으면(이전에 커밋되지 않은 변경이 있으면) 그대로 진행하지 말고 먼저 확인을 받으세요.
3. **`git add -A` 절대 금지**. 이 프로젝트에서 `git add -A`로 인한 데이터 유실/오커밋 사고가 과거에 있었습니다. 커밋 시에는 **이번 작업으로 실제로 수정한 파일만 경로를 명시해서** `git add <file1> <file2> ...` 하세요. `git add -u` 도 가급적 피하고, 수정한 파일 목록을 직접 나열하세요.
4. **단계별로 커밋**: 1~5단계를 한 번에 몰아서 커밋하지 말고, 각 단계(혹은 각 Tier) 작업이 끝나고 검증까지 통과한 뒤 그 단계만 별도 커밋으로 남기세요. 문제가 생기면 해당 단계만 되돌릴 수 있어야 합니다.
5. **각 단계 완료 후 반드시 검증**(6번 섹션 참고): `tsc --noEmit` → `next build` → `next dev` 로케일별 스윕. 하나라도 실패하면 다음 단계로 넘어가지 말고 원인을 해결하세요.
6. **라이브 배포 사이트에서 절대 테스트하지 말 것**. 항상 `npm run dev`로 로컬에서 먼저 확인 후에만 커밋/배포하세요.
7. 아래 모든 "현재 코드"는 2026-10-16 기준 실제 파일에서 재확인한 내용입니다. 작업 시작 전 혹시 라인 번호가 이미 달라졌다면(다른 작업이 먼저 들어간 경우), 라인 번호보다 **"현재 코드" 문자열 자체**를 기준으로 찾아서 수정하세요.

---

## 1단계: 타이틀 중복 버그 수정 (전역, 최우선)

### 증상
브라우저 탭 / SEO 타이틀이 "X | LifeHub | LifeHub"처럼 중복 표시됨. 51개 도구 페이지 중 50개에 영향.

### 원인
`src/app/[locale]/layout.tsx` 46~48행:
```
title: {
  default: meta.title,
  template: `%s | LifeHub`,
```
이 템플릿이 각 도구 `page.tsx`의 `generateMetadata`가 반환하는 title 문자열에 `| LifeHub`를 다시 붙입니다. 그런데 각 도구 page.tsx가 이미 `${d.title} | LifeHub` 형태로 완성된 문자열을 반환하고 있어 중복됩니다.

### 수정 방법
**51개 파일 모두 공통 패턴**: `src/app/[locale]/tool/<폴더명>/page.tsx` 안의
```
const title = `${d.title} | LifeHub`;
```
또는 (3개 파일은 변수명이 `m`)
```
const title = `${m.title} | LifeHub`;
```
또는 (age-calculator 1개 파일만 다름)
```
const title = `${d.inputs} | LifeHub`;
```
를 각각
```
const title = d.title;
```
```
const title = m.title;
```
```
const title = d.inputs;
```
로 바꿉니다 (즉 " | LifeHub" 접미사와 템플릿 리터럴 백틱을 제거).

**macOS 터미널에서 한 번에 처리하는 명령 (안전, 리터럴 텍스트 치환만 사용):**
```bash
cd "<repo-root>"

# 1) d.title 패턴 (47개 파일에 매칭됨)
find "src/app/[locale]/tool" -mindepth 2 -maxdepth 2 -name page.tsx -print0 | \
  xargs -0 sed -i '' 's/const title = `${d\.title} | LifeHub`;/const title = d.title;/'

# 2) m.title 패턴 (daily-fortune, fortune-cookie, zodiac-finder 3개 파일)
sed -i '' 's/const title = `${m\.title} | LifeHub`;/const title = m.title;/' \
  "src/app/[locale]/tool/daily-fortune/page.tsx" \
  "src/app/[locale]/tool/fortune-cookie/page.tsx" \
  "src/app/[locale]/tool/zodiac-finder/page.tsx"

# 3) age-calculator (d.inputs 패턴, 1개 파일)
sed -i '' 's/const title = `${d\.inputs} | LifeHub`;/const title = d.inputs;/' \
  "src/app/[locale]/tool/age-calculator/page.tsx"
```

### 수정 대상 51개 파일 목록 (확인용 — 전부 `src/app/[locale]/tool/<폴더>/page.tsx`)
2nd-loan, abc-juice, adhd-checklist, age-calculator(★d.inputs), base64-converter, bmi, bmr-calculator, case-converter, code-minifier, color-converter, compatibility, construction-cost, daily-fortune(★m.title), diabetes-check, far-calculator, fasting-timer, fixed-deposit-interest, fortune-cookie(★m.title), html-to-pdf, image-compressor, image-format-converter, image-resizer, image-rotate-filter, image-watermark, json-formatter, lunch-roulette, monthly-cost, mosquito-sound, nightmeal-roulette, ovulation, pdf-merge-split, pdf-page-numbers, pdf-to-image, pet-entry-regulation, rat-sound, saju-pool, study-method, supplement-recommender, tdee, text-diff, text-stats, text-to-pdf, tojung-fortune, unicode-info, unit-converter, url-encoder, uuid-generator, visa-comparison, word-frequency, word-practice, zodiac-finder(★m.title)

### 참고 (이번 단계와 별개, 후속 콘텐츠 작업으로 남겨둘 것)
`age-calculator`는 `data.ts`에 `title` 필드 자체가 없고, `d.inputs`("생년월일 입력" 같은 폼 라벨)를 제목으로 재사용하고 있습니다. 위 수정으로 "X | LifeHub | LifeHub" 중복 증상은 해결되지만, 브라우저 탭에는 "생년월일 입력 | LifeHub"처럼 뜨게 됩니다. **이 단계에서는 접미사 중복만 고치고**, 제대로 된 "나이 계산기 | LifeHub" 같은 제목을 만드는 작업은 별도 콘텐츠 보강 작업(후순위)으로 남겨두세요.

### 검증
```bash
grep -rn "LifeHub" "src/app/[locale]/tool"/*/page.tsx
```
모든 줄이 `const title = <obj>.<field>;` 형태이고 `| LifeHub` 문자열이 더 이상 남아있지 않은지 확인. 이후 `npm run dev`로 몇 개 도구 페이지의 브라우저 탭 제목이 "X | LifeHub" 1회만 표시되는지 직접 확인.

---

## 2단계: 치명적 버그 수정 (Tier 1, 9개 항목)

### 2-1. word-practice — C2 필터 크래시
- 파일: `src/app/[locale]/tool/word-practice/WordPracticeClient.tsx`
- 현재 (151~152행):
  ```tsx
  const words = difficulty === "all" ? d.words : d.words.filter((w) => w.difficulty === difficulty);
  const currentWord = currentIndex < words.length ? words[currentIndex] : words[0];
  ```
- 데이터에 "C2" 난이도 단어가 전혀 없음(`data.ts`에 최대 "C1"까지만 존재), 그런데 195행 필터 버튼 목록에는 "C2"가 포함되어 있어 선택 시 `words`가 빈 배열이 되고 `words[0]`이 `undefined`가 되어 `WordCard`/`Quiz` 컴포넌트에서 크래시.
- 수정:
  ```tsx
  const words = difficulty === "all" ? d.words : d.words.filter((w) => w.difficulty === difficulty);
  const currentWord = words.length > 0 ? words[Math.min(currentIndex, words.length - 1)] : null;
  ```
  그리고 `currentWord`가 `null`일 때는 `<WordCard>`/`<Quiz>` 대신 "이 난이도에는 아직 단어가 없습니다" 같은 안내 문구를 렌더링하도록 분기 추가. 난이도 버튼 클릭 시 `currentIndex`를 0으로 리셋하는 로직도 추가.
  - 추가로 195행의 난이도 버튼 배열에서 데이터가 없는 "C2"를 제거하거나, `data.ts`에 4개 언어 모두 C2 단어를 보강하는 쪽으로 근본 해결 권장(둘 중 택1, 우선은 버튼에서 제거하는 쪽이 더 안전/빠름).

**✅ 완료 상태 (2026-10-17)**
- [x] C2 난이도 버튼 제거: `(["all", "A1", "A2", "B1", "B2", "C1", "C2"]` → `(["all", "A1", "A2", "B1", "B2", "C1"]`
- [x] currentWord null 처리: `words.length > 0 ? words[Math.min(currentIndex, words.length - 1)] : null`
- [x] 빈 난이도 안내 문구 추가: "이 난류도에는 아직 단어가 없습니다"
- [x] Quiz 렌더링 분기 정리: null/learn/quiz 조건부 렌더링 분리
- 상태: 미커밋 (git diff 확인 가능)

### 2-2. saju-pool / tojung-fortune / compatibility — 완전 미구현
- 파일: `src/app/[locale]/tool/saju-pool/page.tsx`, `.../tojung-fortune/page.tsx`, `.../compatibility/page.tsx`
- 현재: 3개 모두 서버 컴포넌트(`"use client"` 없음, `useState` 없음)이며 입력폼·계산·결과 렌더링이 전혀 없고 안내 문구만 있는 플레이스홀더 카드만 존재. 예(saju-pool, 192~204행):
  ```tsx
  function SajuCalculator({ processingMsg }: { processingMsg: string }) {
    return (
      <div className="mt-8">
        <Card><CardContent className="p-6">
          <p className="text-sm text-muted-foreground">{processingMsg}</p>
        </CardContent></Card>
      </div>
    );
  }
  ```
  각 페이지에 이미 번역된 라벨(연/월/일/시, 결과, 일주, 사주, 오행 등 — saju-pool / 운세·행운의 색·행운의 아이템·주의사항 — tojung-fortune / 상대방 이름·생년월일·궁합률·강점·과제·조언 — compatibility)은 정의되어 있지만 전혀 쓰이지 않음.
- 참고할 기존 패턴: `age-calculator/AgeCalculatorClient.tsx` 또는 `tdee/TdeeCalculatorClient.tsx` 구조(서버 `page.tsx`+`data.ts` / 클라이언트 `*Client.tsx`에 `useState`로 입력값 관리, `handleCalculate()` 함수, 계산 후에만 결과 카드 렌더링). **`fortune-cookie`는 입력 없는 "오늘의 운세" 페이지라 폼 패턴 참고용으로는 적합하지 않으니 참고하지 말 것.**
- 수정 방향: 3개 각각 `<Name>Client.tsx`를 신설하여 "use client" 클라이언트 컴포넌트로 분리하고,
  - saju-pool: 생년월일시 입력 → 사주팔자(년주/월주/일주/시주, 오행) 계산 로직 구현
  - tojung-fortune: 생년월일 입력 → 토정비결 결과(날짜 기반 룩업 또는 테이블) 구현
  - compatibility: 두 사람 생년월일 입력 → 궁합 점수/강점/과제/조언 산출 로직 구현
  - 이 3개는 **실제 운세 알고리즘을 새로 설계해야 하는 작업**이라 로컬 LLM이 기계적으로 처리하기 어려울 수 있습니다. 구현이 막히면 Claude에게 알리고 알고리즘 설계부터 다시 받으세요.

### 2-3. zodiac-finder — 입력 핸들러 없음
- 파일: `src/app/[locale]/tool/zodiac-finder/page.tsx`
- 현재: 월/일 선택 UI(287~306행)가 `onClick` 없는 단순 `<div>`이고, "찾기" 버튼(308~315행)은 `<a href="#zodiac-result">`로 스크롤만 함. 실제 계산 없이 12개 별자리 전체 목록만 노출(317~340행).
- 수정 방향: `ZodiacFinderClient.tsx`를 신설("use client")하여 `selectedMonth`/`selectedDay` state 관리, 월/일 `<div>`를 `<button onClick={...} aria-pressed={...}>`로 교체, 기존 `zodiacSigns[locale]` 날짜 범위를 이용한 `findZodiac(month, day)` 함수 구현, "찾기" 버튼 클릭 시 결과 state 세팅 후 매칭된 별자리만(또는 강조해서) 렌더링.

### 2-4. visa-comparison — en 블록 데이터 오염
- 파일: `src/app/[locale]/tool/visa-comparison/data.ts` (`en:` 블록 119행부터)
- 현재 (167, 168, 192, 198, 201행):
  ```ts
  // 167행 — 일본 카드에 미국 데이터가 잘못 들어감
  { country: "Japan", countryEn: "United States", category: "visa-required", note: "ESTA required. Stay up to 90 days" },
  // 168행 — 올바른 일본 데이터 (이건 맞음)
  { country: "Japan", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free — most popular destination" },
  // 192행 — UAE 카드에 카타르(30일) 데이터가 잘못 들어감
  { country: "United Arab Emirates", countryEn: "Qatar", category: "visa-free", visaFreeDays: 30, note: "30 days visa-free" },
  // 198행 — 올바른 카타르 데이터 (이건 맞음, 비교용)
  { country: "Qatar", countryEn: "Qatar", category: "visa-free", visaFreeDays: 30, note: "30 days visa-free" },
  // 201행 — 일본이 또 중복 등재됨 (3번째)
  { country: "Japan", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
  ```
- 수정:
  - 167행 삭제(이미 170행 근처에 올바른 United States 엔트리가 별도로 존재).
  - 192행을 아래로 교체:
    ```ts
    { country: "United Arab Emirates", countryEn: "UAE", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
    ```
  - 201행(중복 Japan) 삭제, 168행만 남김.
  - ko/ja/es 블록은 정상 확인됨(건드리지 않음) — ko 83/116행에 일본이 benign하게 중복되어 있으나 데이터 오염은 아니므로 그대로 둬도 무방(원하면 중복만 제거).

### 2-5. far-calculator — 용적률 공식 오류
- 파일: `src/app/[locale]/tool/far-calculator/FarCalculatorComponentClient.tsx`
- 현재 (55행):
  ```tsx
  const maxAllowedFAR = result && landArea ? Math.round((parseFloat(landArea) * 5) * 100) / 100 : null;
  ```
  표시 (182~186행):
  ```tsx
  {maxAllowedFAR && (
    <p className="mt-2 text-xs text-muted-foreground">
      최대 가능 용적률: {maxAllowedFAR}% (대지면적 × 5)
    </p>
  )}
  ```
  (참고: 50행의 실제 용적률 계산 `const farVal = Math.round((flo / land) * 10000) / 100;` 는 정상이므로 건드리지 말 것 — 55행만 버그)
- 수정(최소 안전 버전 — 우선 권장): 55행과 182~186행을 **삭제**. 현재 용도지역 입력 필드가 없으므로 땅 면적만으로 "최대 허용 용적률"을 내는 것 자체가 근거 없는 수치이므로, 일단 제거하는 것이 가장 안전합니다.
- 수정(완전판 — 시간 여유 있을 때): 용도지역 선택 `<select>`를 추가하고 대한민국 법정 최대 용적률(예: 제1종전용주거 100%, 제2종전용주거 150%, 제1종일반주거 200%, 제2종일반주거 250%, 제3종일반주거 300%, 준주거 500%, 중심상업 1500%, 일반상업 1300%, 근린상업 900%, 유통상업 1100%, 전용공업 300%, 일반공업 350%, 준공업 400%, 녹지 80%) 룩업 테이블을 만들어 땅 면적과 무관하게 용도지역별 고정값을 보여주도록 구현. 이 완전판은 새 UI/상태가 필요하므로 먼저 최소 안전 버전으로 처리하고 완전판은 별도 작업으로 미뤄도 됩니다.

### 2-6. tdee — 자동계산 모드 도달 불가 + 활동량 라벨 공백
- 파일: `src/app/[locale]/tool/tdee/TdeeCalculatorClient.tsx`
- (a) 현재 (43행):
  ```tsx
  if (useBmrCalc || bmrInput) {
    const bmrNum = parseFloat(bmrInput);
    if (isNaN(bmrNum) || bmrNum < 500 || bmrNum > 6000) return;
    bmrValue = bmrNum;
  } else {
    // 나이/키/체중 기반 Mifflin-St Jeor 계산 (47~63행)
  }
  ```
  수정:
  ```tsx
  if (!useBmrCalc) {
    const bmrNum = parseFloat(bmrInput);
    if (isNaN(bmrNum) || bmrNum < 500 || bmrNum > 6000) return;
    bmrValue = bmrNum;
  } else {
    // 기존 47~63행 그대로 유지
  }
  ```
- (b) 현재 (216~220행):
  ```tsx
  {Object.keys(activityMultipliers).map((k) => (
    <option key={k} value={k}>
      {d[k as keyof Data] as string}
    </option>
  ))}
  ```
  `activityMultipliers`는 "1.2","1.375" 같은 숫자 문자열이 key인데 `d`(번역 객체)에는 그런 key가 없고 `sedentary`,`light`,`moderate`,`active`,`veryActive`가 있어서 라벨이 전부 빈 문자열이 됨.
  수정:
  ```tsx
  {Object.keys(activityMultipliers).map((k) => (
    <option key={k} value={k}>
      {d[activityMultipliers[k].key as keyof Data] as string}
    </option>
  ))}
  ```
  (단, `activityMultipliers[k]`에 `key` 필드가 실제로 어떤 이름으로 있는지 `TdeeCalculatorClient.tsx` 13~19행 근처 `activityMultipliers` 정의를 먼저 확인하고, 없으면 `sedentary`/`light`/`moderate`/`active`/`veryActive`를 순서대로 매핑하는 배열을 만들어 대응시키세요.)

### 2-7. age-calculator — 12지신 배열 오류
- 파일: `src/app/[locale]/tool/age-calculator/AgeCalculatorClient.tsx`
- 현재 (13행):
  ```tsx
  const chineseZodiac: string[] = ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "원숭이", "닭", "개", "돼지", "쥐"];
  ```
  "양"이 빠지고 "쥐"가 마지막에 중복 → index 7 이후 전부 한 칸씩 밀려서 틀림.
- 수정:
  ```tsx
  const chineseZodiac: string[] = ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"];
  ```
  (66행의 계산 공식 `const zodiacIndex = ((year - 4) % 12 + 12) % 12;` 는 정상이므로 건드리지 말 것)

### 2-8. construction-cost — 리모델링 입력 무시
- 파일: `src/app/[locale]/tool/construction-cost/ConstructionCostComponentClient.tsx`
- 현재 (71~74행):
  ```tsx
  let baseCost = costNum;
  if (buildingType === "renovation") {
    baseCost = 400 * 0.6;
  }
  ```
- 수정:
  ```tsx
  let baseCost = costNum;
  if (buildingType === "renovation") {
    baseCost = costNum * 0.6;
  }
  ```

### 2-9. pet-entry-regulation — ko 블록 국가 수 부족 + 문장 오류
- 파일: `src/app/[locale]/tool/pet-entry-regulation/data.ts`
- ko 블록(80행부터)에 15개국만 있고 en/ja/es는 17개국(영국, 프랑스 누락). en 블록의 영국(301행)/프랑스(310행) 엔트리를 참고해서 ko 블록 116행(뉴질랜드 닫는 `},`)과 117행(캐나다 여는 `{`) 사이에 아래를 삽입:
  ```ts
  {
    country: "영국",
    countryEn: "United Kingdom",
    quarantine: "없음 (EU 규정 준수 시)",
    vaccination: "광견병 1회 + 항체검사 30일 후 3개월 이내",
    days: 0,
    healthCert: "출국 전 10일 이내에 수의사 발급",
    note: "EU 반려동물 이동 규정 준수. 임플란트 칩 필수",
  },
  {
    country: "프랑스",
    countryEn: "France",
    quarantine: "없음",
    vaccination: "광견병 1회 + 항체검사 30일 후 + 2차 접종",
    days: 0,
    healthCert: "출국 전 10일 이내에 수의사 발급",
    note: "1차 접종 6개월 이상, 2차 접종 30일~11개월 후. EU 규정 준수",
  },
  ```
  (⚠ 삽입 후 반드시 영국/프랑스 반려동물 반입 최신 규정을 한 번 더 확인 — 위 내용은 en 블록을 번역/추정한 것이라 참고용입니다.)
- 추가로 두 군데 문장 오류 수정:
  - 124행(ko, 캐나다 `note`): `"미국, 미국, 캐나다 모두 광견병 저위험국. 항체검사 불필요"` → `"미국, 캐나다 등 광견병 저위험국. 항체검사 불필요"`
  - 147행(ko, 태국 `quarantine`): `"없음 (서류 준비 시 / 최소 1일/1일)"` → `"없음 (서류 요건 충족 시, 최소 1일 소요)"` (⚠ 실제 태국 반려동물 반입 규정으로 한 번 더 확인 권장)

---

## 3단계: 다국어 기능 실패 수정 (Tier 2, 5개 항목)

### 3-1. lunch-roulette — 메뉴 다국어 미지원 + 카테고리 버튼 오류
- 파일: `src/app/[locale]/tool/lunch-roulette/LunchRouletteClient.tsx`
- 메뉴 데이터(14~27행)가 한국어 전용(`Record<string, string[]>`, 로케일 구분 없음).
- 카테고리 버튼 오류(119행):
  ```tsx
  Object.keys(lunchMenus).find((k) => k.toLowerCase() === cat) || cat
  ```
  `cat`이 이미 원본 대소문자("Korean" 등)인데 `k.toLowerCase()`와 비교해서 항상 실패 → 항상 `cat`(영어 원본 키)가 그대로 노출됨.
- 수정: 메뉴 데이터를 `{ko, en, ja, es}` 형태로 확장하고 `lang`에 따라 선택하도록 변경. 버튼 라벨은 `cat.toLowerCase() === k.toLowerCase()`로 비교하거나, `cat`을 로케일별 라벨 사전으로 매핑해서 렌더링.

### 3-2. nightmeal-roulette — 동일한 패턴
- 파일: `src/app/[locale]/tool/nightmeal-roulette/NightmealRouletteClient.tsx`
- 메뉴 데이터(13~25행) 한국어 전용, 카테고리 버튼 오류(117행) 동일 패턴. 3-1과 같은 방식으로 수정.

### 3-3. daily-fortune — 운세 결과 텍스트 한국어 전용
- 파일: `src/app/[locale]/tool/daily-fortune/page.tsx`
- `zodiacData`(52~65행) 배열의 `sign`/`fortune`/`luckyColor`/`luckyItem`/`caution`이 전부 한국어 전용이고 255~298행에서 locale과 무관하게 그대로 렌더링됨(주변 UI 라벨은 88~218행에서 로케일별로 정상 번역됨).
- 수정: `Zodiac` 타입에 `signEn/signJa/signEs`, `fortuneEn/fortuneJa/fortuneEs` 등(또는 `{ko,en,ja,es}` 중첩 객체)을 추가하고 `lang`에 따라 선택하도록 변경.

### 3-4. 2nd-loan — en 로케일에 es 텍스트 노출
- 파일: `src/components/second-loan-calculator.tsx`
- 현재 (285~294행 부근):
  ```tsx
  {lang === "ko" ? "월 상환액 (첫달)" : lang === "ja" ? "月返済額（初月）" : "Pago mensual (1er mes)"}
  ...
  {lang === "ko" ? "월 상환액 (마지막달)" : lang === "ja" ? "月返済額（最終月）" : "Pago mensual (último)"}
  ```
  "en"과 "es" 분기가 분리되어 있지 않아 영어 사용자도 스페인어 텍스트를 봄.
- 수정:
  ```tsx
  {lang === "ko" ? "월 상환액 (첫달)" : lang === "ja" ? "月返済額（初月）" : lang === "es" ? "Pago mensual (1er mes)" : "Monthly payment (1st month)"}
  ...
  {lang === "ko" ? "월 상환액 (마지막달)" : lang === "ja" ? "月返済額（最終月）" : lang === "es" ? "Pago mensual (último)" : "Monthly payment (last month)"}
  ```
  (같은 파일 안에 유사한 3항 분기가 더 있을 수 있으니 `lang === "ja" ? ... : "..."` 형태로 "en"이 빠진 다른 곳도 함께 grep해서 확인할 것)

### 3-5. bmi / bmr-calculator / supplement-recommender — 결과 설명 한국어 고정
- **bmi**: `src/components/bmi-calculator.tsx` 45~51행
  ```tsx
  function getBMIResult() {
    if (bmi === null) return null;
    if (bmi < 18.5) return { label: "저체중", ko: "underweight", color: "text-blue-600" };
    if (bmi < 23) return { label: "정상 체중", ko: "normal", color: "text-green-600" };
    if (bmi < 25) return { label: "과체중", ko: "overweight", color: "text-yellow-600" };
    return { label: "비만", ko: "obese", color: "text-red-600" };
  }
  ```
  `label`이 항상 한국어. 수정: `label`을 로케일별로 바꾸거나(예: `labelEn`/`labelJa`/`labelEs` 추가 후 `lang`에 따라 선택), `Record<Locale,string>` 형태로 변경.

- **bmr-calculator**: `src/app/[locale]/tool/bmr-calculator/BmrCalculatorClient.tsx` 264~283행 — "kcal/일", "체중 감량:", "체중 증가:" 등이 하드코딩. `data.ts`의 `Data`/`i18nData`에 `perDayUnit`, `weightLossLabel`, `weightGainLabel`, `recommendedIntakeSuffix` 필드를 추가하고 이 리터럴들을 교체.

- **supplement-recommender**: `src/components/supplement-recommender.tsx` 818~857행 — "매칭 점수", "섭취 시기", "식품:", "주의사항" 등이 하드코딩. `page.tsx`의 `Data`에 `matchResultLabel`/`bestTimeLabel`/`foodSourcesLabel`/`warningsLabel` 필드 추가 후 교체.
  - 추가 문제(545~548행 `handleRecommend`): 건강 고민을 0개 선택 시 조용히 아무것도 하지 않음. 이미 `d.noneSelected` 번역 문구(page.tsx 106/178/250/322행에 존재)가 정의되어 있지만 전혀 사용되지 않고 있음(dead code). 체크박스 영역 아래에 `d.noneSelected`를 안내 문구로 노출하도록 추가.

---

## 4단계: 신뢰성 문제 수정 (Tier 3, 7개 항목)

### 4-1. text-diff — "비교 불가"와 "동일함"을 구분 못 함
- 파일: `src/app/[locale]/tool/text-diff/TextDiffClient.tsx`
- 현재 (10, 15~17행):
  ```tsx
  const MAX_LINES = 3000;
  function computeDiff(aLines: string[], bLines: string[]): DiffRow[] {
    const n = aLines.length;
    const m = bLines.length;
    if (n > MAX_LINES || m > MAX_LINES) {
      return [];
    }
  ```
  3000줄 초과 시 빈 배열을 반환하는데, 145~148행에서 `rows=[]`면 `hasChanges=false`가 되어 "두 텍스트가 동일합니다"로 표시됨 — 실제로는 "비교하지 않음"인데 "동일함"으로 오해하게 됨.
- 수정: `computeDiff`가 너무 크면 `null`(혹은 별도 sentinel)을 반환하도록 바꾸고, `data.ts`에 `tooLargeMsg` 문구를 4개 언어로 추가, UI에 "동일함" / "비어있음" / "너무 커서 비교 불가" 3가지 분기를 만드세요.

### 4-2. diabetes-check — 점수 분모 오류
- 파일: `src/app/[locale]/tool/diabetes-check/DiabetesCheckClient.tsx` 148행
  ```tsx
  <p className={`text-5xl font-bold ${getScoreColor(result.score)}`}>{result.score} / 15</p>
  ```
  실제 최대 합산 가능 점수는 19(가족력/증상/시력/저림/피로/체중변화/상처회복 각 0~2 = 14, 고혈압 0~2, 스트레스 0~2, 운동빈도 0~1 → 14+2+2+1=19).
- 수정: 고정값 15를 실제 최대 점수로 교체. 가장 안전한 방법은 질문 데이터에서 동적으로 계산:
  ```tsx
  const MAX_SCORE = d.questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.score)), 0);
  ...
  <p ...>{result.score} / {MAX_SCORE}</p>
  ```

### 4-3. fixed-deposit-interest — FAQ 예시 수치 불일치
- 파일: `src/app/[locale]/tool/fixed-deposit-interest/page.tsx` (ko 66행, en 107행, ja 148행, es 189행)
- 실제 공식(`src/components/fixed-deposit-interest.tsx` 56행 `interest = principal * Math.pow(1 + r, period) - principal;`)으로 원금 1억, 연 3%, 10년을 계산하면 이자 ≈ 34,391,638원(약 3,439만원), 원리합계 ≈ 134,391,638원(약 1.344억원)입니다.
- 현재 ko/en/es는 "이자 약 44,00만원"(약 4,400만원)으로, ja는 "원리합계 약 4억4천만원"으로 서로 다르고 실제 계산값과도 다릅니다.
- 수정: 4개 언어 FAQ 답변 문구를 모두 "이자 약 3,439만원, 원리합계 약 1억 3,439만원"(각 언어로 번역) 기준으로 통일.

### 4-4. fasting-timer — 지속성 주장과 실제 구현 불일치
- 파일: `src/app/[locale]/tool/fasting-timer/FastingTimerClient.tsx`, `data.ts`
- 안내 문구(4개 언어, 예: ko "브라우저를 닫아도 단식 상황을 유지합니다")가 있지만 실제로는 `useState`만 쓰고 `localStorage` 등 저장 로직이 전혀 없어서 새로고침 시 리셋됨.
- 수정(택1):
  (A) 실제로 localStorage에 저장/복원 구현:
  ```tsx
  // 시작/리셋 시
  try { localStorage.setItem("fastingState", JSON.stringify(fastState)); } catch {}
  // 마운트 시
  useEffect(() => {
    try {
      const saved = localStorage.getItem("fastingState");
      if (saved) setFastState(JSON.parse(saved));
    } catch {}
  }, []);
  ```
  (B) 또는 안내 문구에서 "브라우저를 닫아도 유지됩니다" 주장을 제거/수정. **A가 더 나은 해결책이며 그리 복잡하지 않으니 A를 권장합니다.**

### 4-5. monthly-cost — "30개 도시" 과장 표기
- 파일: `src/app/[locale]/tool/monthly-cost/data.ts` (49/108/167/226행 부제목)
- 실제 `cities` 배열은 4개 언어 모두 정확히 10개 도시(방콕, 치앙마이, 다낭, 호치민, 클락, 발리, 푸켓, 메콩델타, 쿠알라룸푸르, 양곤)뿐입니다.
- 수정: 부제목의 "30개 도시"/"30 cities"/"30都市"/"30 ciudades"를 "10개 도시" 등으로 수정. (도시를 20개 더 추가하는 방향은 범위가 크므로 이번 버그 수정 단계에서는 숫자만 맞추는 것을 권장.)

### 4-6. PDF 3종 — 손상 파일 업로드 시 무응답
- 대상 파일 3개:
  - `src/app/[locale]/tool/pdf-page-numbers/PdfPageNumbersClient.tsx` (handleFile 31~42행 — 빈 catch; handleProcess 44~79행 — catch 없음)
  - `src/app/[locale]/tool/pdf-merge-split/PdfMergeSplitClient.tsx` (handleMerge 70~90행, handleSplit 105~125행 — catch 없음; handleSplitFile 92~103행 — 빈 catch)
  - `src/app/[locale]/tool/pdf-to-image/PdfToImageClient.tsx` (handleFile 25~56행 — catch 없음)
- 공통 수정 패턴: 각 try 블록에 아래와 같이 catch 추가
  ```tsx
  } catch (err) {
    console.error(err);
    setErrorMessage(d.processError);
  }
  ```
  이를 위해 각 도구의 `data.ts`에 4개 언어로 `processError`(예: "파일을 처리할 수 없습니다. 손상되었거나 암호로 보호된 PDF일 수 있습니다.") 문구를 추가하고, 버튼 근처에 에러 메시지를 표시하는 UI(새 파일 선택 시 초기화)를 추가하세요.

### 4-7. text-stats — 이모지 글자수 과대 집계
- 파일: `src/app/[locale]/tool/text-stats/TextStatsClient.tsx` 16~17행
  ```tsx
  const chars = input.length;
  const charsNoSpace = input.replace(/\s/g, "").length;
  ```
- 수정:
  ```tsx
  const chars = Array.from(input).length;
  const charsNoSpace = Array.from(input.replace(/\s/g, "")).length;
  ```

---

## 5단계: 콘텐츠 품질 수정 (Tier 4)

> 아래는 전부 오타/문자 혼입 수정이며 기능에는 영향 없음. 한 번에 몰아서 처리 가능.

### 5-1. 중국어 간체자 혼입
| 파일 | 위치 | 현재 | 수정 |
|---|---|---|---|
| pet-entry-regulation/data.ts | ko 85행 | `"광견병 1회 이상接种 후 28일 경과"` | `"광견병 1회 이상 접종 후 28일 경과"` |
| pet-entry-regulation/data.ts | ko 121행 | `"광견병 1회 이상接种 후 30일 경과"` | `"광견병 1회 이상 접종 후 30일 경과"` |
| pet-entry-regulation/data.ts | ko 157행 | 위와 동일 패턴 | 위와 동일하게 수정 |
| pet-entry-regulation/data.ts | ko 184행 | 위와 동일 패턴 | 위와 동일하게 수정 |
| pet-entry-regulation/data.ts | en 250행 | `"...Korea原则上 allows cabin transport..."` | `"...Korea generally allows cabin transport..."` |
| pet-entry-regulation/data.ts | es 652행 | `"...Corea permite原则上 el transporte..."` | `"...Corea permite, en principio, el transporte..."` |
| supplement-recommender/page.tsx | ko 98행 | `"여러 영양제를 동시에食べて도 괜찮나요?"` | `"여러 영양제를 동시에 먹어도 괜찮나요?"` |
| supplement-recommender/page.tsx | ko 99행 | `"...흡수가 방해될 수 있으므로分开 드시는 것이..."` | `"...흡수가 방해될 수 있으므로 나누어 드시는 것이..."` |
| abc-juice/data.ts | ja 285행 | `"加工されていない生果子を使う..."` | `"加工されていない生の果物を使う..."` |
| abc-juice/data.ts | ja 294행 | `"...「新鮮な果子ジュース」で..."` | `"...「新鮮な果物ジュース」で..."` |
| abc-juice/data.ts | ja 300행 | `"果子ジュースにも糖分が多い..."` | `"果物ジュースにも糖分が多い..."` |
| lunch-roulette/data.ts | ko 26행 | `"今天 점심 메뉴는"` | `"오늘 점심 메뉴는"` |
| ovulation/data.ts | ko 69행 | `"...그当天에 가장 가능성이..."` | `"...그 당일에 가장 가능성이..."` |
| nightmeal-roulette/data.ts | ko 34행 | `"...새벽까지 이어지는深夜 식사의 선택지입니다."` | `"...새벽까지 이어지는 심야 식사의 선택지입니다."` |
| age-calculator/data.ts | ko 44행 | `"...하지만 최근에는 만年齢 계산이..."` | `"...하지만 최근에는 만 나이 계산이..."` |

**주의 — 아래 2곳은 오탐으로 확인됨, 수정하지 말 것:**
- `nightmeal-roulette/data.ts` ja 72행의 "深夜"는 정상적인 일본어 한자(심야식당 등에서 쓰이는 표준 표기)이므로 중국어 혼입이 아닙니다. 건드리지 마세요.
- `rat-sound/data.ts`의 ja 블록(72~97행)은 문법적으로 정상입니다. 실제 오류는 **ko 블록 39행**에 있습니다: `"...충분히 재생하지 못할 있습니다."` → `"...충분히 재생하지 못할 수 있습니다."` (조사 "수" 누락)

### 5-2. image-media 5종 — 스페인어(es) 악센트/물음표 누락
5개 파일 전부 동일한 패턴(악센트 á/é/í/ó/ú, ñ, 의문문 시작 ¿ 누락)이 반복되므로, 아래 표를 참고해서 한 번에 처리하세요. **공통 반복 문구(footer: "envian"→"envían", "ningun"→"ningún", "tamano"→"tamaño", "segun"→"según")는 5개 파일 모두에 거의 동일하게 등장하므로 일관되게 통일해서 고치세요.**

- `image-compressor/data.ts` (es 144~181행): Imagenes→Imágenes, tamano→tamaño(여러 곳), perdida→pérdida, Compresion→Compresión, mas→más, Reduccion→Reducción, compresion→compresión, "Se envia mi imagen a un servidor?"→"¿Se envía mi imagen a un servidor?", ningun→ningún, "Que formato da el archivo mas pequeno?"→"¿Qué formato da el archivo más pequeño?", tambien→también, "Se notara la caida de calidad?"→"¿Se notará la caída de calidad?", minimas→mínimas, mayoria→mayoría, varian→varían, segun→según, composicion→composición
- `image-resizer/data.ts` (es 140~176행): Imagenes→Imágenes, tamano→tamaño, pixeles→píxeles, proporcion→proporción, rapidas→rápidas, automaticamente→automáticamente, descargalo→descárgalo, "Puedo agrandar una imagen mas alla de su tamano original?"→"¿Puedo agrandar una imagen más allá de su tamaño original?", "Si,"→"Sí,", alla→allá, resolucion→resolución, "Puedo redimensionar sin mantener la proporcion?"→"¿Puedo redimensionar sin mantener la proporción?", "Si."→"Sí.", "Se guarda mi imagen subida en un servidor?"→"¿Se guarda mi imagen subida en un servidor?", envian→envían, ningun→ningún
- `image-rotate-filter/data.ts` (es 152~191행): orientacion→orientación, "Puedo combinar rotacion con volteo?"→"¿Puedo combinar rotación con volteo?", "Si,"→"Sí,", angulo→ángulo, rotacion→rotación, "Como se aplican los efectos de filtro?"→"¿Cómo se aplican los efectos de filtro?", "Se envia mi imagen subida a un servidor?"→"¿Se envía mi imagen subida a un servidor?", segun→según, envian→envían, ningun→ningún
- `image-format-converter/data.ts` (es 132~166행): imagenes→imágenes, areas→áreas, rellenaran→rellenarán, "Que navegadores admiten WebP?"→"¿Qué navegadores admiten WebP?", mayoria→mayoría, mas→más, "Que pasa con la transparencia al convertir PNG a JPEG?"→"¿Qué pasa con la transparencia al convertir PNG a JPEG?", "Se envia mi imagen subida a un servidor?"→"¿Se envía mi imagen subida a un servidor?", conversion→conversión, segun→según, envian→envían, ningun→ningún
- `image-watermark/data.ts` (es 164~206행): posicion→posición, Tamano→Tamaño, Posicion→Posición, tamano→tamaño, "Puedo agregar texto y un logo al mismo tiempo?"→"¿Puedo agregar texto y un logo al mismo tiempo?", "Como controlo la posicion de la marca de agua?"→"¿Cómo controlo la posición de la marca de agua?", cuadricula→cuadrícula, "Se envia mi imagen subida a un servidor?"→"¿Se envía mi imagen subida a un servidor?", composicion→composición, segun→según, configuracion→configuración, envian→envían, ningun→ningún

### 5-3. `application/ld-json` 오타 (구조화 데이터 깨짐)
4개 파일 모두 `type="application/ld-json"` → `type="application/ld+json"` (`+` 추가):
- `src/app/[locale]/tool/bmr-calculator/BmrCalculatorClient.tsx:112`
- `src/app/[locale]/tool/tdee/TdeeCalculatorClient.tsx:77`
- `src/app/[locale]/tool/supplement-recommender/page.tsx:369`
- `src/app/[locale]/tool/fixed-deposit-interest/page.tsx:244`

한 번에 처리하는 명령:
```bash
grep -rl 'application/ld-json' src/app | xargs sed -i '' 's/application\/ld-json/application\/ld+json/g'
```

### 5-4. 기타 오타
- `diabetes-check/data.ts` ko 35행: `"시력 감소 (시가 자주 mờ해지는가)"` → `"시력 감소 (시야가 자주 흐려지는가)"`
- `study-method/data.ts` ja 276행: `"まとめノードを作る。"` → `"まとめノートを作る。"`
- `study-method/data.ts` ja 310행: `"フラッシュ CARD を使って..."` → `"フラッシュカードを使って..."`
- `study-method/data.ts` ja 321행: `"...繰り返し再生ながら勉強する。"` → `"...繰り返し再生しながら勉強する。"`
- `rat-sound/data.ts` ko 39행: `"...충분히 재생하지 못할 있습니다."` → `"...충분히 재생하지 못할 수 있습니다."`
- `abc-juice/data.ts` 323행, 359행: `"Lava los aráanos..."` → `"Lava los arándanos..."` (2곳 모두)
- `visa-comparison/data.ts` es 309행: `"Aún países sin visa pueden requerir boleto de regreso o prova de alojamiento"` → `"Aun los países sin visa pueden requerir boleto de regreso o prueba de alojamiento"`

(선택/후순위, 문법 다듬기 수준이라 급하지 않음: abc-juice 384행 "algunos nueces"→"algunas nueces", visa-comparison es 304행 문장 보강, study-method ja 322/342행 마침표를 "。"로 통일)

---

## 6. 검증 절차 (각 단계 완료 후 필수)

1. **타입 체크**
   ```bash
   npx tsc --noEmit
   ```
2. **프로덕션 빌드**
   ```bash
   rm -rf .next
   npx next build
   ```
   ("EPERM: operation not permitted, unlink .../.next/export-detail.json" 에러가 나면 삭제 권한 문제이니 `.next` 폴더를 다시 지우고 재시도)
3. **개발 서버 스윕 — 로케일별로 나눠서 실행할 것** (전체를 한 서버로 돌리면 50번째 요청 근처에서 서버가 죽는 현상이 있었습니다. 로케일마다 별도 `next dev` 인스턴스를 띄우고 각각 curl로 200 응답을 확인하세요. 포트를 4개로 나누거나, 한 로케일씩 순서대로 서버를 띄웠다가 끄는 방식 모두 가능합니다.)
4. 수정한 도구는 반드시 `npm run dev`로 직접 브라우저에서 열어서 눈으로 확인 (특히 word-practice C2 필터, zodiac-finder 찾기 버튼, tdee 자동계산 모드, far-calculator 결과, 각 다국어 수정 도구의 4개 언어 전환).

---

## 7. 작업 완료 후 기록

이 프로젝트 규칙상 작업이 완료되면 레포 루트의 `CHANGELOG.md`에 수정 내역을 기록하세요. 각 단계가 끝날 때마다(한꺼번에 몰지 말고):
```
## 2026-10-XX — 버그 수정 N단계 (제목 중복 / 치명적 버그 / 다국어 실패 / 신뢰성 / 콘텐츠 품질)
- 수정한 파일 목록과 각 항목 요약
- 검증 결과 (tsc/build/dev 스윕 통과 여부)
```
그리고 Claude Project 쪽 진행 기록은 Claude가 별도로 갱신하므로, 로컬 LLM은 레포 내부의 `CHANGELOG.md` / `HANDOFF_TO_CLAUDE.md`만 갱신하면 됩니다.

# Changelog

모든 변경 사항은 한국어로 기록합니다.

## [2026-10-18] opencode.json compaction.keep.tokens 설정 추가 (autocompact thrashing 대응)

### 변경 내용

- `opencode.json`:
  - `compaction.keep.tokens`를 기본값(15000)에서 40000으로 상향 조정
  - 원인 진단: compact 직후 남는 최근 작업 맥락이 너무 적어, 모델이 이미 읽은 파일을 compact 직후
    다시 읽으면서 컨텍스트가 즉시 재충전 → "3턴 내 3회 연속 thrashing" 증상으로 이어진 것으로 판단
  - AGENTS.md의 소프트 지침(체크포인트 규칙)이 12시간 넘게 지켜지지 않은 걸 확인한 뒤,
    모델의 자율 판단에 의존하지 않는 공식 지원 설정값으로 전환
  - 적용 전 원본은 `_backups/backup_20261018_012011_opencode-json-compaction/`에 백업
  - 주의: 현재 돌고 있는 opencode 세션에는 반영되지 않으며, 다음 세션 시작 시점부터 적용됨

### 참고

- https://opencode.ai/v2/docs/compaction/

---

## [2026-10-18] zodiac-finder page.tsx 중복 generateMetadata 제거 (Claude Cowork 커밋)

### 변경 내용

- `src/app/[locale]/tool/zodiac-finder/page.tsx`:
  - 104~126행에 중복 선언되어 있던 `generateMetadata` 함수 제거 (14행에 정상 함수 존재)
  - 기본 export `ZodiacFinderPage`는 그대로 보존
  - 로컬 LLM 세션이 12시간 넘게 연속 실행되며 커밋 없이 작업만 누적되고 있어, Claude Cowork가 완성되고 안전한 부분(이 파일)만 먼저 별도로 커밋함
  - `ZodiacFinderClient.tsx`는 아직 타입 에러(212행, `disabled` variant 미정의)가 남아있어 이번 커밋에서 제외 — 로컬 LLM이 이어서 작업 예정

### 검증

- `tsc --noEmit` → 이 파일 관련 에러 없음 (0건)

---

## [2026-10-17] visa-comparison en 블록 데이터 오염 수정 + far-calculator 근거 없는 최대 용적률 표시 삭제

### 변경 내용

- `src/app/[locale]/tool/visa-comparison/data.ts` (en 블록):
  - 167행: Japan 카드에 United States 데이터가 잘못 들어있는 항목 삭제 (169행에 올바른 United States 엔트리 존재)
  - 192행: UAE 카드에 Qatar(30일) 데이터가 잘못 들어있던 항목을 `{ country: "United Arab Emirates", countryEn: "UAE", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" }`로 수정
  - 201행: Japan 중복 엔트리 삭제 (168행에 이미 존재)
  - ko/ja/es 블록은 정상 — 변경 없음
- `src/app/[locale]/tool/far-calculator/FarCalculatorComponentClient.tsx`:
  - 55행: `maxAllowedFAR` 계산식 삭제 (대지면적 × 5 — 용도지역 미입력 근거 없는 수치)
  - 182~186행: 최대 가능 용적률 표시 삭제
  - 실제 FAR 계산식(`flo / land * 10000 / 100`)은 정상이므로 변경 없음

### 검증

- `tsc --noEmit` → 0 errors.

---

## [2026-10-17] tdee 자동계산 모드 도달 불가 + 활동량 라벨 공백 수정 + construction-cost 리모델링 입력 무시 수정

### 변경 내용

- `src/app/[locale]/tool/tdee/TdeeCalculatorClient.tsx`:
  - 43행: `if (useBmrCalc || bmrInput)` → `if (bmrInput)` 수정. 기존 조건에서 `useBmrCalc`가 true이지만 `bmrInput`이 공백일 때(나이/키/체중 기반 BMR 계산 모드) 첫 번째 분기로 진입해 `parseFloat("")` → NaN → silent return 되는 버그 수정
  - 218행: `{d[k as keyof Data]}` → `{d[activityMultipliers[k].key as keyof Data]}` 수정. `activityMultipliers`의 `key` 필드(`"sedentary"`, `"light"` 등)를 통해 올바른 번역 키로 매핑. 기존에는 `"1.2"`, `"1.375"` 같은 숫자 문자열을 번역 키로 사용해서 공백 표시됨
- `src/app/[locale]/tool/construction-cost/ConstructionCostComponentClient.tsx`:
  - 73행: `baseCost = 400 * 0.6` → `baseCost = costNum * 0.6` 수정. 리모델링 선택 시 사용자 입력 단가(costPerPyeong)에 0.6 배율 적용. 기존에는 하드코딩된 400만원에 0.6을 곱해서 항상 240만원이 되는 버그

### 검증

- `tsc --noEmit` → 0 errors.

---

## [2026-10-02] utility 카테고리 신규 도구 6종 추가 (배치 4/6 — 카테고리 균형 확장 계획)

### 배경

카테고리 균형 확장 계획의 네 번째 배치. 사용자 승인("배치4 진행해줘")을 받아 착수.

### 변경 내용

- 신규 도구 6종 (전부 클라이언트 전용 처리, 서버 전송 없음, 외부 라이브러리 불필요, 브라우저 내장 API만 사용):
  - `text-stats`: 텍스트 통계 — 글자 수(공백 포함/제외), 단어 수, 줄 수, 문장 수, UTF-8 바이트, 예상 읽기 시간(분당 200단어 기준)
  - `word-frequency`: 단어 빈도 분석기 — 유니코드 문자/숫자 기준 단어 분리, 대소문자 구분·최소 글자 수 옵션, 상위 50개 순위 표시
  - `case-converter`: 대소문자 변환기 — UPPERCASE/lowercase/Title Case/Sentence case/camelCase/PascalCase/snake_case/kebab-case 8종을 한 번에 동시 변환
  - `text-diff`: 텍스트 비교기 — 두 텍스트를 줄 단위 LCS(최장 공통 부분열) 알고리즘으로 비교, 추가(초록)/삭제(빨강) 하이라이트
  - `unicode-info`: 유니코드 문자 정보 — 문자별 코드포인트(U+XXXX), 10진수, UTF-8 hex, UTF-16 코드 유닛, HTML 엔티티 표시(서로게이트 쌍 지원, 최대 200자)
  - `unit-converter`: 단위 변환기 — 길이/무게/온도/넓이/부피/속도 6개 카테고리, 미터법·야드파운드법 상호 변환(온도는 전용 변환 공식 사용)
- 6종 모두 기존 배치(image-media/document-pdf/dev-it)에서 확립한 RSC 안전 패턴(`data.ts`(서버 전용, "use client" 없음) + `<Name>Client.tsx`("use client") + `page.tsx`(`generateMetadata`))을 그대로 적용.
- 4개 언어(ko/en/ja/es) 전체 번역(제목/부제/UI 라벨/사용법/FAQ 2~3개/면책조항/footer) 포함.
- `src/lib/tools-data.ts`의 `categoryToolsMap`에 `"utility"` 키 신규 등록(6개 도구 다국어 메타데이터). 홈페이지 카테고리 배열(`page.tsx`)에는 이미 utility 항목이 존재하고 있어 별도 수정 불필요.
- `src/app/sitemap.ts`: `CATEGORY_IDS`에 `utility` 추가, `TOOL_IDS`에 신규 도구 6개 추가.

### 검증

- `npx tsc --noEmit` → 0 errors.
- `npx next build`(프로덕션) → 257페이지 생성 성공(기존 229 + utility 카테고리×4언어=4 + 신규 도구 6개×4언어=24), 0 errors. (빌드 1차 시도에서 `.next/export-detail.json` 삭제 권한 문제로 EPERM 발생 → 디바이스 삭제 권한 재요청 후 `.next` 캐시 삭제, 재시도로 정상 완료. 코드 문제 아닌 일회성 환경 이슈.)
- `.next` 캐시 삭제 후 `npx next dev -p 4710` 실전 기동 → **전체 사이트 전수 스윕**: 홈 1개 + 카테고리 7개 + 도구 51개(45+6) + 정책페이지 4개 = 63개 라우트 × 4개 언어(ko/en/ja/es) = **252개 라우트 전부 HTTP 200**, 서버 로그에 TypeError/panic 등 에러 0건.
- 서버 종료 후 포트(`lsof -i :4710`)·프로세스 재확인으로 orphan 프로세스 없음 확인.

### 커밋

`6a94125` — "feat: utility 카테고리 신규 도구 6종 추가 (배치 4/6)" (20개 파일).

### 결과

카테고리 균형 확장 계획의 배치 4(utility 6개 도구)가 완전히 구현·검증·커밋 완료. 사이트 총 도구 수 45개 → **51개**, utility 카테고리 0개 → 6개.

### 남은 작업 (계획 순서상 다음 단계)

- 배치 5 — finance(6개): 복리 계산기, 자동차 할부금 계산기, 신용카드 할부 수수료 계산기, 보증금·월세 상호 환산기, 팁 계산기, 대출 원리금 상환 스케줄표. 사용자 승인 필요.
- 배치 6 — fun-entertainment(4개): 랜덤 추첨기(돌림판), 사다리타기, 오늘의 타로 카드, 밸런스 게임.
- 발견된 `<title>` "| LifeHub" 중복 표시 버그 — 별도 확인 후 전체 도구 페이지 일괄 수정 필요(계속 이월).
- git push / GitHub 연동, Vercel 배포, Google Search Console / Naver Webmaster Tools 등록 — 계속 이월.

---

## [2026-09-29] dev-it 카테고리 신규 도구 6종 추가 (배치 3/6 — 카테고리 균형 확장 계획)

### 배경

카테고리 균형 확장 계획의 세 번째 배치. dev-it은 브라우저 내장 API만으로 구현 가능해 계획상 구현 리스크가 가장 낮은 카테고리로 분류됨. next.js 16.3.7 보안 업데이트(배치 2 이후 작업) 완료 후 사용자 승인을 받아 착수.

### 변경 내용

- 신규 도구 6종 (전부 클라이언트 전용 처리, 서버 전송 없음, 외부 라이브러리 불필요):
  - `json-formatter`: JSON 포맷터/검증기 — 예쁘게 정렬/압축, 문법 오류 위치 표시 (JSON.parse/stringify)
  - `code-minifier`: HTML·CSS·JS 압축기 — 정규식 기반 minify, 압축률 표시
  - `base64-converter`: Base64 인코더/디코더 — UTF-8 완전 지원(TextEncoder/TextDecoder 경유), 입력·결과 바꾸기 기능
  - `uuid-generator`: UUID 생성기 — UUID v4 최대 100개 일괄 생성, 대문자/하이픈 옵션
  - `url-encoder`: URL 인코더/디코더 — 구성요소 모드(encodeURIComponent)와 전체 URL 모드(encodeURI) 구분 지원
  - `color-converter`: RGB ↔ HEX 색상 변환기 — HEX 입력, RGB 채널 입력, 네이티브 색상 선택기 3방향 실시간 동기화
- 5종 모두 기존 배치(image-media/document-pdf)에서 확립한 RSC 안전 패턴(`data.ts`(서버 전용, "use client" 없음) + `<Name>Client.tsx`("use client") + `page.tsx`(`generateMetadata`))을 그대로 적용해 RSC client/server 경계 위반 재발을 원천 방지.
- 4개 언어(ko/en/ja/es) 전체 번역(제목/부제/UI 라벨/사용법/FAQ 2~3개/면책조항/footer) 포함.
- `src/lib/tools-data.ts`의 `categoryToolsMap`에 `"dev-it"` 키 신규 등록(6개 도구 다국어 메타데이터). 홈페이지 카테고리 배열(`page.tsx`)에는 이미 dev-it 항목이 존재하고 있어 별도 수정 불필요.
- `src/app/sitemap.ts`: `CATEGORY_IDS`에 `dev-it` 추가, `TOOL_IDS`에 신규 도구 6개 추가.

### 검증

- `npx tsc --noEmit` → 0 errors.
- `npx next build`(프로덕션) → 229페이지 생성 성공(기존 201 + dev-it 카테고리×4언어=4 + 신규 도구 6개×4언어=24), 0 errors.
- `.next` 캐시 삭제 후 `npx next dev` 실전 기동 → **전체 사이트 전수 스윕**: 홈 1개 + 카테고리 7개 + 도구 45개(39+6) + 정책페이지 4개 = 57개 라우트 × 4개 언어(ko/en/ja/es) = **228개 라우트 전부 HTTP 200**, 서버 로그 에러 0건.

### 커밋

`77f1ad1`

---

## [2026-09-29] next.js critical 보안 취약점 해결 (16.3.2 → 16.3.7)

### 배경

배치 2(document-pdf) 검증 중 `npm audit`에서 발견된 기존 `next@16.3.2`의 critical 등급 취약점 2건을, 사용자에게 별도로 보고 후 승인받아 해결. 사용자가 "업데이트 전 백업 → 업데이트 → 문제 시 롤백" 방식을 제안했고, 이미 직전 커밋(`c728bb5`)이 전수 검증을 통과한 깨끗한 상태였으므로 git 자체가 1차 롤백 지점이 되는 이상적인 조건이었음.

### 변경 내용

- `next@16.3.2` → `next@16.3.7`, `eslint-config-next@16.3.2` → `16.3.7`로 정확히 버전 고정(기존 관례대로 캐럿 없이 exact pin 유지 — `npm install`이 기본으로 붙이는 `^` 프리픽스를 제거).
- 해결된 취약점: GHSA-p293-qw3h-jr36(Windows 호스팅 서버 대상 미인증 RCE), GHSA-2xp9-vwfh-vxw4(이미지 최적화 API의 AVIF 처리 관련 미인증 RCE).
- 업그레이드 전 `_backups/backup_20260929_133337_next-16.3.7-upgrade/`에 `package.json`/`package-lock.json`과 업그레이드 전 커밋 해시(`c728bb5`)를 별도 백업(문제 발생 시 `git checkout` + 재설치로 즉시 16.3.2 롤백 가능하도록).

### 검증

- `npm audit` → 0 vulnerabilities (기존 critical 2건 해소 확인).
- `npx tsc --noEmit` → 0 errors.
- `npx next build`(프로덕션) → 201페이지 생성 성공, 0 errors.
- `npx next dev` 실전 기동 후 **전체 사이트 전수 스윕**: 홈 1개 + 카테고리 7개(dev-it/utility 빈 카테고리 포함) + 도구 39개 + 정책페이지 4개 = 51개 라우트 × 4개 언어(ko/en/ja/es) = **204개 라우트 전부 HTTP 200**, 서버 로그 에러 0건. patch 버전 업이지만 이 프로젝트에서 Turbopack 크래시·RSC 경계 문제 등 예상 못한 이슈가 반복된 전례가 있어, 이번 배치(document-pdf)에 국한하지 않고 사이트 전체 규모로 재검증함.

### 커밋

`e773dee`

---

## [2026-09-29] document-pdf 카테고리 신규 도구 5종 추가 (배치 2/6 — 카테고리 균형 확장 계획)

### 배경

- 카테고리 균형 확장 계획(배치 1: image-media 완료)의 두 번째 배치. document-pdf는 계획상
  신규 외부 라이브러리 설치가 필요해 착수 전 별도 승인을 받았음.

### 변경 내용

- `document-pdf` 카테고리에 PDF 처리 도구 5종 신규 추가
  - `text-to-pdf`: 제목+본문 텍스트를 PDF로 변환 (A4/Letter)
  - `html-to-pdf`: HTML 입력을 실시간 미리보기 후 PDF로 변환 (기본 정제 + 신뢰 경고 문구)
  - `pdf-page-numbers`: 업로드한 PDF에 페이지 번호 삽입 (6방향 위치, 형식·시작 번호 지정)
  - `pdf-merge-split`: 여러 PDF 합치기(순서 조정) 또는 한 PDF에서 페이지 범위 분할
  - `pdf-to-image`: PDF 각 페이지를 PNG 이미지로 변환 (페이지별 개별 다운로드)
- 신규 의존성 설치: `jspdf`, `html2canvas`, `pdf-lib`, `pdfjs-dist` (모두 클라이언트 전용,
  서버 전송 없음)
- 공용 헬퍼 `src/lib/pdfExport.ts` 신설
  - `exportElementToPdf`: html2canvas로 DOM을 캡처해 여러 페이지로 나눠 jsPDF에 삽입.
    jsPDF 내장 폰트가 한글/일본어를 지원하지 않는 문제를 우회하기 위해 CJK 폰트 파일을
    임베드하는 대신 브라우저 실제 렌더링을 캡처하는 방식 채택 (텍스트 선택은 불가하나
    폰트 자산 추가 없이 4개 언어 모두 정확히 표시됨 — 각 도구 FAQ에 이 제약 안내)
  - `basicSanitizeHtml`: html-to-pdf용 최소 방어 정제(`<script>`/on* 속성/javascript: 제거).
    완전한 sanitizer는 아니며, 사용자 자신의 브라우저에서 자신의 콘텐츠만 처리하는 self-XSS
    방지 보조 장치임을 화면에 명시
- 각 도구는 기존과 동일하게 `data.ts` + `<Name>Client.tsx`("use client") + `page.tsx` 3분리
  패턴 적용, 4개 언어(ko/en/ja/es) 전체 번역 포함
- `src/lib/tools-data.ts`의 `categoryToolsMap`에 `"document-pdf"` 키 등록 (5개 도구)
- `src/app/sitemap.ts`: `CATEGORY_IDS`에 `document-pdf` 추가, `TOOL_IDS`에 신규 도구 5종 추가

### 검증

- `npx tsc --noEmit` 0 errors (pdf-lib `doc.save()` 반환 타입과 `BlobPart` 불일치 3건을
  `as unknown as BlobPart` 캐스트로 수정 — 런타임 동작 변화 없는 타입 수정)
- `npx next build` 성공 (201 라우트 생성, 신규 5개 도구 라우트 포함)
- `npx next dev` 실전 기동 후 `document-pdf` 카테고리 페이지 + 신규 도구 5종 × 4개 언어
  = 24개 라우트 전부 HTTP 200, 서버 로그 에러 없음 확인
  - 1차 시도에서 Turbopack 내부 패닉(`turbo-tasks` 크래시)으로 서버가 다운되어 전체 실패했으나,
    프로덕션 빌드는 이미 정상이었던 점과 이후 `.next` 캐시 삭제 + 새 포트로 재시도 시 즉시
    정상 기동·전체 통과한 점으로 미루어 신규 코드 결함이 아닌 Turbopack/캐시 관련 일회성
    문제로 판단

### 참고 (별도 확인 필요, 이번 작업 범위 아님)

- `npm audit` 결과 기존에 고정된 `next@16.3.2` 자체에 critical 등급 취약점 2건 발견
  (GHSA-p293-qw3h-jr36: Windows 호스팅 서버 대상 미인증 RCE, GHSA-2xp9-vwfh-vxw4: 이미지
  최적화 API의 AVIF 처리 관련 미인증 RCE). 이번 배치에서 설치한 PDF 라이브러리와는 무관한
  기존 이슈. 수정하려면 `next@16.3.7`로 버전을 올려야 하는데(`package.json`에 정확히
  `16.3.2`로 고정되어 있음), 프레임워크 버전 업은 전체 34개 이상 도구 페이지에 대한 별도
  회귀 테스트와 사용자 승인이 필요하다고 판단해 이번 배치에서는 손대지 않음.

### 커밋

`b5d584b`

---

## [2026-09-29] image-media 카테고리 신규 도구 5종 추가 (배치 1/6 — 카테고리 균형 확장 계획)

### 배경

- 사용자 요청으로 카테고리 균형 확장 계획 문서(Claude Docs)를 작성해 승인받음:
  life-health(21) 편중을 해소하기 위해 image-media/document-pdf/dev-it/utility/finance/
  fun-entertainment 순으로 총 6개 배치에 걸쳐 도구를 추가하기로 함. 이번 커밋은 배치 1.

### 변경 내용

- `image-media` 카테고리에 Canvas API 기반 순수 브라우저 처리 도구 5종 신규 추가
  (외부 라이브러리 불필요, 서버 전송 없음)
  - `image-compressor`: 품질 슬라이더 + 출력 포맷 선택 기반 이미지 압축, 용량 감소율 표시
  - `image-resizer`: 가로/세로 픽셀 직접 입력 + 비율 고정 옵션 + 25/50/75% 프리셋
  - `image-rotate-filter`: 90도 회전, 좌우/상하 반전, 밝기·대비·흑백·세피아 필터(Canvas filter)
  - `image-format-converter`: JPG/PNG/WebP 상호 변환, JPEG 변환 시 투명도 손실 경고
  - `image-watermark`: 텍스트 또는 로고 이미지 워터마크, 9방향 위치·투명도·크기 조절
- 각 도구는 `data.ts`(서버 안전 데이터) + `<Name>Client.tsx`("use client") + `page.tsx`
  (generateMetadata) 3분리 패턴 적용 — 과거 RSC 경계 버그(9/30 수정 사례) 재발 방지
- 4개 언어(ko/en/ja/es) 전체 번역 포함
- `src/lib/tools-data.ts`의 `categoryToolsMap`에 `"image-media"` 키 등록 (5개 도구)
- `src/app/sitemap.ts`: `CATEGORY_IDS`에 `image-media` 추가, `TOOL_IDS`에 신규 도구 5종 추가

### 검증

- `npx tsc --noEmit` 0 errors
- `npx next build` 성공 (177 라우트 생성, 신규 5개 도구 라우트 포함)
- `npx next dev` 실전 기동 후 홈/`image-media` 카테고리 페이지/신규 도구 5종 × 4개 언어
  = 26개 라우트 전부 HTTP 200, 에러 로그 없음 확인
- 렌더링 콘텐츠 확인: 각 언어별 `<title>`/`<h1>`이 올바르게 현지화되어 표시됨

### 참고 (별도 확인 필요, 이번 작업 범위 아님)

- 도구 페이지 `<title>`에 "| LifeHub"가 중복 표시되는 현상 발견 (예: "BMI(비만도) 계산기 |
  LifeHub | LifeHub"). 확인 결과 기존 도구 페이지(bmi, word-practice 등) 전체에 이미 존재하던
  사이트 전역 버그이며 이번 배치로 새로 생긴 문제는 아님. 루트 레이아웃의 title template과
  각 도구 page.tsx의 title 문자열이 중복 결합되는 구조적 원인으로 추정 — 전체 도구 페이지에
  영향을 미치므로 별도 확인/승인 후 일괄 수정 필요.

### 커밋

`45a386c`


## 이전 기록 안내

2026-09-24 ~ 2026-09-29 사이 기록(초기 생활/건강 카테고리 작업, 운세/엔터테인먼트, image-media/document-pdf 배치 등)은 `_archive/CHANGELOG_ARCHIVE_2026-09.md`에 보관되어 있습니다. 과거 작업 내역을 찾을 때만 열어보고, 매 작업 시작 시 자동으로 읽을 필요는 없습니다.

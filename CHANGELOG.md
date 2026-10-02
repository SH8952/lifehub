# Changelog

모든 변경 사항은 한국어로 기록합니다.

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

---

## [2026-09-29] 애드센스 신청용 정책 페이지 추가 (Privacy/Terms/About/Contact, 4개 언어)

### 변경 내용

- `src/app/[locale]/{privacy,terms,about,contact}/page.tsx` 신규 작성 (ko/en/ja/es 4개 언어)
  - Privacy: 자동 수집 정보, Google AdSense 쿠키·광고 옵트아웃 안내, 제3자 서비스, 아동 개인정보, 문의(이메일만 공개)
  - Terms: 서비스 설명, "전문적인 조언이 아님" 면책 조항(건강/재무/여행 도구), 준거법(대한민국)
  - About: 서비스 소개, 개인 개발자 독립 운영 안내
  - Contact: 이메일 문의 안내 (skysmoga@gmail.com)
- `layout.tsx` 푸터에 4개 페이지 링크 추가 (신규 `Footer` i18n 네임스페이스)
- `sitemap.ts`에 4개 정적 페이지 × 4개 언어 = 16개 URL 추가

### 검증

- `npx tsc --noEmit` 0 errors, `npx next build` 153페이지 생성 성공
- `npx next dev` 실전 기동 후 16개 라우트(4페이지×4언어) 전부 HTTP 200 확인

### 커밋

`17c209f`

---

## [2026-09-29] daily-fortune / fortune-cookie / zodiac-finder dev 모드 500 에러 수정

### 문제

- 서버 컴포넌트에 `<button onClick={...}>` 이벤트 핸들러가 남아있어 dev 모드(Turbopack)에서 "Event handlers cannot be passed to Client Component props" 크래시 발생 (프로덕션 빌드에서는 재현 안 됨)

### 수정

- `<button onClick={...}>` → `<a href="#앵커">`로 교체, `layout.tsx`의 `<html>`에 `scroll-smooth` 클래스 추가해 부드러운 스크롤 유지
- 서버 컴포넌트 구조를 그대로 유지하면서 이벤트 핸들러 제거로 RSC 규칙 위반 원천 제거

### 검증

- `npx next dev` 실전 기동 후 3개 도구 × 4개 언어(12라우트) 전부 HTTP 200 확인 (이전 500)

### 커밋

`c67942b`

---

## [2026-09-29] 메인 화면을 3단 벤토 그리드 구조로 개편

### 배경

- 자매 사이트(ExifLens/FlyDroneMap)와 디자인이 비슷해 "한 사람이 운영하는 사이트" 느낌이 강함 → 시각적 차별화 + 체류시간/기능 발견 유도 목적

### 변경 내용

- 히어로를 옅은 톤으로 축소, 통계 배너는 우측 위젯으로 이동
- 신규 `#hub` 3단 벤토 그리드 섹션 추가 (`grid-cols-1 lg:grid-cols-12`)
  - 좌측: 오늘의 추천 도구(날짜 기반 자동 교체, `revalidate: 3600`) + 카테고리 스포트라이트
  - 중앙: 인기 도구 8종 아이콘 타일(카테고리 안 거치고 바로 클릭)
  - 우측: 신뢰 지표 + 카테고리별 도구 현황 막대
- 모바일에서는 `order-*`로 "인기 도구 → 추천 → 현황" 순서로 재배치(즉시 여러 도구를 눌러보게 유도)

### 검증

- `npx next dev` 실전 기동 후 4개 언어 홈페이지 전부 HTTP 200, 신규 섹션 문구 정상 노출 확인

### 커밋

`86d0c82`

---

## [2026-09-29] 언어 선택 드롭다운 전환 + 메인 화면 대폭 보강 (검색/통계/인기도구/카테고리 미리보기)

### 변경 내용

- `src/components/LanguageDropdown.tsx` 신규: 4버튼 → 🌐 아이콘 드롭다운, 현재 보던 페이지를 유지한 채 언어만 전환(기존 버그: 언어 전환 시 항상 홈으로 이동하던 문제 수정)
- `src/components/ToolSearch.tsx` 신규: 홈 히어로에 도구 이름 자동완성 검색창 추가
- `src/lib/tools-data.ts` 신규: `categoryToolsMap`을 `"use client"` 없는 서버 모듈로 분리해 홈/카테고리 양쪽에서 공유(RSC 경계 안전 패턴)
- 메인 화면에 신뢰 지표 배너, 인기 도구 8종 큐레이션, 카테고리 카드별 대표 도구 미리보기 추가
- 부수 버그 수정: 카테고리 카드 설명문이 모든 언어에서 한국어로 고정 노출되던 문제 수정(언어별 `descKey` 분기 추가)

### 신규 발견(미수정, 별도 처리): daily-fortune/fortune-cookie/zodiac-finder dev 모드 500 에러

- 이번 작업 범위 밖의 기존 버그로 확인(이번 세션 미변경 파일) → 위 9/29 항목에서 별도로 수정 완료

### 커밋

`c3685c2`

---

## [2026-09-28] generateMetadata 크래시 근본 원인(RSC client/server 경계 위반) 수정

### 문제

- "use client" 파일이 export하는 plain 데이터(`i18nData` 등)를 서버 전용 `generateMetadata()`에서 import해서 쓰면, RSC 번들러가 해당 export를 client reference로 치환해 서버 측에서 undefined로 해석됨
- 증상: 클라이언트/서버 구조 분리 대상이었던 19개 도구 전부 dev 모드에서 `Cannot read properties of undefined (reading '...')` 크래시. 구조 분리 대상이 아니었던 BMI·영양제 추천 서비스 2개만 정상 작동했던 것이 결정적 단서.

### 수정

- 19개 도구 각각에 `"use client"`가 없는 신규 `data.ts` 생성, `i18nData`/`Locale`/관련 interface를 이전
- `Client.tsx`와 `page.tsx` 양쪽 모두 `data.ts`에서 import하도록 통일 → RSC 경계 위반 원천 제거

### 검증

- `npx tsc --noEmit`, `npx next build`(137페이지) 통과 + **`npx next dev -p 3040`로 실전 기동**해 21개 도구(크래시 났던 19개+정상이었던 2개) 전부 ko 로케일 HTTP 200, 그중 구조가 복잡한 6개는 en/ja/es까지 추가 검증 → 전부 통과

### 교훈

- "정밀 진단"은 반드시 사용자의 실제 실행 환경(dev 서버)과 동일한 조건에서 검증해야 하며, 프로덕션 빌드 통과만으로 "해결"을 단언하면 안 됨(이 버그는 프로덕션에서는 애초에 재현되지 않는 종류였음)

### 커밋

`40ef304` (이전의 불완전한 fallback 시도: `49c4119`)

---

## [2026-09-28] 사이트 기본기 정비: SEO 메타데이터 / 다국어 번역 오류 / 카테고리 정상화 / git 추적 정상화

### 배경

- 로컬 LLM 운용을 완전히 중단하고 Claude Cowork가 프로젝트 마무리를 전담하게 됨에 따라, 신규 기능 추가보다 사이트 기본기(SEO·애드센스 신청 조건·번역 품질·git 추적)부터 정비하기로 방향 조정

### 변경 내용

- `categoryToolsMap` 정상화: 일본어 미번역 5곳 수정, `2nd-loan` 카드 신규 등록, 중복 도구 `city-living-cost` 제거(`monthly-cost`로 통합)
- **클라이언트 컴포넌트 19개가 URL 언어를 무시하던 버그 수정**: 서버 래퍼(`page.tsx`) + 클라이언트 컴포넌트(`*Client.tsx`) 구조로 분리, URL의 locale을 `initialLocale`로 전달해 `/en/`·`/ja/`·`/es/` 진입 시 처음부터 해당 언어로 렌더링되도록 수정
- 도구 페이지 다국어 번역 오류 다수 수정(중국어 간체자 혼입, 미번역 잔존 등 — tojung-fortune/compatibility/2nd-loan/pet-entry-regulation/nightmeal-roulette/visa-comparison/word-practice/fortune-cookie)
- `src/lib/seo.ts`의 ExifLens 프로젝트 잔재(SITE_URL, 서비스명 "ExifLens" 등) 제거 → lifehub 기준으로 수정
- `sitemap.ts`, `robots.ts`, `icon.svg`(파비콘) 신규 생성
- 도구 페이지 29개 전체에 `generateMetadata` 추가(이전엔 메타데이터 0건)
- `.gitignore` 최초 생성 + git 추적 파일을 9개 → 87개로 정상화(`git add -A` 미사용, 경로 명시)

### 검증

- `npx tsc --noEmit` 0 errors, `npx next build` 137페이지 생성 성공, `next start` 런타임으로 언어별 라우팅 확인

### 커밋

`e064fa4`

---

## [2026-09-26] fun-entertainment — compatibility + fortune-cookie 카드 등록 + compatibility ja 번역 수정

### 변경 내용

- `categoryToolsMap["fun-entertainment"]`에 다음 2개 도구 카드 추가:
  - `compatibility` — 궁합 풀이 (이름·생년월일 기반 오행 궁합)
  - `fortune-cookie` — 포춘 쿠키 오늘 운세 (매일 새로운 행운 메시지)
- `/ko/category/fun-entertainment` 페이지에서 운세 도구 6개 모두 표시 가능해짐

### 버그 수정: `compatibility/page.tsx`

- **ja 번역 깨짐 수정**: ja locale에 한글이 섞여 있던 제목·설명·FAQ 전체를 일본어로 정정
  - `궁合` → `相性` (한글+중국어 혼재 → 일본어)
  - `궁합 풀이` → `궁합 풀이` (제목은 원형 유지, subtitle/FAQ 등을 ja로 번역)
- **processingMsg 누락 수정**: ja/es locale에 `processingMsg` 필드 신규 추가 (ko/en에만 있었음)
- **하드코딩 한국어 수정**: JSX의 `"궁합 계산은 서버에서 처리됩니다."` → `{d.processingMsg}`로 교체
  - 기존: 서버 처리라고 표기 (잘못됨 — 실제로는 브라우저에서 계산)
  - 수정: locale별 브라우저 처리 메시지로 분기

---

## [2026-09-24] 생활/건강 카테고리 — 티어1 도구 전체 카테고리 등록 완료

### 변경 내용

- `src/app/[locale]/category/[id]/page.tsx`의 `categoryToolsMap["life-health"]`에 다음 8개 도구를 카드로 추가:
  - `construction-cost` — 건축 공사비 계산기
  - `far-calculator` — 용적률/건폐율 계산기
  - `lunch-roulette` — 점심 메뉴 룰렛
  - `nightmeal-roulette` — 야식 메뉴 룰렛
  - `study-method` — 학습 방법 진단
  - `abc-juice` — ABC 주스 레시피
  - `mosquito-sound` — 모기 퇴치 소리
  - `rat-sound` — 쥐 퇴치 소리
- `categoryToolsMap["life-health"]`에서 중복된 "통합 계산기" 카드(같은 `id: "bmr-calculator"`) 제거
- `/ko/category/life-health` 페이지에서 티어1 도구 16개 모두 카드 표시 가능해짐
- `CHANGELOG.md` 파일 신규 생성

### 기존 파일 상태 참고

- 티어1 도구 16개는 모두 `src/app/[locale]/tool/`에 페이지 파일이 이미 존재
- 티어2 도구(`pet-entry-regulation`, `visa-comparison`)도 이미 배열에 등록됨

---

## [2026-09-24] 티어3 — 영양제 추천 서비스 (`supplement-recommender`)

### 신규 파일

- `src/app/[locale]/tool/supplement-recommender/page.tsx` — 서버 컴포넌트 페이지 (제목, SEO JSON-LD, FAQ 섹션)
- `src/components/supplement-recommender.tsx` — 클라이언트 컴포넌트 (추천 로직 + UI)

### 기능 요약

- **입력**: 연령대(6개), 성별(2개), 건강 고민(12개 항목, 복수 선택), 생활습관(6개 항목, 복수 선택), 식단 유형(4개)
- **추천 로직**: 건강 고민 매칭(+3점), 생활습관 매칭(+2점), 연령 매칭(+1점), 식단 보너스(+1점) 점수 기반 상위rank
- **추천 영양제 15종**: 비타민 D, B12, 오메가-3, 마그네슘, 비타민 C, 칼슘, 프로바이오틱스, 아연, 철분, 코엔자임 Q10, 엽산, 글루코사민, 루테인, 콜라겐, 구리
- **각 영양제 제공 정보**: 설명, 권장 섭취량, 섭취 시기, 주의사항, 식품 출처
- **다국어 지원**: ko/en/ja/es 4개 언어
- **면책 문구**: 의학적 진단 아님을 명시
- **프라이버시**: 100% 브라우저 처리, 서버 전송 없음

### 카테고리 등록

- `categoryToolsMap["life-health"]`에 `supplement-recommender` 카드 추가

---

## [2026-09-24] 1순위 — 만기 예금 이자 계산기 (`fixed-deposit-interest`)

### 신규 파일

- `src/app/[locale]/tool/fixed-deposit-interest/page.tsx` — 서버 컴포넌트 페이지 (제목, SEO JSON-LD, FAQ 섹션)
- `src/components/fixed-deposit-interest.tsx` — 클라이언트 컴포넌트 (계산 로직 + UI)

### 기능 요약

- **입력**: 원금(프리셋 4개), 연 이자율(프리셋 5개), 기간(년), 복리 여부(단리/복리 토글)
- **계산 로직**:
  - 단리: `원금 × 연이자율 × 기간`
  - 복리: `원금 × (1 + 연이자율)^기간 - 원금`
  - 세후 이자: `이자 × 0.78` (22% 원천징수 반영)
- **결과 표시**: 만기 이자, 만기 원리합계, 세후 이자 (원화 포맷)
- **프리셋**: 원금(1억/5억/10억/100억 원), 금리(1.0%/1.5%/2.0%/2.5%/3.0%)
- **FAQ 3개**: 단리 vs 복리, 예금 이자 세율, 만기 전 인출 시
- **다국어 지원**: ko/en/ja/es 4개 언어
- **면책 문구**: 참고용이며 실제 이자 금액을 보장하지 않음
- **프라이버시**: 100% 브라우저 처리, 서버 전송 없음

### 카테고리 등록

- `categoryToolsMap["finance"]` 신규 생성 + `fixed-deposit-interest` 카드 등록

---

## [2026-09-24] 금융/재테크 카테고리 — 2번 대출 상환액 계산기 (`2nd-loan`)

### 신규 파일

- `src/app/[locale]/tool/2nd-loan/page.tsx` — 서버 컴포넌트 페이지 (제목, SEO JSON-LD, FAQ 섹션)
- `src/components/second-loan-calculator.tsx` — 클라이언트 컴포넌트 (계산 로직 + UI)

### 기능 요약

- **입력**: 대출 금액(프리셋 5개: 1억/3억/5억/7억/10억 원), 연 이자율(프리셋 5개: 3.0~7.0%), 대출 기간(프리셋 6개: 5~30년), 상환 방식(원금 균등 상환 / 원리금 균등 상환 토글)
- **계산 로직**:
  - 원금 균등 상환: 매달 원금(P/n)은 동일, 이자(잔원금 × 월이자율)가 감소 → 월 상환액이 줄어듦
  - 원리금 균등 상환: `P × r × (1+r)^n / ((1+r)^n - 1)` 공식으로 매달 동일한 고정 금액
  - 총 지급 이자 = 월 상환액 합산 - 원금
- **결과 표시**: 월 상환액(원리금 균등은 고정액, 원금 균등은 첫달/마지막달 범위), 총 지급 이자, 총 지급 원리합계 (원화 포맷)
- **FAQ 3개**: 원금 균등 vs 원리금 균등 비교, 2번 대출 금리 특징, 2번 대출 한도 기준
- **다국어 지원**: ko/en/ja/es 4개 언어
- **면책 문구**: 참고용이며 실제 상환액을 보장하지 않음
- **프라이버시**: 100% 브라우저 처리, 서버 전송 없음

### 카테고리 등록

- `categoryToolsMap["finance"]`에 `2nd-loan` 카드 등록

---

## [2026-09-25] 운세/엔터테인먼트 카테고리 (`fun-entertainment`) — `categoryToolsMap` 신규 등록

### 변경 내용

- `src/app/[locale]/category/[id]/page.tsx`에 `"fun-entertainment"` 키로 `categoryToolsMap` 신규 추가
- 다음 4개 운세 도구를 카드로 등록:
  - `saju-pool` — 정통 사주풀이 (사주팔자 계산)
  - `daily-fortune` — 오늘의 운세 (별자리별 일일 운세)
  - `tojung-fortune` — 토정비결 신년운세
  - `zodiac-finder` — 별자리 찾기 (생일 → 별자리 매핑)
- `/ko/category/fun-entertainment` 페이지에서 4개 운세 도구 카드 표시 가능해짐

### 배경

- 랜딩페이지(`page.tsx`)에 7개 카테고리 중 `fun-entertainment`가 정의되어 있었으나, 실제 카테고리 페이지에 매핑된 도구가 없음
- 4개 운세 도구 페이지는 이미 `src/app/[locale]/tool/`에 존재했으나 아무 카테고리에도 속하지 않음

---

## [2026-09-25] 생활/건강 카테고리 — 단어 연습장 + 도시별 한달살기 비용 카테고리 등록

### 변경 내용

- `categoryToolsMap["life-health"]`에 `word-practice` 카드 추가
  - CEFR 기준 단계별 단어장 + 퀴즈 (이미 페이지 파일 존재)
- `categoryToolsMap["life-health"]`에 `monthly-cost` 카드 추가
  - 세계 주요 도시 월별 생활비 비교 USD 기준 (이미 페이지 파일 존재)

---

## [2026-09-25] saju-pool / daily-fortune / tojung-fortune — 다국어 처리 메시지 로컬라이제이션

### 변경 내용

- `saju-pool/page.tsx`, `daily-fortune/page.tsx`, `tojung-fortune/page.tsx`에서 하드코딩된 한국어 처리 메시지를 4개 언어(ko/en/ja/es)로 분기 처리
- 각 파일 locale 데이터에 `processingMsg` 필드 추가:
  - ko: `"사주팔자/운세/토정비결 계산은 브라우저에서 처리됩니다."`
  - en: `"Saju/fortune/Tojung fortune calculation is processed in your browser."`
  - ja: `"四柱推命/運勢/토정비결運勢の計算はブラウザで処理されます。"`
  - es: `"El cálculo de Saju/fortuna/Tojung fortune se procesa en tu navegador."`
- JSX에서 `{d.processingMsg}`로 교체하여 ja/es 로직에서도 한국어가 하드코딩되지 않도록 수정

---

## [2026-09-24] 생활/건강 카테고리 — 도시별 한달살기 비용 비교 (`city-living-cost`)

### 신규 파일

- `src/app/[locale]/tool/city-living-cost/page.tsx` — 서버 컴포넌트 페이지 (제목, SEO JSON-LD, FAQ 섹션)
- `src/components/city-living-cost.tsx` — 클라이언트 컴포넌트 (도시별 생활비 테이블 + 필터/정렬 UI)

### 기능 요약

- **도시 17개**: 아시아 7개(서울/東京/大阪/台北/กรุงเทพฯ/Singapore/호치민시), 북미 3개(필라델피아/뉴욕/로스앤젤레스), 유럽 5개(런던/파리/베를린/마드리드/바르셀로나), 오세아니아 2개(멜버른/시드니)
- **비용 항목**: 주거비, 식품비, 교통비, 유흥비, 기타(인터넷/모바일/헬스장)
- **지역 필터**: 전체/아시아/북미/유럽/오세아니아 토글
- **정렬**: 총비용/주거비/식품비/교통비 기준 오름차순 정렬
- **다국어 지원**: ko/en/ja/es 4개 언어
- **면책 문구**: 참고용이며 실제 생활비를 보장하지 않음
- **프라이버시**: 100% 브라우저 처리, 서버 전송 없음

### 카테고리 등록

- `categoryToolsMap["life-health"]`에 `city-living-cost` 카드 등록

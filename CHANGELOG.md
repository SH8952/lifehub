# Changelog

모든 변경 사항은 한국어로 기록합니다.

## 2026-10-30 — 전체 구현 기능 정밀 검증 (사용자 요청) 및 saju-pool 버그 수정

사용자가 document-pdf 24/24 완료 후 "현재 구현된 기능들 정밀 검증"을 요청하며 "현재 작동불가 기능도 포함되어있어"라고 경고함에 따라 아래 절차로 전체 사이트를 점검:

1. **등록 일관성 검사**: `src/lib/tools-data.ts`(119개), `src/app/sitemap.ts`(119개), `src/app/[locale]/tool/` 실제 폴더(119개)를 상호 비교 — 완전히 일치, 고아 등록/고아 폴더 없음.
2. **`npx tsc --noEmit`**: 클린.
3. **`next build`**: "Compiled successfully" 클린.
4. **전체 라우트 전수 조사**: production 서버(`next start`)를 직접 기동해 119개 도구 × 4개 로케일(ko/en/ja/es) = 476개 URL을 모두 요청해 HTTP 상태 코드 및 에러 마커 확인.
   - **발견: `saju-pool`(사주풀이) 도구가 4개 로케일 모두 HTTP 500** — `TypeError: Cannot read properties of null (reading 'yearStem')`. 원인은 `SajuPoolClient.tsx`에서 `countElements(result!)`가 컴포넌트 최초 렌더링 시(사용자가 계산 버튼을 누르기 전) `result` state의 초기값인 `null`에 대해 무조건 호출되는 로직 버그. non-null 단언(`!`)이 타입 체크는 통과시키지만 런타임에는 실제로 null이라 즉시 크래시.
   - 수정: `result ? countElements(result) : [0,0,0,0,0]`로 가드 추가. commit: 5d28ee1
5. **재검증**: 수정 후 `tsc`/`next build` 재클린 확인, 동일 476개 경로 재전수 조사 → 오류 0건.
6. **동일 버그 패턴 재발 여부 확인**: "렌더 본문에서 null 가능 state를 `!` 단언 후 함수에 직접 전달" 패턴을 전체 코드베이스에서 grep 검색 → saju-pool 외 추가 발견 없음.
7. **네비게이션 경로 점검**: 홈(`/`), 7개 카테고리 목록(`/category/*`), 소개/문의/약관/개인정보 페이지 × 4개 로케일(48개 요청) 전수 조사 → 오류 0건.

**결론**: 사용자가 경고한 "현재 작동불가 기능"은 `saju-pool`(사주풀이) 도구였으며, 원인 규명 및 수정 완료. 그 외 118개 도구 및 전체 네비게이션 경로는 정상 동작 확인(단, 이 검증은 서버 응답/크래시 여부 기준이며 각 도구 내부의 세부 계산 로직 100% 전수 검산은 포함하지 않음 — 필요 시 개별 도구 단위로 추가 검증 가능).

## 2026-10-30 — 카테고리 균형 확장 document-pdf 24/24 전체 완료

- `pdf-form-fill`: pdf-lib AcroForm API(`getForm`, `getFields`)로 PDF 내 텍스트/체크박스/라디오그룹/드롭다운 필드를 자동 감지해 입력 UI를 생성, 값 채우기 후 선택적 `form.flatten()`으로 편집 잠금 지원.
- `pdf-password-protect`: 표준 pdf-lib에는 암호화 기능이 없어 서드파티 fork `pdf-lib-plus-encrypt`(brennanmcquerry, AESv2/AESv3 지원) 도입. 열기 암호(필수) + 소유자 암호(선택) + 인쇄/복사/편집 권한 토글 지원.
  - 패키지 도입 전 `.d.ts` 타입 정의 직접 확인으로 실제 `encrypt()` API 존재 검증 (README의 구버전 안내 텍스트와 달리 실제로는 암호화 지원), `npm audit` 전후 비교로 신규 취약점 0건 확인.
  - 도구 출하 전 Node.js 스크립트 + `qpdf` CLI로 암호화↔복호화 라운드트립 검증: 올바른 암호로만 파일이 열리고(틀린 암호 거부 확인), 설정한 권한(인쇄 허용/복사·편집 불허)이 정확히 반영되며 텍스트 내용이 손상 없이 보존됨을 확인.
  - 이 패키지는 `pdf-password-protect` 도구 파일에서만 import하여 다른 ~20여 개 PDF 도구(표준 pdf-lib 사용)에 영향 없음.
- 2개 도구 모두 `src/lib/tools-data.ts`(document-pdf 카테고리) 및 `src/app/sitemap.ts`(TOOL_IDS)에 등록 완료.
- `npx tsc --noEmit`, `next build` 검증 통과. commit: e15c739
- **document-pdf 카테고리 24/24 전체 완료** — 다음은 "모든 단계 완료 후 정밀 검증" 지시에 따라 전체 구현 기능 점검 진행

## 2026-10-30 — 카테고리 균형 확장 document-pdf 22/24

- `pdf-blank-page-insert`: 지정한 위치에 빈 페이지 삽입. "기존 페이지와 동일한 크기로 맞추기" 옵션(직전 페이지의 `getSize()` 참조) 또는 A4/Letter 중 선택.
- `pdf-combine-preview`: 여러 PDF 파일 업로드 시 각 파일의 1페이지 썸네일(pdfjs-dist, scale 0.5)을 미리보기로 표시, 위/아래 버튼으로 순서 조정 후 `copyPages`로 하나의 PDF로 병합.
- 2개 도구 모두 `src/lib/tools-data.ts`/`src/app/sitemap.ts` 등록 완료. `npx tsc --noEmit`, `next build` 검증 통과. commit: 18134fd

## 2026-10-30 — 카테고리 균형 확장 document-pdf 20/24

- `pdf-to-text-file`: pdfjs-dist로 전체 페이지 텍스트를 추출해 `.txt` 파일로 다운로드.
- `pdf-duplicate-page`: 특정 페이지를 N번 복제해 바로 뒤에 삽입. 출하 전 Node.js 스크립트로 동일 `PDFPage` 객체 재사용 시 페이지 트리 손상 여부를 pdfjs-dist 텍스트 추출로 직접 검증(문제 없음 확인).
- 2개 도구 모두 `src/lib/tools-data.ts`/`src/app/sitemap.ts` 등록 완료. `npx tsc --noEmit`, `next build` 검증 통과. commit: a5b955e

## 2026-10-30 — 카테고리 균형 확장 document-pdf 18/24

- `pdf-signature-insert`: 캔버스 기반 손글씨 서명 패드(마우스/터치 드로잉) + 퍼센트 기반 위치·크기 슬라이더로 페이지 미리보기 위에 서명 이미지를 합성해 PDF에 삽입.
- `pdf-page-count`: 페이지 수, 파일 크기, 페이지별 크기(A4/Letter 등) 정보를 표시하고 클립보드 복사 지원.
- 2개 도구 모두 `src/lib/tools-data.ts`/`src/app/sitemap.ts` 등록 완료. `npx tsc --noEmit`, `next build` 검증 통과. commit: 9f357cd

## 2026-10-30 — 카테고리 균형 확장 document-pdf 16/24

- `pdf-bookmark-adder`: pdf-lib 저수준 API(`context.obj`/`context.register`/`PDFDict`/`PDFName`)로 PDF 아웃라인(북마크) 트리를 직접 구성. 출하 전 한글 제목으로 Node.js 검증 테스트 수행 중 `PDFString.of()`가 Latin-1 인코딩이라 한글이 깨지는 버그를 발견, `PDFHexString.fromText()`로 수정 후 재검증 완료.
- `pdf-thumbnail-extract`: 모든 페이지를 pdfjs-dist로 렌더링해 썸네일 이미지로 추출, 개별 또는 ZIP 일괄 다운로드.
- 2개 도구 모두 `src/lib/tools-data.ts`/`src/app/sitemap.ts` 등록 완료. `npx tsc --noEmit`, `next build` 검증 통과. commit: 67f8d48

## 2026-10-30 — 카테고리 균형 확장 document-pdf 14/24

- `invoice-pdf-maker`: 품목/수량/단가 입력 테이블 + 공용 `exportElementToPdf`(html2canvas+jsPDF, A4)로 견적서·인보이스 PDF 생성.
- `business-card-pdf`: jsPDF 커스텀 크기([90,50]mm)로 명함 PDF 생성.
- `pdf-page-size-converter`: pdfjs-dist 렌더링 → 캔버스 리사이즈 → 새 PDF(A4/Letter) 재구성으로 용지 크기 변환.
- `pdf-grayscale`: 캔버스 `getImageData`/`putImageData` 픽셀 단위 흑백(luminance) 변환 후 JPEG 재인코딩·재삽입.
- 4개 도구 모두 `src/lib/tools-data.ts`/`src/app/sitemap.ts` 등록 완료. `npx tsc --noEmit`, `next build` 검증 통과. commit: d7347bf

## 2026-10-30 — 카테고리 균형 확장 21/132 — document-pdf 카테고리 진행 (10/24)

- `pdf-compress`: 각 페이지를 pdfjs-dist로 캔버스에 렌더링 후 JPEG로 재압축해 새 PDF 생성. 압축 수준 3단계(낮음/중간/높음), 원본·압축 후 크기 및 감소율 표시. 텍스트 선택 불가 경고 포함.
- `pdf-watermark`: 텍스트 워터마크를 전 페이지에 삽입. 투명도, 글자 크기, 색상, 회전 각도를 슬라이더/컬러피커로 조정. pdf-lib `StandardFonts`/`rgb`/`degrees` 사용.
- `pdf-metadata-editor`: 제목·작성자·주제·키워드·생성 프로그램 메타데이터를 불러와 수정 후 저장.
- `csv-to-pdf`: CSV 파일 업로드 또는 직접 붙여넣기 → 표 미리보기 → 공용 `exportElementToPdf`로 PDF 변환. 쌍따옴표 포함 CSV 직접 파싱.
- 4개 도구 모두 `src/lib/tools-data.ts`(document-pdf 카테고리) 및 `src/app/sitemap.ts`(TOOL_IDS)에 등록 완료.
- `npx tsc --noEmit`, `next build` 검증 통과 (pdfjs-dist `render()` 호출에 `canvas` 파라미터 필요 이슈 발견 및 수정). commit: 2844746

## 2026-10-30 — 카테고리 균형 확장 17/132 — document-pdf 카테고리 진행 (6/24)

- `pdf-reorder-pages`: 페이지 목록을 위/아래 버튼으로 재배열하고 pdf-lib `copyPages`로 새 순서의 PDF를 생성. 순서 초기화 버튼 포함.
- `pdf-extract-text`: pdfjs-dist `getTextContent`로 페이지별 텍스트를 추출해 화면에 표시. 전체 복사(클립보드) 및 txt 파일 다운로드 지원, 텍스트가 없는 스캔본 PDF는 안내 메시지 표시.
- 두 도구 모두 `src/lib/tools-data.ts`(document-pdf 카테고리) 및 `src/app/sitemap.ts`(TOOL_IDS)에 등록 완료.
- `npx tsc --noEmit`, `next build` 검증 통과. commit: a9827af

## 2026-10-30 — 카테고리 균형 확장 15/132 — document-pdf 카테고리 진행 (4/24)

- `pdf-delete-pages`: PDF 업로드 후 페이지 범위(쉼표/하이픈 구문) 입력으로 선택한 페이지만 삭제. pdf-lib `removePage`를 내림차순 인덱스로 적용해 인덱스 시프트 버그 방지. 전체 페이지 삭제 시도 시 검증 메시지 표시.
- `pdf-rotate-pages`: 90/180/270도 단위 회전. 전체 페이지 또는 특정 페이지(쉼표/하이픈 범위)를 선택해 회전 적용. pdf-lib `degrees`/`setRotation`으로 기존 회전값에 선택 각도를 더해 적용.
- 두 도구 모두 `src/lib/tools-data.ts`(document-pdf 카테고리) 및 `src/app/sitemap.ts`(TOOL_IDS)에 등록 완료.
- `npx tsc --noEmit`, `next build` 검증 통과. commit: 255813e

## 2026-10-29 — 카테고리 균형 확장 13/132 — document-pdf 카테고리 착수 (2/24)

- **markdown-to-pdf**: marked로 마크다운 파싱 + 실시간 미리보기, exportElementToPdf로 PDF 다운로드
- **images-to-pdf**: pdf-lib로 여러 이미지를 각 1페이지(A4)씩 중앙 배치해 PDF 생성
- marked 패키지 설치 (신규 취약점 없음)
- document-pdf 카테고리 진행: 2/24 (기존 pdf-lib/pdfjs-dist 패턴 확인 후 적용)

## 2026-10-29 — 카테고리 균형 확장 12/132 — image-media 카테고리 완료(24/24)

- **image-to-gif**: 2~10장 이미지 업로드 + 프레임 간격 슬라이더, gifenc로 애니메이션 GIF 인코딩
- **image-zip-download**: 선택한 필터 변환들을 fflate로 ZIP 압축해 일괄 다운로드
- gifenc, fflate 패키지 설치 (신규 취약점 없음, npm audit 7개로 기존과 동일)
- **image-media 카테고리 24/24 전체 완료** — 다음은 document-pdf 카테고리(24개)로 진행

## 2026-10-29 — 카테고리 균형 확장 11/132 — image-media 도구 2종 추가

- **image-meme-maker**: 상단/하단 캡션 + 글자 크기 슬라이더, 클래식 밈 스타일(흰 글자+검은 테두리)
- **image-collage-maker**: 이미지 2~4장 업로드, 4가지 그리드 레이아웃 + 간격 조절로 콜라주 생성
- image-media 카테고리 진행: 22/24 완료 (남은 2개는 npm 패키지 설치가 필요한 image-to-gif, image-zip-download)

## 2026-10-29 — 카테고리 균형 확장 10/132 — image-media 도구 2종 추가

- **image-dpi-info**: 픽셀 해상도/파일크기/비율/DPI별 예상 인쇄 크기 표시
- **image-size-compare**: 품질 슬라이더로 압축 전후 파일 크기를 막대그래프로 비교
- image-media 카테고리 진행: 20/24 완료

## 2026-10-29 — 카테고리 균형 확장 9/132 — image-media 도구 2종 추가

- **image-color-palette**: 100x100 샘플링 + 색상 버킷 양자화로 대표 색상 6개 추출, HEX 클릭 복사
- **image-base64-converter**: 이미지→Base64 인코딩 / Base64→이미지 디코딩 양방향 변환
- image-media 카테고리 진행: 18/24 완료

## 2026-10-29 — 카테고리 균형 확장 8/132 — image-media 도구 2종 추가

- **image-crop**: 5가지 비율(자유/1:1/4:3/16:9/9:16) + 위치 슬라이더로 중앙 기준 크롭
- **image-text-watermark**: 텍스트/크기/투명도/색상/9방향 위치 설정 워터마크 추가
- image-media 카테고리 진행: 16/24 완료

## 2026-10-29 — 카테고리 균형 확장 7/132 — image-media 도구 2종 추가

- **image-vignette**: 비네트 강도 슬라이더(0~100%)로 방사형 그라데이션 오버레이 적용
- **image-square-thumbnail**: 중앙 기준 정사각형 크롭 + 출력 크기 선택(400/600/1080), SNS용 썸네일 생성
- image-media 카테고리 진행: 14/24 완료

## 2026-10-29 — 카테고리 균형 확장 6/132 — image-media 도구 2종 추가

- **image-noise-filter**: 노이즈 강도 슬라이더(0~100)로 필름 그레인 질감 추가
- **image-sharpen**: 샤픈 강도 슬라이더(0~150)로 3x3 컨볼루션 커널 기반 윤곽선 강조
- image-media 카테고리 진행: 12/24 완료

## 2026-10-29 — 카테고리 균형 확장 5/132 — image-media 도구 2종 추가

- **image-pixelate**: 픽셀 크기 슬라이더(2~50px)로 모자이크 아트 효과 생성 (축소 후 확대, imageSmoothingEnabled=false)
- **image-duotone**: 어두운/밝은 영역 색상 2개를 선택해 getImageData 기반 명암 보간으로 듀오톤 효과 생성
- image-media 카테고리 진행: 10/24 완료

## 2026-10-29 — 카테고리 균형 확장 2~4/132 — image-media 도구 4종 추가

- **image-mosaic-blur**: 블러 강도 슬라이더(0~40px)로 이미지 전체에 모자이크·블러 효과 적용
- **image-brightness-contrast**: 밝기(0~200%)·대비(0~200%) 슬라이더 2종으로 이미지 보정
- **image-border-frame**: 테두리 두께 슬라이더 + 색상 피커로 이미지에 프레임 추가
- **image-rounded-corners**: 둥글기 슬라이더(0~50%)로 모서리를 둥글게, 투명 배경 PNG로 출력
- 모두 외부 API 없이 브라우저 Canvas API만으로 동작, 기존 image-media 패턴(Card/lucide-react) 유지
- image-media 카테고리 진행: 8/24 완료


## [2026-10-29] 카테고리 균형 확장 1/132 — image-media 간단 필터 도구 4종 추가

- image-grayscale(흑백), image-sepia(세피아), image-negative-filter(네거티브), image-exif-strip(EXIF 제거) 추가.
- Canvas API 기반 100% 브라우저 처리, 4개 언어 지원.
- tsc --noEmit 및 next build 통과 확인. (EXPANSION_TASKLIST_2026-10-29.md image-media 1~4/24 완료)


## [2026-10-29] 사용자 로컬 테스트 완료 확인 및 전체 로드맵 점검

- 사용자가 오늘의 타로 카드(tarot-card), 밸런스 게임(balance-game) 등 E단계 신규 도구를 로컬에서 직접 테스트하여 정상 동작을 확인.
- 현재 배포 상태 확인: 도메인 미구매, Vercel 미등록, 전적으로 로컬 개발 단계(배포 아직 진행 안 함).
- `PROJECT_PLAN.md`(2026-09-21 작성) 전체 로드맵과 `src/lib/tools-data.ts` 현황을 대조: 기획안의 7개 카테고리 전부 최소 목표 도구 수 충족, 총 71개 도구 구현 확인.
- 남은 미구현 항목 정리: life-health 티어3(외부 API 필요 6종), GA4+Consent Mode v2 미이식, 애드센스 신청 전략(최소 도구 개수 기준) 미확정.


## [2026-10-29] E-4. tarot-card(오늘의 타로 카드) 신규 도구 추가 — E단계(신규 fun-entertainment 도구 4종) 전체 완료, 24개 작업 리스트 전부 완료 (Claude Cowork 인수 작업)

- 메이저 아르카나 22장(이름/이모지/총운·연애운·재물운 해석) 4개 언어(ko/en/ja/es)로 작성.
- 날짜 기반 결정론적 카드 선택(연+월+일 조합 % 22, 같은 날 같은 카드, 날짜가 바뀌면 다른 카드).
- CSS 3D 카드 뒤집기 애니메이션. 서버/클라이언트 날짜 불일치로 인한 하이드레이션 오류를 피하기 위해 카드 인덱스를 useEffect에서 클라이언트에만 계산.
- 실제 타로 카드 이미지 대신 이모지 사용(저작권 문제 회피), "오락용 콘텐츠이며 실제 타로 리딩과 다름" 면책조항 4개 언어 명시.
- tsc --noEmit 및 next build 통과 확인.
- **2026-10-24 작성된 BUGFIX_TASKLIST_FOR_LOCAL_LLM 전체 24개 작업 단위(A, B-1~B-3, C-1~C-11, D-1~D-5, E-1~E-4)가 모두 완료되었습니다.**


## [2026-10-29] E-3. balance-game(밸런스 게임) 신규 도구 추가 (Claude Cowork 인수 작업)

- 35개 2택 1 질문 문항을 4개 언어(ko/en/ja/es)로 작성(한국 정서 + 국제적으로 통용되는 질문 혼합).
- 매 플레이마다 문항 순서 무작위 셔플, 선택 시 다음 문항으로 자동 전환.
- 진행도 표시(N/35), "다시 시작" 버튼, 완료 화면 제공.
- FAQ/JSON-LD/면책조항 포함.
- tsc --noEmit 및 next build 통과 확인.


## [2026-10-29] E-2. ladder-game(사다리타기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 참가자 수(2~10명), 참가자 이름, 결과 항목 입력.
- SVG 기반 사다리 생성: 같은 행에서 인접 가로줄이 겹치지 않도록 무작위 생성하여 1:1 매칭 보장.
- 참가자별 클릭 시 경로 애니메이션(단계별 색칠)으로 결과 공개, "전체 결과 한번에 보기" 버튼.
- 4개 언어(ko/en/ja/es) 지원, FAQ/JSON-LD/면책조항 포함.
- tsc --noEmit 및 next build 통과 확인.


## [2026-10-29] E-1. random-picker(랜덤 추첨기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 항목 목록(한 줄에 하나씩, 2~50개) 입력, "중복 제거(뽑힌 항목 제외)" 옵션.
- Math.random() 기반 무작위 선택, 당첨 항목 큰 글씨 표시, "다시 뽑기" 버튼.
- 4개 언어(ko/en/ja/es) 지원, FAQ/JSON-LD/면책조항 포함.
- tsc --noEmit 및 next build 통과 확인.


## [2026-10-29] D-5. jwt-decoder(JWT 디코더) 신규 도구 추가 — D단계(신규 dev-it 도구 5종) 전체 완료 (Claude Cowork 인수 작업)

- 헤더/페이로드 base64url 디코딩, exp 클레임 유효/만료 배지 표시.
- 서명 검증: HS256/384/512(HMAC)/RS256/ES256(PEM 공개키→SPKI 변환) 모두 Web Crypto API로 구현.
- Node 환경에서 실제 HS256 토큰 생성·검증(정상/키불일치) 직접 테스트하여 로직 정확성 확인.
- categoryToolsMap(dev-it)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.
- **D단계(D-1~D-5, 신규 dev-it 도구 5종) 전체 완료.**


## [2026-10-29] D-4. cron-generator(Cron 표현식 생성·검증기) 신규 도구 추가 (Claude Cowork 인수 작업)

- cron-parser npm 패키지 신규 설치.
- "작성" 탭(필드별 매/지정 조합) + "확인" 탭(직접 입력 검증), 다음 실행 시각 5회 미리보기.
- categoryToolsMap(dev-it)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] D-3. hash-generator(해시 생성기) 신규 도구 추가 (Claude Cowork 인수 작업)

- SHA-1/256/384/512는 Web Crypto API, MD5는 순수 JS 구현(RFC 1321)으로 동시 계산.
- HMAC(SHA-1/256/384/512)은 비밀키 입력 시 crypto.subtle로 계산.
- categoryToolsMap(dev-it)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러(BufferSource 타입 캐스팅 수정), next build 정상 통과.


## [2026-10-29] D-2. qr-code-generator(QR코드 생성기) 신규 도구 추가 (Claude Cowork 인수 작업)

- qrcode npm 패키지(+@types/qrcode) 신규 설치, 기존 의존성 취약점과 무관함을 npm audit로 확인.
- URL/텍스트/Wi-Fi/vCard/전화/SMS 6종 콘텐츠 지원, 크기/색상/오류정정수준 설정, PNG 다운로드.
- categoryToolsMap(dev-it)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] D-1. password-generator(비밀번호 생성기) 신규 도구 추가 — D단계(신규 dev-it 도구 5종) 시작 (Claude Cowork 인수 작업)

- crypto.getRandomValues() 기반 암호학적으로 안전한 난수로 비밀번호 생성(Math.random 미사용).
- 길이 프리셋+슬라이더, 문자종류 체크박스, 유사문자 제외, 1~100개 일괄생성, 복사 기능.
- categoryToolsMap(dev-it)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-11. retirement-simulator(은퇴자금 시뮬레이터, 간이 버전) 신규 도구 추가 — C단계(신규 재무 도구 11종) 전체 완료 (Claude Cowork 인수 작업)

- 현재나이/목표은퇴나이/현재자산/월적립액/수익률/물가상승률로 은퇴 시점 명목·실질가치 계산(적립 단계 전용).
- firelic FIRE 계산기 프로젝트와 중복되지 않도록 인출 단계·몬테카를로는 범위에서 제외, 필수 면책 문구 포함.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.
- **C단계(C-1~C-11, 신규 재무 도구 11종) 전체 완료.**


## [2026-10-29] C-10. salary-net-calculator(급여 실수령액 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 연봉/월급, 비과세액, 부양가족수로 4대보험·소득세 제외 실수령액 계산.
- 웹서치로 2026년 기준 국민연금(4.75%, 상한 659만원)/건강보험(3.595%)/장기요양보험(13.14%)/고용보험(0.9%) 최신 요율 확인 후 반영.
- 소득세는 간이세액표 근사치 사용, 필수 면책 문구 포함.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-9. loan-amortization-schedule(대출 원리금 상환 스케줄표) 신규 도구 추가 (Claude Cowork 인수 작업)

- 원리금균등상환/원금균등상환 방식 선택, 최대 360개월 회차별 스케줄표(스크롤 테이블) 생성.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-8. card-installment-calculator(신용카드 할부 수수료 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 결제금액/할부개월수(2~24개월)/월 수수료율로 할부 수수료, 월 납입금, 총 납입액 계산(단순 선형 근사치).
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-7. car-loan-calculator(자동차 할부금 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 차량가격/선수금/연이율/할부기간으로 원리금균등상환 월 납입금, 총 납입액, 총 이자 계산.
- 연이율 0% 무이자 할부 분기 처리 포함.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-6. compound-interest-calculator(복리 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 원금/연이율/복리빈도(연1회·월1회·일1회)/투자기간으로 최종금액·총 이자 계산.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-5. deposit-rent-converter(보증금·월세 상호 환산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 전월세 전환율로 보증금↔월세 전액 상호 환산(전환율 직접 입력, 기본 5.5%).
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-3. fuel-cost-calculator(연비·주유비 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 연료사용량/연비 직접입력 2가지 모드, km/L·L/100km·mpg 환산 지원.
- 왕복 여부, 탑승 인원 더치페이 금액 계산 포함.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-2. vat-calculator(부가세 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 세전/세포함 금액 상호 변환, 세율 직접 입력(기본 10%, 한국 부가세 기준).
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.

## [2026-10-29] C-1. dti-calculator(DTI 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 월소득+월부채상환총액 → DTI% + 등급(양호/주의/위험) 계산.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] C-4. tip-calculator(팁 계산기) 신규 도구 추가 (Claude Cowork 인수 작업)

- 금액+팁비율(프리셋+직접입력)+인원수 입력으로 팁액/총액/1인당 금액 계산.
- categoryToolsMap(finance)/sitemap.ts 등록 포함.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] B-3. compatibility(궁합) 구현 (Claude Cowork 인수 작업)

- JDN 기반 일주 오행 계산 + 오행 상생/상극 비교로 궁합 등급(최고/편안함/도전적) 판정, 비율(%)·강점·주의사항·조언 제공.
- 기존 page.tsx의 ja FAQ에 있던 깨진 글자(인코딩 오류)도 함께 수정.
- B-1~B-3(saju-pool/tojung-fortune/compatibility) 모두 완료.
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-29] B-2. tojung-fortune(토정비결) 구현 (Claude Cowork 인수 작업)

- 로컬 LLM이 2026-10-24 B-1(saju-pool) 완료 후 5일간 중단되어, Claude Cowork가 상태 점검 후 직접 인수해 진행.
- saju-pool과 동일한 JDN 기반 일주 계산으로 일간 오행 도출 + (연+월+일)%12 기운지수 조합, 오행별 총운/재물운/애정운/건강운/행운색상/행운물품/주의사항 생성 — 정통 원문이 아닌 간이 버전임을 명시.
- 부수적으로 B-1(saju-pool)에서 서버 컴포넌트(page.tsx)와 클라이언트 컴포넌트가 제목/FAQ/면책조항을 각각 중복 렌더링하던 버그를 발견해 수정(5d7d3a3 커밋).
- 검증: tsc --noEmit 0 에러, next build 정상 통과.


## [2026-10-24] fix: tdee data.ts ja sedentary 번역 수정

- `src/app/[locale]/tool/tdee/data.ts` 179행: ja 섹션의 `sedentary` 필드가 한국어("거의 운동 안 함, 책상 생활")로 남아있어서 일본어("ほとんど運動しない、デスクワーク")로 수정.
- tsc 통과 확인 후 커밋.

## [2026-10-24] BUGFIX_TASKLIST 세분화 재작성 — 전체 기능 구현 목표로 신규 작업지시서 24개 항목 작성

- 사용자 요청: 로컬 LLM의 오토컴팩트/API 오류 방지를 위해 작업 지시를 더 세분화하고, lifehub 전체 미구현 기능까지 포함한 작업지시서로 재작성.
- **A. tdee 활동량 드롭다운 라벨 버그 발견**: `(d as any)[m.key]`에 중괄호가 빠져 코드 문자열이 그대로 노출되는 신규 버그 발견 — 작업지시서 1번 항목으로 등록(아직 수정 전, 로컬 LLM이 처리).
- **B-1~B-3. saju-pool/tojung-fortune/compatibility 설계 완료**: Claude Cowork가 연주/월주/일주/시주 사주 계산 공식(율리우스일 기반 일주, 오호둔/오자둔 규칙)을 직접 설계·검증(1900-01-31=갑자 기준 60갑자 순환 확인). 토정비결/궁합은 결정론적 텍스트풀 방식(간이 버전, 면책 명시)으로 설계.
- **C-1~C-11. 신규 재무 11종 스펙 확정**: 기존 계획 6종(복리/자동차할부/카드할부수수료/보증금월세환산/팁/대출원리금표) + DTI/부가세변환/연비주유비(신규 3종) + 급여실수령액(4대보험 정확 반영) + 은퇴자금시뮬레이터(간이 버전, firelic과 범위 분리) — 사용자 확인 거쳐 전체 포함 확정.
- **D-1~D-5. 신규 dev-it 5종, E-1~E-4. 신규 fun-entertainment 4종 스펙 확정**: 비밀번호생성기/QR코드생성기/해시생성기/Cron생성기/JWT디코더 및 랜덤추첨기/사다리타기/밸런스게임/타로카드.
- 총 24개 작업 단위(도구 1개=작업 1개=`/clear` 사이클)로 분할. 신규 메인 파일 `BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md`(현재 작업만 담은 짧은 버전) + 상세 스펙 전체는 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`에 보존. 기존 2026-10-16 버전 파일들은 과거 기록으로 유지.
- 백업: `_backups/backup_20261024_065215_tasklist-rewrite-2026-10-24/`.


## [2026-10-24] 2차 검증(Cowork) — 로컬 LLM 작업 전수 검증 및 전체 프로젝트 오타/언어 혼입 일괄 수정

- **1. BUGFIX_TASKLIST 2차 검증(독립 QA)**: 로컬 LLM이 완료 표시한 1~4단계 전체를 샘플 검증. 대부분 정확히 수정되어 있음을 확인했으나 2건의 "완료 표시되었지만 실제로는 누락된" 문제를 발견 및 수정:
  - 4-6 (PDF 3종 에러 처리): 원래 6곳 중 2곳만 catch가 추가되어 있었음. 나머지 4곳(pdf-page-numbers의 handleProcess, pdf-merge-split의 handleMerge/handleSplit, pdf-to-image의 handleFile)에 catch 블록 추가.
  - 5-1 (중국어 간체자 혼입): pet-entry-regulation/data.ts es 블록에 남아있던 "Corea permite原则上" 1곳 수정 ("Corea permite, en principio,"로 교정).
- **2. 전체 프로젝트 한자/일본어/중국어 혼입 전수 점검(신규 발견)**: 로케일 블록 구조를 분석하는 스크립트로 ko/en/es 텍스트에 섞여 들어간 한자·가나를 전수 조사하여 아래 5건을 추가로 발견 및 수정:
  - adhd-checklist/data.ts (ko): "감정이起伏가" → "감정이 기복이", "정신障礙입니다" → "정신장애입니다", "성인기에도持續될" → "성인기에도 지속될"
  - study-method/data.ts (ko): "답변하면あなたの 학습" → "답변하면 학습" (불필요한 일본어 단어 제거)
  - supplement-recommender.tsx: descriptionJa의 "抗酸化제로心臓血管" → "抗酸化物質として心臓血管" (한국어 혼입), foodSources의 "닭软骨" → "닭 연골" (중국어 간체자 혼입)
  - word-practice/data.ts (ko): "Korean: 大的"(중국어) → "크다"(한국어), exampleKo "큰公園이" → "큰 공원이"
- **3. 스페인어(es) 악센트/오타 전체 프로젝트 일괄 점검 및 수정**: 로케일 블록 구조 분석 스크립트로 es 블록 전체를 스캔하여 악센트 누락·오타를 약 420여 건, 20여 개 파일에서 일괄 수정 (주요 패턴: información/configuración/posición 등 -ción/-sión 전체, también/aquí/así/según/fácil/rápido 등 상용 부사·형용사, día/línea/único/médico/análisis 등, "fertile"→"fértil", "estadio"→"estancia"(단어 자체 오류) 등 개별 오류 포함). 작업 중 발생한 1건의 실수(construction-cost/data.ts의 `area` 키를 `área`로 잘못 변경)는 즉시 발견하여 되돌림.
- **검증**: `npx tsc --noEmit` 전체 0 에러, `next build` 전체 통과(257개 정적 페이지 생성, 경고 0건) 확인.
- 백업: `_backups/backup_20261024_061035_cowork-2nd-verification-fixes/`


## [2026-10-23] rat-sound data.ts 스페인어 악센트 수정

- `data.ts` es 섹션의 악센트 누락/오타 수정 (ultrasónico, más común, más amplio, más baja, señal, varía, precaución, eliminará, Temporalmente, más sensibles)
- tsc/build 검증 통과

## [2026-10-21] 4-7. text-stats 이모지 글자수 과대 집계 수정

- `TextStatsClient.tsx`에서 `input.length` → `Array.from(input).length`로 변경
- UTF-16 코드유닛 계정이므로 이모지/비-BMP 문자가 과대집계되는 문제 해결
- tsc/build 검증 통과 (text-stats 관련 에러 0건)

## [2026-10-20] 4-4. fasting-timer — localStorage 지속성 구현

- 페이지 새로고침 후에도 금식 상태 복원 (localStorage save/restore)
- 만료된 데이터는 자동으로 무시 (eatingEnd 기준)
- `FastingTimerClient.tsx` 초기화 로직에 restore 추가 + fastState 변경 시 save useEffect

## [2026-10-20] 버그 수정 3-5a. supplement-recommender 결과 다국어화

- `supplement-recommender.tsx` Data 인터페이스 중복 `noneSelected` 필드 삭제 (31행)
- `matchScoreLabel`, `intakeTimingLabel`, `foodSourcesLabel`, `warningsLabel` 인터페이스 → JSX 적용
- `d.noneSelected` dead code 해결: handleRecommend + UI에 안내 문구 노출
- 4개 로케일 전역 `noResultsLabel` 필드 추가 + JSX 하드코딩 리터럴 교체
- tsc/build 검증 통과 (supplement-recommender 관련 에러 0건)

## [2026-10-19] 3-5 항목을 3-5a/3-5b/3-5c로 분리 (bmi/bmr/supplement 각각 별도 체크포인트)

### 배경

- 3-5("bmi/bmr/supplement 결과 다국어화")가 3개 도구를 하나의 항목으로
  묶고 있어서, 세션이 2시간 10분 동안 끊기지 않고 이어지다가 결국
  autocompact thrashing으로 중단됨. 다만 그 사이 PreCompact 체크포인트
  커밋이 5회 정상 작동해 작업 손실은 없었음 — 재발 원인이 파일 재독이
  아니라 "항목 하나가 너무 크게 묶여 있던 것"으로 확인됨.
- 중단 시점 확인: `src/components/supplement-recommender.tsx`에
  `noneSelected` 필드가 24/31행에 중복 선언되어 `TS2300` 에러 발생 중.
  `matchScoreLabel`/`intakeTimingLabel`/`foodSourcesLabel`/`warningsLabel`은
  타입에만 추가되고 JSX(824/839/858행 등)에는 아직 미반영. `d.noneSelected`
  dead code 문제도 아직 미해결.

### 변경 내용

- `BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md`: 3-5를 3-5a(supplement-
  recommender) / 3-5b(bmr-calculator) / 3-5c(bmi) 세 개 항목으로 분리.
  각 항목마다 별도로 커밋 + `/clear`를 거치도록 명시.
- 3-5a "지금 할 일"에 현재 확인된 정확한 상태(중복 필드 위치, 미반영
  리터럴 위치, dead code 위치)를 반영.
- 백업: `_backups/backup_20261019_160007_bugfix-tasklist-split-3-5/`


## 2026-10-19 — 버그 수정 3-4. 2nd-loan 프리셋 타입 에러 해결

- `src/components/second-loan-calculator.tsx`: Data 인터페이스에 Preset, Currency, amountPresets, ratePresets, termPresets, monthlyPaymentFirst, monthlyPaymentLast, currency 필드 추가
- `formatKRW`에 currency 파라미터 추가, 로케일별 통화 기호 표시
- 프리셋 배열을 로컬 하드코딩에서 page.tsx의 d 데이터로 읽도록 변경
- 월 상환액 라벨(monthlyPaymentFirst/Last) 하드코딩 제거, locale별 데이터 사용
- `src/app/[locale]/tool/2nd-loan/page.tsx`: ko/en/ja/es 4개 로케일 모두 amountPresets/ratePresets/termPresets/라벨/통화 필드 완료
- 검증: `npx tsc --noEmit` 2nd-loan 에러 0건, `next build` 통과

## [2026-10-19] SessionStart(clear) 훅 추가 — 수동 /clear 후 작업 방향 자동 재주입

### 배경

- `/clear` 대신 "계속"으로 같은 세션에서 바로 다음 항목으로 넘어가는 바람에
  autocompact thrashing이 다시 재발함(3-5 작업 중, CHANGELOG.md 402줄 전체를
  다시 읽는 등 반복 참고가 원인). "항목 완료 후 /clear" 지시를 텍스트로만
  적어두는 것만으로는 로컬 모델이 매번 지키지 못함을 확인.
- 사용자가 매번 Claude Cowork에게 재개용 프롬프트를 요청해 복사-붙여넣기
  해야 하는 번거로움도 함께 해결하기 위해, 수동 `/clear` 자체를 감지하는
  훅을 추가.

### 변경 내용

- `.claude/hooks/session-start-clear.sh` (신규): `SessionStart` 훅,
  matcher `"clear"`로 등록되어 터미널에서 `/clear`를 실행할 때마다 자동
  실행됨. 실행 시마다:
  - `BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md`의 "🔧 지금 할 일" 섹션부터
    이어서 작업하라고 안내
  - 실제 `git log`/`git status` 결과를 다시 알려줌
  - 항목 완료 시 커밋 → CHANGELOG 기록 → 반드시 `/clear` 재실행 순서를
    재강조하고, "계속" 버튼으로 같은 세션에서 바로 넘어가지 말라고 명시
- `.claude/settings.json`: `SessionStart` 훅 배열에 `matcher: "clear"` 항목
  추가 (기존 `matcher: "compact"` 항목은 그대로 유지).
- 백업: `_backups/backup_20261019_080027_sessionstart-clear-hook/`


## [2026-10-19] BUGFIX_TASKLIST 파일을 "현재 작업" 버전 + 아카이브로 분리

## [2026-10-19] 2nd-loan 프리셋 타입 에러 해결 (BUGFIX 항목 3-4 완료)

### 변경 내용

- `src/app/[locale]/tool/2nd-loan/page.tsx`:
  - `PresetCurrency` 인터페이스 추가
  - 타입 정의에 `amountPresets`, `ratePresets`, `termPresets`, `monthlyPaymentFirst`, `monthlyPaymentLast`, `currency` 필드 추가
  - ko/en/ja/es 4개 로케일 블록에 모두 로케일별 프리셋 값 및 레이블 적용
  - `npx tsc --noEmit` 확인: 2nd-loan 관련 TS2740 에러 0건

Co-Authored-By: Claude Code <noreply@anthropic.com>

All other changes from previous section are preserved.

모든 변경 사항은 한국어로 기록합니다.

## [2026-10-19] BUGFIX_TASKLIST 파일을 "현재 작업" 버전 + 아카이브로 분리

### 배경

- Ollama 레벨 튜닝(OLLAMA_KEEP_ALIVE 2h, OLLAMA_FLASH_ATTENTION true) 적용
  후에도 "Autocompact is thrashing" 경고가 동일하게 재발함(10/19 06:40~08:08
  사이 세 차례 연속 compact). 재검토 결과 해당 Ollama 설정은 응답 생성
  속도에만 관여하고, thrashing은 Claude Code 자체의 컨텍스트 크기 임계값
  판단이라 서로 다른 문제였음(이전에 두 증상을 같은 원인으로 설명한 부분은
  정정이 필요함).
- 실제 원인으로 `BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md`가 550줄(약
  40KB)까지 커져 있었고, 완료된 항목의 전체 코드 스니펫까지 포함된 상태로
  매 작업 단위마다 반복 참고되고 있었던 것으로 파악.
- 작업 중단 시점 확인: `src/app/[locale]/tool/2nd-loan/page.tsx`에 프리셋
  타입 정의(PresetAmount/PresetRate/PresetTerm)는 커밋됐으나(`c36fab2`)
  ko/en/ja/es 데이터 블록에 실제 값이 채워지지 않아 `npx tsc --noEmit` 기준
  TS2740 에러 4건 발생 중 — 에디트 실패로 중단된 상태였음.

### 변경 내용

- `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md` (신규): 기존 550줄 전체
  내용을 원본 그대로 보존.
- `BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md` (축소, 550줄→87줄, 약
  40KB→7.4KB): 진행 상황 요약 표 + 현재 중단된 3-4 항목 상세(타입 에러
  해결 방법 포함) + 다음 항목(3-5) 안내 + 공통 규칙(0/6/7단계)만 유지.
  완료됐거나 아직 먼 항목은 아카이브 파일에서 해당 섹션만 찾아 읽도록 안내.
- 파일명은 기존과 동일하게 유지(AGENTS.md/CHANGELOG.md 등에서 이름으로
  참조되는 부분이 깨지지 않도록 함).
- 백업: `_backups/backup_20261019_061758_bugfix-tasklist-restructure/`


## [2026-10-18] SessionStart(compact) 훅으로 compaction 직후 작업 방향 재주입 추가

### 배경

- PreCompact 체크포인트 커밋 훅을 추가한 이후에도 "Autocompact is thrashing"
  경고가 재발함 (3번 연속 compact 직후 context가 바로 다시 가득 참). 원인은
  compaction 직후 모델이 방향을 잃고 이미 읽은 대용량 클라이언트 파일
  (AgeCalculatorClient.tsx, TdeeCalculatorClient.tsx 등 300줄 안팎)을 매번
  처음부터 재조회하는 패턴으로 추정됨. 같은 "compaction 직후 방향 상실" 패턴이
  이전의 자기소개서 할루시네이션 사건과도 근본 원인을 공유하는 것으로 판단.

### 변경 내용

- `.claude/hooks/session-start-reorient.sh` (신규): `SessionStart` 훅, matcher
  `"compact"` 로 등록되어 자동/수동 compaction 직후마다 실행됨. 실행 시마다:
  - 실제 `git log`/`git status` 결과를 다시 알려줌 (BUGFIX_TASKLIST 상단
    진행 테이블의 ✅/⏳ 표시가 오래되어 있을 수 있으므로 이를 우선 신뢰하도록 지시)
  - 이미 읽은 파일을 불필요하게 재조회하지 말 것을 명시
  - 원래 버그 수정 작업 범위를 벗어난 글쓰기(예: 자기소개서)로 이탈하지 말 것을 명시
  - 항목 완료 시 다음으로 넘어가기 전에 커밋부터 할 것을 명시 (git add -A 금지)
- `.claude/settings.json`: `SessionStart` 훅(matcher: `compact`) 등록 추가
  (기존 `PreCompact` 훅은 그대로 유지)

### 목적 및 한계

- PreCompact 체크포인트 커밋 훅(유실 방지) + 이번 SessionStart 재주입 훅(방향
  재설정)을 조합해 오토모드를 끄지 않고도 재발 빈도를 구조적으로 낮추려는 조치.
- 다만 로컬 35B급 모델이 장시간 무인 작업 중 드리프트/재이탈할 가능성을 100%
  차단하는 것은 아님 (모델 자체의 한계). 재발 시에도 PreCompact 훅 덕분에
  직전 체크포인트까지는 항상 커밋되어 있어 피해를 최소화할 수 있음.


## [2026-10-18] Claude Code PreCompact 훅으로 자동 체크포인트 커밋 추가 (harness 재확인 결과 반영)

### 배경

- `ollama launch claude --model qwen3.6:35b-a3b-coding-96k` 로 실행 중인 로컬 LLM 에이전트는
  오픈코드(opencode)가 아니라 **실제 Claude Code CLI**(터미널 배너 "Claude Code v2.1.302")였음을
  재확인. Ollama의 "ollama launch" 기능이 Claude Code 를 그대로 실행하되 백엔드 모델만
  로컬 Ollama 모델로 연결해주는 방식.
- 따라서 바로 위 항목에서 `opencode.json` 에 추가했던 `compaction.keep.tokens` 설정은
  Claude Code 가 읽는 설정 파일이 아니라서 실제로는 적용되지 않았을 가능성이 높음
  (참고용으로 파일은 남겨두되, 더 이상 유효한 조치로 간주하지 않음).

### 변경 내용

- `.claude/settings.json` (신규): Claude Code 의 `PreCompact` 훅을 등록.
- `.claude/hooks/pre-compact-checkpoint.sh` (신규): context compaction(자동/수동) 직전에
  이미 추적 중인(tracked) 수정/삭제 파일만 `git add -u` 로 스테이징 후 체크포인트 커밋.
  - `git add -A` 사용 안 함 (프로젝트 표준 규칙 준수).
  - 새로 생긴 미추적 파일은 자동으로 포함하지 않음.
  - 실패해도 compaction 을 막지 않도록 항상 exit 0.

### 목적

- 오토모드로 장시간 무인 작업 중 커밋 없이 여러 번 compaction 이 발생해 작업 내용을
  되돌리기 어려워지는 문제(2026-10-18 12시간 무커밋 세션)의 재발 방지.
- 모델이 하는 소프트한 "체크포인트 규칙"(AGENTS.md) 준수에만 의존하지 않고, 커밋 자체는
  훅으로 결정적으로(deterministic) 보장하여 오토모드를 끄지 않고도 안전장치를 확보.


## [2026-10-18] zodiac-finder page.tsx 중복 generateMetadata 제거 및 ZodiacFinderClient 위임

### 변경 내용

- `src/app/[locale]/tool/zodiac-finder/page.tsx`:
  - 104-125 행에 있던 중복 generateMetadata 함수 제거 (14-35 행과 완전히 동일한 함수, 23 행 삭제)
  - 모든 JSX 렌더링을 ZodiacFinderClient 클라이언트 컴포넌트로 위임
  - Card, buttonVariants 등 불필요한 서버 측 import 제거
- `src/app/[locale]/tool/zodiac-finder/ZodiacFinderClient.tsx`:
  - 모든 로직/UI 를 클라이언트 컴포넌트로 분리 (312 행)

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

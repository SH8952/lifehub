# lifehub 프로젝트 기획안 (신규 종합 생활 유틸리티 사이트)

> 작성일: 2026-09-21
> 작성 배경: exifnd.com/flydronemap.com/firelic.com 3개 니치 사이트는 마니아층 한정이라 트래픽 상한이 낮음 →
> 더 큰 트래픽(파이)을 노리기 위해 일반 대중 대상의 종합 유틸리티 모음 사이트를 별도 신규 프로젝트로 추진.
> 관련 배경/논의 전문은 클로드 프로젝트 문서 `claude/exiflens-tool-expansion-strategy-and-freeimgfix-benchmark.md` 참고.
>
> **이 문서는 로컬 코딩 에이전트(아래 "5. 개발 실행 환경" 참고)가 이 프로젝트를 진행할 때 참고하는 기획안입니다.**
> **폴더명 `lifehub`는 임시 작업명입니다 — 실제 도메인/브랜드명이 정해지면 폴더명과 이 문서의 프로젝트명을 함께 변경하세요.**

---

## 1. 프로젝트 개요

- **목적**: 니치 3개 사이트의 트래픽 한계를 보완하기 위한 대중 대상 종합 유틸리티 사이트. 계산기/변환기/정보성 도구를 다수 모아 폭넓은 검색 트래픽을 확보.
- **벤치마크**: freeimgfix.com — **구조(하위 경로 방식, 도구별 페이지 템플릿, 카테고리 구성)만 참고**하고, 콘텐츠(문구/디자인/데이터)는 **100% 원본으로 제작**합니다. 그대로 베끼면 구글의 복제/스팸 콘텐츠 정책에 걸려 애드센스 승인이 오히려 어려워질 수 있습니다.
- **카테고리 구성** (freeimgfix 벤치마크 기준, 전체 그림):
  1. 이미지/미디어
  2. 문서/PDF
  3. 금융/재테크
  4. 생활/건강 ← **1차 진행 카테고리**
  5. Fun/엔터테인먼트
  6. 개발/IT
  7. 유틸리티
- **도구 제작 순서**: 카테고리 내 도구는 정해진 순서가 아니라 **무작위/임의 순서**로 진행 (아래 "6. 생활/건강 도구 백로그"의 티어 구분은 참고용 우선순위이지, 반드시 그 순서를 지킬 필요는 없음. 단, 티어1부터 소진하는 게 효율적).

## 2. 도메인 / 애드센스 전략 (요약)

- 신규 도메인 구매 예정 — **도메인명 미정(TBD)**. 확정되면 이 문서와 폴더명을 함께 갱신.
- 애드센스 심사는 처음부터 모든 카테고리/수백 개 도구를 다 채워서 신청하지 않습니다. **생활/건강 카테고리 안에서 15~30개 정도만 먼저 완성**해서 심사를 신청하고, 승인된 이후에는 재심사 없이 하위 경로로 무제한 확장하는 전략입니다 (exifnd.com에 새 카메라 도구를 하위 경로로 추가하는 것과 동일한 패턴).
- 도메인 개설 후 최소 2~4주 정도 지난 뒤 신청 권장 (너무 이른 신청은 "가치 없는 콘텐츠"로 반려되는 경우가 많았던 ExifLens 사례 참고).
- 정책 페이지(Privacy Policy, Terms of Service, About, Contact)는 심사 신청 전 필수. 기존 3개 프로젝트의 `LegalPage` 공통 컴포넌트 패턴을 그대로 재사용 가능.

## 3. 기술 스택 (기존 3개 프로젝트와 동일 스택 재사용 권장)

- **프레임워크**: Next.js (App Router)
- **다국어**: next-intl — **글로벌 타겟 (다국어 지원)**. 한국어 기본 언어로 시작하고, 주요 언어(en, ja, es 등)를 추가 예정.
- **배포**: Vercel
- **URL 구조**: `사이트도메인/도구명` 또는 `사이트도메인/tools/도구명` 형태의 **하위 경로(subpath)**. 서브도메인 아님. freeimgfix의 `/sub/도구명.html` 패턴과 동일한 개념.
- **분석/광고/동의 배너**: GA4 + Google Consent Mode v2. 구현 방식은 기존 저장소의 아래 파일들을 그대로 참고/복사해서 이식 가능:
  - `src/lib/consent.ts` (exiflens, flydronemap, firelic 공통)
  - `src/components/consent-banner.tsx` (exiflens, flydronemap) 또는 `ConsentBanner.tsx` (firelic)
  - `[locale]/layout.tsx`의 `gtag('consent','default',{...})` 삽입 패턴

## 4. 코딩/작업 컨벤션 (기존 3개 프로젝트 표준 — 이 프로젝트도 동일하게 준수)

- **`git add -A` 절대 금지.** 변경된 파일을 명시적으로 나열해서 `git add`. (과거 이 실수로 실제 데이터 유실 사고가 있었음)
- 작업 시작 전 항상 백업: `_backups/backup_YYYYMMDD_HHMMSS_설명/` 폴더에 변경 대상 파일만 백업.
- 작업 완료 후 `CHANGELOG.md`에 한국어로 이력 기록.
- 1회성 배포는 `.command` 스크립트로 제공 (더블클릭 1회 실행 → 자동 커밋(add -u만) → 자동 push → 완료 메시지 → 3초 후 터미널 자동 종료 + 스크립트 자기 삭제). 반복 사용 스크립트(예: 콘텐츠 발행 스크립트)는 자기 삭제하지 않음.
- **도구 페이지 공통 템플릿** (freeimgfix 벤치마킹, 원본 콘텐츠로 작성):
  1. 도구 제목 + 한 줄 설명
  2. 계산기/도구 UI (입력 → 결과)
  3. "왜 이 도구가 필요한가" 설명 200~400자 (SEO 콘텐츠, 원본 작성 필수)
  4. 자주 쓰는 값 프리셋 버튼(해당되는 도구에 한해 — 예: 아파트 평수 프리셋처럼)
  5. FAQ 2~3개
  6. "참고용입니다" 등 면책 문구
  7. (해당 시) "브라우저에서 100% 처리, 서버 전송 없음" 신뢰 카피

## 5. 개발 실행 환경 (로컬 LLM)

- **실행 주체**: 로컬 LLM 코딩 에이전트 — Ollama + **opencode(터미널 CLI)** 조합. (2026-09-21 정정: 최초에는 Cline/VS Code로 검토했으나, 실제로는 터미널에서 opencode로 진행하는 것으로 확정.)
- **사용 모델**: `qwen3.6:35b-a3b-coding` (Ollama, 코딩 전용 로컬 모델)
- **개발자 지침 전달 방식**: 이 폴더 루트의 **`AGENTS.md`** 파일에 exiflens 작업 때와 동일한 개발 표준(백업, git add -A 금지, 커밋 단위, 도구 페이지 템플릿, 콘텐츠 원칙)을 정리해뒀습니다. `AGENTS.md`는 opencode가 프로젝트 루트에서 자동으로 인식하는 표준 규칙 파일이라, opencode를 이 폴더에서 실행하면 별도 설정 없이 자동으로 로드됩니다. (참고: 이전에 Cline용으로 만들었던 `.clinerules` 파일은 더 이상 쓰지 않아 `.clinerules.unused_switched_to_opencode`로 이름만 바꿔 남겨뒀습니다 — 삭제는 직접 하셔야 합니다.)
- **역할 분담 원칙(확정, 2026-09-21)**: 이 프로젝트가 로컬 LLM + Claude Cowork 협업의 첫 시도입니다. 전반적인 도구 제작은 로컬 LLM이 전담하고, Claude Cowork는 로컬 LLM이 한계를 느끼거나 중대한 문제가 발생했을 때만 투입됩니다. 구체적인 에스컬레이션 기준과 기록 양식은 `AGENTS.md`에 정리했고, 실제 에스컬레이션 발생 시 `HANDOFF_TO_CLAUDE.md`에 기록을 남기도록 되어 있습니다(기존 프로젝트들의 `*-handoff.md` 문서 관행과 동일한 패턴).
- **역할 분담**:
  - **로컬 LLM (Qwen3.6 35B-A3B-Coding)**: 이 문서의 백로그에 있는 개별 도구 페이지를 반복적으로 제작(계산기 로직, UI, 콘텐츠 텍스트, i18n 문자열). 정형화된 반복 작업 중심.
  - **Claude Cowork**: 복잡한 버그 수정, 아키텍처/구조 결정, 애드센스·SEO 전략, 배포 트러블슈팅, 프로젝트 전체 설계 등 난이도 높은 작업. 로컬 LLM이 막히면 이쪽으로 에스컬레이션.
- 로컬 LLM이 참고할 수 있도록, 이 폴더(`lifehub/`)를 Cline에서 여는 워크스페이스 루트로 사용하고, 옆의 `exiflens/`, `flydronemap/`, `firelic/` 폴더를 코드 패턴 참고용으로 열람 가능한 상태로 둘 것을 권장.

## 6. 생활/건강 카테고리 도구 백로그

freeimgfix.com의 생활/건강 카테고리 화면을 참고해 정리한 목록입니다. **문구/UI/데이터는 그대로 베끼지 말고 원본으로 재작성**하세요. 목록은 스크린샷 기준이라 실제 freeimgfix에는 더 많은 도구가 있을 수 있습니다 — 이 목록은 시작점일 뿐, 없어도 되고 추가해도 됩니다.

### 티어 1 — 외부 데이터/API 불필요, 즉시 구현 가능 (우선 진행 권장)

| 도구 | 비고 |
|---|---|
| 만 나이 계산기 | 생년월일 → 만 나이/띠 |
| BMI(비만도) 계산기 | 키/몸무게 입력 |
| 기초대사량(BMR) 계산기 | 성별/나이/키/몸무게 |
| 활동 대사량(TDEE) 계산기 | BMR + 활동지수 |
| 배란일 계산기 | 생리주기 기반 |
| 단식 타이머 (16:8 간헐적 단식) | 타이머 UI |
| 용적률/건폐율 계산기 | 대지면적/건축면적 입력 |
| 건축 공사비 계산기 | 평당 공사비 × 면적 |
| 점심 메뉴 룰렛 | 랜덤 추천 UI |
| 야식 메뉴 룰렛 | 랜덤 추천 UI |
| ADHD 자가검사 | 체크리스트 + 점수 산정 (의학적 진단 아님을 명확히 고지) |
| 당뇨 자가진단 체크리스트 | 증상 체크리스트 (의학적 진단 아님을 명확히 고지) |
| 학습 방법 진단 | 퀴즈형, 정적 로직 |
| ABC 주스 레시피 | 고정 콘텐츠 페이지 |
| 모기 퇴치 소리 | Web Audio API로 주파수 생성 |
| 쥐 퇴치 소리 | Web Audio API로 주파수 생성 |

### 티어 2 — 정적 데이터셋 필요 (직접 조사한 원본 데이터로 구현, API 불필요)

| 도구 | 비고 |
|---|---|
| 반려동물 입국 규정 | 국가별 검역 규정 — 직접 조사한 원본 데이터 필요 (freeimgfix 데이터 복사 금지) |
| 전세계 비자 비교 | 한국 여권 기준 무비자 국가 데이터 |
| 단어 연습장 | 플래시카드용 단어 데이터셋 |
| 도시별 한달살기 비용 | 도시별 생활비 데이터 |

### 티어 3 — 실시간 외부 API 필요 (API 키/비용 검토 후 후순위 진행)

| 도구 | 비고 |
|---|---|
| 우리 동네 미세먼지 | 대기질 API 필요 |
| 전국 실시간 자외선 지수 | 기상청 API 필요 |
| 전세계 실시간 태풍 정보 | 기상 API 필요 |
| 전국 캠핑장 날씨 | 기상 API 필요 |
| 실시간 체감 온도 | 기상 API 필요 |
| 최저가 주유소 찾기 | 오피넷 등 유가 API 필요 |
| 영양제 추천 서비스 | 추천 로직 + 데이터 설계 필요, API 불필요할 수도 있음(재검토) |

## 7. 진행 원칙 요약

1. 티어 1부터 무작위 순서로 소진 (API 키 준비 전까지 티어 3은 보류).
2. 도구 1개 = 1커밋 단위로 진행, 완료마다 `CHANGELOG.md` 기록.
3. `git add -A` 금지, 작업 전 백업 필수 — 기존 3개 프로젝트와 동일 규칙.
4. 콘텐츠는 100% 원본 작성 (freeimgfix는 구조만 참고).
5. 막히는 문제(복잡한 버그, 설계 판단)는 로컬 LLM이 계속 붙잡지 말고 Claude Cowork로 에스컬레이션.

## 8. 현재 구현된 도구 현황 (2026-09-26 기준)

### 카테고리별 도구 매핑 현황

| 카테고리 | 매핑된 도구 수 | 누락된 도구 | 비고 |
|---|---|---|---|
| `life-health` | 22개 | — | 완료 |
| `finance` | 2개 | — | 완료 |
| `fun-entertainment` | 6개 | — | 완료 |
| `image-media` | 0개 | **신규 도구 필요** | 미구현 |
| `document-pdf` | 0개 | **신규 도구 필요** | 미구현 |
| `dev-it` | 0개 | **신규 도구 필요** | 미구현 |
| `utility` | 0개 | **신규 도구 필요** | 미구현 |

### 구현 완료 도구 목록 (총 30개)

#### life-health (22개)
| # | 도구 ID | 한국어 | 영어 | 일본어 | 스페인어 |
|---|---------|--------|------|--------|----------|
| 1 | `age-calculator` | 만 나이 계산기 | Age Calculator | 満年齢計算機 | Calculadora de Edad |
| 2 | `bmi` | BMI(비만도) 계산기 | BMI Calculator | BMI（肥満度）計算機 | Calculadora de IMC |
| 3 | `bmr-calculator` | 기초대사량(BMR) 계산기 | BMR Calculator | 基礎代謝量（BMR）計算機 | Calculadora de TMB |
| 4 | `tdee` | 활동 대사량(TDEE) 계산기 | TDEE Calculator | 活動代謝量（TDEE）計算機 | Calculadora de TDEE |
| 5 | `ovulation` | 배란일 계산기 | Ovulation Calculator | 排卵日計算機 | Calculadora de Ovulacion |
| 6 | `fasting-timer` | 간헐적 단식 타이머 (16:8) | Intermittent Fasting Timer | 間欠的断食タイマー | Temporizador de ayuno |
| 7 | `adhd-checklist` | ADHD 자가검사 | ADHD Self-Check | ADHDセルフチェック | Autoevaluacion de ADHD |
| 8 | `diabetes-check` | 당뇨 자가진단 체크리스트 | Diabetes Self-Check | 糖尿病セルフチェック | Autoevaluacion de Diabetes |
| 9 | `construction-cost` | 건축 공사비 계산기 | Construction Cost Estimator | 建築工事費計算機 | Estimador de Costos |
| 10 | `far-calculator` | 용적률/건폐율 계산기 | FAR / Lot Coverage Calc. | 容積率/建蔽率計算機 | Calculadora de FAR |
| 11 | `lunch-roulette` | 점심 메뉴 룰렛 | Lunch Menu Roulette | ランチメニュールーレット | Ruleta de Menú |
| 12 | `nightmeal-roulette` | 야식 메뉴 룰렛 | Late Night Food Roulette | 夜食メニュールーレット | Ruleta de Comida |
| 13 | `study-method` | 학습 방법 진단 | Study Method Assessment | 学習方法診断 | Evaluación del Método |
| 14 | `abc-juice` | ABC 주스 레시피 | ABC Juice Recipes | ABCジュースレシピ | Recetas de Zumo ABC |
| 15 | `mosquito-sound` | 모기 퇴치 소리 | Mosquito Repellent Sound | 蚊除け音 | Sonido Repelente |
| 16 | `rat-sound` | 쥐 퇴치 소리 | Rat Repellent Sound | 鼠退治の音 | Sonido Repelente |
| 17 | `pet-entry-regulation` | 반려동물 입국 규정 | Pet Entry Regulations | ペット輸入規制 | Regulaciones de Entrada |
| 18 | `visa-comparison` | 전세계 비자 비교 | Worldwide Visa Comparison | 世界のビザ比較 | Comparación de Visas |
| 19 | `supplement-recommender` | 영양제 추천 서비스 | Supplement Recommender | サプリメント推奨 | Recomendador de Suplementos |
| 20 | `city-living-cost` | 도시별 한달살기 비용 비교 | Monthly Cost by City | 都市別生活コスト比較 | Comparación por Ciudad |
| 21 | `word-practice` | 단어 연습장 | Vocabulary Practice | 単語練習帳 | Practica de Vocabulario |
| 22 | `monthly-cost` | 도시별 한달살기 비용 | Monthly Cost by City | 都市別ホームステイコスト | Costo Mensual por Ciudad |

#### finance (2개)
| # | 도구 ID | 한국어 | 영어 | 일본어 | 스페인어 |
|---|---------|--------|------|--------|----------|
| 1 | `fixed-deposit-interest` | 만기 예금 이자 계산기 | Fixed Deposit Interest Calc. | 満期預金利息計算機 | Calculadora de Intereses |
| 2 | `2nd-loan` | 대출 상환액 계산기 | Loan Repayment Calculator | ローン返済計算機 | Calculadora de Prestamo |

#### fun-entertainment (6개)
| # | 도구 ID | 한국어 | 영어 | 일본어 | 스페인어 |
|---|---------|--------|------|--------|----------|
| 1 | `saju-pool` | 정통 사주풀이 | Traditional Saju | 正統サジュー | Saju Tradicional |
| 2 | `daily-fortune` | 오늘의 운세 | Daily Horoscope | 今日の運勢 | Horóscopo Diario |
| 3 | `tojung-fortune` | 토정비결 신년운세 | Tojung Fortune | 토정비결 신년운세 | Predicción Tojung |
| 4 | `zodiac-finder` | 별자리 찾기 | Zodiac Sign Finder | 星座探し | Buscador Zodiacal |
| 5 | `compatibility` | 궁합 풀이 | Compatibility Reading | 궁합 풀이 | Lectura de Compatibilidad |
| 6 | `fortune-cookie` | 포춘 쿠키 오늘 운세 | Fortune Cookie Daily | フォークッキー 今日の運勢 | Galleta de la Fortuna |

### 구현 미완료 카테고리 (4개) — 신규 도구 기획 필요

| 카테고리 | 필요 도구 수 | 우선순위 | 비고 |
|---|---|---|---|
| `image-media` | 3~5개 | **높음** | 애드센스 심사에 가장 영향력 있는 카테고리 |
| `document-pdf` | 3~5개 | **높음** | 애드센스 심사에 가장 영향력 있는 카테고리 |
| `dev-it` | 3~5개 | 중간 | 검색 트래픽 안정적 |
| `utility` | 3~5개 | 중간 | 검색 트래픽 안정적 |

> **애드센스 심사 전략**: 생활/건강 카테고리만 15~30개 도구로 먼저 심사 신청 → 승인 후 다른 카테고리 확장

---

## 9. 구현 예정 도구 기획 (신규)

### image-media 카테고리 — 신규 도구 기획

> **참고 사이트**: iloveimg.com (벤치마크)
> **제약사항**: 외부 API 불필요, 브라우저 처리, 다국어(ko/en/ja/es)

| # | 도구명 | 설명 | 구현 방식 | 우선순위 |
|---|--------|------|----------|---------|
| 1 | **이미지 압축기** | JPG/PNG/WebP 이미지 압축 (브라우저 Canvas API) | FileReader + Canvas + toBlob | 높음 |
| 2 | **이미지 리사이징** | 이미지 크기 조절 (너비×높이 입력) | Canvas API | 높음 |
| 3 | **이미지 회전/فلتر** | 이미지 회전, 플립, 밝기/대비 조정 | Canvas API | 높음 |
| 4 | **이미지 포맷 변환** | JPG ↔ PNG ↔ WebP ↔ GIF 변환 | Canvas + toDataURL | 중간 |
| 5 | **이미지 합성** | 2개 이미지 겹치기, 워터마크 | Canvas API | 낮음 |

**핵심 기술**: FileReader API로 로컬 파일 읽기 → Canvas API로 처리 → Blob으로 다운로드. 서버 전송 0바이트.

### document-pdf 카테고리 — 신규 도구 기획

> **참고 사이트**: ilovepdf.com (벤치마크)
> **제약사항**: 외부 API 불필요, 브라우저 처리, 다국어(ko/en/ja/es)

| # | 도구명 | 설명 | 구현 방식 | 우선순위 |
|---|--------|------|----------|---------|
| 1 | **텍스트 → PDF** | 텍스트 입력 → PDF 다운로드 | jsPDF 라이브러리 | 높음 |
| 2 | **HTML → PDF** | HTML/마크다운 → PDF 변환 | html2pdf.js / jsPDF | 높음 |
| 3 | **PDF 페이지 번호 매기기** | PDF에 페이지 번호 추가 | pdf-lib 라이브러리 | 중간 |
| 4 | **PDF 분할/병합** | PDF 분할 또는 여러 PDF 합치기 | pdf-lib 라이브러리 | 낮음 |
| 5 | **PDF → 이미지** | PDF 페이지를 이미지로 추출 | pdf.js + Canvas | 낮음 |

**핵심 기술**: jsPDF (텍스트→PDF), pdf-lib (PDF 조작), html2pdf.js (HTML→PDF). 모두 브라우저에서 동작.

### dev-it 카테고리 — 신규 도구 기획

> **참고 사이트**: browserling.com, jsonformatter.org (벤치마크)
> **제약사항**: 외부 API 불필요, 브라우저 처리, 다국어(ko/en/ja/es)

| # | 도구명 | 설명 | 구현 방식 | 우선순위 |
|---|--------|------|----------|---------|
| 1 | **JSON 포맷터/검증기** | JSON pretty print + validation | JSON.parse/stringify | 높음 |
| 2 | **HTML/CSS/JS 압축기** | 코드 압축 (minify) | 정규식 기반 minify | 높음 |
| 3 | **Base64 인코더/디코더** | 텍스트 ↔ Base64 변환 | btoa/atob | 높음 |
| 4 | **UUID 생성기** | UUID v4 생성 | crypto.randomUUID | 중간 |
| 5 | **URL 인코더/디코더** | URL 인코딩/디코딩 | encodeURI/decodeURI | 중간 |
| 6 | **RGB ↔ HEX 변환기** | 색상 코드 변환 | 색상 변환 로직 | 낮음 |

**핵심 기술**: 모두 브라우저 내장 API로 구현 가능 (JSON.parse, btoa/atob, encodeURI, crypto.randomUUID). 외부 라이브러리 불필요.

### utility 카테고리 — 신규 도구 기획

> **참고 사이트**: browserling.com (벤치마크)
> **제약사항**: 외부 API 불필요, 브라우저 처리, 다국어(ko/en/ja/es)

| # | 도구명 | 설명 | 구현 방식 | 우선순위 |
|---|--------|------|----------|---------|
| 1 | **텍스트 통계** | 글자/단어/줄 수, 빈도 분석 | 문자열 처리 | 높음 |
| 2 | **단어 빈도 분석기** | 텍스트 내 단어 출현 빈도 | 문자열 분할 + Map | 높음 |
| 3 | **대소문자 변환기** | 대문자/소문자/제목/반전 | 문자열 메서드 | 높음 |
| 4 | **텍스트 비교기** | 두 텍스트 차이 비교 (diff) | 정규식 기반 diff | 중간 |
| 5 | **유니코드 문자 정보** | 문자 → 유니코드 코드포인트 | charCodeAt | 낮음 |
| 6 | **단위 변환기** | 길이/무게/온도/속도 변환 | 변환 공식 | 낮음 |

**핵심 기술**: 모두 브라우저 내장 API로 구현 가능. 외부 라이브러리 불필요.

---

## 10. 아직 결정되지 않은 사항 (다음 논의 필요)

- [x] 프로젝트/도메인 최종 이름 (현재 `lifehub`는 임시 작업명 → 추후 결정)
- [x] next-intl 다국어 범위 — **글로벌 타겟 (다국어 지원)**
- [x] 랜딩페이지 디자인 최종 확정 (2026-09-21, Claude Cowork 작업 — `src/app/[locale]/page.tsx`, 카테고리 7개, 상세는 `AGENTS.md` 상단 참고)
- [ ] 애드센스 신청을 위한 최소 도구 개수 기준
- [ ] 로컬 LLM 모델 태그(`qwen3.6:35b-a3b-coding`) 실제 설치 여부 재확인
- [ ] 정책 페이지(Privacy/Terms/About/Contact) 문구 준비 시점

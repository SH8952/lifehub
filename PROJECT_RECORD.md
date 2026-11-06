# LifeHub 프로젝트 기록 (로드맵 · 진행 과정 · 남은 작업)
> 통합 생성일: 2026-10-31. 이전에 흩어져 있던 아래 13개 파일을 하나로 합쳤습니다(원본은 삭제됨):
> PROJECT_PLAN.md, CHANGELOG.md, EXPANSION_TASKLIST_2026-10-29.md, BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-16.md, BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md, AGENTS.md, HANDOFF_TO_CLAUDE.md, gemini-code-1790279104701.md, _archive/CHANGELOG_ARCHIVE_2026-09.md, _archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md, _archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md, _archive/agents_cowork_verification.md, _archive/agents_landingpage_design.md

## 목차

1. [현재 상태 요약 (구현 / 미구현)](#1-현재-상태-요약-구현--미구현)
2. [남은 작업 (2026-10-31 기준, 실제 확인됨)](#2-남은-작업-2026-10-31-기준-실제-확인됨)
3. [로드맵 (최초 기획안, 2026-09-21 작성)](#3-로드맵-최초-기획안-2026-09-21-작성)
4. [날짜별 진행 과정 — 상세 (CHANGELOG 전체)](#4-날짜별-진행-과정--상세-changelog-전체)
5. [작업지시서 아카이브 — 로컬 LLM 작업분 (전부 완료됨)](#5-작업지시서-아카이브--로컬-llm-작업분-전부-완료됨)
6. [에이전트 운영 지침 (AGENTS.md)](#6-에이전트-운영-지침-agentsmd)
7. [에스컬레이션 로그 (HANDOFF_TO_CLAUDE.md)](#7-에스컬레이션-로그-handoff_to_claudemd)
8. [도구 아이디어 백로그 (미구현 후보)](#8-도구-아이디어-백로그-미구현-후보)
9. [소규모 과거 기록 2건](#9-소규모-과거-기록-2건)

---

## 1. 현재 상태 요약 (구현 / 미구현)

### 구현 완료

- 225개 도구 페이지 × 4개 언어(ko/en/ja/es), 전부 Vercel(`https://lifehub-weld.vercel.app`)에 배포·운영 중
- 7개 카테고리(생활·건강 / 재무 / 엔터테인먼트·운세 / 이미지·미디어 / 문서·PDF / 개발·IT / 유틸리티), 카테고리당 30개씩 균형 확장 완료
- 애드센스 재신청 대비 SEO/구성 작업 7종 전부 완료: robots.txt, ESLint v9 마이그레이션, 색상 토큰 통일, JSON-LD 구조화 데이터, HTTP 보안 헤더, IndexNow 연동(Bing/Naver/Yandex), 메타 설명 중복·누락 점검(0건)
- 구글 서치콘솔 / 네이버 서치어드바이저 등록, sitemap.xml·rss.xml 구축
- 순수 도메인 접속 시 기본 언어(한국어) 고정 (브라우저 언어 자동감지 끔)
- 시그니처 컬러(차콜+앰버) 확정, 홈페이지 레이아웃/디자인 리터치

### 의도적 미구현 (정책상 보류)

- **life-health 티어3 도구 6종**: 외부 API가 필요해 "외부 유료/네트워크 API 금지" 정책에 따라 처음부터 보류됨. 재검토 시 정책 변경 필요.
- **alltools365.com 도메인 구매**: 2026-09-29 합의대로 트래픽/노출 데이터 확인 전까지 보류 중 (여전히 미구매, 현재 `lifehub-weld.vercel.app` 서브도메인으로 운영).

### 아직 안 된 것 (실제 확인됨, 2026-10-31 기준)

아래 항목은 섹션 2에 상세.

---

## 2. 남은 작업 (2026-10-31 기준, 실제 확인됨)

이 섹션은 과거 CHANGELOG에 "별도 확인 필요"로만 적혀 있던 항목들을 2026-10-31에 실제로 다시 열어서 확인한 결과입니다. (타이틀 중복 "| LifeHub | LifeHub" 버그는 과거 기록에 있었으나 실제 운영 사이트에서 재확인한 결과 이미 해결되어 있어 목록에서 제외했습니다.)

1. **Next.js 보안 취약점 (critical, 현재도 유효)** — `package.json`은 이미 `next@16.3.7`로 올라가 있지만, 2026-10-31 기준 `npm audit`에서 `next 16.0.0 - 16.4.0` 범위 전체가 critical로 재분류되어 16.3.7도 여전히 해당 범위에 포함됨. 추가 업그레이드가 필요하나 225개 도구 전체 회귀 테스트가 필요해 보류.
2. **dompurify <=3.4.16 critical** — `npm audit` 기준 critical. `eslint-plugin-react` 경유 개발 의존성이라 운영 영향은 낮을 가능성이 높지만 확인 필요.
3. **GA4 + Google Consent Mode v2 미이식** — 코드 전체(`src/`)에 `gtag`/`googletagmanager` 스크립트가 전혀 없음을 재확인. 아직 손대지 않은 상태.
4. **도메인(alltools365.com) 구매 여부 결정** — 위 "의도적 미구현" 참고.


---

## 3. 로드맵 (최초 기획안, 2026-09-21 작성)

> 아래는 `PROJECT_PLAN.md` 원문입니다. 작성 시점 기준 기획이며, 이후 실제 진행 상황은 섹션 1·2·4를 참고하세요.

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

---

## 4. 날짜별 진행 과정 — 상세 (CHANGELOG 전체)

> 아래는 `CHANGELOG.md`(최신순) 전체 + `_archive/CHANGELOG_ARCHIVE_2026-09.md`(2026-09-24~09-29, 더 오래된 기록)를 이어붙인 것입니다.

# Changelog

모든 변경 사항은 한국어로 기록합니다.

## 2026-11-06 (8) — adpass.app 99점 유지 + 전체 순차 도구 확충 6차 배치(8개 도구)

- 사용자 지시("전체 순차 도구 확충을 계속 진행해줘")에 따라 adpass.app 점수와 무관하게 전체 225개 도구에 대한
  순차 콘텐츠 확충을 계속 진행. `data.ts` 파일 크기 기준으로 다음으로 짧은 8개 도구를 선정:
  css-unit-converter, keyboard-shortcuts-reference, name-initials-generator, weekday-finder,
  image-color-picker, color-of-the-day, roman-numeral-converter, movie-recommendation-roulette
- 각 도구의 howSteps 1개, FAQ 3개를 ko/en/ja/es 4개 로케일 모두에 추가
  (예: css-unit-converter - rem/px 접근성 차이, pt 단위의 인쇄 vs 웹 차이;
       keyboard-shortcuts-reference - 단축키 커스터마이징 불가 안내, 키보드 배열별 차이;
       name-initials-generator - 멀티 워드 이름 처리, 팀/회사 아바타 활용;
       weekday-finder - 날짜 범위 제한, 타임존 영향, 실사용 예시;
       image-color-picker - 지원 이미지 포맷, 추출 기록 보관 방식, 대용량 이미지 처리;
       color-of-the-day - 색상 풀 규모, 동일 날짜 결과 일관성, 타임존에 따른 "오늘" 기준;
       roman-numeral-converter - 3999 상한 이유, 현대 사용 사례, 시계 문자판의 IIII 표기;
       movie-recommendation-roulette - 총 조합 수, 선택 피로 해소, 드라마에도 활용 가능)
- 파일 크기: 5,265~5,415 bytes → 8,245~9,483 bytes로 증가
- 로컬 서버(포트 3040)에서 8개 도구 × 4개 로케일(32개 페이지) 전부 HTTP 200 확인,
  신규 추가 콘텐츠 렌더링 여부 로케일별 스팟체크 완료
- `_backups/content-expansion-batch6_20261106_135538/`에 원본 백업
- 1~5차 배치(금융 계산기 6종, Contact·About, 8개 도구×2회) 포함 전체 225개 도구 중
  현재까지 22개 도구 + 2개 페이지(Contact/About) 콘텐츠 확충 완료. 나머지 도구는
  동일한 방식으로 계속 순차 진행 예정 (adpass.app 점수와 무관하게 전체 순차 진행 지속)

## 2026-11-06 (7) — adpass.app 99점 확인 + 전체 순차 도구 확충 5차 배치(8개 도구)

- 사용자 확인: 4차 배치(Contact/About) 푸시 + Vercel 배포 후 adpass.app 재검사 결과 99점 유지, 평균 본문 1,584자 → **1,646자**로 상승(`/en/contact` 426→767자, `/en/about` 923→1,319자). 경고 1건(권장 2,000자 미달)은 남아있으나, 남은 격차를 메우려면 홈페이지(탐색용 페이지)까지 억지로 늘려야 해 효율이 떨어지는 구간이라는 점을 안내.
- 사용자가 "adpass.app 점수와 무관하게 전체 순차 도구 확충을 계속 진행해달라"고 확인 — 기존에 승인된 "전체 순차 진행" 계획에 따라 점수 목표와 별개로 225개 도구 전체 콘텐츠 확충을 이어감.
- 현재 `data.ts` 용량 기준 가장 짧은 도구 8개를 5차 배치로 선정, howSteps(3→4개)·faq(2→5개)를 ko/en/ja/es 4개 로케일 모두 실질적인 내용으로 확장(기존 subtitle/disclaimer/입력 라벨은 변경하지 않음).
  - **markdown-preview**: CommonMark 확장 문법 지원 범위, HTML 내보내기 불가, 수식·각주 미지원, 긴 글 처리 성능.
  - **truth-game-questions**: 답변 거부 자유, 연령대별 난이도 선택 가이드, 답변 미저장 안내, 질문 주제 구성.
  - **book-recommendation-roulette**: 서점·도서관 추천과 조합하는 법, 총 조합 수(15가지), 직접 장르 선택 불가 이유, 독서 슬럼프 활용법.
  - **travel-destination-roulette**: 예산·계절과 조합하는 법, 총 테마 수(15가지), 예산·계절 미반영 안내, 여행지 결정 장애 시 활용법.
  - **color-name-converter**: 근사치 매칭 안내, RGB/HSL 미지원, 색상 이름 활용 사례, 알파(투명도) 미지원.
  - **world-time-converter**: 주요 시간대 대표 도시 구성, 다지역 회의 시간 조율 활용법, 과거/미래 날짜 지원, IANA 타임존 데이터 정확도.
  - **base-converter**: 입력값 변경 시 실시간 자동 갱신, 안전한 정수 범위(2^53) 한계, 프로그래밍 활용 사례, 16진수 대소문자 무관.
  - **lucky-number-generator**: 재생성 자유, 메시지 결정 방식(통계적 근거 없음 명시), 1~45 vs 1~99 범위 차이, 6개 숫자 중복 없음.
- 편집 전 `_backups/content-expansion-batch5_<timestamp>/`에 8개 파일 원본 백업.
- 로컬 검증: `npm run dev`(포트 3040) 기동 후 8개 도구 `/en/tool/<slug>` 전부 HTTP 200 확인, 4개 로케일에서 새로 추가한 문구가 실제 렌더링되는지 각각 grep으로 spot-check 완료, 검증 후 서버 정상 종료.
- 누계: 3차(금융 6종) + 4차(Contact/About) + 5차(8개 도구) = 콘텐츠 확충 완료 도구/페이지 16개(파일럿 3개, 2차 배치 8개, Lorem Ipsum 1개 포함 시 총 28개). 225개 도구 중 나머지는 다음 배치에서 계속 진행 예정.

## 2026-11-06 (6) — adpass.app 99점 확인 + Contact·About 페이지 4차 콘텐츠 확충

- 사용자 확인: 3차 배치(금융 계산기 6종) 푸시 + Vercel 배포 후 adpass.app 재검사 결과 97 → **99점**, 콘텐츠 품질 90 → 95로 상승. 금융 계산기 6종 모두 1,635~2,414자로 올라와 샘플 평균이 1,584자까지 상승(여전히 권장 2,000자 미만이라 경고 1건 남음).
- 남은 경고를 분석한 결과, 이번 13개 샘플 중 `/en/contact`(426자), `/ko`·`/en` 홈(616·1,374자), `/en/about`(923자)가 평균을 끌어내리는 것을 확인. 사용자에게 선택지를 제시해 **홈페이지는 그대로 두고(탐색용 페이지라 본문을 억지로 늘리면 UX가 나빠질 위험) Contact·About 페이지만 확충**하는 방향으로 진행 승인받음.
- `src/app/[locale]/contact/page.tsx`: ko/en/ja/es 4개 로케일 모두에 섹션 2개 추가(기존 3개 → 5개).
  - "문의 시 포함하면 좋은 정보": 오류 제보 시 도구명/URL·입력값·결과를 함께 적어주면 원인 파악이 빨라진다는 안내.
  - "보내주신 내용은 어떻게 쓰이나요": 문의 내용이 답변·서비스 개선 목적으로만 쓰이고 제3자 제공되지 않는다는 안내(개인정보처리방침 페이지 연결).
- `src/app/[locale]/about/page.tsx`: ko/en/ja/es 4개 로케일 모두에 섹션 2개 추가(기존 5개 → 7개), "운영자 안내" 섹션과 "문의하기" 섹션 사이에 배치.
  - "광고와 무료 운영 안내": 전적으로 무료 제공, 광고로 운영비 충당, 광고 최소화 노력, 입력 데이터는 광고 목적 미수집이라는 정책 리스크 영역과도 연결되는 투명성 안내.
  - "앞으로의 계획": 새 도구 지속 추가, 기존 도구 정확도·사용성 개선, 사용자 제안이 우선순위에 반영된다는 안내.
- 편집 전 `_backups/content-expansion-batch4_<timestamp>/`에 두 파일 원본 백업.
- 로컬 검증: `npm run dev`(포트 3040) 기동 후 contact/about 8개 페이지(4개 로케일 × 2페이지) 전부 HTTP 200 확인, 4개 로케일에서 새로 추가한 섹션 문구가 실제 렌더링되는지 각각 grep으로 spot-check 완료, 검증 후 서버 정상 종료.

## 2026-11-06 (5) — adpass.app 콘텐츠 품질 경고 대응: 금융 계산기 6종 3차 콘텐츠 확충

- 사용자 확인: 환경변수(`NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`) 등록 + 재배포 완료, adpass.app 재검사 결과 **97점** 유지, "애드센스 코드가 head에 있어요"·"ads.txt가 있어요" 모두 통과로 전환 확인. 콘텐츠 품질(90점)의 "글 평균 본문 1,151자" 경고 1건만 남음.
- adpass.app이 샘플링한 13개 페이지 중 금융 계산기 6종(dividend-yield-calculator, lease-insurance-calculator, realty-commission-calculator, gift-tax-estimator, stock-profit-calculator, severance-pay-calculator)이 모두 862~997자로 짧아 평균을 끌어내리고 있음을 확인 — 해당 6개 도구를 3차 배치로 우선 확충.
- 각 도구 `data.ts`의 `howSteps`(3→4개)와 `faq`(2→5개)를 ko/en/ja/es 4개 로케일 모두에 실질적인 내용으로 확장. 기존 `subtitle`(메타 설명)·`disclaimer`·입력 라벨은 변경하지 않음.
  - **dividend-yield-calculator**: 분기·반기 배당 환산 방법, 배당수익률 vs 배당성향 차이, 배당 지급 주기, 적정 배당수익률 범위.
  - **lease-insurance-calculator**: 가입 가능 기한, 보험료 부담 주체(세입자/임대인), 임대인 미반환 시 이행청구 절차, HUG/HF/SGI 기관별 차이.
  - **realty-commission-calculator**: 결과가 "상한"임을 재안내, 중개수수료 외 추가 비용, 비주거용 부동산 적용 여부, 거래 금액 구간별 요율 차등 구조.
  - **gift-tax-estimator**: 신고 기한(3개월) 안내, 증여세 vs 상속세 차이, 기한 내 자진신고 세액공제, 무신고 시 가산세.
  - **stock-profit-calculator**: 분할 매수 시 평균 매수단가 입력법, 증권거래세 vs 양도소득세 차이, 소수점 처리 방식, 손실 매도 시 과세 여부.
  - **severance-pay-calculator**: 결과가 세전 금액임을 안내, 퇴직금 vs 퇴직연금(DB/DC) 차이, 퇴직소득세 계산 방식, 이직 시 재직기간 합산 여부.
- 편집 전 `_backups/content-expansion-batch3_<timestamp>/`에 6개 파일 원본 백업.
- 로컬 검증: `npm run dev`(포트 3040) 기동 후 6개 도구 `/en/tool/<slug>` 전부 HTTP 200 확인, 4개 로케일(ko/en/ja/es)에서 새로 추가한 FAQ 문구가 실제 렌더링되는지 각각 grep으로 spot-check 완료, 검증 후 서버 정상 종료.

## 2026-11-06 (4) — adpass.app 97점 확인 + 기술·색인 "참고" 항목 대응(ads.txt, AdSense 헤드 스크립트)

- adpass.app 재검사 결과 93 → **97점**, 오류 0건(지난 Lorem Ipsum 제목 변경 반영 확인), 콘텐츠 품질 75 → 90으로 상승. 남은 경고 1건(본문 평균 1,151자)은 이번 13개 샘플에 아직 2차 배치 도구가 포함되지 않아 그대로.
- 사용자가 "기술·색인 영역 참고 항목도 모두 처리해달라"고 요청 — 4개 참고 항목 중 조치 가능한 것과 불가능한 것을 구분해 진행.
  - **ads.txt 없음 → 조치 완료**: ExifLens/FlyDroneMap/firelic과 동일한 애드센스 계정(`google.com, pub-0042120343274941, DIRECT, f08c47fec0942fa0`)으로 `public/ads.txt` 신규 생성. 순수 정적 파일이라 별도 인프라 설정 없이 바로 반영됨.
  - **애드센스 코드가 head에 없음 → 코드는 준비, 활성화는 보류**: `src/app/[locale]/layout.tsx`에 ExifLens와 동일한 패턴(`NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` 환경변수가 있을 때만 `<head>`에 adsbygoogle.js 스크립트를 조건부로 로드)을 이식. 로컬 검증 결과 환경변수가 없는 상태에서는 스크립트가 전혀 렌더링되지 않아(정상) 기존 동작에 영향 없음을 확인. **다만 Vercel 프로젝트에 실제 환경변수(`NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=pub-0042120343274941`, Production)를 추가하는 작업은 Claude의 Vercel MCP 호출이 "공유 리소스 변경" 승인 거부로 차단되어 미완료** — 사용자가 Vercel 대시보드에서 직접 등록 필요(안내 예정).
  - **서치콘솔 색인 페이지 수 — 직접 확인 → 조치 불가(사용자 액션 필요)**: 구글 서치콘솔은 Claude가 접근할 수 있는 영역이 아니므로, 사용자가 직접 확인해야 하는 항목으로 남겨둠.
  - **도메인 등록 2,474일째 → 조치 대상 아님**: lifehub가 쓰는 `lifehub-weld.vercel.app`은 자체 도메인이 아닌 Vercel 서브도메인이라, 이 "등록일"은 vercel.app 자체의 등록일을 가리키는 정보성 항목 — alltools365.com 등 자체 도메인을 구매하지 않는 한 변경 불가.
- 편집 전 `_backups/adsense-infra-setup_<timestamp>/`에 layout.tsx 원본 백업.
- 검증: `device_bash` 단일 호출 내 `npm run dev` 로컬 실행 → 홈페이지 4개 언어 200, `/ads.txt` 200(내용 정상), 도구 페이지 1개 200, 환경변수 미설정 상태에서 `adsbygoogle` 스크립트가 렌더링되지 않음(0건, 정상 동작) 확인, 에러 로그 없음 확인 후 서버 종료.

## 2026-11-06 (3) — Lorem Ipsum Generator 영어/스페인어 제목 변경 (adpass.app 오류 완전 제거 시도)

- adpass.app 재검사 결과 점수가 여전히 93(콘텐츠 품질 75, 오류 1건·경고 1건)으로 동일 — 지난 작업(문구 완화 + 콘텐츠 2차 배치 8개)이 이번 13개 샘플 페이지에는 포함되지 않아 반영되지 않은 것으로 추정(샘플에 잡힌 도구가 severance-pay/dividend-yield/lease-insurance-calculator 등 이번에 손대지 않은 도구들이었음).
- 사용자가 "제목 변경건도 오류 제거를 위해 조치해달라"고 명시적으로 승인 — 지난번 안내한 SEO 트레이드오프(실제 "lorem ipsum generator" 검색 유입 키워드 상실 가능성)를 인지한 상태에서 진행 결정.
- 조치 범위: 리터럴 영문 "Lorem Ipsum"이 남아있던 두 곳만 수정(한국어 "로렘 입숨", 일본어 "ロレムイプサム"는 음역이라 원래부터 해당 없음).
  - `src/app/[locale]/tool/lorem-ipsum-generator/data.ts`: en `title` "Lorem Ipsum Generator" → "Placeholder Text Generator", es `title` "Generador de Lorem Ipsum" → "Generador de Texto de Relleno" (각각 `<title>`/H1/메타 태그에 그대로 반영됨).
  - `src/lib/tools-data.ts`(사이트 전역 도구 레지스트리, 홈페이지 카테고리 미리보기·검색 등에 사용): `nameEn`/`nameEs` 동일하게 변경해 사이트 내 다른 위치(홈페이지 미리보기 등)에서의 표기 불일치 방지.
- Client.tsx의 실제 생성 로직(`"Lorem ipsum dolor sit amet, " + ...`)은 그대로 유지 — 이 문자열은 "생성하기" 클릭 후에만 클라이언트에서 동적으로 만들어지는 결과물이라 정적 크롤링 시점에는 노출되지 않으며, 도구의 핵심 기능이라 변경 대상에서 제외.
- 편집 전 `_backups/lorem-ipsum-title-change_<timestamp>/`에 원본 2개 파일 백업.
- 검증: `device_bash` 단일 호출 내 `npm run dev` 로컬 실행 → 홈페이지 4개 언어 200 확인, lorem-ipsum-generator 4개 언어 200 확인, en/es 페이지에서 "Lorem Ipsum" 리터럴 매칭 0건 확인(`grep -io`), 홈페이지에 새 이름("Placeholder Text Generator")이 정상 반영되고 레지스트리 불일치 없음 확인, 에러 로그 없음 확인 후 서버 종료.
- 참고: adpass.app은 한 번에 13개 페이지만 샘플링하므로, 이번 변경 역시 다음 재검사 때 해당 페이지가 샘플에 포함되지 않으면 반영이 안 보일 수 있음 — 사용자에게 안내 예정.

## 2026-11-06 (2) — adpass.app 100점 목표 대응: Lorem Ipsum 문구 완화 + 콘텐츠 확충 2차 배치(8개 도구)

- 사용자가 firelic/flydronemap/exiflens 3개 자매 사이트의 adpass.app 100점 화면을 공유하며 "구조를 참고해서 무조건 100점이 되도록 조사해서 수정해달라" 요청.
- 조사 결과, 세 사이트가 100점인 이유는 특별한 기술적 구조가 아니라 가이드/블로그형 콘텐츠 자체가 페이지당 수천~2만 자로 원래 길기 때문이며, lifehub(도구형 사이트)에 그대로 이식할 "구조"는 없다고 판단 — 사용자에게 설명 후 두 가지 방향으로 진행 승인받음.
- **오류(자리표시자 텍스트) 대응**:
  - 사용되지 않는 "Coming soon"/공사중 dead-code fallback 제거: `src/app/[locale]/page.tsx`의 `previewNames.length > 0 ? ... : t("comingSoon")` 삼항 연산자를 `previewNames.join(" · ")` 단순 렌더링으로 정리하고, 4개 언어 메시지 파일(`src/i18n/messages/*.json`)에서 미사용 `comingSoon` 키 제거.
  - Lorem Ipsum Generator(`lorem-ipsum-generator`) 도구의 "Lorem ipsum" 문구 노출 최소화: `startWithLabel`(4개 언어, 버튼 힌트)과 en/es FAQ 질문·답변에서 리터럴 "Lorem ipsum"/"Lorem Ipsum" 표현을 "전통적인 시작 구절"/"traditional opening phrase" 등으로 순화. 단, 페이지 `<title>`/H1/메타 태그에 쓰이는 `title` 필드는 그대로 유지 — 이 용어로 실제 검색 유입이 있는 핵심 키워드이므로 임의로 변경하지 않음. 로컬 검증 결과 `title`·메타 태그발 "Lorem Ipsum" 노출(영문 페이지 기준 8건)은 구조적으로 남아있어, adpass.app 오류 플래그가 완전히 0이 되지 않을 가능성이 있음을 사용자에게 안내 예정.
- **경고(본문 분량 부족) 대응 — 2차 배치**: 지난 1차 파일럿(3개 도구)에 이어, 짧은 콘텐츠 순으로 정렬한 215개 잔여 도구 중 8개를 2차 배치로 확충 — `daily-affirmation-generator`, `daily-quote-generator`, `last-digit-fortune`, `chinese-zodiac-fortune`, `birthday-personality`, `emoji-finder`, `would-you-rather`, `couple-name-compatibility`. 모두 howSteps/faq `.map()` 동적 렌더링 템플릿 확인 후 진행. 각 도구 4개 언어의 howSteps(3→4개), faq(2→5개)를 도구 성격에 맞는 실질적 설명(계산 원리, 재현성, 데이터 비저장 안내, 함께 즐기는 팁 등)으로 확충. subtitle/UI 라벨/컴포넌트 코드는 변경하지 않음.
- 편집 전 `_backups/lorem-ipsum-wording-softening_<timestamp>/`, `_backups/content-expansion-batch2_<timestamp>/`에 각각 원본 백업.
- 검증: `device_bash` 단일 호출 내 `npm run dev` 로컬 실행 → 홈페이지 4개 언어 + lorem-ipsum-generator 4개 언어 + 신규 확충 도구 8개 × 4개 언어(총 32개 페이지) 전부 HTTP 200, 에러 로그 없음 확인 후 서버 종료.
- 잔여 약 207개 도구는 동일 패턴으로 다음 배치부터 순차 진행 예정.

## 2026-11-06 — adpass.app AdSense 준비도 점수 93→100 대응 (콘텐츠 분량 확충 파일럿)

- 사용자가 adpass.app(서드파티 AdSense 승인 준비도 측정 도구) 점수 스크린샷 공유 — lifehub 93점(다른 자매 프로젝트 flydronemap.com·firelic.com은 100점), 오류 1건(미완성·자리표시자 텍스트) + 경고 1건(평균 본문 분량 1,034자, 권장 1,500~2,000자 이상) 확인 요청. "두 가지 문제를 해결해달라"는 요청에 따라 진행.
- 오류 1건(자리표시자 텍스트) 진단: 코드 전체 grep 결과 "Lorem ipsum" 매칭은 모두 정상적인 Lorem Ipsum Generator 도구(`lorem-ipsum-generator`)의 콘텐츠였고, "Coming soon" 문구는 홈페이지에서 카테고리에 도구가 0개일 때만 표시되는 미사용 fallback 코드(현재 7개 카테고리 모두 30개 이상 도구 보유로 절대 트리거되지 않음)로 확인. 실제 결함이 아닌 adpass.app 체커의 키워드 매칭 오탐으로 판단해 코드 수정 없이 종료.
- 경고 1건(본문 분량 부족) 대응: 219개 도구 × 4개 언어 전체를 한 번에 수정하기 전에, 구조적으로 안전하고 카테고리가 다른 도구 3개를 선정해 파일럿 진행 — `savings-maturity-calculator`(금융), `dice-roller`(엔터테인먼트), `code-diff-checker`(개발·IT). 세 도구 모두 `howSteps`/`faq` 배열을 컴포넌트에서 `.map()`으로 동적 렌더링하므로 `data.ts` 내용만 수정하면 되고 Client.tsx/page.tsx 코드 변경이 불필요함을 사전 확인.
- 편집 전 `_backups/content-expansion-pilot_20261106_110822/`에 3개 파일 원본 백업.
- 3개 도구 각각 ko/en/ja/es 4개 언어의 `howSteps`(3→4개 항목)와 `faq`(2→5개 항목)를 실질적으로 유용한 설명으로 확충(예: 세금우대/비과세 가입 대상, 중도해지 시 불이익, git diff와의 차이, 공백·들여쓰기 감지 여부 등). SEO 메타 description으로 재사용되는 `subtitle` 필드와 UI 라벨은 변경하지 않음.
- 검증: `device_bash` 단일 호출 내에서 `npm run dev` 로컬 실행(포트 3040) → 3개 도구 페이지를 ko/en/ja/es 4개 언어로 curl 요청 — 전부 HTTP 200, 신규 추가 문구 정상 출력 확인, 개발 서버 로그에 타입/빌드 에러 없음 확인 후 서버 종료.
- 사용자에게 파일럿 결과 공유 후, 반응 확인되면 나머지 약 216개 도구에 동일한 패턴으로 순차 확대 적용 예정.

## 2026-11-04 — favicon.ico 추가 (네이버 서치어드바이저 "접근 불가한 페이지" 대응)

- 사용자가 네이버 서치어드바이저(Search Advisor) 사이트 진단 화면을 공유 — lifehub(`lifehub-weld.vercel.app`)에서 "수집제한" 2건(리다이렉션된 페이지 `/`, 접근 불가한 페이지 `/favicon.ico` 400) 및 "보안 인증서 확인중" 상태를 확인 요청.
- 점검 결과:
  - 보안 인증서 "확인중": 실제 HTTPS·사이트맵은 모두 정상(해당 화면에서도 녹색 표시) — 네이버 측 자체 확인 절차가 끝나지 않은 것뿐, 조치 불필요.
  - 리다이렉션된 페이지(`/`): 10-31 작업에서 의도적으로 만든 "순수 도메인 접속 시 `/ko`로 고정" 동작을 네이버 크롤러가 정상적으로 수집한 기록 — 의도된 동작, 조치 불필요.
  - 접근 불가한 페이지(`/favicon.ico`, 기록된 400): 저장소에 `favicon.ico`가 없고 `src/app/icon.svg`만 있던 것이 원인. 실제 접속 테스트로는 404로 확인(기록된 400은 11-02 방문자 카운터 배포 시점의 일시적 현상으로 추정) — 레거시 `/favicon.ico` 경로를 직접 찾는 크롤러·구버전 클라이언트를 위해 파일 추가가 필요하다고 판단, 사용자 확인 후 진행.
- `src/app/icon.svg`(파란 사각형 + 흰색 "L")를 16~256px 6개 크기를 담은 멀티 레졸루션 `public/favicon.ico`(약 10KB)로 변환해 추가. 코드/라우팅 변경 없음, 새 정적 파일 1개만 추가.
- 검증: 로컬(`localhost:3040`) 실기동 — `/favicon.ico` → 200 OK, `image/x-icon`, 10041바이트로 정상 서빙 확인. `/` → `/ko` 307 리다이렉트(기존 동작) 영향 없음 확인, `/icon.svg` 200 정상 유지 확인.

## 2026-11-02 — start-dev.command 로컬 실행 파일 Finder 아이콘 변경

- 사용자 요청: 저장소 루트의 `start-dev.command`(로컬 개발 서버 실행용 영구 스크립트)가 주변의 비슷한 파일들과 구분이 안 돼 헷갈림 — Finder 아이콘을 lifehub 파비콘으로 변경 요청.
- `src/app/icon.svg`(파란 사각형 + 흰색 "L", 64×64)를 1024×1024 PNG로 변환해 저장소 루트에 임시 파일(`_temp-app-icon.png`)로 전달.
- Claude의 화면 제어(컴퓨터 사용) 자동화로 시도했으나 Finder 정보 가져오기 창이 보조 모니터에서 열리는 등 왕복이 길어져, 사용자 요청으로 자동화를 중단하고 수동 절차(정보 가져오기 → 아이콘 복사/붙여넣기)를 안내 — 사용자가 직접 완료함.
- 완료 후 임시 이미지 파일(`_temp-app-icon.png`)은 사용자가 직접 삭제함 (git 미추적 파일이라 저장소 이력에는 흔적 없음).

## 2026-11-02 — 방문자/봇 카운터 푸터 배지 추가 (ExifLens/FlyDroneMap/firelic 패턴 이식)

- 사용자 요청: lifehub 하단에도 다른 3개 사이트와 동일한 방문자 카운터(+ 개발자 전용 봇 카운트) 기능 추가.
- 조사 결과 lifehub에는 해당 기능이 전혀 없었음(코드도, Redis/KV·DEV_EXCLUDE_TOKEN 환경변수도 없음) — 단순 복사가 아니라 저장소 연동부터 새로 하는 작업으로 확인, 진행 전 사용자에게 선택지 확인(기존 공유 Redis 저장소 연결 / ExifLens 로컬 저장소 접근 허용 / 기존 DEV_EXCLUDE_TOKEN 재사용 — 전부 승인받고 진행).
- ExifLens 저장소(`src/lib/visitor-counter.ts`, `src/lib/rate-limit.ts`, `src/app/api/visitor-count/route.ts`, `src/components/visitor-counter.tsx`, `src/proxy.ts`)를 실제로 읽어 그대로 이식(`PROJECT` 상수만 `"lifehub"`로 변경). Redis는 ExifLens/FlyDroneMap/firelic이 공유하는 기존 Upstash 저장소를 `lifehub:` 접두어로 함께 쓰도록 설계(새 저장소 생성 없음).
- **신규 파일**: `src/lib/visitor-counter.ts`(방문자/봇 카운트 daily+total, KST 기준, TTL 2일), `src/lib/rate-limit.ts`(IP당 분당 60회 메모리 기반 제한, Redis 비사용), `src/app/api/visitor-count/route.ts`(User-Agent 정규식으로 봇 판별, 봇 수치는 `dev_exclude` 쿠키가 있을 때만 응답에 포함), `src/components/visitor-counter.tsx`(마운트 시 API 호출, "Today N · Total M" 배지).
- **`src/middleware.ts` 수정**: `?dev=<DEV_EXCLUDE_TOKEN>` 접속 시 1년 쿠키를 심는 로직 추가. 이 과정에서 기존 matcher(`/(api|trpc)(.*)`  포함)가 next-intl 미들웨어를 API 라우트에도 적용시켜 `/api/visitor-count`를 `/ko/api/visitor-count`로 307 리다이렉트시키는 버그를 발견(lifehub에 API 라우트가 생긴 게 이번이 처음이라 지금까지 드러나지 않았던 문제) — ExifLens와 동일하게 matcher에서 `api|trpc`를 제외하도록 수정해 해결. 순수 도메인 접속 시 `/ko`로 고정되는 기존 동작(2026-10-31 수정분)은 영향 없음을 재확인.
- **`src/app/[locale]/layout.tsx` 수정**: 기존 푸터(별도 컴포넌트 없이 레이아웃에 인라인)에 `<VisitorCounter />`를 네비게이션과 저작권 문구 사이에 추가.
- 작업 전 백업: `_backups/visitor-bot-counter_20261102_120009/`.
- 검증: `npx tsc --noEmit` 0 에러, `npx eslint` 0 에러, `npx next build` 성공(`/api/visitor-count` 정상 생성). 로컬(3040) 실기동 확인 — `/` → `/ko` 307 리다이렉트 정상 유지, `/api/visitor-count` 200 OK(로컬이라 집계 없이 `{"daily":0,"total":0}` 읽기 전용, 정상), Googlebot UA로도 동일하게 로컬 분기가 먼저 적용되어 0 응답(Redis 증가 자체가 로컬에서는 발생하지 않음 — ExifLens와 동일한 구조적 한계).
- **Vercel 대시보드 작업 완료 (사용자 직접 진행)**:
  1. lifehub Vercel 프로젝트 → Storage 탭에서 기존 Redis 저장소(ExifLens/FlyDroneMap/firelic이 쓰는 것과 동일한 스토어)를 Connect — `KV_URL`/`KV_REST_API_URL`/`KV_REST_API_TOKEN`/`KV_REST_API_READ_ONLY_TOKEN`/`REDIS_URL` 자동 등록 완료.
  2. `DEV_EXCLUDE_TOKEN`: 애초 계획은 기존 3개 사이트와 동일한 값을 재사용하는 것이었으나, 그 값이 Vercel에 **"Sensitive" 타입**으로 저장되어 있어(저장 후에는 소유자도 대시보드/API로 다시 조회 불가 — Vercel 설계상 특성) 기존 값을 꺼내올 방법이 없었음. lifehub 전용 새 토큰을 발급해 Production/Preview 각각에 등록하는 것으로 변경(다른 3개 사이트는 변경 없음 — lifehub만 별도 `?dev=` 북마크를 쓰게 됨). 로컬 `.env.local`에도 동일 값 반영 완료(사용자가 직접 입력, Claude는 토큰 값을 직접 다루지 않음).
- **운영 반영 확인 완료 (2026-11-02)**: 두 단계 등록 후 커밋 `1b97ea1`이 새로 배포되어 Production에 Ready 반영됨(`lifehub-weld.vercel.app`에 alias). 실제 운영 도메인에서 `/api/visitor-count` 호출 결과 `{"daily":2,"total":2}`로 실제 Redis 증가 확인, 푸터에도 "Today 1 · Total 1"로 정상 렌더링 확인(그사이 Claude의 확인 접속 2회가 실 방문자로 집계됨 — 개발자 제외 쿠키는 본인 토큰으로 접속해야 적용되므로 정상적인 집계임). 봇 카운트 줄(`?dev=` 쿠키 필요) 자체는 Claude가 사용자의 최종 토큰 값을 모르므로 직접 확인하지 못했고, 사용자가 본인 북마크로 직접 확인 필요.

## 2026-10-31 — 작업폴더 정리 (불필요 파일 삭제)

- 사용자 요청으로 작업폴더 전체를 조사해 불필요한 파일을 정리.
- **git 미추적, 즉시 삭제(안전)**: `.next/`(빌드 캐시, 354MB), `automation/__pycache__/`, `next-env.d.ts`, `tsconfig.tsbuildinfo` — 전부 자동 재생성되는 캐시/생성 파일.
- **고아 폴더 삭제**: `_to_delete/`(이전에 이미 "삭제 대상"으로 분류돼 있던 폴더, 내부 메시지 json·고아 컴포넌트 전부 현재 코드에서 참조 안 됨 확인 후 삭제), `Marketing/`, `Affiliate/`(완전히 빈 폴더 — 과거 공백 포함 경로를 따옴표 없이 쓴 스크립트의 부산물로 추정).
- **_backups/ 전체 삭제**(12MB, 9/21~9/28 날짜 스냅샷 29개): git으로 버전관리가 이미 자리잡은 이후의 내용이라 사실상 git 히스토리와 중복 — 사용자 확인 후 삭제.
- **git 추적 파일 중 미사용 코드 제거** (`git rm`): `scripts/dev.sh`(현재 `package.json`의 dev는 `scripts/dev-open.mjs`를 사용, 루트의 `start-dev.command`가 실제 실행 스크립트라 미사용 확인), `_data/word-practice.ts`, `_research/tier3-api-research.md`(코드 전체에서 import/참조 없는 고아 파일 확인).
- **삭제하지 않고 유지**: `_archive/`(CHANGELOG.md가 참조하는 정식 히스토리 아카이브), `gemini-code-1790279104701.md`(이름은 지저분하지만 git에 커밋된 실제 콘텐츠 파일), `node_modules/`(1.1GB — 삭제 시 다음 빌드 전 재설치 필요해 사용자가 유지 선택).
- 작업폴더 전체 용량 1.5GB → 1.1GB(node_modules 제외하면 약 100MB대).
- 검증: `npx tsc --noEmit` 0 에러, `npx next build` 성공 — 삭제한 파일 어느 것도 빌드에 영향 없음 확인.

## 2026-10-31 — 순수 도메인 접속 시 기본 언어 고정 (한국어)

- 증상: `https://lifehub-weld.vercel.app` 순수 도메인으로 접속했을 때, 접속자 브라우저의 Accept-Language 헤더에 따라 스페인어 등 다른 언어로 리다이렉트되는 경우가 있었음.
- 원인: `src/i18n/routing.ts`에서 `defaultLocale: "ko"`는 이미 설정돼 있었지만, next-intl 미들웨어의 브라우저 언어 자동 감지(`localeDetection`, 기본값 true)가 켜져 있어 접속자 언어를 우선 반영하고 있었음.
- 수정: `routing.ts`에 `localeDetection: false` 추가. URL 구조(`localePrefix: "always"`, 즉 `/ko`, `/en`, `/es`, `/ja` 접두사 체계)는 전혀 변경하지 않음 — 순수 도메인(`/`) 접속 시 브라우저 언어와 무관하게 항상 `/ko`로 리다이렉트되도록만 수정.
- 검토 결과 URL 구조를 접두사 없는 방식(`as-needed`)으로 바꾸는 더 큰 변경도 가능했지만, hreflang/사이트맵/RSS/IndexNow 자동화/언어 선택 링크 등 다수 파일을 함께 수정해야 하고 이미 등록된 `/ko/...` URL이 전부 바뀌는 위험이 있어, 사용자 확인 후 URL 구조는 그대로 유지하는 안전한 방식으로 진행.
- 검증: `npx tsc --noEmit` 0 에러, `npx eslint` 0 에러/0 경고, `npx next build` 성공, 실기동 후 Accept-Language 헤더 없음/es/en/ja 4가지 경우 모두 `/` → `/ko` 307 리다이렉트로 일치 확인, `/en` 등 다른 언어 경로는 기존과 동일하게 정상 응답(200) 확인.

## 2026-10-31 — 수익화 준비 11단계: 메타 설명(description) 중복·누락 점검

- `npx next build` + `next start` 실기동으로 225개 도구 × 4개 로케일(en/es/ja/ko), 총 900개 페이지의 실제 `<meta name="description">` 태그를 전수 수집·검증(소스 코드 파싱이 아닌 실제 렌더링된 HTML 기준 — 도구별로 `page.tsx` 내부 정의/별도 `data.ts`/`pageMeta` 등 구조가 섞여 있어 가장 정확한 방법).
- **중복**: 0건 (900개 전부 서로 다른 고유한 설명).
- **누락**: 0건 (빈 값이나 태그 자체가 없는 경우 없음).
- 부가로 길이를 확인해 1건(es/image-dpi-info, 165자)이 구글 권장 상한(약 160자)을 초과해 발견 → `src/app/[locale]/tool/image-dpi-info/data.ts`의 `es.subtitle`에서 "estimado" 한 단어를 제거해 156자로 축약(의미 변화 없음). 30자 미만으로 짧은 61건은 대부분 일본어(한자/가나 특성상 글자 수 기준 비교가 부정확)라 사용자 확인 후 그대로 유지.
- 검증: `npx tsc --noEmit` 0 에러, `npx next build` 954페이지 생성 성공, 수정된 es/image-dpi-info 페이지를 실기동해 메타 설명이 156자로 정확히 반영됨을 확인.

## 2026-10-31 — 수익화 준비 10단계: IndexNow 연동 (Bing·Naver·Yandex 등)

- 변경된 페이지를 IndexNow 참여 검색엔진(Bing·Naver·Yandex 등)에 즉시 알려 색인 반영 속도를 높이는 자동화 구축. Google은 IndexNow 미참여 — 기존 sitemap.xml/rss.xml/GSC 등록은 그대로 유지되며 이 작업과 무관.
- 사이트 소유 확인용 키 파일 `public/33672b3e79efbf0b913b4f72b578f3f3.txt` 신설 (`https://lifehub-weld.vercel.app/33672b3e79efbf0b913b4f72b578f3f3.txt`로 공개 제공, Next.js `public/` 디렉터리가 LifeHub 저장소에 없어 이번에 신설).
- `automation/indexnow-submit.py`: 표준 라이브러리만 사용(외부 의존성 0)하는 제출 스크립트. 주소를 전송 전 실제로 200으로 열리는지 확인(기본 최대 20분 대기), `--dry-run`/`--no-wait`/`--detach` 옵션 지원, 어떤 오류가 나도 항상 종료 코드 0 — 이 스크립트가 실패해도 `git push` 자체의 성공/실패에는 영향을 주지 않음.
- `automation/indexnow-push-hook.py`: `git diff`로 커밋 범위의 변경 파일을 분석해 자동으로 제출 대상 URL을 생성. LifeHub 구조에 맞춘 매핑 규칙 — 도구 페이지(`src/app/[locale]/tool/{slug}/...`) 변경 시 4개 로케일(en/es/ja/ko) 전부, 홈페이지(`src/app/[locale]/page.tsx`) 변경 시 4개 로케일 홈을 대상으로 추가. 동적 라우트·설정 파일·API 라우트 등 도구/홈 패턴에 해당하지 않는 파일은 제외(예: `next.config.ts`만 바뀐 보안 헤더 커밋은 0개 주소로 정확히 제외됨을 검증). ExifLens/FlyDroneMap 등 자매 프로젝트에 있는 `--slugs`(블로그/가이드 글 전용) 모드는 LifeHub에 블로그·가이드 콘텐츠가 없어 이번 구현에서 제외.
- 24시간 중복 방지: 같은 URL을 반복 전송하지 않도록 `~/Library/Logs/lifehub-indexnow-sent.json`에 전송 기록을 남기고, 최근 24시간 내 전송된 주소는 자동 제외(`--force`로 무시 가능). 모든 실행 로그는 `~/Library/Logs/lifehub-indexnow.log`에 누적.
- `automation/push-and-notify.sh`: `git push` 성공 시에만, push 전 remote 커밋 기준으로 변경 범위를 계산해 `indexnow-push-hook.py`를 백그라운드(`--detach`)로 호출하는 래퍼. 이후 모든 수익화 준비 작업의 푸시는 이 래퍼(`bash automation/push-and-notify.sh origin main`)를 통해 진행.
- 자매 프로젝트의 실제 스크립트 소스 접근은 폴더 권한 문제로 불가능했으나, 프로젝트 문서(`claude/indexnow-rollout-2026-10-07.md`, `claude/indexnow-push-hook-2026-10-30.md`)에 기록된 상세 스펙(파일 구성·동작·옵션·안전장치·로그 경로)을 바탕으로 LifeHub 구조(블로그 없는 평면적 도구 페이지 구조)에 맞춰 재구현.
- 검증: `python3 -m py_compile`로 두 스크립트 문법 오류 0건, `bash -n`으로 셸 스크립트 문법 오류 0건 확인. 실제 LifeHub 저장소의 과거 커밋 4건(보안 헤더 전용 커밋 → 0개 주소, 색상 토큰 전체 적용 커밋 → 840개=210×4, JSON-LD 커밋 → 208개=52×4, RSS 신기능 커밋 → 0개 주소)을 `--map-only`로 역검증해 매핑 로직이 모두 기대값과 일치함을 확인. `--dry-run --no-wait`로 실제 전송 없이 전체 파이프라인(주소 매핑 → 전송 시뮬레이션) 흐름도 정상 동작 확인.

## 2026-10-31 — 수익화 준비 9단계: HTTP 보안 헤더 적용

- ExifLens에 적용했던 보안 헤더 패턴을 조사 후 LifeHub에 동일하게 적용.
- LifeHub는 API 라우트가 전혀 없는 100% 클라이언트 사이드 사이트(모든 도구가 "브라우저에서 100% 처리, 서버로 전송되는 데이터 없음")라, ExifLens 패턴의 레이트리밋(요청 횟수 제한) 부분은 보호할 서버 엔드포인트가 없어 해당 없음 — 보안 헤더만 적용.
- `next.config.ts`에 전 경로(`/:path*`) 공통 헤더 3종 추가: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`.
- ExifLens와 동일하게 CSP(Content-Security-Policy)·Permissions-Policy는 제외 — 향후 애드센스·GA4 스크립트 연동 시 충돌 위험 방지.
- 검증: `npx tsc --noEmit` 0 에러, `npx next build` 954페이지 생성 성공, `next start` 실기동으로 도구 페이지·sitemap.xml·rss.xml 전부에서 3개 헤더 응답 확인.

## 2026-10-31 — 수익화 준비 8단계: JSON-LD 구조화 데이터 점검/보강 (WebApplication + FAQPage)

- 225개 도구 전체의 JSON-LD 적용 현황을 전수 조사: WebApplication/Offer 스키마는 221개 도구에 이미 적용돼 있었으나, 화면에 FAQ 섹션(자주 묻는 질문)을 노출하면서도 FAQPage 구조화 데이터가 없는 도구가 48개, 반대로 FAQPage만 있고 WebApplication이 없는 도구가 4개 발견됨.
- **48개 도구(FAQPage 추가)**: 이미 화면에 렌더링 중인 `d.faq` 배열(질문/답변)을 그대로 재사용해 WebApplication 스크립트 옆에 FAQPage(mainEntity: Question/Answer) 구조화 데이터를 추가. 25개는 `page.tsx`에서, 23개는 `*Client.tsx`에서 FAQ를 렌더링하고 있어 각 파일에 맞춰 추가(타로카드, 사다리타기, 밸런스게임, 랜덤 뽑기 제외).
- **4개 도구(WebApplication 추가)**: 타로카드·사다리타기·밸런스게임·랜덤 뽑기는 FAQPage만 있고 WebApplication이 빠져 있어 `applicationCategory: "EntertainmentApplication"`으로 WebApplication 스키마를 추가.
- 새로 표시되는 콘텐츠·레이아웃 변경은 없음(순수 구조화 데이터 추가).
- 검증: `npx tsc --noEmit` 0 에러, `npx eslint .` 0 에러/0 경고, `npx next build` 954개 페이지 생성 성공, 변경된 52개 도구 전체를 로컬에서 실기동해 각 페이지의 JSON-LD 2개 블록(WebApplication + FAQPage)이 유효한 JSON이고 올바른 `@type`을 갖는지 스크립트로 전수 검증(52/52 통과).

## 2026-10-31 — 수익화 준비 7단계: 225개 도구 페이지 언어 선택 버튼 색상 토큰 통일

- 시그니처 컬러(차콜+앰버, D안) 확정 이후 보류됐던 "225개 도구 페이지 언어 선택 버튼 하드코딩 색상 통일" 작업을 진행.
- 전수 조사 결과 225개 중 218개 파일이 언어 선택 버튼에 하드코딩 색상 사용 중(`bg-indigo-600` 174개가 대다수, 나머지는 blue/amber/orange/violet/slate/rose/pink/emerald/teal/sky/red/green 등 13종) — 시그니처 컬러 변경 이전 잔재.
- **1차 파일럿(8개 도구)**: 색상 다양성을 대표하는 8개 도구를 선정해 `bg-primary text-primary-foreground` 토큰으로 교체 후, 별도 브랜치(`color-token-pilot`)로 Vercel 프리뷰 배포 → 운영 도메인을 건드리지 않고 스크린샷으로 전/후 비교 검증 → 사용자 확인 후 전체 적용 승인.
- **2차 전체 적용(나머지 210개 도구)**: 동일 패턴으로 일괄 치환 — 선택된 로케일 버튼은 `bg-primary text-primary-foreground`, 미선택 상태는 다수 패턴인 `bg-white hover:bg-muted`로 통일(일부 `bg-gray-100 text-gray-700` 변형 포함).
- 검증: `npx tsc --noEmit` 0 에러, `npx eslint .` 0 에러/0 경고, `npx next build` 954개 페이지 정적 생성 성공, 치환 후 재검색 결과 전체 218개 파일이 동일한 토큰 패턴으로 일치 확인.
- 색상 테마(선택 버튼)만 변경했으며 레이아웃·텍스트·기능은 변경 없음.

## 2026-10-31 — 수익화 준비 6단계: ESLint v9 플랫 설정 마이그레이션 + 전체 코드베이스 린트 이슈 수정

- `next lint` CLI가 Next.js 16에서 완전히 제거되어, `eslint-config-next`가 제공하는 네이티브 플랫 설정(`eslint-config-next/core-web-vitals`)으로 `eslint.config.mjs`를 새로 작성 (FlatCompat 방식은 순환 참조 오류로 포기).
- 애드센스 신청을 앞두고 사이트 전체(225개 도구 페이지 포함) 린트 이슈를 전수 조사·수정:
  - 실제 코드 수정(7건): `Date.now()`/impure 값을 렌더링 중 호출하던 2건(단식 타이머, 세계시간 변환기)을 기존 state에서 파생하도록 교체, 점심/저녁 메뉴 룰렛 2건의 `useCallback` 의존성 누락(실제 잠재 버그였던 stale-closure 포함)을 수정, 미사용 eslint-disable 주석 2건 제거, JSX 인용부호 미탈출 1건 수정.
  - 주석으로 억제(8건, `react-hooks/set-state-in-effect`/`react-hooks/purity`): 밸런스게임·사다리타기·포모도로·유행어퀴즈·단위변환기·타로카드의 마운트/상태변경 동기화 effect, 가위바위보·텍스트정렬기의 이벤트 핸들러 내부 `Math.random()` — 모두 코드 분석 후 정당한 패턴 또는 린트 오탐으로 판단, 사유를 명시한 `eslint-disable-next-line` 주석으로 처리 (동작 변경 없음).
  - 주석으로 억제(33건, `@next/next/no-img-element`): 이미지/PDF 도구 32개 파일의 `<img>` 태그는 모두 캔버스 결과물 또는 사용자 업로드의 blob/data URL 미리보기로, `next/image` 최적화 대상이 아님을 확인 후 사유를 명시해 억제.
  - `_to_delete/` (미추적 임시 폴더)는 `eslint.config.mjs`의 `ignores`에 추가해 제외.
- 검증: `npx tsc --noEmit` 0 에러, `npx eslint .` 0 에러/0 경고, `npx next build` 954개 페이지 정적 생성 성공 — 모두 확인 후 커밋.

## 2026-10-31 — 수익화 준비 5단계: RSS 피드 신설 + 네이버 서치어드바이저 등록

GSC에 이어 "RSS도 만들어서 제출" + "네이버 웹마스터도구 등록" 요청을 진행했습니다.

**RSS 피드 (신규)**:
- LifeHub는 블로그/가이드 글이 없고 225개 도구 페이지로만 구성되어 있어, 사용자에게 RSS 범위를 먼저 확인(AskUserQuestion) — "전체 225개 도구 × 4개 언어(900개 항목), pubDate는 git 로그 기준 실제 추가일로 복원" 방식을 선택받음.
- `src/lib/tool-pub-dates.ts`(신규, 자동 생성): `git log --diff-filter=A` 전체 이력에서 각 도구 폴더가 처음 커밋된 날짜를 추출하는 `build_pubdates.py` 스크립트로 생성. 225개 전부 실제 날짜 복원 성공(fallback 불필요).
- `src/app/rss.xml/route.ts`(신규): `sitemap.ts`와 동일한 `TOOL_IDS`/`SITE_URL`/`categoryToolsMap`을 재사용해 RSS 2.0 XML 생성, pubDate 내림차순 정렬.
- 검증: `npx tsc --noEmit` 0 errors, 로컬 `next dev` 실기동으로 `GET /rss.xml` → 200, `application/xml`, 900개 item, python `xml.etree`로 well-formed 확인. 배포 후 라이브에서도 900개 item 확인.

**네이버 서치어드바이저 등록**:
- naver.com 도메인이 이 세션의 브라우저 자동화 도구(Claude-in-Chrome, 내장 브라우저 둘 다)에서 안전 정책상 하드 차단되어 있어(권한 요청으로도 불가), 사용자가 직접 Naver Search Advisor에서 사이트 등록 + HTML 태그 방식 선택 + 메타태그 코드를 확인해 전달.
- Vercel에 `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` 환경변수(Production, Config 타입) 추가 — 코드 쪽 `naverVerification` 분기는 bcefead에서 이미 준비되어 있었음(4단계 기록 참고).
- 재배포 후 라이브에서 `<meta name="naver-site-verification" content="8c421b21...">` 정상 반영 확인.
- 네이버 콘솔의 최종 "확인" 버튼 클릭은 naver.com 차단으로 인해 사용자가 직접 진행 필요 — 코드/환경변수/배포까지는 완료, 콘솔 클릭만 남음.

**구글 서치콘솔 추가 제출**:
- `rss.xml`을 GSC에 제출 — 상태 "성공", 901개 페이지 발견(sitemap.xml 948개와 별도)

**작업 전 백업**: 신규 파일만 추가(`rss.xml/route.ts`, `tool-pub-dates.ts`)이므로 기존 파일 백업 불필요.

**남은 사항**:
- ~~네이버 서치어드바이저 "확인" 버튼 클릭 → 사이트맵/RSS 제출~~ → 사용자가 직접 완료 확인(2026-10-31). 구글·네이버 양쪽 모두 사이트맵 + RSS 등록 완료.
- 도메인(alltools365.com) 구매는 9/29 합의대로 노출 데이터 확인 전까지 보류

## 2026-10-31 — 수익화 준비 4단계: 구글 서치콘솔(GSC) 등록 + 사이트 루트 404 버그 수정

"다음단계 진행해줘" 요청에 따라 구글 서치콘솔(Search Console) 등록을 진행했습니다. 과정 중 사이트 루트 URL이 404를 반환하는 기존 버그를 발견해 함께 수정했습니다.

**진행 과정**:
1. Google Search Console에서 URL 접두어 속성(`https://lifehub-weld.vercel.app`) 생성, HTML 태그 방식으로 소유권 확인 선택
2. `src/app/[locale]/layout.tsx`의 `generateMetadata`에 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` 환경변수 opt-in 방식으로 구글/네이버 소유확인 메타태그 지원 추가 (커밋 `bcefead`) — 환경변수가 설정된 경우에만 메타태그를 렌더링하며, 설정 안 하면 아무 영향 없음. ExifLens/FlyDroneMap/firelic 자매 프로젝트의 기존 네이버 opt-in 패턴을 참고해 동일하게 구현.
3. Vercel에 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` 환경변수(Production, Config 타입) 추가 후 재배포
4. 1차 소유권 확인 시도 실패 — 원인 조사 결과, **사이트 루트(`https://lifehub-weld.vercel.app/`, locale 없는 주소)가 404를 반환**하는 것을 발견. GSC가 속성 루트 URL 그대로 요청해서 메타태그를 찾았으나, 루트 자체가 404라 실패한 것.
5. 근본 원인: 커스텀 `middleware.ts`가 `next-intl`의 공식 `createMiddleware`를 쓰지 않고 자체 구현(헤더만 설정, 실제 리다이렉트 없음)을 사용 중이었음. `routing.ts`는 `localePrefix: "always"`로 설정되어 있어 `/` → `/ko` 리다이렉트가 필요했는데 동작하지 않았던 것. 기존 헤더(`x-next-intl-locale`)는 코드베이스 어디서도 참조되지 않는 죽은 코드였음을 grep으로 확인.
6. `middleware.ts`를 `next-intl`의 `createMiddleware(routing)`로 교체 (커밋 `a0cc344`). 로컬 `next dev` 서버로 실제 기동 검증: `GET /` → 307 → `/ko` 리다이렉트, `/ko`·`/en` 200 정상 확인 후 배포.
7. 재배포 완료 후 라이브에서 루트 리다이렉트 + 메타태그 정상 노출 확인 → GSC가 백그라운드에서 재확인에 성공, "인증된 소유자입니다" 상태로 전환됨 (별도 수동 확인 클릭 없이 자동 통과)
8. `sitemap.xml`을 GSC에 제출 — 상태 "성공", 948개 페이지 발견됨

**결과**: 구글 서치콘솔 소유권 확인 완료 + sitemap 제출 완료. 덤으로 사이트 루트 bare 도메인 접속 시 404가 나던 실제 버그(일반 방문자에게도 영향)를 함께 해결함.

**작업 전 백업**: `_backups/backup_20261030_162935_root-404-middleware-fix/`(`middleware.ts`, `routing.ts` 원본)

**검증**: `npx tsc --noEmit` → 0 errors. 로컬 `next dev` 실기동으로 `/`, `/ko`, `/en` 라우트 상태코드 확인. 배포 후 라이브 사이트에서 `document.querySelector('meta[name="google-site-verification"]')` 존재 확인 + GSC 설정 페이지에서 "인증된 소유자입니다" 확인 + sitemap 제출 "성공" 상태 확인.

**남은 사항**:
- 네이버 웹마스터도구(서치어드바이저) 등록 — 코드 지원은 준비됨(`naverVerification` 분기), 네이버 콘솔 등록 + 환경변수 설정은 아직 미착수
- robots.txt 파일이 없는 것을 GSC 설정 페이지에서 확인(참고사항, 아직 대응 안 함)
- 도메인(alltools365.com) 구매는 9/29 합의대로 노출 데이터 확인 전까지 보류

## 2026-10-31 — 수익화 준비 3단계: NEXT_PUBLIC_SITE_URL 환경변수 설정 + 재배포

"다음 진행해줘" 요청에 따라, 2단계 배포 기록에 "별도 승인 필요"로 남겨뒀던 항목을 진행했습니다.

**진행 과정**:
1. Vercel 프로젝트(lifehub) → Project Settings → Domains에서 안정적인 프로덕션 도메인이 `lifehub-weld.vercel.app`임을 확인 (배포마다 바뀌는 해시형 URL이 아닌, 고정 별칭)
2. Vercel Environment Variables에 `NEXT_PUBLIC_SITE_URL = https://lifehub-weld.vercel.app` 를 Production 환경, Config 타입으로 추가
3. 기존 배포(bf10de2)를 Redeploy하여 새 환경변수 반영 (빌드 1m 53s, Ready)
4. 배포 완료 후 `https://lifehub-weld.vercel.app/sitemap.xml` 접속하여 모든 URL이 `alltools365.com`이 아닌 `lifehub-weld.vercel.app`로 정상 반영된 것을 확인

**결과**: sitemap, canonical URL, hreflang, Open Graph, JSON-LD가 모두 실제 라이브 주소(`https://lifehub-weld.vercel.app`) 기준으로 생성됨. 코드 수정 없이 환경변수만으로 해결.

**남은 사항**:
- 구글 서치콘솔(URL 접두어 속성) 등록 + sitemap 제출 — 아직 미착수
- 네이버 웹마스터도구 등록 — 아직 미착수
- 다음 push 스크립트부터는 터미널 자동 종료 로직 수정본 적용 (osascript 자체 delay + 독립 백그라운드 프로세스 방식으로 교체 예정, 아직 실제 push 미발생)
- 도메인(alltools365.com) 구매는 9/29 합의대로 노출 데이터 확인 전까지 보류

## 2026-10-31 — 수익화 준비 2단계: GitHub 연동 + Vercel 최초 배포 (무료 검증)

9/29에 합의했던 "도메인 없이 Vercel 무료 주소로 먼저 공개" 방향을 실행에 옮겼습니다.

**진행 과정**:
1. GitHub 저장소 `SH8952/lifehub`(Public, 빈 저장소)를 사용자 로그인 후 생성
2. repo root에 원클릭 push 스크립트(`push-to-github.command`, git add -u만 사용, 실행 후 자동 삭제)를 만들어 사용자가 실행 → 로컬 커밋 전체를 최초 push. 로컬 HEAD와 origin/main 커밋 해시 일치 확인(0671c0f)
3. Vercel 쪽 GitHub App에 lifehub 저장소 접근 권한 추가(사용자 직접 처리)
4. Vercel에서 lifehub 프로젝트 Import → 기존 3개 사이트(exiflens/flydronemap/firelic)와 동일한 팀(Hobby 플랜)으로 배포
5. 빌드 성공, 배포 완료

**결과**: `https://lifehub-czrjrwzi5-sh8952-adsense-project.vercel.app` 로 라이브 확인. 홈(ko) 디자인 정상 렌더링(차콜+앰버, 레이아웃 정돈 전부 반영된 상태), 영어 도구 페이지(/en/tool/bmi)도 정상 렌더링 확인.

**남은 사항**:
- ~~`NEXT_PUBLIC_SITE_URL` 환경변수 미설정~~ → 해결됨 (아래 "3단계" 참고)
- 구글 서치콘솔 / 네이버 웹마스터 등록, sitemap 제출은 아직 미착수
- 도메인(alltools365.com) 구매는 여전히 보류 — 9/29 계획대로 노출 데이터 확인 후 결정

## 2026-10-31 — 수익화 준비 1단계: 건강·재무 도구 8종 면책 문구 추가

"사이트를 수익화하려면 어떤 작업을 하면 좋을지" 질문에 답변하며 전체 로드맵(배포 준비 → 노출 확인 → 애드센스/제휴)을 안내드렸고, 사용자가 "도구 페이지 콘텐츠 보강 먼저"를 선택해 진행했습니다.

**점검 결과**: 225개 도구 페이지 전체를 점검한 결과 FAQ 100%, 면책 문구 88%(199/225), 사용법 설명 84%(188/225) 보유로 전반적인 콘텐츠 수준은 양호했습니다. 다만 건강/재무 성격인데 면책 문구가 빠진 도구 8개를 발견해, 애드센스 심사 시 "전문적인 조언이 아님"을 명확히 하기 위해 우선 보강했습니다.

**대상 도구(8개)**: break-even-point-calculator, caffeine-intake-tracker, credit-score-checklist, emergency-fund-goal, exercise-calorie-calculator, quit-smoking-savings, salary-raise-calculator, sleep-cycle-calculator

**변경 내역**: 각 도구의 `data.ts`에 `disclaimer` 필드를 추가(4개 언어 전체, 도구 주제에 맞는 내용으로 작성)하고, `<Name>Client.tsx`에서 기존 `footer` 문구 위에 `disclaimer` 문구를 렌더링하도록 추가. 기존 콘텐츠·레이아웃·기능은 그대로 유지(시각적으로는 작은 안내 문구 한 줄만 추가됨).

**작업 전 백업**: `_backups/backup_20261030_152901_tool-disclaimer-8/`(8개 도구의 `data.ts`·`Client.tsx` 원본)

**검증**: `npx tsc --noEmit` → 0 errors. `npx next build` → 성공. `npx next dev -p 4762` 실전 기동 → 8개 도구 × 4개 언어 = 32개 라우트 전부 HTTP 200 확인, 면책 문구가 실제 화면에 렌더링되는 것 확인(예: sleep-cycle-calculator ko 페이지에 "90분 수면 사이클 이론에 기반한 참고용 추정치" 텍스트 노출), 서버 로그 에러 0건.

## 2026-10-30 — 시그니처 컬러 재변경: 차콜 + 앰버(D안)로 최종 교체

딥 로즈 계열(C안 → V2 재제안 8종)을 검토한 끝에, 사용자가 가장 처음 제안했던 **D. 차콜 + 앰버**로 최종 결정.

**변경 내역**:
- `src/app/globals.css`: `--primary`를 딥 로즈(`oklch(0.514 0.198 16.935)` / `oklch(0.719 0.169 13.428)`)에서 앰버 `oklch(0.769 0.165 70.080)`(#F59E0B)로 교체(라이트·다크 모드 동일 톤 사용). `--primary-foreground`는 라이트 모드에서 흰색 → 차콜 `oklch(0.210 0.006 285.885)`(#18181B)로 변경(밝은 앰버 배경 위 가독성을 위해 다크 텍스트로). 다크 모드 `--primary-foreground`는 기존 다크 텍스트 값 그대로 유지.
- `src/app/[locale]/layout.tsx`: 헤더 "LifeHub" 워드마크의 `text-primary` 클래스 제거 → D안 원래 설계대로 로고/텍스트는 차콜(기본 텍스트색), CTA·배너·진행률 바 등 강조 요소만 앰버를 사용하도록 역할 분리.
- `bg-primary`/`text-primary`/`bg-primary/10` 토큰을 쓰는 다른 모든 요소(오늘의 추천 배너, 카테고리 카드 진행률 바, 인기 도구 아이콘 배지, 히어로 배지 점·CTA 링크)는 코드 변경 없이 자동으로 앰버로 전환됨 — 시맨틱 토큰 체계 도입의 효과.

**작업 전 백업**: `_backups/backup_20261030_151204_signature-color-d-charcoal-amber/`(`globals.css`, `layout.tsx`)

**검증**: `npx tsc --noEmit` → 0 errors. `npx next build` → 성공. `.next` 캐시 삭제 후 `npx next dev -p 4750` 실전 기동 → 4개 언어 전부 HTTP 200, 헤더 워드마크가 `text-primary` 없이 렌더링됨(차콜 유지) 확인, 서버 로그 에러 0건.

## 2026-10-30 — 홈페이지 레이아웃 정돈: 카테고리 정보 중복 제거 (page.tsx)

"메인 홈 화면 배치를 좀 더 정돈된 모습으로 깔끔하게 만들어달라"는 요청에 따라, 레이아웃 정돈 제안 목업(아티팩트에 보드 추가)을 먼저 보여드리고 승인받아 진행했습니다.

**진단**: 같은 7개 카테고리 정보가 (1) 좌측 "카테고리 스포트라이트" 카드, (2) 우측 "카테고리별 도구 현황" 진행률 바, (3) 하단 "전체 카테고리 둘러보기" 그리드 — 3곳에서 반복 노출되고 있었고, 비대칭 3단(3/6/3) 벤토 그리드 안에 서로 다른 모양의 카드 6종류가 섞여 있어 콘텐츠는 많지 않은데도 복잡해 보이는 구조였습니다.

**변경 내역 (`page.tsx` 한정)**:
- 비대칭 3단 벤토 그리드(`lg:col-span-3/6/3`) 제거
- "오늘의 추천" 카드: 좁은 좌측 컬럼 카드 → 가로 전체 너비 배너로 변경
- "인기 도구" 그리드: 중앙 6컬럼 제약에서 전체 너비로 확장(`lg:grid-cols-8`로 8개가 한 줄에 정렬)
- "카테고리 스포트라이트" 카드, "카테고리별 도구 현황" 진행률 바 위젯, "무료 도구/지원 언어/카테고리" 통계 카드 — 모두 제거
- 통계 숫자(도구/언어/카테고리 수)는 "전체 카테고리" 섹션 제목 옆 한 줄 요약으로 이동
- "전체 카테고리" 그리드 각 카드에 작은 진행률 바를 추가해, 제거된 현황 위젯의 정보(카테고리별 도구 수 비교)를 그대로 유지
- 미사용 변수(`spotlightCategory`, `formatToolCount`) 정리. 번역 키(`categorySpotlightBadge` 등)는 그대로 두되(다른 곳에서 영향 없음) 더 이상 화면에 쓰이지 않음

**작업 전 백업**: `_backups/backup_20261030_145434_homepage-layout-cleanup/`(`page.tsx`, 수정 전 git 커밋 상태)

**검증**: `npx tsc --noEmit` → 0 errors. `npx next build`(프로덕션) → 성공. `.next` 캐시 삭제 후 `npx next dev -p 4740` 실전 기동 → `/ko`·`/en`·`/ja`·`/es` 전부 HTTP 200, 제거된 위젯 문구가 실제 화면 텍스트에 남아있지 않음(남은 1건은 클라이언트로 전달되는 비표시 i18n JSON 데이터일 뿐 화면에는 노출 안 됨) 확인, 서버 로그 에러 0건.

## 2026-10-30 — 전체 분위기 개선: 홈페이지 전문적인 디자인으로 리터치 (1단계, page.tsx 한정)

"사이트 디자인이 허접해보인다"는 피드백에 따라 홈페이지(`src/app/[locale]/page.tsx`)의 시각적 디테일을 손봤습니다. 사용자가 제안받은 Before/After 목업 중 "1단계(홈페이지만)"를 승인해 진행했고, 225개 개별 도구 페이지의 스타일 통일(2단계)은 범위가 커서 별도 승인 대기 중입니다.

**진단한 문제점**:
- 히어로 섹션이 진한 인디고 그라디언트 + 녹색 펄스 배지로, 방금 적용한 헤더의 딥 로즈 시그니처 컬러와 색이 충돌
- 카드들이 "호버 시 보더 색이 바뀌는" 방식으로 입체감을 표현 — 전형적인 생성형 템플릿 톤
- 카테고리 아이콘이 전부 이모지(💚🖼️📄💰🎉⚙️🔧) 의존 — 플랫폼마다 다르게 렌더링됨

**변경 내역 (`page.tsx` 전용, 다른 파일 변경 없음)**:
- `lucide-react` 아이콘 세트 도입: `categoryIconComponentById` 맵(생활·건강=HeartPulse, 이미지·미디어=ImageIcon, 문서·PDF=FileText, 재무·투자=Wallet, Fun·엔터=PartyPopper, 개발·IT=Code2, 공통 유틸리티=Wrench)으로 이모지를 대체 — 오늘의 추천 카드, 카테고리 스포트라이트, 인기 도구 그리드(8개), 카테고리 둘러보기 그리드(7개), 우측 카테고리 현황 바 전체에 적용. 검색 자동완성(`ToolSearch`)에 쓰이는 이모지는 별도 컴포넌트라 이번 범위에서 제외(변경 없음).
- 하드코딩된 `indigo-*` 색상 전부 제거, shadcn 시맨틱 토큰(`text-primary`/`bg-primary`/`bg-primary/10`)으로 교체 → 헤더의 딥 로즈와 전역에서 자동으로 통일되고, 이후 시그니처 컬러가 또 바뀌어도 이 파일을 다시 손댈 필요 없음.
- 카드 입체감 표현을 "호버 시 색이 바뀌는 2px 보더"에서 `Card` 기본 컴포넌트의 `shadow-sm hover:shadow-md`(그림자 기반)로 되돌림 — 색이 아니라 음영으로 떠 보이는 더 차분한 느낌.
- 히어로 배경을 `from-indigo-50 to-white` 그라디언트에서 `bg-rose-50/40` 플랫 와시 + 하단 보더로 축소, 배지를 중립 테두리 스타일로 변경, 펄스 점은 정적인 `bg-primary` 점으로 교체(과한 애니메이션 제거).
- 오늘의 추천 카드는 인디고→퍼플 그라디언트에서 `bg-primary`(딥 로즈) 단색으로 교체.

**작업 전 백업**: `_backups/backup_20261030_144200_homepage-professional-redesign/`(`page.tsx`, 수정 전 git 커밋 상태)

**검증**: `npx tsc --noEmit` → 0 errors. `npx next build`(프로덕션) → 빌드 성공, 에러 없음. `.next` 캐시 삭제 후 `npx next dev -p 4730` 실전 기동 → `/ko`·`/en`·`/ja`·`/es` 전부 HTTP 200, 렌더된 HTML에 `indigo` 문자열 0건(완전 제거 확인), 서버 로그 에러/경고 0건.

**남은 작업 (2단계, 사용자 추가 승인 필요)**: 225개 개별 도구 페이지의 하드코딩된 언어 선택 버튼 색상(`bg-rose-700` 등)과 기본 입력창 스타일(포커스 효과 없음)을 사이트 전역 토큰으로 통일하는 작업. 범위가 커서 전수 빌드·라우트 스윕 검증이 필요해 별도 회차로 진행 예정.

## 2026-10-30 — 시그니처 컬러 적용: 딥 로즈(Deep Rose) 리브랜딩 (1단계, 사이트 크롬만)

웹디자인/시그니처 컬러 변경 요청에 따라 4가지 방향(모던 인디고 / 웜 코랄 / 딥 로즈 / 차콜+앰버)을 Claude Design 아티팩트로 제안, 사용자가 **C. 딥 로즈**를 선택해 반영했습니다. 포트폴리오 내 다른 사이트(FlyDroneMap=블루, FIRE 계산기=그린)와 겹치지 않는 색입니다.

**변경 범위 (의도적으로 최소화 — 사이트 전체 "크롬"만, 개별 도구 페이지의 제각각인 포인트 컬러는 그대로 유지):**
- `src/app/globals.css`: shadcn `--primary`/`--primary-foreground` 토큰만 교체
  - 라이트 모드 `--primary`: 기존 그레이스케일 `oklch(0.205 0 0)` → `oklch(0.514 0.198 16.935)` (#BE123C, rose-700)
  - 다크 모드 `--primary`: 기존 오렌지 `oklch(0.72 0.14 60)` → `oklch(0.719 0.169 13.428)` (#FB7185, rose-400 — 어두운 배경에서 대비 확보용으로 더 밝은 톤 사용)
  - `--primary-foreground`(버튼/워드마크 위 텍스트 색)는 기존 값 유지
- `src/app/[locale]/layout.tsx`: 헤더 "LifeHub" 워드마크에 `text-primary` 클래스 추가 (기존엔 무색 텍스트) → 헤더에서 바로 브랜드 컬러 노출

**영향 범위**: `bg-primary`/`text-primary`/`border-primary` 등 shadcn 시맨틱 토큰을 쓰는 모든 버튼·링크·헤더가 자동으로 새 색을 받음. 225개 개별 도구 페이지가 각자 쓰는 pink/sky/amber/orange/rose/slate/green/violet 등의 로컬 포인트 컬러는 전혀 건드리지 않음(제안 문서에서 권장한 "사이트 크롬 vs 도구별 장식 컬러 분리" 원칙 그대로 적용).

**작업 전 백업**: `_backups/backup_20261030_142559_signature-color-c/`(`globals.css`, `layout.tsx`)

**검증**: `npx tsc --noEmit` → 0 errors. `npx next build`(프로덕션) → 전체 빌드 성공, 에러 없음. `.next` 캐시 삭제 후 `npx next dev -p 4720` 실전 기동 → 홈페이지(`/ko`) HTTP 200, 헤더 HTML에 `class="text-lg font-bold tracking-tight text-primary"` 정상 반영 확인. 서버 종료 후 포트(`lsof -i:4720`) 정리 확인.

**다음 단계(보류, 사용자 추가 요청 시 진행)**: 로고 마크(아이콘) 신규 제작, 카테고리별 색상 코딩(현재 이모지 전용), 액센트 컬러(#FBBF24) 활용처 확정 등은 이번 1단계에 포함하지 않음.

## 2026-10-30 — 생활·요리·자동차 영역 신규 계산기 11개 추가 (life-health 7, utility 4, 외부 API 없음)

웹 조사(omnicalculator, 국내 계산기 모음 사이트 등)를 바탕으로 기존에 없던 "집안일·이사", "요리·주방", "자동차·스포츠" 3개 영역의 계산기 11종을 사용자 선택에 따라 추가했습니다. 모두 외부 API 연동 없이 100% 브라우저에서 처리됩니다.

**life-health 카테고리 추가 (30 → 37):**
- `moving-cost-estimator` (이사 비용 계산기): 평수·이사 방식(포장/반포장/일반)·거리·사다리차 필요 여부로 예상 비용 범위 추정
- `cooking-measurement-converter` (요리 계량 단위 변환기): 재료별 밀도(물/설탕/밀가루/버터/소금/식용유/우유)를 반영한 컵·큰술·작은술·ml·g 변환
- `recipe-serving-converter` (레시피 인분 조절 계산기): 원래/목표 인분수 비율로 재료 목록 전체를 자동 환산 (재료 행 추가/삭제 가능)
- `beverage-abv-coffee-ratio-calculator` (술 도수 희석·커피 물 비율 계산기): 술 희석 시 필요한 물량 계산 + 핸드드립/프렌치프레스/에스프레소/콜드브루 비율 기준 커피 추출 물량 계산
- `one-rep-max-calculator` (1RM 계산기): Epley 공식 기반 1회 최대 중량 추정 및 퍼센트별(50~100%) 목표 중량표
- `running-pace-calculator` (러닝 페이스·완주시간 예측 계산기): 거리/시간 입력으로 페이스 계산, Riegel 공식으로 5K/10K/하프/풀마라톤 예상 완주시간 예측
- `golf-distance-handicap-calculator` (골프 비거리·핸디캡 계산기): 헤드스피드 기준 클럽별 비거리 추정 + 스코어·코스레이팅·슬로프레이팅 기반 간이 핸디캡 추정(1라운드 기준, 공식 인덱스 아님을 명시)

**utility 카테고리 추가 (30 → 34):**
- `wallpaper-flooring-calculator` (도배·장판 필요량 계산기): 평수 기준 벽지(합지/실크) 필요 롤 수, 장판 필요 평수(로스 10% 포함)
- `paint-amount-calculator` (페인트 필요량 계산기): 면적·도장 횟수·페인트 종류(수성/유성)로 필요 리터 계산
- `clothing-shoe-size-converter` (의류·신발 사이즈 변환기): 한국·미국·유럽·영국 남성/여성 신발 및 의류 사이즈 비교표
- `tire-pressure-size-calculator` (타이어 공기압·사이즈 계산기): 차량 유형별 권장 공기압(psi/kPa/bar) + 타이어 표기(폭/편평비/림) 기반 외경·옆면높이 계산

**카테고리 균형 관련 사용자 결정:**
- 지난 SNS/트렌드 도구 4개 추가 때와 동일하게, 이번에도 두 카테고리가 30개 기준을 넘는 것에 대해 사전 확인함.
- 사용자가 "상관없으니 그냥 추가 (추천)"를 선택해 균형 기준 초과를 명시적으로 승인함. (document-pdf, image-media, dev-it, finance, fun-entertainment은 기존 수치 유지, fun-entertainment는 지난 작업으로 34 유지)

**검증 방식:**
- 11개 도구를 4개(이사·집안일) + 3개(요리·주방) + 4개(자동차·스포츠) 배치로 나누어 작성, 각 배치 작성 후 `npx tsc --noEmit` 통과 확인 (모두 1차 통과)
- `tools-data.ts` / `sitemap.ts`에 전체 등록 후 전체 `npx tsc --noEmit` 재확인 → 통과
- 전체 `npx next build` 실행 → 라우트 총 225개(`grep -c "tool/"` = 225, 기존 214 + 신규 11) 및 11개 신규 라우트 전부 빌드 결과에 포함됨을 확인
- 4개 언어(ko/en/ja/es) 전체 지원, 외부 API 호출 0건, 모든 계산 공식(Epley, Riegel, 희석 공식, 핸디캡 차이값 공식 등)에 "참고용 추정치" 고지 포함


## 2026-10-30 — SNS/트렌드 조사 기반 신규 도구 4개 추가 (fun-entertainment, 외부 API 없음)

웹 조사(SNS·구글·검색엔진 트렌드 밈/기능 조사)를 바탕으로 사용자가 선택한 4개 컨셉을 모두 구현했습니다. 모든 도구는 사용자의 명시적 요구사항에 따라 외부 API 연동 없이 100% 브라우저에서 처리됩니다.

**추가된 도구 (fun-entertainment 카테고리, 30 → 34):**
- `balance-game-match` (밸런스 게임 싱크로율 비교): 20문항 밸런스 게임을 풀고 URL 링크로 친구와 답변을 공유해 싱크로율(%)을 비교. 서버 없이 답변을 base64 인코딩해 URL 쿼리 파라미터로 전달하는 방식으로 구현.
- `trend-slang-quiz` (유행어/트렌드 판독기 퀴즈): TMI, FOMO, OOTD 등 16개 온라인 유행어 문제 풀에서 매회 10문항을 무작위로 뽑아 10초 타이머로 진행하는 퀴즈. 정답 위치도 매번 셔플.
- `chaotic-personality-test` (병맛 성격유형 테스트): 12문항 응답을 집계해 8가지 자체 제작 성격 유형(자뻑형, 계획충형, 집돌이집순이형 등) 중 하나를 결과로 제공. SBTI 등 기존 성격 테스트의 실제 문항/유형명을 전혀 사용하지 않고 전부 독자적으로 작성.
- `trait-mindset-card-maker` (나는 OO형 카드 메이커): 트레잇 카드(이모지+문구)와 긍정 마인드 문장 카드 중 선택해 이름을 입력하고 색상 테마를 골라 PNG 이미지로 다운로드. Canvas API로 클라이언트에서만 이미지 생성, 저작권 있는 캐릭터(예: Little Miss 시리즈) 이미지는 사용하지 않고 자체 제작 이모지/색상 블록만 사용.

**카테고리 균형 관련 사용자 결정:**
- 2026-10-30에 전체 7개 카테고리를 정확히 30개씩(총 210개)으로 균형화 완료한 직후, 이번 4개 도구 추가로 fun-entertainment만 34개가 되어 균형이 깨지는 점을 사용자에게 사전 확인함.
- 사용자가 "상관없으니 그냥 추가"를 명시적으로 선택해 균형 기준을 의도적으로 초과하도록 승인함. (나머지 6개 카테고리는 여전히 30/30 유지)

**검증 방식:**
- 4개 도구 각각 작성 직후 `npx tsc --noEmit` 통과 확인 (모두 1차 통과, 타입 에러 없음)
- `tools-data.ts` / `sitemap.ts`에 4개 도구 등록 후 전체 `npx tsc --noEmit` 재확인 → 통과
- 전체 `npx next build` 실행 → 라우트 총 214개(`grep -c "tool/"` = 214, 기존 210 + 신규 4) 및 4개 신규 라우트 전부 빌드 결과에 포함됨을 확인
- 4개 언어(ko/en/ja/es) 전체 지원, 기존 Card/lucide-react/FAQ UI 패턴과 일관되게 구현


## 2026-10-30 — 🎉 카테고리 균형 확장(30개 통일) 전체 완료 (7/7 카테고리, 총 210개 도구)

2026-10-29 작업 지시서(EXPANSION_TASKLIST_2026-10-29.md)에 따라 시작된 7개 카테고리 균형화 작업이 전부 완료되었습니다.

**최종 결과:**

| 카테고리 | 기존 | 완료 | 신규 추가 |
|---|---|---|---|
| image-media | 5 | 30 | 25 |
| document-pdf | 5 | 30 | 25 |
| utility | 6 | 30 | 24 |
| fun-entertainment | 10 | 30 | 20 |
| dev-it | 11 | 30 | 19 |
| finance | 13 | 30 | 17 |
| life-health | 21 | 30 | 9 |

**총 71개 → 210개 (139개 신규 도구 추가), 전체 카테고리 각 정확히 30개로 균형화.**

이번 세션(dev-it 마지막 배치부터 전체 완료까지)에서 완료한 부분:
- dev-it 카테고리 19/19 완료 (regex-tester ~ css-animation-generator)
- finance 카테고리 17/17 완료 (savings-maturity-calculator ~ break-even-point-calculator) — 세금·보험 관련 도구에는 "참고용 추정치" 고지 포함
- life-health 카테고리 9/9 완료 (weight-loss-goal-calculator ~ heart-rate-zone-calculator) — 건강 관련 도구에는 "의학적 조언 아님" 고지 포함
- image-media, document-pdf 각 +1 (image-color-picker, pdf-redact)로 마지막 1개씩 보완해 30/30 달성
  - pdf-redact는 pdfjs-dist(렌더링) + pdf-lib(검은 박스 적용) 조합으로 구현했으며, 시각적 가리기일 뿐 PDF 내부 텍스트 데이터는 삭제되지 않는다는 점을 명확히 고지함

**검증 방식 (전 배치 공통 적용):**
- 각 배치(2~5개 도구)마다 `npx tsc --noEmit` 통과 확인
- 각 카테고리 완료 시점마다 `npx next build` 전체 빌드 실행, 신규 라우트가 빌드 결과에 모두 포함되는지 `grep`으로 확인
- 전체 완료 후 최종 `npx next build` 실행 → 210개 도구 라우트 전체(`grep -c "tool/"` = 210) 정상 생성 확인
- 외부 유료/네트워크 API를 전혀 사용하지 않고 모든 도구가 브라우저에서 100% 처리됨 (기존 방침 유지)
- 모든 도구 4개 언어(ko/en/ja/es) 지원, Card/lucide-react/FAQ UI 패턴 일관 적용


## 2026-10-30 — 카테고리 균형 확장(30개 통일) life-health 카테고리 9/9 완료

finance(30/30) 완료에 이어 life-health 카테고리(21개 → 30개, 9개 신규)를 3개 배치로 완료했습니다. 모든 계산기는 브라우저에서 100% 처리되며 외부 API를 사용하지 않습니다. 건강 관련 계산 결과에는 "참고용 추정치이며 의학적 조언이 아님"을 명시하고 필요 시 의사 상담을 권장하는 문구를 포함했습니다.

**배치 1/3 (커밋 663470d):**
- weight-loss-goal-calculator — 목표체중 감량 계산기 (현재/목표 체중, 주간 감량속도 기반 소요기간·일일 칼로리 결손)
- sleep-cycle-calculator — 수면 시간 계산기 (90분 수면 사이클 기반 추천 취침 시각, 4~6사이클 옵션)
- water-intake-calculator — 물 섭취량 계산기 (체중×활동량 기반 권장 하루 섭취량)
- exercise-calorie-calculator — 운동 칼로리 소모량 계산기 (MET 공식, 10종 운동 선택)

**배치 2/3 (커밋 03ea959):**
- pregnancy-week-calculator — 임신 주수 계산기 (마지막 생리일 기반 현재 주수·예정일·분기)
- quit-smoking-savings — 금연·금주 절약 금액 계산기 (지속일 기반 절약액 + 1년/5년 예상)
- body-fat-estimator — 체지방률 추정 계산기 (미 해군 둘레 측정 공식, 성별별 분기)
- caffeine-intake-tracker — 카페인 섭취량 트래커 (음료 추가/삭제, 400mg 권장한도 비교)

**배치 3/3 (커밋 586313b):**
- heart-rate-zone-calculator — 목표 심박수 구간 계산기 (카보넨 공식, 운동강도별 5단계 구간)

각 배치마다 `npx tsc --noEmit` 검증을 통과했고, 9/9 완료 시점에 `npx next build` 전체 빌드를 실행해 새로 추가된 9개 라우트가 모두 정상적으로 생성되는 것을 확인했습니다. tools-data.ts, sitemap.ts에도 모두 등록을 완료했습니다.

이로써 7개 카테고리 중 5개(utility, fun-entertainment, dev-it, finance, life-health)가 각 30개로 균형화 완료되었습니다. 남은 작업은 image-media(+1), document-pdf(+1)뿐입니다.


## 2026-10-30 — 카테고리 균형 확장(30개 통일) finance 카테고리 17/17 완료

7개 카테고리를 각 30개씩(총 210개)으로 균형화하는 작업 중 finance 카테고리(13개 → 30개, 17개 신규)를 완료했습니다. 모든 계산기는 브라우저에서 100% 처리되며 외부 유료/네트워크 API를 사용하지 않습니다. 세금·보험 관련 도구에는 "참고용 추정치"임을 명시하고 정확한 금액은 세무사·국세청 홈택스·보험사 등 공식 경로를 통해 확인하도록 안내하는 문구를 포함했습니다.

**배치 1/4 (커밋 203d3ae):**
- savings-maturity-calculator — 적금 만기 수령액 계산기 (단리 방식 적금 이자 계산)
- severance-pay-calculator — 퇴직금 계산기 (평균임금 × 30 × 재직일수/365)
- stock-profit-calculator — 주식 손익 계산기 (매수·매도 수수료 및 매도 거래세 반영)
- dividend-yield-calculator — 배당수익률 계산기

**배치 2/4 (커밋 cc1cf63):**
- lease-insurance-calculator — 전세 보증보험료 계산기 (HUG 기준 아파트/기타 주택 요율)
- realty-commission-calculator — 부동산 중개수수료 계산기 (2021년 개정 매매/임대 요율 구간)
- gift-tax-estimator — 증여세 간이 계산기 (관계별 공제 + 과세표준 구간별 세율)
- capital-gains-tax-estimator — 양도소득세 간이 계산기 (장기보유특별공제, 1세대1주택 비과세 기준 안내 포함)

**배치 3/4 (커밋 74dd29e):**
- emergency-fund-goal — 비상금 목표 계산기
- savings-goal-reverse-calculator — 목표 저축액 역산 계산기
- installment-vs-lumpsum — 할부 vs 일시불 비교기
- year-end-tax-refund-estimator — 연말정산 환급액 간이 계산기 (근로소득공제·인적공제·세액공제 반영)

**배치 4/4 (커밋 ae0093c):**
- car-insurance-estimator — 자동차 보험료 추정기 (차량가·나이·경력·사고이력 기반 범위 추정)
- credit-score-checklist — 신용점수 올리기 체크리스트 (10항목 + 진행률 추적, 커스텀 build_data_ts_with_items 빌더로 해결)
- salary-raise-calculator — 연봉 인상률 계산기 (인상률 기반/목표연봉 기반 양방향 계산)
- currency-exchange-fee-compare — 환전 수수료 비교기 (우대율 적용 전후 비교)
- break-even-point-calculator — 손익분기점(BEP) 계산기 (고정비/변동비/단가 기반)

각 배치마다 `npx tsc --noEmit` 검증을 통과했고, 17/17 완료 시점에 `npx next build` 전체 빌드를 실행해 새로 추가된 17개 라우트가 모두 정상적으로 생성되는 것을 확인했습니다. tools-data.ts, sitemap.ts에도 모두 등록을 완료했습니다.


## 2026-10-30 — 카테고리 균형 확장(30개 통일) dev-it 카테고리 19/19 완료

utility(30/30), fun-entertainment(30/30)에 이어 dev-it 카테고리를 기존 11개에서 30개로
확장하기 위해 19개 신규 도구를 5개 배치로 생성:

1. regex-tester(정규식 매치 하이라이트/캡처그룹), css-gradient-generator(선형·원형 그라디언트
   실시간 미리보기+코드복사), css-box-shadow-generator(슬라이더 기반 box-shadow 생성),
   css-flexbox-generator(flex 옵션 선택형 레이아웃 미리보기)
2. markdown-preview(marked 라이브러리 기반 실시간 렌더링), lorem-ipsum-generator(단락/문장/단어
   단위 더미 텍스트), contrast-checker(WCAG AA/AAA 명암 대비 계산), svg-to-png(캔버스 기반
   SVG→PNG 변환)
3. jwt-generator(Web Crypto HMAC-SHA256 HS256 토큰 생성, 테스트용 경고 포함),
   html-entity-converter(특수문자↔HTML엔티티), slug-generator(URL 친화적 슬러그 변환),
   subnet-calculator(IP+CIDR 네트워크/브로드캐스트/호스트 계산)
4. base-converter(2/8/10/16진수 변환), morse-code-converter(텍스트↔모스코드+Web Audio
   신호음 재생), mock-data-generator(더미 데이터 JSON/CSV 생성), code-diff-checker(LCS
   알고리즘 기반 줄 단위 코드 비교)
5. http-status-reference(1xx~5xx 상태 코드 검색/카테고리별 참조표), css-unit-converter
   (px/rem/em/pt/% 상호 변환), css-animation-generator(bounce/fade/spin/pulse/shake
   @keyframes 코드 생성)

- 모든 신규 도구 4개 언어(ko/en/ja/es) 번역 포함, tools-data.ts/sitemap.ts 등록
- 각 배치마다 tsc --noEmit 통과 확인, 19/19 완료 시점에 next build 전체 빌드로 신규 라우트
  19개 모두 생성 확인
- 외부 유료/네트워크 API 없이 순수 클라이언트 로직으로만 구현 (jwt-generator는 브라우저
  Web Crypto API 사용, 실제 운영 비밀 키 사용 금지 경고 명시)
- 커밋: 84acfd9, 29c3495, 4c8c1d0, 46ff515, 543190d


## 2026-10-30 — 카테고리 균형 확장(30개 통일) fun-entertainment 카테고리 20/20 완료

utility(30/30) 완료에 이어 사용자 확인 순서대로 fun-entertainment 카테고리를 기존 10개에서
30개로 확장하기 위해 20개 신규 도구를 5개 배치로 생성:

1. name-fortune(이름+날짜 해시 기반 획수지수/운세/행운색), birthday-personality(생년월일로 12유형),
   mbti-simple-test(8문항 E/I·S/N·T/F·J/P 집계로 4글자 유형 계산), color-of-the-day(날짜 해시로
   10가지 색상 운세) — commit 25a9f05
2. lucky-number-generator(1-45/1-99 범위 6개 무작위 숫자), couple-name-compatibility(이름 조합
   해시 궁합점수), movie-recommendation-roulette, book-recommendation-roulette(둘 다 저작권 회피를
   위해 실제 영화/책 제목 대신 장르·분위기 조합 15종 룰렛) — commit 3ef4443
3. daily-quote-generator(자체 창작 20개 문구, 실제 인물 발언 아님), truth-game-questions(가벼운/깊은
   질문 각 15개), role-assignment-roulette(팀원+역할 셔플 배정, 기본 역할 제공), birthday-compatibility
   (생년월일 조합 해시 궁합점수, couple-name-compatibility와 별개 계산 방식) — commit 7c8be74
4. chinese-zodiac-fortune(태어난 연도 mod 12로 12간지), daily-affirmation-generator(1인칭 다짐
   20개, 자체 창작), travel-destination-roulette(여행 분위기·테마 15종, 특정 지역명 미사용),
   number-baseball-game(중복없는 3~4자리 숫자 추리, 스트라이크/볼 판정) — commit ec884d5
5. rock-paper-scissors(컴퓨터 대결, 승패무 기록), last-digit-fortune(0~9 숫자+날짜 해시 운세),
   would-you-rather(밸런스게임 질문 20개), dice-roller(1~6개 주사위 동시 굴림, 유니코드 다이스
   이모지 시각화) — commit 3a61ee1

영화/책 추천 룰렛과 여행지 추천 룰렛은 저작권·상표권 문제를 피하기 위해 실제 작품명이나 지역명이
아닌 장르·분위기·테마 조합만 추천하도록 설계. 명언/다짐 생성기도 실제 인물의 발언을 인용하지 않고
전부 자체 창작 문구로 구성.

모든 도구는 외부 유료/네트워크 API 없이 브라우저 내 해시·셔플 로직으로 동작하며 4개 언어
(ko/en/ja/es) 전체 번역 포함, 재미 콘텐츠임을 명시하는 disclaimer 포함. 각 배치마다
`npx tsc --noEmit` 클린 확인, 카테고리 완료 시점에 `next build` 전체 클린 확인(신규 라우트 전부
정상 생성).

**fun-entertainment 카테고리 20/20 신규(총 30/30) 완료** — 다음은 dev-it 카테고리(19개 신규 필요) 진행.

## 2026-10-30 — 카테고리 균형 확장(30개 통일) utility 카테고리 24/24 완료

사용자가 스크린샷으로 카테고리별 도구 개수 불균형(생활·건강 21, 이미지·미디어 29, 문서·PDF 29, 재무·투자 13,
Fun·엔터테인먼트 10, 개발·IT 11, 공통 유틸리티 6)을 지적하며 "카테고리별 30개씩 맞춰서 구현 가능할까?"라고
질문 → `AskUserQuestion`으로 범위("전체 7개 모두 30개로 통일, 총 210개")와 순서("공통 유틸리티→Fun·엔터테인먼트
→개발·IT→재무·투자→생활·건강")를 명시적으로 확인받은 후 작업 착수(백업: `_backups/backup_20261030_080406_
category-balance-30-expansion/`).

utility 카테고리를 기존 6개에서 30개로 확장하기 위해 24개 신규 도구를 6개 배치로 생성:

1. sns-character-counter, password-strength-checker, qr-code-scanner(jsQR 라이브러리 신규 설치),
   timer-stopwatch, pomodoro-timer, world-time-converter(Intl.DateTimeFormat timeZone), date-diff-calculator,
   weekday-finder(ISO 8601 주차 계산) — commit 3f24069
2. roman-numeral-converter, name-initials-generator, random-team-divider, simple-checklist-maker —
   commit 426935b
3. utf8-byte-counter, emoji-finder, special-characters-list, keyboard-shortcuts-reference — commit 8aa2daa
   (생성 중 `BRACKETS` 배열 문자열 오탈자 발견·즉시 수정)
4. color-name-converter(CSS 140여개 named color, RGB 유클리드 거리 매칭), duplicate-line-remover,
   clipboard-history-viewer(navigator.clipboard.readText, 세션 내 메모리 보관), random-number-generator
   (숫자/문자열 두 모드) — commit d174a69
5. text-sorter(가나다/숫자/길이/거꾸로/셔플 6가지 모드), whitespace-remover(트림/공백압축/빈줄제거/탭변환/
   줄바꿈제거 조합), find-and-replace(정규식/대소문자구분/단어단위 옵션, 일치 개수 표시),
   percentage-calculator(비율/퍼센트값/증감률/전체값역산 4모드) — commit 2251d1a

모든 도구는 외부 유료/네트워크 API 없이 브라우저 내에서만 동작하며 4개 언어(ko/en/ja/es) 전체 번역 포함,
기존 Card/lucide-react/FAQ UI 패턴 유지. 각 배치마다 `npx tsc --noEmit` 클린 확인, 카테고리 완료 시점에
`next build` 전체 클린 확인(신규 라우트 전부 정상 생성).

**utility 카테고리 24/24 신규(총 30/30) 완료** — 다음은 fun-entertainment 카테고리(20개 신규 필요) 진행.

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

### 2026-09-24 ~ 2026-09-29 아카이브

# Changelog 아카이브 (2026-09-24 ~ 2026-09-29)

최신 기록은 프로젝트 루트의 `CHANGELOG.md`를 참고하세요. 이 파일은 과거 작업 내역 조회용으로만 보관합니다.

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

---

## 5. 작업지시서 아카이브 — 로컬 LLM 작업분 (전부 완료됨)

### 5-1. 카테고리 균형 확장 지시서 (2026-10-29, 210/210 완료)

# lifehub 카테고리 균형 확장 작업 지시서 (2026-10-29)

## 배경

2026-10-29, BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md의 24개 작업이 전부 완료된 후, 사용자가 카테고리별 도구 수 불균형을 지적하고 외부 API 불필요 도구를 균형 있게 추가해 유사 사이트 수준(200개 이상)으로 확장을 요청함.

**확정된 사항 (사용자 승인, 2026-10-29):**
- 전체 목표 개수: **200개 이상** (카테고리당 약 29개 기준, 총 203개)
- **2026-10-30 추가 확정 (사용자 요청)**: 카테고리 간 불균형(스크린샷 확인)을 이유로 목표를 **카테고리당 정확히 30개, 총 210개**로 상향. 이미 완료된 image-media/document-pdf 에도 각 1개씩 추가해 30개로 통일. 진행 순서·방식(외부 유료/네트워크 API 금지, 2개씩 배치)은 기존과 동일 유지.
- 진행 순서: **부족한 카테고리부터** — image-media → document-pdf → utility → fun-entertainment → dev-it → finance → life-health
- 아래 후보 목록을 그대로 사용해서 진행

## 📊 진행 상황 요약

| 카테고리 | 기존 | 목표 | 추가 필요 | 상태 |
|---|---|---|---|---|
| **image-media** | 5 | 30 | 25 | ✅ 완료 (25/25) |
| **document-pdf** | 5 | 30 | 25 | ✅ 완료 (25/25) |
| **utility** | 6 | 30 | 24 | ✅ 완료 (24/24) |
| **fun-entertainment** | 10 | 30 | 20 | ✅ 완료 (20/20) |
| **dev-it** | 11 | 30 | 19 | ✅ 완료 (19/19) |
| **finance** | 13 | 30 | 17 | ✅ 완료 (17/17) |
| **life-health** | 21 | 30 | 9 | ✅ 완료 (9/9) |

**총 139개 신규 도구 (71 → 210개, 2026-10-30 기준 수정) — 🎉 전체 완료 (210/210)**

## 작업 방식 (기존 23개 항목과 동일)

1. 아래 후보 목록에서 순서대로 진행 (각 항목에 제안 slug 포함)
2. RSC-safe 3파일 구조: `data.ts` + `<Tool>Client.tsx` + `page.tsx`, 4개 언어(ko/en/ja/es) 지원
3. `src/lib/tools-data.ts`(해당 카테고리)와 `src/app/sitemap.ts`(TOOL_IDS)에 등록
4. `npx tsc --noEmit` → `rm -rf .next && next build` 검증
5. 파일 경로 명시 `git add` + 한국어 커밋 메시지(Claude 어트리뷰션) 커밋
6. `CHANGELOG.md` 기록 + 이 파일의 진행 테이블 갱신을 별도 커밋
7. 전부 외부 유료/네트워크 API 불필요 — 브라우저 내장 기능 또는 이미 사용 중인 클라이언트 라이브러리(pdf-lib, jsPDF, qrcode 등)만 사용

---

## 1. image-media (25개 신규) — ⏳ 진행 중 (24/25 완료, 30개 목표로 1개 추가)

| # | slug | 도구명 |
|---|---|---|
| 1 | image-grayscale | 이미지 흑백 변환기 | ✅ 완료 (16e95ed) |
| 2 | image-sepia | 이미지 세피아 필터 | ✅ 완료 (16e95ed) |
| 3 | image-crop | 이미지 크롭(자르기) 도구 | ✅ 완료 (657a4f8) |
| 4 | image-border-frame | 이미지 테두리(프레임) 추가기 | ✅ 완료 (55d7c45) |
| 5 | image-mosaic-blur | 이미지 모자이크·블러 처리기 | ✅ 완료 (5601afe) |
| 6 | image-collage-maker | 이미지 콜라주 메이커(그리드) | ✅ 완료 (f0de069) |
| 7 | image-rounded-corners | 이미지 둥근 모서리 처리기 | ✅ 완료 (55d7c45) |
| 8 | image-text-watermark | 이미지 텍스트 워터마크 추가기 | ✅ 완료 (657a4f8) |
| 9 | image-color-palette | 이미지 색상 추출기(팔레트) | ✅ 완료 (62a83fd) |
| 10 | image-negative-filter | 이미지 네거티브(색 반전) 필터 | ✅ 완료 (16e95ed) |
| 11 | image-vignette | 이미지 비네트 효과 필터 | ✅ 완료 (75d19d0) |
| 12 | image-meme-maker | 캡션·밈 메이커 | ✅ 완료 (f0de069) |
| 13 | image-square-thumbnail | 정사각형 썸네일 생성기(SNS용) | ✅ 완료 (75d19d0) |
| 14 | image-base64-converter | 이미지 ↔ Base64 변환기 | ✅ 완료 (62a83fd) |
| 15 | image-to-gif | 여러 이미지 → GIF 생성기 | ✅ 완료 (7df235e) |
| 16 | image-brightness-contrast | 이미지 밝기·대비 조정기 | ✅ 완료 (5601afe) |
| 17 | image-sharpen | 이미지 선명도(샤픈) 필터 | ✅ 완료 (cd87143) |
| 18 | image-dpi-info | 이미지 해상도·DPI 정보 확인기 | ✅ 완료 (c68f76b) |
| 19 | image-size-compare | 압축 전후 파일 크기 비교기 | ✅ 완료 (c68f76b) |
| 20 | image-zip-download | 여러 변환 결과 ZIP 다운로드기 | ✅ 완료 (7df235e) |
| 21 | image-noise-filter | 이미지 노이즈(그레인) 필터 | ✅ 완료 (cd87143) |
| 22 | image-pixelate | 이미지 픽셀화(모자이크 아트) 필터 | ✅ 완료 (6f63157) |
| 23 | image-duotone | 이미지 듀오톤(2색) 필터 | ✅ 완료 (6f63157) |
| 24 | image-exif-strip | 이미지 메타데이터(EXIF) 제거기 | ✅ 완료 (16e95ed) |
| 25 | image-color-picker | 이미지 색상 추출기(스포이드, 클릭 지점 HEX 확인) |

## 2. document-pdf (25개 신규) — ⏳ 진행 중 (24/25 완료, 30개 목표로 1개 추가)

| # | slug | 도구명 |
|---|---|---|
| 1 | markdown-to-pdf | 마크다운 → PDF 변환기 | ✅ 완료 (e6236dc) |
| 2 | images-to-pdf | 이미지 → PDF 변환기(여러 장) | ✅ 완료 (e6236dc) |
| 3 | pdf-compress | PDF 압축기 | ✅ 완료 (2844746) |
| 4 | pdf-watermark | PDF 워터마크 추가기 | ✅ 완료 (2844746) |
| 5 | pdf-metadata-editor | PDF 메타데이터(제목·작성자) 편집기 | ✅ 완료 (2844746) |
| 6 | pdf-delete-pages | PDF 페이지 삭제기 | ✅ 완료 (255813e) |
| 7 | pdf-reorder-pages | PDF 페이지 순서 변경기 | ✅ 완료 (a9827af) |
| 8 | pdf-rotate-pages | PDF 페이지 회전기 | ✅ 완료 (255813e) |
| 9 | pdf-extract-text | PDF 텍스트 추출기 | ✅ 완료 (a9827af) |
| 10 | csv-to-pdf | CSV → PDF 표 변환기 | ✅ 완료 (2844746) |
| 11 | invoice-pdf-maker | 견적서·인보이스 PDF 생성기 | ✅ 완료 (d7347bf) |
| 12 | business-card-pdf | 명함 PDF 생성기 | ✅ 완료 (d7347bf) |
| 13 | pdf-page-size-converter | PDF 용지 크기 변환기(A4↔Letter) | ✅ 완료 (d7347bf) |
| 14 | pdf-grayscale | PDF 흑백 변환기 | ✅ 완료 (d7347bf) |
| 15 | pdf-bookmark-adder | PDF 북마크(목차) 추가기 | ✅ 완료 (67f8d48) |
| 16 | pdf-thumbnail-extract | PDF 표지 썸네일 추출기 | ✅ 완료 (67f8d48) |
| 17 | pdf-signature-insert | PDF 서명 이미지 삽입기 | ✅ 완료 (9f357cd) |
| 18 | pdf-page-count | PDF 페이지 수·용량 정보 확인기 | ✅ 완료 (9f357cd) |
| 19 | pdf-to-text-file | PDF → 텍스트 파일(.txt) 변환기 | ✅ 완료 (a5b955e) |
| 20 | pdf-duplicate-page | PDF 특정 페이지 복제기 | ✅ 완료 (a5b955e) |
| 21 | pdf-blank-page-insert | PDF 빈 페이지 삽입기 | ✅ 완료 (18134fd) |
| 22 | pdf-combine-preview | 여러 PDF 미리보기 한 번에 합치기 | ✅ 완료 (18134fd) |
| 23 | pdf-form-fill | PDF 양식(Form) 필드 채우기 도구 | ✅ 완료 (e15c739) |
| 24 | pdf-password-protect | PDF 비밀번호 설정기 | ✅ 완료 (e15c739) |
| 25 | pdf-redact | PDF 민감정보 가리기(검열/블랙박스 처리) |

## 3. utility (24개 신규) — ✅ 완료 (24/24)

| # | slug | 도구명 |
|---|---|---|
| 1 | sns-character-counter | SNS 글자수 제한 체커 |
| 2 | password-strength-checker | 비밀번호 강도 체커 |
| 3 | qr-code-scanner | QR코드 스캐너(이미지 업로드) |
| 4 | timer-stopwatch | 타이머·스톱워치 |
| 5 | pomodoro-timer | 뽀모도로 타이머 |
| 6 | world-time-converter | 세계 시간대 변환기 |
| 7 | date-diff-calculator | 날짜 계산기(D-day, 두 날짜 사이 일수) |
| 8 | weekday-finder | 요일 계산기(특정 날짜) |
| 9 | roman-numeral-converter | 로마 숫자 변환기 |
| 10 | name-initials-generator | 이름 이니셜 생성기 |
| 11 | random-team-divider | 랜덤 팀 나누기 |
| 12 | simple-checklist-maker | 체크리스트 메이커 |
| 13 | utf8-byte-counter | UTF-8 바이트 수 계산기 |
| 14 | emoji-finder | 이모지 검색기 |
| 15 | special-characters-list | 특수문자 모음(복사용) |
| 16 | keyboard-shortcuts-reference | 키보드 단축키 참조표(OS별) |
| 17 | color-name-converter | 색상 이름 ↔ HEX 변환기 |
| 18 | duplicate-line-remover | 텍스트 중복 줄 제거기 |
| 19 | clipboard-history-viewer | 클립보드 히스토리 뷰어(세션 내) |
| 20 | random-number-generator | 범용 랜덤 숫자·문자열 생성기 |
| 21 | text-sorter | 텍스트 줄 정렬기(가나다/숫자순) |
| 22 | whitespace-remover | 공백·줄바꿈 정리기 |
| 23 | find-and-replace | 텍스트 찾기·바꾸기 도구 |
| 24 | percentage-calculator | 퍼센트(%) 계산기(비율·증감률·전체값 역산) |

## 4. fun-entertainment (20개 신규) — ✅ 완료 (20/20)

| # | slug | 도구명 |
|---|---|---|
| 1 | name-fortune | 이름 획수로 보는 운세 |
| 2 | birthday-personality | 생일로 보는 성격 유형 |
| 3 | mbti-simple-test | MBTI 간이 테스트 |
| 4 | color-of-the-day | 오늘의 색깔 운세 |
| 5 | lucky-number-generator | 행운의 숫자 생성기 |
| 6 | couple-name-compatibility | 커플 이름 궁합 점수 |
| 7 | movie-recommendation-roulette | 영화 추천 룰렛 |
| 8 | book-recommendation-roulette | 책 추천 룰렛 |
| 9 | daily-quote-generator | 오늘의 명언 생성기 |
| 10 | truth-game-questions | 진실게임 질문 룰렛 |
| 11 | role-assignment-roulette | 역할 분담 룰렛(팀 과제용) |
| 12 | birthday-compatibility | 생일 궁합 계산기 |
| 13 | chinese-zodiac-fortune | 띠 운세(간지) |
| 14 | daily-affirmation-generator | 오늘의 다짐 생성기 |
| 15 | travel-destination-roulette | 여행지 추천 룰렛 |
| 16 | number-baseball-game | 숫자 야구(업다운) 게임 |
| 17 | rock-paper-scissors | 가위바위보 vs 컴퓨터 |
| 18 | last-digit-fortune | 끝자리 숫자로 보는 오늘의 운세 |
| 19 | would-you-rather | 이럴 때 당신의 선택은(밸런스게임 변형, 상황 질문형) |
| 20 | dice-roller | 주사위 굴리기(1~6개 동시 굴림) |

## 5. dev-it (19개 신규) — ✅ 완료 (19/19)

| # | slug | 도구명 |
|---|---|---|
| 1 | regex-tester | 정규식(Regex) 테스터 |
| 2 | css-gradient-generator | CSS 그라디언트 생성기 |
| 3 | css-box-shadow-generator | CSS Box Shadow 생성기 |
| 4 | css-flexbox-generator | CSS Flexbox 생성기 |
| 5 | markdown-preview | 마크다운 실시간 미리보기 |
| 6 | lorem-ipsum-generator | Lorem Ipsum(가짜 텍스트) 생성기 |
| 7 | contrast-checker | WCAG 색상 대비 접근성 체커 |
| 8 | svg-to-png | SVG → PNG 변환기 |
| 9 | jwt-generator | JWT 생성기 |
| 10 | html-entity-converter | HTML 엔티티 인코더·디코더 |
| 11 | slug-generator | URL Slug 생성기 |
| 12 | subnet-calculator | IP 서브넷 계산기 |
| 13 | base-converter | 진법(2/8/10/16진수) 변환기 |
| 14 | morse-code-converter | 모스 부호 변환기 |
| 15 | mock-data-generator | 가짜 사용자 데이터(목 데이터) 생성기 |
| 16 | code-diff-checker | 코드 Diff 체커 |
| 17 | http-status-reference | HTTP 상태 코드 참조표 |
| 18 | css-unit-converter | CSS 단위 변환기(px↔rem↔em) |
| 19 | css-animation-generator | CSS 애니메이션(keyframes) 생성기 |

## 6. finance (17개 신규) — ✅ 완료 (17/17)

| # | slug | 도구명 |
|---|---|---|
| 1 | savings-maturity-calculator | 적금 만기 수령액 계산기 |
| 2 | severance-pay-calculator | 퇴직금 계산기 |
| 3 | stock-profit-calculator | 주식 손익 계산기 |
| 4 | dividend-yield-calculator | 배당수익률 계산기 |
| 5 | lease-insurance-calculator | 전세 보증보험료 계산기 |
| 6 | realty-commission-calculator | 부동산 중개수수료 계산기 |
| 7 | gift-tax-estimator | 증여세 간이 계산기 |
| 8 | capital-gains-tax-estimator | 양도소득세 간이 계산기 |
| 9 | emergency-fund-goal | 비상금 목표 계산기 |
| 10 | savings-goal-reverse-calculator | 목표 저축액 역산 계산기 |
| 11 | installment-vs-lumpsum | 할부 vs 일시불 비교기 |
| 12 | year-end-tax-refund-estimator | 연말정산 환급액 간이 계산기 |
| 13 | car-insurance-estimator | 자동차 보험료 추정기 |
| 14 | credit-score-checklist | 신용점수 올리기 체크리스트 |
| 15 | salary-raise-calculator | 연봉 인상률 계산기 |
| 16 | currency-exchange-fee-compare | 환전 수수료 비교기 |
| 17 | break-even-point-calculator | 손익분기점(BEP) 계산기 |

## 7. life-health (9개 신규) — ✅ 완료 (9/9)

| # | slug | 도구명 |
|---|---|---|
| 1 | weight-loss-goal-calculator | 목표체중 감량 계산기 |
| 2 | sleep-cycle-calculator | 수면 시간 계산기(90분 사이클) |
| 3 | water-intake-calculator | 물 섭취량 계산기 |
| 4 | exercise-calorie-calculator | 운동 칼로리 소모량 계산기(MET 기반) |
| 5 | pregnancy-week-calculator | 임신 주수 계산기 |
| 6 | quit-smoking-savings | 금연·금주 절약 금액 계산기 |
| 7 | body-fat-estimator | 체지방률 추정 계산기(둘레 기반) |
| 8 | caffeine-intake-tracker | 카페인 섭취량 트래커 |
| 9 | heart-rate-zone-calculator | 목표 심박수 구간 계산기(운동 강도별) |

---

## 📁 참고

- 신규 도구 구현 시 기존 23개 항목과 동일한 RSC-safe 3파일 구조, 4개 언어 지원 패턴을 따릅니다.
- `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`와 같은 별도 상세 스펙 파일은 만들지 않습니다 — 각 도구는 위 표의 이름만으로 충분히 구현 가능한 단순 도구들입니다 (복잡한 공식이 필요한 항목은 구현 시 Claude가 직접 설계).

### 5-2. 버그 수정 지시서 — 2026-10-16판 (대체/완료됨)

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

### 5-3. 버그 수정 지시서 상세 아카이브 — 2026-10-16판

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

### 5-4. 버그 수정 지시서 — 2026-10-24판 (완료됨)

# LifeHub 작업 지시서 (로컬 LLM 작업용) — 현재 작업 버전 (2026-10-24 재작성)
작성일: 2026-10-24 (Claude Cowork가 "전체 기능 구현"을 목표로 세분화 재작성) / 2026-10-29: 로컬 LLM이 B-1 완료 후 5일간 중단되어, Claude Cowork가 B-2부터 직접 인수해 진행합니다.

**✅ 2026-10-29: Claude Cowork가 인수한 B-2~E-4까지 전체 23개 작업 단위를 모두 완료하여, 이 작업 지시서의 24개 작업(A 포함)이 전부 완료되었습니다.**

**⚠ 이 파일은 "지금 상태 + 바로 다음 작업 1개"만 담은 짧은 버전입니다.**
**아직 시작 전인 항목의 전체 상세 설명(공식/입력필드/파일구조 포함)은 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`에 있습니다. 그 항목을 시작할 차례가 되기 전까지는 열지 마세요. 매 턴 이 파일(짧은 버전)만 참고하면 됩니다.**

**과거 작업(2026-10-16 ~ 2026-10-24, 타이틀 중복 수정/치명적 버그 9개/다국어 3종/신뢰성 7건/콘텐츠 품질 전수 수정)은 전부 완료되었습니다.** 상세는 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-16.md` 참고(과거 기록이므로 열 필요 없음).

## 📊 전체 진행 상황 요약 (2026-10-24 기준)

| 구분 | 항목 | 상태 | 비고 |
|------|------|------|------|
| 과거 1~5단계 | 타이틀중복/치명적버그9개/다국어3종/신뢰성7건/콘텐츠품질 | ✅ 완료 | 상세는 ARCHIVE_2026-10-16.md |
| **A** | tdee 활동량 드롭다운 라벨 버그 수정 | ✅ 완료 | 99127e1 커밋 (ja sedentary 번역 수정 포함) |
| **B-1** | saju-pool 구현 | ✅ 완료 | 87a2cf2 커밋, Claude Cowork가 설계 공식 그대로 구현됨(검증됨) |
| **B-2** | tojung-fortune 구현 | ✅ 완료 | 7301608 커밋 (Claude Cowork) |
| **B-3** | compatibility 구현 | ✅ 완료 | 09604b7 커밋 (Claude Cowork) |
| **C-4** | 팁 계산기 | ✅ 완료 | 06ce2d1 커밋 (Claude Cowork) |
| **C-1** | DTI 계산기 | ✅ 완료 | b2ee8be 커밋 (Claude Cowork) |
| **C-2** | 부가세 계산기 | ✅ 완료 | 64ce99d 커밋 (Claude Cowork) |
| **C-3** | 연비·주유비 계산기 | ✅ 완료 | a321a64 커밋 (Claude Cowork) |
| **C-5** | 보증금·월세 상호 환산기 | ✅ 완료 | bd5b2b6 커밋 (Claude Cowork) |
| **C-6** | 복리 계산기 | ✅ 완료 | a63c32d 커밋 (Claude Cowork) |
| **C-7** | 자동차 할부금 계산기 | ✅ 완료 | 0b4a8da 커밋 (Claude Cowork) |
| **C-8** | 신용카드 할부 수수료 계산기 | ✅ 완료 | 13282f1 커밋 (Claude Cowork) |
| **C-9** | 대출 원리금 상환 스케줄표 | ✅ 완료 | af2d0e6 커밋 (Claude Cowork) |
| **C-10** | 급여 실수령액 계산기 | ✅ 완료 | 070ef7d 커밋 (Claude Cowork, 2026년 요율 웹서치 반영) |
| **C-11** | 은퇴자금 시뮬레이터 | ✅ 완료 | 833e255 커밋 (Claude Cowork) — **C단계 전체 완료** |
| **D-1** | 비밀번호 생성기 | ✅ 완료 | 918d07f 커밋 (Claude Cowork) |
| **D-2** | QR코드 생성기 | ✅ 완료 | 6356e72 커밋 (Claude Cowork, qrcode 패키지 설치) |
| **D-3** | 해시 생성기 | ✅ 완료 | 93f62ca 커밋 (Claude Cowork) |
| **D-4** | Cron 표현식 생성·검증기 | ✅ 완료 | b580fb9 커밋 (Claude Cowork, cron-parser 패키지 설치) |
| **D-5** | JWT 디코더 | ✅ 완료 | 6e6aaa3 커밋 (Claude Cowork) — **D단계 전체 완료** |
| **E-1** | 랜덤 추첨기 | ✅ 완료 | f20b8fa 커밋 (Claude Cowork) |
| **E-2** | 사다리타기 | ✅ 완료 | 8b35a8c 커밋 (Claude Cowork) |
| **E-3** | 밸런스 게임 | ✅ 완료 | b9a5b55 커밋 (Claude Cowork) |
| **E-4** | 오늘의 타로 카드 | ✅ 완료 | 46db14d 커밋 (Claude Cowork) — **E단계 전체 완료, 24개 작업 전부 완료** |

**총 24개 작업 단위 (A, B-1 완료 — 2026-10-29 Claude Cowork 인수 진행). 순서: A → B-1 → B-2 → B-3 → C-4 → C-1 → C-2 → C-3 → C-5 → C-6 → C-7 → C-8 → C-9 → C-10 → C-11 → D-1 → D-2 → D-3 → D-4 → D-5 → E-1 → E-2 → E-3 → E-4**
(난이도 낮은 순. 이 순서를 반드시 지키지 않아도 되지만, 권장 순서입니다.)

**⚠ 매우 중요 — 반드시 지킬 것**: **항목 하나(A, B-1, B-2, ... 각각)가 끝날 때마다 반드시 커밋 + CHANGELOG 기록 + 터미널 `/clear`.** 여러 항목을 한 세션에 몰아서 하지 마세요. 하나의 큰 맥락으로 이어지면 오토컴팩트 쓰래싱 및 API 오류가 발생합니다. `/clear` 뒤에 다음 항목을 시작할 때, 이 파일(`BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md`)을 먼저 읽고, 그 항목의 상세 스펙은 `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`에서 해당 섹션 제목(`### A.`, `### B-1.` 등)으로 찾아 **그 섹션만** 읽으세요. 파일 전체를 읽지 마세요.

---

## ✅ 완료됨 — A. tdee 활동량 드롭다운 라벨 버그 수정 (참고용, 더 이상 읽을 필요 없음)

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

---

## ✅ 2026-10-29 최종 확인 (사용자)

- 사용자가 오늘의 타로 카드, 밸런스 게임 등 신규 도구를 로컬에서 직접 테스트하여 정상 동작을 확인했습니다.
- 현재 lifehub는 도메인 미구매, Vercel 미등록 상태로 전적으로 로컬 개발 단계입니다. 배포는 아직 진행하지 않았습니다.
- 전체 프로젝트 로드맵(`PROJECT_PLAN.md`) 대비 구현 현황을 점검한 결과, 기획안의 7개 카테고리(life-health/finance/fun-entertainment/image-media/document-pdf/dev-it/utility) 전부 최소 목표 도구 수를 채워 총 71개 도구가 구현되어 있습니다.
- 남은 미구현 항목: life-health 티어3(외부 API 필요 6종, 보류), GA4+Consent Mode v2 미이식, 애드센스 신청 전략(몇 개로 먼저 신청할지) 미확정. 상세는 Claude 프로젝트 문서 `claude/lifehub-bugfix-tasklist-24-items-complete-2026-10-29.md` 참고.

### 5-5. 버그 수정 지시서 상세 아카이브 — 2026-10-24판

# LifeHub 작업 지시서 — 상세 아카이브 (2026-10-24)

이 파일은 `BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md`에서 참조하는 24개 항목(A~E)의 전체 상세 스펙입니다. **지금 작업할 항목의 섹션만 찾아서 읽으세요. 전체를 읽지 마세요.**

항목 A(tdee 버그)의 상세는 메인 파일에 이미 전부 들어있으므로 여기 없습니다.

---

## B-1. saju-pool(사주팔자) 구현

**파일 위치**: `src/app/[locale]/tool/saju-pool/`
**현재 상태**: `page.tsx`에 입력폼/버튼/계산 로직이 전혀 없는 플레이스홀더(`SajuCalculator` 컴포넌트가 안내 문구만 표시)만 있음. 기존 패턴(`data.ts`+`XxxClient.tsx`+`page.tsx`)으로 구조 분리 필요.

**Claude Cowork가 설계·검증 완료한 사주 계산 알고리즘** (전통 명리학 공식 기반, 음력/절기 정밀 계산 대신 **양력 기준 근사 공식** 사용 — 이는 간이 버전임을 결과 화면에 반드시 명시할 것):

```ts
const stems = ["갑(甲)","을(乙)","병(丙)","정(丁)","무(戊)","기(己)","경(庚)","신(辛)","임(壬)","계(癸)"];
const branches = ["자(子)","축(丑)","인(寅)","묘(卯)","진(辰)","사(巳)","오(午)","미(未)","신(申)","유(酉)","술(戌)","해(亥)"];
const elements = ["목(木)","화(火)","토(土)","금(金)","수(水)"];
const branchElementIdx = [4,2,0,0,2,1,1,2,3,3,2,4]; // 자축인묘진사오미신유술해 순서

// 1) 연주(年柱)
const yearStemIdx = ((year - 4) % 10 + 10) % 10;
const yearBranchIdx = ((year - 4) % 12 + 12) % 12;

// 2) 월주(月柱) — 절기 근사: 매월 4~8일경 절기가 바뀌므로, 해당 월 4일 이전 출생이면 전월 지지를 사용하는 근사 처리
//    (정밀 절기 계산은 생략하고 "달+일 4일 기준 근사"임을 결과에 명시)
function getMonthBranchIdx(month: number, day: number): number {
  // 인(2)월부터 시작: 1월=축(1), 2월=인(2), ... 12월=자(0)
  const table = [1,2,3,4,5,6,7,8,9,10,11,0]; // index 0=1월 ... 11=12월
  let idx = table[month - 1];
  if (day < 4) {
    // 절기 경계 이전이면 전월 지지로 보정
    idx = (idx - 1 + 12) % 12;
  }
  return idx;
}
const monthBranchIdx = getMonthBranchIdx(month, day);

// 월간(月干) — 오호둔(五虎遁) 규칙: 연간에 따라 "인(寅)월"의 월간이 정해지고, 거기서부터 순서대로 이어짐
const yinMonthStemTable = [2,4,6,8,0]; // 연간 index%5 → 인월의 월간 index (갑/기=2병, 을/경=4무... 아래 참고)
// 정확한 매핑: 갑·기년→인월=병(2), 을·경년→인월=무(4), 병·신년→인월=경(6), 정·임년→인월=임(8), 무·계년→인월=갑(0)
const monthSeq = (monthBranchIdx - 2 + 12) % 12; // 인(2)월을 기준(0)으로 한 순서
const monthStemIdx = (yinMonthStemTable[yearStemIdx % 5] + monthSeq) % 10;

// 3) 일주(日柱) — 율리우스일(JDN) 기반, 1900-01-31=갑자(甲子) 기준으로 보정
function jdn(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12);
  const y2 = y + 4800 - a;
  const m2 = m + 12 * a - 3;
  return d + Math.floor((153 * m2 + 2) / 5) + 365 * y2 + Math.floor(y2 / 4) - Math.floor(y2 / 100) + Math.floor(y2 / 400) - 32045;
}
const REF_OFFSET = 9; // jdn(1900,1,31)=2415051 기준으로 역산한 보정값 (갑자=index 0,0)
const j = jdn(year, month, day);
const dayStemIdx = ((j + REF_OFFSET) % 10 + 10) % 10;
const dayBranchIdx = ((j + REF_OFFSET) % 12 + 12) % 12;
// 검증됨: 1900-01-31→갑자, +1일→을축, +10일→갑술, +60일→갑자(60갑자 순환 확인), 2024-02-10→갑자

// 4) 시주(時柱) — 오자둔(五子遁) 규칙: 일간에 따라 "자시(子時)"의 시간이 정해지고, 거기서부터 순서대로 이어짐
//    자시=23:00~01:00 시작 기준 12지지 매핑
function getHourBranchIdx(hour: number): number {
  return Math.floor((hour + 1) / 2) % 12; // 23,0→자(0), 1~2→축(1), 3~4→인(2) ...
}
const hourBranchIdx = getHourBranchIdx(hour);
const ziHourStemTable = [0,2,4,6,8]; // 일간 index%5 → 자시의 시간(時干) index (갑·기일=갑, 을·경일=병, 병·신일=무, 정·임일=경, 무·계일=임)
const hourStemIdx = (ziHourStemTable[dayStemIdx % 5] + hourBranchIdx) % 10;
```

**오행(五行) 상생/상극 참고** (B-3 궁합에서도 재사용):
- 상생(생성): 목생화 → 화생토 → 토생금 → 금생수 → 수생목 (순환)
- 상극(극복): 목극토, 토극수, 수극화, 화극금, 금극목

**입력 필드**: 생년월일(YYYY-MM-DD), 출생시간(선택, 모르면 "시간 모름" 체크박스 — 체크 시 시주는 "미상"으로 표시하고 연/월/일주만 계산), 성별(선택, 결과 문구 톤에만 사용 — 필수 아님).

**출력**: 연주/월주/일주/(시주, 있으면) 각각 "천간+지지" 한자 병기 표시(예: "갑자(甲子)") + 각 기둥의 오행 아이콘/색상 표시 + 일간(日干) 기준 오행 성향 간단 설명(예: "일간이 목(木)이시군요 — 성장과 확장을 중시하는 성향" 수준의 일반론적 문구, 4개 언어로 작성).

**⚠ 필수 면책 문구**: "본 계산은 양력 기준 근사 공식을 사용한 간이 버전으로, 정밀한 절기·음력 환산을 반영한 정통 만세력과 다를 수 있습니다. 참고용으로만 활용하세요." — 4개 언어(ko/en/ja/es)로 작성해 결과 화면 하단에 노출.

**다국어**: 60갑자 명칭(갑자, 을축 등)과 오행 명칭은 ko 외 언어에서도 한자 병기 그대로 사용(국제적으로 통용되는 방식). 설명 문구/라벨/면책조항은 4개 언어 전부 번역.

**파일 구성**: `data.ts`(stems/branches/elements 배열 + 4개 언어 UI라벨/FAQ/면책문구) + `SajuPoolClient.tsx`(위 계산 로직 + 입력폼 + 결과 UI) + `page.tsx`(generateMetadata).

**완료 후**: `npx tsc --noEmit` → `next build` → `npm run dev`로 4개 로케일 직접 날짜 2~3개 입력해 결과가 그리는지 확인 → `categoryToolsMap`/`sitemap.ts` 등록 확인(이미 saju-pool은 등록되어 있을 가능성 높음, 중복 등록하지 않도록 먼저 확인) → git add(명시적 경로) → 커밋("B-1. saju-pool 구현") → CHANGELOG 기록 → `/clear`.

---

## B-2. tojung-fortune(토정비결) 구현

**파일 위치**: `src/app/[locale]/tool/tojung-fortune/` — 현재 `page.tsx`만 있고 서버 컴포넌트로 FAQ 설명 텍스트만 렌더링, 계산기 컴포넌트 자체가 없음.

**설계 방향(Claude Cowork 설계, 간이 버전 — 정통 토정비결 64괘 원문 대신 결정론적 텍스트풀 방식)**:
기존 `daily-fortune`/`fortune-cookie` 도구와 동일한 패턴(생일 기반 시드 → 고정 텍스트풀에서 결정론적 선택)을 사용합니다.

1. B-1에서 만든 일주(日柱) 계산 로직을 재사용해 생년월일로부터 **일간(日干)의 오행**(목/화/토/금/수)을 구합니다.
2. 추가로 `(year + month + day) % 12`로 "올해의 기운 지수"(0~11)를 구해, 오행(5) × 기운지수(12) = 60가지 조합 중 하나를 결정합니다.
3. 60가지 조합 각각에 대해 미리 작성한 운세 문구 풀(총운/재물운/애정운/건강운 4줄, 2026년 기준 "올해의 운세" 컨셉)을 `data.ts`에 4개 언어로 미리 작성해둡니다(60개 × 4줄 × 4개 언어 — 분량이 크므로, 오행 5종 × 기운지수 12종을 완전히 독립적으로 작성하지 않고, "오행별 기본 문구 템플릿 5종" + "기운지수별 수식어 12종"을 조합하는 방식으로 분량을 줄여도 됩니다. 예: "{오행 템플릿} 올해는 {기운지수 수식어}한 해가 되겠습니다." 형태로 조합).

**입력 필드**: 생년월일(YYYY-MM-DD). 시간 불필요(연주/일주만 사용).

**출력**: 오행 아이콘 + "2026년 토정비결풍 운세" 타이틀 + 총운/재물운/애정운/건강운 4개 영역 문구.

**⚠ 필수 면책 문구**: "본 콘텐츠는 전통 토정비결 원문이 아닌, 생년월일 기반의 간이 재미용 콘텐츠입니다. 참고용으로만 활용하세요." — 4개 언어로 작성.

**파일 구성**: `data.ts`(오행 템플릿 5종 + 수식어 12종 + UI라벨, 4개 언어) + `TojungFortuneClient.tsx`(계산 로직 + 입력폼 + 결과) + `page.tsx`.

**완료 후**: B-1과 동일한 검증 절차 → 커밋("B-2. tojung-fortune 구현") → CHANGELOG → `/clear`.

---

## B-3. compatibility(궁합) 구현

**파일 위치**: `src/app/[locale]/tool/compatibility/` — 현재 서버 컴포넌트로 FAQ만 렌더링, 계산기 없음.

**설계 방향(Claude Cowork 설계)**: B-1의 일주(日柱) 계산 로직을 재사용해 두 사람 각각의 **일간 오행**을 구하고, 오행 상생/상극 관계로 궁합 등급을 판정합니다.

```ts
// elementsOf(person) → 0~4 (목화토금수)
function compatibilityTier(elemA: number, elemB: number): "최고" | "좋음" | "보통" | "주의" {
  if (elemA === elemB) return "보통"; // 같은 오행: 비슷한 성향, 무난
  const generates = (a: number, b: number) => (a + 1) % 5 === b; // a가 b를 생함 (목생화: 0→1)
  if (generates(elemA, elemB) || generates(elemB, elemA)) return "최고"; // 상생 관계
  const overcomes = (a: number, b: number) => (a + 2) % 5 === b; // a가 b를 극함 (목극토: 0→2)
  if (overcomes(elemA, elemB) || overcomes(elemB, elemA)) return "주의"; // 상극 관계
  return "좋음"; // 나머지(상생도 상극도 아닌 조합 — 실제로는 5개 오행 순환에서 상생/상극이 전부를 커버하므로 이 분기는 이론상 도달 안 함, 안전장치로만 둠)
}
```
오행 순환 순서를 `elements = ["목","화","토","금","수"]`(인덱스 0~4)로 고정하면, `(a+1)%5===b`가 상생(a가 b를 생함), `(a+2)%5===b`가 상극(a가 b를 극함)이 정확히 성립합니다(목생화·화생토·토생금·금생수·수생목 / 목극토·토극수·수극화·화극금·금극목).

**입력 필드**: 두 사람 각각의 생년월일(YYYY-MM-DD) — 이름(선택, 결과 문구에 표시용).

**출력**: 두 사람의 일주(일간+오행) 각각 표시 + 궁합 등급(최고/좋음/보통/주의, 색상 구분) + 등급별 설명 문구(4개 언어, 등급 4종 × 2방향(같은오행 포함 시 5가지 케이스) 정도로 미리 작성).

**⚠ 필수 면책 문구**: B-1과 동일한 톤으로 "간이 버전, 참고용" 명시.

**파일 구성**: `data.ts`(등급별 설명 문구 + UI라벨, 4개 언어) + `CompatibilityClient.tsx`(두 명 입력폼 + 계산 로직 + 결과) + `page.tsx`.

**완료 후**: 동일한 검증 절차 → 커밋("B-3. compatibility 구현") → CHANGELOG → `/clear`.

---
## C. 신규 재무(finance) 도구 11종 — 공통 안내

11개 전부 `src/app/[locale]/tool/<slug>/` 신규 폴더, 기존 패턴(`data.ts`+`<Name>Client.tsx`+`page.tsx`) 그대로 적용. 전부 클라이언트(브라우저) 전용 계산, 서버 전송 없음 — 각 페이지에 "서버로 전송하지 않습니다" 신뢰 문구 1줄 포함(기존 다른 계산기 도구들과 동일 패턴). 완료마다 `categoryToolsMap`의 `finance` 배열 + `sitemap.ts`의 `TOOL_IDS`에 추가 필수.

---

## C-4. 팁 계산기 (tip-calculator) — 권장 1순위 (가장 간단)

- **입력**: 금액(소수 입력), 팁 비율(%, 프리셋 10/15/18/20% 버튼 + 직접입력), 인원수(1명 이상, 더치페이용).
- **공식**: 팁액=금액×비율/100, 총액=금액+팁액, 인당금액=총액/인원수.
- **출력**: 팁액/총액/인당금액 3줄.
- slug: `tip-calculator`.

## C-1. DTI(부채상환비율) 계산기 (dti-calculator)

- **입력**: 월소득(숫자), 월부채상환총액(숫자, 1칸).
- **공식**: DTI = (월부채상환총액 / 월소득) × 100.
- **출력**: DTI%, 참고용 구간 설명(일반적으로 36% 이하 양호, 36~43% 주의, 43% 초과 위험 — 공식 기준이 아닌 일반론임을 명시).
- slug: `dti-calculator`.

## C-2. 부가세 순↔총 변환기 (vat-calculator)

- **입력**: 금액, 기준(세전/세포함 토글), 세율%(직접입력, 기본값 10% — 한국 부가세 기준, 국가별로 다를 수 있음을 안내문에 명시).
- **공식**: 세전→세포함: 세액=세전×세율/100, 세포함금액=세전+세액. 세포함→세전: 세전=세포함/(1+세율/100), 세액=세포함-세전.
- **출력**: 세전금액/세액/세포함금액 3줄.
- slug: `vat-calculator`.

## C-3. 연비·주유비 계산기 (fuel-cost-calculator)

- **입력**: 주행거리, 연료사용량(또는 연비 직접입력 중 택1 — 탭으로 구분), 연비표기법(km/L, L/100km, mpg 중 선택), 연료단가(원/L 또는 통화), 왕복여부(체크박스, 체크시 거리×2), 탑승인원(더치페이용, 선택).
- **공식**: 연비=거리/연료사용량(km/L 기준, 다른 표기법은 환산 공식 적용: L/100km = 100/(km/L), mpg ≈ km/L × 2.352). 주유비=연료사용량×연료단가. 1인당=주유비/인원수.
- **출력**: 연비(선택한 표기법), 총 주유비, 1인당 비용(인원 입력시).
- slug: `fuel-cost-calculator`.

## C-5. 보증금·월세 상호 환산기 (deposit-rent-converter)

- **입력**: 변환 방향(보증금↔월세 토글), 현재 보증금, 현재 월세, 전환율%(한국 기준 연 5.5~6% 선, 직접입력 가능, 기본값 5.5%).
- **공식**: 월세를 보증금으로 전환: 추가보증금 = 월세×12/전환율×100. 보증금을 월세로 전환: 월세증가분 = 보증금감소분×전환율/100/12.
- **출력**: 환산 후 보증금/월세 조합.
- slug: `deposit-rent-converter`.

## C-6. 복리 계산기 (compound-interest-calculator)

- **입력**: 원금, 연이율%, 복리 빈도(연1회/월1회/일1회 선택), 투자기간(년).
- **공식**: 최종금액 = 원금×(1+연이율/100/n)^(n×기간), n=복리빈도(1/12/365).
- **출력**: 최종금액, 총 이자(최종금액-원금).
- slug: `compound-interest-calculator`.

## C-7. 자동차 할부금 계산기 (car-loan-calculator)

- **입력**: 차량가격, 선수금(계약금), 연이율%, 할부기간(개월).
- **공식**: 대출원금=차량가격-선수금. 월이율r=연이율/100/12. 월납입금 = 대출원금×r×(1+r)^기간 / ((1+r)^기간-1). (r=0일 경우 월납입금=대출원금/기간으로 분기 처리.)
- **출력**: 월 납입금, 총 납입액(월납입금×기간+선수금), 총 이자.
- slug: `car-loan-calculator`.

## C-8. 신용카드 할부 수수료 계산기 (card-installment-calculator)

- **입력**: 결제금액, 할부개월수(2~24개월 선택), 월 수수료율%(카드사별로 다름, 직접입력 또는 프리셋 — 기본값 1.5%/월 정도로 안내, 실제 수수료는 카드사 확인 필요임을 면책).
- **공식**: 총 수수료 = 결제금액×월수수료율×할부개월수/100 (단순 선형 방식 — 실제 카드사는 매월 잔액 기준으로 계산하는 경우도 있어 "근사치"임을 면책 문구에 명시). 월 납입금 = (결제금액+총수수료)/할부개월수.
- **출력**: 월 납입금, 총 수수료, 총 납입액.
- slug: `card-installment-calculator`.

## C-9. 대출 원리금 상환 스케줄표 (loan-amortization-schedule)

- **입력**: 대출금액, 연이율%, 상환기간(개월), 상환방식(원리금균등/원금균등 선택).
- **공식(원리금균등)**: 월이율r=연이율/100/12. 월상환액 = 대출금액×r×(1+r)^기간/((1+r)^기간-1), 매월 동일. 각 회차의 이자=잔액×r, 원금=월상환액-이자, 잔액 차감.
- **공식(원금균등)**: 매월 원금 = 대출금액/기간(고정), 이자=잔액×r(매월 감소), 상환액=원금+이자.
- **출력**: 전체 요약(총상환액/총이자) + 회차별 스케줄 테이블(회차/납입액/원금/이자/잔액) — 테이블이 길 경우(기간이 길면) 스크롤 가능한 테이블로 전체 표시(최대 360개월=30년까지 지원, 가상 스크롤 불필요, 일반 HTML 테이블로 충분).
- slug: `loan-amortization-schedule`.

## C-10. 급여 실수령액 계산기 (salary-net-calculator) — 한국형 4대보험 정확 반영

- **입력**: 연봉(또는 월급, 토글), 비과세액(식대 등, 기본값 200,000원/월, 직접입력 가능), 부양가족수(본인 포함, 기본값 1명 — 소득세 간이세액표 근사용).
- **공식(2026년 기준 근사치 — 매년 바뀌는 보험률이므로 "작성 시점 기준 근사치" 면책 필수)**:
  - 월급여 = 연봉/12 (연봉 입력 시) 또는 직접 입력.
  - 과세대상금액 = 월급여 - 비과세액.
  - 국민연금 = 과세대상금액×4.5% (상한액 있음 — 2026년 기준 월 상한 약 277,000원 정도로 캡 처리, 정확한 상한액은 구현 시점에 검색해 최신값 사용).
  - 건강보험 = 과세대상금액×3.545% (2026년 근사치, 최신 고시율 확인).
  - 장기요양보험 = 건강보험×12.95% (건강보험료의 일정 비율, 최신 고시율 확인).
  - 고용보험 = 과세대상금액×0.9%.
  - 소득세는 간이세액표 전체를 구현하기 어려우므로, **근사 공식**(과세대상금액에 대한 간이 누진 구간표를 4~5단계로 단순화해 적용하거나, "소득세는 국세청 간이세액표 기준이며 부양가족수에 따라 달라집니다 — 본 계산기는 근사치입니다"를 면책으로 명시하고 단순 비례 근사(예: 과세대상금액의 3~5% 구간별) 사용 가능). 지방소득세 = 소득세×10%.
  - 실수령액 = 월급여 - (국민연금+건강보험+장기요양보험+고용보험+소득세+지방소득세).
- **출력**: 4대보험 각 항목 금액 + 소득세/지방소득세 + 공제총액 + 실수령액. 표 형태로 항목별 표시.
- **⚠ 정확한 최신 보험률(국민연금 상한액, 건강보험율, 장기요양보험율, 고용보험율)은 구현 시점에 웹검색으로 2026년 최신 고시 수치를 확인해 반영할 것** — 위 수치는 2025년 기준 근사치이므로 반드시 재확인 필요.
- **⚠ 필수 면책**: "실제 공제액은 회사의 급여 정책, 국세청 간이세액표, 최신 보험률에 따라 달라질 수 있습니다. 참고용 추정치입니다." 4개 언어로 작성.
- slug: `salary-net-calculator`.

## C-11. 은퇴자금 시뮬레이터 (간이 버전) (retirement-simulator)

**⚠ 주의**: firelic(FIRE 계산기) 프로젝트와 영역이 겹칠 수 있다는 우려가 있었으나, 사용자가 "그래도 lifehub에 간단 버전 추가"를 명시적으로 선택함. firelic과 차별화하기 위해 **인출 단계·몬테카를로 시뮬레이션 없이, 단순 적립 단계만** 계산하는 매우 간단한 버전으로 한정할 것 — firelic의 상세 FIRE 계산 기능과 중복되지 않도록 범위를 좁게 유지.

- **입력**: 현재 나이, 은퇴 목표 나이, 현재 자산, 월 적립액, 예상 연 수익률%, 예상 연 물가상승률%(실질 수익률 계산용).
- **공식**: 개월수 = (은퇴나이-현재나이)×12. 월수익률 = 연수익률/100/12. 미래가치 = 현재자산×(1+월수익률)^개월수 + 월적립액×(((1+월수익률)^개월수 - 1)/월수익률). 실질가치(물가반영) = 미래가치/(1+연물가상승률/100)^(은퇴나이-현재나이).
- **출력**: 은퇴 시점 예상 자산(명목가치), 물가반영 실질가치, 현재가치 대비 증가분.
- **⚠ 필수 면책**: "단순 적립 시뮬레이션이며, 은퇴 후 인출 단계·세금·수익률 변동성(몬테카를로)은 반영하지 않습니다. 더 정밀한 FIRE(경제적 자유) 계산이 필요하면 전용 FIRE 계산기를 이용하세요." 4개 언어로 작성 (firelic을 직접 링크/언급하지는 말 것 — 별도 도메인 프로젝트이므로).
- slug: `retirement-simulator`.

---
## D. 신규 dev-it 도구 5종 — 공통 안내

전부 `src/app/[locale]/tool/<slug>/` 신규 폴더, 기존 패턴 그대로. 전부 클라이언트 전용(Web Crypto API/브라우저 내장 기능만 사용, 외부 라이브러리 설치 불필요 — 설치가 꼭 필요하면 가벼운 것만, 예: QR코드는 `qrcode` npm 패키지 사용 가능). 완료마다 `categoryToolsMap`의 `dev-it` 배열 + `sitemap.ts` 등록 필수.

---

## D-1. 비밀번호 생성기 (password-generator) — 권장 1순위 (가장 간단)

- **입력**: 길이(4~64, 프리셋 버튼 6종: 8/12/16/20/32/64 + 슬라이더/직접입력), 포함 문자종류 체크박스(대문자/소문자/숫자/기호), 유사문자 제외 옵션(0/O/1/l/I 등 제외), 생성개수(1~100개 일괄생성).
- **구현**: `crypto.getRandomValues()`로 암호학적으로 안전한 난수 생성(Math.random() 사용 금지). 강도 게이지는 없음 — 대신 "길이가 길수록 안전합니다" 권장 문구만 표시.
- **출력**: 생성된 비밀번호 목록(복사 버튼 각각 + 전체 복사), 재생성 버튼.
- slug: `password-generator`.

## D-2. QR코드 생성기 (qr-code-generator)

- **입력**: 콘텐츠 타입 선택(URL/텍스트/Wi-Fi/vCard/전화/SMS), 타입별 입력 필드(Wi-Fi는 SSID+비밀번호+암호화방식, vCard는 이름+전화+이메일 등), 크기(6단계), 색상(전경/배경 각각 색상 선택), 오류정정수준(L/M/Q/H).
- **구현**: `qrcode` npm 패키지(`npm install qrcode --save`, 가벼운 라이브러리, 클라이언트에서 canvas/svg로 렌더링) 사용. Wi-Fi는 `WIFI:T:<암호화>;S:<SSID>;P:<비밀번호>;;` 형식 문자열로 인코딩. vCard는 표준 vCard 3.0 텍스트 포맷으로 인코딩.
- **출력**: QR코드 이미지(PNG 다운로드 버튼).
- slug: `qr-code-generator`.

## D-3. 해시 생성기 (hash-generator)

- **입력**: 텍스트 입력창.
- **구현**: `window.crypto.subtle.digest()`(Web Crypto API)로 SHA-1/SHA-256/SHA-384/SHA-512 계산(브라우저 내장, 외부 라이브러리 불필요). MD5는 Web Crypto API가 지원하지 않으므로 별도 경량 MD5 구현(순수 JS, 수십 줄짜리 공개 알고리즘)이 필요 — `crypto-js`의 md5 모듈만 부분 설치하거나 직접 구현. HMAC은 `crypto.subtle.importKey`+`sign`으로 구현(비밀키 입력 필드 추가).
- **출력**: MD5/SHA-1/SHA-224(미지원시 생략, SHA-256/384/512만 가능하면 그것만)/SHA-256/SHA-384/SHA-512 전부 동시 표시, 각각 복사 버튼. HMAC은 비밀키 입력 시에만 추가로 표시.
- slug: `hash-generator`.

## D-4. Cron 표현식 생성·검증기 (cron-generator)

- **입력**: 2개 탭 — "작성" 탭(분/시/일/월/요일 각 필드를 드롭다운/체크박스로 선택해 5필드 cron 문자열 조합 생성, Quartz 특수기호 L/W/# 지원은 선택사항으로 간단히), "확인" 탭(cron 문자열 직접 입력 → 해설 텍스트로 변환, 예: "매일 오전 9시").
- **구현**: cron 파싱은 가벼운 라이브러리(`cron-parser`) 사용 가능, 또는 표준 5필드 cron만 지원하는 수준이면 직접 파싱 로직 작성도 가능(복잡도 낮음).
- **출력**: 생성된 cron 문자열 + 다음 실행 예정 시각 5회 미리보기(`cron-parser`의 `next()` 반복 호출로 구현).
- slug: `cron-generator`.

## D-5. JWT 디코더 (jwt-decoder) — 가장 복잡, 마지막 권장

- **입력**: JWT 토큰 문자열 입력창. 서명 검증용: 알고리즘별로 HS256/384/512는 비밀키(텍스트), RS256/ES256은 PEM 공개키(텍스트) 입력 필드(선택 사항, 입력 안 하면 검증 생략하고 디코딩만).
- **구현**: 헤더/페이로드는 JWT 구조(`.`로 구분된 3부분) 중 앞 2개를 base64url 디코딩해 JSON으로 표시(서명 검증 없이도 가능). `exp` claim이 있으면 현재시각과 비교해 상태 배지(녹색=유효/빨간색=만료/회색=exp없음) 표시. **서명 검증**은 `window.crypto.subtle`의 `importKey`+`verify`로 구현 — HS256/384/512는 HMAC 키 import, RS256/ES256은 PEM을 `crypto.subtle.importKey`가 요구하는 형식(SPKI, base64 디코딩)으로 변환 후 import. PEM 파싱 실패/서명 불일치 시 명확한 에러 메시지 표시.
- **출력**: 헤더 JSON(정형화 표시) / 페이로드 JSON(정형화 표시) / exp 상태 배지 / 서명 검증 결과(키 입력 시에만: 유효/불일치/검증불가).
- slug: `jwt-decoder`.

---

## E. 신규 fun-entertainment 도구 4종 — 공통 안내

전부 `src/app/[locale]/tool/<slug>/` 신규 폴더, 기존 패턴 그대로. 완료마다 `categoryToolsMap`의 `fun-entertainment` 배열 + `sitemap.ts` 등록 필수. 기존 `lunch-roulette`/`nightmeal-roulette`(룰렛류)와 `saju-pool` 등(스텁 수정은 B-1~B-3에서 별개로 처리됨 — 혼동하지 말 것)과는 무관한 완전 신규 도구입니다.

---

## E-1. 랜덤 추첨기 (돌림판) (random-picker) — 권장 1순위 (가장 간단)

- **입력**: 항목 목록(한 줄에 하나씩 텍스트 입력, 최소 2개~최대 50개 정도), "중복 제거(한번 뽑힌 항목 제외)" 옵션 체크박스.
- **구현**: `Math.random()`으로 무작위 선택(암호학적 안전성 불필요한 용도이므로 OK). 선택 애니메이션은 CSS 돌림판 회전 또는 간단한 하이라이트 순환 애니메이션(필수 아님, 있으면 UX 향상).
- **출력**: 당첨 항목 큰 글씨로 표시, "다시 뽑기" 버튼.
- slug: `random-picker`.

## E-2. 사다리타기 (ladder-game)

- **입력**: 참가자 수(2~10명 정도), 참가자 이름(선택, 기본값 "참가자1" 등), 결과 항목(참가자 수와 동일 개수, 텍스트 입력, 예: "커피 사기"/"꽝" 등).
- **구현**: 참가자 수만큼 세로줄을 그리고, 각 세로줄 사이에 무작위로 가로줄(연결선)을 생성(인접한 두 줄끼리만 교차 가능, 겹치지 않게). SVG 또는 canvas로 사다리 모양을 그리고, 각 참가자 클릭 시 경로를 따라가는 애니메이션(선 색칠)으로 최종 도착 결과를 보여줌.
- **출력**: 전체 사다리 그림(처음엔 결과 숨김) → 참가자별 클릭 시 경로 애니메이션 + 최종 결과 매칭 표시 → "전체 결과 한번에 보기" 버튼.
- slug: `ladder-game`.

## E-3. 밸런스 게임 (balance-game)

- **입력 없음(선택지 소비형 콘텐츠)**: 미리 작성해둔 2택 1 질문 문항 풀(예: "평생 치킨만 먹기 vs 평생 피자만 먹기" 등, 최소 30문항 이상을 4개 언어로 작성 — 한국 정서에 맞는 질문과 국제적으로도 통용되는 질문을 섞어서 작성)에서 매번 무작위로 하나씩 제시, 둘 중 하나 선택 시 다음 문항으로 자동 전환.
- **구현**: `data.ts`에 질문 배열(각 질문당 선택지 A/B 텍스트, 4개 언어) 미리 작성. 클라이언트에서 배열 셔플 후 순차 노출(또는 매번 무작위 인덱스). 선택 결과를 누적 집계해 "당신의 선택 패턴" 같은 간단한 요약은 선택사항(필수 아님, 복잡도를 낮추려면 생략 가능).
- **출력**: 질문 카드(A/B 양쪽 버튼), 선택 시 다음 질문으로 전환, "진행도(예: 5/30)" 표시, "다시 시작" 버튼.
- slug: `balance-game`.

## E-4. 오늘의 타로 카드 (tarot-card)

- **입력 없음(일일 운세형 콘텐츠, 기존 daily-fortune/fortune-cookie와 유사한 패턴)**: 메이저 아르카나 22장(또는 간단히 주요 카드 10~22장) 중 날짜 기반 시드로 매일 하나씩 결정론적으로 선택(같은 날 같은 사용자는 같은 카드, 다음날은 다른 카드 — `new Date().toDateString()`을 해시해 인덱스 결정).
- **구현**: `data.ts`에 카드 목록(카드명, 이미지는 간단한 이모지나 CSS로 표현 가능 — 실제 타로카드 이미지 저작권 문제 피하기 위해 자체 제작 아이콘/이모지 사용 권장) + 카드별 해석 문구(총운/연애운/재물운, 4개 언어) 작성.
- **출력**: 오늘의 카드 1장 뽑기 애니메이션(카드 뒤집기 CSS transition) → 카드명 + 해석 문구 표시.
- **⚠ 면책**: "오락용 콘텐츠이며 실제 타로 리딩과 다릅니다" 4개 언어로 명시.
- slug: `tarot-card`.

---

## 작업 순서 재확인

A → B-1 → B-2 → B-3 → C-4 → C-1 → C-2 → C-3 → C-5 → C-6 → C-7 → C-8 → C-9 → C-10 → C-11 → D-1 → D-2 → D-3 → D-4 → D-5 → E-1 → E-2 → E-3 → E-4

매 항목 완료 시: `npx tsc --noEmit` → `next build` → `npm run dev` 4개 로케일 확인 → `categoryToolsMap`/`sitemap.ts` 등록 확인 → 명시적 git add → 커밋 → CHANGELOG 기록 → **`/clear`** → 메인 파일(`BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md`) 다시 읽고 다음 항목 시작.

---

## 6. 에이전트 운영 지침 (AGENTS.md)

> 로컬 코딩 에이전트(opencode)가 작업 시 참고하는 운영 규칙 원문입니다.

# lifehub 프로젝트 개발 지침 (로컬 코딩 에이전트 전용 — 매 작업마다 반드시 준수)

이 파일은 opencode(터미널 AI 코딩 에이전트)가 이 프로젝트 루트에서 작업할 때 자동으로 읽어들이는 규칙 파일입니다(`AGENTS.md`는 opencode가 프로젝트 로컬 파일로 자동 인식하는 표준 파일명).
사용 모델: qwen3.6:35b-a3b-coding (Ollama, 코딩 전용 로컬 모델). 실행 도구: opencode CLI (터미널).


## autocompact thrashing 방지 지침 (중요 — 매 턴 지킬 것)

컨텍스트가 매 턴 다시 채워져 반복 컴팩트가 발생하는 것을 막기 위한 규칙입니다.

- AGENTS.md에 있던 완료된 Cowork 검증 결과·랜딩페이지 디자인 확정 내용은 `_archive/agents_cowork_verification.md`, `_archive/agents_landingpage_design.md`로 이미 옮겨졌습니다. **이 두 파일은 특별한 이유가 없으면 다시 읽지 마세요.**
- `CHANGELOG.md`도 마찬가지입니다. 2026-09-24~09-29 기록은 `_archive/CHANGELOG_ARCHIVE_2026-09.md`로 옮겼습니다. **작업 완료 기록을 추가할 때 `CHANGELOG.md` 전체를 다시 읽지 말고, 파일 맨 위(최신 항목 바로 아래)에 새 항목만 추가하세요.** 과거 형식이 궁금할 때만 최근 1~2개 항목 정도만 확인하면 충분합니다.
- 매 턴 같은 참고 파일을 반복해서 다시 읽는 것 자체가 컨텍스트 소진의 주원인입니다. 세션 안에서 이미 읽은 내용은 다시 읽지 말고 기억에 의존하세요.
- **작업 단위별 체크포인트 규칙 (중요 — 긴 세션에서 필수):** BUGFIX_TASKLIST처럼 독립적인 하위 작업(버그 수정 항목)을 여러 개 연달아 처리할 때, 하나의 세션을 끊지 않고 2시간 이상 계속 이어가지 마세요. 상위 작업 항목을 1~2개 완료할 때마다 반드시 다음 순서를 지키세요:
  1. 그 항목에서 수정한 파일만 명시적으로 `git add <file1> <file2> ...` (절대 `git add -A` 금지)
  2. 커밋 (커밋 메시지에 완료한 항목 번호 포함)
  3. `CHANGELOG.md` 맨 위에 짧게 기록
  4. 터미널에 `/clear`를 실행해 컨텍스트를 비운 뒤, 다음 항목부터 새 세션처럼 이어서 진행
  이 체크포인트는 파일 크기를 줄이는 것과는 별개로, 세션 자체가 길어지며 누적되는 대화 기록(여러 파일을 반복 읽고 수정한 기록)으로 인한 thrashing을 막기 위한 규칙입니다. 커밋 직후에 thrashing 경고가 뜨면, 그 커밋이 실제로 완료됐는지(`git log -1`, `git status`) 먼저 확인한 뒤 `/clear`로 넘어가세요.

## 이 프로젝트는 무엇인가

- freeimgfix.com을 구조적으로 벤치마킹한, 대중 대상 종합 생활 유틸리티 모음 사이트.
- 자세한 기획/배경/카테고리/도구 백로그는 같은 폴더의 `PROJECT_PLAN.md`를 반드시 먼저 읽을 것.
- 1차 진행 카테고리: 생활/건강. 카테고리 내 도구 제작 순서는 무작위(정해진 순서 없음).

## 작업 협업 구조 (중요)

- **1차 담당자는 로컬 LLM(당신)입니다.** 전반적인 도구 페이지 제작, 반복적인 계산기/콘텐츠 구현을 전담합니다.
- **Claude Cowork는 2차 전문가입니다.** 아래 "막혔을 때" 섹션에 해당하는 경우에만 투입됩니다. 그 외의 일반적인 도구 제작 작업은 스스로 끝까지 진행하세요.
- 이 협업 구조는 이 프로젝트에서 처음 시도하는 방식입니다. 판단이 애매하면 무리하게 혼자 밀어붙이지 말고, 아래 에스컬레이션 기준에 따라 빨리 멈추고 기록을 남기는 쪽을 우선하세요.

## 에이전트 분업 지침 (모든 작업 적용)

프로젝트의 모든 작업은 가능한 한 에이전트 분업으로 진행합니다. 단일 에이전트가 전체를 처리하는 대신, 독립적인 작업을 병렬로 분할해서 처리합니다.

### 분업 원칙

1. **독립적인 도구 페이지는 반드시 병렬 생성합니다.** 같은 배치 내에서도 서로 다른 도구는 독립적인 하위 에이전트(`Agent`)로 분할합니다.
   - 예: 배치 5(finance 6개 도구) → 6개의 하위 에이전트가 병렬로 각 도구 페이지 생성
2. **번역 작업은 언어별·도구별로 분할합니다.** 4개 언어(ko/en/ja/es) 번역은 각각 독립적인 에이전트가 담당합니다.
3. **검증 작업은 별도 에이전트로 분할합니다.** `npx tsc --noEmit`, `npx next build`, `npx next dev` 전수 스윕은 각각 별도 에이전트 또는 별도 태스크로 처리합니다.
4. **파일 백업은 최우선 작업입니다.** 분업 전에 `_backups/` 폴더 생성과 파일 복제를 먼저 완료한 후 분할된 작업을 시작합니다.

### 분업 시 고려사항

- **의존성이 없는 작업만 분할합니다.** 예: `data.ts`가 완성되기 전에는 `*Client.tsx`를 병렬로 시작할 수 없습니다.
- **git add는 반드시 통합 에이전트가 담당합니다.** 분할된 에이전트들이 각각 파일을 생성하지만, `git add <file1> <file2>` 커밋은 메인 에이전트가 한 번에 처리합니다. (`git add -A` 절대 금지)
- **에이전트 간 상태 공유는 하지 않습니다.** 각 하위 에이전트는 독립적인 컨텍스트로 작동하므로, 번역 데이터나 디자인 시스템에 대한 공통 지식은 파일로 공유합니다.
- **에스컬레이션은 각 에이전트가 개별적으로 판단합니다.** 하위 에이전트가 에스컬레이션 기준에 도달하면 `HANDOFF_TO_CLAUDE.md`에 기록하고 작업을 중단합니다.

### 분업 예시 (배치 단위 작업)

```
메인 에이전트 (계획·통합·검증)
├── Agent 1: tool-1 data.ts + *Client.tsx + page.tsx (ko)
├── Agent 2: tool-2 data.ts + *Client.tsx + page.tsx (ko)
├── Agent 3: tool-3 data.ts + *Client.tsx + page.tsx (ko)
├── Agent 4: tool-4 data.ts + *Client.tsx + page.tsx (ko)
├── Agent 5: tool-5 data.ts + *Client.tsx + page.tsx (ko)
└── Agent 6: tool-6 data.ts + *Client.tsx + page.tsx (ko)
    └── (병렬로 6개 도구 동시 생성)
        └── 각 도구별로 4개 언어 번역 에이전트 추가 분할 가능
```

### 분업 해제 조건 (에스컬레이션)

아래 상황에서는 분업을 중단하고 단일 에이전트가 전체를 처리합니다:
- 하위 에이전트들이 같은 오류를 반복할 때
- git 충돌이 발생하거나 파일이 손상됐을 때
- 배포/빌드 실패 원인이 불명확할 때
- Claude Cowork의 투입이 필요할 때

## 반드시 지킬 규칙 (기존 exiflens/flydronemap/firelic 프로젝트와 동일한 표준)

1. **`git add -A` 절대 금지.** 변경된 파일을 명시적으로 나열해서 `git add <file1> <file2> ...`만 사용. (과거 이 실수로 실제 데이터 유실 사고가 있었던 규칙입니다.)
2. **작업 시작 전 항상 백업.** `_backups/backup_YYYYMMDD_HHMMSS_설명/` 폴더에 변경 대상 파일만 복사해둔 뒤 작업 시작.
3. **작업 완료 후 `CHANGELOG.md`에 한국어로 기록.** 날짜, 추가/수정한 도구, 주요 변경 사항.
4. **커밋은 도구 1개 단위로.** 여러 도구를 한 커밋에 몰아넣지 말 것.
5. 배포용 `.command` 스크립트가 필요하면 옆 프로젝트(flydronemap/exiflens/firelic)의 기존 스크립트를 그대로 참고해서 동일한 패턴(원클릭 실행 → git add -u만 → 커밋 → push → 완료 메시지 → 3초 후 터미널 자동 종료 + 스크립트 자기 삭제)으로 만들 것. 새로운 패턴을 임의로 만들지 말 것.

## 도구 페이지 공통 템플릿 (모든 신규 도구에 적용)

1. 도구 제목 + 한 줄 설명
2. 계산기/도구 UI (입력 → 결과)
3. "왜 이 도구가 필요한가" 설명 200~400자 (SEO용, 아래 콘텐츠 원칙 참고)
4. 해당되면 자주 쓰는 값 프리셋 버튼
5. FAQ 2~3개
6. "참고용입니다" 등 면책 문구 (건강/의학/법률 관련 도구는 특히 필수)
7. 해당되면 "브라우저에서 100% 처리, 서버 전송 없음" 신뢰 카피

## 콘텐츠 원칙 (절대 위반 금지)

- **freeimgfix.com의 문구·디자인·데이터를 그대로 베끼지 말 것.** 구조(하위 경로 방식, 페이지 템플릿, 카테고리 구성)만 참고하고, 모든 텍스트/콘텐츠/데이터는 100% 원본으로 작성.
- 반려동물 입국 규정, 비자 정보처럼 사실 데이터가 필요한 도구는 신뢰할 수 있는 공식 출처를 직접 찾아 원본 표현으로 정리할 것. 다른 사이트의 표를 그대로 복사하지 말 것.
- 건강/의학 관련 자가진단 도구(ADHD, 당뇨 등)는 "의학적 진단이 아니며 참고용"이라는 문구를 반드시 눈에 띄게 넣을 것.

## 막혔을 때 (Claude Cowork 에스컬레이션 기준)

아래 중 하나라도 해당되면 **더 이상 혼자 시도하지 말고 즉시 멈추세요.** 이 폴더의 `HANDOFF_TO_CLAUDE.md` 파일을 열어 아래 "에스컬레이션 기록 양식"에 맞춰 상황을 기록한 뒤, 터미널에 "Claude Cowork로 넘겨야 할 것 같습니다"라고 출력하고 작업을 중단하세요.

1. 같은 오류를 서로 다른 방법으로 2회 이상 시도했는데도 해결되지 않을 때
2. git 히스토리가 꼬이거나, 파일이 손상되거나, 되돌리기 어려워 보이는 상황이 발생했을 때
3. 애드센스 정책 위반 소지가 있는지 판단이 애매한 콘텐츠를 작성해야 할 때
4. 이 지침 문서나 `PROJECT_PLAN.md`에 없는 새로운 기술적 의사결정이 필요할 때 (예: 데이터베이스 도입, 인증 시스템, 큰 구조 변경 등)
5. Vercel 배포나 도메인 설정 관련 문제가 발생했을 때
6. 삭제나 덮어쓰기처럼 되돌리기 어려운 작업을 해야 할 것 같은데 확신이 없을 때

### 에스컬레이션 기록 양식 (`HANDOFF_TO_CLAUDE.md`에 이 형식으로 추가)

```
## [날짜] 도구명 — 에스컬레이션

- 무엇을 하려고 했는가:
- 시도한 방법들 (최소 2가지):
- 각 시도에서 발생한 정확한 오류 메시지:
- 현재 파일/git 상태:
- 어떤 결정/도움이 필요한가:
```

## 참고 자료

- 같은 상위 폴더의 `exiflens/`, `flydronemap/`, `firelic/` — 기존 코드 패턴 참고용(GA4, 쿠키 동의 배너, 정책 페이지, sitemap.ts 구현 예시가 있음).
- `PROJECT_PLAN.md` — 전체 기획, 카테고리, 도구 백로그(티어별 우선순위).

---

## 7. 에스컬레이션 로그 (HANDOFF_TO_CLAUDE.md)

# lifehub — 로컬 LLM → Claude Cowork 에스컬레이션 기록

이 파일은 로컬 LLM(qwen3.6:35b-a3b-coding, Cline)이 `.clinerules`의 에스컬레이션 기준에 해당하는 문제를 만났을 때 기록을 남기는 곳입니다.
새 항목은 파일 맨 위에 추가하세요. 형식은 `.clinerules`의 "에스컬레이션 기록 양식"을 따릅니다.

---

(아직 기록된 에스컬레이션 없음)

---

## 8. 도구 아이디어 백로그 (미구현 후보)

> 아직 실제로 구현되지 않은 도구 아이디어 모음입니다 (Gemini와 함께 정리한 콘텐츠 목록 원문).

# 컨텐츠 목록

---

## 🖼️ 미디어 / 이미지 (`media`)

### 🔄 변환 & 편집 도구
* **PDF to 이미지 변환:** PDF 문서를 고화질 이미지로 변환
* **이미지 통합 변환기:** 다양한 이미지 형식을 JPG, PNG 등으로 일괄 변환
* **HEIC 변환기:** 아이폰 사진(HEIC)을 JPG로 변환
* **이미지 벡터 변환:** 비트맵을 벡터(SVG)로 변환
* **DPI 변환기:** 이미지 해상도(72/300 DPI) 변경
* **증명사진/여권사진:** 셀프 증명사진 편집 및 규격 조정
* **SNS 이미지 맞춤:** 인스타/페북 게시물 크기 조절
* **GIF 움짤 생성기:** 동영상/이미지로 움짤 만들기
* **워터마크 생성기:** 이미지에 서명 및 로고 삽입

### 📥 다운로드 & 추출 도구
* **이미지 텍스트 추출 (OCR):** 이미지 속 글자를 텍스트로 변환
* **웹 이미지 일괄 다운:** 웹사이트의 모든 이미지 한번에 추출
* **틱톡 영상 다운로더:** 워터마크 없는 깨끗한 영상 저장
* **인스타 라이브 저장:** 인스타그램 라이브 방송 다운로드
* **이미지 색상 추출:** 이미지에서 HEX/RGB 코드 추출
* **EXIF 정보 확인:** 사진 촬영 정보(메타데이터) 조회
* **유튜브 ID 추출:** 채널 및 영상 ID 확인

### 🛠️ 미디어 생성 & 계산 도구
* **파비콘(Favicon) 생성:** 웹사이트용 아이콘(ico) 제작
* **더미 이미지 생성:** 디자인용 임시 이미지(Placeholder)
* **카메라 화각 계산:** 초점거리에 따른 화각(FOV) 계산
* **카메라 노출값 계산:** 조리개/셔터/ISO 적정 노출 계산

### 🎬 공유 & 검색
* **P2P 개인 채팅 파일전송:** 무료 무제한 파일공유 및 시크릿 채팅
* **프리미엄 영화 검색:** 전 세계 영화 정보를 한눈에
* **OTT 랜덤 추천:** 뭘 볼지 고민될 때!

---

## 📄 문서 / 편집 (`docs`)

* **PDF 워터마크:** 워터마크 편집, 서명, 가리기
* **마크다운 에디터:** 실시간 미리보기 마크다운 편집기
* **오디오 편집기:** 음악 자르기 및 변환 도구
* **맞춤법/글자수 세기:** 이력서/자소서 글자수 계산
* **HTML 태그 제거:** 텍스트에서 태그만 깔끔하게 삭제
* **영어 대소문자 변환:** 대문자/소문자 일괄 변환
* **로렘 입숨 생성:** 디자인 시안용 더미 텍스트
* **모스 부호 번역:** 텍스트 ↔ 모스 부호 변환
* **점자 번역기:** 한글/영어를 점자로 변환
* **유튜브 RSS 생성:** 채널 RSS 피드 주소 추출
* **브런치 RSS 생성:** 브런치 작가 RSS 피드 생성
* **통합 RSS 리더:** 웹사이트 RSS 피드 통합 관리

---

## 💰 금융 / 정산 / 계산 (`finance`)

### 🧮 기본 계산 & 습관
* **무료 암산 연습 도구:** 난이도별 맞춤 문제 제공
* **구구단 19단 마스터:** 2단부터 19단까지 랜덤 문제
* **백분율 감각 키우기:** 백분율을 암산으로 빠르게 계산
* **더치페이 계산기:** N분의 1 정산 금액 나누기

### 🏢 비즈니스 & 정산
* **온라인몰 수수료 계산기:** 플랫폼 판매 역산 계산기
* **인플루언서 공구 수익:** 소셜 커머스 공동구매 정산기
* **제조 원가 계산기:** 적정 판매가 마진율 시뮬레이터
* **물류대행 정산 계산기:** 물류 보관료 & 택배비 계산
* **사업자 세금계산기:** 개인/법인 사업자 세금 비교
* **부가가치세(VAT):** 공급가액 및 세액 자동 계산
* **광고 수익률(ROAS):** 마케팅 비용 대비 수익률 분석
* **조달 수수료 계산기:** 최신 조달청 수수료 계산
* **사업자 고용산재보험 조회:** 고용보험 및 산재보험 가입현황조회
* **CBM(부피) 계산기:** 수출입 선적 부피(CBM) 계산
* **박스 단가/비용:** 포장 박스 제작 단가 산출
* **국제택배(EMS):** 국가별/무게별 EMS 요금 조회

### 💵 자산 & 투자 & 부동산
* **대출 이자 계산:** 원리금균등/만기일시 상환금 계산
* **DSR/DTI 계산기:** 대출 한도(DSR/DTI) 조회
* **연봉 실수령액:** 4대보험 제외 실제 월급 계산
* **건강보험료 계산기:** 지역가입자 전환 대비하기
* **복리 계산기:** 투자의 마법 복리 수익 계산
* **주식 물타기 계산기:** 추가 매수(물타기) 시 평단가 계산
* **코인 물타기 계산:** 추가 매수 시 평단가 계산
* **1억만들기 계산기:** 목표 금액 달성 소요 시간
* **인플레이션 계산:** 과거와 현재의 화폐 가치 비교
* **해외 송금 수수료 비교:** 실시간 해외 송금 수수료 계산
* **관세 계산기:** 해외 직구 예상 관세/부가세
* **평수/제곱미터 변환:** 부동산 평수 ↔ ㎡ 상호 변환
* **부동산 중개보수:** 매매/전세 중개수수료 계산
* **환율, 금, 유가 정보:** 금융 시장 현황 한눈에 보기

### 🛍️ 생활 금융 & 기타
* **경조사비 계산기:** 결혼식/장례식 적정 금액 계산
* **글로벌 물가 지수 비교:** 빅맥, 스타벅스, 아이폰 지수
* **생활비 & 공과금 계산기:** 수입/지출 내역 관리
* **에너지 비용 계산:** 전기/가스 사용량 요금 예상
* **주행 유류비 계산:** 거리/연비에 따른 주유비 계산
* **인테리어 자재계산:** 셀프 인테리어 만능 계산기
* **공무원 연가보상비:** 급여만 입력하면 1초 만에 계산
* **SNS 수익 계산:** 유튜브/인스타 조회수 예상 수익
* **팁(Tip) 계산기:** 해외 여행 적정 팁 금액
* **시급/시간가치:** 나의 시간당 가치 환산
* **로또 번호 생성:** 빅데이터/랜덤 번호 추출
* **연봉 치킨 계산기:** 치킨의 마리 수로 환산
* **담배값 절약액:** 금연 시 절약 금액 확인

---

## 🌿 생활 / 건강 (`life`)

### 🏥 건강 & 신체 & 육아
* **단식 타이머:** 16:8 간헐적 단식
* **당뇨 자가진단:** 초기 증상 체크리스트와 혈당 관리
* **영양제 추천 서비스:** 내 몸에 딱 필요한 영양성분은?
* **ABC 주스 레시피:** 황금 비율 레시피와 다이어트 챌린지
* **ADHD 자가검사:** ADHD 심층 정밀 분석
* **비만도(BMI):** 신장/체중 이용 비만도 측정
* **기초대사량:** 일일 칼로리 소모량 확인
* **운동 칼로리:** 운동 종목별 소모 칼로리
* **물 섭취량 계산:** 하루 권장 물 섭취량 확인
* **약물반감기 계산:** 체내 약물 잔류량 및 배출 시간 계산
* **바이오리듬:** 오늘의 신체/감성/지성 리듬
* **위드마크(음주):** 혈중알코올농도 분해 시간
* **헬스 1RM 계산:** 벤치프레스 1회 최대 중량
* **러닝 VDOT 계산:** 기록 기반 훈련 페이스 설정
* **러닝 페이스:** 거리별 소요 시간 계산
* **배란일 계산기:** 임신 가능일 및 가임기 계산
* **임신 주수 계산:** 출산 예정일 및 주수 확인
* **육아/아기 성장:** 아기 성장 발달 및 수유 기록
* **이유식 계산기:** 월령별 이유식 양과 스케줄
* **아동 성장 계산:** 아이의 예상 키와 성장 발달

### 🐾 반려동물
* **반려동물 입국 규정:** 40개국 동물 검역 데이터
* **반려동물 나이:** 강아지/고양이 등 사람 환산 나이
* **반려동물 사료량 계산:** 체중, 나이, 활동량을 고려한 맞춤형 계산

### 🌤️ 날씨 & 환경 & 생활 정보
* **우리 동네 미세먼지:** 실시간 대기질 확인
* **전국 실시간 자외선 지수:** 내 위치 기반 자외선 수치
* **실시간 체감 온도:** 오늘 내일 모레 체감 온도
* **전세계 실시간 태풍:** 정보 무료 확인
* **전국 캠핑장 날씨:** Camping Weather Forecast
* **최저가 주유소 찾기:** 내 주변 실시간 주유비 가격 비교
* **전세계 무료 화장실:** 내 주변 무료 개방 화장실 지도
* **모기 퇴치 소리:** 주파수를 이용한 모기 퇴치
* **쥐 퇴치 소리:** 쥐가 싫어하는 초음파 발생
* **도시별 한달살기:** 물가 데이터 기반 예산 산출
* **전세계 비자 비교:** 내 여권으로 갈 수 있는 나라는?
* **택배 배송 조회:** 국내외 운송장 실시간 조회

### 🎖️ 군대 & 공공 서비스
* **군 전역일 계산:** 입대일 기준 전역 D-Day
* **군 적금 계산기:** 장병내일준비적금 만기액
* **공군 가산점:** 자격증/출결 가산점 확인
* **해병대 가산점:** 해병대 가산점 확인
* **해병대 기수 계산기:** 해병대 전역일 기수 계산
* **정부 혜택 찾기:** 나에게 맞는 보조금 검색
* **실업급여 계산:** 고용보험 기준 실업급여 모의
* **운전면허 정보:** 시험 및 갱신 정보 확인
* **자동차 검사 주기:** 차종 및 용도에 따른 정기 검사 주기 확인
* **한국 지역번호:** 전국 지역별 전화 국번
* **국가번호 조회:** 전 세계 국제전화 코드

### 📅 일정 / 달력 / 기념일
* **만 나이 계산기:** 생년월일 기준 만 나이/띠 확인
* **생일/기념일:** D-Day 확인, 나이계산, 커플기념일
* **환갑 칠순 계산기:** 부모님 생신 확인 계산
* **윤년(Leap Year):** 윤년/평년 여부 확인
* **49재/제사일:** 49재 및 주요 제사일 계산
* **세계 공휴일:** 국가별 주요 공휴일 정보
* **이사날 달력:** 손없는날 달력

### 🎓 교육 & 기타 생활
* **학습 방법 진단:** 데이터 기반 학습 성향 분석 도구
* **단어 연습장:** 퀴즐렛 스타일의 플래시카드
* **무료 영영 사전:** 정의, 동의어 및 오디오
* **용적률/건폐율 계산기:** 건축물 1초 자가 진단
* **건축 공사비 계산기:** 총 공사비 산출 및 정밀 견적
* **점심 메뉴 룰렛:** 오늘 뭐 먹지? 결정장애 해결
* **야식 메뉴 룰렛:** 출출한 밤 야식 추천 룰렛
* **옷 사이즈 변환:** 해외 의류 사이즈 한국식 변환
* **베이킹 비율:** 빵/쿠키 반죽 재료 비율
* **스마트팜 계산:** 농작물 재배 환경 데이터
* **나의 운명 사전:** 별자리, 탄생석, 탄생화 사전
* **칵테일 레시피:** 전세계 칵테일 레시피
* **세계 음식 레시피:** 레시피 무료 검색

---

## 🎮 운세 / 테스트 / 게임 (`fun`)

### 🔮 운세 & 사주
* **정통 사주풀이:** 명리학 만세력 사주풀이
* **2026 토정비결:** 신년풀이 운세확인
* **궁합풀이:** 명리학 궁합 분석
* **오늘의 운세:** 오늘의 무료운세
* **포춘 쿠키 오늘 운세:** 포춘쿠키 행운의 메시지
* **나의 별자리 찾기:** 나의 별자리 특징 및 성향

### 🧠 심리 & 성향 테스트
* **에겐녀? 테토녀? / 에겐남? 테토남?:** 성격 유형 검사 (여/남)
* **성인 애착 유형 검사:** 불안형? 회피형? 애착 유형 확인
* **색채심리 테스트:** 내면의 목소리
* **잠재력 테스트:** 내 무의식 잠재력 능력은?
* **멘탈 케어 솔루션:** 스트레스 대처 성향 테스트
* **잠버릇 심리테스트:** 수면 자세 성격 테스트
* **음악 심리 테스트:** 음악 취향으로 알아보는 테스트
* **자존감 테스트:** 나의 자존감 점수는 몇 점?
* **창의력 지수 / 완벽주의 테스트:** 잠재 능력 및 성향 측정
* **계절 날씨 테스트:** 나의 숨겨진 성격 테스트
* **리더십 DNA:** 리더십 스타일 진단 테스트
* **호구 성향 / 꼰대 성향 / 정신연령 테스트:** 성격 자가 진단

### 💕 연애 & 관계 테스트
* **나의 연애 시작은 언제?:** 재미로 보는 나의 연애 시작 시기
* **나에게 필요한 친구는?:** 심리 테스트를 통해 나의 친구 성향
* **나의 프러포즈 유형은?:** 고백 시나리오 추천
* **솔로 탈출 능력 고사:** 나의 연애 세포 테스트
* **나의 헌팅능력은?:** 당신의 플러팅 스킬 테스트
* **나의 플러팅 스타일:** 당신의 연애 공략법은?
* **나의 결혼 상대는 누구?:** AI 매칭 분석 및 이상형 찾기
* **스킨십 성향 테스트:** 나의 연애 스킨십 스타일 분석
* **이름 궁합 / 연애/썸 계산:** 사랑점 및 기간 D-Day 계산
* **이별 확률 / 권태기 / 집착도 테스트:** 커플 관계 자가진단

### 🎯 취향 & 라이프스타일 테스트
* **캠핑 스타일 찾기:** 자연 속에서의 힐링 방식
* **적성에 맞는 알바는?:** 최적의 꿀알바 추천
* **롤 / 발로란트 / 포트나이트 성향:** 포지션 및 플레이스타일 추천
* **빵 취향 / 오타쿠력 / 트렌드 능력고사:** 개인 취향 진단
* **아이스크림 / 짱구 캐릭터 / 채소 MBTI:** 재미있는 MBTI 테스트
* **해리포터 기숙사 배정:** 마법의 모자가 골라주는 기숙사
* **나의 퇴사 욕구는?:** 스트레스 체크

### 🕹️ 게임 & 효과음
* **두더지 잡기:** 스트레스 해소용 두더지 잡기 게임
* **틱택토 게임:** 친구와 즐기는 O/X 빙고 게임
* **오목 게임:** AI와 대결하는 오목 한판 승부
* **기억력 게임:** 카드 짝 맞추기 기억력 테스트
* **절대음감 테스트:** 나의 음감 능력 테스트
* **카지노 미니게임 (바카라 / 블랙잭 / 포커):** 리얼한 무료 카드 게임
* **포커 확률/승률:** 텍사스 홀덤 포커 핸드 승률 계산
* **방귀 소리:** 다양한 방귀 소리 효과음 모음
* **랜덤 게임 돌림판:** 벌칙 정하기, 메뉴 고르기 랜덤 룰렛

---

## 9. 소규모 과거 기록 2건

### 9-1. Cowork 검증 기록 (2026-09-22)

# Claude Cowork 검증·수정 결과 (2026-09-22)

opencode의 "Failed to send prompt" 오류로 세션이 끊겼던 시점 전후로 작업하던 내용을, 사용자 요청으로 Claude Cowork가 실제 파일/빌드 상태를 직접 검증했습니다. 아래 내용은 이미 전부 처리 완료된 것이니 **다시 손대거나 되돌리지 마세요.**

## 이미 수정 완료된 항목 (전부 `npx tsc --noEmit` 에러 0건으로 검증됨)

1. `category/[id]/page.tsx`: 카드 id 오류 2건 수정 (`"bmr"` → `"bmr-calculator"`, `"adhd-check"` → `"adhd-checklist"`), 화살표 아이콘이 `&rightarrow;`라는 잘못된 HTML 엔티티로 찍히던 것을 실제 화살표(`→`)로 수정, 상단 라벨이 "CATEGORY.CATEGORIES"로 표시되던 번역 키 누락(`Category.categories`)을 4개 언어 파일에 모두 추가해 수정.
2. `tool/lunch-roulette/page.tsx`, `tool/nightmeal-roulette/page.tsx`: 배열 닫는 괄호 오타·삼항연산자 오류로 **빌드 자체가 깨지는 문법 오류**가 있었던 것 수정 완료. 두 파일의 음식 데이터(존재하지 않는 음식명, 잘못 분류된 항목)도 함께 재작성.
3. `tool/construction-cost/page.tsx`, `tool/far-calculator/page.tsx`: "완료"로 보고됐던 두 도구에서 실제로는 **빌드를 깨는 타입 에러 3건**이 발견되어 수정 완료(`Data` 인터페이스에 없는 필드 참조, null 가능성 오판단). 두 파일 다국어 텍스트에 영어/한자/중국어 간체자가 잘못 섞여있던 부분도 함께 정리.
4. `tool/bmr-calculator/page.tsx`, `tool/tdee/page.tsx`, `tool/fasting-timer/page.tsx`, `tool/abc-juice/page.tsx`: 다국어 텍스트에 "摂/摄"(올바른 일본어 한자 vs 중국어 간체자, 육안 구분 거의 불가), "诊/診" 같은 잘못된 한자가 섞여 들어간 오류 다수 수정 완료.

## ⚠️ 새로 발견된 문제 — 다음 작업 시 함께 처리 필요

`categoryToolsMap`(`category/[id]/page.tsx`, `"life-health"` 배열)을 실제 `tool/` 폴더 16개와 대조한 결과:

- **등록 안 된 티어 1 도구 8개**: `construction-cost`, `far-calculator`, `lunch-roulette`, `nightmeal-roulette`, `study-method`, `abc-juice`, `mosquito-sound`, `rat-sound`. 페이지 파일은 이미 다 존재하지만 카테고리 화면 카드로 등록이 안 되어 있어 `/ko/category/life-health` 화면에서 보이지 않는 상태입니다.
- **중복 카드 1건**: 현재 배열에 "기초대사량(BMR) 계산기" 카드(`id: "bmr-calculator"`)와 "기초대사량(BMR) & 활동대사량(TDEE) 통합 계산기" 카드가 **둘 다 `id: "bmr-calculator"`로 등록**되어 있어 같은 페이지로 중복 연결됩니다. `bmr-calculator/page.tsx`가 이미 BMR과 TDEE(체중 감량/증가 권장 섭취량)를 함께 계산해 보여주는 페이지이므로, "통합 계산기"라는 이름의 카드는 실질적으로 같은 기능의 중복입니다. **이 중복 카드는 삭제**하세요.

## 다음 단계 지시

1. 위 8개 도구를 `categoryToolsMap["life-health"]` 배열에 카드로 추가하고, 중복된 "통합 계산기" 카드는 제거하세요. (`ToolInfo` 인터페이스 형식: `id`, `name`/`nameEn`/`nameJa`/`nameEs`, `description`/`descriptionEn`/`descriptionJa`/`descriptionEs` — 기존 항목들의 형식을 그대로 따르면 됩니다.)
2. 다국어 텍스트를 새로 작성할 때 "摂/摄", "诊/診"처럼 육안으로 구분이 잘 안 되는 한자를 잘못 입력하는 실수가 이번에 여러 건 반복 발견됐습니다. 새로 텍스트를 쓸 때 한국어에는 한글만, 일본어에는 정확한 일본어 상용한자만 쓰도록 한 번 더 신경 써주세요.
3. 위 작업이 끝나면 티어 1(16개 도구)은 카테고리 등록까지 전부 완료된 것으로 볼 수 있습니다 → `PROJECT_PLAN.md` "6. 생활/건강 카테고리 도구 백로그"의 **티어 2**(반려동물 입국 규정/전세계 비자 비교/단어 연습장/도시별 한달살기 비용)로 넘어가세요.
4. 참고: 이 프로젝트에 `CHANGELOG.md` 파일이 아직 한 번도 만들어지지 않은 것으로 확인됐습니다. 아래 "반드시 지킬 규칙" 3번(작업 완료 후 `CHANGELOG.md`에 한국어로 기록)을 이제부터라도 지켜서, 이번 카드 추가 작업부터 새로 파일을 만들어 기록을 시작하세요.

### 9-2. 랜딩페이지 디자인 확정 기록 (2026-09-21)

# 랜딩페이지 디자인 최종 확정 (2026-09-21, Claude Cowork 작업)

랜딩페이지 디자인 시안 3개(`page-sample1/2/3.tsx`)를 비교하는 작업이 너무 오래 걸려, Claude Cowork가 최종 디자인을 직접 확정했습니다.

## 확정된 실제 홈페이지

- **확정된 실제 홈페이지**: `src/app/[locale]/page.tsx` (1번 시안의 히어로 + 카테고리 그리드 구조를 기반으로 정리·수정함)
- **`page-sample1.tsx`, `page-sample2.tsx`, `page-sample3.tsx`, `src/app/[locale]/sample2/` 라우트, 미사용 중복 번역 파일(`src/messages/`), `start-sample2.command`는 전부 시안 비교용 아카이브/leftover였습니다.** 2026-09-21에 프로젝트 루트의 **`_to_delete/`** 폴더로 격리(이동) 완료했습니다. 이 폴더는 사용자가 직접 영구 삭제할 예정이니 **`_to_delete/` 안의 내용은 절대 참고하거나 되살리지 마세요.**
- **카테고리는 7개로 확정**: `life-health`(우선 진행), `image-media`, `document-pdf`, `finance`, `fun-entertainment`(신규 추가), `dev-it`, `utility`. `page.tsx`의 `categories` 배열이 기준입니다.
- **`src/components/ui/button.tsx`에 `buttonVariants`를 export 추가했습니다.** 이 컴포넌트의 `asChild` prop은 실제로는 구현되어 있지 않은 죽은 코드입니다 — `<Button asChild><a>...</a></Button>` 형태로 쓰면 `<button>` 안에 `<a>`가 중첩되는 잘못된 마크업이 됩니다. **링크를 버튼처럼 보이게 하려면 반드시 아래처럼 `buttonVariants`를 직접 써서 `<a>` 태그에 적용하세요:**
  ```tsx
  import { buttonVariants } from "@/components/ui/button";
  <a href="/x" className={buttonVariants({ variant: "secondary", size: "lg" })}>...</a>
  ```
- **`src/i18n/messages/{ko,en,ja,es}.json`이 실제로 로드되는 번역 파일입니다** (`src/i18n/request.ts` 참고). `Home`/`Category`/`Tools` 키를 정리해뒀으니 이 파일들을 사용하세요. **`src/messages/` (i18n 없는 경로)는 쓰이지 않는 leftover 중복 파일이니 참고하지 마세요.**
- **이제부터 랜딩페이지 히어로/카테고리 그리드, `layout.tsx`의 헤더/푸터, `button.tsx`는 임의로 수정하지 마세요.** 수정이 꼭 필요하면 먼저 `HANDOFF_TO_CLAUDE.md`에 기록하고 에스컬레이션하세요.
- **다음 작업**: 아래 "6. 생활/건강 카테고리 도구 백로그"(`PROJECT_PLAN.md`)의 티어 1부터, `/category/[id]` 카테고리 목록 페이지와 개별 `/tool/[id]` 도구 페이지 제작을 시작하세요.

# Changelog

모든 변경 사항은 한국어로 기록합니다.

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

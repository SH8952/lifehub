# lifehub 카테고리 균형 확장 작업 지시서 (2026-10-29)

## 배경

2026-10-29, BUGFIX_TASKLIST_FOR_LOCAL_LLM_2026-10-24.md의 24개 작업이 전부 완료된 후, 사용자가 카테고리별 도구 수 불균형을 지적하고 외부 API 불필요 도구를 균형 있게 추가해 유사 사이트 수준(200개 이상)으로 확장을 요청함.

**확정된 사항 (사용자 승인, 2026-10-29):**
- 전체 목표 개수: **200개 이상** (카테고리당 약 29개 기준, 총 203개)
- 진행 순서: **부족한 카테고리부터** — image-media → document-pdf → utility → fun-entertainment → dev-it → finance → life-health
- 아래 후보 목록을 그대로 사용해서 진행

## 📊 진행 상황 요약

| 카테고리 | 기존 | 목표 | 추가 필요 | 상태 |
|---|---|---|---|---|
| **image-media** | 5 | 29 | 24 | ✅ 완료 (24/24) |
| **document-pdf** | 5 | 29 | 24 | ⏳ 진행 중 (10/24 완료, 11번부터 계속) |
| **utility** | 6 | 29 | 23 | ⏳ 대기 |
| **fun-entertainment** | 10 | 29 | 19 | ⏳ 대기 |
| **dev-it** | 11 | 29 | 18 | ⏳ 대기 |
| **finance** | 13 | 29 | 16 | ⏳ 대기 |
| **life-health** | 21 | 29 | 8 | ⏳ 대기 |

**총 132개 신규 도구 (71 → 203개)**

## 작업 방식 (기존 23개 항목과 동일)

1. 아래 후보 목록에서 순서대로 진행 (각 항목에 제안 slug 포함)
2. RSC-safe 3파일 구조: `data.ts` + `<Tool>Client.tsx` + `page.tsx`, 4개 언어(ko/en/ja/es) 지원
3. `src/lib/tools-data.ts`(해당 카테고리)와 `src/app/sitemap.ts`(TOOL_IDS)에 등록
4. `npx tsc --noEmit` → `rm -rf .next && next build` 검증
5. 파일 경로 명시 `git add` + 한국어 커밋 메시지(Claude 어트리뷰션) 커밋
6. `CHANGELOG.md` 기록 + 이 파일의 진행 테이블 갱신을 별도 커밋
7. 전부 외부 유료/네트워크 API 불필요 — 브라우저 내장 기능 또는 이미 사용 중인 클라이언트 라이브러리(pdf-lib, jsPDF, qrcode 등)만 사용

---

## 1. image-media (24개 신규) — ✅ 완료 (24/24)

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

## 2. document-pdf (24개 신규) — ⏳ 진행 중

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
| 11 | invoice-pdf-maker | 견적서·인보이스 PDF 생성기 |
| 12 | business-card-pdf | 명함 PDF 생성기 |
| 13 | pdf-page-size-converter | PDF 용지 크기 변환기(A4↔Letter) |
| 14 | pdf-grayscale | PDF 흑백 변환기 |
| 15 | pdf-bookmark-adder | PDF 북마크(목차) 추가기 |
| 16 | pdf-thumbnail-extract | PDF 표지 썸네일 추출기 |
| 17 | pdf-signature-insert | PDF 서명 이미지 삽입기 |
| 18 | pdf-page-count | PDF 페이지 수·용량 정보 확인기 |
| 19 | pdf-to-text-file | PDF → 텍스트 파일(.txt) 변환기 |
| 20 | pdf-duplicate-page | PDF 특정 페이지 복제기 |
| 21 | pdf-blank-page-insert | PDF 빈 페이지 삽입기 |
| 22 | pdf-combine-preview | 여러 PDF 미리보기 한 번에 합치기 |
| 23 | pdf-form-fill | PDF 양식(Form) 필드 채우기 도구 |
| 24 | pdf-password-protect | PDF 비밀번호 설정기 |

## 3. utility (23개 신규)

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

## 4. fun-entertainment (19개 신규)

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

## 5. dev-it (18개 신규)

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

## 6. finance (16개 신규)

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

## 7. life-health (8개 신규)

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

---

## 📁 참고

- 신규 도구 구현 시 기존 23개 항목과 동일한 RSC-safe 3파일 구조, 4개 언어 지원 패턴을 따릅니다.
- `_archive/BUGFIX_TASKLIST_ARCHIVE_2026-10-24.md`와 같은 별도 상세 스펙 파일은 만들지 않습니다 — 각 도구는 위 표의 이름만으로 충분히 구현 가능한 단순 도구들입니다 (복잡한 공식이 필요한 항목은 구현 시 Claude가 직접 설계).

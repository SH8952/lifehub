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

# lifehub 프로젝트 개발 지침 (로컬 코딩 에이전트 전용 — 매 작업마다 반드시 준수)

이 파일은 opencode(터미널 AI 코딩 에이전트)가 이 프로젝트 루트에서 작업할 때 자동으로 읽어들이는 규칙 파일입니다(`AGENTS.md`는 opencode가 프로젝트 로컬 파일로 자동 인식하는 표준 파일명).
사용 모델: qwen3.6:35b-a3b-coding (Ollama, 코딩 전용 로컬 모델). 실행 도구: opencode CLI (터미널).

## ⚠️ Claude Cowork 검증·수정 결과 (2026-09-22, 재개 전 반드시 먼저 읽을 것 — 아래가 최신 상태)

opencode의 "Failed to send prompt" 오류로 세션이 끊겼던 시점 전후로 작업하던 내용을, 사용자 요청으로 Claude Cowork가 실제 파일/빌드 상태를 직접 검증했습니다. 아래 내용은 이미 전부 처리 완료된 것이니 **다시 손대거나 되돌리지 마세요.** 상세 진단 과정은 Claude 측 기록에만 있어 이 프로젝트 폴더에서는 볼 수 없으니, 아래 요약만으로 현재 파일 상태를 신뢰하고 진행하면 됩니다.

**이미 수정 완료된 항목 (전부 `npx tsc --noEmit` 에러 0건으로 검증됨)**

1. `category/[id]/page.tsx`: 카드 id 오류 2건 수정 (`"bmr"` → `"bmr-calculator"`, `"adhd-check"` → `"adhd-checklist"`), 화살표 아이콘이 `&rightarrow;`라는 잘못된 HTML 엔티티로 찍히던 것을 실제 화살표(`→`)로 수정, 상단 라벨이 "CATEGORY.CATEGORIES"로 표시되던 번역 키 누락(`Category.categories`)을 4개 언어 파일에 모두 추가해 수정.
2. `tool/lunch-roulette/page.tsx`, `tool/nightmeal-roulette/page.tsx`: 배열 닫는 괄호 오타·삼항연산자 오류로 **빌드 자체가 깨지는 문법 오류**가 있었던 것 수정 완료. 두 파일의 음식 데이터(존재하지 않는 음식명, 잘못 분류된 항목)도 함께 재작성.
3. `tool/construction-cost/page.tsx`, `tool/far-calculator/page.tsx`: "완료"로 보고됐던 두 도구에서 실제로는 **빌드를 깨는 타입 에러 3건**이 발견되어 수정 완료(`Data` 인터페이스에 없는 필드 참조, null 가능성 오판단). 두 파일 다국어 텍스트에 영어/한자/중국어 간체자가 잘못 섞여있던 부분도 함께 정리.
4. `tool/bmr-calculator/page.tsx`, `tool/tdee/page.tsx`, `tool/fasting-timer/page.tsx`, `tool/abc-juice/page.tsx`: 다국어 텍스트에 "摂/摄"(올바른 일본어 한자 vs 중국어 간체자, 육안 구분 거의 불가), "诊/診" 같은 잘못된 한자가 섞여 들어간 오류 다수 수정 완료.

**⚠️ 새로 발견된 문제 — 다음 작업 시 함께 처리 필요**

`categoryToolsMap`(`category/[id]/page.tsx`, `"life-health"` 배열)을 실제 `tool/` 폴더 16개와 대조한 결과:

- **등록 안 된 티어 1 도구 8개**: `construction-cost`, `far-calculator`, `lunch-roulette`, `nightmeal-roulette`, `study-method`, `abc-juice`, `mosquito-sound`, `rat-sound`. 페이지 파일은 이미 다 존재하지만 카테고리 화면 카드로 등록이 안 되어 있어 `/ko/category/life-health` 화면에서 보이지 않는 상태입니다.
- **중복 카드 1건**: 현재 배열에 "기초대사량(BMR) 계산기" 카드(`id: "bmr-calculator"`)와 "기초대사량(BMR) & 활동대사량(TDEE) 통합 계산기" 카드가 **둘 다 `id: "bmr-calculator"`로 등록**되어 있어 같은 페이지로 중복 연결됩니다. `bmr-calculator/page.tsx`가 이미 BMR과 TDEE(체중 감량/증가 권장 섭취량)를 함께 계산해 보여주는 페이지이므로, "통합 계산기"라는 이름의 카드는 실질적으로 같은 기능의 중복입니다. **이 중복 카드는 삭제**하세요.

**다음 단계 지시**

1. 위 8개 도구를 `categoryToolsMap["life-health"]` 배열에 카드로 추가하고, 중복된 "통합 계산기" 카드는 제거하세요. (`ToolInfo` 인터페이스 형식: `id`, `name`/`nameEn`/`nameJa`/`nameEs`, `description`/`descriptionEn`/`descriptionJa`/`descriptionEs` — 기존 항목들의 형식을 그대로 따르면 됩니다.)
2. 다국어 텍스트를 새로 작성할 때 "摂/摄", "诊/診"처럼 육안으로 구분이 잘 안 되는 한자를 잘못 입력하는 실수가 이번에 여러 건 반복 발견됐습니다. 새로 텍스트를 쓸 때 한국어에는 한글만, 일본어에는 정확한 일본어 상용한자만 쓰도록 한 번 더 신경 써주세요.
3. 위 작업이 끝나면 티어 1(16개 도구)은 카테고리 등록까지 전부 완료된 것으로 볼 수 있습니다 → `PROJECT_PLAN.md` "6. 생활/건강 카테고리 도구 백로그"의 **티어 2**(반려동물 입국 규정/전세계 비자 비교/단어 연습장/도시별 한달살기 비용)로 넘어가세요.
4. 참고: 이 프로젝트에 `CHANGELOG.md` 파일이 아직 한 번도 만들어지지 않은 것으로 확인됐습니다. 아래 "반드시 지킬 규칙" 3번(작업 완료 후 `CHANGELOG.md`에 한국어로 기록)을 이제부터라도 지켜서, 이번 카드 추가 작업부터 새로 파일을 만들어 기록을 시작하세요.

## ⚠️ 랜딩페이지 디자인 최종 확정 (2026-09-21, Claude Cowork 작업 — 반드시 먼저 읽을 것)

랜딩페이지 디자인 시안 3개(`page-sample1/2/3.tsx`)를 비교하는 작업이 너무 오래 걸려, Claude Cowork가 최종 디자인을 직접 확정했습니다.

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

## 이 프로젝트는 무엇인가

- freeimgfix.com을 구조적으로 벤치마킹한, 대중 대상 종합 생활 유틸리티 모음 사이트.
- 자세한 기획/배경/카테고리/도구 백로그는 같은 폴더의 `PROJECT_PLAN.md`를 반드시 먼저 읽을 것.
- 1차 진행 카테고리: 생활/건강. 카테고리 내 도구 제작 순서는 무작위(정해진 순서 없음).

## 작업 협업 구조 (중요)

- **1차 담당자는 로컬 LLM(당신)입니다.** 전반적인 도구 페이지 제작, 반복적인 계산기/콘텐츠 구현을 전담합니다.
- **Claude Cowork는 2차 전문가입니다.** 아래 "막혔을 때" 섹션에 해당하는 경우에만 투입됩니다. 그 외의 일반적인 도구 제작 작업은 스스로 끝까지 진행하세요.
- 이 협업 구조는 이 프로젝트에서 처음 시도하는 방식입니다. 판단이 애매하면 무리하게 혼자 밀어붙이지 말고, 아래 에스컬레이션 기준에 따라 빨리 멈추고 기록을 남기는 쪽을 우선하세요.

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

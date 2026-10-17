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

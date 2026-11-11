import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { allTools } from "@/lib/tools-data";
import { categories } from "@/app/[locale]/page";
import { BackLink } from "@/components/back-link";

// 도구 상세 페이지의 탐색경로(BreadcrumbList) JSON-LD.
// 검색결과에 "LifeHub › 카테고리 › 도구" 경로가 표시되도록 구조화 데이터를 내보낸다.
// 서버 컴포넌트이므로 클라이언트 JS는 늘어나지 않고, 이름·카테고리는 tools-data.ts 하나를 기준으로 한다.
// 도구를 찾지 못하면 아무것도 출력하지 않는다(기존 페이지 동작 그대로).

const NAME_KEY = {
  ko: "name",
  en: "nameEn",
  ja: "nameJa",
  es: "nameEs",
} as const;

export default function ToolBreadcrumbJsonLd({
  locale,
  toolId,
}: {
  locale: string;
  toolId: string;
}) {
  const key = NAME_KEY[locale as keyof typeof NAME_KEY] ?? "name";
  const tool = allTools.find((t) => t.id === toolId);
  if (!tool) return null;

  const items: { name: string; url: string }[] = [
    { name: "LifeHub", url: `${SITE_URL}/${locale}` },
  ];

  const category = categories.find((c) => c.id === tool.categoryId);
  if (category) {
    items.push({
      name: category[key],
      url: `${SITE_URL}/${locale}/category/${category.id}`,
    });
  }

  items.push({
    name: tool[key],
    url: `${SITE_URL}/${locale}/tool/${toolId}`,
  });

  return (
    <>
      {/* 도구 페이지 상단의 뒤로가기: 소속 카테고리 목록으로 (헤더 로고와 같은 왼쪽 선에 맞춤) */}
      <div className="mx-auto -mb-6 max-w-6xl px-4 pt-5">
        <BackLink
          to={category ? "category" : "home"}
          categoryId={category?.id}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(items)),
        }}
      />
    </>
  );
}

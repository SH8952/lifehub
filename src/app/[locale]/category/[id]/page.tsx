import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { categories } from "../../page";
import { SITE_URL, pageAlternates, breadcrumbJsonLd } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { categoryToolsMap } from "@/lib/tools-data";
import { BackLink } from "@/components/back-link";

// 날짜별 도구 순서 순환(홈페이지 "오늘의 도구"와 같은 방식, UTC 기준 하루 단위).
// 정적 생성 페이지이므로 1시간마다 재계산되도록 revalidate를 둡니다.
export const revalidate = 3600;

export function generateStaticParams() {
  return Object.keys(categoryToolsMap).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const category = categories.find((c: typeof categories[number]) => c.id === id);
  if (!category) return {};

  const nameKey = ({
    ko: "name",
    en: "nameEn",
    ja: "nameJa",
    es: "nameEs",
  } as const)[locale as "en" | "ko" | "ja" | "es"] ?? "name";

  const descKey = ({
    ko: "description",
    en: "descriptionEn",
    ja: "descriptionJa",
    es: "descriptionEs",
  } as const)[locale as "en" | "ko" | "ja" | "es"] ?? "description";

  const title = `${category[nameKey]} | LifeHub`;
  const description = category[descKey];

  return {
    title,
    description,
    alternates: pageAlternates(locale, `/category/${id}`),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/category/${id}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const category = categories.find((c: typeof categories[number]) => c.id === id);
  if (!category) notFound();

  const t = await getTranslations("Category");

  const nameKey = ({
    ko: "name",
    en: "nameEn",
    ja: "nameJa",
    es: "nameEs",
  } as const)[locale as "en" | "ko" | "ja" | "es"] ?? "name";

  const descKey = ({
    ko: "description",
    en: "descriptionEn",
    ja: "descriptionJa",
    es: "descriptionEs",
  } as const)[locale as "en" | "ko" | "ja" | "es"] ?? "description";

  const baseTools = categoryToolsMap[id] || [];
  // 하루가 바뀔 때마다 시작 위치가 이동하는 순환(회전) 정렬 — 원래 순서·구성은 그대로 유지.
  // 한 번에 6칸 이상 이동해 화면 첫 부분에 보이는 도구가 매일 눈에 띄게 달라지도록 하되,
  // 이동 칸 수는 도구 개수와 서로소가 되도록 골라 모든 시작 위치가 순서대로 한 바퀴 돕니다.
  const now = new Date();
  const dayOfYear = Math.floor(
    (Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) -
      Date.UTC(now.getUTCFullYear(), 0, 0)) /
      86400000
  );
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  let rotateStep = 6;
  while (baseTools.length > 1 && gcd(rotateStep, baseTools.length) !== 1) {
    rotateStep += 1;
  }
  const rotateBy =
    baseTools.length > 0 ? (dayOfYear * rotateStep) % baseTools.length : 0;
  const tools = [...baseTools.slice(rotateBy), ...baseTools.slice(0, rotateBy)];

  // 탐색경로(BreadcrumbList) 구조화 데이터: LifeHub › 카테고리
  const breadcrumbs = breadcrumbJsonLd([
    { name: "LifeHub", url: `${SITE_URL}/${locale}` },
    { name: category[nameKey], url: `${SITE_URL}/${locale}/category/${id}` },
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <BackLink to="home" className="mb-4" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {t("categories")}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {category[nameKey]}
            </h1>
            <p className="text-muted-foreground">{category[descKey]}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {tools.map((tool) => (
          <a key={tool.id} href={`/${locale}/tool/${tool.id}`} className="block group">
            <Card className="h-full border-2 border-transparent hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
              <CardContent className="flex h-full min-h-[92px] flex-col gap-1 p-3 sm:p-4">
                <p className="text-sm font-semibold leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {tool[nameKey]}
                </p>
                <p className="text-xs leading-snug text-muted-foreground line-clamp-2">
                  {tool[descKey]}
                </p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

    </div>
  );
}

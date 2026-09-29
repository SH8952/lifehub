import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { categories } from "../../page";
import { SITE_URL, languageAlternates } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { categoryToolsMap } from "@/lib/tools-data";


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
    alternates: {
      languages: languageAlternates(`/category/${id}`),
    },
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

  const tools = categoryToolsMap[id] || [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <a key={tool.id} href={`/${locale}/tool/${tool.id}`} className="block group">
            <Card className="h-full border-2 border-transparent hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-lg font-semibold group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {tool[nameKey]}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {tool[descKey]}
                  </p>
                </div>
                <span className="text-xl text-muted-foreground group-hover:text-indigo-600 transition-colors">
                  →
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a href={`/${locale}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
          &larr; {t("back")}
        </a>
      </div>
    </div>
  );
}

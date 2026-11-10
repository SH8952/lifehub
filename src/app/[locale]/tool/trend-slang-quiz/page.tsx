import { SITE_URL, pageAlternates } from "@/lib/seo";
import TrendSlangQuiz from "./TrendSlangQuizClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/trend-slang-quiz"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/trend-slang-quiz`,
    },
  };
}

export default async function TrendSlangQuizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="trend-slang-quiz" />
      <TrendSlangQuiz initialLocale={locale as Locale} />
    </>
  );
}

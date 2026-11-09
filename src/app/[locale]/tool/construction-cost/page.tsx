import { SITE_URL, pageAlternates } from "@/lib/seo";
import ConstructionCostComponent from "./ConstructionCostComponentClient";
import { i18nData, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang] ?? i18nData.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/construction-cost"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/construction-cost`,
    },
  };
}

export default async function ConstructionCostPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ConstructionCostComponent initialLocale={locale as Locale} />;
}

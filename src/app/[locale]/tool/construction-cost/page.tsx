import { SITE_URL, languageAlternates } from "@/lib/seo";
import ConstructionCostComponent, { i18nData, type Locale } from "./ConstructionCostComponentClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang];
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/construction-cost"),
    },
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

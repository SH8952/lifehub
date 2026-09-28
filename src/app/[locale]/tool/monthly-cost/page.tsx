import { SITE_URL, languageAlternates } from "@/lib/seo";
import MonthlyCost, { i18nData, type Locale } from "./MonthlyCostClient";

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
      languages: languageAlternates("/tool/monthly-cost"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/monthly-cost`,
    },
  };
}

export default async function MonthlyCostPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MonthlyCost initialLocale={locale as Locale} />;
}

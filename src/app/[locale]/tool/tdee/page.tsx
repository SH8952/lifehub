import { SITE_URL, languageAlternates } from "@/lib/seo";
import TdeeCalculator, { i18nData, type Locale } from "./TdeeCalculatorClient";

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
      languages: languageAlternates("/tool/tdee"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/tdee`,
    },
  };
}

export default async function TdeePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TdeeCalculator initialLocale={locale as Locale} />;
}

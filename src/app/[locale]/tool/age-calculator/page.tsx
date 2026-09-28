import { SITE_URL, languageAlternates } from "@/lib/seo";
import AgeCalculator from "./AgeCalculatorClient";
import { i18nData, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang] ?? i18nData.ko;
  const title = `${d.inputs} | LifeHub`;
  return {
    title,
    description: d.whyAge,
    alternates: {
      languages: languageAlternates("/tool/age-calculator"),
    },
    openGraph: {
      title,
      description: d.whyAge,
      url: `${SITE_URL}/${locale}/tool/age-calculator`,
    },
  };
}

export default async function AgeCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AgeCalculator initialLocale={locale as Locale} />;
}

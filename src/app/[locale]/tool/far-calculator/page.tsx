import { SITE_URL, languageAlternates } from "@/lib/seo";
import FarCalculatorComponent, { i18nData, type Locale } from "./FarCalculatorComponentClient";

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
      languages: languageAlternates("/tool/far-calculator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/far-calculator`,
    },
  };
}

export default async function FarCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FarCalculatorComponent initialLocale={locale as Locale} />;
}

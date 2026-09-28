import { SITE_URL, languageAlternates } from "@/lib/seo";
import OvulationCalculator, { i18nData, type Locale } from "./OvulationCalculatorClient";

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
      languages: languageAlternates("/tool/ovulation"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/ovulation`,
    },
  };
}

export default async function OvulationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <OvulationCalculator initialLocale={locale as Locale} />;
}

import { SITE_URL, languageAlternates } from "@/lib/seo";
import VisaComparison, { i18nData, type Locale } from "./VisaComparisonClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang] ?? i18nData.ko;
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/visa-comparison"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/visa-comparison`,
    },
  };
}

export default async function VisaComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <VisaComparison initialLocale={locale as Locale} />;
}

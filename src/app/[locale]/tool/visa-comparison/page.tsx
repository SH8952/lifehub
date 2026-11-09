import { SITE_URL, pageAlternates } from "@/lib/seo";
import VisaComparison from "./VisaComparisonClient";
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
    alternates: pageAlternates(locale, "/tool/visa-comparison"),
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

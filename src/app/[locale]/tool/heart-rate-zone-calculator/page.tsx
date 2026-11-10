import { SITE_URL, pageAlternates } from "@/lib/seo";
import HeartRateZoneCalculator from "./HeartRateZoneCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/heart-rate-zone-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/heart-rate-zone-calculator`,
    },
  };
}

export default async function HeartRateZoneCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="heart-rate-zone-calculator" />
      <HeartRateZoneCalculator initialLocale={locale as Locale} />
    </>
  );
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import AgeCalculator from "./AgeCalculatorClient";
import { i18nData, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang] ?? i18nData.ko;
  const title = d.inputs;
  return {
    title,
    description: d.whyAge,
    alternates: pageAlternates(locale, "/tool/age-calculator"),
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
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="age-calculator" />
      <AgeCalculator initialLocale={locale as Locale} />
    </>
  );
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import RunningPaceCalculator from "./RunningPaceCalculatorClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/running-pace-calculator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/running-pace-calculator` },
  };
}

export default async function RunningPaceCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="running-pace-calculator" />
      <RunningPaceCalculator initialLocale={locale as Locale} />
    </>
  );
}

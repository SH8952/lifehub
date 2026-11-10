import { SITE_URL, pageAlternates } from "@/lib/seo";
import OneRepMaxCalculator from "./OneRepMaxCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/one-rep-max-calculator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/one-rep-max-calculator` },
  };
}

export default async function OneRepMaxCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="one-rep-max-calculator" />
      <OneRepMaxCalculator initialLocale={locale as Locale} />
    </>
  );
}

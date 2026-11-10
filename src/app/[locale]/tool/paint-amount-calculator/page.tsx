import { SITE_URL, pageAlternates } from "@/lib/seo";
import PaintAmountCalculator from "./PaintAmountCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/paint-amount-calculator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/paint-amount-calculator` },
  };
}

export default async function PaintAmountCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="paint-amount-calculator" />
      <PaintAmountCalculator initialLocale={locale as Locale} />
    </>
  );
}

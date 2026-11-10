import { SITE_URL, pageAlternates } from "@/lib/seo";
import BeverageAbvCoffeeRatioCalculator from "./BeverageAbvCoffeeRatioCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/beverage-abv-coffee-ratio-calculator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/beverage-abv-coffee-ratio-calculator` },
  };
}

export default async function BeverageAbvCoffeeRatioCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="beverage-abv-coffee-ratio-calculator" />
      <BeverageAbvCoffeeRatioCalculator initialLocale={locale as Locale} />
    </>
  );
}

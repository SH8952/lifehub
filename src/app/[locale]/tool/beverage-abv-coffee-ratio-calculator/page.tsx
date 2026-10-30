import { SITE_URL, languageAlternates } from "@/lib/seo";
import BeverageAbvCoffeeRatioCalculator from "./BeverageAbvCoffeeRatioCalculatorClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: { languages: languageAlternates("/tool/beverage-abv-coffee-ratio-calculator") },
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/beverage-abv-coffee-ratio-calculator` },
  };
}

export default async function BeverageAbvCoffeeRatioCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BeverageAbvCoffeeRatioCalculator initialLocale={locale as Locale} />;
}

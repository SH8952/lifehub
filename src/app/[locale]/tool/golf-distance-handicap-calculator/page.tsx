import { SITE_URL, pageAlternates } from "@/lib/seo";
import GolfDistanceHandicapCalculator from "./GolfDistanceHandicapCalculatorClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/golf-distance-handicap-calculator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/golf-distance-handicap-calculator` },
  };
}

export default async function GolfDistanceHandicapCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <GolfDistanceHandicapCalculator initialLocale={locale as Locale} />;
}

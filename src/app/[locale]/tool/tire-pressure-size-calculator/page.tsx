import { SITE_URL, pageAlternates } from "@/lib/seo";
import TirePressureSizeCalculator from "./TirePressureSizeCalculatorClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/tire-pressure-size-calculator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/tire-pressure-size-calculator` },
  };
}

export default async function TirePressureSizeCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TirePressureSizeCalculator initialLocale={locale as Locale} />;
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import WallpaperFlooringCalculator from "./WallpaperFlooringCalculatorClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/wallpaper-flooring-calculator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/wallpaper-flooring-calculator` },
  };
}

export default async function WallpaperFlooringCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <WallpaperFlooringCalculator initialLocale={locale as Locale} />;
}

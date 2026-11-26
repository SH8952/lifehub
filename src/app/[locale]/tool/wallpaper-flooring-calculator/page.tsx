import { SITE_URL, pageAlternates } from "@/lib/seo";
import WallpaperFlooringCalculator from "./WallpaperFlooringCalculatorClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";
import RelatedTools from "@/components/RelatedTools";
import KoCommentary from "@/components/KoCommentary";

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
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="wallpaper-flooring-calculator" />
      <WallpaperFlooringCalculator initialLocale={locale as Locale} />
      <KoCommentary locale={locale} toolId="wallpaper-flooring-calculator" />
      <RelatedTools locale={locale} toolId="wallpaper-flooring-calculator" />
    </>
  );
}

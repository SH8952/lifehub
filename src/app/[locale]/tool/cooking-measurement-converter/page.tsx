import { SITE_URL, pageAlternates } from "@/lib/seo";
import CookingMeasurementConverter from "./CookingMeasurementConverterClient";
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
    alternates: pageAlternates(locale, "/tool/cooking-measurement-converter"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/cooking-measurement-converter` },
  };
}

export default async function CookingMeasurementConverterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="cooking-measurement-converter" />
      <CookingMeasurementConverter initialLocale={locale as Locale} />
    </>
  );
}

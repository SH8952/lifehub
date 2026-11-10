import { SITE_URL, pageAlternates } from "@/lib/seo";
import RecipeServingConverter from "./RecipeServingConverterClient";
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
    alternates: pageAlternates(locale, "/tool/recipe-serving-converter"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/recipe-serving-converter` },
  };
}

export default async function RecipeServingConverterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="recipe-serving-converter" />
      <RecipeServingConverter initialLocale={locale as Locale} />
    </>
  );
}

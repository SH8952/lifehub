import { SITE_URL, languageAlternates } from "@/lib/seo";
import RecipeServingConverter from "./RecipeServingConverterClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: { languages: languageAlternates("/tool/recipe-serving-converter") },
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/recipe-serving-converter` },
  };
}

export default async function RecipeServingConverterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <RecipeServingConverter initialLocale={locale as Locale} />;
}

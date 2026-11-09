import { SITE_URL, pageAlternates } from "@/lib/seo";
import ClothingShoeSizeConverter from "./ClothingShoeSizeConverterClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/clothing-shoe-size-converter"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/clothing-shoe-size-converter` },
  };
}

export default async function ClothingShoeSizeConverterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ClothingShoeSizeConverter initialLocale={locale as Locale} />;
}

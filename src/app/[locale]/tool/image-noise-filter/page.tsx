import { SITE_URL, languageAlternates } from "@/lib/seo";
import ImageNoiseFilter from "./ImageNoiseFilterClient";
import { data, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/image-noise-filter"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-noise-filter`,
    },
  };
}

export default async function ImageNoiseFilterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImageNoiseFilter initialLocale={locale as Locale} />;
}

import { SITE_URL, languageAlternates } from "@/lib/seo";
import ImageMosaicBlur from "./ImageMosaicBlurClient";
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
      languages: languageAlternates("/tool/image-mosaic-blur"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-mosaic-blur`,
    },
  };
}

export default async function ImageMosaicBlurPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImageMosaicBlur initialLocale={locale as Locale} />;
}

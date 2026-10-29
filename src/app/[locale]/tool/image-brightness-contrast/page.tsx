import { SITE_URL, languageAlternates } from "@/lib/seo";
import ImageBrightnessContrast from "./ImageBrightnessContrastClient";
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
      languages: languageAlternates("/tool/image-brightness-contrast"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-brightness-contrast`,
    },
  };
}

export default async function ImageBrightnessContrastPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImageBrightnessContrast initialLocale={locale as Locale} />;
}

import { SITE_URL, languageAlternates } from "@/lib/seo";
import ImageTextWatermark from "./ImageTextWatermarkClient";
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
      languages: languageAlternates("/tool/image-text-watermark"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-text-watermark`,
    },
  };
}

export default async function ImageTextWatermarkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImageTextWatermark initialLocale={locale as Locale} />;
}

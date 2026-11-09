import { SITE_URL, pageAlternates } from "@/lib/seo";
import ImageSquareThumbnail from "./ImageSquareThumbnailClient";
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
    alternates: pageAlternates(locale, "/tool/image-square-thumbnail"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-square-thumbnail`,
    },
  };
}

export default async function ImageSquareThumbnailPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImageSquareThumbnail initialLocale={locale as Locale} />;
}

import { SITE_URL, languageAlternates } from "@/lib/seo";
import ImageRoundedCorners from "./ImageRoundedCornersClient";
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
      languages: languageAlternates("/tool/image-rounded-corners"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-rounded-corners`,
    },
  };
}

export default async function ImageRoundedCornersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImageRoundedCorners initialLocale={locale as Locale} />;
}

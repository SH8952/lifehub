import { SITE_URL, languageAlternates } from "@/lib/seo";
import ImagesToPdf from "./ImagesToPdfClient";
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
      languages: languageAlternates("/tool/images-to-pdf"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/images-to-pdf`,
    },
  };
}

export default async function ImagesToPdfPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImagesToPdf initialLocale={locale as Locale} />;
}

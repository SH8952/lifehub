import { SITE_URL, pageAlternates } from "@/lib/seo";
import PdfThumbnailExtract from "./PdfThumbnailExtractClient";
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
    alternates: pageAlternates(locale, "/tool/pdf-thumbnail-extract"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-thumbnail-extract`,
    },
  };
}

export default async function PdfThumbnailExtractPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfThumbnailExtract initialLocale={locale as Locale} />;
}

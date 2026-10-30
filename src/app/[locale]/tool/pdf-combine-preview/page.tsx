import { SITE_URL, languageAlternates } from "@/lib/seo";
import PdfCombinePreview from "./PdfCombinePreviewClient";
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
      languages: languageAlternates("/tool/pdf-combine-preview"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-combine-preview`,
    },
  };
}

export default async function PdfCombinePreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfCombinePreview initialLocale={locale as Locale} />;
}

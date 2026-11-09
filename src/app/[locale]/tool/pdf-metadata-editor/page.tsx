import { SITE_URL, pageAlternates } from "@/lib/seo";
import PdfMetadataEditor from "./PdfMetadataEditorClient";
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
    alternates: pageAlternates(locale, "/tool/pdf-metadata-editor"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-metadata-editor`,
    },
  };
}

export default async function PdfMetadataEditorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfMetadataEditor initialLocale={locale as Locale} />;
}

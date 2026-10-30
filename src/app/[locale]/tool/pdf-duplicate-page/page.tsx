import { SITE_URL, languageAlternates } from "@/lib/seo";
import PdfDuplicatePage from "./PdfDuplicatePageClient";
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
      languages: languageAlternates("/tool/pdf-duplicate-page"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-duplicate-page`,
    },
  };
}

export default async function PdfDuplicatePagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfDuplicatePage initialLocale={locale as Locale} />;
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import PdfPageNumbers from "./PdfPageNumbersClient";
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
    alternates: pageAlternates(locale, "/tool/pdf-page-numbers"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-page-numbers`,
    },
  };
}

export default async function PdfPageNumbersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfPageNumbers initialLocale={locale as Locale} />;
}

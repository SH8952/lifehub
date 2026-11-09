import { SITE_URL, pageAlternates } from "@/lib/seo";
import CsvToPdf from "./CsvToPdfClient";
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
    alternates: pageAlternates(locale, "/tool/csv-to-pdf"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/csv-to-pdf`,
    },
  };
}

export default async function CsvToPdfPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CsvToPdf initialLocale={locale as Locale} />;
}

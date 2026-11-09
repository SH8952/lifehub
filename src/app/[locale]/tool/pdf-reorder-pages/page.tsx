import { SITE_URL, pageAlternates } from "@/lib/seo";
import PdfReorderPages from "./PdfReorderPagesClient";
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
    alternates: pageAlternates(locale, "/tool/pdf-reorder-pages"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-reorder-pages`,
    },
  };
}

export default async function PdfReorderPagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfReorderPages initialLocale={locale as Locale} />;
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import PdfBookmarkAdder from "./PdfBookmarkAdderClient";
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
    alternates: pageAlternates(locale, "/tool/pdf-bookmark-adder"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-bookmark-adder`,
    },
  };
}

export default async function PdfBookmarkAdderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfBookmarkAdder initialLocale={locale as Locale} />;
}

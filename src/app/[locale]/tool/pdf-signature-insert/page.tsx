import { SITE_URL, pageAlternates } from "@/lib/seo";
import PdfSignatureInsert from "./PdfSignatureInsertClient";
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
    alternates: pageAlternates(locale, "/tool/pdf-signature-insert"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-signature-insert`,
    },
  };
}

export default async function PdfSignatureInsertPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfSignatureInsert initialLocale={locale as Locale} />;
}

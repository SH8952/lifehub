import { SITE_URL, pageAlternates } from "@/lib/seo";
import PdfBlankPageInsert from "./PdfBlankPageInsertClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

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
    alternates: pageAlternates(locale, "/tool/pdf-blank-page-insert"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-blank-page-insert`,
    },
  };
}

export default async function PdfBlankPageInsertPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="pdf-blank-page-insert" />
      <PdfBlankPageInsert initialLocale={locale as Locale} />
    </>
  );
}

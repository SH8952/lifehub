import { SITE_URL, pageAlternates } from "@/lib/seo";
import TextToPdf from "./TextToPdfClient";
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
    alternates: pageAlternates(locale, "/tool/text-to-pdf"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/text-to-pdf`,
    },
  };
}

export default async function TextToPdfPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="text-to-pdf" />
      <TextToPdf initialLocale={locale as Locale} />
    </>
  );
}

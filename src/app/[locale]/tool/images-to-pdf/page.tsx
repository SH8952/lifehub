import { SITE_URL, pageAlternates } from "@/lib/seo";
import ImagesToPdf from "./ImagesToPdfClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";
import RelatedTools from "@/components/RelatedTools";
import KoCommentary from "@/components/KoCommentary";

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
    alternates: pageAlternates(locale, "/tool/images-to-pdf"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/images-to-pdf`,
    },
  };
}

export default async function ImagesToPdfPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="images-to-pdf" />
      <ImagesToPdf initialLocale={locale as Locale} />
      <KoCommentary locale={locale} toolId="images-to-pdf" />
      <RelatedTools locale={locale} toolId="images-to-pdf" />
    </>
  );
}

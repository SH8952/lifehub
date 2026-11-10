import { SITE_URL, pageAlternates } from "@/lib/seo";
import CssBoxShadowGenerator from "./CssBoxShadowGeneratorClient";
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
    alternates: pageAlternates(locale, "/tool/css-box-shadow-generator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/css-box-shadow-generator`,
    },
  };
}

export default async function CssBoxShadowGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="css-box-shadow-generator" />
      <CssBoxShadowGenerator initialLocale={locale as Locale} />
    </>
  );
}

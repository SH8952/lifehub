import { SITE_URL, pageAlternates } from "@/lib/seo";
import ImageBrightnessContrast from "./ImageBrightnessContrastClient";
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
    alternates: pageAlternates(locale, "/tool/image-brightness-contrast"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-brightness-contrast`,
    },
  };
}

export default async function ImageBrightnessContrastPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="image-brightness-contrast" />
      <ImageBrightnessContrast initialLocale={locale as Locale} />
    </>
  );
}

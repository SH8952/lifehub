import { SITE_URL, pageAlternates } from "@/lib/seo";
import CoupleNameCompatibility from "./CoupleNameCompatibilityClient";
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
    alternates: pageAlternates(locale, "/tool/couple-name-compatibility"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/couple-name-compatibility`,
    },
  };
}

export default async function CoupleNameCompatibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="couple-name-compatibility" />
      <CoupleNameCompatibility initialLocale={locale as Locale} />
    </>
  );
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import SnsCharacterCounter from "./SnsCharacterCounterClient";
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
    alternates: pageAlternates(locale, "/tool/sns-character-counter"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/sns-character-counter`,
    },
  };
}

export default async function SnsCharacterCounterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="sns-character-counter" />
      <SnsCharacterCounter initialLocale={locale as Locale} />
      <KoCommentary locale={locale} toolId="sns-character-counter" />
      <RelatedTools locale={locale} toolId="sns-character-counter" />
    </>
  );
}

import { SITE_URL, languageAlternates } from "@/lib/seo";
import HtmlEntityConverter from "./HtmlEntityConverterClient";
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
    alternates: {
      languages: languageAlternates("/tool/html-entity-converter"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/html-entity-converter`,
    },
  };
}

export default async function HtmlEntityConverterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HtmlEntityConverter initialLocale={locale as Locale} />;
}

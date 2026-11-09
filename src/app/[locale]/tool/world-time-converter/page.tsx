import { SITE_URL, pageAlternates } from "@/lib/seo";
import WorldTimeConverter from "./WorldTimeConverterClient";
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
    alternates: pageAlternates(locale, "/tool/world-time-converter"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/world-time-converter`,
    },
  };
}

export default async function WorldTimeConverterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <WorldTimeConverter initialLocale={locale as Locale} />;
}

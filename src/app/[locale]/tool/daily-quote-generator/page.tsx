import { SITE_URL, pageAlternates } from "@/lib/seo";
import DailyQuoteGenerator from "./DailyQuoteGeneratorClient";
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
    alternates: pageAlternates(locale, "/tool/daily-quote-generator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/daily-quote-generator`,
    },
  };
}

export default async function DailyQuoteGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <DailyQuoteGenerator initialLocale={locale as Locale} />;
}

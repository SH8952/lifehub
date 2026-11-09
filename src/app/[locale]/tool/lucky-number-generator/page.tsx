import { SITE_URL, pageAlternates } from "@/lib/seo";
import LuckyNumberGenerator from "./LuckyNumberGeneratorClient";
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
    alternates: pageAlternates(locale, "/tool/lucky-number-generator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/lucky-number-generator`,
    },
  };
}

export default async function LuckyNumberGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LuckyNumberGenerator initialLocale={locale as Locale} />;
}

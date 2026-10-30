import { SITE_URL, languageAlternates } from "@/lib/seo";
import RandomNumberGenerator from "./RandomNumberGeneratorClient";
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
      languages: languageAlternates("/tool/random-number-generator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/random-number-generator`,
    },
  };
}

export default async function RandomNumberGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RandomNumberGenerator initialLocale={locale as Locale} />;
}

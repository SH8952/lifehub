import { SITE_URL, pageAlternates } from "@/lib/seo";
import MorseCodeConverter from "./MorseCodeConverterClient";
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
    alternates: pageAlternates(locale, "/tool/morse-code-converter"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/morse-code-converter`,
    },
  };
}

export default async function MorseCodeConverterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MorseCodeConverter initialLocale={locale as Locale} />;
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import LoremIpsumGenerator from "./LoremIpsumGeneratorClient";
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
    alternates: pageAlternates(locale, "/tool/lorem-ipsum-generator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/lorem-ipsum-generator`,
    },
  };
}

export default async function LoremIpsumGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LoremIpsumGenerator initialLocale={locale as Locale} />;
}

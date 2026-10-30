import { SITE_URL, languageAlternates } from "@/lib/seo";
import LastDigitFortune from "./LastDigitFortuneClient";
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
      languages: languageAlternates("/tool/last-digit-fortune"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/last-digit-fortune`,
    },
  };
}

export default async function LastDigitFortunePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LastDigitFortune initialLocale={locale as Locale} />;
}

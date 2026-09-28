import { SITE_URL, languageAlternates } from "@/lib/seo";
import LunchRoulette, { i18nData, type Locale } from "./LunchRouletteClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang];
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/lunch-roulette"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/lunch-roulette`,
    },
  };
}

export default async function LunchRoulettePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LunchRoulette initialLocale={locale as Locale} />;
}

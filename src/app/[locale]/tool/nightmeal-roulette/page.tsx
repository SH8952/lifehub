import { SITE_URL, languageAlternates } from "@/lib/seo";
import NightmealRoulette, { i18nData, type Locale } from "./NightmealRouletteClient";

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
      languages: languageAlternates("/tool/nightmeal-roulette"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/nightmeal-roulette`,
    },
  };
}

export default async function NightmealRoulettePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NightmealRoulette initialLocale={locale as Locale} />;
}

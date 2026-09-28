import { SITE_URL, languageAlternates } from "@/lib/seo";
import FastingTimer, { i18nData, type Locale } from "./FastingTimerClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang] ?? i18nData.ko;
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/fasting-timer"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/fasting-timer`,
    },
  };
}

export default async function FastingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FastingTimer initialLocale={locale as Locale} />;
}

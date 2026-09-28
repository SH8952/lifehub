import { SITE_URL, languageAlternates } from "@/lib/seo";
import MosquitoSound, { i18nData, type Locale } from "./MosquitoSoundClient";

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
      languages: languageAlternates("/tool/mosquito-sound"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/mosquito-sound`,
    },
  };
}

export default async function MosquitoSoundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MosquitoSound initialLocale={locale as Locale} />;
}

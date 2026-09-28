import { SITE_URL, languageAlternates } from "@/lib/seo";
import DiabetesCheck, { i18nData, type Locale } from "./DiabetesCheckClient";

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
      languages: languageAlternates("/tool/diabetes-check"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/diabetes-check`,
    },
  };
}

export default async function DiabetesCheckPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <DiabetesCheck initialLocale={locale as Locale} />;
}

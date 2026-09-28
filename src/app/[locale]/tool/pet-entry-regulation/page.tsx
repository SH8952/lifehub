import { SITE_URL, languageAlternates } from "@/lib/seo";
import PetEntryRegulation, { i18nData, type Locale } from "./PetEntryRegulationClient";

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
      languages: languageAlternates("/tool/pet-entry-regulation"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pet-entry-regulation`,
    },
  };
}

export default async function PetEntryRegulationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PetEntryRegulation initialLocale={locale as Locale} />;
}

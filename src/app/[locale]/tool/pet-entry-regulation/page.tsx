import { SITE_URL, pageAlternates } from "@/lib/seo";
import PetEntryRegulation from "./PetEntryRegulationClient";
import { i18nData, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang] ?? i18nData.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/pet-entry-regulation"),
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
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="pet-entry-regulation" />
      <PetEntryRegulation initialLocale={locale as Locale} />
    </>
  );
}

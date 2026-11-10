import { SITE_URL, pageAlternates } from "@/lib/seo";
import DailyAffirmationGenerator from "./DailyAffirmationGeneratorClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

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
    alternates: pageAlternates(locale, "/tool/daily-affirmation-generator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/daily-affirmation-generator`,
    },
  };
}

export default async function DailyAffirmationGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="daily-affirmation-generator" />
      <DailyAffirmationGenerator initialLocale={locale as Locale} />
    </>
  );
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import TravelDestinationRoulette from "./TravelDestinationRouletteClient";
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
    alternates: pageAlternates(locale, "/tool/travel-destination-roulette"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/travel-destination-roulette`,
    },
  };
}

export default async function TravelDestinationRoulettePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="travel-destination-roulette" />
      <TravelDestinationRoulette initialLocale={locale as Locale} />
    </>
  );
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import CaffeineIntakeTracker from "./CaffeineIntakeTrackerClient";
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
    alternates: pageAlternates(locale, "/tool/caffeine-intake-tracker"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/caffeine-intake-tracker`,
    },
  };
}

export default async function CaffeineIntakeTrackerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="caffeine-intake-tracker" />
      <CaffeineIntakeTracker initialLocale={locale as Locale} />
    </>
  );
}

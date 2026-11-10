import { SITE_URL, pageAlternates } from "@/lib/seo";
import DiceRoller from "./DiceRollerClient";
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
    alternates: pageAlternates(locale, "/tool/dice-roller"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/dice-roller`,
    },
  };
}

export default async function DiceRollerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="dice-roller" />
      <DiceRoller initialLocale={locale as Locale} />
    </>
  );
}

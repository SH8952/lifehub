import { SITE_URL, pageAlternates } from "@/lib/seo";
import BirthdayCompatibility from "./BirthdayCompatibilityClient";
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
    alternates: pageAlternates(locale, "/tool/birthday-compatibility"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/birthday-compatibility`,
    },
  };
}

export default async function BirthdayCompatibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="birthday-compatibility" />
      <BirthdayCompatibility initialLocale={locale as Locale} />
    </>
  );
}

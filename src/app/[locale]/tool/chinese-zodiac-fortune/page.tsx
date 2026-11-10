import { SITE_URL, pageAlternates } from "@/lib/seo";
import ChineseZodiacFortune from "./ChineseZodiacFortuneClient";
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
    alternates: pageAlternates(locale, "/tool/chinese-zodiac-fortune"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/chinese-zodiac-fortune`,
    },
  };
}

export default async function ChineseZodiacFortunePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="chinese-zodiac-fortune" />
      <ChineseZodiacFortune initialLocale={locale as Locale} />
    </>
  );
}

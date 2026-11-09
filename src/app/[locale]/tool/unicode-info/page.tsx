import { SITE_URL, pageAlternates } from "@/lib/seo";
import UnicodeInfo from "./UnicodeInfoClient";
import { data, type Locale } from "./data";

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
    alternates: pageAlternates(locale, "/tool/unicode-info"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/unicode-info`,
    },
  };
}

export default async function UnicodeInfoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <UnicodeInfo initialLocale={locale as Locale} />;
}

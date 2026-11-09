import { SITE_URL, pageAlternates } from "@/lib/seo";
import WouldYouRather from "./WouldYouRatherClient";
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
    alternates: pageAlternates(locale, "/tool/would-you-rather"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/would-you-rather`,
    },
  };
}

export default async function WouldYouRatherPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <WouldYouRather initialLocale={locale as Locale} />;
}

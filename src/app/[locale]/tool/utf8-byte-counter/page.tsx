import { SITE_URL, pageAlternates } from "@/lib/seo";
import Utf8ByteCounter from "./Utf8ByteCounterClient";
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
    alternates: pageAlternates(locale, "/tool/utf8-byte-counter"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/utf8-byte-counter`,
    },
  };
}

export default async function Utf8ByteCounterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <Utf8ByteCounter initialLocale={locale as Locale} />;
}

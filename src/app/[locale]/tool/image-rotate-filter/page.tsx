import { SITE_URL, pageAlternates } from "@/lib/seo";
import ImageRotateFilter from "./ImageRotateFilterClient";
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
    alternates: pageAlternates(locale, "/tool/image-rotate-filter"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/image-rotate-filter`,
    },
  };
}

export default async function ImageRotateFilterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImageRotateFilter initialLocale={locale as Locale} />;
}

import { SITE_URL, pageAlternates } from "@/lib/seo";
import MarkdownPreview from "./MarkdownPreviewClient";
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
    alternates: pageAlternates(locale, "/tool/markdown-preview"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/markdown-preview`,
    },
  };
}

export default async function MarkdownPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MarkdownPreview initialLocale={locale as Locale} />;
}

import { SITE_URL, languageAlternates } from "@/lib/seo";
import MarkdownToPdf from "./MarkdownToPdfClient";
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
    alternates: {
      languages: languageAlternates("/tool/markdown-to-pdf"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/markdown-to-pdf`,
    },
  };
}

export default async function MarkdownToPdfPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MarkdownToPdf initialLocale={locale as Locale} />;
}

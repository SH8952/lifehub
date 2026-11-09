import { SITE_URL, pageAlternates } from "@/lib/seo";
import ClipboardHistoryViewer from "./ClipboardHistoryViewerClient";
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
    alternates: pageAlternates(locale, "/tool/clipboard-history-viewer"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/clipboard-history-viewer`,
    },
  };
}

export default async function ClipboardHistoryViewerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ClipboardHistoryViewer initialLocale={locale as Locale} />;
}

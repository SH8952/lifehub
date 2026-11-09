import { SITE_URL, pageAlternates } from "@/lib/seo";
import CodeDiffChecker from "./CodeDiffCheckerClient";
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
    alternates: pageAlternates(locale, "/tool/code-diff-checker"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/code-diff-checker`,
    },
  };
}

export default async function CodeDiffCheckerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CodeDiffChecker initialLocale={locale as Locale} />;
}

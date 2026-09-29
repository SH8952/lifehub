import { SITE_URL, languageAlternates } from "@/lib/seo";
import PdfToImage from "./PdfToImageClient";
import { data, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/pdf-to-image"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pdf-to-image`,
    },
  };
}

export default async function PdfToImagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PdfToImage initialLocale={locale as Locale} />;
}

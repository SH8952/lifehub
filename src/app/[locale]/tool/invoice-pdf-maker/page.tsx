import { SITE_URL, pageAlternates } from "@/lib/seo";
import InvoicePdfMaker from "./InvoicePdfMakerClient";
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
    alternates: pageAlternates(locale, "/tool/invoice-pdf-maker"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/invoice-pdf-maker`,
    },
  };
}

export default async function InvoicePdfMakerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <InvoicePdfMaker initialLocale={locale as Locale} />;
}

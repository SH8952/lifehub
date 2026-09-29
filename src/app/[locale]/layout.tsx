import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL, languageAlternates, ogLocale } from "@/lib/seo";
import LanguageDropdown from "@/components/LanguageDropdown";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SITE_META: Record<Locale, { title: string; description: string }> = {
  ko: {
    title: "LifeHub — 무료 생활 계산기·유틸리티 모음",
    description:
      "건강, 재정, 여행, 생활까지 매일 쓰는 계산기와 체크리스트를 한곳에서. 가입 없이 즉시 사용, 브라우저에서 100% 처리.",
  },
  en: {
    title: "LifeHub — Free Everyday Calculators & Utilities",
    description:
      "Health, finance, travel, and daily-life calculators and checklists in one place. No sign-up, 100% processed in your browser.",
  },
  ja: {
    title: "LifeHub — 無料の生活計算機・ユーティリティ集",
    description:
      "健康・お金・旅行など、毎日役立つ計算機とチェックリストを1か所に。登録不要、ブラウザで100%処理。",
  },
  es: {
    title: "LifeHub — Calculadoras y Utilidades Gratuitas",
    description:
      "Calculadoras y listas de verificación para salud, finanzas, viajes y vida diaria, todo en un solo lugar. Sin registro, 100% en tu navegador.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = SITE_META[locale as Locale] ?? SITE_META.ko;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: `%s | LifeHub`,
    },
    description: meta.description,
    alternates: {
      languages: languageAlternates(),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: "LifeHub",
      locale: ogLocale(locale),
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <header className="border-b">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <a
                href={`/${locale}`}
                className="text-lg font-bold tracking-tight"
              >
                LifeHub
              </a>
              <nav className="flex items-center gap-4 text-sm">
                <LanguageDropdown />
              </nav>
            </div>
          </header>
          <main className="min-h-screen">{children}</main>
          <footer className="border-t py-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} LifeHub — All rights reserved.
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

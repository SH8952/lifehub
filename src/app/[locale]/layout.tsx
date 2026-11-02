import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL, languageAlternates, ogLocale } from "@/lib/seo";
import LanguageDropdown from "@/components/LanguageDropdown";
import { VisitorCounter } from "@/components/visitor-counter";
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
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const naverVerification = process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION;
  const verification: Metadata["verification"] =
    googleVerification || naverVerification
      ? {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(naverVerification
            ? { other: { "naver-site-verification": naverVerification } }
            : {}),
        }
      : undefined;
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
    verification,
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
  const tFooter = await getTranslations("Footer");
  return (
    <html lang={locale} className="scroll-smooth">
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
            <nav className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <a href={`/${locale}/about`} className="hover:underline">
                {tFooter("about")}
              </a>
              <a href={`/${locale}/contact`} className="hover:underline">
                {tFooter("contact")}
              </a>
              <a href={`/${locale}/privacy`} className="hover:underline">
                {tFooter("privacy")}
              </a>
              <a href={`/${locale}/terms`} className="hover:underline">
                {tFooter("terms")}
              </a>
            </nav>
            <div className="mb-2">
              <VisitorCounter />
            </div>
            © {new Date().getFullYear()} LifeHub — All rights reserved.
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

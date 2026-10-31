import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  ja: "JA",
  ko: "KO",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "ko",
  localePrefix: "always",
  // 브라우저 Accept-Language 기반 자동 감지를 끔 — 이게 꺼져 있지 않으면
  // 순수 도메인(/) 접속 시 접속자의 브라우저 언어 설정에 따라 다른 언어로
  // 리다이렉트될 수 있음. 꺼두면 "/"는 항상 defaultLocale(ko)인 "/ko"로
  // 리다이렉트됨 (URL 구조 자체는 변경 없음 — 기존 /ko, /en, /es, /ja 그대로 유지).
  localeDetection: false,
});

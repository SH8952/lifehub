"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const nativeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  es: "Español",
};

export default function LanguageDropdown() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSelect = (nextLocale: Locale) => {
    setOpen(false);
    if (nextLocale === locale) return;
    // 현재 보고 있던 페이지 경로를 유지한 채 언어만 전환합니다.
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded px-2 py-1 text-sm hover:bg-muted"
      >
        <span aria-hidden="true">🌐</span>
        <span>{nativeLabels[locale]}</span>
        <span
          aria-hidden="true"
          className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-1 w-32 overflow-hidden rounded-md border bg-white py-1 text-sm shadow-lg"
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => handleSelect(l)}
                className={`block w-full px-3 py-1.5 text-left hover:bg-muted ${
                  l === locale ? "font-semibold text-indigo-600" : ""
                }`}
              >
                {nativeLabels[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

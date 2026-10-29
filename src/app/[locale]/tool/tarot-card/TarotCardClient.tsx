"use client";

import { useEffect, useState } from "react";
import { cards, i18n, type Locale } from "./data";

function getTodaysCardIndex(): number {
  const now = new Date();
  const dayNum = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  return dayNum % cards.length;
}

export default function TarotCardClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [flipped, setFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState<number | null>(null);

  useEffect(() => {
    setCardIndex(getTodaysCardIndex());
  }, []);

  const card = cardIndex !== null ? cards[cardIndex] : null;

  const locales: Locale[] = ["ko", "en", "ja", "es"];
  const localeLabels: Record<Locale, string> = { ko: "한국어", en: "English", ja: "日本語", es: "Español" };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded px-3 py-1 text-sm ${
              locale === l ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {localeLabels[l]}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center">
          <div
            onClick={() => card && setFlipped(true)}
            className="relative h-64 w-40 cursor-pointer select-none"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative h-full w-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 border-blue-300 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-4xl">🔮</span>
                <span className="mt-3 px-4 text-center text-xs">{d.flipHint}</span>
              </div>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-100 p-3 text-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                {card && (
                  <>
                    <span className="text-5xl">{card.emoji}</span>
                    <span className="mt-3 text-base font-bold text-gray-900">{card.name[locale]}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {!flipped && (
            <button
              onClick={() => card && setFlipped(true)}
              disabled={!card}
              className="mt-6 rounded bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {d.draw}
            </button>
          )}
        </div>

        {flipped && card && (
          <div className="mt-6 space-y-4">
            <h3 className="text-center text-sm font-semibold text-gray-500">{d.todaysCard}</h3>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="mb-1 text-xs font-semibold text-blue-600">{d.generalLabel}</p>
              <p className="text-sm text-gray-800">{card.general[locale]}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="mb-1 text-xs font-semibold text-rose-600">{d.loveLabel}</p>
              <p className="text-sm text-gray-800">{card.love[locale]}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="mb-1 text-xs font-semibold text-amber-600">{d.moneyLabel}</p>
              <p className="text-sm text-gray-800">{card.money[locale]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

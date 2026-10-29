"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

export default function RandomPickerClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [itemsText, setItemsText] = useState("");
  const [removeAfterPick, setRemoveAfterPick] = useState(false);
  const [remaining, setRemaining] = useState<string[] | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function parseItems(): string[] {
    return itemsText
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  function handlePick() {
    let pool = remaining;
    if (pool === null) {
      const items = parseItems();
      if (items.length < 2) {
        setError(d.tooFewItems);
        return;
      }
      if (items.length > 50) {
        setError(d.tooManyItems);
        return;
      }
      pool = items;
    }

    if (pool.length === 0) {
      setError(d.allPicked);
      return;
    }

    setError(null);
    const index = Math.floor(Math.random() * pool.length);
    const selected = pool[index];
    setPicked(selected);

    if (removeAfterPick) {
      const next = pool.filter((_, i) => i !== index);
      setRemaining(next);
    } else {
      setRemaining(pool);
    }
  }

  function handleReset() {
    setRemaining(null);
    setPicked(null);
    setError(null);
  }

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
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.itemsLabel}</label>
          <textarea
            value={itemsText}
            onChange={(e) => {
              setItemsText(e.target.value);
              handleReset();
            }}
            className="w-full rounded border border-gray-300 px-3 py-2"
            rows={6}
            placeholder={d.itemsPlaceholder}
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={removeAfterPick}
              onChange={(e) => {
                setRemoveAfterPick(e.target.checked);
                handleReset();
              }}
            />
            {d.removeAfterPick}
          </label>
        </div>

        <button
          onClick={handlePick}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {picked ? d.pickAgain : d.pick}
        </button>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        {picked && (
          <div className="mt-6 space-y-3">
            <div className="rounded-xl bg-blue-50 p-8 text-center">
              <div className="mb-1 text-xs text-blue-600">{d.result}</div>
              <div className="text-3xl font-bold text-blue-700">{picked}</div>
            </div>

            {removeAfterPick && remaining && (
              <div>
                <h3 className="mb-1 text-sm font-semibold text-gray-700">
                  {d.remainingItems} ({remaining.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {remaining.map((item, i) => (
                    <span key={i} className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

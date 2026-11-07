"use client";

import { useMemo, useState } from "react";
import { i18n, questions, type BalanceQuestion, type Locale } from "./data";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function BalanceGameClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [order, setOrder] = useState<BalanceQuestion[]>(() => shuffle(questions));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<"a" | "b" | null>(null);

  const total = order.length;
  const current = order[index];
  const done = index >= total;

  function handlePick(choice: "a" | "b") {
    if (picked) return;
    setPicked(choice);
    setTimeout(() => {
      setPicked(null);
      setIndex((i) => i + 1);
    }, 450);
  }

  function handleRestart() {
    setOrder(shuffle(questions));
    setIndex(0);
    setPicked(null);
  }


  const progressPct = useMemo(() => (total > 0 ? Math.min(100, (index / total) * 100) : 0), [index, total]);

  return (
    <div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        {!done ? (
          <>
            <div className="mb-4">
              <div className="mb-1 flex justify-between text-xs text-gray-500">
                <span>{d.progressLabel}</span>
                <span>
                  {Math.min(index + 1, total)} / {total}
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-blue-600 transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                onClick={() => handlePick("a")}
                disabled={!!picked}
                className={`rounded-xl border-2 p-6 text-center text-lg font-semibold transition-colors ${
                  picked === "a"
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : picked === "b"
                      ? "border-gray-200 text-gray-400"
                      : "border-gray-200 text-gray-800 hover:border-blue-400 hover:bg-blue-50"
                }`}
              >
                {current.a[locale]}
              </button>
              <button
                onClick={() => handlePick("b")}
                disabled={!!picked}
                className={`rounded-xl border-2 p-6 text-center text-lg font-semibold transition-colors ${
                  picked === "b"
                    ? "border-rose-600 bg-rose-50 text-rose-700"
                    : picked === "a"
                      ? "border-gray-200 text-gray-400"
                      : "border-gray-200 text-gray-800 hover:border-rose-400 hover:bg-rose-50"
                }`}
              >
                {current.b[locale]}
              </button>
            </div>
          </>
        ) : (
          <div className="py-8 text-center">
            <p className="mb-2 text-xl font-bold text-gray-900">{d.completeTitle}</p>
            <p className="mb-6 text-sm text-gray-600">{d.completeSubtitle}</p>
            <button
              onClick={handleRestart}
              className="rounded bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
            >
              {d.restart}
            </button>
          </div>
        )}

        {!done && (
          <div className="mt-6 text-center">
            <button onClick={handleRestart} className="text-sm text-gray-500 hover:underline">
              {d.restart}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

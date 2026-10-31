"use client";

import { useState } from "react";
import { CronExpressionParser } from "cron-parser";
import { i18n, type Locale } from "./data";

type Tab = "build" | "check";
type FieldMode = "every" | "specific";

export default function CronGeneratorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [tab, setTab] = useState<Tab>("build");

  const [minuteMode, setMinuteMode] = useState<FieldMode>("every");
  const [minuteValue, setMinuteValue] = useState("0");
  const [hourMode, setHourMode] = useState<FieldMode>("every");
  const [hourValue, setHourValue] = useState("9");
  const [domMode, setDomMode] = useState<FieldMode>("every");
  const [domValue, setDomValue] = useState("1");
  const [monthMode, setMonthMode] = useState<FieldMode>("every");
  const [monthValue, setMonthValue] = useState("1");
  const [dowMode, setDowMode] = useState<FieldMode>("every");
  const [dowValue, setDowValue] = useState("1");

  const [checkInput, setCheckInput] = useState("");
  const [copied, setCopied] = useState(false);

  const [nextRuns, setNextRuns] = useState<string[] | null>(null);
  const [error, setError] = useState(false);

  function fieldStr(mode: FieldMode, value: string): string {
    return mode === "every" ? "*" : value;
  }

  function buildExpression(): string {
    return [
      fieldStr(minuteMode, minuteValue),
      fieldStr(hourMode, hourValue),
      fieldStr(domMode, domValue),
      fieldStr(monthMode, monthValue),
      fieldStr(dowMode, dowValue),
    ].join(" ");
  }

  function computeNextRuns(expression: string) {
    try {
      const parsed = CronExpressionParser.parse(expression);
      const runs: string[] = [];
      for (let i = 0; i < 5; i++) {
        runs.push(parsed.next().toDate().toLocaleString());
      }
      setNextRuns(runs);
      setError(false);
    } catch {
      setNextRuns(null);
      setError(true);
    }
  }

  function handleBuild() {
    computeNextRuns(buildExpression());
  }

  function handleCheck() {
    computeNextRuns(checkInput.trim());
  }

  function copyExpression(expr: string) {
    navigator.clipboard?.writeText(expr).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const locales: Locale[] = ["ko", "en", "ja", "es"];
  const localeLabels: Record<Locale, string> = { ko: "한국어", en: "English", ja: "日本語", es: "Español" };

  const expression = tab === "build" ? buildExpression() : checkInput;

  function renderField(
    label: string,
    mode: FieldMode,
    setMode: (m: FieldMode) => void,
    value: string,
    setValue: (v: string) => void,
    min: number,
    max: number
  ) {
    return (
      <div className="mb-3">
        <label className="mb-1 block text-sm text-gray-600">{label}</label>
        <div className="flex gap-2">
          <button
            onClick={() => setMode("every")}
            className={`rounded px-2 py-1 text-xs ${mode === "every" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            {d.everyLabel}
          </button>
          <button
            onClick={() => setMode("specific")}
            className={`rounded px-2 py-1 text-xs ${mode === "specific" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            {d.specificLabel}
          </button>
          {mode === "specific" && (
            <input
              type="number"
              min={min}
              max={max}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-20 rounded border border-gray-300 px-2 py-1 text-sm"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex gap-2">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded px-3 py-1 text-sm ${
              locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"
            }`}
          >
            {localeLabels[l]}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setTab("build")}
            className={`flex-1 rounded px-3 py-2 text-sm ${tab === "build" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            {d.tabBuild}
          </button>
          <button
            onClick={() => setTab("check")}
            className={`flex-1 rounded px-3 py-2 text-sm ${tab === "check" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            {d.tabCheck}
          </button>
        </div>

        {tab === "build" ? (
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>
            {renderField(d.minute, minuteMode, setMinuteMode, minuteValue, setMinuteValue, 0, 59)}
            {renderField(d.hour, hourMode, setHourMode, hourValue, setHourValue, 0, 23)}
            {renderField(d.dayOfMonth, domMode, setDomMode, domValue, setDomValue, 1, 31)}
            {renderField(d.month, monthMode, setMonthMode, monthValue, setMonthValue, 1, 12)}
            {renderField(d.dayOfWeek, dowMode, setDowMode, dowValue, setDowValue, 0, 6)}

            <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 p-3">
              <code className="text-sm font-semibold text-gray-900">{expression}</code>
              <button
                onClick={() => copyExpression(expression)}
                className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-700 hover:bg-gray-300"
              >
                {copied ? d.copied : d.copy}
              </button>
            </div>

            <button
              onClick={handleBuild}
              className="mt-4 w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              {d.nextRuns}
            </button>
          </div>
        ) : (
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.cronInput}</label>
            <input
              type="text"
              value={checkInput}
              onChange={(e) => setCheckInput(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder={d.cronInputPlaceholder}
            />
            <button
              onClick={handleCheck}
              className="mt-4 w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              {d.nextRuns}
            </button>
          </div>
        )}

        {error && <p className="mt-4 text-sm text-red-600">{d.invalidExpression}</p>}

        {nextRuns && (
          <div className="mt-6 space-y-2">
            <h3 className="text-sm font-semibold text-gray-700">{d.nextRuns}</h3>
            <ol className="space-y-1">
              {nextRuns.map((run, i) => (
                <li key={i} className="rounded-lg bg-blue-50 px-3 py-2 text-sm text-gray-900">
                  {i + 1}. {run}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

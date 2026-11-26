"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const SIMILAR_CHARS = new Set(["0", "O", "1", "l", "I", "o"]);

type CharOpts = { upper: boolean; lower: boolean; numbers: boolean; symbols: boolean; excludeSimilar: boolean };

// 선택한 문자 종류별 풀(유사 문자 제외 옵션 반영)
function buildPools(opts: CharOpts): string[] {
  const pools: string[] = [];
  if (opts.upper) pools.push(UPPERCASE);
  if (opts.lower) pools.push(LOWERCASE);
  if (opts.numbers) pools.push(NUMBERS);
  if (opts.symbols) pools.push(SYMBOLS);
  return pools
    .map((p) => (opts.excludeSimilar ? p.split("").filter((c) => !SIMILAR_CHARS.has(c)).join("") : p))
    .filter((p) => p.length > 0);
}

// 0 이상 max 미만의 균등한 난수(모듈로 편향 제거)
function randomInt(max: number): number {
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  do {
    crypto.getRandomValues(buf);
  } while (buf[0] >= limit);
  return buf[0] % max;
}

// 선택한 종류마다 최소 1자를 넣고, 나머지는 전체 풀에서 뽑은 뒤 섞습니다.
function generatePassword(length: number, pools: string[]): string {
  if (pools.length === 0) return "";
  const all = pools.join("");
  const chars: string[] = [];
  for (const pool of pools) {
    if (chars.length < length) chars.push(pool[randomInt(pool.length)]);
  }
  while (chars.length < length) chars.push(all[randomInt(all.length)]);
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

export default function PasswordGeneratorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [count, setCount] = useState("5");
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  function handleGenerate() {
    const n = Math.max(1, Math.min(100, Math.round(parseFloat(count)) || 1));
    const pools = buildPools({ upper, lower, numbers, symbols, excludeSimilar });
    if (pools.length === 0) {
      setPasswords([]);
      return;
    }
    const results: string[] = [];
    for (let i = 0; i < n; i++) {
      results.push(generatePassword(length, pools));
    }
    setPasswords(results);
    setCopiedIndex(null);
    setCopiedAll(false);
  }

  function copyOne(index: number) {
    navigator.clipboard?.writeText(passwords[index]).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  }

  function copyAll() {
    navigator.clipboard?.writeText(passwords.join("\n")).then(() => {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1500);
    });
  }

  const presets = [8, 12, 16, 20, 32, 64];

  return (
    <div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">
            {d.length}: {length}
          </label>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setLength(p)}
                className={`rounded px-2 py-1 text-xs ${
                  length === p ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{d.lengthTip}</p>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-gray-600">{d.charTypes}</label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)} />
              {d.uppercase}
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)} />
              {d.lowercase}
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
              {d.numbers}
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
              {d.symbols}
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={excludeSimilar} onChange={(e) => setExcludeSimilar(e.target.checked)} />
            {d.excludeSimilar}
          </label>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.count}</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            min={1}
            max={100}
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.generate}
        </button>

        {passwords.length > 0 && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">{d.result}</h3>
              <button onClick={copyAll} className="rounded bg-gray-100 px-3 py-1 text-xs text-gray-700 hover:bg-gray-200">
                {copiedAll ? d.copied : d.copyAll}
              </button>
            </div>
            <div className="space-y-2">
              {passwords.map((pw, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                  <code className="break-all text-sm text-gray-900">{pw}</code>
                  <button
                    onClick={() => copyOne(i)}
                    className="ml-2 shrink-0 rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700"
                  >
                    {copiedIndex === i ? d.copied : d.copy}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { i18n, type Locale } from "./data";

const ROWS = 10;
const ROW_HEIGHT = 36;
const COL_GAP = 70;
const TOP_PAD = 36;
const SIDE_PAD = 30;
const BOTTOM_PAD = 36;

const COLORS = [
  "#2563eb",
  "#dc2626",
  "#16a34a",
  "#ca8a04",
  "#9333ea",
  "#0891b2",
  "#be185d",
  "#4b5563",
  "#ea580c",
  "#65a30d",
];

function generateRungs(n: number): boolean[][] {
  const rungs: boolean[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: boolean[] = new Array(Math.max(n - 1, 0)).fill(false);
    let lastPlaced = -2;
    for (let gap = 0; gap < n - 1; gap++) {
      if (gap === lastPlaced + 1) continue;
      if (Math.random() < 0.35) {
        row[gap] = true;
        lastPlaced = gap;
      }
    }
    rungs.push(row);
  }
  return rungs;
}

function computeMapping(n: number, rungs: boolean[][]): number[] {
  const mapping: number[] = [];
  for (let start = 0; start < n; start++) {
    let cur = start;
    for (let r = 0; r < ROWS; r++) {
      if (cur > 0 && rungs[r][cur - 1]) {
        cur -= 1;
      } else if (cur < n - 1 && rungs[r][cur]) {
        cur += 1;
      }
    }
    mapping.push(cur);
  }
  return mapping;
}

function computePath(start: number, n: number, rungs: boolean[][]): number[] {
  const path: number[] = [start];
  let cur = start;
  for (let r = 0; r < ROWS; r++) {
    if (cur > 0 && rungs[r][cur - 1]) {
      cur -= 1;
    } else if (cur < n - 1 && rungs[r][cur]) {
      cur += 1;
    }
    path.push(cur);
  }
  return path;
}

export default function LadderGameClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [count, setCount] = useState(4);
  const [names, setNames] = useState<string[]>(["", "", "", ""]);
  const [results, setResults] = useState<string[]>(["", "", "", ""]);

  const [rungs, setRungs] = useState<boolean[][] | null>(null);
  const [activeParticipant, setActiveParticipant] = useState<number | null>(null);
  const [revealedRows, setRevealedRows] = useState(0);
  const [revealedParticipants, setRevealedParticipants] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- count(참가자 수) 변경 시 배열 길이 동기화, 의도된 derived-state 패턴
    setNames((prev) => {
      const next = [...prev];
      while (next.length < count) next.push("");
      return next.slice(0, count);
    });
    setResults((prev) => {
      const next = [...prev];
      while (next.length < count) next.push("");
      return next.slice(0, count);
    });
  }, [count]);

  useEffect(() => {
    if (activeParticipant === null) return;
    if (revealedRows >= ROWS) return;
    const timer = setTimeout(() => setRevealedRows((r) => r + 1), 120);
    return () => clearTimeout(timer);
  }, [activeParticipant, revealedRows]);

  const mapping = useMemo(() => {
    if (!rungs) return null;
    return computeMapping(count, rungs);
  }, [rungs, count]);

  const activePath = useMemo(() => {
    if (!rungs || activeParticipant === null) return null;
    return computePath(activeParticipant, count, rungs);
  }, [rungs, activeParticipant, count]);

  function handleGenerate() {
    setRungs(generateRungs(count));
    setActiveParticipant(null);
    setRevealedRows(0);
    setRevealedParticipants(new Set());
    setShowAll(false);
  }

  function handleReveal(i: number) {
    setActiveParticipant(i);
    setRevealedRows(0);
    setRevealedParticipants((prev) => new Set(prev).add(i));
  }

  function handleReset() {
    setRungs(null);
    setActiveParticipant(null);
    setRevealedRows(0);
    setRevealedParticipants(new Set());
    setShowAll(false);
  }

  const locales: Locale[] = ["ko", "en", "ja", "es"];
  const localeLabels: Record<Locale, string> = { ko: "한국어", en: "English", ja: "日本語", es: "Español" };

  const colX = (c: number) => SIDE_PAD + c * COL_GAP;
  const rowY = (r: number) => TOP_PAD + r * ROW_HEIGHT + ROW_HEIGHT / 2;
  const svgWidth = SIDE_PAD * 2 + (count - 1) * COL_GAP;
  const svgHeight = TOP_PAD + ROWS * ROW_HEIGHT + BOTTOM_PAD;

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
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.participantCountLabel}</label>
          <select
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value));
              handleReset();
            }}
            className="w-full rounded border border-gray-300 px-3 py-2"
          >
            {Array.from({ length: 9 }, (_, i) => i + 2).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.participantNamesLabel}</label>
            <div className="space-y-2">
              {names.map((v, i) => (
                <input
                  key={i}
                  value={v}
                  onChange={(e) => {
                    const next = [...names];
                    next[i] = e.target.value;
                    setNames(next);
                  }}
                  placeholder={`${d.participantPlaceholder} ${i + 1}`}
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                />
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.resultsLabel}</label>
            <div className="space-y-2">
              {results.map((v, i) => (
                <input
                  key={i}
                  value={v}
                  onChange={(e) => {
                    const next = [...results];
                    next[i] = e.target.value;
                    setResults(next);
                  }}
                  placeholder={`${d.resultPlaceholder} ${i + 1}`}
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.generate}
        </button>

        {rungs && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <svg width={svgWidth} height={svgHeight} className="mx-auto">
                {Array.from({ length: count }, (_, c) => (
                  <text
                    key={`pname-${c}`}
                    x={colX(c)}
                    y={TOP_PAD - 14}
                    textAnchor="middle"
                    className="fill-gray-700 text-xs"
                  >
                    {names[c]?.trim() || `${d.participantPlaceholder}${c + 1}`}
                  </text>
                ))}

                {Array.from({ length: count }, (_, c) => (
                  <line
                    key={`v-${c}`}
                    x1={colX(c)}
                    y1={TOP_PAD}
                    x2={colX(c)}
                    y2={TOP_PAD + ROWS * ROW_HEIGHT}
                    stroke="#d1d5db"
                    strokeWidth={2}
                  />
                ))}

                {rungs.map((row, r) =>
                  row.map(
                    (has, gap) =>
                      has && (
                        <line
                          key={`h-${r}-${gap}`}
                          x1={colX(gap)}
                          y1={rowY(r)}
                          x2={colX(gap + 1)}
                          y2={rowY(r)}
                          stroke="#d1d5db"
                          strokeWidth={2}
                        />
                      )
                  )
                )}

                {activePath &&
                  activePath.slice(0, revealedRows + 1).map((col, idx) => {
                    if (idx === 0) return null;
                    const prevCol = activePath[idx - 1];
                    const r = idx - 1;
                    const color = COLORS[activeParticipant! % COLORS.length];
                    if (prevCol !== col) {
                      return (
                        <g key={`seg-${idx}`}>
                          <line
                            x1={colX(prevCol)}
                            y1={rowY(r)}
                            x2={colX(col)}
                            y2={rowY(r)}
                            stroke={color}
                            strokeWidth={3}
                          />
                          <line
                            x1={colX(col)}
                            y1={TOP_PAD + r * ROW_HEIGHT}
                            x2={colX(col)}
                            y2={rowY(r)}
                            stroke={color}
                            strokeWidth={3}
                          />
                        </g>
                      );
                    }
                    return (
                      <line
                        key={`seg-${idx}`}
                        x1={colX(col)}
                        y1={TOP_PAD + r * ROW_HEIGHT}
                        x2={colX(col)}
                        y2={TOP_PAD + (r + 1) * ROW_HEIGHT}
                        stroke={color}
                        strokeWidth={3}
                      />
                    );
                  })}

                {Array.from({ length: count }, (_, c) => {
                  const isRevealed =
                    showAll ||
                    (mapping ? Array.from(revealedParticipants).some((p) => mapping[p] === c) : false);
                  return (
                    <text
                      key={`rname-${c}`}
                      x={colX(c)}
                      y={TOP_PAD + ROWS * ROW_HEIGHT + 22}
                      textAnchor="middle"
                      className="fill-gray-700 text-xs"
                    >
                      {isRevealed ? results[c]?.trim() || `${d.resultPlaceholder}${c + 1}` : "?"}
                    </text>
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from({ length: count }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleReveal(i)}
                  className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                  style={{
                    borderBottom: `3px solid ${COLORS[i % COLORS.length]}`,
                  }}
                >
                  {names[i]?.trim() || `${d.participantPlaceholder}${i + 1}`} — {d.clickToReveal}
                </button>
              ))}
            </div>

            {activeParticipant !== null && mapping && revealedRows >= ROWS && (
              <div className="mt-4 rounded-xl bg-blue-50 p-4 text-center">
                <span className="font-semibold text-blue-700">
                  {(names[activeParticipant]?.trim() || `${d.participantPlaceholder}${activeParticipant + 1}`) +
                    d.finalResultPrefix}
                  :{" "}
                  {results[mapping[activeParticipant]]?.trim() ||
                    `${d.resultPlaceholder}${mapping[activeParticipant] + 1}`}
                </span>
              </div>
            )}

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setShowAll(true)}
                className="flex-1 rounded bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                {d.revealAll}
              </button>
              <button
                onClick={handleReset}
                className="flex-1 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {d.reset}
              </button>
            </div>

            {showAll && mapping && (
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-semibold text-gray-700">{d.allResultsTitle}</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {mapping.map((finalCol, startCol) => (
                    <li key={startCol}>
                      {(names[startCol]?.trim() || `${d.participantPlaceholder}${startCol + 1}`) +
                        d.finalResultPrefix}
                      : {results[finalCol]?.trim() || `${d.resultPlaceholder}${finalCol + 1}`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {!rungs && <p className="mt-4 text-sm text-gray-500">{d.generateFirst}</p>}
      </div>
    </div>
  );
}

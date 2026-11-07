"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  principal: string;
  principalHint: string;
  rate: string;
  rateHint: string;
  period: string;
  periodHint: string;
  compound: string;
  compoundOptions: Record<string, string>;
  calculate: string;
  results: string;
  maturityInterest: string;
  maturityPrincipalInterest: string;
  afterTaxInterest: string;
  taxRate: string;
  preset: string;
  footer: string;
}

function formatKRW(n: number): string {
  return n.toLocaleString("ko-KR");
}

export default function FixedDepositInterest({
  d,
  lang,
}: {
  d: Data;
  lang: Locale;
}) {
  const [principal, setPrincipal] = useState(100000000);
  const [rate, setRate] = useState(3);
  const [period, setPeriod] = useState(1);
  const [compound, setCompound] = useState("simple");
  const [result, setResult] = useState<{
    interest: number;
    total: number;
    afterTax: number;
  } | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = rate / 100;
    let interest = 0;
    if (compound === "simple") {
      interest = principal * r * period;
    } else {
      // Compound annually
      interest = principal * Math.pow(1 + r, period) - principal;
    }
    const afterTax = interest * (1 - 0.154); // 15.4% withholding tax (14% + local 1.4%)
    setResult({ interest: Math.round(interest), total: Math.round(principal + interest), afterTax: Math.round(afterTax) });
  }

  const presets = [
    { label: "1억 원", value: 100000000 },
    { label: "5억 원", value: 500000000 },
    { label: "10억 원", value: 1000000000 },
    { label: "100억 원", value: 10000000000 },
  ];

  const ratePresets = [
    { label: "1.0%", value: 1.0 },
    { label: "1.5%", value: 1.5 },
    { label: "2.0%", value: 2.0 },
    { label: "2.5%", value: 2.5 },
    { label: "3.0%", value: 3.0 },
  ];

  return (
    <div className="mt-8">
      <Card className="border shadow-md">
        <CardContent className="space-y-6 p-6">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.preset}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {presets.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPrincipal(p.value)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    principal === p.value
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.principal}</p>
              <p className="text-xs text-muted-foreground">{d.principalHint}</p>
              <input
                type="number"
                step="1000000"
                min="1000000"
                value={principal}
                onChange={(e) => setPrincipal(Math.max(1000000, Number(e.target.value)))}
                className="mt-2 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.rate}</p>
              <p className="text-xs text-muted-foreground">{d.rateHint}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {ratePresets.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setRate(p.value)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      rate === p.value
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <input
                type="number"
                step="0.1"
                min="0"
                max="30"
                value={rate}
                onChange={(e) => setRate(Math.max(0, Math.min(30, Number(e.target.value))))}
                className="mt-2 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.period}</p>
              <p className="text-xs text-muted-foreground">{d.periodHint}</p>
              <input
                type="number"
                step="1"
                min="1"
                max="30"
                value={period}
                onChange={(e) => setPeriod(Math.max(1, Math.min(30, Number(e.target.value))))}
                className="mt-2 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.compound}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCompound("simple")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    compound === "simple"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {d.compoundOptions.simple}
                </button>
                <button
                  type="button"
                  onClick={() => setCompound("compound")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    compound === "compound"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {d.compoundOptions.compound}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-3 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              {d.calculate}
            </button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">{d.results}</h2>
          <Card className="border-2 border-indigo-200 shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-base text-muted-foreground">{d.maturityInterest}</span>
                <span className="text-2xl font-bold text-indigo-600">{formatKRW(result.interest)}원</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base text-muted-foreground">{d.maturityPrincipalInterest}</span>
                <span className="text-2xl font-bold text-gray-800">{formatKRW(result.total)}원</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-base text-muted-foreground">{d.afterTaxInterest}</span>
                  <span className="text-2xl font-bold text-green-600">{formatKRW(result.afterTax)}원</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{d.taxRate}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <p className="mt-6 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Locale = "ko" | "en" | "ja" | "es";

interface Preset {
  label: string;
  value: number;
}

interface Currency {
  symbol: string;
  code: string;
}

interface Data {
  loanAmount: string;
  loanAmountHint: string;
  rate: string;
  rateHint: string;
  term: string;
  termHint: string;
  repaymentMethod: string;
  equalPrincipal: string;
  equalPrincipalInterest: string;
  calculate: string;
  results: string;
  monthlyPayment: string;
  totalInterest: string;
  totalRepayment: string;
  monthlyPaymentNote: string;
  preset: string;
  monthlyPaymentFirst: string;
  monthlyPaymentLast: string;
  currency: Currency;
  amountPresets: Preset[];
  ratePresets: Preset[];
  termPresets: Preset[];
  footer: string;
}

function formatKRW(n: number, currency: Currency): string {
  const formatted = n.toLocaleString("ko-KR");
  return `${formatted}${currency.symbol}`;
}

function formatPercent(n: number): string {
  return n.toFixed(2) + "%";
}

interface Result {
  monthlyFirst: number;
  monthlyLast: number;
  monthlyFixed: number | null;
  totalInterest: number;
  totalRepayment: number;
}

export default function SecondLoanCalculator({
  d,
  lang,
}: {
  d: Data;
  lang: Locale;
}) {
  const [amount, setAmount] = useState(100000000);
  const [rate, setRate] = useState(5.5);
  const [term, setTerm] = useState(10);
  const [method, setMethod] = useState<"equal-principal" | "equal-total">("equal-principal");
  const [result, setResult] = useState<Result | null>(null);

  function calculate() {
    const P = amount;
    const r = rate / 100 / 12; // monthly rate
    const n = term * 12; // total months

    if (method === "equal-principal") {
      // Equal principal: monthly principal = P/n, interest = remaining * r
      const monthlyPrincipal = P / n;
      let remaining = P;
      let totalInterest = 0;
      const monthlyFirst = monthlyPrincipal + remaining * r;
      const monthlyLast = monthlyPrincipal + (P - (n - 1) * monthlyPrincipal) * r;

      for (let i = 0; i < n; i++) {
        totalInterest += remaining * r;
        remaining -= monthlyPrincipal;
      }

      setResult({
        monthlyFirst: Math.round(monthlyFirst),
        monthlyLast: Math.round(monthlyLast),
        monthlyFixed: null,
        totalInterest: Math.round(totalInterest),
        totalRepayment: Math.round(P + totalInterest),
      });
    } else {
      // Equal principal + interest (fixed monthly payment)
      let monthlyFixed = 0;
      if (r > 0) {
        monthlyFixed = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyFixed = P / n;
      }

      const totalRepayment = Math.round(monthlyFixed * n);
      const totalInterest = totalRepayment - P;

      setResult({
        monthlyFirst: Math.round(monthlyFixed),
        monthlyLast: Math.round(monthlyFixed),
        monthlyFixed: Math.round(monthlyFixed),
        totalInterest: Math.round(totalInterest),
        totalRepayment,
      });
    }
  }

  return (
    <div className="mt-8">
      <Card className="border shadow-md">
        <CardContent className="space-y-6 p-6">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.preset}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {d.amountPresets.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setAmount(p.value)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    amount === p.value
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculate();
            }}
            className="space-y-4"
          >
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.loanAmount}</p>
              <p className="text-xs text-muted-foreground">{d.loanAmountHint}</p>
              <input
                type="number"
                step="10000000"
                min="10000000"
                max="100000000000"
                value={amount}
                onChange={(e) => setAmount(Math.max(10000000, Number(e.target.value)))}
                className="mt-2 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.rate}</p>
              <p className="text-xs text-muted-foreground">{d.rateHint}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {d.ratePresets.map((p) => (
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
                min="0.1"
                max="30"
                value={rate}
                onChange={(e) => setRate(Math.max(0.1, Math.min(30, Number(e.target.value))))}
                className="mt-2 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.term}</p>
              <p className="text-xs text-muted-foreground">{d.termHint}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {d.termPresets.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setTerm(p.value)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      term === p.value
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
                step="1"
                min="1"
                max="40"
                value={term}
                onChange={(e) => setTerm(Math.max(1, Math.min(40, Number(e.target.value))))}
                className="mt-2 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">{d.repaymentMethod}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setMethod("equal-principal")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    method === "equal-principal"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {d.equalPrincipal}
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("equal-total")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    method === "equal-total"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {d.equalPrincipalInterest}
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
              {result.monthlyFixed !== null ? (
                <div className="flex items-center justify-between">
                  <span className="text-base text-muted-foreground">{d.monthlyPayment}</span>
                  <span className="text-2xl font-bold text-indigo-600">{formatKRW(result.monthlyFixed, d.currency)}</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-muted-foreground">{d.monthlyPaymentFirst}</span>
                    <span className="text-2xl font-bold text-indigo-600">{formatKRW(result.monthlyFirst, d.currency)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-muted-foreground">{d.monthlyPaymentLast}</span>
                    <span className="text-2xl font-bold text-indigo-600">{formatKRW(result.monthlyLast, d.currency)}</span>
                  </div>
                </div>
              )}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-base text-muted-foreground">{d.totalInterest}</span>
                  <span className="text-2xl font-bold text-orange-600">{formatKRW(result.totalInterest, d.currency)}</span>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-base text-muted-foreground">{d.totalRepayment}</span>
                  <span className="text-2xl font-bold text-green-600">{formatKRW(result.totalRepayment, d.currency)}</span>
                </div>
              </div>
              {method === "equal-principal" && (
                <p className="text-xs text-muted-foreground">{d.monthlyPaymentNote}</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      <p className="mt-6 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}

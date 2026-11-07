"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

type Mode = "annual" | "monthly";

const PENSION_RATE = 0.0475; // 2026년 기준 근로자 부담 (9.5%/2)
const PENSION_CAP_BASE = 6_590_000; // 2026년 7월 기준 국민연금 기준소득월액 상한
const HEALTH_RATE = 0.03595; // 2026년 기준 근로자 부담 (7.19%/2)
const LONGTERM_RATE_OF_HEALTH = 0.1314; // 장기요양보험료율 / 건강보험료율
const EMPLOYMENT_RATE = 0.009; // 근로자 부담

interface Result {
  grossMonthly: number;
  pension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  incomeTax: number;
  localIncomeTax: number;
  totalDeduction: number;
  netPay: number;
}

function approximateIncomeTax(taxable: number, dependents: number): number {
  if (taxable <= 0) return 0;
  let rate: number;
  if (taxable < 1_060_000) rate = 0;
  else if (taxable < 1_500_000) rate = 0.005;
  else if (taxable < 3_000_000) rate = 0.02;
  else if (taxable < 5_000_000) rate = 0.05;
  else if (taxable < 8_000_000) rate = 0.08;
  else if (taxable < 10_000_000) rate = 0.12;
  else rate = 0.15;

  let tax = taxable * rate;
  const extraDependents = Math.max(0, dependents - 1);
  const reduction = Math.min(0.3, extraDependents * 0.05);
  tax = tax * (1 - reduction);
  return Math.max(0, tax);
}

export default function SalaryNetCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [mode, setMode] = useState<Mode>("annual");
  const [amount, setAmount] = useState("");
  const [taxFreeAllowance, setTaxFreeAllowance] = useState("200000");
  const [dependents, setDependents] = useState("1");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const amt = parseFloat(amount);
    const allowance = parseFloat(taxFreeAllowance);
    const dep = Math.max(1, Math.round(parseFloat(dependents) || 1));
    if (isNaN(amt) || isNaN(allowance) || amt <= 0 || allowance < 0) {
      setResult(null);
      return;
    }

    const grossMonthly = mode === "annual" ? amt / 12 : amt;
    const taxable = Math.max(0, grossMonthly - allowance);

    const pension = Math.min(taxable, PENSION_CAP_BASE) * PENSION_RATE;
    const healthInsurance = taxable * HEALTH_RATE;
    const longTermCare = healthInsurance * LONGTERM_RATE_OF_HEALTH;
    const employmentInsurance = taxable * EMPLOYMENT_RATE;
    const incomeTax = approximateIncomeTax(taxable, dep);
    const localIncomeTax = incomeTax * 0.1;

    const totalDeduction =
      pension + healthInsurance + longTermCare + employmentInsurance + incomeTax + localIncomeTax;
    const netPay = grossMonthly - totalDeduction;

    setResult({
      grossMonthly,
      pension,
      healthInsurance,
      longTermCare,
      employmentInsurance,
      incomeTax,
      localIncomeTax,
      totalDeduction,
      netPay,
    });
  }


  return (
    <div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setMode("annual")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              mode === "annual" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.modeAnnual}
          </button>
          <button
            onClick={() => setMode("monthly")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              mode === "monthly" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.modeMonthly}
          </button>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.amount}</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            placeholder="0"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.taxFreeAllowance}</label>
            <input
              type="number"
              value={taxFreeAllowance}
              onChange={(e) => setTaxFreeAllowance(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="200000"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.dependents}</label>
            <input
              type="number"
              value={dependents}
              onChange={(e) => setDependents(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="1"
              min={1}
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.calculate}
        </button>

        {result && (
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">{d.result}</h3>
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="text-xs text-gray-500">{d.grossMonthly}</div>
              <div className="text-xl font-bold text-gray-900">
                {result.grossMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>

            <table className="w-full text-sm">
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="py-2 text-gray-600">{d.pension}</td>
                  <td className="py-2 text-right">{result.pension.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-2 text-gray-600">{d.healthInsurance}</td>
                  <td className="py-2 text-right">{result.healthInsurance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-2 text-gray-600">{d.longTermCare}</td>
                  <td className="py-2 text-right">{result.longTermCare.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-2 text-gray-600">{d.employmentInsurance}</td>
                  <td className="py-2 text-right">{result.employmentInsurance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-2 text-gray-600">{d.incomeTax}</td>
                  <td className="py-2 text-right">{result.incomeTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-2 text-gray-600">{d.localIncomeTax}</td>
                  <td className="py-2 text-right">{result.localIncomeTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                </tr>
                <tr className="border-t border-gray-200 font-semibold">
                  <td className="py-2 text-amber-600">{d.totalDeduction}</td>
                  <td className="py-2 text-right text-amber-600">
                    {result.totalDeduction.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="rounded-lg bg-blue-50 p-4">
              <div className="text-xs text-blue-600">{d.netPay}</div>
              <div className="text-2xl font-bold text-blue-700">
                {result.netPay.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

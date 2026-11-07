"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const FIRST_NAMES = ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Jamie", "Riley", "Avery", "Kai", "Sam", "민준", "서연", "지호", "하윤"];
const LAST_NAMES = ["Smith", "Lee", "Kim", "Park", "Johnson", "Garcia", "Brown", "Wilson", "Nguyen", "Chen"];
const CITIES = ["Seoul", "Tokyo", "New York", "London", "Paris", "Sydney", "Toronto", "Berlin", "Madrid", "Osaka"];
const DOMAINS = ["example.com", "mail.com", "testmail.com", "sample.org"];

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

type Field = "id" | "name" | "email" | "phone" | "city";

function generateRecord(index: number, fields: Field[]): Record<string, string | number> {
  const first = pick(FIRST_NAMES);
  const last = pick(LAST_NAMES);
  const record: Record<string, string | number> = {};
  if (fields.includes("id")) record.id = index + 1;
  if (fields.includes("name")) record.name = `${first} ${last}`;
  if (fields.includes("email")) record.email = `${first.toLowerCase()}.${last.toLowerCase()}${randInt(1, 99)}@${pick(DOMAINS)}`;
  if (fields.includes("phone")) record.phone = `010-${randInt(1000, 9999)}-${randInt(1000, 9999)}`;
  if (fields.includes("city")) record.city = pick(CITIES);
  return record;
}

function toCsv(records: Record<string, string | number>[]): string {
  if (records.length === 0) return "";
  const headers = Object.keys(records[0]);
  const lines = [headers.join(",")];
  for (const r of records) {
    lines.push(headers.map((h) => String(r[h])).join(","));
  }
  return lines.join("\n");
}

export default function MockDataGenerator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [count, setCount] = useState(5);
  const [format, setFormat] = useState<"json" | "csv">("json");
  const [fields, setFields] = useState<Field[]>(["id", "name", "email", "phone", "city"]);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleField = (f: Field) => {
    setFields((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  };

  const generate = () => {
    const records = Array.from({ length: count }, (_, i) => generateRecord(i, fields));
    setResult(format === "json" ? JSON.stringify(records, null, 2) : toCsv(records));
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const fieldOptions: { key: Field; label: string }[] = [
    { key: "id", label: d.fieldId },
    { key: "name", label: d.fieldName },
    { key: "email", label: d.fieldEmail },
    { key: "phone", label: d.fieldPhone },
    { key: "city", label: d.fieldCity },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.subtitle,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.countLabel}</label>
              <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.formatLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={format} onChange={(e) => setFormat(e.target.value as typeof format)}>
                <option value="json">JSON</option>
                <option value="csv">CSV</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.fieldsLabel}</label>
            <div className="flex flex-wrap gap-3">
              {fieldOptions.map((f) => (
                <label key={f.key} className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" checked={fields.includes(f.key)} onChange={() => toggleField(f.key)} />
                  {f.label}
                </label>
              ))}
            </div>
          </div>

          <button onClick={generate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.generateBtn}
          </button>

          {result && (
            <div>
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-medium">{d.resultLabel}</p>
                <button onClick={copyResult} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                  {copied ? d.copied : d.copyBtn}
                </button>
              </div>
              <pre className="max-h-80 overflow-auto rounded-md bg-muted/30 p-3 font-mono text-xs">{result}</pre>
            </div>
          )}
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {d.howSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}

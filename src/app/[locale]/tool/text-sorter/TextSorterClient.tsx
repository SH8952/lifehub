"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type SortMode = "asc" | "desc" | "numeric" | "length" | "reverse" | "random";

export default function TextSorter({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");
  const [mode, setMode] = useState<SortMode>("asc");
  const [ignoreCase, setIgnoreCase] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const result = useMemo(() => {
    let lines = input.split("\n");
    if (removeEmpty) lines = lines.filter((l) => l.trim() !== "");

    const arr = [...lines];
    switch (mode) {
      case "asc":
        arr.sort((a, b) => (ignoreCase ? a.toLowerCase().localeCompare(b.toLowerCase()) : a.localeCompare(b)));
        break;
      case "desc":
        arr.sort((a, b) => (ignoreCase ? b.toLowerCase().localeCompare(a.toLowerCase()) : b.localeCompare(a)));
        break;
      case "numeric":
        arr.sort((a, b) => {
          const na = parseFloat(a);
          const nb = parseFloat(b);
          const aValid = !isNaN(na);
          const bValid = !isNaN(nb);
          if (aValid && bValid) return na - nb;
          if (aValid) return -1;
          if (bValid) return 1;
          return 0;
        });
        break;
      case "length":
        arr.sort((a, b) => a.length - b.length);
        break;
      case "reverse":
        arr.reverse();
        break;
      case "random": {
        void shuffleSeed;
        for (let i = arr.length - 1; i > 0; i--) {
          // eslint-disable-next-line react-hooks/purity -- shuffleSeed를 의도적 트리거로 쓰는 재섞기 패턴, 결과는 버튼 클릭 시에만 의미있게 변경됨
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        break;
      }
    }
    return arr.join("\n");
  }, [input, mode, ignoreCase, removeEmpty, shuffleSeed]);

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const modes: { key: SortMode; label: string }[] = [
    { key: "asc", label: d.sortAsc },
    { key: "desc", label: d.sortDesc },
    { key: "numeric", label: d.sortNumeric },
    { key: "length", label: d.sortLength },
    { key: "reverse", label: d.sortReverse },
    { key: "random", label: d.sortRandom },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
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
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2">
            {modes.map((m) => (
              <button
                key={m.key}
                onClick={() => {
                  setMode(m.key);
                  if (m.key === "random") setShuffleSeed((s) => s + 1);
                }}
                className={`rounded-md border px-3 py-1.5 text-sm ${mode === m.key ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} />
              {d.caseInsensitive}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={removeEmpty} onChange={(e) => setRemoveEmpty(e.target.checked)} />
              {d.removeEmpty}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={d.placeholder}
                rows={14}
                className="w-full rounded-md border px-3 py-2 font-mono text-sm"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="block text-sm font-medium">{d.outputLabel}</label>
                <button onClick={copyResult} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                  {copied ? d.copied : d.copyBtn}
                </button>
              </div>
              <textarea readOnly value={result} rows={14} className="w-full rounded-md border bg-muted/30 px-3 py-2 font-mono text-sm" />
            </div>
          </div>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}

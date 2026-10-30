"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clipboard, Trash2, Copy } from "lucide-react";
import { data, type Locale } from "./data";

interface HistoryItem {
  id: number;
  text: string;
  time: string;
}

export default function ClipboardHistoryViewer({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [nextId, setNextId] = useState(1);

  const capture = async () => {
    setError("");
    setNotice(false);
    try {
      const text = await navigator.clipboard.readText();
      if (!text) return;
      if (history.length > 0 && history[0].text === text) {
        setNotice(true);
        setTimeout(() => setNotice(false), 2000);
        return;
      }
      const item: HistoryItem = { id: nextId, text, time: new Date().toLocaleTimeString() };
      setNextId((n) => n + 1);
      setHistory((h) => [item, ...h].slice(0, 50));
    } catch {
      setError(d.permissionError);
    }
  };

  const copyItem = (item: HistoryItem) => {
    navigator.clipboard.writeText(item.text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1200);
  };

  const deleteItem = (id: number) => {
    setHistory((h) => h.filter((i) => i.id !== id));
  };

  const clearAll = () => setHistory([]);

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
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <button onClick={capture} className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              <Clipboard className="h-4 w-4" />
              {d.captureBtn}
            </button>
            {history.length > 0 && (
              <button onClick={clearAll} className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted">
                {d.clearAllBtn}
              </button>
            )}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {notice && <p className="text-sm text-amber-600">{d.duplicateNotice}</p>}

          <p className="text-sm font-medium text-muted-foreground">{d.historyLabel.replace("{count}", String(history.length))}</p>

          {history.length === 0 ? (
            <p className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">{d.emptyState}</p>
          ) : (
            <ul className="space-y-2">
              {history.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-3 rounded-md border p-3">
                  <div className="flex-1 overflow-hidden">
                    <p className="whitespace-pre-wrap break-words text-sm">{item.text}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button onClick={() => copyItem(item)} className="rounded-md border p-1.5 hover:bg-muted" title={d.copyBtn}>
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => deleteItem(item.id)} className="rounded-md border p-1.5 hover:bg-muted" title={d.deleteBtn}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  {copiedId === item.id && <span className="absolute text-xs text-indigo-600">{d.copied}</span>}
                </li>
              ))}
            </ul>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, X } from "lucide-react";
import { data, type Locale } from "./data";

interface Item {
  id: number;
  text: string;
  done: boolean;
}

export default function SimpleChecklistMaker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(1);

  const addItem = () => {
    const text = input.trim();
    if (!text) return;
    setItems((prev) => [...prev, { id: nextId, text, done: false }]);
    setNextId((n) => n + 1);
    setInput("");
  };

  const toggleItem = (id: number) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const clearCompleted = () => setItems((prev) => prev.filter((it) => !it.done));
  const clearAll = () => setItems([]);

  const total = items.length;
  const doneCount = items.filter((it) => it.done).length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
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
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addItem();
              }}
              placeholder={d.inputPlaceholder}
              className="flex-1 rounded-md border px-3 py-2 text-sm"
            />
            <button onClick={addItem} className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              <Plus className="h-4 w-4" />
              {d.addButton}
            </button>
          </div>

          {total > 0 && (
            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>{d.progressLabel}</span>
                <span className="font-semibold">
                  {doneCount}/{total} ({pct}%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-indigo-500 transition-all" style={{ width: `${pct}%` }} />
              </div>
            </div>
          )}

          {items.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">{d.emptyState}</p>
          ) : (
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-2 rounded-md border px-3 py-2">
                  <input type="checkbox" checked={item.done} onChange={() => toggleItem(item.id)} className="h-4 w-4 shrink-0" />
                  <span className={`flex-1 text-sm ${item.done ? "text-muted-foreground line-through" : ""}`}>{item.text}</span>
                  <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-red-600">
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <div className="flex gap-2">
              <button onClick={clearCompleted} className="rounded-md border px-3 py-1.5 text-xs hover:bg-muted">
                {d.clearCompleted}
              </button>
              <button onClick={clearAll} className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs hover:bg-muted">
                <Trash2 className="h-3.5 w-3.5" />
                {d.clearAll}
              </button>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do",
  "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "enim",
  "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "aliquip",
  "ex", "ea", "commodo", "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat",
  "non", "proident", "sunt", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum",
];

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function makeSentence(wordCount: number): string {
  const words: string[] = [];
  for (let i = 0; i < wordCount; i++) {
    words.push(WORDS[randInt(0, WORDS.length - 1)]);
  }
  return capitalize(words.join(" ")) + ".";
}

function makeParagraph(sentenceCount: number): string {
  const sentences: string[] = [];
  for (let i = 0; i < sentenceCount; i++) {
    sentences.push(makeSentence(randInt(6, 14)));
  }
  return sentences.join(" ");
}

export default function LoremIpsumGenerator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [unit, setUnit] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [count, setCount] = useState(3);
  const [startWith, setStartWith] = useState(true);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let out = "";
    if (unit === "words") {
      const words: string[] = [];
      for (let i = 0; i < count; i++) words.push(WORDS[randInt(0, WORDS.length - 1)]);
      out = capitalize(words.join(" "));
    } else if (unit === "sentences") {
      const sentences: string[] = [];
      for (let i = 0; i < count; i++) sentences.push(makeSentence(randInt(6, 14)));
      out = sentences.join(" ");
    } else {
      const paragraphs: string[] = [];
      for (let i = 0; i < count; i++) paragraphs.push(makeParagraph(randInt(4, 7)));
      out = paragraphs.join("\n\n");
    }
    if (startWith) {
      out = "Lorem ipsum dolor sit amet, " + out.charAt(0).toLowerCase() + out.slice(1);
    }
    setResult(out);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
              <label className="mb-1 block text-sm font-medium">{d.unitLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={unit} onChange={(e) => setUnit(e.target.value as typeof unit)}>
                <option value="paragraphs">{d.unitParagraphs}</option>
                <option value="sentences">{d.unitSentences}</option>
                <option value="words">{d.unitWords}</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.countLabel}</label>
              <input
                type="number"
                min={1}
                max={50}
                value={count}
                onChange={(e) => setCount(Math.max(1, Math.min(50, Number(e.target.value))))}
                className="w-full rounded-md border px-2 py-1.5 text-sm"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={startWith} onChange={(e) => setStartWith(e.target.checked)} />
            {d.startWithLabel}
          </label>

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
              <div className="whitespace-pre-wrap rounded-md bg-muted/30 p-3 text-sm">{result}</div>
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

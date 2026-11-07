"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Copy, Check, Download } from "lucide-react";
import { data, type Locale } from "./data";

export default function ImageBase64Converter({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [base64Result, setBase64Result] = useState("");
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [copied, setCopied] = useState(false);

  const [pasteValue, setPasteValue] = useState("");
  const [decodedUrl, setDecodedUrl] = useState("");
  const [decodeError, setDecodeError] = useState(false);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setBase64Result(reader.result as string);
    reader.readAsDataURL(file);
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const copyResult = () => {
    navigator.clipboard?.writeText(base64Result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handlePaste = (value: string) => {
    setPasteValue(value);
    const trimmed = value.trim();
    if (!trimmed) {
      setDecodedUrl("");
      setDecodeError(false);
      return;
    }
    const url = trimmed.startsWith("data:") ? trimmed : `data:image/png;base64,${trimmed}`;
    const img = new Image();
    img.onload = () => {
      setDecodedUrl(url);
      setDecodeError(false);
    };
    img.onerror = () => {
      setDecodedUrl("");
      setDecodeError(true);
    };
    img.src = url;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
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
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setMode("encode")}
          className={`rounded-md border px-4 py-2 text-sm ${mode === "encode" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.encodeTab}
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`rounded-md border px-4 py-2 text-sm ${mode === "decode" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.decodeTab}
        </button>
      </div>

      {mode === "encode" ? (
        <div className="space-y-6">
          {!base64Result ? (
            <div
              onClick={() => document.getElementById("b64-file-input")?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              className={`flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 text-center transition-colors ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-muted-foreground/30 hover:bg-muted/50"}`}
            >
              <UploadCloud className="h-10 w-10 text-muted-foreground" />
              <p className="font-medium">{d.uploadLabel}</p>
              <p className="text-sm text-muted-foreground">{d.uploadHint}</p>
              <input
                id="b64-file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
            </div>
          ) : (
            <>
              <Card>
                <CardContent className="flex flex-col items-center gap-3 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
                  <img src={base64Result} alt={fileName} className="max-h-60 rounded-md object-contain" />
                  <button
                    onClick={() => document.getElementById("b64-file-input-2")?.click()}
                    className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted"
                  >
                    {d.changeImage}
                  </button>
                  <input
                    id="b64-file-input-2"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFile(file);
                    }}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="mb-2 text-sm font-semibold text-muted-foreground">{d.resultLabel}</p>
                  <textarea
                    readOnly
                    value={base64Result}
                    className="h-40 w-full rounded-md border p-2 font-mono text-xs"
                  />
                  <button
                    onClick={copyResult}
                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? d.copiedLabel : d.copyButton}
                  </button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <textarea
                value={pasteValue}
                onChange={(e) => handlePaste(e.target.value)}
                placeholder={d.pasteLabel}
                className="h-40 w-full rounded-md border p-2 font-mono text-xs"
              />
            </CardContent>
          </Card>
          {decodeError && <p className="text-sm text-red-500">{d.invalidLabel}</p>}
          {decodedUrl && (
            <Card>
              <CardContent className="flex flex-col items-center gap-3 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
                <img src={decodedUrl} alt="decoded" className="max-h-72 rounded-md object-contain" />
                <a
                  href={decodedUrl}
                  download="decoded-image.png"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  <Download className="h-4 w-4" />
                  {d.download}
                </a>
              </CardContent>
            </Card>
          )}
        </div>
      )}

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

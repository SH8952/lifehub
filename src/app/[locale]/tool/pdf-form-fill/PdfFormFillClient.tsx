"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  PDFDocument,
  PDFTextField,
  PDFCheckBox,
  PDFRadioGroup,
  PDFDropdown,
} from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2 } from "lucide-react";
import { data, type Locale } from "./data";

type FieldKind = "text" | "checkbox" | "radio" | "dropdown" | "unsupported";

interface FieldInfo {
  name: string;
  kind: FieldKind;
  options?: string[];
}

export default function PdfFormFill({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [fields, setFields] = useState<FieldInfo[]>([]);
  const [values, setValues] = useState<Record<string, string | boolean>>({});
  const [flatten, setFlatten] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    setFile(f);
    setResultUrl("");
    const bytes = await f.arrayBuffer();
    const doc = await PDFDocument.load(bytes);
    const form = doc.getForm();
    const detected: FieldInfo[] = [];
    const initialValues: Record<string, string | boolean> = {};

    for (const field of form.getFields()) {
      const name = field.getName();
      if (field instanceof PDFTextField) {
        detected.push({ name, kind: "text" });
        initialValues[name] = field.getText() ?? "";
      } else if (field instanceof PDFCheckBox) {
        detected.push({ name, kind: "checkbox" });
        initialValues[name] = field.isChecked();
      } else if (field instanceof PDFRadioGroup) {
        detected.push({ name, kind: "radio", options: field.getOptions() });
        initialValues[name] = field.getSelected() ?? "";
      } else if (field instanceof PDFDropdown) {
        detected.push({ name, kind: "dropdown", options: field.getOptions() });
        initialValues[name] = field.getSelected()?.[0] ?? "";
      } else {
        detected.push({ name, kind: "unsupported" });
      }
    }
    setFields(detected);
    setValues(initialValues);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const applyFill = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const form = doc.getForm();

      for (const info of fields) {
        const value = values[info.name];
        try {
          if (info.kind === "text") {
            form.getTextField(info.name).setText(String(value ?? ""));
          } else if (info.kind === "checkbox") {
            const cb = form.getCheckBox(info.name);
            if (value) cb.check();
            else cb.uncheck();
          } else if (info.kind === "radio" && value) {
            form.getRadioGroup(info.name).select(String(value));
          } else if (info.kind === "dropdown" && value) {
            form.getDropdown(info.name).select(String(value));
          }
        } catch {
          /* skip fields that fail to set */
        }
      }

      if (flatten) form.flatten();

      const outBytes = await doc.save();
      const blob = new Blob([outBytes.slice().buffer], { type: "application/pdf" });
      if (resultUrl) URL.revokeObjectURL(resultUrl);
      setResultUrl(URL.createObjectURL(blob));
    } finally {
      setIsProcessing(false);
    }
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
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        id="pdf-form-fill-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!file ? (
        <div
          onClick={() => document.getElementById("pdf-form-fill-input")?.click()}
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
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <Card>
            <CardContent className="flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{file.name}</p>
                <button
                  onClick={() => document.getElementById("pdf-form-fill-input")?.click()}
                  className="rounded-md border px-3 py-1 text-xs hover:bg-muted"
                >
                  {d.changeFile}
                </button>
              </div>

              {fields.length === 0 ? (
                <p className="text-sm text-muted-foreground">{d.noFieldsFound}</p>
              ) : (
                <>
                  <label className="text-sm font-medium">{d.fieldsLabel}</label>
                  <div className="flex flex-col gap-3">
                    {fields.map((info) => (
                      <div key={info.name}>
                        <label className="mb-1 block text-xs text-muted-foreground">{info.name}</label>
                        {info.kind === "text" && (
                          <input
                            type="text"
                            value={String(values[info.name] ?? "")}
                            onChange={(e) => setValues((prev) => ({ ...prev, [info.name]: e.target.value }))}
                            className="w-full rounded-md border px-3 py-2 text-sm"
                          />
                        )}
                        {info.kind === "checkbox" && (
                          <input
                            type="checkbox"
                            checked={Boolean(values[info.name])}
                            onChange={(e) => setValues((prev) => ({ ...prev, [info.name]: e.target.checked }))}
                            className="h-5 w-5"
                          />
                        )}
                        {(info.kind === "radio" || info.kind === "dropdown") && (
                          <select
                            value={String(values[info.name] ?? "")}
                            onChange={(e) => setValues((prev) => ({ ...prev, [info.name]: e.target.value }))}
                            className="w-full rounded-md border px-3 py-2 text-sm"
                          >
                            <option value="">{d.selectOption}</option>
                            {(info.options ?? []).map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    ))}
                  </div>

                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={flatten} onChange={(e) => setFlatten(e.target.checked)} className="h-4 w-4" />
                    {d.flattenLabel}
                  </label>

                  <button
                    onClick={applyFill}
                    disabled={isProcessing}
                    className="inline-flex w-fit items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {isProcessing ? d.processing : d.generateButton}
                  </button>
                </>
              )}
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download="filled.pdf"
              className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              {d.download}
            </a>
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

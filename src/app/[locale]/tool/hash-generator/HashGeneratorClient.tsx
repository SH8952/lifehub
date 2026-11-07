"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";
import { md5 } from "./md5";

interface HashResults {
  md5: string;
  sha1: string;
  sha256: string;
  sha384: string;
  sha512: string;
}

interface HmacResults {
  sha1: string;
  sha256: string;
  sha384: string;
  sha512: string;
}

async function digestHex(algorithm: string, data: Uint8Array): Promise<string> {
  const buffer = await crypto.subtle.digest(algorithm, data as BufferSource);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacHex(algorithm: string, key: Uint8Array, data: Uint8Array): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey("raw", key as BufferSource, { name: "HMAC", hash: algorithm }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, data as BufferSource);
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function HashGeneratorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [text, setText] = useState("");
  const [hmacKey, setHmacKey] = useState("");
  const [results, setResults] = useState<HashResults | null>(null);
  const [hmacResults, setHmacResults] = useState<HmacResults | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  async function handleCalculate() {
    const data = new TextEncoder().encode(text);
    const [sha1, sha256, sha384, sha512] = await Promise.all([
      digestHex("SHA-1", data),
      digestHex("SHA-256", data),
      digestHex("SHA-384", data),
      digestHex("SHA-512", data),
    ]);
    setResults({ md5: md5(text), sha1, sha256, sha384, sha512 });

    if (hmacKey.trim()) {
      const keyBytes = new TextEncoder().encode(hmacKey);
      const [hSha1, hSha256, hSha384, hSha512] = await Promise.all([
        hmacHex("SHA-1", keyBytes, data),
        hmacHex("SHA-256", keyBytes, data),
        hmacHex("SHA-384", keyBytes, data),
        hmacHex("SHA-512", keyBytes, data),
      ]);
      setHmacResults({ sha1: hSha1, sha256: hSha256, sha384: hSha384, sha512: hSha512 });
    } else {
      setHmacResults(null);
    }
  }

  function copy(field: string, value: string) {
    navigator.clipboard?.writeText(value).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    });
  }


  const hashRows: { key: keyof HashResults; label: string }[] = [
    { key: "md5", label: "MD5" },
    { key: "sha1", label: "SHA-1" },
    { key: "sha256", label: "SHA-256" },
    { key: "sha384", label: "SHA-384" },
    { key: "sha512", label: "SHA-512" },
  ];

  const hmacRows: { key: keyof HmacResults; label: string }[] = [
    { key: "sha1", label: "HMAC-SHA1" },
    { key: "sha256", label: "HMAC-SHA256" },
    { key: "sha384", label: "HMAC-SHA384" },
    { key: "sha512", label: "HMAC-SHA512" },
  ];

  return (
    <div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.textInput}</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.hmacKey}</label>
          <input
            type="text"
            value={hmacKey}
            onChange={(e) => setHmacKey(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            placeholder={d.hmacKeyPlaceholder}
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.calculate}
        </button>

        {results && (
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">{d.result}</h3>
            {hashRows.map((row) => (
              <div key={row.key} className="rounded-lg bg-gray-50 p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">{row.label}</span>
                  <button
                    onClick={() => copy(row.key, results[row.key])}
                    className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-700 hover:bg-gray-300"
                  >
                    {copiedField === row.key ? d.copied : d.copy}
                  </button>
                </div>
                <code className="break-all text-xs text-gray-900">{results[row.key]}</code>
              </div>
            ))}
          </div>
        )}

        {hmacResults && (
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">{d.hmacResult}</h3>
            {hmacRows.map((row) => (
              <div key={row.key} className="rounded-lg bg-blue-50 p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600">{row.label}</span>
                  <button
                    onClick={() => copy(row.key, hmacResults[row.key])}
                    className="rounded bg-blue-200 px-2 py-0.5 text-xs text-blue-800 hover:bg-blue-300"
                  >
                    {copiedField === row.key ? d.copied : d.copy}
                  </button>
                </div>
                <code className="break-all text-xs text-gray-900">{hmacResults[row.key]}</code>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

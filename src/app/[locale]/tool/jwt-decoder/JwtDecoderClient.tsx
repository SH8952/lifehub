"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

interface DecodedToken {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  headerRaw: string;
  payloadRaw: string;
  signatureRaw: string;
}

type ExpStatus = "valid" | "expired" | "none";
type VerifyStatus = "valid" | "mismatch" | "error" | "unsupported" | null;

function base64UrlToUint8Array(input: string): Uint8Array {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function base64UrlDecodeToString(input: string): string {
  const bytes = base64UrlToUint8Array(input);
  return new TextDecoder().decode(bytes);
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const cleaned = pem
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
  const binary = atob(cleaned);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

export default function JwtDecoderClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState<DecodedToken | null>(null);
  const [parseError, setParseError] = useState(false);
  const [expStatus, setExpStatus] = useState<ExpStatus>("none");

  const [hmacSecret, setHmacSecret] = useState("");
  const [pemKey, setPemKey] = useState("");
  const [verifyStatus, setVerifyStatus] = useState<VerifyStatus>(null);

  function handleDecode() {
    const parts = token.trim().split(".");
    if (parts.length !== 3) {
      setDecoded(null);
      setParseError(true);
      setVerifyStatus(null);
      return;
    }
    try {
      const headerJson = base64UrlDecodeToString(parts[0]);
      const payloadJson = base64UrlDecodeToString(parts[1]);
      const header = JSON.parse(headerJson);
      const payload = JSON.parse(payloadJson);

      let status: ExpStatus = "none";
      if (typeof payload.exp === "number") {
        status = payload.exp * 1000 > Date.now() ? "valid" : "expired";
      }

      setDecoded({
        header,
        payload,
        headerRaw: JSON.stringify(header, null, 2),
        payloadRaw: JSON.stringify(payload, null, 2),
        signatureRaw: parts[2],
      });
      setExpStatus(status);
      setParseError(false);
      setVerifyStatus(null);
    } catch {
      setDecoded(null);
      setParseError(true);
      setVerifyStatus(null);
    }
  }

  async function handleVerify() {
    if (!decoded) return;
    const parts = token.trim().split(".");
    const alg = (decoded.header.alg as string) || "";
    const signingInput = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
    const signature = base64UrlToUint8Array(parts[2]);

    try {
      if (alg === "HS256" || alg === "HS384" || alg === "HS512") {
        if (!hmacSecret.trim()) {
          setVerifyStatus(null);
          return;
        }
        const hashName = alg === "HS256" ? "SHA-256" : alg === "HS384" ? "SHA-384" : "SHA-512";
        const keyBytes = new TextEncoder().encode(hmacSecret);
        const cryptoKey = await crypto.subtle.importKey(
          "raw",
          keyBytes as BufferSource,
          { name: "HMAC", hash: hashName },
          false,
          ["verify"]
        );
        const isValid = await crypto.subtle.verify("HMAC", cryptoKey, signature as BufferSource, signingInput as BufferSource);
        setVerifyStatus(isValid ? "valid" : "mismatch");
      } else if (alg === "RS256") {
        if (!pemKey.trim()) {
          setVerifyStatus(null);
          return;
        }
        const keyData = pemToArrayBuffer(pemKey);
        const cryptoKey = await crypto.subtle.importKey(
          "spki",
          keyData,
          { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
          false,
          ["verify"]
        );
        const isValid = await crypto.subtle.verify(
          "RSASSA-PKCS1-v1_5",
          cryptoKey,
          signature as BufferSource,
          signingInput as BufferSource
        );
        setVerifyStatus(isValid ? "valid" : "mismatch");
      } else if (alg === "ES256") {
        if (!pemKey.trim()) {
          setVerifyStatus(null);
          return;
        }
        const keyData = pemToArrayBuffer(pemKey);
        const cryptoKey = await crypto.subtle.importKey(
          "spki",
          keyData,
          { name: "ECDSA", namedCurve: "P-256" },
          false,
          ["verify"]
        );
        const isValid = await crypto.subtle.verify(
          { name: "ECDSA", hash: "SHA-256" },
          cryptoKey,
          signature as BufferSource,
          signingInput as BufferSource
        );
        setVerifyStatus(isValid ? "valid" : "mismatch");
      } else {
        setVerifyStatus("unsupported");
      }
    } catch {
      setVerifyStatus("error");
    }
  }


  const expBadge: Record<ExpStatus, { text: string; className: string }> = {
    valid: { text: d.expValid, className: "bg-emerald-100 text-emerald-700" },
    expired: { text: d.expExpired, className: "bg-red-100 text-red-700" },
    none: { text: d.expNone, className: "bg-gray-100 text-gray-600" },
  };

  const verifyMessages: Record<string, string> = {
    valid: d.verifyValid,
    mismatch: d.verifyMismatch,
    error: d.verifyError,
    unsupported: d.verifyUnsupported,
  };

  return (
    <div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.tokenInput}</label>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 font-mono text-xs"
            rows={4}
            placeholder={d.tokenPlaceholder}
          />
        </div>

        <button
          onClick={handleDecode}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.decode}
        </button>

        {parseError && <p className="mt-4 text-sm text-red-600">{d.invalidToken}</p>}

        {decoded && (
          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-700">{d.header}</h3>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-xs text-gray-900">{decoded.headerRaw}</pre>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-700">{d.payload}</h3>
                <span className={`rounded px-2 py-0.5 text-xs ${expBadge[expStatus].className}`}>
                  {expBadge[expStatus].text}
                </span>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-gray-50 p-3 text-xs text-gray-900">{decoded.payloadRaw}</pre>
            </div>

            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="mb-1 text-sm font-semibold text-gray-700">{d.verifySection}</h3>
              <p className="mb-3 text-xs text-muted-foreground">{d.verifyHint}</p>

              <div className="mb-3">
                <label className="mb-1 block text-sm text-gray-600">{d.hmacSecretKey}</label>
                <input
                  type="text"
                  value={hmacSecret}
                  onChange={(e) => setHmacSecret(e.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </div>

              <div className="mb-3">
                <label className="mb-1 block text-sm text-gray-600">{d.pemPublicKey}</label>
                <textarea
                  value={pemKey}
                  onChange={(e) => setPemKey(e.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2 font-mono text-xs"
                  rows={4}
                  placeholder={d.pemPlaceholder}
                />
              </div>

              <button
                onClick={handleVerify}
                className="w-full rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              >
                {d.verify}
              </button>

              {verifyStatus && (
                <p
                  className={`mt-3 text-sm ${
                    verifyStatus === "valid" ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {verifyMessages[verifyStatus]}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

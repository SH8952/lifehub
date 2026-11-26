"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { Zodiac } from "./data";

interface Labels {
  selectZodiac: string;
  all: string;
  result: string;
  luckyColor: string;
  luckyItem: string;
  caution: string;
}

// 날짜 기반 기본 별자리 (서버 page.tsx의 getTodayZodiacIndex와 같은 식)
function todayZodiacIndex(): number {
  const now = new Date();
  return (now.getFullYear() * 372 + (now.getMonth() + 1) * 31 + now.getDate()) % 12;
}

export default function ZodiacFortune({
  zodiacs,
  initialIndex,
  labels,
}: {
  zodiacs: Zodiac[];
  initialIndex: number;
  labels: Labels;
}) {
  const [sel, setSel] = useState<number | "all">(initialIndex);
  const touched = useRef(false);

  // 정적으로 만들어진 페이지의 날짜가 오래됐을 수 있으므로, 사용자가 고르기 전에는 브라우저 날짜 기준으로 맞춘다
  useEffect(() => {
    if (touched.current) return;
    setSel(todayZodiacIndex());
  }, []);

  const choose = (v: number | "all") => {
    touched.current = true;
    setSel(v);
  };

  const btnCls = (active: boolean) =>
    `flex flex-col items-center gap-1 rounded-lg border p-3 text-center transition-colors ${
      active ? "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600" : "hover:bg-muted"
    }`;

  const renderCard = (z: Zodiac, big: boolean) => (
    <Card key={z.sign}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <span className={big ? "text-5xl" : "text-3xl"}>{z.emoji}</span>
          <div className="flex-1">
            <p className="text-lg font-semibold">{z.sign}</p>
            <p className="mt-1 text-base leading-relaxed">{z.fortune}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-muted-foreground">{labels.luckyColor}</p>
            <p className="font-semibold">{z.luckyColor}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{labels.luckyItem}</p>
            <p className="font-semibold">{z.luckyItem}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{labels.caution}</p>
            <p className="font-semibold text-amber-600">{z.caution}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <div className="mt-8">
        <p className="mb-2 text-sm font-medium">{labels.selectZodiac}</p>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
          <button type="button" onClick={() => choose("all")} aria-pressed={sel === "all"} className={btnCls(sel === "all")}>
            <span className="text-2xl">✨</span>
            <span className="text-xs font-medium">{labels.all}</span>
          </button>
          {zodiacs.map((z, i) => (
            <button key={z.sign} type="button" onClick={() => choose(i)} aria-pressed={sel === i} className={btnCls(sel === i)}>
              <span className="text-2xl">{z.emoji}</span>
              <span className="text-xs font-medium">{z.sign}</span>
            </button>
          ))}
        </div>
      </div>

      <div id="fortune-result" className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{labels.result}</h2>
        {sel === "all" ? (
          <div className="space-y-4">{zodiacs.map((z) => renderCard(z, false))}</div>
        ) : (
          renderCard(zodiacs[sel], true)
        )}
      </div>
    </>
  );
}

import { descKeyMap, nameKeyMap, type LocaleKey } from "@/lib/tools-data";
import { hash32, pickRelated } from "@/lib/related-tools";

// 도구 상세 페이지 하단의 "관련 도구" 블록 (서버 컴포넌트 · 클라이언트 JS 없음).
// 도구 id 해시(+언어)를 시드로 제목 문구 / 표시 형태 / 링크 개수 / 링크 구성이 도구마다 달라진다.
// 같은 도구는 항상 같은 모습(재현 가능)이며, 문구는 언어별로 따로 준비되어 있다(번역 아님).

type Form = "cards" | "chips" | "list" | "prose";
const FORMS: Form[] = ["cards", "chips", "list", "prose"];

const HEADINGS: Record<LocaleKey, string[]> = {
  ko: [
    "함께 보면 좋은 도구",
    "이어서 써 볼 만한 도구",
    "비슷한 용도의 다른 도구",
    "연관 도구 모음",
    "같이 쓰면 편한 도구",
    "다음으로 확인해 볼 도구",
    "관련 도구 바로가기",
    "이 도구와 어울리는 도구",
  ],
  en: [
    "Related tools",
    "More tools you might need next",
    "Tools that pair well with this one",
    "Keep going with these tools",
    "Similar tools worth a look",
    "Handy follow-up tools",
  ],
  ja: [
    "あわせて使いたいツール",
    "関連ツール",
    "続けて使えるツール",
    "似た用途のツール",
    "次にチェックしたいツール",
    "あわせて便利なツール",
  ],
  es: [
    "Herramientas relacionadas",
    "Más herramientas que pueden servirte",
    "Para seguir con otras herramientas",
    "Herramientas que combinan bien",
    "Otras herramientas similares",
    "Siguientes pasos útiles",
  ],
};

// {list} 자리에 링크 목록이 들어간다.
const PROSE: Record<LocaleKey, string[]> = {
  ko: [
    "{list} 도구도 함께 확인해 보세요.",
    "이어서 {list} 도구를 써 보셔도 좋습니다.",
    "관련해서 {list} 도구가 준비되어 있습니다.",
    "{list} 도구도 이 사이트에서 바로 사용할 수 있습니다.",
  ],
  en: [
    "You might also try {list}.",
    "Next, take a look at {list}.",
    "Related tools available here: {list}.",
    "{list} also work well alongside this one.",
  ],
  ja: [
    "{list}もあわせてご利用いただけます。",
    "続けて{list}をお試しください。",
    "関連ツール：{list}。",
    "{list}も同じサイトですぐに使えます。",
  ],
  es: [
    "También puedes probar {list}.",
    "Para continuar, echa un vistazo a {list}.",
    "Herramientas relacionadas: {list}.",
    "{list} también funcionan bien junto con esta.",
  ],
};

const JOINER: Record<LocaleKey, string> = { ko: ", ", en: ", ", ja: "、", es: ", " };

const LINK_CLS = "font-medium text-indigo-600 underline-offset-2 hover:underline";

export default function RelatedTools({ locale, toolId }: { locale: string; toolId: string }) {
  const lang: LocaleKey = (["ko", "en", "ja", "es"] as const).includes(locale as LocaleKey)
    ? (locale as LocaleKey)
    : "ko";
  const seed = `${toolId}|${lang}`;
  const form = FORMS[hash32(`${seed}|form`) % FORMS.length];
  const headings = HEADINGS[lang];
  const heading = headings[hash32(`${seed}|head`) % headings.length];
  let count = 3 + (hash32(`${seed}|n`) % 3); // 3~5개
  if (form === "prose") count = Math.min(count, 3);
  const items = pickRelated(toolId, count);
  if (items.length === 0) return null;

  const nameKey = nameKeyMap[lang];
  const descKey = descKeyMap[lang];
  const href = (id: string) => `/${locale}/tool/${id}`;

  if (form === "prose") {
    const tpl = PROSE[lang][hash32(`${seed}|tpl`) % PROSE[lang].length];
    const [before, after] = tpl.split("{list}");
    return (
      <aside className="mx-auto max-w-3xl px-4 pb-14">
        <p className="text-sm text-muted-foreground">
          {before}
          {items.map((t, i) => (
            <span key={t.id}>
              {i > 0 && JOINER[lang]}
              <a href={href(t.id)} className={LINK_CLS}>
                {t[nameKey]}
              </a>
            </span>
          ))}
          {after}
        </p>
      </aside>
    );
  }

  return (
    <aside className="mx-auto max-w-3xl px-4 pb-14" aria-label={heading}>
      <h2 className="mb-3 text-lg font-semibold">{heading}</h2>
      {form === "cards" && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((t) => (
            <a
              key={t.id}
              href={href(t.id)}
              className="group block rounded-lg border p-3 transition-colors hover:border-indigo-200 hover:bg-indigo-50/30"
            >
              <p className="text-sm font-semibold leading-snug group-hover:text-indigo-600">{t[nameKey]}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">{t[descKey]}</p>
            </a>
          ))}
        </div>
      )}
      {form === "chips" && (
        <div className="flex flex-wrap gap-2">
          {items.map((t) => (
            <a
              key={t.id}
              href={href(t.id)}
              className="rounded-full border px-3 py-1.5 text-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50/40 hover:text-indigo-600"
            >
              {t[nameKey]}
            </a>
          ))}
        </div>
      )}
      {form === "list" && (
        <ul className="divide-y rounded-lg border">
          {items.map((t) => (
            <li key={t.id} className="px-3 py-2.5 text-sm">
              <a href={href(t.id)} className={LINK_CLS}>
                {t[nameKey]}
              </a>
              <span className="text-muted-foreground"> — {t[descKey]}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

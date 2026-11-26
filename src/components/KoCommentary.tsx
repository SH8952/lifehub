import { hash32, mulberry32 } from "@/lib/related-tools";
import { koCommentaryLoaders } from "@/lib/ko-commentary";
import type { Section, SectionKind } from "@/lib/ko-commentary/types";

// 한국어 도구 페이지의 "해설" 블록 (서버 컴포넌트 · 클라이언트 JS 없음, ko 전용).
// 내용(계산 원리·예시·주의점·활용)은 도구마다 직접 쓴 데이터이고,
// 제목 문구 · 섹션 순서 · 표시 형태(서술/목록/번호/카드/표 등)는 도구 id 해시로 달라진다(재현 가능).

const HEADINGS: Record<SectionKind, string[]> = {
  concept: [
    "계산 원리를 한 번에 정리하면",
    "결과가 나오는 과정",
    "숫자가 만들어지는 방식",
    "계산식 풀어 읽기",
    "먼저 알아두면 좋은 기준",
    "이 계산기가 따르는 방식",
    "계산의 기본 구조",
    "핵심 원리 짚어보기",
  ],
  example: [
    "숫자로 확인해 보기",
    "직접 계산해 본 예시",
    "예시로 보는 계산 결과",
    "실제 숫자를 넣어 보면",
    "샘플 값으로 따라가 보기",
    "대표 사례 계산",
    "비교해 보면 보이는 것",
    "이런 값을 넣으면 이렇게 나옵니다",
  ],
  caution: [
    "계산 전에 확인할 점",
    "결과를 볼 때 주의할 부분",
    "자주 헷갈리는 부분",
    "오차가 생기는 이유",
    "놓치기 쉬운 부분",
    "실제와 다를 수 있는 경우",
    "입력할 때 조심할 것",
    "읽는 법과 한계",
  ],
  usecase: [
    "이럴 때 활용해 보세요",
    "이런 상황에서 쓰입니다",
    "활용 장면",
    "이 도구가 도움이 되는 순간",
    "실생활 활용 예",
    "이런 분께 유용합니다",
    "쓰임새 정리",
    "사용 장면 몇 가지",
  ],
};

const P_CLS = "text-sm leading-7 text-muted-foreground";

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Strong({ t }: { t?: string }) {
  return t ? <strong className="font-semibold text-foreground">{t} </strong> : null;
}

function SectionView({ s, toolId, idx }: { s: Section; toolId: string; idx: number }) {
  const r = mulberry32(hash32(`kc|${toolId}|${s.kind}|${idx}`));
  const variants = HEADINGS[s.kind];
  const useCustom = s.title && r() < 0.6;
  const heading = useCustom ? (s.title as string) : variants[Math.floor(r() * variants.length)];
  const h2Cls = r() < 0.5 ? "text-xl font-semibold" : "text-lg font-bold";
  const paraForm = (["plain", "callout", "lead"] as const)[Math.floor(r() * 3)];
  const itemForm = (["bullets", "numbered", "cards", "bold"] as const)[Math.floor(r() * 4)];
  const rowForm = (["table", "dl", "cards"] as const)[Math.floor(r() * 3)];

  return (
    <section>
      <h2 className={`mb-3 ${h2Cls}`}>{heading}</h2>

      {s.paras && s.paras.length > 0 && (
        <div
          className={
            paraForm === "callout"
              ? "space-y-3 rounded-lg border-l-4 border-indigo-200 bg-muted/40 px-4 py-3"
              : "space-y-3"
          }
        >
          {s.paras.map((p, i) => (
            <p key={i} className={paraForm === "lead" && i === 0 ? "text-base leading-8 text-foreground/90" : P_CLS}>
              {p}
            </p>
          ))}
        </div>
      )}

      {s.rows && s.rows.length > 0 && (
        <div className={s.paras && s.paras.length > 0 ? "mt-4" : ""}>
          {rowForm === "table" && (
            <table className="w-full border-collapse text-sm">
              <tbody>
                {s.rows.map(([k, v], i) => (
                  <tr key={i} className="border-b last:border-b-0 align-top">
                    <th scope="row" className="w-2/5 py-2 pr-3 text-left font-medium text-foreground sm:w-1/3">
                      {k}
                    </th>
                    <td className="py-2 leading-6 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {rowForm === "dl" && (
            <dl className="space-y-2.5">
              {s.rows.map(([k, v], i) => (
                <div key={i}>
                  <dt className="text-sm font-semibold text-foreground">{k}</dt>
                  <dd className={P_CLS}>{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {rowForm === "cards" && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {s.rows.map(([k, v], i) => (
                <div key={i} className="rounded-lg border p-3">
                  <p className="text-sm font-semibold text-foreground">{k}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {s.items && s.items.length > 0 && (
        <div className={(s.paras?.length || s.rows?.length) ? "mt-4" : ""}>
          {itemForm === "bullets" && (
            <ul className="list-disc space-y-2 pl-5">
              {s.items.map((it, i) => (
                <li key={i} className={P_CLS}>
                  <Strong t={it.t} />
                  {it.d}
                </li>
              ))}
            </ul>
          )}
          {itemForm === "numbered" && (
            <ol className="list-decimal space-y-2 pl-5">
              {s.items.map((it, i) => (
                <li key={i} className={P_CLS}>
                  <Strong t={it.t} />
                  {it.d}
                </li>
              ))}
            </ol>
          )}
          {itemForm === "cards" && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {s.items.map((it, i) => (
                <div key={i} className="rounded-lg border p-3">
                  {it.t && <p className="mb-1 text-sm font-semibold text-foreground">{it.t}</p>}
                  <p className="text-sm leading-6 text-muted-foreground">{it.d}</p>
                </div>
              ))}
            </div>
          )}
          {itemForm === "bold" && (
            <div className="space-y-3">
              {s.items.map((it, i) => (
                <p key={i} className={P_CLS}>
                  <Strong t={it.t} />
                  {it.d}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {s.note && <p className="mt-3 text-xs leading-6 text-muted-foreground">{s.note}</p>}
    </section>
  );
}

export default async function KoCommentary({ locale, toolId }: { locale: string; toolId: string }) {
  if (locale !== "ko") return null;
  const load = koCommentaryLoaders[toolId];
  if (!load) return null;
  const { default: content } = await load();

  const r = mulberry32(hash32(`kc|order|${toolId}`));
  const indexed = content.sections.map((s, idx) => ({ s, idx }));
  const concept = indexed.filter((x) => x.s.kind === "concept");
  const rest = shuffle(indexed.filter((x) => x.s.kind !== "concept"), r);
  const at = r() < 0.6 ? 0 : Math.min(1, rest.length);
  const ordered = [...rest.slice(0, at), ...concept, ...rest.slice(at)];

  return (
    <div className="mx-auto max-w-3xl space-y-9 px-4 pb-12">
      {ordered.map(({ s, idx }) => (
        <SectionView key={idx} s={s} toolId={toolId} idx={idx} />
      ))}
    </div>
  );
}

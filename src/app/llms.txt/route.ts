import { SITE_URL } from "@/lib/seo";
import { categoryToolsMap } from "@/lib/tools-data";

// /llms.txt — AI 에이전트·언어 모델이 사이트 구성을 파악할 수 있게 하는 안내 파일(마크다운).
// llmstxt.org 형식: H1 제목 → 인용문 요약 → H2 구역별 링크 목록.
// 도구 목록은 tools-data.ts 에서 만들어지므로 도구·카테고리를 추가하면 자동으로 반영된다.
// (미들웨어는 점이 들어간 경로를 건너뛰므로 sitemap.xml·rss.xml 처럼 언어 접두사 없이 그대로 응답한다.)

export const dynamic = "force-static";
export const revalidate = 86400;

// 카테고리 영어 이름·설명. 여기에 없는 새 카테고리는 id 를 그대로 제목으로 쓴다.
const CATEGORY_LABELS: Record<string, { name: string; description: string }> = {
  "life-health": { name: "Life & Health", description: "BMI, health checks, and everyday life metrics" },
  finance: { name: "Finance & Investment", description: "Interest rate, loan, and retirement calculators" },
  "fun-entertainment": { name: "Fun & Entertainment", description: "Roulette, meme generators, personality tests, and more" },
  "mini-games": { name: "Mini Games", description: "Quick browser games you can play right away, no install" },
  "image-media": { name: "Image & Media", description: "Compression, format, and conversion tools" },
  "document-pdf": { name: "Documents & PDF", description: "PDF conversion, merging, and splitting" },
  "dev-it": { name: "Dev & IT", description: "Encoders, decoders, and utilities" },
  utility: { name: "General Utilities", description: "Color, unit, and format conversion" },
};

// 마크다운 링크 글자 안에서 깨지는 문자를 정리한다.
function clean(text: string): string {
  return text.replace(/\s+/g, " ").replace(/[\[\]]/g, "").trim();
}

function buildLlmsTxt(): string {
  const categoryIds = Object.keys(categoryToolsMap);
  const totalTools = categoryIds.reduce((n, id) => n + categoryToolsMap[id].length, 0);
  const lines: string[] = [];

  lines.push("# LifeHub");
  lines.push("");
  lines.push(
    `> LifeHub is a free collection of ${totalTools} browser-based calculators, converters, utilities, and mini games for everyday life. No sign-up or installation is required, and tools run in the visitor's browser.`
  );
  lines.push("");
  lines.push(
    "Every page is available in four languages. The links below point to the English pages; replace the `/en/` prefix with `/ko/` (Korean, the default language), `/ja/` (Japanese), or `/es/` (Spanish) for the same page in another language."
  );
  lines.push("");

  lines.push("## Languages");
  lines.push("");
  lines.push(`- [Korean (default)](${SITE_URL}/ko)`);
  lines.push(`- [English](${SITE_URL}/en)`);
  lines.push(`- [Japanese](${SITE_URL}/ja)`);
  lines.push(`- [Spanish](${SITE_URL}/es)`);
  lines.push("");

  lines.push("## Categories");
  lines.push("");
  for (const id of categoryIds) {
    const label = CATEGORY_LABELS[id] ?? { name: id, description: "" };
    const count = categoryToolsMap[id].length;
    const desc = label.description ? `${label.description} (${count} tools)` : `${count} tools`;
    lines.push(`- [${label.name}](${SITE_URL}/en/category/${id}): ${desc}`);
  }
  lines.push("");

  for (const id of categoryIds) {
    const label = CATEGORY_LABELS[id] ?? { name: id, description: "" };
    lines.push(`## ${label.name}`);
    lines.push("");
    for (const tool of categoryToolsMap[id]) {
      lines.push(
        `- [${clean(tool.nameEn)}](${SITE_URL}/en/tool/${tool.id}): ${clean(tool.descriptionEn)}`
      );
    }
    lines.push("");
  }

  lines.push("## Optional");
  lines.push("");
  lines.push(`- [About](${SITE_URL}/en/about): What LifeHub is and how the tools are built`);
  lines.push(`- [Contact](${SITE_URL}/en/contact): How to reach the site operator`);
  lines.push(`- [Privacy Policy](${SITE_URL}/en/privacy): How visitor data is handled`);
  lines.push(`- [Terms of Service](${SITE_URL}/en/terms): Terms for using the site`);
  lines.push(`- [Sitemap](${SITE_URL}/sitemap.xml): All pages in all languages`);
  lines.push(`- [RSS feed](${SITE_URL}/rss.xml): Tool updates`);
  lines.push("");

  return lines.join("\n");
}

export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

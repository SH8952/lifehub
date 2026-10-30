import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import { categoryToolsMap, type ToolInfo } from "@/lib/tools-data";
import { toolPubDates } from "@/lib/tool-pub-dates";

export const dynamic = "force-static";
export const revalidate = 86400;

type Locale = (typeof routing.locales)[number];

function localizedName(tool: ToolInfo, locale: Locale): string {
  switch (locale) {
    case "en":
      return tool.nameEn;
    case "ja":
      return tool.nameJa;
    case "es":
      return tool.nameEs;
    default:
      return tool.name;
  }
}

function localizedDescription(tool: ToolInfo, locale: Locale): string {
  switch (locale) {
    case "en":
      return tool.descriptionEn;
    case "ja":
      return tool.descriptionJa;
    case "es":
      return tool.descriptionEs;
    default:
      return tool.description;
  }
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const allTools: ToolInfo[] = Object.values(categoryToolsMap).flat();

interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
}

function buildItems(): RssItem[] {
  const items: RssItem[] = [];

  for (const tool of allTools) {
    const isoDate = toolPubDates[tool.id];
    if (!isoDate) continue;
    const pubDate = new Date(isoDate).toUTCString();

    for (const locale of routing.locales) {
      const link = `${SITE_URL}/${locale}/tool/${tool.id}`;
      items.push({
        title: localizedName(tool, locale),
        link,
        description: localizedDescription(tool, locale),
        pubDate,
        guid: link,
      });
    }
  }

  items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  return items;
}

export async function GET() {
  const items = buildItems();
  const lastBuildDate = items.length > 0 ? items[0].pubDate : new Date().toUTCString();

  const itemsXml = items
    .map(
      (item) => `  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${escapeXml(item.link)}</link>
    <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
    <description>${escapeXml(item.description)}</description>
    <pubDate>${item.pubDate}</pubDate>
  </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>LifeHub — 생활 계산기·유틸리티 모음</title>
  <link>${escapeXml(SITE_URL)}</link>
  <description>LifeHub의 전체 도구(생활/건강, 재테크, 이미지, PDF, 개발, 재미 등) 업데이트 피드</description>
  <language>ko</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
${itemsXml}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

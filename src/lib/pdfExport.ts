// 공용 PDF 내보내기 헬퍼 - 브라우저에 렌더링된 DOM 요소를 html2canvas로 캡처해
// 여러 페이지로 나눠 jsPDF 문서에 삽입합니다.
// html2canvas가 실제 브라우저 폰트 렌더링을 그대로 사용하므로, 별도의 폰트 파일을
// 내려받아 임베드하지 않고도 한국어/일본어/스페인어 등 모든 언어가 정확히 표시됩니다.
"use client";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export type PdfPageFormat = "a4" | "letter";

export interface ExportPdfOptions {
  pageFormat?: PdfPageFormat;
  marginMm?: number;
}

export async function exportElementToPdf(
  element: HTMLElement,
  filename: string,
  options: ExportPdfOptions = {}
): Promise<void> {
  const { pageFormat = "a4", marginMm = 15 } = options;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const doc = new jsPDF({ unit: "mm", format: pageFormat });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const usableWidth = pageWidth - marginMm * 2;
  const usableHeight = pageHeight - marginMm * 2;

  const imgWidthMm = usableWidth;
  const pxPerMm = canvas.width / imgWidthMm;
  const pageHeightPx = Math.floor(usableHeight * pxPerMm);

  let renderedHeightPx = 0;
  let isFirstPage = true;

  while (renderedHeightPx < canvas.height) {
    const sliceHeightPx = Math.min(pageHeightPx, canvas.height - renderedHeightPx);
    if (sliceHeightPx <= 0) break;

    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = canvas.width;
    pageCanvas.height = sliceHeightPx;
    const ctx = pageCanvas.getContext("2d");
    if (!ctx) break;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
    ctx.drawImage(
      canvas,
      0,
      renderedHeightPx,
      canvas.width,
      sliceHeightPx,
      0,
      0,
      canvas.width,
      sliceHeightPx
    );
    const sliceImg = pageCanvas.toDataURL("image/jpeg", 0.92);
    const sliceHeightMm = (sliceHeightPx * imgWidthMm) / canvas.width;

    if (!isFirstPage) doc.addPage();
    doc.addImage(sliceImg, "JPEG", marginMm, marginMm, imgWidthMm, sliceHeightMm);
    isFirstPage = false;
    renderedHeightPx += sliceHeightPx;
  }

  doc.save(filename);
}

// 매우 기본적인 방어용 정제 — <script> 태그와 on* 이벤트 속성, javascript: 스킴을 제거합니다.
// 완전한 HTML sanitizer는 아니며(예: DOMPurify 대체 아님), 이 도구는 사용자가 자신의
// 브라우저에서 자신의 콘텐츠만 처리하는 100% 클라이언트 도구이므로 자기 자신에게만
// 영향을 줄 수 있는 self-XSS 위험을 낮추는 보조 장치입니다.
export function basicSanitizeHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/javascript:/gi, "");
}

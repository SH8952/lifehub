export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  tabShoesMen: string;
  tabShoesWomen: string;
  tabClothing: string;
  colKr: string;
  colUs: string;
  colEu: string;
  colUk: string;
  colCm: string;
  colClothingKr: string;
  colClothingIntl: string;
  colClothingUs: string;
  colClothingEu: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "의류·신발 사이즈 변환기",
    subtitle: "한국·미국·유럽·영국 신발 및 의류 사이즈를 한눈에 비교해보세요.",
    tabShoesMen: "신발 (남성)",
    tabShoesWomen: "신발 (여성)",
    tabClothing: "의류",
    colKr: "한국(mm)",
    colUs: "US",
    colEu: "EU",
    colUk: "UK",
    colCm: "발 길이(cm)",
    colClothingKr: "한국",
    colClothingIntl: "국제(S/M/L)",
    colClothingUs: "US",
    colClothingEu: "EU",
    howTitle: "사용 방법",
    howSteps: [
      "원하는 탭(남성 신발/여성 신발/의류)을 선택합니다.",
      "표에서 알고 있는 사이즈(예: 한국 사이즈)를 찾습니다.",
      "같은 줄의 다른 국가 사이즈를 확인합니다.",
    ],
    faq: [
      { q: "이 표의 사이즈가 브랜드마다 다를 수 있나요?", a: "네. 이 표는 일반적인 평균 변환 기준이며, 브랜드나 제품 라인에 따라 실제 사이즈 핏이 다를 수 있습니다. 가능하면 해당 브랜드의 자체 사이즈 가이드를 함께 참고하세요." },
      { q: "발볼이 넓은 경우에는 어떻게 하나요?", a: "이 표는 발 길이를 기준으로 한 일반적인 변환표입니다. 발볼이 넓은 경우 한 치수 큰 사이즈를 선택하거나 와이드 핏 제품을 고려하는 것을 권장합니다." },
    ],
    disclaimer: "이 표는 일반적인 평균 변환 기준이며, 브랜드·제품에 따라 실제 사이즈와 차이가 있을 수 있습니다.",
    footer: "브라우저에서 100% 처리됩니다. 별도의 서버 조회 없이 표를 바로 보여줍니다.",
  },
  en: {
    title: "Clothing & Shoe Size Converter",
    subtitle: "Compare Korean, US, EU, and UK shoe and clothing sizes at a glance.",
    tabShoesMen: "Shoes (Men)",
    tabShoesWomen: "Shoes (Women)",
    tabClothing: "Clothing",
    colKr: "Korea (mm)",
    colUs: "US",
    colEu: "EU",
    colUk: "UK",
    colCm: "Foot Length (cm)",
    colClothingKr: "Korea",
    colClothingIntl: "Int'l (S/M/L)",
    colClothingUs: "US",
    colClothingEu: "EU",
    howTitle: "How to Use",
    howSteps: [
      "Choose a tab (Men's Shoes / Women's Shoes / Clothing).",
      "Find the size you know (e.g. your Korean size) in the table.",
      "Read across the same row for the equivalent size in other countries.",
    ],
    faq: [
      { q: "Can sizes in this table vary by brand?", a: "Yes. This table shows general average conversions; actual fit can vary by brand or product line. Check the specific brand's own size guide when possible." },
      { q: "What about wide feet?", a: "This table is based on foot length only. If you have wide feet, consider going up a size or choosing a wide-fit product." },
    ],
    disclaimer: "This table shows general average conversions; actual sizing may differ by brand and product.",
    footer: "100% processed in your browser. The table is shown instantly with no server lookup.",
  },
  ja: {
    title: "衣類・靴サイズ変換機",
    subtitle: "韓国・米国・欧州・英国の靴・衣類サイズを一目で比較できます。",
    tabShoesMen: "靴（メンズ）",
    tabShoesWomen: "靴（レディース）",
    tabClothing: "衣類",
    colKr: "韓国(mm)",
    colUs: "US",
    colEu: "EU",
    colUk: "UK",
    colCm: "足の長さ(cm)",
    colClothingKr: "韓国",
    colClothingIntl: "国際(S/M/L)",
    colClothingUs: "US",
    colClothingEu: "EU",
    howTitle: "使用方法",
    howSteps: [
      "タブ（メンズ靴／レディース靴／衣類）を選びます。",
      "表の中から知っているサイズ（例: 韓国サイズ）を探します。",
      "同じ行で他国のサイズを確認します。",
    ],
    faq: [
      { q: "この表のサイズはブランドによって違いますか？", a: "はい。この表は一般的な平均変換基準であり、ブランドや製品ラインによって実際のサイズ感が異なる場合があります。可能であればそのブランド独自のサイズガイドも参考にしてください。" },
      { q: "足幅が広い場合はどうすればいいですか？", a: "この表は足の長さを基準にした一般的な変換表です。足幅が広い場合は一つ大きいサイズを選ぶか、ワイドフィット製品を検討することをお勧めします。" },
    ],
    disclaimer: "この表は一般的な平均変換基準であり、ブランド・製品によって実際のサイズと異なる場合があります。",
    footer: "ブラウザで100%処理されます。サーバー照会なしで表が即時表示されます。",
  },
  es: {
    title: "Convertidor de Tallas de Ropa y Calzado",
    subtitle: "Compara tallas coreanas, estadounidenses, europeas y británicas de calzado y ropa de un vistazo.",
    tabShoesMen: "Calzado (Hombre)",
    tabShoesWomen: "Calzado (Mujer)",
    tabClothing: "Ropa",
    colKr: "Corea (mm)",
    colUs: "US",
    colEu: "EU",
    colUk: "UK",
    colCm: "Largo del Pie (cm)",
    colClothingKr: "Corea",
    colClothingIntl: "Int'l (S/M/L)",
    colClothingUs: "US",
    colClothingEu: "EU",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige una pestaña (Calzado de Hombre / Calzado de Mujer / Ropa).",
      "Encuentra la talla que conoces (ej. tu talla coreana) en la tabla.",
      "Lee a través de la misma fila para la talla equivalente en otros países.",
    ],
    faq: [
      { q: "¿Las tallas de esta tabla pueden variar según la marca?", a: "Sí. Esta tabla muestra conversiones promedio generales; el ajuste real puede variar según la marca o línea de producto. Consulta la guía de tallas propia de la marca específica cuando sea posible." },
      { q: "¿Qué pasa con los pies anchos?", a: "Esta tabla se basa solo en el largo del pie. Si tienes pies anchos, considera subir una talla o elegir un producto de ajuste ancho." },
    ],
    disclaimer: "Esta tabla muestra conversiones promedio generales; la talla real puede diferir según la marca y el producto.",
    footer: "Procesado 100% en tu navegador. La tabla se muestra al instante sin consulta a un servidor.",
  },
};

export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  copied: string;
  noResults: string;
  resultCount: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이모지 검색기",
    subtitle: "키워드로 이모지를 검색하고 클릭 한 번으로 복사하세요.",
    searchPlaceholder: "검색어 입력 (예: 웃음, happy, 고양이, cat)",
    copied: "복사됨!",
    noResults: "검색 결과가 없습니다.",
    resultCount: "개의 이모지",
    howTitle: "사용 방법",
    howSteps: [
      "검색창에 원하는 느낌의 단어(한글 또는 영문)를 입력합니다.",
      "관련된 이모지 목록이 즉시 표시됩니다.",
      "원하는 이모지를 클릭하면 클립보드에 자동 복사됩니다.",
    ],
    faq: [
      { q: "모든 이모지가 다 있나요?", a: "일상적으로 가장 많이 쓰이는 약 120개의 주요 이모지를 엄선해 제공합니다." },
      { q: "검색은 한글로도 되나요?", a: "네, 각 이모지에 한글과 영문 키워드가 함께 매칭되어 있어 둘 다 검색 가능합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Emoji Finder",
    subtitle: "Search for emoji by keyword and copy them with a single click.",
    searchPlaceholder: "Search (e.g. happy, cat, heart, fire)",
    copied: "Copied!",
    noResults: "No results found.",
    resultCount: "emoji found",
    howTitle: "How to Use",
    howSteps: [
      "Type a word (English or Korean) describing what you're looking for.",
      "A list of matching emoji appears instantly.",
      "Click any emoji to automatically copy it to your clipboard.",
    ],
    faq: [
      { q: "Does it have every emoji?", a: "It provides a curated selection of about 120 of the most commonly used emoji." },
      { q: "Can I search in Korean?", a: "Yes, each emoji is tagged with both Korean and English keywords, so both work." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "絵文字検索ツール",
    subtitle: "キーワードで絵文字を検索し、クリック1つでコピーできます。",
    searchPlaceholder: "検索語を入力（例：笑顔、猫、ハート）",
    copied: "コピーしました！",
    noResults: "検索結果がありません。",
    resultCount: "件の絵文字",
    howTitle: "使用方法",
    howSteps: [
      "検索欄に探している言葉（日本語・英語いずれも可）を入力します。",
      "関連する絵文字のリストがすぐに表示されます。",
      "好きな絵文字をクリックするとクリップボードに自動コピーされます。",
    ],
    faq: [
      { q: "すべての絵文字がありますか？", a: "日常的に最もよく使われる約120個の主要な絵文字を厳選して提供しています。" },
      { q: "日本語で検索できますか？", a: "現在は韓国語・英語キーワードに対応しています。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Buscador de Emojis",
    subtitle: "Busca emojis por palabra clave y cópialos con un solo clic.",
    searchPlaceholder: "Buscar (p. ej. feliz, gato, corazón)",
    copied: "¡Copiado!",
    noResults: "No se encontraron resultados.",
    resultCount: "emojis encontrados",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe una palabra (en inglés o coreano) que describa lo que buscas.",
      "Aparece al instante una lista de emojis coincidentes.",
      "Haz clic en cualquier emoji para copiarlo automáticamente al portapapeles.",
    ],
    faq: [
      { q: "¿Tiene todos los emojis?", a: "Ofrece una selección curada de unos 120 de los emojis más usados habitualmente." },
      { q: "¿Puedo buscar en coreano?", a: "Sí, cada emoji está etiquetado con palabras clave en coreano e inglés, así que ambas funcionan." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

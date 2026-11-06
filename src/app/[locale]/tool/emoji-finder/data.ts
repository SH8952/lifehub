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
      "자주 쓰는 이모지를 찾았다면, 매번 검색하지 않도록 메모 앱이나 키보드 즐겨찾기에 따로 저장해두는 것도 방법입니다.",
    ],
    faq: [
      { q: "모든 이모지가 다 있나요?", a: "일상적으로 가장 많이 쓰이는 약 120개의 주요 이모지를 엄선해 제공합니다." },
      { q: "검색은 한글로도 되나요?", a: "네, 각 이모지에 한글과 영문 키워드가 함께 매칭되어 있어 둘 다 검색 가능합니다." },
      { q: "검색 결과가 바로 복사되나요?", a: "이모지를 클릭하는 즉시 클립보드에 복사되며, 별도의 복사 버튼을 다시 누를 필요는 없습니다." },
      { q: "여러 개의 이모지를 한 번에 복사할 수 있나요?", a: "현재는 클릭할 때마다 한 개의 이모지만 복사되며, 여러 개를 이어 붙이려면 각각 클릭 후 원하는 곳에 붙여넣기를 반복하면 됩니다." },
      { q: "모바일에서도 사용할 수 있나요?", a: "네, 모바일 브라우저에서도 동일하게 검색과 복사(길게 눌러 붙여넣기)가 가능합니다." },
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
      "Once you find an emoji you use often, consider saving it in your notes app or keyboard favorites so you don't have to search for it every time.",
    ],
    faq: [
      { q: "Does it have every emoji?", a: "It provides a curated selection of about 120 of the most commonly used emoji." },
      { q: "Can I search in Korean?", a: "Yes, each emoji is tagged with both Korean and English keywords, so both work." },
      { q: "Does clicking an emoji copy it immediately?", a: "Yes, the emoji is copied to your clipboard the instant you click it — there's no separate copy button to press." },
      { q: "Can I copy multiple emoji at once?", a: "Currently each click copies just one emoji. To combine several, click one, paste it, then repeat for the next." },
      { q: "Does it work on mobile?", a: "Yes, searching and copying (tap, then paste) work the same way on a mobile browser." },
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
      "よく使う絵文字が見つかったら、毎回検索しなくて済むようメモアプリやキーボードのお気に入りに保存しておくのもおすすめです。",
    ],
    faq: [
      { q: "すべての絵文字がありますか？", a: "日常的に最もよく使われる約120個の主要な絵文字を厳選して提供しています。" },
      { q: "日本語で検索できますか？", a: "現在は韓国語・英語キーワードに対応しています。" },
      { q: "検索結果はすぐにコピーされますか？", a: "絵文字をクリックすると同時にクリップボードにコピーされるため、別途コピーボタンを押す必要はありません。" },
      { q: "複数の絵文字を一度にコピーできますか？", a: "現在はクリックするたびに1つの絵文字のみコピーされます。複数をつなげたい場合は、1つずつクリックして貼り付ける作業を繰り返してください。" },
      { q: "モバイルでも使えますか？", a: "はい、モバイルブラウザでも同様に検索とコピー（タップして貼り付け）が可能です。" },
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
      "Una vez que encuentres un emoji que uses a menudo, considera guardarlo en tu app de notas o favoritos del teclado para no tener que buscarlo cada vez.",
    ],
    faq: [
      { q: "¿Tiene todos los emojis?", a: "Ofrece una selección curada de unos 120 de los emojis más usados habitualmente." },
      { q: "¿Puedo buscar en coreano?", a: "Sí, cada emoji está etiquetado con palabras clave en coreano e inglés, así que ambas funcionan." },
      { q: "¿Copiar un emoji ocurre al hacer clic?", a: "Sí, el emoji se copia a tu portapapeles en el instante en que haces clic — no hay un botón de copiar aparte." },
      { q: "¿Puedo copiar varios emojis a la vez?", a: "Por ahora cada clic copia un solo emoji. Para combinar varios, haz clic en uno, pégalo y repite para el siguiente." },
      { q: "¿Funciona en móvil?", a: "Sí, buscar y copiar (toca y luego pega) funcionan igual en un navegador móvil." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

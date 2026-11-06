export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  generateBtn: string;
  quoteLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "오늘의 명언 생성기",
    subtitle: "버튼을 누르면 오늘 하루에 힘이 되는 짧은 문장을 하나씩 보여드립니다.",
    generateBtn: "명언 받기",
    quoteLabel: "오늘의 한마디",
    howTitle: "사용 방법",
    howSteps: [
      "\"명언 받기\" 버튼을 누릅니다.",
      "40여 개의 문장 중 하나가 무작위로 표시됩니다.",
      "다시 누르면 새로운 문장을 받을 수 있습니다.",
      "매일 아침 또는 하루를 마무리할 때 한 번씩 눌러보면 짧은 리추얼처럼 활용할 수 있습니다.",
    ],
    faq: [
      { q: "이 문장들은 유명인의 명언인가요?", a: "아니요, 저작권 문제를 피하기 위해 특정 유명인의 명언이 아닌 자체 제작한 짧은 문장들을 사용합니다." },
      { q: "매번 다른 문장이 나오나요?", a: "네, 버튼을 누를 때마다 무작위로 선택되어 같은 문장이 반복될 수도 있고 새로운 문장이 나올 수도 있습니다." },
      { q: "이전에 봤던 문장을 다시 찾아볼 수 있나요?", a: "아니요, 현재는 과거 기록을 저장하지 않으며 그 순간 화면에 표시된 문장만 확인할 수 있습니다." },
      { q: "문장을 캡처하거나 공유해도 되나요?", a: "네, 화면을 캡처하거나 텍스트를 복사해 SNS나 메시지로 자유롭게 공유하셔도 됩니다." },
      { q: "특정 주제(동기부여, 위로 등)만 골라 받을 수 있나요?", a: "현재는 주제별 필터 없이 전체 문장 중에서 무작위로 하나가 선택됩니다." },
    ],
    disclaimer: "이 문장들은 자체 제작된 창작 문구로 특정 인물의 발언이 아닙니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Daily Quote Generator",
    subtitle: "Click the button to get a short, uplifting line for today.",
    generateBtn: "Get a Quote",
    quoteLabel: "Today's Words",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Get a Quote.\"",
      "One of over 40 lines is randomly shown.",
      "Click again for a new line.",
      "Click it once each morning or at the end of the day to turn it into a quick daily ritual.",
    ],
    faq: [
      { q: "Are these famous quotes from real people?", a: "No, to avoid copyright issues, these are original short lines, not attributed quotes from real public figures." },
      { q: "Do I get a different line every time?", a: "Yes, it's randomly picked each click, so you may see a repeat or a new line." },
      { q: "Can I look back at a quote I saw before?", a: "No, this tool doesn't keep a history — you can only see the quote currently shown on screen." },
      { q: "Can I screenshot or share a quote?", a: "Yes, feel free to screenshot the screen or copy the text and share it on social media or in a message." },
      { q: "Can I filter by topic, like motivation or comfort?", a: "Not currently — every quote is randomly picked from the full set, with no topic filter yet." },
    ],
    disclaimer: "These lines are original creative content and are not attributed to any specific real person.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "今日の名言生成ツール",
    subtitle: "ボタンを押すと今日一日の力になる短い文章を一つお届けします。",
    generateBtn: "名言を受け取る",
    quoteLabel: "今日の一言",
    howTitle: "使用方法",
    howSteps: [
      "「名言を受け取る」ボタンを押します。",
      "40種類以上の文章の中から1つがランダムに表示されます。",
      "もう一度押すと新しい文章を受け取れます。",
      "毎朝または一日の終わりに一度押してみると、短いリチュアルとして活用できます。",
    ],
    faq: [
      { q: "これらの文章は有名人の名言ですか？", a: "いいえ、著作権問題を避けるため特定の有名人の名言ではなく、独自に作成した短い文章を使用しています。" },
      { q: "毎回違う文章が出ますか？", a: "はい、ボタンを押すたびにランダムに選ばれるため、同じ文章が繰り返されることもあれば新しい文章が出ることもあります。" },
      { q: "以前見た文章をもう一度見ることはできますか？", a: "いいえ、現在は履歴を保存しておらず、その時画面に表示された文章のみ確認できます。" },
      { q: "文章をスクリーンショットしたり共有したりしてもいいですか？", a: "はい、画面をスクリーンショットしたりテキストをコピーしてSNSやメッセージで自由に共有していただいて構いません。" },
      { q: "特定のテーマ（やる気、癒しなど）だけを選んで受け取れますか？", a: "現在はテーマ別フィルターはなく、全文章の中からランダムに1つが選ばれます。" },
    ],
    disclaimer: "これらの文章は独自に作成された創作文であり、特定の人物の発言ではありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Frases del Día",
    subtitle: "Haz clic en el botón para obtener una frase corta y alentadora para hoy.",
    generateBtn: "Obtener una Frase",
    quoteLabel: "Las Palabras de Hoy",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Obtener una Frase.\"",
      "Se muestra al azar una de más de 40 frases.",
      "Haz clic de nuevo para una frase nueva.",
      "Haz clic una vez cada mañana o al final del día para convertirlo en un pequeño ritual diario.",
    ],
    faq: [
      { q: "¿Estas son frases famosas de personas reales?", a: "No, para evitar problemas de derechos de autor, son frases originales cortas, no citas atribuidas a figuras públicas reales." },
      { q: "¿Obtengo una frase diferente cada vez?", a: "Sí, se elige al azar en cada clic, así que puedes ver una repetida o una nueva." },
      { q: "¿Puedo volver a ver una frase que vi antes?", a: "No, esta herramienta no guarda historial; solo puedes ver la frase mostrada actualmente en pantalla." },
      { q: "¿Puedo capturar o compartir una frase?", a: "Sí, puedes tomar una captura de pantalla o copiar el texto y compartirlo libremente en redes sociales o mensajes." },
      { q: "¿Puedo filtrar por tema, como motivación o consuelo?", a: "Por ahora no — cada frase se elige al azar de todo el conjunto, sin filtro de tema." },
    ],
    disclaimer: "Estas frases son contenido creativo original y no se atribuyen a ninguna persona real específica.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

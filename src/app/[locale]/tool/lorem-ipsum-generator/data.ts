export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  unitLabel: string;
  unitParagraphs: string;
  unitSentences: string;
  unitWords: string;
  countLabel: string;
  startWithLabel: string;
  generateBtn: string;
  copyBtn: string;
  copied: string;
  resultLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "로렘 입숨 생성기",
    subtitle: "디자인 목업이나 테스트용 더미 텍스트를 원하는 분량만큼 생성합니다.",
    unitLabel: "단위",
    unitParagraphs: "단락",
    unitSentences: "문장",
    unitWords: "단어",
    countLabel: "개수",
    startWithLabel: "'Lorem ipsum'으로 시작",
    generateBtn: "생성하기",
    copyBtn: "복사하기",
    copied: "복사됨!",
    resultLabel: "생성 결과",
    howTitle: "사용 방법",
    howSteps: [
      "단위(단락/문장/단어)와 개수를 선택합니다.",
      "'생성하기'를 눌러 더미 텍스트를 만듭니다.",
      "복사 버튼으로 결과를 바로 복사해 디자인 목업이나 코드에 붙여넣으세요.",
    ],
    faq: [
      { q: "로렘 입숨은 무슨 뜻인가요?", a: "로렘 입숨은 고전 라틴 문헌에서 유래한 전통적인 더미 텍스트로, 디자인 업계에서 콘텐츠 자리채우기용으로 수세기 동안 널리 사용되어 왔으며 저작권 걱정 없이 자유롭게 쓸 수 있습니다." },
      { q: "실제 의미가 있는 문장인가요?", a: "의도적으로 변형된 라틴어 단어들의 조합으로, 특정한 의미보다는 자연스러운 글자 분포와 보기 좋은 레이아웃 확인에 목적이 있습니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Lorem Ipsum Generator",
    subtitle: "Generate placeholder dummy text for design mockups or testing, in the amount you need.",
    unitLabel: "Unit",
    unitParagraphs: "Paragraphs",
    unitSentences: "Sentences",
    unitWords: "Words",
    countLabel: "Count",
    startWithLabel: "Start with 'Lorem ipsum'",
    generateBtn: "Generate",
    copyBtn: "Copy",
    copied: "Copied!",
    resultLabel: "Result",
    howTitle: "How to Use",
    howSteps: [
      "Choose a unit (paragraphs/sentences/words) and a count.",
      "Click 'Generate' to create the placeholder text.",
      "Use the copy button to paste the result into your mockup or code.",
    ],
    faq: [
      { q: "What does Lorem Ipsum mean?", a: "Lorem Ipsum is traditional placeholder text derived from classical Latin, widely used in the design industry for centuries, and is free to use without copyright concerns." },
      { q: "Does it have real meaning?", a: "It's a deliberately scrambled combination of Latin-like words, meant to show natural letter distribution and layout rather than convey specific meaning." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "ロレムイプサム生成ツール",
    subtitle: "デザインモックアップやテスト用のダミーテキストを必要な分だけ生成します。",
    unitLabel: "単位",
    unitParagraphs: "段落",
    unitSentences: "文",
    unitWords: "単語",
    countLabel: "個数",
    startWithLabel: "'Lorem ipsum'で始める",
    generateBtn: "生成する",
    copyBtn: "コピー",
    copied: "コピーしました！",
    resultLabel: "生成結果",
    howTitle: "使用方法",
    howSteps: [
      "単位（段落・文・単語）と個数を選択します。",
      "「生成する」を押してダミーテキストを作成します。",
      "コピーボタンで結果をすぐにコピーしてデザインモックアップやコードに貼り付けましょう。",
    ],
    faq: [
      { q: "ロレムイプサムとはどういう意味ですか？", a: "ロレムイプサムは古典ラテン語文献から派生した伝統的なダミーテキストで、デザイン業界で数世紀にわたりコンテンツの仮置き用として広く使われており、著作権の心配なく自由に使用できます。" },
      { q: "実際に意味のある文章ですか？", a: "意図的に変形されたラテン語風の単語の組み合わせで、特定の意味よりも自然な文字分布と見やすいレイアウト確認を目的としています。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Lorem Ipsum",
    subtitle: "Genera texto de relleno para maquetas de diseño o pruebas, en la cantidad que necesites.",
    unitLabel: "Unidad",
    unitParagraphs: "Párrafos",
    unitSentences: "Oraciones",
    unitWords: "Palabras",
    countLabel: "Cantidad",
    startWithLabel: "Empezar con 'Lorem ipsum'",
    generateBtn: "Generar",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    resultLabel: "Resultado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige una unidad (párrafos/oraciones/palabras) y una cantidad.",
      "Haz clic en 'Generar' para crear el texto de relleno.",
      "Usa el botón de copiar para pegar el resultado en tu maqueta o código.",
    ],
    faq: [
      { q: "¿Qué significa Lorem Ipsum?", a: "Lorem Ipsum es texto de relleno tradicional derivado del latín clásico, usado ampliamente en la industria del diseño durante siglos, y es de uso libre sin problemas de derechos de autor." },
      { q: "¿Tiene un significado real?", a: "Es una combinación deliberadamente alterada de palabras similares al latín, pensada para mostrar una distribución natural de letras y el diseño en lugar de transmitir un significado específico." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

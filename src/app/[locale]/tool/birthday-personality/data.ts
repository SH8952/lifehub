export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  birthLabel: string;
  checkBtn: string;
  typeLabel: string;
  traitsLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "생일로 보는 성격 유형",
    subtitle: "생일을 입력하면 12가지 성격 유형 중 하나를 재미로 알려드립니다.",
    birthLabel: "생년월일",
    checkBtn: "성격 유형 확인하기",
    typeLabel: "당신의 유형",
    traitsLabel: "주요 특징",
    howTitle: "사용 방법",
    howSteps: [
      "생년월일을 선택합니다.",
      "\"성격 유형 확인하기\" 버튼을 누릅니다.",
      "월과 일을 조합한 12가지 유형 중 하나와 그 특징이 표시됩니다.",
      "친구나 가족의 생일도 함께 입력해보면 서로 다른 유형이 나오는 걸 비교하며 재미있게 즐길 수 있습니다.",
    ],
    faq: [
      { q: "이 유형 분류는 심리학적으로 검증된 것인가요?", a: "아니요, 생일의 월/일 숫자를 조합한 재미 콘텐츠이며 공식적인 심리검사가 아닙니다." },
      { q: "서양 별자리 운세와는 다른가요?", a: "네, 이 도구는 별자리가 아닌 생일 숫자 조합만으로 독자적인 12가지 유형을 분류하는 재미 콘텐츠입니다." },
      { q: "12가지 유형은 어떤 기준으로 나뉘나요?", a: "생일의 월과 일 숫자를 조합한 자체 계산 방식으로 12가지 유형 중 하나를 결정하며, 별자리나 사주와는 다른 독립적인 분류입니다." },
      { q: "쌍둥이처럼 생일이 같으면 항상 같은 유형이 나오나요?", a: "네, 이 도구는 월과 일 숫자만을 기준으로 계산하므로 생일이 완전히 같다면 항상 동일한 유형이 나옵니다." },
      { q: "유형별 특징은 매번 똑같이 나오나요, 아니면 무작위인가요?", a: "같은 유형이면 소개되는 특징 문구도 항상 동일하게 고정되어 있어, 같은 생일을 여러 번 확인해도 같은 결과가 나옵니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 심리학적·과학적 근거가 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Birthday Personality Type",
    subtitle: "Enter your birthday to discover one of 12 playful personality types.",
    birthLabel: "Date of Birth",
    checkBtn: "Check My Type",
    typeLabel: "Your Type",
    traitsLabel: "Key Traits",
    howTitle: "How to Use",
    howSteps: [
      "Select your date of birth.",
      "Click \"Check My Type.\"",
      "One of 12 types, based on your month and day, appears along with its traits.",
      "Try entering a friend or family member's birthday too, and compare the different types you each get.",
    ],
    faq: [
      { q: "Is this personality classification psychologically validated?", a: "No, it's entertainment content based on combining your birth month and day — not a formal psychological assessment." },
      { q: "Is this different from Western zodiac signs?", a: "Yes, this tool classifies 12 original types purely from your birth month/day numbers, unrelated to zodiac signs." },
      { q: "How are the 12 types determined?", a: "It's an original calculation based on combining your birth month and day numbers into one of 12 types — independent of zodiac signs or other systems." },
      { q: "If two people share a birthday, do they always get the same type?", a: "Yes, since the calculation only uses the month and day, an identical birthday always produces the identical type." },
      { q: "Do the traits for a type change each time, or are they fixed?", a: "They're fixed — the same type always shows the same set of traits, so checking the same birthday repeatedly gives a consistent result." },
    ],
    disclaimer: "This content is for entertainment purposes only and has no psychological or scientific basis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "誕生日で見る性格タイプ",
    subtitle: "誕生日を入力すると12種類の性格タイプの1つを楽しく診断します。",
    birthLabel: "生年月日",
    checkBtn: "性格タイプを確認する",
    typeLabel: "あなたのタイプ",
    traitsLabel: "主な特徴",
    howTitle: "使用方法",
    howSteps: [
      "生年月日を選択します。",
      "「性格タイプを確認する」ボタンを押します。",
      "月と日を組み合わせた12種類のタイプの1つとその特徴が表示されます。",
      "友達や家族の誕生日も入力してみると、それぞれ違うタイプが出るのを比較しながら楽しめます。",
    ],
    faq: [
      { q: "この性格分類は心理学的に検証されたものですか？", a: "いいえ、誕生日の月と日の数字を組み合わせた娯楽コンテンツであり、正式な心理検査ではありません。" },
      { q: "西洋の星座占いとは違いますか？", a: "はい、このツールは星座ではなく誕生日の数字の組み合わせだけで独自の12タイプを分類する娯楽コンテンツです。" },
      { q: "12タイプはどんな基準で分けられていますか？", a: "誕生日の月と日の数字を組み合わせた独自の計算方式で12タイプのうち1つが決まり、星座や四柱推命とは異なる独立した分類です。" },
      { q: "双子のように誕生日が同じだと常に同じタイプになりますか？", a: "はい、このツールは月と日の数字のみを基準に計算するため、誕生日が完全に同じであれば常に同じタイプになります。" },
      { q: "タイプごとの特徴は毎回同じですか、それともランダムですか？", a: "同じタイプであれば紹介される特徴の文章も常に固定されているため、同じ誕生日を何度確認しても同じ結果になります。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、心理学的・科学的根拠はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Tipo de Personalidad por Fecha de Nacimiento",
    subtitle: "Introduce tu fecha de nacimiento para descubrir uno de 12 tipos de personalidad divertidos.",
    birthLabel: "Fecha de Nacimiento",
    checkBtn: "Ver mi Tipo",
    typeLabel: "Tu Tipo",
    traitsLabel: "Rasgos Principales",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona tu fecha de nacimiento.",
      "Haz clic en \"Ver mi Tipo.\"",
      "Aparece uno de 12 tipos, basado en tu mes y día, junto con sus rasgos.",
      "Prueba también con la fecha de nacimiento de un amigo o familiar y compara los diferentes tipos que obtengan.",
    ],
    faq: [
      { q: "¿Esta clasificación de personalidad está validada psicológicamente?", a: "No, es contenido de entretenimiento basado en combinar tu mes y día de nacimiento, no una evaluación psicológica formal." },
      { q: "¿Es diferente de los signos del zodiaco occidental?", a: "Sí, esta herramienta clasifica 12 tipos originales solo a partir de los números de tu mes/día de nacimiento, sin relación con el zodiaco." },
      { q: "¿Cómo se determinan los 12 tipos?", a: "Es un cálculo original que combina los números de tu mes y día de nacimiento en uno de 12 tipos, independiente de los signos del zodiaco u otros sistemas." },
      { q: "Si dos personas comparten cumpleaños, ¿siempre obtienen el mismo tipo?", a: "Sí, como el cálculo solo usa el mes y el día, un cumpleaños idéntico siempre produce el mismo tipo." },
      { q: "¿Los rasgos de un tipo cambian cada vez, o son fijos?", a: "Son fijos: el mismo tipo siempre muestra el mismo conjunto de rasgos, así que comprobar el mismo cumpleaños repetidamente da un resultado consistente." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no tiene base psicológica ni científica.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

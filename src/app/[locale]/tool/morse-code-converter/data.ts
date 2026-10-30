export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  modeEncode: string;
  modeDecode: string;
  inputLabel: string;
  outputLabel: string;
  copyBtn: string;
  copied: string;
  playBtn: string;
  placeholderEncode: string;
  placeholderDecode: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "모스 코드 변환기",
    subtitle: "텍스트를 모스 코드로 바꾸거나 모스 코드를 다시 텍스트로 변환합니다.",
    modeEncode: "텍스트 → 모스 코드",
    modeDecode: "모스 코드 → 텍스트",
    inputLabel: "입력",
    outputLabel: "결과",
    copyBtn: "복사",
    copied: "복사됨!",
    playBtn: "소리로 듣기",
    placeholderEncode: "HELLO WORLD",
    placeholderDecode: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    howTitle: "사용 방법",
    howSteps: [
      "텍스트→모스 또는 모스→텍스트 모드를 선택합니다.",
      "입력창에 텍스트나 모스 코드를 입력합니다 (단어는 '/'로 구분).",
      "결과를 확인하고 '소리로 듣기'로 실제 모스 신호음도 들어보세요.",
    ],
    faq: [
      { q: "단어 사이는 어떻게 구분하나요?", a: "모스 코드에서 문자 사이는 공백 1개, 단어 사이는 슬래시(/)로 구분하는 것이 일반적인 표기법입니다." },
      { q: "소리는 어떻게 재생되나요?", a: "브라우저의 오디오 API를 이용해 짧은 신호(점)와 긴 신호(대시)를 비프음으로 재생하며, 별도 설치나 서버 연결이 필요 없습니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Morse Code Converter",
    subtitle: "Convert text into Morse code, or decode Morse code back into text.",
    modeEncode: "Text → Morse",
    modeDecode: "Morse → Text",
    inputLabel: "Input",
    outputLabel: "Output",
    copyBtn: "Copy",
    copied: "Copied!",
    playBtn: "Play Sound",
    placeholderEncode: "HELLO WORLD",
    placeholderDecode: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    howTitle: "How to Use",
    howSteps: [
      "Choose text-to-morse or morse-to-text mode.",
      "Enter text or Morse code (separate words with '/').",
      "Check the result and try 'Play Sound' to hear the Morse tones.",
    ],
    faq: [
      { q: "How are words separated?", a: "In Morse code, letters are separated by a single space and words by a slash (/) — this is the standard notation." },
      { q: "How does the sound play?", a: "It uses the browser's audio API to play short (dot) and long (dash) beep tones, with no installation or server connection needed." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "モールス信号変換ツール",
    subtitle: "テキストをモールス信号に変換したり、モールス信号をテキストに再変換します。",
    modeEncode: "テキスト→モールス信号",
    modeDecode: "モールス信号→テキスト",
    inputLabel: "入力",
    outputLabel: "結果",
    copyBtn: "コピー",
    copied: "コピーしました！",
    playBtn: "音声で聞く",
    placeholderEncode: "HELLO WORLD",
    placeholderDecode: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    howTitle: "使用方法",
    howSteps: [
      "テキスト→モールスまたはモールス→テキストモードを選択します。",
      "入力欄にテキストやモールス信号を入力します（単語は'/'で区切る）。",
      "結果を確認し、「音声で聞く」で実際のモールス信号音も聞いてみましょう。",
    ],
    faq: [
      { q: "単語の区切りはどうしますか？", a: "モールス信号では文字の間はスペース1つ、単語の間はスラッシュ（/）で区切るのが一般的な表記法です。" },
      { q: "音はどうやって再生されますか？", a: "ブラウザのオーディオAPIを使用して短い信号（点）と長い信号（ダッシュ）をビープ音として再生し、別途インストールやサーバー接続は不要です。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Código Morse",
    subtitle: "Convierte texto a código Morse, o decodifica código Morse de vuelta a texto.",
    modeEncode: "Texto → Morse",
    modeDecode: "Morse → Texto",
    inputLabel: "Entrada",
    outputLabel: "Resultado",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    playBtn: "Reproducir Sonido",
    placeholderEncode: "HELLO WORLD",
    placeholderDecode: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige el modo texto-a-morse o morse-a-texto.",
      "Introduce texto o código Morse (separa palabras con '/').",
      "Revisa el resultado y prueba 'Reproducir Sonido' para escuchar los tonos Morse.",
    ],
    faq: [
      { q: "¿Cómo se separan las palabras?", a: "En código Morse, las letras se separan con un espacio y las palabras con una barra (/) — esta es la notación estándar." },
      { q: "¿Cómo se reproduce el sonido?", a: "Usa la API de audio del navegador para reproducir tonos cortos (punto) y largos (raya), sin necesidad de instalación ni conexión a servidor." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

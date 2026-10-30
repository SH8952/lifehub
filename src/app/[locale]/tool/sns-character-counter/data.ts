export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  placeholder: string;
  totalChars: string;
  overLimit: string;
  remaining: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "SNS 글자수 제한 체커",
    subtitle: "텍스트를 입력하면 주요 SNS별 글자수 제한을 초과하는지 바로 확인할 수 있습니다.",
    inputLabel: "텍스트 입력",
    placeholder: "여기에 게시할 글을 입력하세요...",
    totalChars: "총 글자수",
    overLimit: "초과",
    remaining: "남음",
    howTitle: "사용 방법",
    howSteps: [
      "위 입력창에 게시할 텍스트를 붙여넣거나 직접 입력합니다.",
      "각 플랫폼별로 글자수 제한 초과 여부와 남은 글자수를 실시간으로 확인합니다.",
      "초과된 플랫폼은 빨간색으로 표시되니 참고해 내용을 조정하세요.",
    ],
    faq: [
      { q: "글자수는 어떻게 계산되나요?", a: "공백과 줄바꿈을 포함한 전체 문자 수를 기준으로 계산합니다. 이모지는 플랫폼에 따라 2자로 계산될 수 있어 실제와 약간 다를 수 있습니다." },
      { q: "어떤 플랫폼 기준을 제공하나요?", a: "X(트위터), 인스타그램 캡션, 페이스북 게시물, 스레드, 유튜브 설명, 카카오톡 상태메시지 등 주요 플랫폼의 공개된 글자수 제한을 기준으로 합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력한 텍스트를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "SNS Character Limit Checker",
    subtitle: "Type your text and instantly see whether it exceeds the character limit for each major social platform.",
    inputLabel: "Enter Text",
    placeholder: "Type the text you plan to post...",
    totalChars: "Total Characters",
    overLimit: "over",
    remaining: "remaining",
    howTitle: "How to Use",
    howSteps: [
      "Paste or type the text you plan to post into the input box above.",
      "Check in real time whether you exceed each platform's character limit and how many characters remain.",
      "Platforms you've exceeded are highlighted in red — adjust your text accordingly.",
    ],
    faq: [
      { q: "How are characters counted?", a: "The count includes spaces and line breaks. Since some platforms count emoji as 2 characters, the actual count may differ slightly." },
      { q: "Which platforms are covered?", a: "X (Twitter), Instagram caption, Facebook post, Threads, YouTube description, and other major platforms' publicly documented character limits." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your text on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "SNS文字数制限チェッカー",
    subtitle: "テキストを入力すると、主要SNSごとの文字数制限を超えているかすぐに確認できます。",
    inputLabel: "テキスト入力",
    placeholder: "投稿する文章を入力してください...",
    totalChars: "総文字数",
    overLimit: "超過",
    remaining: "残り",
    howTitle: "使用方法",
    howSteps: [
      "上の入力欄に投稿するテキストを貼り付けるか直接入力します。",
      "各プラットフォームの文字数制限を超えているか、残り文字数をリアルタイムで確認します。",
      "制限を超えたプラットフォームは赤色で表示されるので、内容を調整してください。",
    ],
    faq: [
      { q: "文字数はどのように計算されますか？", a: "スペースと改行を含む全文字数で計算します。絵文字はプラットフォームによって2文字として扱われる場合があり、実際と若干異なることがあります。" },
      { q: "どのプラットフォームに対応していますか？", a: "X（旧Twitter）、Instagramキャプション、Facebook投稿、Threads、YouTube説明欄など主要プラットフォームの公開されている文字数制限を基準にしています。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力したテキストをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Verificador de Límite de Caracteres SNS",
    subtitle: "Escribe tu texto y comprueba al instante si excede el límite de caracteres de cada red social.",
    inputLabel: "Introducir Texto",
    placeholder: "Escribe el texto que planeas publicar...",
    totalChars: "Total de Caracteres",
    overLimit: "excedido",
    remaining: "restante",
    howTitle: "Cómo Usar",
    howSteps: [
      "Pega o escribe el texto que planeas publicar en el cuadro de arriba.",
      "Comprueba en tiempo real si excedes el límite de caracteres de cada plataforma y cuántos quedan.",
      "Las plataformas excedidas se resaltan en rojo — ajusta tu texto en consecuencia.",
    ],
    faq: [
      { q: "¿Cómo se cuentan los caracteres?", a: "El conteo incluye espacios y saltos de línea. Como algunas plataformas cuentan los emojis como 2 caracteres, el conteo real puede variar ligeramente." },
      { q: "¿Qué plataformas se incluyen?", a: "X (Twitter), descripción de Instagram, publicación de Facebook, Threads, descripción de YouTube y otros límites de caracteres públicamente documentados de las principales plataformas." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu texto en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

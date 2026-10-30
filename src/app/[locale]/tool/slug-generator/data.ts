export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  separatorLabel: string;
  lowercaseLabel: string;
  resultLabel: string;
  copyBtn: string;
  copied: string;
  placeholder: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "슬러그(Slug) 생성기",
    subtitle: "제목이나 문장을 URL에 쓸 수 있는 슬러그 형태로 변환합니다.",
    inputLabel: "입력 텍스트",
    separatorLabel: "구분자",
    lowercaseLabel: "소문자로 변환",
    resultLabel: "생성된 슬러그",
    copyBtn: "복사",
    copied: "복사됨!",
    placeholder: "2026년 가을 여행 가이드: 최고의 명소 10곳!",
    howTitle: "사용 방법",
    howSteps: [
      "제목이나 문장을 입력창에 입력합니다.",
      "구분자(하이픈/언더스코어)와 소문자 변환 옵션을 선택합니다.",
      "생성된 슬러그를 복사해 블로그 URL이나 파일명에 사용하세요.",
    ],
    faq: [
      { q: "한글도 슬러그로 변환되나요?", a: "한글, 일본어 등 비라틴 문자는 URL에 그대로 사용하기 어려워 자동으로 제거되며, 영문·숫자·구분자만 남습니다. 한글 제목은 영문으로 번역한 뒤 입력하는 것을 권장합니다." },
      { q: "슬러그에 특수문자를 포함할 수 있나요?", a: "SEO와 URL 호환성을 위해 영문 소문자, 숫자, 구분자(-,_)만 남기고 나머지 특수문자는 제거합니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Slug Generator",
    subtitle: "Convert a title or sentence into a URL-friendly slug.",
    inputLabel: "Input Text",
    separatorLabel: "Separator",
    lowercaseLabel: "Convert to lowercase",
    resultLabel: "Generated Slug",
    copyBtn: "Copy",
    copied: "Copied!",
    placeholder: "The Ultimate Fall Travel Guide: Top 10 Destinations!",
    howTitle: "How to Use",
    howSteps: [
      "Type a title or sentence into the input box.",
      "Choose a separator (hyphen/underscore) and lowercase option.",
      "Copy the generated slug for use in blog URLs or filenames.",
    ],
    faq: [
      { q: "Are Korean or non-Latin characters converted?", a: "Non-Latin characters like Korean or Japanese are hard to use directly in URLs and are automatically removed, leaving only letters, numbers, and the separator. We recommend translating the title to English first." },
      { q: "Can a slug contain special characters?", a: "For SEO and URL compatibility, only lowercase letters, numbers, and the separator (-, _) are kept; other special characters are removed." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "スラッグ生成ツール",
    subtitle: "タイトルや文章をURLで使えるスラッグ形式に変換します。",
    inputLabel: "入力テキスト",
    separatorLabel: "区切り文字",
    lowercaseLabel: "小文字に変換",
    resultLabel: "生成されたスラッグ",
    copyBtn: "コピー",
    copied: "コピーしました！",
    placeholder: "2026年秋の旅行ガイド：最高の名所10選！",
    howTitle: "使用方法",
    howSteps: [
      "タイトルや文章を入力欄に入力します。",
      "区切り文字（ハイフン/アンダースコア）と小文字変換オプションを選択します。",
      "生成されたスラッグをコピーしてブログのURLやファイル名に使用しましょう。",
    ],
    faq: [
      { q: "日本語も変換されますか？", a: "日本語や韓国語などの非ラテン文字はURLでそのまま使うのが難しいため自動的に削除され、英数字と区切り文字のみが残ります。タイトルを英語に翻訳してから入力することをお勧めします。" },
      { q: "スラッグに特殊文字を含めることはできますか？", a: "SEOとURL互換性のため、英小文字、数字、区切り文字（-,_）のみを残し、その他の特殊文字は削除します。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Slugs",
    subtitle: "Convierte un título u oración en un slug compatible con URL.",
    inputLabel: "Texto de Entrada",
    separatorLabel: "Separador",
    lowercaseLabel: "Convertir a minúsculas",
    resultLabel: "Slug Generado",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    placeholder: "Guía de Viaje de Otoño: ¡Los 10 Mejores Destinos!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe un título u oración en el cuadro de entrada.",
      "Elige un separador (guion/guion bajo) y la opción de minúsculas.",
      "Copia el slug generado para usarlo en URLs de blog o nombres de archivo.",
    ],
    faq: [
      { q: "¿Se convierten los caracteres no latinos?", a: "Los caracteres no latinos como el coreano o japonés son difíciles de usar directamente en URLs y se eliminan automáticamente, dejando solo letras, números y el separador. Recomendamos traducir el título al inglés primero." },
      { q: "¿Puede un slug contener caracteres especiales?", a: "Por compatibilidad SEO y de URL, solo se conservan letras minúsculas, números y el separador (-, _); otros caracteres especiales se eliminan." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

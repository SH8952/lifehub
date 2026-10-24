export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  hexLabel: string;
  rgbLabel: string;
  pickerLabel: string;
  previewLabel: string;
  copyBtn: string;
  copiedMsg: string;
  invalidHex: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "RGB ↔ HEX 색상 변환기",
    subtitle: "HEX 색상 코드와 RGB 값을 서로 실시간으로 변환하세요 (브라우저에서 100% 처리)",
    hexLabel: "HEX 코드",
    rgbLabel: "RGB 값",
    pickerLabel: "색상 선택기",
    previewLabel: "미리보기",
    copyBtn: "복사",
    copiedMsg: "복사되었습니다",
    invalidHex: "❌ 올바른 HEX 코드 형식이 아닙니다 (예: #4F46E5)",
    howTitle: "사용 방법",
    howSteps: [
      "HEX 코드(예: #4F46E5)를 입력하거나 색상 선택기로 색을 고릅니다.",
      "RGB 각 채널(R, G, B) 값을 직접 입력해도 HEX 코드가 자동으로 갱신됩니다.",
      "미리보기에서 결과 색상을 바로 확인합니다.",
      "복사 버튼으로 HEX 또는 RGB 값을 원하는 형식으로 복사합니다.",
    ],
    faq: [
      {
        q: "입력한 색상 값이 서버로 전송되나요?",
        a: "아니요. 모든 변환은 브라우저 안에서 계산식으로 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "HEX 코드는 어떤 형식을 지원하나요?",
        a: "#RRGGBB 형식(예: #4F46E5)을 지원합니다. #을 생략하고 입력해도 자동으로 인식됩니다.",
      },
      {
        q: "CSS에서 RGB와 HEX 중 어떤 걸 써야 하나요?",
        a: "결과는 동일하므로 취향에 따라 선택하면 됩니다. 다만 투명도(alpha)가 필요하다면 rgba() 형식이나 8자리 HEX(#RRGGBBAA)를 사용해야 합니다.",
      },
    ],
    disclaimer: "⚠️ 이 도구는 불투명 색상(RGB/HEX)만 지원하며 알파(투명도) 값은 다루지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "RGB ↔ HEX Color Converter",
    subtitle: "Convert HEX color codes and RGB values back and forth in real time (100% processed in your browser)",
    hexLabel: "HEX Code",
    rgbLabel: "RGB Values",
    pickerLabel: "Color Picker",
    previewLabel: "Preview",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    invalidHex: "❌ Not a valid HEX code format (e.g. #4F46E5)",
    howTitle: "How to Use",
    howSteps: [
      "Enter a HEX code (e.g. #4F46E5) or pick a color with the color picker.",
      "Typing individual RGB channel values (R, G, B) also updates the HEX code automatically.",
      "Check the resulting color instantly in the preview.",
      "Copy the HEX or RGB value in whichever format you need.",
    ],
    faq: [
      {
        q: "Is my color value sent to a server?",
        a: "No. All conversion is done with simple math inside your browser, and no data is ever sent to a server.",
      },
      {
        q: "What HEX format does this support?",
        a: "It supports #RRGGBB format (e.g. #4F46E5). You can also type it without the leading # and it will be recognized automatically.",
      },
      {
        q: "Should I use RGB or HEX in my CSS?",
        a: "They produce the same result, so pick whichever you prefer. If you need transparency (alpha), use rgba() or an 8-digit HEX (#RRGGBBAA) instead.",
      },
    ],
    disclaimer: "This tool only supports opaque colors (RGB/HEX) — it does not handle alpha (transparency) values.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "RGB ↔ HEX カラー変換ツール",
    subtitle: "HEXカラーコードとRGB値をリアルタイムで相互変換します（ブラウザで100%処理）",
    hexLabel: "HEXコード",
    rgbLabel: "RGB値",
    pickerLabel: "カラーピッカー",
    previewLabel: "プレビュー",
    copyBtn: "コピー",
    copiedMsg: "コピーしました",
    invalidHex: "❌ 正しいHEXコード形式ではありません（例: #4F46E5）",
    howTitle: "使い方",
    howSteps: [
      "HEXコード（例: #4F46E5）を入力するか、カラーピッカーで色を選びます。",
      "RGBの各チャンネル（R、G、B）の値を直接入力してもHEXコードが自動的に更新されます。",
      "プレビューで結果の色をすぐに確認できます。",
      "コピーボタンでHEXまたはRGB値を必要な形式でコピーします。",
    ],
    faq: [
      {
        q: "入力した色の値はサーバーに送信されますか？",
        a: "いいえ。すべての変換はブラウザ内で計算式によって処理され、データはサーバーに送信されません。",
      },
      {
        q: "どのHEX形式に対応していますか？",
        a: "#RRGGBB形式（例: #4F46E5）に対応しています。先頭の#を省略して入力しても自動的に認識されます。",
      },
      {
        q: "CSSではRGBとHEXのどちらを使うべきですか？",
        a: "結果は同じなのでお好みで選んで構いません。ただし透明度（アルファ）が必要な場合はrgba()形式か8桁HEX（#RRGGBBAA）を使用してください。",
      },
    ],
    disclaimer: "⚠️ このツールは不透明な色（RGB/HEX）のみに対応しており、アルファ（透明度）値は扱いません。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Convertidor de Color RGB ↔ HEX",
    subtitle: "Convierte códigos de color HEX y valores RGB en ambos sentidos en tiempo real (100% procesado en tu navegador)",
    hexLabel: "Código HEX",
    rgbLabel: "Valores RGB",
    pickerLabel: "Selector de Color",
    previewLabel: "Vista Previa",
    copyBtn: "Copiar",
    copiedMsg: "Copiado!",
    invalidHex: "❌ No es un formato de código HEX valido (ej. #4F46E5)",
    howTitle: "Como Usar",
    howSteps: [
      "Ingresa un código HEX (ej. #4F46E5) o elige un color con el selector.",
      "Escribir valores individuales de canal RGB (R, G, B) también actualiza el código HEX automáticamente.",
      "Comprueba el color resultante al instante en la vista previa.",
      "Copia el valor HEX o RGB en el formato que necesites.",
    ],
    faq: [
      {
        q: "Se envia mi valor de color a un servidor?",
        a: "No. Toda la conversión se realiza con cálculos simples dentro de tu navegador, y no se envian datos a ningún servidor.",
      },
      {
        q: "Que formato HEX admite esta herramienta?",
        a: "Admite el formato #RRGGBB (ej. #4F46E5). También puedes escribirlo sin el # inicial y se reconocera automáticamente.",
      },
      {
        q: "Debería usar RGB o HEX en mi CSS?",
        a: "Producen el mismo resultado, así que elige el que prefieras. Si necesitas transparencia (alfa), usa rgba() o un HEX de 8 digitos (#RRGGBBAA).",
      },
    ],
    disclaimer: "Esta herramienta solo admite colores opacos (RGB/HEX) y no maneja valores alfa (transparencia).",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};

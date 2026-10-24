export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  quantityLabel: string;
  uppercaseLabel: string;
  hyphensLabel: string;
  generateBtn: string;
  copyAllBtn: string;
  copyBtn: string;
  copiedMsg: string;
  emptyMsg: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "UUID 생성기",
    subtitle: "충돌 없는 고유 식별자(UUID v4)를 원하는 개수만큼 즉시 생성하세요 (브라우저에서 100% 처리)",
    quantityLabel: "생성 개수",
    uppercaseLabel: "대문자로",
    hyphensLabel: "하이픈(-) 포함",
    generateBtn: "생성하기",
    copyAllBtn: "전체 복사",
    copyBtn: "복사",
    copiedMsg: "복사되었습니다",
    emptyMsg: "'생성하기' 버튼을 눌러 UUID를 만들어보세요",
    howTitle: "사용 방법",
    howSteps: [
      "생성할 개수를 입력합니다(최대 100개).",
      "필요하면 대문자 표시, 하이픈 포함 여부를 선택합니다.",
      "'생성하기' 버튼을 누르면 목록이 즉시 만들어집니다.",
      "개별 항목을 클릭하거나 '전체 복사' 버튼으로 원하는 만큼 복사합니다.",
    ],
    faq: [
      {
        q: "생성된 UUID가 서버에 기록되나요?",
        a: "아니요. 모든 UUID는 브라우저 내장 함수(crypto.randomUUID)로 생성되며, 서버로 전송되거나 저장되지 않습니다.",
      },
      {
        q: "UUID가 중복될 가능성이 있나요?",
        a: "이 도구가 생성하는 UUID v4는 사실상 무작위 값으로, 실질적으로 중복될 가능성이 없다고 볼 수 있을 만큼 충돌 확률이 극히 낮습니다(수십억 개를 생성해도 중복 확률은 무시할 수준입니다).",
      },
      {
        q: "데이터베이스 기본 키로 사용해도 되나요?",
        a: "네, 많이 사용되는 방식입니다. 다만 UUID는 순차 증가하는 정수 키보다 인덱스 크기가 크고 정렬 성능이 떨어질 수 있으므로, 대규모 시스템이라면 이러한 트레이드오프를 고려하는 것이 좋습니다.",
      },
    ],
    disclaimer: "⚠️ 브라우저의 crypto API를 지원하지 않는 매우 오래된 환경에서는 동작하지 않을 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "UUID Generator",
    subtitle: "Instantly generate collision-free unique identifiers (UUID v4) in any quantity (100% processed in your browser)",
    quantityLabel: "Quantity",
    uppercaseLabel: "Uppercase",
    hyphensLabel: "Include hyphens (-)",
    generateBtn: "Generate",
    copyAllBtn: "Copy All",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    emptyMsg: "Click 'Generate' to create UUIDs",
    howTitle: "How to Use",
    howSteps: [
      "Enter how many UUIDs you want (up to 100).",
      "Optionally choose uppercase display or whether to include hyphens.",
      "Click 'Generate' to create the list instantly.",
      "Click an individual item or use 'Copy All' to copy what you need.",
    ],
    faq: [
      {
        q: "Are generated UUIDs recorded on a server?",
        a: "No. All UUIDs are created using your browser's built-in function (crypto.randomUUID) and are never sent to or stored on a server.",
      },
      {
        q: "Could two UUIDs collide?",
        a: "UUID v4 values generated here are essentially random, with a collision probability so low it's practically negligible — even generating billions would carry a vanishingly small risk of duplication.",
      },
      {
        q: "Can I use these as database primary keys?",
        a: "Yes, this is a common practice. However, UUIDs take more index space and can hurt sort performance compared to sequential integer keys, so consider this trade-off for large-scale systems.",
      },
    ],
    disclaimer: "This may not work in very old browsers that lack the crypto API.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "UUID生成ツール",
    subtitle: "衝突しない一意の識別子（UUID v4）を必要な数だけ即座に生成します（ブラウザで100%処理）",
    quantityLabel: "生成数",
    uppercaseLabel: "大文字表示",
    hyphensLabel: "ハイフン(-)を含める",
    generateBtn: "生成する",
    copyAllBtn: "すべてコピー",
    copyBtn: "コピー",
    copiedMsg: "コピーしました",
    emptyMsg: "「生成する」ボタンを押してUUIDを作成してください",
    howTitle: "使い方",
    howSteps: [
      "生成する個数を入力します（最大100個）。",
      "必要に応じて大文字表示、ハイフンを含めるかどうかを選択します。",
      "「生成する」ボタンを押すとリストが即座に作成されます。",
      "個別項目をクリックするか、「すべてコピー」ボタンで必要な分だけコピーします。",
    ],
    faq: [
      {
        q: "生成されたUUIDはサーバーに記録されますか？",
        a: "いいえ。すべてのUUIDはブラウザ内蔵の関数（crypto.randomUUID）で生成され、サーバーに送信・保存されることはありません。",
      },
      {
        q: "UUIDが重複する可能性はありますか？",
        a: "このツールが生成するUUID v4は事実上ランダムな値で、衝突確率は極めて低く、実質的に重複しないと考えて問題ありません（数十億個生成しても重複確率は無視できるレベルです）。",
      },
      {
        q: "データベースの主キーとして使用してもいいですか？",
        a: "はい、よく使われる方法です。ただしUUIDは連番の整数キーに比べてインデックスサイズが大きく、ソート性能が低下する場合があるため、大規模システムではこのトレードオフを考慮することをお勧めします。",
      },
    ],
    disclaimer: "⚠️ crypto APIに対応していない非常に古いブラウザでは動作しない場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Generador de UUID",
    subtitle: "Genera al instante identificadores unicos sin colisiones (UUID v4) en la cantidad que necesites (100% procesado en tu navegador)",
    quantityLabel: "Cantidad",
    uppercaseLabel: "MAYÚSCULAS",
    hyphensLabel: "Incluir guiones (-)",
    generateBtn: "Generar",
    copyAllBtn: "Copiar Todo",
    copyBtn: "Copiar",
    copiedMsg: "Copiado!",
    emptyMsg: "Haz clic en 'Generar' para crear UUIDs",
    howTitle: "Como Usar",
    howSteps: [
      "Ingresa cuantos UUIDs deseas (hasta 100).",
      "Opcionalmente elige mostrar en MAYÚSCULAS o si incluir guiones.",
      "Haz clic en 'Generar' para crear la lista al instante.",
      "Haz clic en un elemento individual o usa 'Copiar Todo' para copiar lo que necesites.",
    ],
    faq: [
      {
        q: "Se registran los UUIDs generados en un servidor?",
        a: "No. Todos los UUIDs se crean usando la función integrada de tu navegador (crypto.randomUUID) y nunca se envian ni almacenan en un servidor.",
      },
      {
        q: "Podrian colisionar dos UUIDs?",
        a: "Los valores UUID v4 generados aquí son esencialmente aleatorios, con una probabilidad de colisión tan baja que es practicamente insignificante, incluso generando miles de millones el riesgo de duplicado seria mínimo.",
      },
      {
        q: "Puedo usarlos como claves primarias de base de datos?",
        a: "Si, es una práctica común. Sin embargo, los UUID ocupan más espacio de índice y pueden afectar el rendimiento de ordenamiento comparado con claves enteras secuenciales, así que considera este compromiso para sistemas a gran escala.",
      },
    ],
    disclaimer: "Esto puede no funcionar en navegadores muy antiguos que carecen de la API crypto.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};

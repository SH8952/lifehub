export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  directionLabel: string;
  justifyLabel: string;
  alignLabel: string;
  wrapLabel: string;
  gapLabel: string;
  itemCountLabel: string;
  previewLabel: string;
  codeLabel: string;
  copyBtn: string;
  copied: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "CSS Flexbox 생성기",
    subtitle: "옵션을 선택해 Flexbox 레이아웃을 실시간으로 확인하고 CSS 코드를 복사하세요.",
    directionLabel: "방향 (flex-direction)",
    justifyLabel: "가로 정렬 (justify-content)",
    alignLabel: "세로 정렬 (align-items)",
    wrapLabel: "줄바꿈 (flex-wrap)",
    gapLabel: "항목 간격 (gap)",
    itemCountLabel: "항목 개수",
    previewLabel: "미리보기",
    codeLabel: "CSS 코드",
    copyBtn: "코드 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "방향, 정렬, 줄바꿈 옵션을 선택합니다.",
      "항목 간격과 개수를 조절해 레이아웃을 확인합니다.",
      "미리보기를 확인하고 생성된 CSS 코드를 복사하세요.",
    ],
    faq: [
      { q: "Grid와 Flexbox 중 어떤 걸 써야 하나요?", a: "한 방향(행 또는 열) 정렬이 중심이면 Flexbox가, 2차원 격자 배치가 필요하면 Grid가 더 적합합니다." },
      { q: "자식 요소 각각의 flex-grow/shrink도 설정할 수 있나요?", a: "현재 버전은 컨테이너 속성 중심입니다. 개별 항목의 flex-grow/shrink/basis는 생성된 코드에 직접 추가해 사용하세요." },
    ],
    disclaimer: "생성된 코드는 자유롭게 사용할 수 있으며 별도의 저작권 제한이 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "CSS Flexbox Generator",
    subtitle: "Pick options to preview a Flexbox layout live and copy the CSS code.",
    directionLabel: "Direction (flex-direction)",
    justifyLabel: "Justify Content",
    alignLabel: "Align Items",
    wrapLabel: "Wrap (flex-wrap)",
    gapLabel: "Gap",
    itemCountLabel: "Item Count",
    previewLabel: "Preview",
    codeLabel: "CSS Code",
    copyBtn: "Copy Code",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Choose direction, alignment, and wrap options.",
      "Adjust gap and item count to check the layout.",
      "Check the preview and copy the generated CSS code.",
    ],
    faq: [
      { q: "Should I use Grid or Flexbox?", a: "Flexbox suits single-direction (row or column) alignment, while Grid is better for two-dimensional layouts." },
      { q: "Can I set flex-grow/shrink per child item?", a: "This version focuses on container properties. Add individual flex-grow/shrink/basis to the generated code yourself as needed." },
    ],
    disclaimer: "The generated code is free to use with no copyright restrictions.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "CSS Flexbox生成ツール",
    subtitle: "オプションを選んでFlexboxレイアウトをリアルタイムで確認し、CSSコードをコピーしましょう。",
    directionLabel: "方向（flex-direction）",
    justifyLabel: "横方向の配置（justify-content）",
    alignLabel: "縦方向の配置（align-items）",
    wrapLabel: "折り返し（flex-wrap）",
    gapLabel: "項目間の間隔（gap）",
    itemCountLabel: "項目数",
    previewLabel: "プレビュー",
    codeLabel: "CSSコード",
    copyBtn: "コードをコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "方向、配置、折り返しオプションを選択します。",
      "項目の間隔と数を調整してレイアウトを確認します。",
      "プレビューを確認し、生成されたCSSコードをコピーしましょう。",
    ],
    faq: [
      { q: "GridとFlexbox、どちらを使うべきですか？", a: "一方向（行または列）の配置が中心ならFlexboxが、2次元のグリッド配置が必要ならGridがより適しています。" },
      { q: "子要素ごとのflex-grow/shrinkも設定できますか？", a: "現在のバージョンはコンテナプロパティが中心です。個別項目のflex-grow/shrink/basisは生成されたコードに直接追加して使用してください。" },
    ],
    disclaimer: "生成されたコードは自由に使用でき、別途著作権の制限はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Flexbox CSS",
    subtitle: "Elige opciones para ver un diseño Flexbox en vivo y copiar el código CSS.",
    directionLabel: "Dirección (flex-direction)",
    justifyLabel: "Justificación (justify-content)",
    alignLabel: "Alineación (align-items)",
    wrapLabel: "Ajuste (flex-wrap)",
    gapLabel: "Espacio (gap)",
    itemCountLabel: "Cantidad de Elementos",
    previewLabel: "Vista Previa",
    codeLabel: "Código CSS",
    copyBtn: "Copiar Código",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige las opciones de dirección, alineación y ajuste.",
      "Ajusta el espacio y la cantidad de elementos para ver el diseño.",
      "Revisa la vista previa y copia el código CSS generado.",
    ],
    faq: [
      { q: "¿Debo usar Grid o Flexbox?", a: "Flexbox es ideal para alineación en una dirección (fila o columna), mientras que Grid es mejor para diseños bidimensionales." },
      { q: "¿Puedo configurar flex-grow/shrink por elemento?", a: "Esta versión se centra en las propiedades del contenedor. Añade flex-grow/shrink/basis individuales al código generado según lo necesites." },
    ],
    disclaimer: "El código generado es de uso libre y no tiene restricciones de derechos de autor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

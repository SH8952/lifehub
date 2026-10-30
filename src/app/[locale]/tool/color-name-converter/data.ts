export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  hexLabel: string;
  closestName: string;
  nameListLabel: string;
  copied: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "색상 이름 ↔ HEX 변환기",
    subtitle: "HEX 코드를 입력하면 가장 가까운 색상 이름을, 색상 이름을 선택하면 HEX 코드를 확인할 수 있습니다.",
    hexLabel: "HEX 코드",
    closestName: "가장 가까운 색상 이름",
    nameListLabel: "색상 이름 목록에서 선택",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "HEX 코드를 입력하거나 색상 피커로 선택하면 가장 가까운 CSS 색상 이름이 표시됩니다.",
      "아래 목록에서 색상 이름을 클릭하면 해당 HEX 코드가 상단에 반영됩니다.",
      "HEX 코드를 클릭하면 클립보드에 복사됩니다.",
    ],
    faq: [
      { q: "어떤 색상 이름 체계를 사용하나요?", a: "CSS/HTML 표준에 정의된 140여 개의 공식 색상 이름(named colors)을 기준으로 합니다." },
      { q: "가장 가까운 색상은 어떻게 계산하나요?", a: "RGB 색공간에서의 유클리드 거리를 기준으로 가장 가까운 색상 이름을 찾습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Color Name ↔ HEX Converter",
    subtitle: "Enter a HEX code to find the closest color name, or pick a name to get its HEX code.",
    hexLabel: "HEX Code",
    closestName: "Closest Color Name",
    nameListLabel: "Pick from Color Name List",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Enter a HEX code or use the color picker to see the closest CSS color name.",
      "Click a color name in the list below to set its HEX code above.",
      "Click the HEX code to copy it to your clipboard.",
    ],
    faq: [
      { q: "What color naming system is used?", a: "It's based on the ~140 official CSS/HTML named colors." },
      { q: "How is the closest color calculated?", a: "By finding the nearest named color using Euclidean distance in RGB color space." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "色名↔HEX変換ツール",
    subtitle: "HEXコードを入力すると最も近い色名を、色名を選択するとHEXコードを確認できます。",
    hexLabel: "HEXコード",
    closestName: "最も近い色名",
    nameListLabel: "色名リストから選択",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "HEXコードを入力するかカラーピッカーで選択すると、最も近いCSS色名が表示されます。",
      "下のリストで色名をクリックすると、対応するHEXコードが上部に反映されます。",
      "HEXコードをクリックするとクリップボードにコピーされます。",
    ],
    faq: [
      { q: "どの色名体系を使用していますか？", a: "CSS/HTML標準で定義された約140種類の公式色名（named colors）を基準にしています。" },
      { q: "最も近い色はどのように計算しますか？", a: "RGB色空間でのユークリッド距離を基準に最も近い色名を見つけます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Nombre de Color ↔ HEX",
    subtitle: "Introduce un código HEX para encontrar el nombre de color más cercano, o elige un nombre para obtener su HEX.",
    hexLabel: "Código HEX",
    closestName: "Nombre de Color Más Cercano",
    nameListLabel: "Elegir de la Lista de Nombres",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce un código HEX o usa el selector de color para ver el nombre CSS más cercano.",
      "Haz clic en un nombre de color de la lista para fijar su HEX arriba.",
      "Haz clic en el código HEX para copiarlo al portapapeles.",
    ],
    faq: [
      { q: "¿Qué sistema de nombres de color se usa?", a: "Se basa en los ~140 nombres de color oficiales de CSS/HTML." },
      { q: "¿Cómo se calcula el color más cercano?", a: "Buscando el nombre de color más cercano usando distancia euclidiana en el espacio de color RGB." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

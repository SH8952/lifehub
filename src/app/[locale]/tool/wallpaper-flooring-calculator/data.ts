export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  tabWallpaper: string;
  tabFlooring: string;
  areaLabel: string;
  areaPlaceholder: string;
  wallpaperTypeLabel: string;
  wallpaperSynthetic: string;
  wallpaperSilk: string;
  wallpaperResultLabel: string;
  wallpaperResultUnit: string;
  flooringResultLabel: string;
  flooringResultUnit: string;
  lossNote: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "도배·장판 필요량 계산기",
    subtitle: "집 평수를 입력하면 벽지 필요 롤 수 또는 장판 필요 평수를 계산해드립니다.",
    tabWallpaper: "도배(벽지)",
    tabFlooring: "장판",
    areaLabel: "집 평수",
    areaPlaceholder: "예: 20",
    wallpaperTypeLabel: "벽지 종류",
    wallpaperSynthetic: "합지벽지 (1롤당 약 2.5평)",
    wallpaperSilk: "실크벽지 (1롤당 약 2평)",
    wallpaperResultLabel: "필요 벽지",
    wallpaperResultUnit: "롤",
    flooringResultLabel: "필요 장판 면적 (로스 10% 포함)",
    flooringResultUnit: "평",
    lossNote: "실제 필요량은 벽 높이, 창문·문 개수, 시공 방식에 따라 달라질 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "'도배(벽지)' 또는 '장판' 탭을 선택합니다.",
      "집 평수를 입력합니다.",
      "도배의 경우 벽지 종류(합지/실크)를 선택합니다.",
      "계산된 필요 롤 수 또는 필요 평수를 확인합니다.",
    ],
    faq: [
      { q: "합지벽지와 실크벽지의 필요량이 다른 이유는 무엇인가요?", a: "실크벽지는 합지벽지보다 두껍고 무늬 맞춤에 따른 손실(로스)이 더 많아 같은 면적이라도 더 많은 롤이 필요한 경우가 일반적입니다." },
      { q: "장판은 왜 로스를 10%나 추가하나요?", a: "장판은 방 모양, 문턱, 배관 등으로 인해 자르고 남는 부분이 생기기 때문에 통상 10% 정도의 여유분을 추가로 계산하는 것이 일반적입니다." },
    ],
    disclaimer: "이 계산기는 일반적인 평균값을 기준으로 한 참고용 추정치이며, 실제 시공 현장(벽 높이, 구조 등)에 따라 필요량이 달라질 수 있습니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Wallpaper & Flooring Amount Calculator",
    subtitle: "Enter your home size to calculate how many wallpaper rolls or how much flooring area you need.",
    tabWallpaper: "Wallpaper",
    tabFlooring: "Flooring",
    areaLabel: "Home Size (pyeong, ~3.3m²)",
    areaPlaceholder: "e.g. 20",
    wallpaperTypeLabel: "Wallpaper Type",
    wallpaperSynthetic: "Synthetic paper wallpaper (~2.5 pyeong per roll)",
    wallpaperSilk: "Silk wallpaper (~2 pyeong per roll)",
    wallpaperResultLabel: "Wallpaper Needed",
    wallpaperResultUnit: "rolls",
    flooringResultLabel: "Flooring Area Needed (incl. 10% loss)",
    flooringResultUnit: "pyeong",
    lossNote: "Actual amount needed may vary by wall height, number of windows/doors, and installation method.",
    howTitle: "How to Use",
    howSteps: [
      "Choose the 'Wallpaper' or 'Flooring' tab.",
      "Enter your home size.",
      "For wallpaper, select the wallpaper type (synthetic/silk).",
      "Check the calculated number of rolls or flooring area needed.",
    ],
    faq: [
      { q: "Why does synthetic vs. silk wallpaper need different amounts?", a: "Silk wallpaper is thicker and has more pattern-matching loss than synthetic paper wallpaper, so it typically requires more rolls for the same area." },
      { q: "Why does flooring add 10% extra?", a: "Flooring typically needs about 10% extra due to cutting loss from room shapes, door thresholds, and pipes — this is a standard rule of thumb." },
    ],
    disclaimer: "This calculator provides a reference estimate based on general averages; actual amounts needed may vary by site conditions such as wall height and structure.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "壁紙・床材必要量計算機",
    subtitle: "家の広さを入力すると、必要な壁紙ロール数や床材の必要面積を計算します。",
    tabWallpaper: "壁紙",
    tabFlooring: "床材",
    areaLabel: "家の広さ（坪、約3.3m²）",
    areaPlaceholder: "例: 20",
    wallpaperTypeLabel: "壁紙の種類",
    wallpaperSynthetic: "合紙壁紙（1ロールあたり約2.5坪）",
    wallpaperSilk: "シルク壁紙（1ロールあたり約2坪）",
    wallpaperResultLabel: "必要な壁紙",
    wallpaperResultUnit: "ロール",
    flooringResultLabel: "必要な床材面積（ロス10%含む）",
    flooringResultUnit: "坪",
    lossNote: "実際の必要量は壁の高さ、窓・ドアの数、施工方法によって変わる場合があります。",
    howTitle: "使用方法",
    howSteps: [
      "「壁紙」または「床材」タブを選びます。",
      "家の広さを入力します。",
      "壁紙の場合は種類（合紙／シルク）を選びます。",
      "計算された必要ロール数または必要坪数を確認します。",
    ],
    faq: [
      { q: "合紙壁紙とシルク壁紙で必要量が違うのはなぜですか？", a: "シルク壁紙は合紙壁紙より厚く、柄合わせによるロスが多いため、同じ面積でも通常より多くのロールが必要になります。" },
      { q: "床材はなぜロスを10%も追加するのですか？", a: "床材は部屋の形、ドアの敷居、配管などにより切り落とす部分が出るため、通常10%程度の余裕を追加して計算するのが一般的です。" },
    ],
    disclaimer: "この計算機は一般的な平均値を基にした参考用の推定値であり、実際の施工現場（壁の高さ、構造など）によって必要量が変わる可能性があります。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Calculadora de Papel Tapiz y Piso",
    subtitle: "Ingresa el tamaño de tu hogar para calcular cuántos rollos de papel tapiz o cuánta área de piso necesitas.",
    tabWallpaper: "Papel Tapiz",
    tabFlooring: "Piso",
    areaLabel: "Tamaño del Hogar (pyeong, ~3.3m²)",
    areaPlaceholder: "ej. 20",
    wallpaperTypeLabel: "Tipo de Papel Tapiz",
    wallpaperSynthetic: "Papel tapiz sintético (~2.5 pyeong por rollo)",
    wallpaperSilk: "Papel tapiz de seda (~2 pyeong por rollo)",
    wallpaperResultLabel: "Papel Tapiz Necesario",
    wallpaperResultUnit: "rollos",
    flooringResultLabel: "Área de Piso Necesaria (incl. 10% de pérdida)",
    flooringResultUnit: "pyeong",
    lossNote: "La cantidad real necesaria puede variar según la altura de las paredes, número de ventanas/puertas y método de instalación.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la pestaña 'Papel Tapiz' o 'Piso'.",
      "Ingresa el tamaño de tu hogar.",
      "Para papel tapiz, selecciona el tipo (sintético/seda).",
      "Revisa el número calculado de rollos o área de piso necesaria.",
    ],
    faq: [
      { q: "¿Por qué el papel tapiz sintético y de seda necesitan cantidades diferentes?", a: "El papel tapiz de seda es más grueso y tiene más pérdida por combinación de patrones que el sintético, por lo que típicamente necesita más rollos para la misma área." },
      { q: "¿Por qué el piso agrega un 10% extra?", a: "El piso típicamente necesita un 10% extra debido a la pérdida de corte por formas de habitación, umbrales de puertas y tuberías — esta es una regla general estándar." },
    ],
    disclaimer: "Esta calculadora proporciona una estimación de referencia basada en promedios generales; la cantidad real necesaria puede variar según las condiciones del sitio.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};

export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  landArea: string;
  landAreaUnit: string;
  buildingArea: string;
  buildingAreaUnit: string;
  floorArea: string;
  floorAreaUnit: string;
  calculate: string;
  landAreaHelp: string;
  buildingAreaHelp: string;
  floorAreaHelp: string;
  result: string;
  far: string;
  farDesc: string;
  lotCoverage: string;
  lotCoverageDesc: string;
  limitations: string;
  whyFar: string;
  explanation: string;
  footer: string;
  presets: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "용적률/건폐율 계산기",
    subtitle: "대지면적과 건축면적, 연면적을 입력하면 용적률과 건폐율을 계산합니다.",
    landArea: "대지면적",
    landAreaUnit: "㎡",
    buildingArea: "건축면적 (풋프린트)",
    buildingAreaUnit: "㎡",
    floorArea: "연면적",
    floorAreaUnit: "㎡",
    calculate: "계산하기",
    landAreaHelp: "부지의 총면적. 1㎡ = 0.3025 평",
    buildingAreaHelp: "대지 위에 건축물이 차지하는 최대 면적. 층별 바닥면적의 합산",
    floorAreaHelp: "모든 층의 바닥면적을 합산한 총 면적.",
    result: "계산 결과",
    far: "용적률",
    farDesc: "대지 위에 지을 수 있는 총 연면적의 비율",
    lotCoverage: "건폐율",
    lotCoverageDesc: "대지 위에 건축물이 차지할 수 있는 비율",
    limitations: "계산 결과는 참고용이며, 실제 용적률/건폐율은 지자체별 조례에 따라 다를 수 있습니다.",
    whyFar: "왜 용적률/건폐율 계산기가 필요한가요?",
    explanation:
      "용적률(FAR, Floor Area Ratio)과 건폐율은 건물 건축 시 가장 중요한 지표입니다.\n\n용적률은 '대지 위에 얼마만큼의 연면적을 지을 수 있는지'를 나타내며, 건폐율은 '대지 위에 건축물이 차지할 수 있는 최대 면적'을 나타냅니다.\n\n예를 들어 대지 100㎡, 용적률 200%, 건폐율 60%인 경우:\n• 최대 건축면적: 100㎡ × 60% = 60㎡\n• 최대 연면적: 100㎡ × 200% = 200㎡\n• 이 경우 3층 건물(층별 60㎡) 또는 4층 건물은 용적률을 초과할 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    presets: "프리셋 (대지면적)",
    faq: [
      {
        q: "용적률과 건폐율의 차이점이 무엇인가요?",
        a: "용적률은 '세로'(층수/연면적) 제한이고, 건폐율은 '가로'(면적) 제한입니다. 용적률이 높을수록 더 큰 건물을 지을 수 있고, 건폐율이 높을수록 대지 위에 넓게 지을 수 있습니다.",
      },
      {
        q: "용적률/건폐율이 높다는 것의 의미는 무엇인가요?",
        a: "용적률이 높을수록 더 큰 건물을 지을 수 있어 임대 수익이 늘어날 수 있습니다. 건폐율이 높을수록 한 층에 넓은 공간을 확보할 수 있습니다. 다만 고밀도 개발 지역에서는 교통/주차 문제가 발생할 수 있습니다.",
      },
      {
        q: "건축 면적과 연면적의 차이는 무엇인가요?",
        a: "건축 면적은 한 층의 바닥면적이고, 연면적은 모든 층의 바닥면적을 합한 것입니다. 3층 건물의 경우 건축 면적이 50㎡이면 연면적은 약 150㎡가 됩니다.",
      },
    ],
  },
  en: {
    title: "FAR / Lot Coverage Calculator",
    subtitle: "Enter lot area and building area to calculate Floor Area Ratio (FAR) and Lot Coverage.",
    landArea: "Lot Area",
    landAreaUnit: "㎡",
    buildingArea: "Building Area (Footprint)",
    buildingAreaUnit: "㎡",
    floorArea: "Total Floor Area",
    floorAreaUnit: "㎡",
    calculate: "Calculate",
    landAreaHelp: "Total area of the plot. 1㎡ = 0.3025 pyeong (Korean unit)",
    buildingAreaHelp: "Maximum area covered by the building on the lot. Sum of floor areas per level",
    floorAreaHelp: "Total area of all floors combined.",
    result: "Calculation Result",
    far: "Floor Area Ratio (FAR)",
    farDesc: "Ratio of total buildable floor area to lot area",
    lotCoverage: "Lot Coverage Ratio",
    lotCoverageDesc: "Percentage of lot that can be covered by building footprint",
    limitations: "Results are estimates. Actual FAR/lot coverage may vary by municipal regulations.",
    whyFar: "Why do you need an FAR/Lot Coverage calculator?",
    explanation:
      "FAR (Floor Area Ratio) and Lot Coverage are key indicators in building construction.\n\nFAR indicates 'how much total floor area can be built on a lot', while Lot Coverage indicates 'maximum area that can be covered on the lot'.\n\nExample: Lot 100㎡, FAR 200%, Lot Coverage 60%:\n• Max building footprint: 100㎡ × 60% = 60㎡\n• Max floor area: 100㎡ × 200% = 200㎡\n• This allows a 3-story building (60㎡ per floor) or a 4-story building may exceed FAR.",
    footer: "100% processed in browser. No data is sent to the server.",
    presets: "Presets (lot area)",
    faq: [
      {
        q: "What is the difference between FAR and Lot Coverage?",
        a: "FAR is a vertical (floor/area) limit, while Lot Coverage is a horizontal (area) limit. Higher FAR means you can build a larger building; higher Lot Coverage means you can cover more of the lot on each floor.",
      },
      {
        q: "What does a higher FAR/Lot Coverage mean?",
        a: "Higher FAR allows larger buildings with potentially more rental income. Higher Lot Coverage allows wider single-floor spaces. However, in high-density areas, traffic/parking issues may arise.",
      },
      {
        q: "What is the difference between building area and floor area?",
        a: "Building area is the floor area of one floor, while total floor area is the sum of all floors. For a 3-story building with 50㎡ per floor, the total floor area is about 150㎡.",
      },
    ],
  },
  ja: {
    title: "容積率/建蔽率計算機",
    subtitle: "敷地面積と建築面積、延床面積を入力すると、容積率と建蔽率を計算します。",
    landArea: "敷地面積",
    landAreaUnit: "㎡",
    buildingArea: "建築面積（フットプリント）",
    buildingAreaUnit: "㎡",
    floorArea: "延床面積",
    floorAreaUnit: "㎡",
    calculate: "計算",
    landAreaHelp: "敷地の総面積。1㎡ = 0.3025坪",
    buildingAreaHelp: "敷地上の建築物が占める最大面積。各階の床面積の合計",
    floorAreaHelp: "すべての階の床面積を合計した総面積。",
    result: "計算結果",
    far: "容積率",
    farDesc: "敷地上に建設できる総延床面積の比率",
    lotCoverage: "建蔽率",
    lotCoverageDesc: "敷地上に建築物が占めることができる比率",
    limitations: "計算結果は参考用であり、実際の容積率・建蔽率は自治体の条例により異なる場合があります。",
    whyFar: "なぜ容積率/建蔽率計算機が必要ですか？",
    explanation:
      "容積率と建蔽率は、建築計画において最も重要な指標です。\n\n容積率は「敷地の上にどの程度の延床面積を建築できるか」を示し、建蔽率は「敷地上に建築物が占めることができる最大の面積」を示します。\n\n例：敷地100㎡、容積率200%、建蔽率60%の場合：\n• 最大建築面積：100㎡ × 60% = 60㎡\n• 最大延床面積：100㎡ × 200% = 200㎡\n• この場合、3階建（階毎60㎡）または4階建は容積率を超える可能性があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    presets: "プリセット（敷地面積）",
    faq: [
      {
        q: "容積率と建蔽率の違いは何ですか？",
        a: "容積率は「縦」（階数/延床面積）の制限で、建蔽率は「横」（面積）の制限です。容積率が高いほど大きな建築が建設でき、建蔽率が高いほど敷地上に広く建築できます。",
      },
      {
        q: "容積率/建蔽率が高いということはどういう意味ですか？",
        a: "容積率が高いほど大きな建築を建設でき、賃貸収益が増える可能性があります。建蔽率が高いほど1階に広いスペースを確保できます。ただし、高密度開発地域では交通/駐車問題が発生する可能性があります。",
      },
      {
        q: "建築面積と延床面積の違いは何ですか？",
        a: "建築面積は1階の床面積で、延床面積はすべての階の床面積を合計したものです。3階建の場合、建築面積が50㎡であれば延床面積は約150㎡になります。",
      },
    ],
  },
  es: {
    title: "Calculadora de FAR/Cobertura de Lote",
    subtitle: "Ingresa el área del terreno y el área de construcción para calcular el FAR y la Cobertura.",
    landArea: "Área del Terreno",
    landAreaUnit: "m²",
    buildingArea: "Área de Construcción (Huella)",
    buildingAreaUnit: "m²",
    floorArea: "Área Total de Piso",
    floorAreaUnit: "m²",
    calculate: "Calcular",
    landAreaHelp: "Área total del lote. 1m² = 0.3025 pyeong (unidad coreana)",
    buildingAreaHelp: "Área máxima cubierta por la construcción en el terreno. Suma de áreas por nivel",
    floorAreaHelp: "Área total de todos los pisos combinados.",
    result: "Resultado del Cálculo",
    far: "Relación de Área de Piso (FAR)",
    farDesc: "Proporción del área total construible respecto al área del terreno",
    lotCoverage: "Cobertura del Lote",
    lotCoverageDesc: "Porcentaje del terreno que puede cubrirse con la huella de construcción",
    limitations: "Los resultados son estimaciones. El FAR/cobertura real puede variar según regulaciones municipales.",
    whyFar: "¿Por qué necesitas una calculadora de FAR/Cobertura?",
    explanation:
      "FAR (Relación de Área de Piso) y Cobertura de Lote son indicadores clave en la construcción.\n\nFAR indica 'cuánto área total de piso se puede construir en un terreno', mientras que Cobertura indica 'el área máxima que puede cubrirse en el terreno'.\n\nEjemplo: Lote 100m², FAR 200%, Cobertura 60%:\n• Área máxima de construcción: 100m² × 60% = 60m²\n• Área total de piso: 100m² × 200% = 200m²\n• Esto permite un edificio de 3 pisos (60m² por piso) o un edificio de 4 pisos podría exceder el FAR.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    presets: "Preajustes (área del terreno)",
    faq: [
      {
        q: "¿Cuál es la diferencia entre FAR y Cobertura de Lote?",
        a: "FAR es un límite vertical (pisos/área), mientras que Cobertura es un límite horizontal (área). Un FAR más alto permite construir un edificio más grande; una Cobertura más alta permite cubrir más del terreno en cada piso.",
      },
      {
        q: "¿Qué significa un FAR/Cobertura más alto?",
        a: "Un FAR más alto permite edificios más grandes con potencialmente más ingresos de alquiler. Una Cobertura más alta permite espacios más amplios en un solo piso. Sin embargo, en áreas de alta densidad pueden surgir problemas de tráfico/estacionamiento.",
      },
      {
        q: "¿Cuál es la diferencia entre área de construcción y área de piso?",
        a: "El área de construcción es el área de piso de un nivel, mientras que el área total de piso es la suma de todos los niveles. Para un edificio de 3 pisos con 50m² por nivel, el área total de piso es de unos 150m².",
      },
    ],
  },
};

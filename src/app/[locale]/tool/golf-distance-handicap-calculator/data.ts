export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface ClubBaseline {
  key: string;
  label: string;
  baselineYards: number;
}

export interface I18nData {
  title: string;
  subtitle: string;
  tabDistance: string;
  tabHandicap: string;
  headSpeedLabel: string;
  headSpeedUnit: string;
  clubCol: string;
  distanceCol: string;
  clubs: ClubBaseline[];
  scoreLabel: string;
  courseRatingLabel: string;
  slopeRatingLabel: string;
  differentialLabel: string;
  handicapEstimateLabel: string;
  handicapNote: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "골프 비거리·핸디캡 계산기",
    subtitle: "헤드스피드로 클럽별 예상 비거리를 확인하고, 스코어로 간이 핸디캡을 계산해보세요.",
    tabDistance: "비거리 추정",
    tabHandicap: "핸디캡 간이 계산",
    headSpeedLabel: "드라이버 헤드스피드",
    headSpeedUnit: "mph",
    clubCol: "클럽",
    distanceCol: "예상 거리 (yd)",
    clubs: [
      { key: "driver", label: "드라이버", baselineYards: 250 },
      { key: "3wood", label: "3번 우드", baselineYards: 220 },
      { key: "5iron", label: "5번 아이언", baselineYards: 170 },
      { key: "7iron", label: "7번 아이언", baselineYards: 150 },
      { key: "9iron", label: "9번 아이언", baselineYards: 125 },
      { key: "pw", label: "피칭웨지(PW)", baselineYards: 110 },
    ],
    scoreLabel: "라운드 스코어 (타수)",
    courseRatingLabel: "코스 레이팅 (Course Rating)",
    slopeRatingLabel: "슬로프 레이팅 (Slope Rating)",
    differentialLabel: "스코어 차이값 (Differential)",
    handicapEstimateLabel: "간이 핸디캡 추정치",
    handicapNote: "공식 핸디캡 인덱스는 여러 라운드의 차이값 중 상위 일부를 평균해 계산합니다. 이 결과는 1라운드만을 기준으로 한 간이 추정치입니다.",
    howTitle: "사용 방법",
    howSteps: [
      "'비거리 추정' 또는 '핸디캡 간이 계산' 탭을 선택합니다.",
      "비거리 추정의 경우 드라이버 헤드스피드를 입력합니다.",
      "핸디캡 계산의 경우 스코어, 코스 레이팅, 슬로프 레이팅을 입력합니다.",
      "계산된 클럽별 예상 거리 또는 간이 핸디캡 추정치를 확인합니다.",
    ],
    faq: [
      { q: "헤드스피드만으로 비거리를 정확히 알 수 있나요?", a: "이 계산기는 평균적인 헤드스피드-비거리 관계를 기준으로 한 추정치입니다. 실제 비거리는 타구 각도, 임팩트 지점, 장비, 날씨 등 여러 요인에 따라 달라집니다." },
      { q: "공식 핸디캡과 이 간이 계산의 차이는 무엇인가요?", a: "공식 핸디캡 인덱스(USGA/WHS 기준)는 최근 여러 라운드의 스코어 차이값 중 가장 좋은 일부를 평균해 계산합니다. 이 계산기는 한 라운드만으로 대략적인 수준을 가늠하는 간이 버전입니다." },
    ],
    disclaimer: "이 계산기는 일반적인 공식을 적용한 참고용 추정치이며, 공식 핸디캡 인덱스나 실제 비거리와 차이가 있을 수 있습니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Golf Distance & Handicap Calculator",
    subtitle: "Estimate club-by-club distance from your swing speed, and calculate a simplified handicap from your score.",
    tabDistance: "Distance Estimate",
    tabHandicap: "Simplified Handicap",
    headSpeedLabel: "Driver Clubhead Speed",
    headSpeedUnit: "mph",
    clubCol: "Club",
    distanceCol: "Estimated Distance (yd)",
    clubs: [
      { key: "driver", label: "Driver", baselineYards: 250 },
      { key: "3wood", label: "3-Wood", baselineYards: 220 },
      { key: "5iron", label: "5-Iron", baselineYards: 170 },
      { key: "7iron", label: "7-Iron", baselineYards: 150 },
      { key: "9iron", label: "9-Iron", baselineYards: 125 },
      { key: "pw", label: "Pitching Wedge (PW)", baselineYards: 110 },
    ],
    scoreLabel: "Round Score (strokes)",
    courseRatingLabel: "Course Rating",
    slopeRatingLabel: "Slope Rating",
    differentialLabel: "Score Differential",
    handicapEstimateLabel: "Simplified Handicap Estimate",
    handicapNote: "An official handicap index averages the best subset of differentials from multiple recent rounds. This result is a simplified estimate based on a single round only.",
    howTitle: "How to Use",
    howSteps: [
      "Choose the 'Distance Estimate' or 'Simplified Handicap' tab.",
      "For distance, enter your driver clubhead speed.",
      "For handicap, enter your score, course rating, and slope rating.",
      "Check the estimated distance per club or your simplified handicap estimate.",
    ],
    faq: [
      { q: "Can clubhead speed alone accurately predict distance?", a: "This calculator estimates based on average clubhead speed-to-distance relationships. Actual distance depends on launch angle, impact point, equipment, weather, and more." },
      { q: "How is this different from an official handicap?", a: "An official handicap index (USGA/WHS) averages the best subset of score differentials from several recent rounds. This calculator is a simplified version based on a single round only." },
    ],
    disclaimer: "This calculator applies general formulas as a reference estimate; results may differ from an official handicap index or actual distances.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "ゴルフ比距離・ハンディキャップ計算機",
    subtitle: "ヘッドスピードからクラブ別の予想飛距離を確認し、スコアから簡易ハンディキャップを計算できます。",
    tabDistance: "飛距離推定",
    tabHandicap: "簡易ハンディキャップ計算",
    headSpeedLabel: "ドライバーヘッドスピード",
    headSpeedUnit: "mph",
    clubCol: "クラブ",
    distanceCol: "予想距離 (yd)",
    clubs: [
      { key: "driver", label: "ドライバー", baselineYards: 250 },
      { key: "3wood", label: "3番ウッド", baselineYards: 220 },
      { key: "5iron", label: "5番アイアン", baselineYards: 170 },
      { key: "7iron", label: "7番アイアン", baselineYards: 150 },
      { key: "9iron", label: "9番アイアン", baselineYards: 125 },
      { key: "pw", label: "ピッチングウェッジ(PW)", baselineYards: 110 },
    ],
    scoreLabel: "ラウンドスコア（打数）",
    courseRatingLabel: "コースレーティング",
    slopeRatingLabel: "スロープレーティング",
    differentialLabel: "スコア差異値",
    handicapEstimateLabel: "簡易ハンディキャップ推定値",
    handicapNote: "公式ハンディキャップインデックスは複数ラウンドの差異値の上位一部を平均して計算します。この結果は1ラウンドのみを基準とした簡易推定値です。",
    howTitle: "使用方法",
    howSteps: [
      "「飛距離推定」または「簡易ハンディキャップ計算」タブを選びます。",
      "飛距離推定の場合、ドライバーヘッドスピードを入力します。",
      "ハンディキャップ計算の場合、スコア、コースレーティング、スロープレーティングを入力します。",
      "計算されたクラブ別予想距離または簡易ハンディキャップ推定値を確認します。",
    ],
    faq: [
      { q: "ヘッドスピードだけで飛距離を正確に予測できますか？", a: "この計算機は平均的なヘッドスピードと飛距離の関係を基準にした推定値です。実際の飛距離は打球角度、インパクト地点、ギア、天候など様々な要因によって変わります。" },
      { q: "公式ハンディキャップとこの簡易計算の違いは何ですか？", a: "公式ハンディキャップインデックス（USGA/WHS基準）は最近の複数ラウンドのスコア差異値のうち最も良い一部を平均して計算します。この計算機は1ラウンドのみでおおよそのレベルを把握する簡易版です。" },
    ],
    disclaimer: "この計算機は一般的な公式を適用した参考用の推定値であり、公式ハンディキャップインデックスや実際の飛距離と異なる場合があります。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Calculadora de Distancia y Hándicap de Golf",
    subtitle: "Estima la distancia club por club a partir de tu velocidad de swing, y calcula un hándicap simplificado desde tu puntaje.",
    tabDistance: "Estimación de Distancia",
    tabHandicap: "Hándicap Simplificado",
    headSpeedLabel: "Velocidad de Cabeza del Driver",
    headSpeedUnit: "mph",
    clubCol: "Palo",
    distanceCol: "Distancia Estimada (yd)",
    clubs: [
      { key: "driver", label: "Driver", baselineYards: 250 },
      { key: "3wood", label: "Madera 3", baselineYards: 220 },
      { key: "5iron", label: "Hierro 5", baselineYards: 170 },
      { key: "7iron", label: "Hierro 7", baselineYards: 150 },
      { key: "9iron", label: "Hierro 9", baselineYards: 125 },
      { key: "pw", label: "Pitching Wedge (PW)", baselineYards: 110 },
    ],
    scoreLabel: "Puntaje de la Ronda (golpes)",
    courseRatingLabel: "Course Rating",
    slopeRatingLabel: "Slope Rating",
    differentialLabel: "Diferencial de Puntaje",
    handicapEstimateLabel: "Estimación de Hándicap Simplificado",
    handicapNote: "Un índice de hándicap oficial promedia el mejor subconjunto de diferenciales de varias rondas recientes. Este resultado es una estimación simplificada basada solo en una ronda.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la pestaña 'Estimación de Distancia' o 'Hándicap Simplificado'.",
      "Para distancia, ingresa la velocidad de cabeza de tu driver.",
      "Para hándicap, ingresa tu puntaje, course rating y slope rating.",
      "Revisa la distancia estimada por palo o tu estimación de hándicap simplificado.",
    ],
    faq: [
      { q: "¿La velocidad de cabeza sola puede predecir la distancia con precisión?", a: "Esta calculadora estima según relaciones promedio entre velocidad de cabeza y distancia. La distancia real depende del ángulo de lanzamiento, punto de impacto, equipo, clima y más." },
      { q: "¿En qué se diferencia esto de un hándicap oficial?", a: "Un índice de hándicap oficial (USGA/WHS) promedia el mejor subconjunto de diferenciales de puntaje de varias rondas recientes. Esta calculadora es una versión simplificada basada solo en una ronda." },
    ],
    disclaimer: "Esta calculadora aplica fórmulas generales como estimación de referencia; los resultados pueden diferir de un índice de hándicap oficial o distancias reales.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};

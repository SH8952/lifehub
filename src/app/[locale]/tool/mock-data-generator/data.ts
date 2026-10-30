export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  countLabel: string;
  formatLabel: string;
  fieldsLabel: string;
  fieldId: string;
  fieldName: string;
  fieldEmail: string;
  fieldPhone: string;
  fieldCity: string;
  generateBtn: string;
  copyBtn: string;
  copied: string;
  resultLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "목(Mock) 데이터 생성기",
    subtitle: "이름, 이메일, 전화번호 등 테스트용 가짜 데이터를 JSON/CSV로 생성합니다.",
    countLabel: "생성 개수",
    formatLabel: "출력 형식",
    fieldsLabel: "포함할 필드",
    fieldId: "ID",
    fieldName: "이름",
    fieldEmail: "이메일",
    fieldPhone: "전화번호",
    fieldCity: "도시",
    generateBtn: "생성하기",
    copyBtn: "복사",
    copied: "복사됨!",
    resultLabel: "생성 결과",
    howTitle: "사용 방법",
    howSteps: [
      "생성할 레코드 개수와 출력 형식(JSON/CSV)을 선택합니다.",
      "포함할 필드를 체크박스로 선택합니다.",
      "'생성하기'를 눌러 더미 데이터를 만들고 복사해 테스트에 활용하세요.",
    ],
    faq: [
      { q: "생성된 데이터는 실제 개인정보인가요?", a: "아니요. 이름, 이메일, 전화번호 등은 모두 무작위로 조합된 가상의 값으로, 실제 존재하는 사람의 정보가 아닙니다." },
      { q: "몇 개까지 생성할 수 있나요?", a: "한 번에 최대 100개의 레코드까지 생성할 수 있도록 제한되어 있습니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Mock Data Generator",
    subtitle: "Generate fake test data — names, emails, phone numbers — as JSON or CSV.",
    countLabel: "Record Count",
    formatLabel: "Output Format",
    fieldsLabel: "Fields to Include",
    fieldId: "ID",
    fieldName: "Name",
    fieldEmail: "Email",
    fieldPhone: "Phone",
    fieldCity: "City",
    generateBtn: "Generate",
    copyBtn: "Copy",
    copied: "Copied!",
    resultLabel: "Result",
    howTitle: "How to Use",
    howSteps: [
      "Choose the record count and output format (JSON/CSV).",
      "Check the fields you want to include.",
      "Click 'Generate' to create dummy data and copy it for testing.",
    ],
    faq: [
      { q: "Is the generated data real personal information?", a: "No. Names, emails, phone numbers, etc. are all randomly combined fictional values, not real people's information." },
      { q: "How many records can I generate?", a: "You can generate up to 100 records at a time." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "モックデータ生成ツール",
    subtitle: "名前、メール、電話番号などテスト用の偽データをJSON/CSVで生成します。",
    countLabel: "生成件数",
    formatLabel: "出力形式",
    fieldsLabel: "含めるフィールド",
    fieldId: "ID",
    fieldName: "名前",
    fieldEmail: "メール",
    fieldPhone: "電話番号",
    fieldCity: "都市",
    generateBtn: "生成する",
    copyBtn: "コピー",
    copied: "コピーしました！",
    resultLabel: "生成結果",
    howTitle: "使用方法",
    howSteps: [
      "生成するレコード数と出力形式（JSON/CSV）を選択します。",
      "含めたいフィールドをチェックボックスで選択します。",
      "「生成する」を押してダミーデータを作成し、コピーしてテストに活用しましょう。",
    ],
    faq: [
      { q: "生成されたデータは実際の個人情報ですか？", a: "いいえ。名前、メール、電話番号などはすべてランダムに組み合わされた仮想の値で、実在する人の情報ではありません。" },
      { q: "最大何件まで生成できますか？", a: "一度に最大100件のレコードまで生成できるよう制限されています。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Datos Mock",
    subtitle: "Genera datos de prueba falsos (nombres, emails, teléfonos) en JSON o CSV.",
    countLabel: "Cantidad de Registros",
    formatLabel: "Formato de Salida",
    fieldsLabel: "Campos a Incluir",
    fieldId: "ID",
    fieldName: "Nombre",
    fieldEmail: "Correo",
    fieldPhone: "Teléfono",
    fieldCity: "Ciudad",
    generateBtn: "Generar",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    resultLabel: "Resultado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la cantidad de registros y el formato (JSON/CSV).",
      "Marca los campos que deseas incluir.",
      "Haz clic en 'Generar' para crear datos de prueba y copiarlos.",
    ],
    faq: [
      { q: "¿Son los datos generados información personal real?", a: "No. Nombres, correos, teléfonos, etc. son todos valores ficticios combinados aleatoriamente, no información de personas reales." },
      { q: "¿Cuántos registros puedo generar?", a: "Puedes generar hasta 100 registros a la vez." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

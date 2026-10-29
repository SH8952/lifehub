export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  contentType: string;
  typeUrl: string;
  typeText: string;
  typeWifi: string;
  typeVcard: string;
  typePhone: string;
  typeSms: string;
  urlLabel: string;
  textLabel: string;
  wifiSsid: string;
  wifiPassword: string;
  wifiEncryption: string;
  encWpa: string;
  encWep: string;
  encNone: string;
  vcardName: string;
  vcardPhone: string;
  vcardEmail: string;
  phoneLabel: string;
  smsPhone: string;
  smsMessage: string;
  size: string;
  foregroundColor: string;
  backgroundColor: string;
  errorCorrection: string;
  generate: string;
  result: string;
  download: string;
  whyQr: string;
  qrExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "QR코드 생성기",
    subtitle: "URL, 텍스트, Wi-Fi, 연락처 등을 QR코드로 만듭니다",
    inputs: "정보 입력",
    contentType: "콘텐츠 타입",
    typeUrl: "URL",
    typeText: "텍스트",
    typeWifi: "Wi-Fi",
    typeVcard: "연락처 (vCard)",
    typePhone: "전화번호",
    typeSms: "SMS",
    urlLabel: "URL 주소",
    textLabel: "텍스트 내용",
    wifiSsid: "Wi-Fi 이름 (SSID)",
    wifiPassword: "비밀번호",
    wifiEncryption: "암호화 방식",
    encWpa: "WPA/WPA2",
    encWep: "WEP",
    encNone: "없음",
    vcardName: "이름",
    vcardPhone: "전화번호",
    vcardEmail: "이메일",
    phoneLabel: "전화번호",
    smsPhone: "전화번호",
    smsMessage: "메시지 내용",
    size: "크기",
    foregroundColor: "전경 색상",
    backgroundColor: "배경 색상",
    errorCorrection: "오류 정정 수준",
    generate: "QR코드 생성",
    result: "생성된 QR코드",
    download: "PNG 다운로드",
    whyQr: "QR코드는 어떻게 만들어지나요?",
    qrExplanation: "QR코드는 입력한 정보를 특정 형식의 텍스트로 변환한 뒤, 이를 격자 모양의 패턴으로 인코딩합니다. 예를 들어 Wi-Fi 정보는 'WIFI:T:암호화방식;S:이름;P:비밀번호;;' 형식으로, 연락처는 표준 vCard 형식으로 인코딩됩니다.\n\n오류 정정 수준(L/M/Q/H)이 높을수록 QR코드 일부가 손상되거나 가려져도 인식할 수 있는 능력이 커지지만, 대신 QR코드의 패턴이 더 복잡해집니다.",
    disclaimer: "생성된 QR코드는 브라우저에서만 처리되며 서버로 전송되지 않습니다. Wi-Fi 비밀번호 등 민감한 정보가 담긴 QR코드는 신뢰할 수 있는 사람에게만 공유하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "QR코드 생성은 브라우저에서 처리됩니다.",
    faq: [
      { q: "오류 정정 수준은 어떤 것을 선택해야 하나요?", a: "일반적인 용도라면 M(중간) 수준이 적합합니다. QR코드가 인쇄물에 들어가거나 손상될 가능성이 있다면 Q 또는 H 수준을 선택하는 것이 좋습니다." },
      { q: "Wi-Fi QR코드를 스캔하면 자동으로 연결되나요?", a: "대부분의 스마트폰 카메라 앱에서 Wi-Fi QR코드를 스캔하면 네트워크 이름과 비밀번호가 자동으로 입력되어 연결을 도와줍니다. 기기나 운영체제에 따라 동작이 다를 수 있습니다." },
      { q: "생성한 QR코드를 상업적으로 사용할 수 있나요?", a: "QR코드 자체는 공개된 표준 기술이므로 생성된 이미지를 자유롭게 사용할 수 있습니다. 다만 QR코드에 담긴 내용(URL, 연락처 등)의 정확성은 직접 확인해 주세요." },
    ],
  },
  en: {
    title: "QR Code Generator",
    subtitle: "Create QR codes for URLs, text, Wi-Fi, contacts, and more",
    inputs: "Enter Information",
    contentType: "Content Type",
    typeUrl: "URL",
    typeText: "Text",
    typeWifi: "Wi-Fi",
    typeVcard: "Contact (vCard)",
    typePhone: "Phone Number",
    typeSms: "SMS",
    urlLabel: "URL Address",
    textLabel: "Text Content",
    wifiSsid: "Wi-Fi Name (SSID)",
    wifiPassword: "Password",
    wifiEncryption: "Encryption Type",
    encWpa: "WPA/WPA2",
    encWep: "WEP",
    encNone: "None",
    vcardName: "Name",
    vcardPhone: "Phone",
    vcardEmail: "Email",
    phoneLabel: "Phone Number",
    smsPhone: "Phone Number",
    smsMessage: "Message Content",
    size: "Size",
    foregroundColor: "Foreground Color",
    backgroundColor: "Background Color",
    errorCorrection: "Error Correction Level",
    generate: "Generate QR Code",
    result: "Generated QR Code",
    download: "Download PNG",
    whyQr: "How are QR codes created?",
    qrExplanation: "A QR code converts your input into a specifically formatted text string, then encodes it as a grid pattern. For example, Wi-Fi info is encoded as 'WIFI:T:encryption;S:name;P:password;;', and contacts are encoded in the standard vCard format.\n\nA higher error correction level (L/M/Q/H) allows the QR code to remain readable even if part of it is damaged or obscured, but makes the pattern more complex.",
    disclaimer: "The generated QR code is processed entirely in your browser and never sent to a server. Share QR codes containing sensitive information (like a Wi-Fi password) only with people you trust.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "QR code generation is processed in your browser.",
    faq: [
      { q: "Which error correction level should I choose?", a: "For general use, Medium (M) is suitable. If the QR code will be printed or might get damaged, Q or H level is recommended." },
      { q: "Does scanning a Wi-Fi QR code connect automatically?", a: "Most smartphone camera apps will auto-fill the network name and password when scanning a Wi-Fi QR code, helping you connect. Behavior may vary by device and OS." },
      { q: "Can I use the generated QR code commercially?", a: "QR code technology itself is an open standard, so you can freely use the generated image. However, please verify the accuracy of the content (URL, contact info, etc.) embedded in it yourself." },
    ],
  },
  ja: {
    title: "QRコード生成機",
    subtitle: "URL、テキスト、Wi-Fi、連絡先などをQRコードにします",
    inputs: "情報入力",
    contentType: "コンテンツタイプ",
    typeUrl: "URL",
    typeText: "テキスト",
    typeWifi: "Wi-Fi",
    typeVcard: "連絡先（vCard）",
    typePhone: "電話番号",
    typeSms: "SMS",
    urlLabel: "URLアドレス",
    textLabel: "テキスト内容",
    wifiSsid: "Wi-Fi名（SSID）",
    wifiPassword: "パスワード",
    wifiEncryption: "暗号化方式",
    encWpa: "WPA/WPA2",
    encWep: "WEP",
    encNone: "なし",
    vcardName: "名前",
    vcardPhone: "電話番号",
    vcardEmail: "メール",
    phoneLabel: "電話番号",
    smsPhone: "電話番号",
    smsMessage: "メッセージ内容",
    size: "サイズ",
    foregroundColor: "前景色",
    backgroundColor: "背景色",
    errorCorrection: "誤り訂正レベル",
    generate: "QRコード生成",
    result: "生成されたQRコード",
    download: "PNGダウンロード",
    whyQr: "QRコードはどのように作られますか？",
    qrExplanation: "QRコードは入力した情報を特定の形式のテキストに変換した後、格子状のパターンにエンコードします。例えばWi-Fi情報は「WIFI:T:暗号化方式;S:名前;P:パスワード;;」形式で、連絡先は標準vCard形式でエンコードされます。\n\n誤り訂正レベル（L/M/Q/H）が高いほど、QRコードの一部が損傷したり隠れたりしても読み取れる能力が高まりますが、パターンがより複雑になります。",
    disclaimer: "生成されたQRコードはブラウザ内でのみ処理され、サーバーに送信されません。Wi-Fiパスワードなどの機密情報を含むQRコードは、信頼できる人にのみ共有してください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "QRコード生成はブラウザで処理されます。",
    faq: [
      { q: "誤り訂正レベルはどれを選ぶべきですか？", a: "一般的な用途ならM（中）レベルが適しています。QRコードが印刷物に入るか損傷の可能性がある場合はQまたはHレベルを選ぶことをお勧めします。" },
      { q: "Wi-Fi QRコードをスキャンすると自動的に接続されますか？", a: "ほとんどのスマートフォンのカメラアプリでWi-Fi QRコードをスキャンすると、ネットワーク名とパスワードが自動入力され接続を助けます。機器やOSにより動作が異なる場合があります。" },
      { q: "生成したQRコードを商業的に使用できますか？", a: "QRコード自体は公開された標準技術なので、生成された画像を自由に使用できます。ただし、QRコードに含まれる内容（URL、連絡先など）の正確性は自分で確認してください。" },
    ],
  },
  es: {
    title: "Generador de Códigos QR",
    subtitle: "Crea códigos QR para URLs, texto, Wi-Fi, contactos y más",
    inputs: "Ingresa la información",
    contentType: "Tipo de Contenido",
    typeUrl: "URL",
    typeText: "Texto",
    typeWifi: "Wi-Fi",
    typeVcard: "Contacto (vCard)",
    typePhone: "Número de Teléfono",
    typeSms: "SMS",
    urlLabel: "Dirección URL",
    textLabel: "Contenido de Texto",
    wifiSsid: "Nombre de Wi-Fi (SSID)",
    wifiPassword: "Contraseña",
    wifiEncryption: "Tipo de Encriptación",
    encWpa: "WPA/WPA2",
    encWep: "WEP",
    encNone: "Ninguna",
    vcardName: "Nombre",
    vcardPhone: "Teléfono",
    vcardEmail: "Correo",
    phoneLabel: "Número de Teléfono",
    smsPhone: "Número de Teléfono",
    smsMessage: "Contenido del Mensaje",
    size: "Tamaño",
    foregroundColor: "Color de Primer Plano",
    backgroundColor: "Color de Fondo",
    errorCorrection: "Nivel de Corrección de Errores",
    generate: "Generar Código QR",
    result: "Código QR Generado",
    download: "Descargar PNG",
    whyQr: "¿Cómo se crean los códigos QR?",
    qrExplanation: "Un código QR convierte tu entrada en una cadena de texto con un formato específico y luego la codifica como un patrón de cuadrícula. Por ejemplo, la información de Wi-Fi se codifica como 'WIFI:T:encriptación;S:nombre;P:contraseña;;', y los contactos se codifican en el formato estándar vCard.\n\nUn nivel de corrección de errores más alto (L/M/Q/H) permite que el código QR siga siendo legible incluso si parte de él está dañado u oculto, pero hace que el patrón sea más complejo.",
    disclaimer: "El código QR generado se procesa completamente en tu navegador y nunca se envía a un servidor. Comparte códigos QR con información sensible (como una contraseña de Wi-Fi) solo con personas de confianza.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "La generación del código QR se procesa en tu navegador.",
    faq: [
      { q: "¿Qué nivel de corrección de errores debo elegir?", a: "Para uso general, el nivel Medio (M) es adecuado. Si el código QR se imprimirá o podría dañarse, se recomienda el nivel Q o H." },
      { q: "¿Escanear un código QR de Wi-Fi conecta automáticamente?", a: "La mayoría de las apps de cámara de smartphones completan automáticamente el nombre de red y la contraseña al escanear un código QR de Wi-Fi, ayudando a conectar. El comportamiento puede variar según el dispositivo y el sistema operativo." },
      { q: "¿Puedo usar el código QR generado comercialmente?", a: "La tecnología de código QR en sí es un estándar abierto, por lo que puedes usar libremente la imagen generada. Sin embargo, verifica tú mismo la exactitud del contenido (URL, información de contacto, etc.) incluido en él." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}

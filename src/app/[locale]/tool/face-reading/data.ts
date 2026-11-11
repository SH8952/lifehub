// 관상 도구 — 화면 문구(4개 언어). 부위별 해석 문구는 readings.ts 에 있다.
export type { Locale } from "./readings";
import type { Locale } from "./readings";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  guideTitle: string;
  guide: string[];
  confirm: string;
  needConfirm: string;
  uploadBtn: string;
  cameraBtn: string;
  privacyNote: string;
  loadingModel: string;
  analyzing: string;
  cameraStarting: string;
  cameraHint: string;
  frontalOk: string;
  capture: string;
  cancel: string;
  retry: string;
  issues: {
    noFace: string;
    multiple: string;
    cut: string;
    small: string;
    yaw: string;
    pitch: string;
    roll: string;
  };
  errors: {
    cameraDenied: string;
    cameraUnsupported: string;
    cameraBusy: string;
    loadFail: string;
    imageFail: string;
  };
  resultTitle: string;
  photoNote: string;
  zonesTitle: string;
  zoneNames: [string, string, string];
  fortune: { general: string; wealth: string; love: string; career: string; people: string };
  part: {
    shape: string;
    zone: string;
    nose: string;
    mouth: string;
    tilt: string;
    corner: string;
    brow: string;
    eyeSize: string;
    spacing: string;
  };
  disclaimer: string;
  whatIsTitle: string;
  whatIs: string;
  howTitle: string;
  how: string;
  faq: FAQ[];
  footer: string;
}

export const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "나의 관상 보기",
    subtitle: "정면 얼굴 사진으로 얼굴형·눈·코·입의 특징을 살펴보는 관상 풀이 (사진은 내 기기 안에서만 분석됩니다)",
    guideTitle: "분석 전 꼭 확인해 주세요",
    guide: [
      "안경을 벗어 주세요. 안경테와 렌즈가 눈과 눈썹 모양을 가립니다.",
      "이마가 보이도록 머리카락을 걷어 주세요. 앞머리가 이마를 가리면 정확도가 떨어집니다.",
      "반드시 정면 사진 또는 정면 촬영이어야 합니다. 얼굴이 좌·우로 돌아갔거나, 위에서 아래로 내려다보거나 아래에서 위로 올려다보는 각도는 분석할 수 없습니다.",
      "얼굴 전체가 밝고 선명하게 보이게 하고, 한 사람만 나오게 해 주세요. 무표정에 가까운 자연스러운 표정이 좋습니다.",
    ],
    confirm: "위 안내를 확인했고, 조건에 맞는 사진입니다",
    needConfirm: "먼저 위 확인란에 체크해 주세요.",
    uploadBtn: "사진 올려서 보기",
    cameraBtn: "카메라로 촬영해서 보기",
    privacyNote: "얼굴 사진은 이 기기의 브라우저 안에서만 분석되며, 서버로 전송되거나 저장되지 않습니다.",
    loadingModel: "얼굴 인식을 준비하는 중입니다. 처음에는 몇 초 걸릴 수 있어요.",
    analyzing: "얼굴을 분석하는 중입니다.",
    cameraStarting: "카메라를 켜는 중입니다.",
    cameraHint: "얼굴을 화면 가운데에 맞추고 정면을 바라봐 주세요.",
    frontalOk: "정면입니다! 그대로 촬영 버튼을 눌러 주세요.",
    capture: "촬영하고 분석하기",
    cancel: "취소",
    retry: "다시 하기",
    issues: {
      noFace: "얼굴을 찾지 못했습니다. 정면을 바라보는 밝은 사진으로 다시 시도해 주세요.",
      multiple: "여러 명의 얼굴이 보입니다. 한 사람만 나오는 사진으로 시도해 주세요.",
      cut: "얼굴 일부가 화면 밖으로 잘렸습니다. 얼굴 전체가 보이게 해 주세요.",
      small: "얼굴이 너무 작게 보입니다. 더 가까이에서 얼굴이 크게 나오게 해 주세요.",
      yaw: "얼굴이 좌우로 돌아가 있습니다. 정면을 바라보는 사진이 필요합니다.",
      pitch: "얼굴이 위 또는 아래를 향하고 있습니다. 턱을 당기거나 들지 말고 정면을 바라봐 주세요.",
      roll: "고개가 한쪽으로 기울어져 있습니다. 머리를 똑바로 세워 주세요.",
    },
    errors: {
      cameraDenied: "카메라 권한이 허용되지 않았습니다. 브라우저 주소창의 권한 설정에서 카메라를 허용하거나, 「사진 올려서 보기」를 이용해 주세요.",
      cameraUnsupported: "이 브라우저에서는 카메라를 사용할 수 없습니다. 「사진 올려서 보기」를 이용해 주세요.",
      cameraBusy: "카메라를 열 수 없습니다. 다른 앱이 카메라를 사용 중인지 확인해 주세요.",
      loadFail: "얼굴 인식 기능을 불러오지 못했습니다. 네트워크 상태를 확인하고 다시 시도해 주세요.",
      imageFail: "사진을 읽을 수 없습니다. 다른 사진으로 시도해 주세요.",
    },
    resultTitle: "나의 관상 풀이",
    photoNote: "분석에 사용한 사진 (이 기기에서만 표시됩니다)",
    zonesTitle: "삼정(三停) 균형",
    zoneNames: ["상정 · 초년", "중정 · 중년", "하정 · 말년"],
    fortune: { general: "총운 · 첫인상", wealth: "재물운", love: "애정운", career: "직업운", people: "대인운" },
    part: {
      shape: "얼굴형",
      zone: "삼정",
      nose: "코",
      mouth: "입",
      tilt: "눈매",
      corner: "입꼬리",
      brow: "눈썹",
      eyeSize: "눈의 크기",
      spacing: "눈 사이 간격",
    },
    disclaimer:
      "관상 풀이는 전통 해석을 바탕으로 한 오락용 콘텐츠이며, 과학적·의학적 근거가 있거나 실제 운세를 보증하는 것이 아닙니다. 분석은 얼굴 비율을 단순화한 기준이라 사진 각도·조명·표정에 따라 결과가 달라질 수 있습니다.",
    whatIsTitle: "관상이란?",
    whatIs:
      "관상(觀相)은 얼굴의 모양과 비율을 보고 성격과 인생의 흐름을 풀이하는 동양의 전통 해석입니다. 얼굴을 이마·눈코·입턱의 세 구간(삼정)으로 나누고, 눈·눈썹·코·입 같은 부위의 특징을 종합해 읽습니다. 이 도구는 그 전통 풀이를 가볍게 즐길 수 있도록, 얼굴 비율을 계산해 해당하는 해석을 보여 줍니다.",
    howTitle: "분석은 이렇게 이루어져요",
    how: "브라우저에서 얼굴의 특징점 468개를 찾아 얼굴 길이와 너비, 눈 사이 간격, 눈매, 코 폭, 입 크기 같은 비율을 계산합니다. 이 계산은 모두 내 기기 안에서 이루어지며 사진은 어디에도 전송되지 않습니다.",
    faq: [
      {
        q: "사진은 서버에 저장되나요?",
        a: "아니요. 사진은 브라우저 메모리에서만 처리되며 서버로 전송되거나 저장되지 않습니다. 결과 화면을 닫거나 다시 하기를 누르면 사진도 함께 사라집니다.",
      },
      {
        q: "안경을 쓰거나 앞머리가 있으면 왜 안 되나요?",
        a: "안경테와 앞머리가 눈썹·눈매·이마 같은 부위를 가리면 얼굴 특징점이 정확히 잡히지 않아 풀이가 어긋날 수 있습니다. 안경을 벗고 이마가 보이도록 머리카락을 걷어 주세요.",
      },
      {
        q: "왜 정면 사진만 되나요?",
        a: "얼굴이 옆으로 돌아가거나 위·아래를 향하면 눈 사이 간격이나 얼굴 길이 같은 비율이 실제와 다르게 측정됩니다. 그래서 정면이 확인될 때만 분석합니다.",
      },
      {
        q: "결과가 매번 같나요?",
        a: "같은 사진이라면 같은 결과가 나옵니다. 다만 표정이나 각도, 조명이 달라지면 측정값이 조금씩 달라질 수 있습니다.",
      },
    ],
    footer: "※ 오락 목적의 콘텐츠입니다.",
  },
  en: {
    title: "Face Reading",
    subtitle: "Explore the traits of your face shape, eyes, nose and mouth from a front-facing photo (analyzed only inside your own device)",
    guideTitle: "Please check before you start",
    guide: [
      "Take off your glasses. Frames and lenses hide the shape of your eyes and eyebrows.",
      "Sweep your hair back so your forehead is visible. Bangs covering the forehead reduce accuracy.",
      "The photo must be taken straight on, facing the camera. Faces turned left or right, looking down from above, or looking up from below cannot be analyzed.",
      "Keep your whole face bright and clear, with only one person in the frame. A natural, near-neutral expression works best.",
    ],
    confirm: "I have read the instructions and my photo meets them",
    needConfirm: "Please tick the box above first.",
    uploadBtn: "Upload a photo",
    cameraBtn: "Take a photo with camera",
    privacyNote: "Your face photo is analyzed only inside your browser on this device. It is never uploaded or stored.",
    loadingModel: "Preparing face detection. The first time can take a few seconds.",
    analyzing: "Analyzing your face.",
    cameraStarting: "Starting the camera.",
    cameraHint: "Center your face on the screen and look straight at the camera.",
    frontalOk: "You are facing front! Press the capture button.",
    capture: "Capture and analyze",
    cancel: "Cancel",
    retry: "Start over",
    issues: {
      noFace: "No face was found. Please try a bright photo where you look straight ahead.",
      multiple: "More than one face was found. Please use a photo with only one person.",
      cut: "Part of your face is cut off. Please keep your whole face in the frame.",
      small: "Your face looks too small. Move closer so your face fills more of the frame.",
      yaw: "Your face is turned to the side. A front-facing photo is required.",
      pitch: "Your face is tilted up or down. Keep your chin level and look straight ahead.",
      roll: "Your head is tilted to one side. Please hold your head upright.",
    },
    errors: {
      cameraDenied: "Camera permission was not granted. Allow the camera in your browser's site settings, or use \"Upload a photo\".",
      cameraUnsupported: "This browser cannot use the camera. Please use \"Upload a photo\".",
      cameraBusy: "The camera could not be opened. Check whether another app is using it.",
      loadFail: "Face detection could not be loaded. Please check your connection and try again.",
      imageFail: "The photo could not be read. Please try another photo.",
    },
    resultTitle: "Your Face Reading",
    photoNote: "Photo used for analysis (shown only on this device)",
    zonesTitle: "Balance of the Three Zones",
    zoneNames: ["Upper · Early life", "Middle · Midlife", "Lower · Later life"],
    fortune: { general: "Overall · First Impression", wealth: "Wealth", love: "Love", career: "Career", people: "Relationships" },
    part: {
      shape: "Face shape",
      zone: "Three zones",
      nose: "Nose",
      mouth: "Mouth",
      tilt: "Eye shape",
      corner: "Mouth corners",
      brow: "Eyebrows",
      eyeSize: "Eye size",
      spacing: "Eye spacing",
    },
    disclaimer:
      "Face reading here is entertainment based on traditional interpretation. It has no scientific or medical basis and does not guarantee any real fortune. The analysis uses simplified facial proportions, so results can vary with photo angle, lighting and expression.",
    whatIsTitle: "What is face reading?",
    whatIs:
      "Face reading (physiognomy) is a traditional East Asian practice of interpreting personality and life patterns from the shape and proportions of the face. The face is divided into three zones (forehead, eyes and nose, mouth and chin), and features such as the eyes, eyebrows, nose and mouth are read together. This tool calculates your facial proportions and shows the matching traditional interpretations for fun.",
    howTitle: "How the analysis works",
    how: "Your browser locates 468 facial landmarks and calculates proportions such as face length and width, eye spacing, eye shape, nose width and mouth size. All of this happens on your own device, and your photo is never sent anywhere.",
    faq: [
      {
        q: "Is my photo stored on a server?",
        a: "No. Your photo is processed only in your browser's memory and is never uploaded or stored. It disappears when you close the result or press Start over.",
      },
      {
        q: "Why can't I wear glasses or have bangs over my forehead?",
        a: "Frames and bangs can hide the eyebrows, eyes and forehead, so facial landmarks may not be detected accurately and the reading can be off. Please remove your glasses and sweep your hair back.",
      },
      {
        q: "Why does it only work with front-facing photos?",
        a: "When the face is turned or tilted up or down, proportions such as eye spacing or face length are measured incorrectly. So the analysis runs only when a front-facing pose is confirmed.",
      },
      {
        q: "Will I get the same result every time?",
        a: "The same photo gives the same result. Measurements can shift slightly if your expression, angle or lighting changes.",
      },
    ],
    footer: "* For entertainment purposes only.",
  },
  ja: {
    title: "私の観相を見る",
    subtitle: "正面の顔写真から顔型・目・鼻・口の特徴を読み解く観相占い（写真はお使いの端末の中だけで分析されます）",
    guideTitle: "分析の前に必ずご確認ください",
    guide: [
      "メガネを外してください。フレームやレンズが目と眉の形を隠してしまいます。",
      "額が見えるように髪をかき上げてください。前髪が額を隠すと精度が下がります。",
      "必ず正面の写真、または正面からの撮影でお願いします。顔が左右に向いている、上から見下ろす、下から見上げる角度は分析できません。",
      "顔全体が明るくはっきり写るようにし、写るのは一人だけにしてください。自然な無表情に近い表情がおすすめです。",
    ],
    confirm: "上記の案内を確認しました。条件に合う写真です",
    needConfirm: "先に上の確認欄にチェックを入れてください。",
    uploadBtn: "写真をアップロードして見る",
    cameraBtn: "カメラで撮影して見る",
    privacyNote: "顔写真はこの端末のブラウザ内だけで分析され、サーバーへの送信や保存は行われません。",
    loadingModel: "顔認識を準備しています。初回は数秒かかることがあります。",
    analyzing: "顔を分析しています。",
    cameraStarting: "カメラを起動しています。",
    cameraHint: "顔を画面の中央に合わせ、正面を向いてください。",
    frontalOk: "正面です！そのまま撮影ボタンを押してください。",
    capture: "撮影して分析する",
    cancel: "キャンセル",
    retry: "やり直す",
    issues: {
      noFace: "顔が見つかりませんでした。正面を向いた明るい写真でもう一度お試しください。",
      multiple: "複数の顔が写っています。一人だけが写った写真でお試しください。",
      cut: "顔の一部が画面の外に切れています。顔全体が写るようにしてください。",
      small: "顔が小さすぎます。もっと近づいて顔を大きく写してください。",
      yaw: "顔が左右に向いています。正面を向いた写真が必要です。",
      pitch: "顔が上または下を向いています。あごを引いたり上げたりせず、正面を向いてください。",
      roll: "頭が片側に傾いています。頭をまっすぐに立ててください。",
    },
    errors: {
      cameraDenied: "カメラの権限が許可されていません。ブラウザのサイト設定でカメラを許可するか、「写真をアップロードして見る」をご利用ください。",
      cameraUnsupported: "このブラウザではカメラを使用できません。「写真をアップロードして見る」をご利用ください。",
      cameraBusy: "カメラを開けません。他のアプリがカメラを使用していないか確認してください。",
      loadFail: "顔認識機能を読み込めませんでした。通信状況を確認してもう一度お試しください。",
      imageFail: "写真を読み込めませんでした。別の写真でお試しください。",
    },
    resultTitle: "私の観相鑑定",
    photoNote: "分析に使用した写真（この端末内だけに表示されます）",
    zonesTitle: "三停のバランス",
    zoneNames: ["上停・初年", "中停・中年", "下停・晩年"],
    fortune: { general: "総合運・第一印象", wealth: "金運", love: "恋愛運", career: "仕事運", people: "対人運" },
    part: {
      shape: "顔型",
      zone: "三停",
      nose: "鼻",
      mouth: "口",
      tilt: "目元",
      corner: "口角",
      brow: "眉",
      eyeSize: "目の大きさ",
      spacing: "目の間隔",
    },
    disclaimer:
      "観相の鑑定は伝統的な解釈に基づく娯楽コンテンツであり、科学的・医学的な根拠や実際の運勢を保証するものではありません。分析は顔の比率を簡略化した基準のため、写真の角度・照明・表情によって結果が変わることがあります。",
    whatIsTitle: "観相とは？",
    whatIs:
      "観相は、顔の形や比率から性格や人生の流れを読み解く東洋の伝統的な解釈です。顔を額・目と鼻・口とあごの三つのゾーン（三停）に分け、目・眉・鼻・口などの特徴を総合して読みます。このツールは、その伝統的な解釈を気軽に楽しめるよう、顔の比率を計算して該当する解釈を表示します。",
    howTitle: "分析のしくみ",
    how: "ブラウザが顔の特徴点468か所を見つけ、顔の長さと幅、目の間隔、目元、鼻幅、口の大きさなどの比率を計算します。この計算はすべてお使いの端末内で行われ、写真はどこにも送信されません。",
    faq: [
      {
        q: "写真はサーバーに保存されますか？",
        a: "いいえ。写真はブラウザのメモリ内だけで処理され、サーバーへの送信や保存は行われません。結果画面を閉じるか「やり直す」を押すと、写真も消えます。",
      },
      {
        q: "メガネや前髪があるとなぜいけないのですか？",
        a: "フレームや前髪が眉・目元・額を隠すと、顔の特徴点を正確に捉えられず、鑑定がずれることがあります。メガネを外し、額が見えるように髪をかき上げてください。",
      },
      {
        q: "なぜ正面の写真だけなのですか？",
        a: "顔が横を向いたり上下に傾いたりすると、目の間隔や顔の長さなどの比率が実際と違って測定されます。そのため、正面であることが確認できたときだけ分析します。",
      },
      {
        q: "結果は毎回同じですか？",
        a: "同じ写真なら同じ結果になります。ただし、表情・角度・照明が変わると測定値が少し変わることがあります。",
      },
    ],
    footer: "※ 娯楽目的のコンテンツです。",
  },
  es: {
    title: "Lectura de rostro",
    subtitle: "Descubre los rasgos de la forma de tu cara, ojos, nariz y boca con una foto de frente (se analiza solo dentro de tu dispositivo)",
    guideTitle: "Revisa esto antes de empezar",
    guide: [
      "Quítate las gafas. La montura y los cristales tapan la forma de los ojos y las cejas.",
      "Aparta el pelo para que se vea la frente. Un flequillo sobre la frente reduce la precisión.",
      "La foto debe ser de frente, mirando directamente a la cámara. No se pueden analizar rostros girados a un lado, mirando hacia abajo desde arriba ni hacia arriba desde abajo.",
      "Procura que toda la cara se vea clara y bien iluminada, con una sola persona en la imagen. Funciona mejor una expresión natural y casi neutra.",
    ],
    confirm: "He leído las indicaciones y mi foto las cumple",
    needConfirm: "Marca primero la casilla de arriba.",
    uploadBtn: "Subir una foto",
    cameraBtn: "Hacer una foto con la cámara",
    privacyNote: "Tu foto se analiza solo en el navegador de este dispositivo. No se sube ni se guarda en ningún servidor.",
    loadingModel: "Preparando el reconocimiento facial. La primera vez puede tardar unos segundos.",
    analyzing: "Analizando tu rostro.",
    cameraStarting: "Encendiendo la cámara.",
    cameraHint: "Centra tu cara en la pantalla y mira de frente a la cámara.",
    frontalOk: "¡Estás de frente! Pulsa el botón de captura.",
    capture: "Capturar y analizar",
    cancel: "Cancelar",
    retry: "Empezar de nuevo",
    issues: {
      noFace: "No se encontró ningún rostro. Prueba con una foto luminosa mirando de frente.",
      multiple: "Se ven varios rostros. Usa una foto en la que salga una sola persona.",
      cut: "Parte de tu cara queda fuera de la imagen. Procura que se vea completa.",
      small: "Tu cara se ve demasiado pequeña. Acércate para que ocupe más espacio.",
      yaw: "Tu cara está girada hacia un lado. Se necesita una foto de frente.",
      pitch: "Tu cara está inclinada hacia arriba o hacia abajo. Mantén la barbilla nivelada y mira al frente.",
      roll: "Tienes la cabeza inclinada hacia un lado. Mantén la cabeza recta.",
    },
    errors: {
      cameraDenied: "No se concedió el permiso de la cámara. Permítelo en los ajustes del sitio de tu navegador o usa \"Subir una foto\".",
      cameraUnsupported: "Este navegador no puede usar la cámara. Usa \"Subir una foto\".",
      cameraBusy: "No se pudo abrir la cámara. Comprueba si otra aplicación la está usando.",
      loadFail: "No se pudo cargar el reconocimiento facial. Comprueba tu conexión e inténtalo de nuevo.",
      imageFail: "No se pudo leer la foto. Prueba con otra.",
    },
    resultTitle: "Tu lectura de rostro",
    photoNote: "Foto usada en el análisis (solo se muestra en este dispositivo)",
    zonesTitle: "Equilibrio de las tres zonas",
    zoneNames: ["Superior · Juventud", "Media · Madurez", "Inferior · Vejez"],
    fortune: { general: "General · Primera impresión", wealth: "Riqueza", love: "Amor", career: "Carrera", people: "Relaciones" },
    part: {
      shape: "Forma del rostro",
      zone: "Tres zonas",
      nose: "Nariz",
      mouth: "Boca",
      tilt: "Forma de los ojos",
      corner: "Comisuras de la boca",
      brow: "Cejas",
      eyeSize: "Tamaño de los ojos",
      spacing: "Separación de los ojos",
    },
    disclaimer:
      "La lectura de rostro es contenido de entretenimiento basado en interpretaciones tradicionales. No tiene base científica ni médica y no garantiza ninguna fortuna real. El análisis usa proporciones faciales simplificadas, por lo que el resultado puede variar con el ángulo, la luz y la expresión.",
    whatIsTitle: "¿Qué es la lectura de rostro?",
    whatIs:
      "La lectura de rostro (fisonomía) es una práctica tradicional de Asia oriental que interpreta la personalidad y el rumbo de la vida a partir de la forma y las proporciones de la cara. El rostro se divide en tres zonas (frente, ojos y nariz, boca y mentón) y se leen en conjunto rasgos como los ojos, las cejas, la nariz y la boca. Esta herramienta calcula tus proporciones faciales y muestra las interpretaciones tradicionales correspondientes, como pasatiempo.",
    howTitle: "Cómo funciona el análisis",
    how: "Tu navegador localiza 468 puntos de referencia del rostro y calcula proporciones como la longitud y anchura de la cara, la separación de los ojos, su forma, el ancho de la nariz y el tamaño de la boca. Todo ocurre en tu propio dispositivo y la foto no se envía a ninguna parte.",
    faq: [
      {
        q: "¿Se guarda mi foto en un servidor?",
        a: "No. La foto se procesa solo en la memoria de tu navegador y no se sube ni se guarda. Desaparece al cerrar el resultado o pulsar Empezar de nuevo.",
      },
      {
        q: "¿Por qué no puedo llevar gafas ni flequillo sobre la frente?",
        a: "La montura y el flequillo pueden tapar las cejas, los ojos y la frente, así que los puntos del rostro no se detectan con precisión y la lectura puede desviarse. Quítate las gafas y aparta el pelo.",
      },
      {
        q: "¿Por qué solo funciona con fotos de frente?",
        a: "Si la cara está girada o inclinada hacia arriba o abajo, proporciones como la separación de los ojos o la longitud de la cara se miden mal. Por eso solo se analiza cuando se confirma que estás de frente.",
      },
      {
        q: "¿Obtendré siempre el mismo resultado?",
        a: "Con la misma foto, el resultado es el mismo. Las mediciones pueden variar un poco si cambian la expresión, el ángulo o la iluminación.",
      },
    ],
    footer: "* Solo con fines de entretenimiento.",
  },
};

export function i18n(locale: string): I18nData {
  return i18nData[(locale as Locale) in i18nData ? (locale as Locale) : "ko"];
}

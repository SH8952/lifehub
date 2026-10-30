export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  ipLabel: string;
  cidrLabel: string;
  networkLabel: string;
  broadcastLabel: string;
  netmaskLabel: string;
  firstHostLabel: string;
  lastHostLabel: string;
  totalHostsLabel: string;
  usableHostsLabel: string;
  errorInvalidIp: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "서브넷 계산기",
    subtitle: "IP 주소와 CIDR을 입력해 네트워크 주소, 브로드캐스트, 사용 가능한 호스트 수를 계산합니다.",
    ipLabel: "IP 주소",
    cidrLabel: "CIDR (서브넷 비트)",
    networkLabel: "네트워크 주소",
    broadcastLabel: "브로드캐스트 주소",
    netmaskLabel: "서브넷 마스크",
    firstHostLabel: "첫 번째 사용 가능 IP",
    lastHostLabel: "마지막 사용 가능 IP",
    totalHostsLabel: "총 호스트 수",
    usableHostsLabel: "사용 가능한 호스트 수",
    errorInvalidIp: "올바른 IPv4 주소를 입력하세요 (예: 192.168.1.0).",
    howTitle: "사용 방법",
    howSteps: [
      "IP 주소(예: 192.168.1.0)를 입력합니다.",
      "CIDR 값(예: 24)을 슬라이더로 선택합니다.",
      "네트워크 정보와 사용 가능한 IP 범위를 확인하세요.",
    ],
    faq: [
      { q: "CIDR이란 무엇인가요?", a: "CIDR(Classless Inter-Domain Routing)은 IP 주소 뒤에 /24처럼 네트워크 부분의 비트 수를 표기하는 방식으로, 서브넷 마스크를 간결하게 나타냅니다." },
      { q: "사용 가능한 호스트 수는 왜 전체보다 2개 적나요?", a: "각 서브넷의 첫 번째 주소는 네트워크 주소, 마지막 주소는 브로드캐스트 주소로 예약되어 있어 실제 호스트에 할당할 수 없기 때문입니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Subnet Calculator",
    subtitle: "Enter an IP address and CIDR to calculate the network address, broadcast address, and usable host count.",
    ipLabel: "IP Address",
    cidrLabel: "CIDR (Subnet Bits)",
    networkLabel: "Network Address",
    broadcastLabel: "Broadcast Address",
    netmaskLabel: "Subnet Mask",
    firstHostLabel: "First Usable IP",
    lastHostLabel: "Last Usable IP",
    totalHostsLabel: "Total Hosts",
    usableHostsLabel: "Usable Hosts",
    errorInvalidIp: "Please enter a valid IPv4 address (e.g. 192.168.1.0).",
    howTitle: "How to Use",
    howSteps: [
      "Enter an IP address (e.g. 192.168.1.0).",
      "Choose the CIDR value (e.g. 24) with the slider.",
      "Check the network info and usable IP range.",
    ],
    faq: [
      { q: "What is CIDR?", a: "CIDR (Classless Inter-Domain Routing) notation, like /24 after an IP address, concisely represents a subnet mask by specifying the number of network bits." },
      { q: "Why are usable hosts 2 fewer than total?", a: "The first address in each subnet is reserved as the network address and the last as the broadcast address, so neither can be assigned to a host." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "サブネット計算機",
    subtitle: "IPアドレスとCIDRを入力してネットワークアドレス、ブロードキャスト、使用可能なホスト数を計算します。",
    ipLabel: "IPアドレス",
    cidrLabel: "CIDR（サブネットビット）",
    networkLabel: "ネットワークアドレス",
    broadcastLabel: "ブロードキャストアドレス",
    netmaskLabel: "サブネットマスク",
    firstHostLabel: "最初の使用可能IP",
    lastHostLabel: "最後の使用可能IP",
    totalHostsLabel: "総ホスト数",
    usableHostsLabel: "使用可能なホスト数",
    errorInvalidIp: "正しいIPv4アドレスを入力してください（例：192.168.1.0）。",
    howTitle: "使用方法",
    howSteps: [
      "IPアドレス（例：192.168.1.0）を入力します。",
      "CIDR値（例：24）をスライダーで選択します。",
      "ネットワーク情報と使用可能なIP範囲を確認しましょう。",
    ],
    faq: [
      { q: "CIDRとは何ですか？", a: "CIDR（Classless Inter-Domain Routing）表記は、IPアドレスの後に/24のようにネットワーク部のビット数を表記する方式で、サブネットマスクを簡潔に表します。" },
      { q: "使用可能なホスト数が全体より2つ少ないのはなぜですか？", a: "各サブネットの最初のアドレスはネットワークアドレス、最後のアドレスはブロードキャストアドレスとして予約されており、実際のホストに割り当てられないためです。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Calculadora de Subredes",
    subtitle: "Introduce una IP y CIDR para calcular la dirección de red, broadcast y hosts utilizables.",
    ipLabel: "Dirección IP",
    cidrLabel: "CIDR (Bits de Subred)",
    networkLabel: "Dirección de Red",
    broadcastLabel: "Dirección de Broadcast",
    netmaskLabel: "Máscara de Subred",
    firstHostLabel: "Primera IP Utilizable",
    lastHostLabel: "Última IP Utilizable",
    totalHostsLabel: "Total de Hosts",
    usableHostsLabel: "Hosts Utilizables",
    errorInvalidIp: "Introduce una dirección IPv4 válida (ej: 192.168.1.0).",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce una dirección IP (ej: 192.168.1.0).",
      "Elige el valor CIDR (ej: 24) con el control deslizante.",
      "Revisa la información de red y el rango de IP utilizable.",
    ],
    faq: [
      { q: "¿Qué es CIDR?", a: "La notación CIDR (Classless Inter-Domain Routing), como /24 después de una IP, representa concisamente una máscara de subred especificando el número de bits de red." },
      { q: "¿Por qué los hosts utilizables son 2 menos que el total?", a: "La primera dirección de cada subred se reserva como dirección de red y la última como dirección de broadcast, por lo que ninguna puede asignarse a un host." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};

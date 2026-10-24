import type { EnglishContent } from "../content";
import type { Translation } from "../translate";

/**
 * zh-HK customer segments and industrial verticals.
 * Draft translation pending native-speaker and business review.
 * Segment anchors are derived from the English titles and do not change.
 */
export const industriesZhHk: Translation<
  Pick<EnglishContent, "customers" | "industriesSection" | "industrialVerticals">
> = {
  customers: [
    {
      title: "政府及公用事業",
      need: "發電容量、電網穩定及電氣化",
      response: "IPP、EPC、BESS 及電網方案",
      tags: ["IPP", "EPC", "BESS", "電網方案"],
      detail: "公營公用事業及政府計劃需要可靠的新增容量、更強韌的電網及切實可行的電氣化路徑。",
      offerings: [
        "公用事業規模及混合發電",
        "變電站及電網整合",
        "農村電氣化及微電網",
        "公私營合作項目架構",
      ],
    },
    {
      title: "獨立發電商",
      need: "項目開發及執行",
      response: "工程、採購及 EPC 整合",
      tags: ["工程", "採購", "EPC 整合"],
      detail: "獨立發電商需要一個夥伴，能由機遇篩選推進至具融資可行性的設計、OEM 選擇及交付，而不會令責任分散。",
      offerings: [
        "可行性及融資可行性支援",
        "技術及 OEM 評估",
        "全球採購",
        "EPC 整合及調試",
      ],
    },
    {
      title: "礦業及重工業",
      need: "可靠的自備電力",
      response: "混合發電及儲能",
      tags: ["混合發電", "儲能", "自備電力"],
      detail: "礦業及重工業需要具成本競爭力、高可用率的自備及混合電力——通常位於錶後。",
      offerings: [
        "自備及混合電力",
        "應急及持續發電",
        "能源效益及電能質量提升",
        "長期營運及維護",
      ],
    },
    {
      title: "工業園區及數據中心",
      need: "高可用率能源",
      response: "綜合公用設施基建",
      tags: ["綜合公用設施", "基建"],
      detail: "工業區及數據中心需要可擴展、高可用率的能源基建，並具備清晰的擴展路徑。",
      offerings: [
        "園區公用設施基建",
        "數據中心高可用率電力",
        "現場太陽能及儲能",
        "分階段擴容",
      ],
    },
    {
      title: "石油及天然氣／LNG",
      need: "燃料及電力基建",
      response: "LNG 發電及燃氣系統",
      tags: ["LNG 發電", "燃氣系統"],
      detail: "石油、天然氣及 LNG 持份者需要由接收、發電以至電網接駁的一體化燃料至電力路徑。",
      offerings: [
        "小型 LNG 接收站",
        "FSRU／FSRP 路徑",
        "燃氣管道及計量",
        "一體化 LNG 發電交付",
      ],
    },
    {
      title: "商業及地產",
      need: "降低成本及提升韌性",
      response: "工商業太陽能、BESS 及 EMS",
      tags: ["工商業太陽能", "BESS", "能源管理"],
      detail: "商業樓宇及地產組合尋求更低的能源成本、更高的韌性及更潔淨的現場發電。",
      offerings: [
        "屋頂及車棚太陽能",
        "削峰及後備儲能",
        "能源管理",
        "能源即服務模式",
      ],
    },
    {
      title: "車隊營運商",
      need: "充電容量",
      response: "充電樞紐及軟件",
      tags: ["充電樞紐", "充電管理"],
      detail: "車隊營運商需要配合車廠營運、電力供應及商業模式的充電容量。",
      offerings: [
        "交流及直流快速充電",
        "車廠及巴士充電樞紐",
        "太陽能加儲能充電樞紐",
        "充電管理軟件",
      ],
    },
    {
      title: "發展機構",
      need: "能源普及及氣候影響",
      response: "微電網及分佈式能源",
      tags: ["微電網", "分佈式能源"],
      detail: "發展機構需要具融資可行性、具包容性並有持久營運模式的能源普及方案。",
      offerings: [
        "太陽能家居系統",
        "混合微電網",
        "預付計量",
        "本地營運人員培訓及營運及維護模式",
      ],
    },
  ],
  industriesSection: {
    label: "服務對象",
    headingLead: "圍繞",
    headingAccent: "能源需求而建。",
    supporting: "已記錄的目標客戶類別。每種情況均需要不同的發電、燃料、電網、儲能及商業結構組合。",
  },
  industrialVerticals: [
    { title: "礦業及金屬", description: "為採礦及礦物加工（包括鋁及石墨業務）提供可靠電力。" },
    { title: "水泥及重工業", description: "為水泥、鋼鐵及持續運作的重工業生產負荷提供穩定電力。" },
    { title: "工業園區及經濟特區", description: "為工業區及經濟特區提供綜合能源供應。" },
    { title: "數據中心", description: "為數碼基建提供高可用率、可擴展的電力路徑。" },
    { title: "港口及物流", description: "為港口、物流樞紐及貿易區提供電力及相關基建。" },
    { title: "工商業設施", description: "為尋求降低成本及提升韌性的企業提供度身訂造的工商業能源方案。" },
  ],
};

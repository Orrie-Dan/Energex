import type { EnglishContent } from "../content";
import type { Translation } from "../translate";

/**
 * zh-HK Power Equipment Supply content.
 * Draft translation pending native-speaker and business review.
 * Category slugs stay in English so URLs are identical across locales.
 */
export const equipmentZhHk: Translation<
  Pick<EnglishContent, "equipmentPage" | "equipmentCategories" | "equipmentProcurement" | "equipmentSupplyCard">
> = {
  equipmentPage: {
    eyebrow: "電力設備供應",
    heading: "為項目採購的設備。",
    intro:
      "設備貿易及全球採購涵蓋國際貿易及採購，並提供技術資格審核及供應鏈管理。以下分組用以整理該範圍。本頁並非現貨產品目錄。",
    boundary:
      "Energex 不會在此發佈製造商、產品編號、規格、價格、認證、保養或供貨情況。只有在具備經核准的紀錄後，才會新增產品頁面。",
    coordination:
      "採購協調可包括 OEM 評估、工廠審核、物流及清關支援。這些均屬採購活動，並非聲稱具備認證或提供保養。",
    inquiryHeading: "設備查詢",
    inquiryBody: "開啟聯絡頁面以描述設備需求。表格僅供預覽，不會傳送訊息。",
    inquiryBodyLive: "開啟聯絡頁面以描述設備需求，並傳送至 ENERGEX 團隊。提交查詢並不構成報價。",
    quoteNote: "請在查詢表格上描述需求。傳送功能尚未連接，因此表格不會傳送訊息或發出報價。",
    quoteNoteLive: "請在查詢表格上描述需求並傳送至 ENERGEX 團隊。提交查詢不會發出報價。",
    inquiryLabel: "商討設備供應",
  },
  equipmentCategories: [
    {
      title: "發電設備",
      description: "以項目設備供應形式協調的發動機、渦輪及發電機。",
      scope: ["發動機", "渦輪", "發電機"],
      imgAlt: "海濱發電廠",
    },
    {
      title: "太陽能及儲能",
      description: "同一採購範圍內的太陽能及電池設備。",
      scope: ["太陽能設備", "電池設備"],
      imgAlt: "可再生能源發電及儲能",
    },
    {
      title: "輸電及配電",
      description: "變壓器、開關設備、電纜及變電站設備。",
      scope: ["變壓器", "開關設備", "電纜", "變電站設備"],
      imgAlt: "電力變電站",
    },
    {
      title: "充電及能源控制",
      description: "電動車充電器、智能電錶及數碼控制系統。",
      scope: ["電動車充電器", "智能電錶", "數碼控制系統"],
      imgAlt: "車輛充電基建",
    },
    {
      title: "LNG 及低溫設備",
      description: "LNG 設備、泵、壓縮機及低溫系統。",
      scope: ["LNG 設備", "泵", "壓縮機", "低溫系統"],
      imgAlt: "LNG 基建",
    },
    {
      title: "備用零件及支援",
      description: "備用零件及生命週期更換部件，並配合物流及清關支援協調。",
      scope: ["備用零件", "生命週期更換部件"],
      imgAlt: "工業設備搬運",
    },
  ],
  equipmentProcurement: ["OEM 評估", "工廠審核", "物流支援", "清關支援"],
  equipmentSupplyCard: {
    title: "電力設備供應",
    description: "國際貿易及採購發電、太陽能、儲能、電網、充電、LNG 及備用零件設備。",
  },
};

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
    heading: "以合適設備，推動項目發展。",
    intro: "由發電、儲能到電網基建，ENERGEX 為能源項目協調設備採購及供應。",
    note:
      "本頁並非現貨產品目錄，不會在此發佈製造商、規格、價格、認證、保養或供貨情況。OEM 評估、工廠審核、物流及清關等採購支援，並非聲稱具備認證或提供保養。",
    boundary:
      "Energex 不會在此發佈製造商、產品編號、規格、價格、認證、保養或供貨情況。只有在具備經核准的紀錄後，才會新增產品頁面。",
    coordination:
      "採購協調可包括 OEM 評估、工廠審核、物流及清關支援。這些均屬採購活動，並非聲稱具備認證或提供保養。",
    inquiryHeading: "設備查詢",
    inquiryBody: "開啟聯絡頁面以描述設備需求。表格僅供預覽，不會傳送訊息。",
    inquiryBodyLive: "開啟聯絡頁面以描述設備需求，並傳送至 ENERGEX 團隊。提交查詢並不構成報價。",
    quoteNote: "請在查詢表格上描述需求。傳送功能尚未連接，因此表格不會傳送訊息或發出報價。",
    quoteNoteLive: "請在查詢表格上描述需求並傳送至 ENERGEX 團隊。提交查詢不會發出報價。",
    procurementDetails: [
      "按項目需求評估製造商，作為技術資格審核的一部分。",
      "可在採購過程中協調工廠審核，於設備離開製造商前進行。",
      "作為供應鏈管理的一部分，協調由製造商運往項目現場的運輸。",
      "協調清關支援，以便設備運抵目的地國家。",
    ],
    inquiryLabel: "商討設備供應",
  },
  equipmentCategories: [
    {
      title: "發電機組及發動機",
      description: "適用於基本負載、備用及調峰運行的發電機組及發動機——由單一機組到整座發電站。",
      scope: [
        { label: "柴油及重油發電機組", detail: "柴油及重燃油發電機組。" },
        { label: "燃氣及雙燃料發動機", detail: "燃氣及雙燃料往復式發動機。" },
        { label: "發電機", detail: "交流發電機及發電機端。" },
        { label: "電廠配套設備", detail: "發動機發電站的輔助設備。" },
      ],
      imgAlt: "海濱發電廠",
    },
    {
      title: "渦輪機",
      description: "適用於公用事業、獨立發電商及工業發電的燃氣及蒸汽渦輪機。",
      scope: [
        { label: "燃氣渦輪機", detail: "簡單循環及聯合循環機組。" },
        { label: "蒸汽渦輪機", detail: "聯合循環及工業應用。" },
        { label: "渦輪機輔助設備", detail: "相關電廠配套設備。" },
      ],
      imgAlt: "連接電網的火力發電廠",
    },
    {
      title: "輸電及配電",
      description: "變壓器、開關設備、電纜及變電站設備。",
      scope: [
        { label: "變壓器", detail: "電力及配電變壓器。" },
        { label: "開關設備", detail: "中壓及高壓開關設備。" },
        { label: "電纜", detail: "電力電纜及配件。" },
        { label: "變電站設備", detail: "保護、控制及變電站成套設備。" },
      ],
      imgAlt: "電力變電站",
    },
    {
      title: "太陽能及儲能",
      description: "同一採購範圍內的太陽能及電池儲能系統（BESS）設備。",
      scope: [
        { label: "太陽能組件", detail: "適用於公用事業、商業及離網場地的光伏組件。" },
        { label: "逆變器", detail: "組串式及集中式逆變器。" },
        { label: "電池儲能（BESS）", detail: "電池儲能系統。" },
      ],
      imgAlt: "可再生能源發電及儲能",
    },
    {
      title: "充電及控制",
      description: "電動車充電器、智能電錶及數碼控制系統。",
      scope: [
        { label: "電動車充電器", detail: "交流及直流充電設備。" },
        { label: "智能電錶", detail: "用於計費及監測的計量設備。" },
        { label: "數碼控制系統", detail: "監測及控制系統。" },
      ],
      imgAlt: "車輛充電基建",
    },
    {
      title: "LNG 及低溫設備",
      description: "LNG 設備、泵、壓縮機及低溫系統。",
      scope: [
        { label: "LNG 設備", detail: "儲存及再氣化設備。" },
        { label: "泵", detail: "低溫泵及輸送泵。" },
        { label: "壓縮機", detail: "氣體及蒸發氣壓縮機。" },
        { label: "低溫系統", detail: "氣化器及低溫製程系統。" },
      ],
      imgAlt: "LNG 基建",
    },
    {
      title: "備用零件",
      description: "適用於上述所有已安裝機組的零件及部件。",
      scope: [
        { label: "發動機零件", detail: "汽缸蓋、缸套、活塞、噴油器。" },
        { label: "渦輪增壓器零件", detail: "芯組及大修套件。" },
        { label: "電氣部件", detail: "斷路器、繼電器及自動電壓調節器（AVR）。" },
        { label: "大修套件", detail: "定期保養套件。" },
      ],
      imgAlt: "工業設備搬運",
    },
  ],
  equipmentProcurement: ["OEM 評估", "工廠審核", "物流支援", "清關支援"],
  equipmentSupplyCard: {
    title: "電力設備供應",
    description: "國際貿易及採購發電、太陽能、儲能、電網、充電、LNG 及備用零件設備。",
  },
};

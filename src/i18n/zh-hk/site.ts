import type { EnglishContent } from "../content";
import type { Translation } from "../translate";

/**
 * zh-HK site-wide content (home, navigation, contact, footer).
 * Draft translation pending native-speaker and business review.
 * Structural values (links, media, brand name, address) come from English.
 */
export const siteZhHk: Translation<
  Pick<
    EnglishContent,
    | "brand"
    | "navLinks"
    | "navCta"
    | "hero"
    | "about"
    | "solutionFamilies"
    | "whyEnergex"
    | "integratorModel"
    | "scale"
    | "deliveryRoles"
    | "deliveryFlexibility"
    | "digitalEnergy"
    | "contactPage"
    | "contactClose"
    | "approvedEvidence"
    | "evidenceSection"
    | "capabilityStrengths"
    | "projectsPage"
    | "finalCta"
    | "footer"
  >
> = {
  brand: {
    taglinePrimary: "一個夥伴，全方位能源解決方案。",
    taglineSecondary: "從概念到電力。",
    taglineCorporate: "一間公司，一站式綜合能源解決方案。",
    natureOfBusiness: "貿易",
  },
  navLinks: [
    { label: "解決方案" },
    { label: "設備供應" },
    { label: "服務行業" },
    { label: "關於我們" },
    { label: "聯絡我們" },
  ],
  navCta: { label: "開展項目" },
  hero: {
    eyebrow: "綜合能源解決方案",
    headlineLead: "一個夥伴，",
    headlineAccent: "全方位能源解決方案。",
    supporting: "從概念到電力。",
    body: "Energex 為能源買家提供單一對接窗口，統籌工程、設備採購、項目交付及生命週期支援——由最初的需求直至營運階段。",
    primaryCta: { label: "瀏覽解決方案" },
    secondaryCta: { label: "開展項目" },
  },
  about: {
    eyebrow: "關於 Energex",
    heading: "一間公司，一站式綜合能源解決方案。",
    body: "ENERGEX Global Solutions 定位為綜合能源解決方案平台，在整個能源項目生命週期內，為客戶提供單一的商業及技術對接窗口。",
    introExtended:
      "其角色可將項目開發、工程、全球採購、EPC 交付、融資支援、營運及長期資產管理，連結於同一交付框架之下。",
    operatingModel:
      "營運模式不受技術限制：Energex 會評估每項客戶需求，並圍繞項目需要，組合最合適的傳統發電、可再生能源、電池儲能、電網基建、LNG 及燃氣發電、分佈式能源、電動出行及數碼能源系統。Energex 以整合者身份運作，而非自行製造每項技術——專業原設備製造商（OEM）、EPC 承建商、工程公司、造船廠、技術供應商、金融機構、物流供應商及本地承建商可執行指定工作包，而 Energex 則保留客戶對接、項目整合、商業協調及整體交付框架。",
    cta: { label: "關於 Energex" },
  },
  solutionFamilies: [
    {
      title: "電力及發電",
      description: "發電、LNG 及燃氣發電，以及浮動式發電——為涵蓋完整組合的四個總覽類別之一。",
    },
    {
      title: "可再生能源及儲能",
      description: "可再生能源及電池儲能能力，歸納作總覽之用。",
    },
    {
      title: "電網及分佈式能源",
      description: "電網、農村電氣化、工業能源及電動出行能力。",
    },
    {
      title: "項目交付及生命週期",
      description: "項目開發、貿易、EPC、融資支援及營運及維護（O&M）——並以數碼能源作為跨領域層面。",
    },
  ],
  whyEnergex: {
    label: "為何選擇 ENERGEX",
    headingLead: "一個對接窗口，",
    headingAccent: "貫穿整個項目。",
    supporting:
      "以下是 Energex 可圍繞能源需求承擔責任的四種方式，描述公司可如何參與，並非已完成項目的紀錄。",
    pillars: [
      { title: "工程", body: "根據負荷、場地、燃料或資源，以及電網或工業接駁，界定技術配置。" },
      { title: "全球採購", body: "審核及協調 OEM 設備及供應方案，包括工廠審核、物流及清關支援。" },
      { title: "項目交付", body: "整合工程、採購及施工各介面，同時由 Energex 維繫客戶關係。" },
      { title: "生命週期支援", body: "規劃商業營運後的營運、維護、備用零件及表現跟進。" },
    ],
  },
  integratorModel: {
    label: "Energex 模式",
    headingLead: "一個夥伴，",
    headingAccent: "統籌每個環節。",
    supporting: "Energex 透過單一商業及技術對接窗口，協調每個項目所需的技術、合作夥伴及交付能力。",
    closing: "單一商業及技術對接窗口",
    closingLines: ["單一商業及", "技術對接窗口"],
    client: "客戶",
    partners: [
      { label: "工程" },
      { label: "OEM" },
      { label: "EPC" },
      { label: "融資" },
      { label: "物流" },
      { label: "本地夥伴" },
    ],
  },
  scale: {
    from: "1 MW",
    to: "1 GW+",
    label: "各種規模的電力。",
    supporting: "由分佈式能源系統以至公用事業規模的電力基建。",
  },
  deliveryRoles: [
    "項目開發",
    "技術／商業顧問",
    "設備供應",
    "EPC 整合",
    "主 EPC 承建商",
    "業主代表",
    "營運及維護（O&M）",
    "資產管理",
    "選擇性投資／共同開發",
  ],
  deliveryFlexibility: {
    label: "我們的參與方式",
    headingLead: "一個平台，",
    headingAccent: "圍繞項目而建。",
    supporting: "視乎項目規模、風險分配、牌照及商業結構，Energex 可在項目生命週期中擔任不同角色。",
    financingNote:
      "融資支援可包括 IPP／PPA、BOT／BOOT／BOO、租賃轉擁有及能源即服務（Energy-as-a-Service）的架構設計，以及投資者和貸款方協調——並在適當情況下選擇性參與 SPV。Energex 並非銀行。",
    cta: { label: "關於 Energex" },
    matrix: [
      { left: "項目開發", right: "EPC 整合" },
      { left: "顧問", right: "設備供應" },
      { left: "業主代表", right: "營運及維護" },
      { left: "資產管理", right: "融資支援" },
      { left: "主 EPC 承建商", right: "選擇性投資" },
    ],
  },
  digitalEnergy: {
    label: "數碼能源",
    headingLead: "能源。",
    headingAccent: "互聯。",
    supporting:
      "Energex 可在自有及受管理資產中逐步部署統一的數碼層——連接發電、儲能、電網及充電設施，以支援監測、預測性維護、預測、調度、計量、計費，以及在市場規則容許下的虛擬電廠（VPP）聚合。",
    layers: ["發電", "儲能", "電網", "充電"],
    capabilities: ["監測", "預判", "預測", "調度", "計量", "計費", "優化", "聚合"],
  },
  contactPage: {
    eyebrow: "聯絡我們",
    heading: "開展項目",
    supporting:
      "請告訴我們您的能源需求——用電需求、場地、燃料或可再生資源、時間表及商業目標。Energex 將協助制定合適的技術及商業路徑。",
    topics: [
      "發電、LNG 發電及浮動式發電",
      "可再生能源、BESS 及混合系統",
      "電網、微電網及農村電氣化",
      "工業自備電力及電動出行",
      "項目開發、EPC、採購及融資支援",
      "營運及維護、資產管理及數碼能源",
    ],
    formNote:
      "此表格僅供預覽。查詢傳送功能尚未連接，因此本頁不會以電郵傳送任何內容。直接電郵及電話聯絡方式將於確認後公佈。",
    formNoteLive:
      "提交此表格會將您的資料以電郵傳送至 ENERGEX 團隊，以便作出回覆。請勿填寫任何您不希望經電郵傳送的機密資料。",
  },
  contactClose: {
    label: "聯絡我們",
    heading: "項目及設備查詢。",
    body: "請選擇查詢途徑。兩者均會開啟本網站的頁面，主頁不會提交任何資料。",
    project: { label: "項目查詢" },
    equipment: { label: "設備查詢" },
  },
  approvedEvidence: [],
  evidenceSection: {
    label: "能力及證明",
    headingLead: "現時可以",
    headingAccent: "陳述的內容。",
    supporting: "能力及交付方法與項目證明分開列出。已完成項目、客戶及資歷只會在獲准公開後才會顯示。",
    empty: "目前尚未有任何項目、客戶、交付或資歷紀錄獲准公開。",
    strengthsLabel: "經核實的能力——並非已完成項目的聲明",
  },
  capabilityStrengths: [
    {
      title: "十五項專業能力",
      body: "項目開發、發電、可再生能源、儲能、電網、工業能源、採購、EPC、融資支援、營運，以及數碼層。",
    },
    { title: "電力設備供應", body: "國際貿易及採購，並提供技術資格審核及供應鏈管理。" },
    { title: "十階段交付框架", body: "由客戶需求以至測試、商業營運、監測及擴建。" },
    {
      title: "可配置的參與方式",
      body: "項目開發商、顧問、設備供應商、EPC 整合者、業主代表、營運商或資產管理人——按個別項目設定。",
    },
  ],
  projectsPage: {
    eyebrow: "項目經驗",
    heading: "經核實的項目案例正準備公開發佈。",
    body: "精選項目參考資料將於獲准公開披露後陸續發佈。Energex 不會虛構案例——項目資料將反映真實的委託、合作夥伴關係及營運中的資產。在此之前，歡迎瀏覽解決方案或與我們展開項目洽談。",
  },
  finalCta: {
    headingLead: "為未來",
    headingAccent: "注入動力。",
    heading: "為未來注入動力。",
    body: "由概念到營運，Energex 圍繞您的能源需要，匯聚所需的技術、合作夥伴及項目能力。",
    cta: { label: "開展項目" },
  },
  footer: {
    solutions: [
      { label: "電力及發電" },
      { label: "可再生能源及儲能" },
      { label: "電網及分佈式能源" },
      { label: "項目交付及生命週期" },
      { label: "電力設備供應" },
      { label: "全部能力" },
    ],
    delivery: [
      { label: "交付框架" },
      { label: "交付管控" },
      { label: "全球採購" },
      { label: "融資支援" },
      { label: "營運及維護與資產管理" },
      { label: "數碼能源" },
    ],
    company: [{ label: "關於我們" }, { label: "服務行業" }, { label: "聯絡我們" }],
  },
};

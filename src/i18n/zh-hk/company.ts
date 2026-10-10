import type { EnglishContent } from "../content";
import type { Translation } from "../translate";

/**
 * zh-HK delivery framework, market strategy, organization and commercial models.
 * Draft translation pending native-speaker and business review.
 */
export const companyZhHk: Translation<
  Pick<
    EnglishContent,
    | "brandLifecycle"
    | "deliveryFramework"
    | "deliveryControls"
    | "deliverableGroups"
    | "marketPhases"
    | "marketStrategySection"
    | "organizationFunctions"
    | "organizationSection"
    | "revenueModels"
    | "financingStructures"
    | "financingNote"
    | "visionMission"
  >
> = {
  brandLifecycle: [
    { title: "開發", description: "需求、可行性及項目架構。" },
    { title: "設計", description: "工程及技術配置。" },
    { title: "融資", description: "商業架構及融資支援。" },
    { title: "採購", description: "OEM 選擇及全球採購。" },
    { title: "建造", description: "EPC 協調、施工及調試。" },
    { title: "營運", description: "營運、維護及監測。" },
    { title: "優化", description: "表現提升、擴建及更新改造。" },
  ],
  deliveryFramework: [
    { title: "客戶需求", description: "界定用電需求、可靠性、電價、時間表及場地限制。" },
    { title: "技術評估", description: "評估負荷、場地、燃料、電網及可再生資源。" },
    { title: "方案工程", description: "選擇及配置最佳技術組合。" },
    { title: "商業架構", description: "確立 CAPEX、OPEX、LCOE、合約及融資架構。" },
    { title: "OEM／EPC 採購", description: "與合資格夥伴進行技術及商業採購。" },
    { title: "工程及施工", description: "管理設計、採購、施工及各介面。" },
    { title: "測試及調試", description: "核實安全、性能及合約保證。" },
    { title: "商業營運", description: "移交或展開長期營運階段。" },
    { title: "營運、維護及監測", description: "優化可用率、效率及生命週期表現。" },
    { title: "擴建／更新改造", description: "隨需求變化增加容量、儲能或升級技術。" },
  ],
  deliveryControls: [
    { title: "管治", description: "針對個別項目的管治安排，訂明決策權、匯報及上報程序。" },
    { title: "HSE", description: "正式的 HSE 要求及承建商合規管理。" },
    { title: "供應商資格審核", description: "供應商預審及有文件記錄的技術／商業評估。" },
    { title: "QA/QC", description: "涵蓋製造、FAT、付運、安裝及調試的 QA/QC 計劃。" },
    { title: "合約風險", description: "涵蓋時間表、性能、保養、違約賠償金及介面的風險分配。" },
    { title: "合規", description: "適用的本地法律、許可證、電網規範及認可的國際技術標準。" },
    { title: "項目風險", description: "按項目評估保險、物流、匯率、燃料供應、政治及交易對手風險。" },
  ],
  deliverableGroups: [
    {
      title: "項目開發／顧問",
      items: [
        "用電需求及負荷評估",
        "場地／資源篩選",
        "預可行性及可行性研究協調",
        "CAPEX／OPEX／LCOE 模型",
        "商業／PPA 架構",
        "融資可行性及風險評估",
      ],
    },
    {
      title: "工程／技術",
      items: [
        "技術配置",
        "概念／基本設計協調",
        "電網／併網研究",
        "電廠輔助設施（BOP）界定",
        "技術規格及招標文件",
        "透過合作夥伴管理詳細設計",
      ],
    },
    {
      title: "採購／供應鏈",
      items: [
        "OEM 預審及評估",
        "商業談判",
        "工廠審核及檢驗",
        "設備及備用零件供應",
        "物流及清關協調",
        "供應商文件及保養協調",
      ],
    },
    {
      title: "EPC／交付",
      items: [
        "施工規劃及承建商協調",
        "時間表、成本及文件的項目管控",
        "QA/QC 及 HSE 管理",
        "FAT／SAT",
        "調試及性能測試",
        "移交及介面管理",
      ],
    },
    {
      title: "營運／生命週期",
      items: [
        "預防性／糾正性維護",
        "遙距監測及報告",
        "備用零件規劃",
        "保養／OEM 服務協調",
        "大修／修復規劃",
        "可用率及生命週期成本優化",
      ],
    },
    {
      title: "數碼／商業",
      items: [
        "能源及資產儀表板",
        "計量、計費及收入監測",
        "預測及調度支援",
        "車隊充電／網絡管理",
        "能源服務及經常性合約架構",
      ],
    },
  ],
  marketPhases: [
    {
      phase: "第一階段",
      title: "非洲及中東",
      description: "優先市場：電力短缺、工業增長、具信譽的購電方、可取得的燃料或資源，以及可行的融資途徑。",
    },
    {
      phase: "第二階段",
      title: "更廣泛的新興市場",
      description: "透過針對個別項目的合作夥伴關係及本地代表，拓展至東南亞、中亞、拉丁美洲及印度洋市場。",
    },
    {
      phase: "第三階段",
      title: "多區域平台",
      description: "隨時間建立橫跨多個司法管轄區的多元化組合，涵蓋項目開發、EPC、服務及自有能源資產。",
    },
  ],
  marketStrategySection: {
    label: "市場策略",
    headingLead: "為",
    headingAccent: "全球能源市場而建。",
  },
  organizationFunctions: [
    { title: "董事會／行政領導", description: "策略、投資審批、管治及主要合作夥伴關係。" },
    { title: "業務發展", description: "業務開拓、客戶管理及市場拓展。" },
    { title: "工程及解決方案", description: "系統設計、技術盡職審查及技術選型。" },
    { title: "項目／EPC", description: "項目管控、採購、施工及調試。" },
    { title: "供應鏈及貿易", description: "OEM 管理、商業談判、檢驗及物流。" },
    { title: "財務及投資", description: "財務模型、融資、SPV 架構及投資者關係。" },
    { title: "營運及維護／資產管理", description: "營運表現及生命週期服務。" },
    { title: "法律、合規及 HSE", description: "合約、監管合規、道德操守、質量及安全。" },
  ],
  organizationSection: {
    label: "組織",
    headingLead: "組織及",
    headingAccent: "主要職能。",
    supporting: "支援業務開拓、交付、貿易、財務及生命週期服務的職能能力。",
  },
  revenueModels: [
    { stream: "項目開發及顧問", mechanism: "可行性研究、開發及架構設計費用", character: "按項目" },
    { stream: "貿易及採購", mechanism: "設備及供應鏈利潤", character: "交易性質" },
    { stream: "EPC 及整合", mechanism: "工程、採購及施工利潤", character: "按項目" },
    { stream: "營運及維護與資產管理", mechanism: "長期服務合約", character: "經常性" },
    { stream: "能源服務", mechanism: "充電、微電網及基建費用", character: "經常性" },
    { stream: "IPP／PPA 收入", mechanism: "自有或共同擁有資產的售電收入", character: "長期經常性" },
    { stream: "投資回報", mechanism: "SPV 分派及價值實現", character: "按投資組合" },
  ],
  financingStructures: [
    "EPC + 融資",
    "IPP／長期 PPA",
    "BOT／BOOT／BOO",
    "租賃轉擁有",
    "能源即服務",
    "設備融資／賣方信貸協調",
  ],
  financingNote:
    "Energex 支援項目架構設計及投資者／貸款方協調——包括 IPP／PPA、BOT／BOOT／BOO、租賃轉擁有及能源即服務模式——並可透過項目 SPV 選擇性參與。Energex 並非銀行，亦不會自動為客戶項目提供融資。",
  visionMission: {
    vision: {
      title: "願景",
      body: "成為領先的綜合能源解決方案平台，將世界級的技術、資本及執行能力，與新興市場日益增長的能源需要連結起來。",
    },
    mission: {
      title: "使命",
      body: "為客戶的能源需要提供單一責任窗口——由識別問題，以至交付及維護營運中的資產。",
    },
  },
};

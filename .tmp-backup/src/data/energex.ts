/** Energex Global Solutions — source-backed site content (Scope of Work). */

export const brand = {
  name: "ENERGEX GLOBAL SOLUTIONS",
  shortName: "ENERGEX",
  taglinePrimary: "ONE PARTNER. EVERY ENERGY SOLUTION.",
  taglineSecondary: "FROM CONCEPT TO POWER.",
  taglineCorporate: "ONE COMPANY. ONE INTEGRATED ENERGY SOLUTION.",
  addressLines: ["18 Harbour Road", "Wan Chai", "Hong Kong"] as const,
  registration: "59818014-000-05-26-5",
  natureOfBusiness: "Trading",
  logoLight: "/assets/energex/logo-cropped.png",
  logoDark: "/assets/energex/logo-on-dark-cropped.png",
};

export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const navCta = { href: "/contact", label: "Start a Project" } as const;

export const hero = {
  eyebrow: "Integrated Energy Solutions",
  headlineLead: "One Partner.",
  headlineAccent: "Every Energy Solution.",
  supporting: "From Concept to Power.",
  body: "From project development and engineering to procurement, delivery and long-term operations, Energex coordinates integrated energy solutions around each project's needs.",
  primaryCta: { href: "/solutions", label: "Explore Solutions" },
  secondaryCta: { href: "/contact", label: "Start a Project" },
};

export const about = {
  eyebrow: "About Energex",
  heading: "One Company. One Integrated Energy Solution.",
  body: "ENERGEX Global Solutions provides clients with a single commercial and technical interface across the full energy project lifecycle. From development and engineering to global procurement, EPC delivery, financing support, operations and long-term asset management, Energex coordinates the technologies and partners required around each project's needs.",
  cta: { href: "/about", label: "About Energex" },
};

export const solutionFamilies = [
  {
    href: "/solutions",
    title: "Power & Generation",
    description: "Power generation, LNG & gas-to-power, and floating power solutions.",
    imgSrc: "/assets/energex/power.webp",
    srcSet: "/assets/energex/power.webp 800w",
  },
  {
    href: "/solutions",
    title: "Renewables & Storage",
    description: "Renewable energy systems and battery energy storage for flexible supply.",
    imgSrc: "/assets/energex/renewables.webp",
    srcSet: "/assets/energex/renewables.webp 800w",
  },
  {
    href: "/solutions",
    title: "Grid & Distributed Energy",
    description: "Grid infrastructure, rural electrification, distributed energy and e-mobility.",
    imgSrc: "/assets/energex/grid.webp",
    srcSet: "/assets/energex/grid.webp 800w",
  },
  {
    href: "/solutions",
    title: "Project Delivery & Lifecycle",
    description: "Development, procurement, EPC, financing support, O&M and digital energy.",
    imgSrc: "/assets/energex/investment.webp",
    srcSet: "/assets/energex/investment.webp 800w",
  },
] as const;

export const capabilities = [
  {
    id: "01",
    title: "Project Development & Advisory",
    description:
      "Demand and site assessment, feasibility coordination, technology selection, commercial structuring and bankability support.",
  },
  {
    id: "02",
    title: "Power Generation",
    description:
      "Gas, dual-fuel, diesel/LFO/HFO, CCGT, CHP, modular plants and rehabilitation across distributed to utility scale.",
  },
  {
    id: "03",
    title: "Renewable Energy",
    description:
      "Utility and C&I solar, wind, CSP and hybrid renewable configurations shaped by resource and grid conditions.",
  },
  {
    id: "04",
    title: "Battery Energy Storage Systems",
    description:
      "BESS for grid support, peak management, renewable integration, backup and microgrid operation.",
  },
  {
    id: "05",
    title: "LNG, Natural Gas & Gas-to-Power",
    description:
      "Receiving, storage, regasification, pipelines and integrated fuel-to-power systems.",
  },
  {
    id: "06",
    title: "Floating Power Solutions",
    description:
      "Floating and modular generation options where coastal or rapid-deployment conditions require them.",
  },
  {
    id: "07",
    title: "Grid, Transmission & Distribution",
    description:
      "Substations, T&D networks, protection, metering, SCADA and interconnection support.",
  },
  {
    id: "08",
    title: "Rural Electrification & Distributed Energy",
    description:
      "Mini-grids, community energy, productive-use electricity and distributed hybrid systems.",
  },
  {
    id: "09",
    title: "Industrial Energy Solutions",
    description:
      "Captive and hybrid power, efficiency measures and high-availability supply for industrial loads.",
  },
  {
    id: "10",
    title: "E-Mobility & Charging Infrastructure",
    description:
      "AC, DC fast and ultra-fast charging, fleet depots, hubs, solar + BESS charging and charging management.",
  },
  {
    id: "11",
    title: "Equipment Trading & Global Procurement",
    description:
      "Qualified OEM sourcing, technical evaluation, logistics and coordinated equipment supply.",
  },
  {
    id: "12",
    title: "EPC & Project Management",
    description:
      "Engineering coordination, procurement, construction interfaces, testing and handover.",
  },
  {
    id: "13",
    title: "Financing & Investment Solutions",
    description:
      "Project structuring, investor and lender coordination, and selective participation through project SPVs where appropriate.",
  },
  {
    id: "14",
    title: "Operations, Maintenance & Asset Management",
    description:
      "O&M planning, monitoring, warranty coordination and long-term asset performance support.",
  },
  {
    id: "15",
    title: "Digital Energy Platform",
    description:
      "Progressive digital layers to monitor, predict, forecast, dispatch, meter, bill, optimize and aggregate energy assets.",
  },
] as const;

export const whySlides = [
  {
    title: "One Integrated Interface",
    description: "One commercial and technical interface across the project lifecycle.",
  },
  {
    title: "Technology Agnostic",
    description: "Solutions configured around project requirements rather than a single technology.",
  },
  {
    title: "Global Sourcing",
    description: "Qualified OEMs, engineering partners and supply-chain coordination.",
  },
  {
    title: "Flexible Delivery",
    description:
      "Developer, advisor, supplier, EPC integrator, owner's representative, operator or asset manager depending on the project.",
  },
  {
    title: "Lifecycle Focus",
    description:
      "From initial requirement through commercial operation, monitoring, optimization and expansion.",
  },
] as const;

export const lifecycle = [
  { title: "Develop", description: "Define demand, assess the site and shape the project opportunity." },
  { title: "Design", description: "Configure the technology mix around load, fuel, resources and grid access." },
  { title: "Finance", description: "Support structuring, modeling and investor/lender coordination." },
  { title: "Source", description: "Qualify equipment and suppliers around project requirements." },
  { title: "Build", description: "Coordinate engineering, procurement, construction and interfaces." },
  { title: "Operate", description: "Plan handover, maintenance and operating-phase support." },
  { title: "Optimize", description: "Improve availability, efficiency and long-term asset performance." },
] as const;

export const deliveryFramework = [
  { id: "01", title: "Client Requirement", description: "Define demand, reliability, tariff, schedule and site constraints." },
  { id: "02", title: "Technical Assessment", description: "Assess load, site, fuel, grid and renewable resources." },
  { id: "03", title: "Solution Engineering", description: "Select and configure the optimal technology mix." },
  { id: "04", title: "Commercial Structuring", description: "Establish CAPEX, OPEX, LCOE, contracting and financing structure." },
  { id: "05", title: "OEM / EPC Procurement", description: "Run technical and commercial sourcing with qualified partners." },
  { id: "06", title: "Engineering & Construction", description: "Manage design, procurement, construction and interfaces." },
  { id: "07", title: "Testing & Commissioning", description: "Verify safety, performance and contractual guarantees." },
  { id: "08", title: "Commercial Operation", description: "Handover or commence the long-term operating phase." },
  { id: "09", title: "O&M & Monitoring", description: "Optimize availability, efficiency and lifecycle performance." },
  { id: "10", title: "Expansion / Repowering", description: "Add capacity, storage or technology upgrades as demand evolves." },
] as const;

export const scale = {
  from: "1 MW",
  to: "1 GW+",
  label: "Power at Every Scale",
  supporting: "From distributed generation to utility-scale power plants.",
};

export const industries = [
  {
    title: "Governments & Utilities",
    need: "Generation capacity, grid stability and electrification.",
    response: "IPP / EPC / BESS / grid solutions.",
  },
  {
    title: "Independent Power Producers",
    need: "Development and execution.",
    response: "Engineering, sourcing and EPC integration.",
  },
  {
    title: "Mining & Heavy Industry",
    need: "Reliable captive power.",
    response: "Hybrid generation and storage.",
  },
  {
    title: "Industrial Parks & Data Centers",
    need: "High-availability energy.",
    response: "Integrated utility infrastructure.",
  },
  {
    title: "Oil & Gas / LNG",
    need: "Fuel and power infrastructure.",
    response: "LNG-to-power and gas systems.",
  },
  {
    title: "Commercial & Real Estate",
    need: "Cost reduction and resilience.",
    response: "C&I solar, BESS and EMS.",
  },
  {
    title: "Fleet Operators",
    need: "Charging capacity.",
    response: "Charging hubs and software.",
  },
  {
    title: "Development Institutions",
    need: "Energy access and climate impact.",
    response: "Mini-grids and distributed energy.",
  },
] as const;

export const deliveryRoles = [
  "Project Developer",
  "Technical / Commercial Advisor",
  "Equipment Supplier",
  "EPC Integrator",
  "Prime EPC Contractor",
  "Owner's Representative",
  "O&M Provider",
  "Asset Manager",
  "Selective Investor / Co-Developer",
] as const;

export const faq = [
  {
    title: "What does ENERGEX Global Solutions do?",
    description:
      "Energex is an integrated energy solutions platform providing clients with a single commercial and technical interface across development, engineering, procurement, EPC delivery, financing support, operations and long-term asset management.",
  },
  {
    title: "How does Energex deliver energy projects?",
    description:
      "Energex acts as integrator: specialist OEMs, EPC contractors, engineering firms and other partners may execute defined packages while Energex retains the client interface, project integration and commercial coordination.",
  },
  {
    title: "Does Energex work with both conventional and renewable energy?",
    description:
      "Yes. The operating model is technology-agnostic. Conventional generation, renewables, storage, grid infrastructure, LNG and gas-to-power, distributed energy, e-mobility and digital systems are configured around each project's needs.",
  },
  {
    title: "Can Energex support project financing?",
    description:
      "Energex supports project structuring and investor/lender coordination and may selectively participate through project SPVs. Energex does not automatically finance client projects and is not a bank.",
  },
  {
    title: "Does Energex provide operations and maintenance?",
    description:
      "Yes. Depending on the commercial model, Energex can support O&M, monitoring, warranty coordination and long-term asset management through the operating phase.",
  },
  {
    title: "What types of clients does Energex work with?",
    description:
      "Governments and utilities, independent power producers, mining and heavy industry, industrial parks and data centers, oil & gas / LNG, commercial and real estate, fleet operators, and development institutions.",
  },
] as const;

export const marketPhases = [
  {
    phase: "Phase I",
    title: "Africa & Middle East",
    description: "Priority markets with power deficits, industrial growth and viable financing pathways.",
  },
  {
    phase: "Phase II",
    title: "Wider Emerging Markets",
    description: "Expansion through project-specific partnerships and local representation.",
  },
  {
    phase: "Phase III",
    title: "Multi-Regional Platform",
    description: "A diversified platform across multiple jurisdictions over time.",
  },
] as const;

export const finalCta = {
  heading: "Ready to Power What's Next?",
  body: "From concept to operation, Energex coordinates integrated energy solutions around your project requirements.",
  cta: { href: "/contact", label: "Start a Project" },
};

export const footer = {
  solutions: [
    { href: "/solutions", label: "Power Generation" },
    { href: "/solutions", label: "Renewable Energy" },
    { href: "/solutions", label: "Energy Storage" },
    { href: "/solutions", label: "LNG & Gas-to-Power" },
    { href: "/solutions", label: "Grid Infrastructure" },
    { href: "/solutions", label: "Industrial Energy" },
    { href: "/solutions", label: "E-Mobility" },
  ],
  delivery: [
    { href: "/about", label: "Development & Advisory" },
    { href: "/about", label: "EPC & Project Management" },
    { href: "/solutions", label: "Global Procurement" },
    { href: "/solutions", label: "Financing Support" },
    { href: "/solutions", label: "O&M & Asset Management" },
    { href: "/solutions", label: "Digital Energy" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/industries", label: "Industries" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
};

export const digitalEnergyCapabilities = [
  "Monitor",
  "Predict",
  "Forecast",
  "Dispatch",
  "Meter",
  "Bill",
  "Optimize",
  "Aggregate",
] as const;

/**
 * Page copy for the refreshed About, Solutions, Equipment, Industries and
 * Contact layouts (design reference exports). Lists that already exist
 * elsewhere (capabilities, customers, equipment categories, delivery stages,
 * roles, controls, market phases) are reused from their own modules.
 *
 * `*text*` marks the italic accent phrase inside a heading.
 * `number` values are display figures and stay identical in every locale.
 */

export const pageCopy = {
  chrome: {
    footerTagline: "From concept to *power.*",
  },

  about: {
    heroEyebrow: "About Energex",
    heroTitle: "One company. One integrated *energy solution.*",
    heroLead:
      "An integrated energy solutions platform — one commercial and technical interface across the full project lifecycle.",
    whoEyebrow: "01 — Who we are",
    whoTitle:
      "Development, engineering, procurement, EPC, financing, operations and asset management — *under one delivery framework.*",
    missionLabel: "Our mission",
    mission:
      "A single point of responsibility for our clients' energy needs — from identifying the problem to delivering and maintaining the operating asset.",
    whoImgAlt: "Engineers and a client reviewing project drawings together",
    journey: ["Concept", "Delivery", "Operating asset"],
    operateEyebrow: "02 — How we operate",
    operateTitle: "Three principles. *No compromises.*",
    principles: [
      {
        title: "Technology-agnostic",
        description:
          "Each requirement is assessed on its own terms. Generation, renewables, storage, grid, LNG, distributed energy, e-mobility and digital — combined around the project.",
      },
      {
        title: "Integrator, not manufacturer",
        description:
          "Specialist OEMs, EPC contractors, engineers, shipyards, technology providers, financiers, logistics firms and local contractors execute defined packages.",
      },
      {
        title: "One accountable interface",
        description:
          "Energex keeps the client interface, project integration, commercial coordination and the overall delivery framework.",
      },
    ],
    rolesLabel: "Ways to participate — set per project",
    deliveryEyebrow: "03 — Our delivery approach",
    deliveryTitle: "Define. Structure. Deliver. *Evolve.*",
    controlsLabel: "Delivery controls",
    visionEyebrow: "04 — Our global vision",
    visionStatement:
      "To become a leading integrated energy platform connecting technology, capital and execution with the *growing energy needs of emerging markets.*",
    phaseImages: [
      { imgSrc: "/assets/energex/vision-dar-es-salaam.jpg", imgAlt: "Aerial view of the harbour in Dar es Salaam, Tanzania" },
      { imgSrc: "/assets/energex/container-ship-aerial.jpg", imgAlt: "Aerial view of a container ship at sea" },
      { imgSrc: "/assets/energex/city-night.jpg", imgAlt: "City lights at night seen from above" },
    ],
    ctaTitle: "Let's power *what's next.*",
    ctaSecondary: "Explore all capabilities",
  },

  solutions: {
    heroEyebrow: "Solutions · 15 capabilities",
    heroTitle: "Complete energy solutions, from concept to *power.*",
    heroLead:
      "Fifteen specialist capabilities under one integrator — generation, storage, grid and delivery behind a single client interface.",
    heroSecondary: "Explore capabilities",
    marquee: [
      "Power Generation",
      "LNG & Gas-to-Power",
      "Floating Power",
      "Renewables",
      "Battery Storage",
      "Grid & Transmission",
      "Mini-Grids",
      "E-Mobility",
      "EPC",
      "Financing",
      "O&M",
      "Digital Energy",
    ],
    stats: [
      { number: "15", label: "Specialist capabilities" },
      { number: "05", label: "Solution families" },
      { number: "10", label: "Stage delivery framework" },
      { number: "01", label: "Partner, concept to operation" },
    ],
    familiesEyebrow: "01 — Our solutions",
    familiesTitle: "Five families. *One* integrated partner.",
    familiesIntro:
      "How we group the work. Underneath sits the full portfolio, assembled around each project's requirement.",
    families: [
      {
        label: "Power & Generation",
        title: "Gas, LNG-to-power and floating power.",
        href: "/solutions/power-generation",
        imgSrc: "/assets/energex/fam-power.jpg",
        imgAlt: "Gas processing plant with engineers on site",
      },
      {
        label: "Renewables & Storage",
        title: "Renewable energy and battery storage.",
        href: "/solutions/renewables-storage",
        imgSrc: "/assets/energex/fam-renew.jpg",
        imgAlt: "Solar farm with inverter and battery enclosures",
      },
      {
        label: "Grid & Distributed",
        title: "Grid, electrification and e-mobility.",
        href: "/solutions/grid-distributed-energy",
        imgSrc: "/assets/energex/fam-grid.jpg",
        imgAlt: "High-voltage transmission towers at dusk",
      },
      {
        label: "Delivery & Lifecycle",
        title: "Development, EPC, financing and O&M.",
        href: "/solutions/project-delivery-lifecycle",
        imgSrc: "/assets/energex/fam-delivery.jpg",
        imgAlt: "Engineer in protective gear at an industrial facility",
      },
      {
        label: "Equipment Supply",
        title: "Qualified equipment, sourced worldwide.",
        href: "/equipment",
        imgSrc: "/assets/energex/fam-equip.jpg",
        imgAlt: "High-voltage electrical equipment and insulators",
      },
    ],
    capTag: "Cap {ids}",
    learnMore: "Learn more",
    whyEyebrow: "02 — Why Energex",
    whyStatement:
      "One interface across the work — engineering, sourcing, delivery and lifecycle support, *from the first requirement through operations.*",
    pillars: [
      { title: "Engineering", description: "Technical configuration around load, site, fuel or resource, and connection." },
      { title: "Global Sourcing", description: "OEM qualification, factory audits, logistics and customs support." },
      { title: "Project Delivery", description: "EPC interfaces integrated while Energex keeps the client relationship." },
      { title: "Lifecycle Support", description: "Operations, maintenance, spare parts and performance follow-through." },
    ],
    portfolioEyebrow: "03 — Full portfolio",
    portfolioTitle: "Fifteen capabilities, *configured* per project.",
    filterLabel: "Filter by solution family",
    filterAll: "All 15",
    capabilityLabel: "Capability {id} · {family}",
    discuss: "Discuss this capability",
    familyPage: "View solution family",
    digitalEyebrow: "04 — Digital energy platform",
    digitalTitle: "Energy. *Connected.*",
    digitalBody:
      "A unified digital layer, deployed progressively across owned and managed assets — linking generation, storage, grid and charging. VPP aggregation where market rules allow.",
    lifecycleEyebrow: "05 — How capabilities connect",
    lifecycleTitle: "From concept *to power*, in seven moves.",
    ctaEyebrow: "Partner with us",
    ctaTitle: "Ready to shape your *energy project?*",
  },

  equipment: {
    heroEyebrow: "Power equipment supply",
    heroChips: ["Sourcing support", "OEM evaluation & factory audit"],
    heroTitle: "Powering projects with the right *equipment.*",
    heroLead:
      "Sourcing and procurement coordinated for generation, energy storage and grid infrastructure projects — from requirement to site.",
    requestQuote: "Request a Quote",
    browse: "Browse categories",
    categoriesEyebrow: "01 — Equipment categories",
    categoriesTitle: "Seven categories. *One* procurement partner.",
    categoriesNote:
      "Not a stocked catalogue. Manufacturers, specifications, prices, certifications, warranties and availability are confirmed per project.",
    categoriesLabel: "Equipment categories",
    featured: "Featured category",
    categoryOf: "Category {current} of {total}",
    viewCategory: "Category details",
    processEyebrow: "02 — Procurement process",
    processTitle: "From requirement *to site.*",
    processNote: "These are sourcing activities — not certifications or warranties.",
    process: [
      {
        description: "Manufacturers assessed against the project requirement as part of technical qualification.",
        imgSrc: "/assets/energex/fam-equip.jpg",
        imgAlt: "High-voltage equipment under evaluation",
      },
      {
        description: "On-site review of the manufacturing facility before order.",
        imgSrc: "/assets/energex/factory-audit.jpg",
        imgAlt: "High-voltage switchgear inside a manufacturing hall",
      },
      {
        description: "Coordinating transport from factory to project site.",
        imgSrc: "/assets/energex/container-ship-aerial.jpg",
        imgAlt: "Container ship seen from above",
      },
      {
        description: "Support with import clearance at the destination.",
        imgSrc: "/assets/energex/port-cranes.jpg",
        imgAlt: "Container port with cranes",
      },
    ],
    ctaEyebrow: "Equipment inquiries",
    ctaTitle: "Tell us what you need *on site.*",
  },

  industries: {
    heroEyebrow: "Industries · Who we serve",
    heroTitle: "Energy for every *industry.*",
    heroLead:
      "Tailored solutions for utilities, power producers and industrial operators — built around each energy requirement.",
    stats: [
      { number: "08", label: "Segments served" },
      { number: "06", label: "Focus areas" },
    ],
    segmentsEyebrow: "01 — Segments",
    segmentsTitle: "Built around the *energy requirement.*",
    segmentsIntro: "Choose a segment to see the need, our response and the services we bring.",
    segmentsLabel: "Industries",
    segmentOf: "Segment {current} of {total}",
    need: "The need",
    response: "Our response",
    discuss: "Discuss a project",
    explore: "Explore all capabilities",
    segmentAlts: [
      "Transmission pylons crossing open countryside",
      "Power plant under a lightning storm",
      "Aerial view of a haul road through an open-pit mine",
      "Server hardware in a data center",
      "LNG carrier at sea at sunset",
      "Commercial campus with rooftop solar",
      "Electric vehicle charging station",
      "Solar panels powering a rural homestead",
    ],
    focusEyebrow: "02 — Industrial focus areas",
    focusTitle: "Six verticals where power *can't fail.*",
    verticals: [
      { imgSrc: "/assets/energex/vert-mining.jpg", imgAlt: "Aerial view of an open-pit mining operation" },
      { imgSrc: "/assets/energex/vert-cement.jpg", imgAlt: "Cement plant illuminated at night" },
      { imgSrc: "/assets/energex/vert-industrial-park.jpg", imgAlt: "Aerial view of an industrial logistics park" },
      { imgSrc: "/assets/energex/vert-datacenter.jpg", imgAlt: "Server racks in a data center" },
      { imgSrc: "/assets/energex/vert-ports.jpg", imgAlt: "Container port cranes at sunset" },
      { imgSrc: "/assets/energex/ind-comm.jpg", imgAlt: "Aerial view of rooftop solar on industrial buildings" },
    ],
    commercialDescription: "Rooftop and carport solar, peak shaving and backup storage, energy management.",
    ctaEyebrow: "Partner with us",
    ctaTitle: "Let's power *what's next.*",
  },

  contact: {
    heroEyebrow: "Contact · Start a project",
    heroTitle: "Tell us what you need to *power.*",
    heroLead:
      "Share your demand, site, fuel or renewable resource, schedule and commercial goals. One team takes it from there.",
    formTitle: "Start your *inquiry.*",
    hqLabel: "Headquarters",
    hqImgAlt: "Energex engineer on site",
    topicsLabel: "Typical inquiries",
    topics: [
      "Generation & LNG-to-power",
      "Floating power",
      "Renewables & BESS",
      "Grid & mini-grids",
      "Captive power",
      "E-mobility",
      "EPC & procurement",
      "Financing support",
      "O&M & digital energy",
    ],
  },
} as const;

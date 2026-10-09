/**
 * English interface text that lives in components rather than in `src/data/`.
 * Business content stays in `src/data/energex*`. Placeholders use `{name}` and
 * are filled with `formatText`. Every locale must provide the same shape.
 */
export const uiEn = {
  meta: {
    siteDescription:
      "ENERGEX Global Solutions — one partner across integrated energy development, delivery, operations, and digital energy. From concept to power.",
    home: {
      title: "ENERGEX",
      description:
        "ENERGEX Global Solutions — one partner across integrated energy development, delivery, operations, and digital energy. From concept to power.",
    },
    about: {
      title: "About",
      description:
        "ENERGEX operating model, project delivery framework, delivery controls, market strategy, organization and responsibility framework.",
    },
    solutions: {
      title: "Solutions",
      description:
        "Complete ENERGEX capability portfolio — fifteen specialist areas from development and generation through grid, industrial energy, financing support, O&M and digital energy.",
    },
    industries: {
      title: "Industries",
      description:
        "ENERGEX target customers — governments, IPPs, mining, industrial parks, oil & gas, commercial real estate, fleet operators and development institutions.",
    },
    equipment: {
      title: "Power Equipment Supply",
      description:
        "ENERGEX equipment trading and global procurement scope — generation, solar and storage, transmission and distribution, charging controls, LNG and cryogenic systems, and spare parts.",
    },
    equipmentCategory: {
      description: "{description} International trading and procurement scope only — not a stocked catalogue.",
    },
    contact: {
      title: "Contact",
      description:
        "Contact ENERGEX Global Solutions in Hong Kong to discuss power, renewables, storage, grid, LNG and project delivery requirements.",
    },
    projects: {
      title: "Projects",
      description:
        "Selected ENERGEX Global Solutions project references will be published as cleared for disclosure.",
    },
    privacy: { title: "Privacy", description: "Privacy policy placeholder for ENERGEX Global Solutions." },
    terms: { title: "Terms", description: "Terms of use placeholder for ENERGEX Global Solutions." },
    notFound: { title: "Page not found" },
  },
  chrome: {
    mainNav: "Main",
    mobileNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Switch language to {language}",
    footerSolutions: "Solutions",
    footerDelivery: "Delivery",
    footerCompany: "Company",
    registrationShort: "Reg. {registration}",
    registration: "Registration No. {registration}",
    rights: "© {year} {name}. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    home: "Home",
    navigation: "Navigation",
    solutions: "Solutions",
    corporateLead: "Corporate ",
    corporateAccent: "address",
    startProjectArrow: "Start a Project →",
  },
  carousel: {
    previous: "Previous",
    next: "Next",
    showing: "Showing {first} to {last} of {count}",
  },
  home: {
    heroLabel: "Hero",
    solutionsCarousel: "Energy solutions and equipment supply",
    solutionsEyebrow: "Energy Solutions",
    solutionsHeadingLead: "What We ",
    solutionsHeadingAccent: "Deliver",
    exploreAllCapabilities: "Explore All Capabilities",
    explore: "Explore",
    industriesCarousel: "Customer segments",
    industryDetails: "Industry details",
    evidenceApproved: "Approved records",
    evidencePublished: "Published project evidence",
  },
  about: {
    operatingModel: "Operating model",
    brandLifecycle: "Brand lifecycle",
    coordinationInterfaces: "Coordination interfaces",
    partnerNote: "The labels below are a simplified view of partner types. They are not a reporting hierarchy.",
    scaleNote:
      "This is a configured range for the systems Energex can coordinate. It is not a list of completed projects or installed capacity.",
    rolesHeading: "How the scope is applied",
    rolesIntro:
      "Depending on project scale, risk allocation, licensing and commercial structure, Energex may participate in different roles.",
    deliveryHeading: "Project delivery framework",
    deliverySource: "Source: Scope of Work §17 — from client requirement through expansion / repowering.",
    controlsHeading: "Delivery controls",
    controlsIntro: "Discipline at every stage — governance, quality, HSE and risk.",
    marketsAria: "Strategic market phases",
    marketPhase1: "Phase I",
    marketPhase1Title: "Africa & Middle East",
    marketPhase1Note: "Priority focus",
    marketPhase2: "Phase II",
    marketPhase2Title: "Wider emerging markets",
    marketPhase2Note: "Partnership expansion",
    marketPhase3: "Phase III",
    marketPhase3Title: "Multi-regional platform",
    marketPhase3Note: "Ambition over time",
    deliverablesHeading: "Deliverables across the project lifecycle",
    deliverablesIntro: "Typical outputs Energex can coordinate — scoped project by project into a statement of work.",
    commercialHeading: "Commercial models",
    revenueStream: "Revenue stream",
    mechanism: "Mechanism",
    character: "Character",
    exploreAllCapabilities: "Explore All Capabilities",
  },
  industries: {
    primaryNeed: "Primary need",
    response: "Energex response",
    focusHeading: "Industrial focus areas",
    focusIntro:
      "Within industrial energy (Scope of Work §10), solutions are configured around operating verticals — not additional primary customer segments.",
    exploreAllCapabilities: "Explore All Capabilities",
  },
  solutions: {
    heroLabel: "Solutions hero",
    physicalLayers: "Physical layers: {items}",
    digitalActions: "Digital actions: {items}",
    brandLifecycle:
      "Brand lifecycle: {stages} — assembled through the documented project delivery framework on About.",
    portfolioEyebrow: "Full portfolio",
    portfolioHeading: "Fifteen specialist capabilities",
    capabilitiesList: "Capabilities",
    crossCutting: "Cross-cutting",
    belongsTo: "Belongs to",
    viewAllCapabilities: "View all capabilities →",
    familyLink: "{family} →",
  },
  solutionDetail: {
    eyebrow: "Solutions",
    heroLabel: "Solution hero",
    introduction: "Introduction",
    whatWeDeliver: "What We Deliver",
    ourApproach: "Our Approach",
    digitalLayerLabel: "Digital layer",
    crossCutting: "Cross-cutting",
    digitalLayer: "Digital Layer",
    digitalNote:
      "Not a family-exclusive capability — can integrate across generation, renewables, grid, charging and lifecycle packages.",
    builtFor: "Built For",
    viewAllCapabilities: "View all capabilities →",
    previousSolution: "Previous solution",
    nextSolution: "Next solution",
    adjacentSolutions: "Adjacent solutions",
    showLess: "Show less",
    showMore: "Show {count} more",
  },
  equipment: {
    requestQuote: "Request a Quote",
    quoteHint: "Opens the equipment inquiry with this category selected. Nothing is sent from this page.",
    categoryIntro:
      "Equipment Trading & Global Procurement covers international trading and procurement with technical qualification and supply-chain management. The types below are the verified supply scope for this category.",
    typesHeading: "Equipment types",
    procurementHeading: "Procurement and logistics",
    relatedHeading: "Related equipment categories",
  },
  projects: {
    exploreSolutions: "Explore Solutions",
  },
  legal: {
    placeholderTitle: "Temporary placeholder",
    privacyBanner: "This privacy policy is awaiting legal review and will be replaced with approved text.",
    privacyHeading: "Privacy Policy",
    privacyBody:
      "{name} ({address}) respects your privacy. A full policy covering data collection, use, retention, cookies, international transfers and your rights will be published here following counsel review.",
    privacyForm:
      "Until the approved policy is published, contact-form fields on this website are for interface preview only and are not connected to a live submission endpoint.",
    privacyRegistration: "Business Registration Certificate No. {registration}. Nature of business: {nature}.",
    termsBanner: "These terms are awaiting legal review and will be replaced with approved text.",
    termsHeading: "Terms of Use",
    termsBody:
      "Use of this website is subject to terms that will be published by {name} following legal review. Until then, content is provided for general informational purposes only and does not constitute an offer, commitment, financing undertaking or warranty.",
    termsScope:
      "Project scopes, commercial models and delivery roles described on this site are corporate capabilities. Any individual assignment requires a project-specific statement of work defining work packages, deliverables, interfaces, schedule, commercial terms and responsibility allocation.",
    termsRegistration: "{name} — {address}. Business Registration Certificate No. {registration}.",
  },
  contact: {
    correspondenceAddress: "Corporate / correspondence address",
    businessRegistration: "Business registration",
    natureOfBusiness: "Nature of business",
    topicsHeading: "Typical inquiry topics",
    requiredLegend: "Fields marked with {mark} are required.",
    requiredMarkSr: "an asterisk",
    requiredSr: " required",
    optional: "Optional",
    inquiryType: "Inquiry type",
    projectInquiry: "Project inquiry",
    equipmentInquiry: "Equipment inquiry",
    fieldName: "Name",
    fieldCompany: "Company",
    fieldEmail: "Email",
    fieldPhone: "Phone",
    fieldLocation: "Project location",
    fieldProjectDescription: "Project description",
    fieldCategory: "Equipment category",
    selectCategory: "Select a category",
    fieldEquipmentDescription: "Equipment description / specifications",
    equipmentDescriptionHint: "Describe the equipment you need. Energex does not publish product specifications here.",
    fieldQuantity: "Quantity",
    fieldDestination: "Delivery destination",
    fieldTimeline: "Required delivery timeline",
    fieldDocument: "Requirements document",
    documentUnavailable: "Not available yet",
    documentNote:
      "Document upload is switched off until a secure attachment service is approved. No file is uploaded or sent from this form. If documents are needed, ENERGEX can arrange how to share them after replying.",
  },
  notFound: {
    heading: "Page not found",
    body: "The page you requested does not exist or has moved.",
    home: "Go to the homepage",
  },
};

/** Shape every locale's interface text must satisfy. */
export type UiText = typeof uiEn;

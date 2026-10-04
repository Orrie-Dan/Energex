from pathlib import Path
from PIL import Image

root = Path(r"d:\Ideas\ditto\ditto.site\compiler\output\framer\.clone\generated\app")

# Crop dark logo if needed
dark = root / "public/assets/energex/logo-on-dark.png"
im = Image.open(dark)
bbox = im.getbbox()
if bbox:
    im.crop(bbox).save(root / "public/assets/energex/logo-on-dark-cropped.png")
    print("dark cropped", bbox)

p = root / "src/data/energex.ts"
text = p.read_text(encoding="utf-8")
text = text.replace(
    'logoLight: "/assets/energex/logo.png"',
    'logoLight: "/assets/energex/logo-cropped.png"',
)
text = text.replace(
    'logoDark: "/assets/energex/logo-on-dark.png"',
    'logoDark: "/assets/energex/logo-on-dark-cropped.png"',
)
p.write_text(text, encoding="utf-8")
print("energex.ts updated")

# ---- Homepage transform ----
page = root / "src/app/page.tsx"
src = page.read_text(encoding="utf-8")

# Remove Polar / All Access promo block (fixed widget at bottom-right)
import re
src2, n = re.subn(
    r'\n\s*<div className="w-35 h-\[10\.6625rem\] block fixed right-5 bottom-15 z-10 min-w-0 shrink-0 order-\[-1000\]"[\s\S]*?</div>\n\s*</div>\n\s*</div>\n',
    "\n",
    src,
    count=1,
)
print("removed polar block?", n)
if n == 0:
    # try broader: from data-cid n3 through closing before Navigation
    m = re.search(r'<div className="w-35 h-\[10\.6625rem\] block fixed right-5 bottom-15[\s\S]*?data-cid="n35"', src)
    print("polar marker found", bool(m))

# Nav link data arrays
src = src.replace(
    """const Tile_data: TileData[] = [
    { href: "/services", description: "Services" },
    { href: "/about", description: "About" },
    { href: "/blog", description: "Blog" },
    { href: "/careers", description: "Careers" },
    { href: "/contact", description: "Contact" }
];""",
    """const Tile_data: TileData[] = [
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/about", description: "About" },
    { href: "/projects", description: "Projects" },
    { href: "/contact", description: "Contact" }
];""",
)
src = src.replace(
    """const FeatureCard_data: FeatureCardData[] = [
    { href: "/services", title: "Services", description: "Services" },
    { href: "/about", title: "About", description: "About" },
    { href: "/blog", title: "Blog", description: "Blog" },
    { href: "/careers", title: "Careers", description: "Careers" },
    { href: "/contact", title: "Contact", description: "Contact" }
];""",
    """const FeatureCard_data: FeatureCardData[] = [
    { href: "/solutions", title: "Solutions", description: "Solutions" },
    { href: "/industries", title: "Industries", description: "Industries" },
    { href: "/about", title: "About", description: "About" },
    { href: "/projects", title: "Projects", description: "Projects" },
    { href: "/contact", title: "Contact", description: "Contact" }
];""",
)
src = src.replace(
    """const Tile2_data: Tile2Data[] = [
    { href: "/services", description: "Services" },
    { href: "/about", description: "About" },
    { href: "/blog", description: "Blog" },
    { href: "/careers", description: "Careers" },
    { href: "/contact", description: "Contact" }
];""",
    """const Tile2_data: Tile2Data[] = [
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/about", description: "About" },
    { href: "/projects", description: "Projects" },
    { href: "/contact", description: "Contact" }
];""",
)

# Solution family cards
src = re.sub(
    r"const MediaCard_data: MediaCardData\[\] = \[[\s\S]*?\];",
    '''const MediaCard_data: MediaCardData[] = [
    { href: "/solutions", title: "Power & Generation", title2: "Power & Generation", description: "Power generation, LNG & gas-to-power, and floating power solutions.", title3: "Power generation, LNG & gas-to-power, and floating power solutions.", height: "600", imgSrc: "/assets/energex/power.webp", srcSet: "/assets/energex/power.webp 800w", width: "800", title4: "Power generation, LNG & gas-to-power, and floating power solutions.", height2: "600", imgSrc2: "/assets/energex/power.webp", srcSet2: "/assets/energex/power.webp 800w", width2: "800" },
    { href: "/solutions", title: "Renewables & Storage", title2: "Renewables & Storage", description: "Renewable energy systems and battery energy storage for flexible supply.", title3: "Renewable energy systems and battery energy storage for flexible supply.", height: "600", imgSrc: "/assets/energex/renewables.webp", srcSet: "/assets/energex/renewables.webp 800w", width: "800", title4: "Renewable energy systems and battery energy storage for flexible supply.", height2: "600", imgSrc2: "/assets/energex/renewables.webp", srcSet2: "/assets/energex/renewables.webp 800w", width2: "800" },
    { href: "/solutions", title: "Grid & Distributed Energy", title2: "Grid & Distributed Energy", description: "Grid infrastructure, rural electrification, distributed energy and e-mobility.", title3: "Grid infrastructure, rural electrification, distributed energy and e-mobility.", height: "600", imgSrc: "/assets/energex/grid.webp", srcSet: "/assets/energex/grid.webp 800w", width: "800", title4: "Grid infrastructure, rural electrification, distributed energy and e-mobility.", height2: "600", imgSrc2: "/assets/energex/grid.webp", srcSet2: "/assets/energex/grid.webp 800w", width2: "800" },
    { href: "/solutions", title: "Project Delivery & Lifecycle", title2: "Project Delivery & Lifecycle", description: "Development, procurement, EPC, financing support, O&M and digital energy.", title3: "Development, procurement, EPC, financing support, O&M and digital energy.", height: "600", imgSrc: "/assets/energex/investment.webp", srcSet: "/assets/energex/investment.webp 800w", width: "800", title4: "Development, procurement, EPC, financing support, O&M and digital energy.", height2: "600", imgSrc2: "/assets/energex/investment.webp", srcSet2: "/assets/energex/investment.webp 800w", width2: "800" }
];''',
    src,
    count=1,
)

# Stats -> scale statement (reuse 3 cards as 1 / MW / GW+ style)
src = re.sub(
    r"const FeatureCard2_data: FeatureCard2Data\[\] = \[[\s\S]*?\];",
    '''const FeatureCard2_data: FeatureCard2Data[] = [
    { title: "1", title2: "MW", description: "From", description2: "Distributed", title3: "1", title4: "MW", description3: "From", description4: "Distributed" },
    { title: "1", title2: "GW+", description: "To Utility", description2: "Scale", title3: "1", title4: "GW+", description3: "To Utility", description4: "Scale" },
    { title: "Full", title2: "", description: "Lifecycle", description2: "Coverage", title3: "Full", title4: "", description3: "Lifecycle", description4: "Coverage" }
];''',
    src,
    count=1,
)

# FAQ
src = re.sub(
    r"const MediaCard4_data: \{ title: string; description: string \}\[\] = \[[\s\S]*?\];",
    '''const MediaCard4_data: { title: string; description: string }[] = [
    { title: "What does ENERGEX Global Solutions do?", description: "Energex is an integrated energy solutions platform providing clients with a single commercial and technical interface across development, engineering, procurement, EPC delivery, financing support, operations and long-term asset management." },
    { title: "How does Energex deliver energy projects?", description: "Energex acts as integrator: specialist OEMs, EPC contractors, engineering firms and other partners may execute defined packages while Energex retains the client interface, project integration and commercial coordination." },
    { title: "Does Energex work with both conventional and renewable energy?", description: "Yes. The operating model is technology-agnostic. Conventional generation, renewables, storage, grid infrastructure, LNG and gas-to-power, distributed energy, e-mobility and digital systems are configured around each project's needs." },
    { title: "Can Energex support project financing?", description: "Energex supports project structuring and investor/lender coordination and may selectively participate through project SPVs. Energex does not automatically finance client projects and is not a bank." },
    { title: "Does Energex provide operations and maintenance?", description: "Yes. Depending on the commercial model, Energex can support O&M, monitoring, warranty coordination and long-term asset management through the operating phase." },
    { title: "What types of clients does Energex work with?", description: "Governments and utilities, independent power producers, mining and heavy industry, industrial parks and data centers, oil & gas / LNG, commercial and real estate, fleet operators, and development institutions." }
];''',
    src,
    count=1,
)

# Why carousel slides - keep icons, change titles
src = re.sub(
    r"const WhyCarousel_slides = \[[\s\S]*?\];",
    '''const WhyCarousel_slides = [
    { title: "One Integrated Interface", description: "One commercial and technical interface across the project lifecycle.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#3754084069" /></svg> },
    { title: "Technology Agnostic", description: "Solutions configured around project requirements rather than a single technology.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#967363847" /></svg> },
    { title: "Global Sourcing", description: "Qualified OEMs, engineering partners and supply-chain coordination.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#3306108000" /></svg> },
    { title: "Flexible Delivery", description: "Developer, advisor, supplier, EPC integrator, owner's representative, operator or asset manager depending on the project.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#2813894442" /></svg> },
    { title: "Lifecycle Focus", description: "From initial requirement through commercial operation, monitoring, optimization and expansion.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#3022238965" /></svg> }
];''',
    src,
    count=1,
)

# Footer nav tiles
src = src.replace(
    """const Tile3_data: Tile3Data[] = [
    { href: "/", description: "Home" },
    { href: "/about", description: "About" },
    { href: "/services", description: "Services" },
    { href: "/blog", description: "Blog" },
    { href: "/careers", description: "Careers" },
    { href: "/contact", description: "Contact" },
    { href: "/404", description: "404" }
];""",
    """const Tile3_data: Tile3Data[] = [
    { href: "/", description: "Home" },
    { href: "/about", description: "About" },
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/projects", description: "Projects" },
    { href: "/contact", description: "Contact" },
    { href: "/privacy", description: "Privacy" }
];""",
)
src = src.replace(
    """const Tile4_data: Tile4Data[] = [
    { href: "/services/automation-solutions", description: "Automation Solutions" },
    { href: "/services/maintenance-support", description: "Maintenance & Support" },
    { href: "/services/manufacturing", description: "Manufacturing" },
    { href: "/services/industrial-engineering", description: "Industrial Engineering" }
];""",
    """const Tile4_data: Tile4Data[] = [
    { href: "/solutions", description: "Power Generation" },
    { href: "/solutions", description: "Renewable Energy" },
    { href: "/solutions", description: "Energy Storage" },
    { href: "/solutions", description: "E-Mobility" }
];""",
)

# Logos in nav
src = src.replace(
    'src="/assets/cloned/images/cc356557688b.png"',
    'src="/assets/energex/logo-cropped.png"',
)
src = src.replace(
    'src="/assets/cloned/images/21c992ec6562.png"',
    'src="/assets/energex/logo-on-dark-cropped.png"',
)
src = src.replace('alt="Tilanium"', 'alt="ENERGEX"')

# Common CTAs / labels
replacements = [
    ("Get Started", "Start a Project"),
    ("All Services", "View All Solutions"),
    ("What We Offer", "Energy Solutions"),
    ("Learn More", "About Energex"),
    ("About Us", "About Energex"),
    ("Driven by Precision. Powered by Experience.", "One Company. One Integrated Energy Solution."),
    ("We deliver high-quality industrial solutions designed to meet the demands of modern production. From engineering to execution, our focus is on efficiency, reliability, and long-term performance.",
     "ENERGEX Global Solutions provides clients with a single commercial and technical interface across the full energy project lifecycle. From development and engineering to global procurement, EPC delivery, financing support, operations and long-term asset management, Energex coordinates the technologies and partners required around each project's needs."),
    ("Why Choose Us", "Why Energex"),
    ("Built for Results", "Built for Delivery"),
    ("How We Work", "From Concept to Power"),
    ("Engineered Processes that Ensure Consistency", "A coordinated project lifecycle from initial requirement through long-term performance."),
    ("Choose the Plan", "Industries We Serve"),
    ("Flexible Pricing for Every Scale", "Segments across the energy value chain."),
    ("Trusted by Industry Leaders", "Flexible by Design"),
    ("Frequently Asked Questions", "Frequently Asked Questions"),
    ("Latest Industrial Insights & Articles", "Global Ambition. Focused Execution."),
    ("All Articles", "About Energex"),
    ("Ready to Modernize Your Industrial Operations?", "Ready to Power What's Next?"),
    ("© 2026 Tilanium. All rights reserved.", "© 2026 ENERGEX Global Solutions. All rights reserved."),
    ('href="/services"', 'href="/solutions"'),
    ('href="/blog"', 'href="/industries"'),
    ('href="/careers"', 'href="/projects"'),
    ('href="/contact"', 'href="/contact"'),
]
for a, b in replacements:
    c = src.count(a)
    src = src.replace(a, b)
    print(f"replace {a[:40]!r} -> {c}")

# Remove social logo arrays usage later if needed - empty links better than fake social
# Strip SubscribeToOurSection import usage - replace with corporate address block later via string

page.write_text(src, encoding="utf-8")
print("page.tsx written", len(src))

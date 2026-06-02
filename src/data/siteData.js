export const navItems = [
  {
    id: "why",
    label: "Why Ebee?",
    type: "simple",
    links: [
      { label: "Power of EbeeCharge", href: "/why-ebee" },
      { label: "Savings Calculator", href: "/savings-calculator" },
      { label: "FAQ's", href: "/why-ebee#why-faq" },
    ],
  },
  {
    id: "products",
    label: "Products",
    type: "products",
    products: [
      { label: "Smart DB", copy: "Central intelligence", href: "/products/smart-db" },
      { label: "Movable Charger", copy: "DC charging on demand", href: "/products/movable-charger" },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    type: "columns",
    columns: [
      {
        title: "Projects",
        links: [
          { label: "New Construction", href: "/solutions/new-construction" },
          { label: "Retrofit", href: "/solutions/retrofit" },
        ],
      },
      {
        title: "Roles",
        links: [
          { label: "Developer", href: "/solutions/developer" },
          { label: "RWA", href: "/solutions/rwa" },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    type: "resources",
    links: [
      { label: "Blog", href: "/blog/right-sized-ev-charging-for-apartment-communities" },
      { label: "Feasibility Audit", href: "#audit" },
  { label: "Case Studies", href: "/resources/case-studies/building-ev-charging" },
      { label: "Safety Notes", href: "#proof" },
      { label: "About Ebee", href: "#footer" },
    ],
  },
];

export const products = [
  {
    id: "smart-db-product",
    title: "Smart DB",
    eyebrow: "Core infrastructure",
    visual: "product-smart-db",
    points: ["Controls up to 32 charging points", "Dynamic load management", "Per-socket metering and safety"],
  },
  {
    id: "movable-charger",
    title: "Movable Charger",
    eyebrow: "DC charging on demand",
    visual: "product-movable-charger",
    points: ["30kW / 60kW DC output", "Moves to the resident bay", "Connects through 63A interlock sockets"],
  },
];

export const problems = [
  { title: "20% EV mandate", icon: "mandate", copy: "Properties need a scalable way to enable parking bays without overbuilding." },
  { title: "Basement connectivity", icon: "connectivity", copy: "Charging should not depend on every bay having perfect network coverage." },
  { title: "Billing disputes", icon: "billing", copy: "Societies need usage-based recovery without manual collection work." },
  { title: "Load anxiety", icon: "load", copy: "Peak-hour charging needs intelligent throttling to protect the building." },
];

export const reliabilityItems = [
  { title: "One Smart DB, up to 32 charging points", copy: "Metering, relay control, thermal monitoring, and internet connectivity live centrally in the distribution board." },
  { title: "Dynamic load management", copy: "Ebee throttles and staggers sessions so resident charging does not overwhelm building capacity." },
  { title: "Retrofit-friendly deployment", copy: "Basic sockets and QR labels keep per-bay cost low while preserving a premium resident experience." },
];

export const simplicityItems = [
  { title: "Scan QR and open chat", copy: "The socket QR opens a familiar WhatsApp flow, so residents do not download another app." },
  { title: "Pay instantly with UPI", copy: "Residents pre-pay or top up through their preferred UPI app and receive a digital receipt." },
  { title: "Socket activates only after payment", copy: "Power stays locked until an authorized session begins, reducing misuse and power theft." },
];

export const dashboardItems = [
  { title: "Resident sessions and receipts", copy: "See who charged, how much energy was used, and what was paid." },
  { title: "Automated settlement", copy: "Usage-based collections and property reimbursements stay transparent." },
  { title: "Portfolio-wide monitoring", copy: "Developers and operators can monitor multiple buildings from one place." },
];

export const footerColumns = [
  { title: "Why Ebee", links: [{ label: "Smart DB", href: "#smart-db" }, { label: "EV Mandate", href: "#mandate" }, { label: "WhatsApp + UPI", href: "#journey" }] },
  { title: "Products", links: [{ label: "ebeeOS", href: "/products/ebee-os" }, { label: "Smart DB", href: "/products/smart-db" }, { label: "Movable Charger", href: "/products/movable-charger" }] },
  { title: "Solutions", links: [{ label: "New Construction", href: "/solutions/new-construction" }, { label: "Retrofit", href: "/solutions/retrofit" }, { label: "Developer", href: "/solutions/developer" }, { label: "RWA", href: "/solutions/rwa" }] },
  { title: "Resources", links: [{ label: "Blog", href: "/blog/right-sized-ev-charging-for-apartment-communities" }, { label: "Feasibility Audit", href: "#audit" }, { label: "Case Studies", href: "#proof" }, { label: "FAQ", href: "#proof" }] },
  { title: "Company", links: [{ label: "About", href: "#footer" }, { label: "Contact", href: "mailto:hello@ebeecharge.in" }] },
  { title: "Legal", links: [{ label: "Privacy Policy", href: "#footer" }, { label: "Terms of Service", href: "#footer" }] },
];

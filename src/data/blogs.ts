export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "bullets";
      items: string[];
    };

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  excerpt: string;
  coverTheme: "water" | "building" | "solar" | "charging";
  seo: {
    title: string;
    description: string;
  };
  content: BlogContentBlock[];
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "hidden-water-cost-ethanol-blending",
    title: "The Hidden Water Bill: Why India's Ethanol Dream Is Running Dry",
    subtitle:
      "The government promised cleaner fuel. Nobody mentioned the 10,000 litres of water it costs to make just one litre of it.",
    category: "Energy Policy",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "8 min read",
    tags: ["Ethanol", "Water Crisis", "Energy Policy", "India", "EV"],
    featured: true,
    coverTheme: "water",
    excerpt:
      "There is a number that the government did not put in its ethanol blending policy brochure: 10,000. That is how many litres of water it reportedly takes to produce just one litre of ethanol.",
    seo: {
      title: "The Hidden Water Cost of Ethanol Blending | EbeeCharge Blog",
      description:
        "India's ethanol blending policy consumes 10,000 litres of water per litre of fuel. Discover why EVs offer a more sustainable path for India's energy future.",
    },
    content: [
      {
        type: "paragraph",
        text: "There is a number that the government did not put in its ethanol blending policy brochure.",
      },
      { type: "paragraph", text: "10,000." },
      {
        type: "paragraph",
        text: "That is how many litres of water it reportedly takes to produce just one litre of ethanol, according to an India Today investigation that recently sent shockwaves through policy circles, environmental groups, and social media feeds across the country.",
      },
      {
        type: "paragraph",
        text: "For a nation where groundwater tables are falling, where farmers in Maharashtra queue for tanker water in summer, and where Punjab's agricultural miracle is quietly exhausting its aquifers, this number deserves far more attention than it has received.",
      },
      {
        type: "paragraph",
        text: "Instead, when a news agency called Facttious asked Union Road Transport and Highways Minister Nitin Gadkari about the water usage loophole in his government's ethanol policy, he reportedly called the critics anti-nationals.",
      },
      { type: "heading", text: "What Exactly Is Ethanol Blending?" },
      {
        type: "paragraph",
        text: "Ethanol is alcohol derived from plant sources. Sugarcane, corn, broken rice, and leftover grain can all be fermented and distilled into ethanol, which burns cleaner than pure petrol and comes from renewable crop sources rather than finite underground oil reserves.",
      },
      {
        type: "paragraph",
        text: "Ethanol blending means mixing this plant-derived alcohol into regular petrol before it reaches your vehicle's fuel tank. The blends are labelled by percentage:",
      },
      {
        type: "bullets",
        items: [
          "E10 means 10% ethanol and 90% petrol",
          "E20 means 20% ethanol and 80% petrol",
          "The government has now floated a public consultation on pushing this to E80 or even E100",
        ],
      },
      {
        type: "paragraph",
        text: "The stated logic has always been straightforward:",
      },
      {
        type: "bullets",
        items: [
          "Cleaner burning fuel means less air pollution",
          "Homegrown ethanol means less dependence on imported crude oil",
          "A new market for crops means better income for farmers",
        ],
      },
      { type: "heading", text: "The Surplus That Was Never Really There" },
      {
        type: "paragraph",
        text: "The original justification for India's ethanol push was that the country was sitting on massive food surpluses. The Food Corporation of India had accumulated enormous stockpiles of rice and other grains that were rotting in godowns. Why not convert the excess into fuel?",
      },
      {
        type: "paragraph",
        text: "In practice, the numbers tell a different story.",
      },
      {
        type: "paragraph",
        text: "The government allocated 52 lakh tonnes of rice for ethanol production in 2024-25. It is now targeting 90 lakh tonnes in 2025-26. To find this rice, the government plans to reduce the share of broken rice distributed to poor households under the Public Distribution System from 25% to just 10%.",
      },
      {
        type: "paragraph",
        text: "The fuel in your car may soon be partly funded by cutting the food allocation for the country's poorest citizens.",
      },
      {
        type: "paragraph",
        text: "Meanwhile, the push toward corn-based ethanol created its own crisis. India became a net corn importer for the first time in recent memory because diverting maize to ethanol production caused shortages in the poultry and animal feed industries.",
      },
      { type: "heading", text: "The Water Crisis Nobody Is Talking About" },
      {
        type: "paragraph",
        text: "IPCC author Anjal Prakash has warned that ethanol blending will worsen India's water crisis because the primary feedstocks, sugarcane above all others, are among the most water-intensive crops on the planet.",
      },
      {
        type: "paragraph",
        text: "Sugarcane cultivation is already one of the primary drivers of groundwater depletion in Maharashtra. Punjab's rice farming has drawn down the water table so severely that some projections suggest the state's groundwater could be effectively exhausted within decades if current patterns continue.",
      },
      {
        type: "paragraph",
        text: "The ethanol policy is cooking a perfect recipe for policy-induced water scarcity by:",
      },
      {
        type: "bullets",
        items: [
          "Creating demand for ethanol on one side",
          "Providing MSP support for water-intensive crops on the other",
        ],
      },
      { type: "heading", text: "The Political Dimension" },
      {
        type: "paragraph",
        text: "Nikhil Gadkari, son of Minister Nitin Gadkari, serves as Managing and Executive Director of CIAN Agro Industries & Infrastructure Limited, described as a pioneer in green ethanol manufacturing. This connection has fuelled accusations of nepotism and ensured that every policy announcement related to ethanol blending is accompanied by fresh controversy.",
      },
      { type: "heading", text: "Is There a Better Way?" },
      {
        type: "paragraph",
        text: "E20 blending is a reasonable transitional measure. It uses existing food surpluses where they genuinely exist, provides farmers with an additional market, and reduces petrol consumption modestly.",
      },
      {
        type: "paragraph",
        text: "The problem is the direction of travel. Pushing toward E85 or E100 would multiply all these problems many times over.",
      },
      {
        type: "paragraph",
        text: "The cleaner long-term solution is electric mobility. Electric vehicles do not run on water-intensive food crops. They run on electricity, and India's grid is getting steadily cleaner. More than 50% of India's installed electricity generation capacity now comes from non-fossil fuel sources.",
      },
      {
        type: "paragraph",
        text: "E20 can coexist with an EV transition as a bridge measure. But it cannot be the destination.",
      },
      {
        type: "paragraph",
        text: "The water is running out. The food surplus was always partly a fiction. And there are cleaner, more honest solutions available.",
      },
    ],
  },
  {
    id: 2,
    slug: "ev-mandate-customer-delight-society-charging",
    title:
      "Your Society Is About to Install EV Chargers. Here Is Why That Matters More Than You Think",
    subtitle:
      "The 20% EV mandate is coming. The difference between a housing society that gets it right and one that gets it wrong will be felt by every resident with an electric vehicle for the next decade.",
    category: "EV Infrastructure",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "9 min read",
    tags: ["EV Charging", "Housing Society", "RWA", "Smart DB", "ebee Charge"],
    featured: true,
    coverTheme: "building",
    excerpt:
      "Somewhere in your city right now, a developer or an RWA committee is asking how to comply with the EV mandate. The better question is how to make charging feel effortless for residents.",
    seo: {
      title: "EV Charging Mandate for Housing Societies: Get It Right | EbeeCharge",
      description:
        "The 20% EV mandate is coming to Indian housing societies. Learn how Smart DB charging infrastructure turns compliance into genuine customer delight.",
    },
    content: [
      {
        type: "paragraph",
        text: "Somewhere in your city right now, a developer or an RWA committee is having a conversation about electric vehicle charging.",
      },
      {
        type: "paragraph",
        text: "In many cases, that conversation goes something like this:",
      },
      {
        type: "paragraph",
        text: '"We need to comply with the EV mandate. What is the cheapest way to tick this box?"',
      },
      {
        type: "paragraph",
        text: "And in that question, asked with the best of intentions, lies the seed of a resident experience that will range from mildly frustrating to genuinely miserable.",
      },
      {
        type: "paragraph",
        text: "Because here is the thing about EV charging infrastructure: you notice it most when it does not work.",
      },
      { type: "heading", text: "Why the Mandate Exists and Where It Is Going" },
      {
        type: "paragraph",
        text: "India's regulatory framework now requires that a specified proportion of parking spaces in new residential and commercial developments be EV-enabled.",
      },
      {
        type: "paragraph",
        text: "The market is moving in the same direction as the regulation:",
      },
      {
        type: "bullets",
        items: [
          "EV sales in India are growing consistently",
          "The range of available models is expanding",
          "Prices are falling",
          "Over 95% of EV charging happens at home",
        ],
      },
      {
        type: "paragraph",
        text: "Buyers and renters are already asking about EV charging when they evaluate properties. Within five years, a building without credible EV charging infrastructure will be at a meaningful disadvantage in the market.",
      },
      { type: "heading", text: "The Problems Nobody Warns You About" },
      {
        type: "paragraph",
        text: "For property managers and RWA committees:",
      },
      {
        type: "bullets",
        items: [
          "Which parking spots should be designated for EV charging?",
          "How do you recover electricity costs fairly?",
          "What happens when EV penetration goes from 5% today to 40% in three years?",
          "Individual residents installing chargers creates safety hazards and load imbalances",
          "Discoms refuse green meters in basements with poor connectivity",
        ],
      },
      { type: "paragraph", text: "For EV-owning residents:" },
      {
        type: "bullets",
        items: [
          "They want to charge in their own designated spot",
          "Setting up a personal charger requires navigating society disputes",
          "Heavy wiring costs",
          "No wish to download yet another app or lock money in wallets",
          "Plug and play solution which is hassle free",
        ],
      },
      { type: "heading", text: "What a Good Solution Actually Looks Like" },
      {
        type: "paragraph",
        text: "The best EV charging solutions for residential buildings share these characteristics:",
      },
      {
        type: "bullets",
        items: [
          "Scalable by design - grows with EV penetration without major rewiring",
          "Solves connectivity at infrastructure level - not per socket",
          "Makes billing transparent and automatic",
          "Requires no apps and no wallets - UPI QR based",
          "Safe by design - overload protection, thermal shutdown built in",
          "Flexible operating models for different societies",
        ],
      },
      { type: "heading", text: "The Smart DB Approach" },
      {
        type: "paragraph",
        text: "Rather than installing a full smart charger at every parking bay, the Smart DB model moves all intelligence to a single central unit. Individual bays use basic 16-amp sockets with a QR code sticker.",
      },
      { type: "paragraph", text: "Practical implications:" },
      {
        type: "bullets",
        items: [
          "Cost: Entire parking lot costs roughly the same as one traditional charger",
          "Connectivity: Only central DB needs internet - basements work reliably",
          "Scalability: Add bays without per-bay commissioning",
          "Fairness: Per-socket metering ensures residents pay for exactly what they use",
          "User experience: Park, plug, scan UPI, charge. Three steps. No app.",
        ],
      },
      { type: "heading", text: "Choosing Your Operating Model" },
      {
        type: "paragraph",
        text: "Model 1 - Open Access, Direct Payment: Any resident uses any charger. Payment goes to service provider via UPI. RWA has zero involvement.",
      },
      {
        type: "paragraph",
        text: "Model 2 - Assigned Access, Direct Payment: Each resident charges at their designated spot. Payment to service provider. RWA maintains flat-to-slot mapping.",
      },
      {
        type: "paragraph",
        text: "Model 3 - Assigned Access, Monthly RWA Billing: Residents pay RWA monthly. No GST on electricity portion. Highest control, highest admin burden.",
      },
      {
        type: "paragraph",
        text: "In all models: service provider handles all maintenance and fault resolution.",
      },
      { type: "heading", text: "The Bottom Line" },
      {
        type: "paragraph",
        text: "The 20% EV mandate is coming whether your society is ready for it or not.",
      },
      {
        type: "paragraph",
        text: "The societies that will benefit most are those that stop thinking about this as a compliance exercise and start thinking about it as a service design challenge.",
      },
      {
        type: "paragraph",
        text: "Your choice of charging solution will define your residents' experience. Make sure it is a choice, not just a default.",
      },
    ],
  },
  {
    id: 3,
    slug: "from-sugarcane-to-solar-india-fuel-future-electric",
    title: "From Sugarcane to Solar: Why India's Fuel Future Is Electric, Not Ethanol",
    subtitle:
      "A decade from now, India's vehicles will be powered either by food crops grown in water-stressed farmland or by sunlight falling on increasingly cheap panels. The choice seems obvious.",
    category: "Energy Transition",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "10 min read",
    tags: ["EVs", "Ethanol", "Solar Energy", "Energy Policy", "Sustainability", "India"],
    featured: false,
    coverTheme: "solar",
    excerpt:
      "India's energy transition is caught between ethanol blending and electric mobility. One scales through water-stressed crops; the other gets cleaner with every solar panel added to the grid.",
    seo: {
      title: "Sugarcane to Solar: India's Electric Vehicle Future | EbeeCharge Blog",
      description:
        "Why India's long-term fuel future lies in electric mobility rather than ethanol blending. An analysis of water costs, food security, and the greening grid.",
    },
    content: [
      {
        type: "paragraph",
        text: "Energy transitions are rarely clean. They involve incumbents protecting their interests, politicians navigating competing constituencies, genuine uncertainty about which technologies will mature fastest, and the inescapable reality that the infrastructure of the old system does not disappear just because a better system has emerged.",
      },
      {
        type: "paragraph",
        text: "India's current energy transition is no exception.",
      },
      {
        type: "paragraph",
        text: "On one side: the ethanol blending program, backed by agricultural interests, sugar mill lobbying, and government reputational capital.",
      },
      {
        type: "paragraph",
        text: "On the other side: electric mobility, supported by falling battery costs, a rapidly greening grid, and accelerating consumer demand.",
      },
      { type: "heading", text: "The Case for Ethanol - Taking It Seriously" },
      {
        type: "paragraph",
        text: "India imports enormous quantities of crude oil. Any policy that reduces crude import dependence has real economic value. Ethanol, produced domestically from crops grown by Indian farmers, genuinely reduces crude import volumes when blended into petrol.",
      },
      {
        type: "paragraph",
        text: "These are real benefits. The question is whether they justify the costs.",
      },
      { type: "heading", text: "The Costs the Policy Does Not Advertise" },
      {
        type: "paragraph",
        text: "Water: Producing one litre of ethanol reportedly consumes up to 10,000 litres of water.",
      },
      {
        type: "paragraph",
        text: "Food Security: The government plans to allocate 90 lakh tonnes of rice to ethanol in 2025-26, partly by reducing broken rice in the PDS from 25% to 10%.",
      },
      {
        type: "paragraph",
        text: "Manufactured Surplus: India became a net corn importer when ethanol demand diverted maize supply. Rather than acknowledging limits, the policy incentivised more planting of water-intensive crops.",
      },
      {
        type: "paragraph",
        text: "Political Sustainability: Any policy entangled with conflict of interest allegations faces the risk of being dismantled when governments change.",
      },
      { type: "heading", text: "The EV Advantage - Beyond Just Emissions" },
      {
        type: "paragraph",
        text: "The standard case for EVs focuses on tailpipe emissions. But the broader case is stronger.",
      },
      {
        type: "paragraph",
        text: "The Water Argument: EVs have no hidden water footprint. Electricity generation water intensity is orders of magnitude lower than ethanol production from sugarcane or rice. And as solar and wind dominate the grid, this advantage compounds.",
      },
      {
        type: "paragraph",
        text: "The Food Security Argument: EVs do not compete with food production for agricultural land and water. An EV transition does not require farmers to choose between growing food and fuel.",
      },
      {
        type: "paragraph",
        text: "The Import Dependency Argument: EVs charged on domestically generated electricity eliminate crude dependency entirely. India does not import sunlight or wind. Battery material concerns are real but structurally different - and India is actively developing domestic mining corridors in Jammu & Kashmir, Odisha, Tamil Nadu, Karnataka and Kerala.",
      },
      {
        type: "paragraph",
        text: "The Scalability Argument: Solar is now the cheapest form of new electricity generation in most of India. Every additional solar panel makes every EV cleaner. Ethanol's scalability is permanently limited by agricultural land, water availability, and crop cycles.",
      },
      { type: "heading", text: "The Grid Is Getting Green Fast Enough to Matter" },
      {
        type: "paragraph",
        text: "India has crossed 50% of installed electricity generation capacity from non-fossil fuel sources. The trajectory is clear and momentum is strong.",
      },
      {
        type: "paragraph",
        text: "Battery storage costs are falling. The coal criticism of EVs is a criticism of a transitional period, not of the destination.",
      },
      { type: "heading", text: "What a Balanced Policy Would Look Like" },
      {
        type: "bullets",
        items: [
          "Maintain E20 as a transitional measure while being honest about costs",
          "Invest heavily in EV adoption infrastructure, particularly home charging",
          "Develop India's domestic battery material supply chain",
          "Set a clear long-term target for phasing down ethanol as EV penetration grows",
          "Do not treat E20 as a floor to push higher from",
        ],
      },
      {
        type: "paragraph",
        text: "Ten years from now, the only question is how different India's vehicle fleet will look, and in which direction.",
      },
      {
        type: "paragraph",
        text: "The sugarcane lobby is powerful. But the water table does not negotiate, and the monsoon does not care about MSP prices.",
      },
      {
        type: "paragraph",
        text: "India's fuel future is electric. The sooner policy catches up with that reality, the better.",
      },
    ],
  },
  {
    id: 4,
    slug: "park-plug-scan-charge-frictionless-ev-charging-india",
    title: "Park, Plug, Scan, Charge: The Frictionless Future of EV Charging in Indian Homes",
    subtitle:
      "For electric vehicles to succeed in India, the charging experience cannot be an adventure. It needs to be as simple as charging your phone. We are closer than you think.",
    category: "Product Deep Dive",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "9 min read",
    tags: ["Smart DB", "EV Charging", "UPI", "Housing Society", "ebee Charge", "Home Charging"],
    featured: false,
    coverTheme: "charging",
    excerpt:
      "For EVs to succeed in India, the charging experience cannot be an adventure. The winning flow is simple: park, plug, scan, charge.",
    seo: {
      title: "Park Plug Scan Charge: Frictionless EV Charging for Indian Homes | EbeeCharge",
      description:
        "How ebee Charge's Smart DB system makes EV charging in Indian housing societies as simple as charging your phone. No apps. No wallets. Just UPI.",
    },
    content: [
      {
        type: "paragraph",
        text: "Ask anyone who has tried to set up EV charging in an Indian housing society, and you will hear some version of the same story.",
      },
      {
        type: "paragraph",
        text: "It starts optimistically. You buy the car. You research home charging. You approach the society committee. And then the real journey begins.",
      },
      {
        type: "paragraph",
        text: "The committee wants to know which socket you plan to use and whether it counts as a modification to common property. The electrician quotes a wiring cost that makes you wince. The discom says they cannot install a green meter because the basement has poor signal. A neighbour objects because they are worried about the electrical load. Three months later, you are still charging from a domestic socket rated for considerably less than your charger draws.",
      },
      {
        type: "paragraph",
        text: "This is not unusual. It is the standard story.",
      },
      {
        type: "paragraph",
        text: "And it is a significant obstacle to EV adoption in India, because the home charging experience is not a peripheral feature of EV ownership. More than 95% of EV charging happens at home.",
      },
      { type: "heading", text: "Why This Problem Is Harder Than It Looks" },
      {
        type: "paragraph",
        text: "EV charging in a multi-unit residential building is genuinely different from charging at a public station or corporate office.",
      },
      {
        type: "paragraph",
        text: "Multiple competing stakeholder interests:",
      },
      {
        type: "bullets",
        items: [
          "EV owners want convenient charging in their own spot",
          "Non-EV owners do not want maintenance charges to rise",
          "RWA wants minimal admin burden",
          "Developer wants compliance at minimum cost",
          "Discom wants grid stability",
        ],
      },
      {
        type: "paragraph",
        text: "Electrical infrastructure not designed for this: Most Indian residential buildings have electrical systems designed around lighting, air conditioning, and domestic appliances. Simultaneous EV charging places demands that were never anticipated.",
      },
      {
        type: "paragraph",
        text: "Connectivity challenges: Underground parking is typically the worst place in a building for mobile and Wi-Fi signal. Solutions requiring reliable per-socket internet connectivity simply do not work reliably in these environments.",
      },
      {
        type: "paragraph",
        text: "Billing without precedent: EV charging requires precise per-session metering, fair cost allocation, and a payment mechanism residents will actually use without friction.",
      },
      { type: "heading", text: "The Three Steps That Change Everything" },
      {
        type: "paragraph",
        text: "The user journey for EV charging should be exactly three steps:",
      },
      {
        type: "paragraph",
        text: "STEP 1: Park your car and plug in. You arrive at your designated parking spot. You plug the cable into your car.",
      },
      {
        type: "paragraph",
        text: "STEP 2: Scan the UPI QR code on the socket and pay. There is a QR code on the socket face. You scan it with any UPI app you already have on your phone. You confirm the payment. No app download. No account creation. No wallet top-up.",
      },
      {
        type: "paragraph",
        text: "STEP 3: Charging starts. That is it.",
      },
      {
        type: "paragraph",
        text: "This is what ebee Charge's Smart DB system delivers.",
      },
      { type: "heading", text: "Why Centralising the Intelligence Changes Everything" },
      {
        type: "paragraph",
        text: "Traditional smart charging puts a full smart charger at every bay:",
      },
      {
        type: "bullets",
        items: [
          "Each charger has its own processor, Wi-Fi module, firmware",
          "50 bays = 50 separate connected devices to manage",
          "High per-bay cost, complex installation, complex maintenance",
        ],
      },
      {
        type: "paragraph",
        text: "The Smart DB approach: All processing, connectivity, protection and metering in one central unit. Individual bays have a basic 16-amp socket and a QR code sticker. Nothing more.",
      },
      {
        type: "paragraph",
        text: "Results:",
      },
      {
        type: "bullets",
        items: [
          "Cost: Entire parking lot costs roughly the same as one traditional charger",
          "Connectivity: DB placed where signal is available. Sockets need zero connectivity.",
          "Maintenance: One unit to service, not 50 connected devices",
          "Scaling: Add sockets and update DB configuration. No rewiring. No civil works.",
          "Safety: Overload protection, thermal monitoring, staggered power-on - all centralised",
        ],
      },
      { type: "heading", text: "Fast Charging - ebee On the Go" },
      {
        type: "paragraph",
        text: "For situations where slow overnight charging is not enough:",
      },
      {
        type: "paragraph",
        text: "Rather than fixed fast chargers at every bay, ebee runs a 63-amp wiring loop with sockets through the parking area. Mobile DC chargers connect to these sockets and can be positioned at whichever bay currently needs fast charging.",
      },
      {
        type: "paragraph",
        text: "Benefits:",
      },
      {
        type: "bullets",
        items: [
          "No queuing for fast charging bays - charger comes to your car",
          "Significant capex reduction vs fixed fast chargers everywhere",
          "Same UPI QR payment experience as slow charging",
          "Scale infrastructure as EV usage increases",
        ],
      },
      { type: "heading", text: "Three Ways to Run EV Charging in Your Society" },
      {
        type: "paragraph",
        text: "Model 1 - Hands-Off Society: Open access. Any resident. Any charger. Payment via UPI to service provider. RWA involvement: zero.",
      },
      {
        type: "paragraph",
        text: "Model 2 - Moderately Involved Society: Assigned access. Each resident charges at their spot. Payment to service provider. RWA maintains flat-to-socket mapping.",
      },
      {
        type: "paragraph",
        text: "Model 3 - Fully Engaged Society: RWA manages billing directly. No GST on electricity portion. Higher control, highest potential saving for residents.",
      },
      {
        type: "paragraph",
        text: "All models: WBG handles all maintenance and fault resolution.",
      },
      { type: "heading", text: "The Building That Gets This Right" },
      {
        type: "paragraph",
        text: "Society A gets it wrong: Chargers installed in convenient spots for contractor, not residents. Payment requires an app half the residents have not downloaded. One charger has been offline for three weeks. RWA is handling a billing dispute that has been going on for two months.",
      },
      {
        type: "paragraph",
        text: "Society B gets it right: Every parking bay has a socket. QR code works with any UPI app. Electricity bill for each resident's sessions calculated precisely and automatically. RWA has never handled a charging-related complaint.",
      },
      {
        type: "paragraph",
        text: "The gap between these two societies is not as large as you think in terms of initial investment. It is enormous in terms of ongoing resident experience.",
      },
      { type: "heading", text: "The Bigger Picture" },
      {
        type: "paragraph",
        text: "India's EV transition is not waiting for permission. It is happening now.",
      },
      {
        type: "paragraph",
        text: "The charging infrastructure built over the next three to five years will shape the experience of EV ownership for hundreds of thousands of Indian households.",
      },
      {
        type: "paragraph",
        text: "Infrastructure built thoughtfully, with genuine user experience at its centre, will accelerate adoption.",
      },
      {
        type: "paragraph",
        text: "Infrastructure built cheaply to tick compliance boxes will generate friction, complaints, and a general sense that EV ownership is more trouble than it is worth.",
      },
      {
        type: "paragraph",
        text: "The technology to build it thoughtfully exists today. The business model to make it economically viable exists today. The regulatory framework is pushing in the right direction.",
      },
      {
        type: "paragraph",
        text: "What remains is the decision.",
      },
      {
        type: "paragraph",
        text: "For every developer, every RWA committee, every housing society: Your choice of EV charging infrastructure will define your residents' experience for the next decade. Make it count.",
      },
    ],
  },
];

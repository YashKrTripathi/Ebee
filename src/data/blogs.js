export const blogs = [
  {
    id: 1,
    slug: "hidden-water-cost-ethanol-blending",
    title: "The Hidden Water Bill: Why India's Ethanol Dream Is Running Dry",
    subtitle: "The government promised cleaner fuel. Nobody mentioned the 10,000 litres of water it costs to make just one litre of it.",
    category: "Energy Policy",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "8 min read",
    tags: ["Ethanol", "Water Crisis", "Energy Policy", "India", "EV"],
    featured: true,
    coverTheme: "water",
    excerpt: "There is a number that the government did not put in its ethanol blending policy brochure: 10,000. That is how many litres of water it reportedly takes to produce just one litre of ethanol.",
    seo: {
      title: "The Hidden Water Cost of Ethanol Blending | EbeeCharge Blog",
      description: "India's ethanol blending policy consumes 10,000 litres of water per litre of fuel. Discover why EVs offer a more sustainable path for India's energy future.",
    },
    content: []
  },
  {
    id: 2,
    slug: "ev-mandate-customer-delight-society-charging",
    title: "Your Society Is About to Install EV Chargers. Here Is Why That Matters More Than You Think",
    subtitle: "The 20% EV mandate is coming. The difference between a housing society that gets it right and one that gets it wrong will be felt by every resident with an electric vehicle for the next decade.",
    category: "EV Infrastructure",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "9 min read",
    tags: ["EV Charging", "Housing Society", "RWA", "Smart DB", "ebee Charge"],
    featured: true,
    coverTheme: "building",
    excerpt: "Somewhere in your city right now, a developer or an RWA committee is asking how to comply with the EV mandate. The better question is how to make charging feel effortless for residents.",
    seo: {
      title: "EV Charging Mandate for Housing Societies: Get It Right | EbeeCharge",
      description: "The 20% EV mandate is coming to Indian housing societies. Learn how Smart DB charging infrastructure turns compliance into genuine customer delight.",
    },
    content: []
  },
  {
    id: 3,
    slug: "from-sugarcane-to-solar-india-fuel-future-electric",
    title: "From Sugarcane to Solar: Why India's Fuel Future Is Electric, Not Ethanol",
    subtitle: "A decade from now, India's vehicles will be powered either by food crops grown in water-stressed farmland or by sunlight falling on increasingly cheap panels. The choice seems obvious.",
    category: "Energy Transition",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "10 min read",
    tags: ["EVs", "Ethanol", "Solar Energy", "Energy Policy", "Sustainability", "India"],
    featured: false,
    coverTheme: "solar",
    excerpt: "India's energy transition is caught between ethanol blending and electric mobility. One scales through water-stressed crops; the other gets cleaner with every solar panel added to the grid.",
    seo: {
      title: "Sugarcane to Solar: India's Electric Vehicle Future | EbeeCharge Blog",
      description: "Why India's long-term fuel future lies in electric mobility rather than ethanol blending. An analysis of water costs, food security, and the greening grid.",
    },
    content: []
  },
  {
    id: 4,
    slug: "park-plug-scan-charge-frictionless-ev-charging-india",
    title: "Park, Plug, Scan, Charge: The Frictionless Future of EV Charging in Indian Homes",
    subtitle: "For electric vehicles to succeed in India, the charging experience cannot be an adventure. It needs to be as simple as charging your phone. We are closer than you think.",
    category: "Product Deep Dive",
    author: "Priya",
    date: "May 15, 2026",
    readTime: "9 min read",
    tags: ["Smart DB", "EV Charging", "UPI", "Housing Society", "ebee Charge", "Home Charging"],
    featured: false,
    coverTheme: "charging",
    excerpt: "For EVs to succeed in India, the charging experience cannot be an adventure. The winning flow is simple: park, plug, scan, charge.",
    seo: {
      title: "Park Plug Scan Charge: Frictionless EV Charging for Indian Homes | EbeeCharge",
      description: "How ebee Charge's Smart DB system makes EV charging in Indian housing societies as simple as charging your phone. No apps. No wallets. Just UPI.",
    },
    content: []
  }
];

// Duplicate to fill the grid for presentation purposes
const generateMoreBlogs = () => {
  const result = [...blogs];
  let idCounter = 5;
  
  for (let i = 0; i < 3; i++) {
    blogs.forEach(blog => {
      if (blog.id !== 1) { // Skip featured so we don't have multiple huge ones if not needed
        result.push({
          ...blog,
          id: idCounter++,
          slug: `${blog.slug}-${idCounter}`,
        });
      }
    });
  }
  return result;
};

export const allBlogs = generateMoreBlogs();

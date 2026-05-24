import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Clock,
  Download,
  FileQuestion,
  FileText,
  HelpCircle,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FeasibilityModal } from "../components/FeasibilityModal";

const categories = [
  { label: "All", value: "all", icon: Sparkles },
  { label: "Blog", value: "blog", icon: FileText },
  { label: "EV Guides", value: "guides", icon: BookOpen },
  { label: "FAQ", value: "faq", icon: FileQuestion },
];

const featuredResources = [
  {
    type: "EV Guide",
    title: "EV Charging Readiness Checklist for Residential Societies",
    description:
      "A practical guide for RWAs to plan EV charging without transformer overload, parking disputes, or app adoption friction.",
    readTime: "8 min read",
    accent: "Smart DB Planning",
  },
  {
    type: "Blog",
    title: "How WhatsApp + UPI Makes Charging Adoption Easier",
    description:
      "Why app-less charging works better for mixed-age resident communities and high-traffic visitor parking.",
    readTime: "6 min read",
    accent: "No Apps. No Wallets.",
  },
  {
    type: "FAQ",
    title: "Dynamic Load Balancing, Billing, and Settlements Explained",
    description:
      "Clear answers for facility teams evaluating fair usage billing, smart metering, and automated RWA settlement flows.",
    readTime: "5 min read",
    accent: "Engineering Notes",
  },
];

const resources = [
  {
    category: "blog",
    label: "Blog",
    title: "Turning the 20% EV Mandate Into a Resident Amenity",
    description:
      "A property-first view of EV compliance, adoption, and the operational details that make charging feel effortless.",
    meta: "Residential Societies",
    readTime: "7 min",
    href: "/blog",
  },
  {
    category: "guides",
    label: "EV Guide",
    title: "Smart DB vs Individual Charger Wiring",
    description:
      "Compare centralized distribution, lighter parking ducts, metered sockets, and long-term CAPEX impact.",
    meta: "Infrastructure",
    readTime: "9 min",
    href: "/resources/ev-guides",
  },
  {
    category: "blog",
    label: "Blog",
    title: "Why RWAs Need Fair Usage Billing Before EV Demand Peaks",
    description:
      "How automated unit tracking, UPI payments, and transparent logs reduce disputes between EV and non-EV residents.",
    meta: "Billing Management",
    readTime: "6 min",
    href: "/blog",
  },
  {
    category: "guides",
    label: "EV Guide",
    title: "Site Audit Preparation for Facility Managers",
    description:
      "What to collect before an EV charging feasibility audit: sanctioned load, parking layout, DB room access, and resident demand.",
    meta: "Site Audit",
    readTime: "5 min",
    href: "/resources/ev-guides",
  },
  {
    category: "faq",
    label: "FAQ",
    title: "UPI Settlements and RWA Account Reconciliation",
    description:
      "Understand how charging payments, smart metering, and itemized digital logs can be aligned with society accounts.",
    meta: "UPI Native",
    readTime: "4 min",
    href: "/faq",
  },
  {
    category: "faq",
    label: "FAQ",
    title: "Remote Monitoring and Maintenance Response",
    description:
      "Answers on socket health, outage alerts, load events, and how centralized monitoring keeps the network reliable.",
    meta: "Remote Monitoring",
    readTime: "4 min",
    href: "/faq",
  },
];

const downloads = [
  {
    title: "Residential EV Charging Readiness PDF",
    description: "A concise checklist for society committees and facility teams.",
    format: "PDF",
  },
  {
    title: "Smart DB Architecture One-Pager",
    description: "Centralized load distribution, smart metering, and socket control overview.",
    format: "PDF",
  },
  {
    title: "RWA Billing and Settlement Template",
    description: "Sample monthly reporting structure for EV charging collections.",
    format: "XLS",
  },
];

const faqs = [
  {
    question: "Which resources should a residential society start with?",
    answer:
      "Start with the readiness checklist, then review the Smart DB architecture guide. Together they help your committee understand sanctioned load, parking coverage, resident adoption, and billing responsibilities before a site audit.",
  },
  {
    question: "Are the guides written for technical or non-technical teams?",
    answer:
      "They are written for mixed committees. Each guide keeps engineering context clear enough for facility teams while explaining decision points in plain language for RWAs, developers, and finance teams.",
  },
  {
    question: "Can Ebee customize a resource for our property?",
    answer:
      "Yes. After a site feasibility audit, Ebee can map the recommendations to your parking layout, electrical room constraints, sanctioned load, resident demand, and billing workflow.",
  },
];

export default function Resources() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "EV Charging Resources | EbeeCharge";

    const description =
      "Explore EbeeCharge EV charging blogs, guides, FAQs, downloads, and checklists for residential societies, developers, RWAs, and facility teams.";
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    metaDescription?.setAttribute("content", description);
    ogTitle?.setAttribute("content", "EV Charging Resources | EbeeCharge");
    ogDescription?.setAttribute("content", description);
  }, []);

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
      const matchesSearch =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.meta.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={handleOpenAudit} />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-300 bg-transparent">
          <div className="absolute top-0 left-0 w-full h-[640px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.16),rgba(255,255,255,0))] pointer-events-none z-0" />
          <div className="absolute top-1/4 left-1/4 w-[540px] h-[540px] bg-primary-300/20 blur-[140px] rounded-full pointer-events-none mix-blend-multiply z-0" />
          <div className="absolute bottom-0 right-1/4 w-[620px] h-[620px] bg-primary-200/30 blur-[150px] rounded-full pointer-events-none mix-blend-multiply z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 space-y-6 text-left sm:text-center lg:text-left sm:max-w-3xl sm:mx-auto lg:mx-0"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-neutral-700 shadow-sm backdrop-blur-xl">
                  <BookOpen className="h-4 w-4 text-primary-600" />
                  Resources
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-neutral-900 tracking-tight leading-[1.05] font-display drop-shadow-sm">
                  EV Charging
                  <br className="hidden sm:block" /> Knowledge for{" "}
                  <span className="text-primary-600 relative inline-block drop-shadow-sm">
                    Smarter Properties.
                  </span>
                </h1>

                <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium sm:mx-auto lg:mx-0">
                  Practical blogs, EV guides, FAQs, and downloads for RWAs,
                  developers, facility teams, and EV owners evaluating app-less
                  WhatsApp + UPI charging infrastructure.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:items-center sm:justify-center lg:justify-start">
                  <motion.a
                    href="#featured-content"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-5 bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-950 font-black text-[14px] rounded-2xl tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] flex items-center justify-center gap-3 leading-none overflow-hidden border border-primary-300/50"
                  >
                    <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    Explore Resources
                    <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform drop-shadow-sm" />
                  </motion.a>

                  <button
                    type="button"
                    onClick={handleOpenAudit}
                    className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl border border-neutral-300 bg-white/75 text-neutral-900 text-[14px] font-black uppercase tracking-wider shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                  >
                    Request Audit
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-[32px] border border-white/70 bg-white/80 p-4 sm:p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <div className="absolute -inset-8 rounded-[42px] bg-primary-500/10 blur-3xl pointer-events-none" />
                  <div className="relative space-y-3">
                    {featuredResources.map((resource, index) => (
                      <motion.article
                        key={resource.title}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.08 }}
                        className="rounded-2xl border border-neutral-200/70 bg-neutral-200/70 p-4 transition-all duration-300 hover:border-primary-300 hover:bg-white"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-wider text-primary-600">
                              {resource.type}
                            </p>
                            <h2 className="mt-2 text-sm font-extrabold leading-snug text-neutral-900">
                              {resource.title}
                            </h2>
                          </div>
                          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-neutral-500">
                            {resource.readTime}
                          </span>
                        </div>
                        <p className="mt-3 text-[12px] leading-relaxed text-neutral-500">
                          {resource.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-neutral-300/50 pt-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                            {resource.accent}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-primary-600" />
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="search" className="py-12 bg-neutral-50 border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 items-center">
              <label className="relative block">
                <span className="sr-only">Search resources</span>
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search guides, billing, WhatsApp, Smart DB, site audit..."
                  className="w-full rounded-2xl border border-neutral-200 bg-white py-4 pl-12 pr-4 text-sm font-semibold text-neutral-900 placeholder:text-neutral-400 shadow-sm outline-none transition-all focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                />
              </label>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.value;

                  return (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() => setActiveCategory(category.value)}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-[12px] font-black uppercase tracking-wider transition-all ${
                        isActive
                          ? "bg-neutral-900 text-primary-500 shadow-lg shadow-neutral-900/15"
                          : "border border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:text-neutral-900"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="featured-content" className="py-20 bg-white border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-[11px] font-black uppercase tracking-wider text-primary-600">
                Featured Content
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                Start with the decisions that shape your charging network.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource, index) => (
                <motion.article
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-neutral-200/60 bg-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-300/30"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary-600 shadow-sm">
                      {resource.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-neutral-500">
                      <Clock className="h-3.5 w-3.5" />
                      {resource.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold leading-tight text-neutral-900">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {resource.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-4">
                    <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                      {resource.accent}
                    </span>
                    <span className="rounded-full bg-primary-100 p-2 text-primary-600 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-neutral-950">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="resource-grid" className="py-20 bg-neutral-50 border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-primary-600">
                  Resource Grid
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                  Browse practical Ebee knowledge.
                </h2>
              </div>
              <p className="text-sm font-semibold text-neutral-500">
                {filteredResources.length} resources shown
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <Link key={resource.title} to={resource.href} className="block h-full">
                  <motion.article
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    viewport={{ once: true }}
                    className="group h-full rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-neutral-300/30"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-neutral-600">
                        {resource.label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-neutral-500">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {resource.readTime}
                      </span>
                    </div>
                    <h3 className="mt-6 text-base font-extrabold leading-tight text-neutral-900">
                      {resource.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
                      {resource.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
                      <span className="text-[11px] font-bold text-neutral-500">
                        {resource.meta}
                      </span>
                      <ChevronRight className="h-5 w-5 text-primary-600 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center">
                <Search className="mx-auto mb-4 h-10 w-10 text-neutral-300" />
                <p className="text-sm font-bold text-neutral-700">No resources matched your search.</p>
                <p className="mt-2 text-[12px] text-neutral-500">
                  Try searching for Smart DB, billing, WhatsApp, UPI, or site audit.
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="downloads" className="py-20 bg-white border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <p className="text-[11px] font-black uppercase tracking-wider text-primary-600">
                  Downloads
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                  Tools your committee can use before the first site walk.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  Compact documents for planning, committee review, vendor comparison,
                  and early internal alignment.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                {downloads.map((download, index) => (
                  <motion.article
                    key={download.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-5 transition-all duration-300 hover:border-primary-300 hover:bg-white hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <Download className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500">
                      {download.format}
                    </span>
                    <h3 className="mt-2 text-sm font-extrabold leading-snug text-neutral-900">
                      {download.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-relaxed text-neutral-500">
                      {download.description}
                    </p>
                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-wider text-primary-600"
                    >
                      Download
                      <ArrowDownToLine className="h-4 w-4" />
                    </button>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="resource-faq" className="py-20 bg-neutral-50 border-b border-neutral-200/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary-500" />
                Resource FAQ
              </h2>
              <p className="mt-2 text-xs text-neutral-500 font-mono">
                Quick context before you choose a guide or request an audit
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="bg-white border border-neutral-200/50 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 flex justify-between items-center gap-4 text-neutral-900 font-extrabold text-sm tracking-tight focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <span className="shrink-0 p-1 bg-neutral-50 border border-neutral-200 rounded-lg text-primary-500">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-neutral-500 text-[12px] leading-relaxed font-body font-normal border-t border-neutral-200/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 border-b border-primary-600/30 font-body relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950/10 text-neutral-950">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 mb-4">
              Need guidance for your exact property?
            </h2>
            <p className="text-neutral-900 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Request a feasibility audit and Ebee will evaluate your electrical
              room, parking layout, resident demand, billing model, and load
              balancing path.
            </p>

            <motion.button
              type="button"
              onClick={handleOpenAudit}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-neutral-950 text-primary-500 font-black text-[14px] rounded-2xl tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] inline-flex items-center justify-center gap-3 leading-none overflow-hidden border border-neutral-800"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Request Site Audit
              <Zap className="w-5 h-5 stroke-[3] group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </section>
      </main>

      <Footer onRequestAudit={handleOpenAudit} />

      <FeasibilityModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialPropertyName=""
        initialEmail=""
      />
    </div>
  );
}

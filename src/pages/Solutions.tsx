import { useEffect } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CarFront,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Gauge,
  Home,
  MessageSquare,
  PlugZap,
  ReceiptIndianRupee,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface SolutionsPageProps {
  onRequestAudit: () => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 1.02, 0.49, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const audiences = [
  {
    id: "developers",
    icon: Building2,
    label: "Real Estate Developers",
    title: "Turn the 20% EV mandate into a premium selling point.",
    summary:
      "Pre-wire projects with basic sockets and centralized intelligence, instead of loading every bay with expensive smart chargers.",
    bullets: ["Lower initial CAPEX", "EV-ready inventory from day one", "As-built SLDs and safety certification support"],
  },
  {
    id: "rwas",
    icon: Home,
    label: "Residential Societies",
    title: "Eliminate basement cable chaos for RWAs.",
    summary:
      "Residents charge in their own assigned slots while the society gets clean billing, controlled access, and safer electrical management.",
    bullets: ["Automated UPI recovery", "Fair usage billing", "Thermal monitoring and dead-until-authorized sockets"],
  },
  {
    id: "individual-users",
    icon: Users,
    label: "Individual EV Users",
    title: "Charge with WhatsApp and UPI. No app, no wallet.",
    summary:
      "The driver parks, plugs in, scans the socket QR, pays by UPI, and gets a digital receipt in WhatsApp.",
    bullets: ["Normal parking slot charging", "No proprietary wallet lock-in", "Simple top-up and stop-session flow"],
  },
];

const challenges = [
  {
    icon: ShieldCheck,
    title: "Safety disputes",
    text: "Ad hoc resident wiring creates visual clutter, cable risk, and fire-safety concerns in basements and podiums.",
  },
  {
    icon: Gauge,
    title: "Transformer anxiety",
    text: "Societies worry that uncontrolled evening charging will trip breakers or force expensive power upgrades.",
  },
  {
    icon: ReceiptIndianRupee,
    title: "Billing friction",
    text: "Flat-rate recovery and manual electricity collections lead to disputes between EV owners and the society.",
  },
  {
    icon: Smartphone,
    title: "App fatigue",
    text: "Drivers do not want another charging app, signup process, Bluetooth pairing flow, or prepaid wallet.",
  },
];

const solutionSteps = [
  {
    eyebrow: "01",
    title: "Centralize the intelligence",
    text: "The Smart DB handles metering, relay control, safety logic, connectivity, and load management from one controlled electrical point.",
  },
  {
    eyebrow: "02",
    title: "Keep bays simple",
    text: "Parking slots get basic sockets and QR codes, so every resident can access charging without per-bay internet or heavy smart hardware.",
  },
  {
    eyebrow: "03",
    title: "Let WhatsApp run the session",
    text: "Users scan, select the amount or units, pay through UPI, and receive receipts in the same familiar chat flow.",
  },
  {
    eyebrow: "04",
    title: "Protect the property load",
    text: "Dynamic load balancing throttles and staggers charging during peak periods so EV adoption can scale safely.",
  },
];

const stats = [
  { value: "20%", label: "EV-ready parking mandate target", detail: "2W and 4W parking readiness" },
  { value: ">95%", label: "charging happens at home", detail: "from Ebee's market context" },
  { value: "32", label: "AC sockets per Smart DB", detail: "central control from one unit" },
  { value: "15", label: "day audit to installation roadmap", detail: "site study to live handoff" },
];

const benefits = [
  "Residents charge in their assigned parking slots instead of queuing for shared chargers.",
  "Societies avoid manual collections because sessions are prepaid through UPI.",
  "Developers can make every bay EV-ready with centralized intelligence and simple endpoints.",
  "Facility teams get safer scaling through load limits, thermal checks, and controlled socket access.",
  "Properties can start small and add bays as EV adoption grows.",
  "Poor basement connectivity stops being a per-bay blocker because the DB carries the connection.",
];

const proofPoints = [
  {
    title: "Residential buildings",
    text: "Designed to solve basement connectivity, fair usage allocation, and resident charging in normal assigned slots.",
  },
  {
    title: "Commercial buildings",
    text: "One Smart DB can manage multiple bays while centralized overload management prevents peak-hour breaker trips.",
  },
  {
    title: "New construction",
    text: "Pre-wire from a Smart DB during construction so every bay can be EV-ready from day one at minimal additional cost.",
  },
  {
    title: "WBG engineering base",
    text: "Ebee's positioning builds on WBG experience including Singapore 450kW bus charging and 1.2MW charging hub deployments.",
  },
];

const faqs = [
  {
    q: "Will Ebee trip our building power?",
    a: "No. The Smart DB monitors available building load and can throttle, stagger, or delay socket activation during peak demand.",
  },
  {
    q: "Does the society need to collect money from residents?",
    a: "No. Residents pay upfront through UPI in the WhatsApp flow, while usage logs and settlement records stay digital.",
  },
  {
    q: "Can outsiders use society power?",
    a: "Sockets remain inactive until an authorized user scans the QR and starts a paid session.",
  },
  {
    q: "Why is this better for new construction?",
    a: "Developers can pre-wire from a Smart DB and make bays EV-ready at lower incremental cost, while preserving a premium resident experience.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/50 border border-primary-200/50 backdrop-blur-sm mb-5 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
        <span className="text-[11px] font-bold text-primary-700 uppercase tracking-widest leading-none">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.05] font-display">
        {title}
      </h2>
      {description && <p className="mt-5 text-sm sm:text-base text-neutral-500 leading-relaxed font-medium">{description}</p>}
    </motion.div>
  );
}

function setMeta(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

export function SolutionsPage({ onRequestAudit }: SolutionsPageProps) {
  useEffect(() => {
    document.title = "EV Charging Solutions for Indian Properties | EbeeCharge";

    const description =
      "EbeeCharge solutions for developers, RWAs, government authorities, and EV users using Smart DB, WhatsApp charging, UPI payments, and dynamic load balancing.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
    setMeta("og:title", "EV Charging Solutions for Indian Properties | EbeeCharge");
    setMeta("og:description", description);
  }, []);

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-28 border-b border-neutral-300 bg-transparent">
        <div className="absolute top-0 left-0 w-full h-[760px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.16),rgba(255,255,255,0))] pointer-events-none z-0" />
        <div className="absolute top-1/4 left-1/4 w-[620px] h-[620px] bg-primary-300/20 blur-[140px] rounded-full pointer-events-none mix-blend-multiply z-0" />
        <div className="absolute bottom-0 right-1/4 w-[720px] h-[720px] bg-primary-200/30 blur-[150px] rounded-full pointer-events-none mix-blend-multiply z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-6 space-y-7 text-left sm:text-center lg:text-left sm:max-w-2xl sm:mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/60 backdrop-blur-xl shadow-sm">
                <ClipboardCheck className="w-4 h-4 text-primary-600" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-700">Solutions for every stakeholder</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.45rem] font-black text-neutral-900 tracking-tight leading-[1.02] font-display drop-shadow-sm">
                EV-ready properties,
                <br className="hidden sm:block" />
                <span className="relative inline-block">
                  without resident friction.
                  <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-primary-400/45 -z-10" />
                </span>
              </h1>

              <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-xl font-medium sm:mx-auto lg:mx-0">
                Ebee turns the EV charging mandate into customer delight with centralized Smart DB infrastructure, WhatsApp charging, UPI payments, and dynamic load management for Indian properties.
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-xl sm:mx-auto lg:mx-0">
                {[
                  ["20%", "EV-ready mandate"],
                  ["32", "bays per Smart DB"],
                  ["No app", "WhatsApp + UPI"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-sm backdrop-blur-xl">
                    <div className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 font-display">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-bold leading-tight text-neutral-500">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:items-center sm:justify-center lg:justify-start">
                <motion.button
                  onClick={onRequestAudit}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-9 py-5 bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-950 font-black text-[14px] rounded-2xl tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] flex items-center justify-center gap-3 leading-none overflow-hidden border border-primary-300/50"
                >
                  <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  Request Site Audit
                  <ArrowRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <a
                  href="#audiences"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 bg-white/65 px-7 py-5 text-[13px] font-black uppercase tracking-wider text-neutral-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,221,52,0.26)_0%,transparent_65%)] scale-[1.2] blur-3xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/70 bg-[#FEFAF7]/95 p-4 sm:p-6 shadow-[0_34px_90px_-38px_rgba(23,23,20,0.55)] backdrop-blur-xl">
                <div className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary-300/35 blur-3xl" />
                <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-neutral-900/10 blur-3xl" />

                <div className="relative flex items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-[0_18px_50px_-28px_rgba(23,23,20,0.45)]">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-700">Live property activation</span>
                    <h3 className="mt-1 text-xl sm:text-2xl font-black tracking-tight text-neutral-900">One Smart DB lights up every bay.</h3>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-primary-500 shadow-xl shadow-neutral-900/20">
                    <CircuitBoard className="h-7 w-7" />
                  </div>
                </div>

                <div className="relative mt-5 rounded-[2rem] border border-neutral-200/70 bg-white/55 p-4 shadow-inner">
                  <div className="absolute left-1/2 top-8 bottom-8 w-px bg-primary-300/60" />
                  <motion.div
                    className="absolute left-1/2 top-8 h-24 w-px bg-gradient-to-b from-transparent via-primary-500 to-transparent"
                    animate={{ y: [0, 210, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["A-14", "RWA", true],
                      ["A-15", "Developer", true],
                      ["B-03", "Resident", true],
                      ["B-04", "Ready", false],
                      ["C-18", "UPI paid", true],
                      ["C-19", "Available", false],
                    ].map(([bay, tag, active], index) => (
                      <motion.div
                        key={bay}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.12 + index * 0.05, ease: "easeOut" }}
                        className={`relative min-h-[76px] rounded-2xl border p-3 shadow-sm ${
                          active ? "border-primary-200 bg-primary-50/80" : "border-white/70 bg-white/80"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm">
                            <CarFront className="h-4 w-4" />
                          </div>
                          {active && <span className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_18px_rgba(242,221,52,0.9)]" />}
                        </div>
                        <div className="mt-2 text-sm font-black text-neutral-900">{bay}</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-neutral-500">{tag}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-primary-300/60 bg-neutral-900 text-center text-primary-500 shadow-2xl shadow-neutral-900/30"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BatteryCharging className="h-7 w-7" />
                    <span className="mt-2 text-[9px] font-black uppercase tracking-widest">Smart DB</span>
                    <span className="text-2xl font-black text-white">32</span>
                    <span className="text-[9px] font-bold text-white/70">bays ready</span>
                  </motion.div>
                </div>

                <div className="relative mt-4 grid grid-cols-3 gap-3">
                  {[
                    { icon: MessageSquare, label: "WhatsApp", title: "Scan" },
                    { icon: ReceiptIndianRupee, label: "UPI", title: "Pay" },
                    { icon: Gauge, label: "Load safe", title: "Balance" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.35 + index * 0.08, ease: "easeOut" }}
                        className="rounded-2xl border border-white/70 bg-white/85 p-3 text-center shadow-sm"
                      >
                        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="mt-2 text-[9px] font-black uppercase tracking-widest text-primary-700">{item.label}</div>
                        <div className="text-sm font-black leading-tight text-neutral-900">{item.title}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-28 border-b border-neutral-300 bg-transparent overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-primary-300/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Industry challenges"
            title="The current EV setup creates work for everyone."
            description="The problem is rarely demand. The problem is how charging gets installed, paid for, authorized, and kept safe as EV ownership grows."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-3xl bg-[#FEFAF7]/95 border border-white/60 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-extrabold text-neutral-900 tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative py-14 md:py-28 border-b border-neutral-300 bg-transparent overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FDF4C4] rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionHeader
                align="left"
                eyebrow="How Ebee solves it"
                title="One Smart DB. Many simple bays."
                description="Ebee moves the complexity out of every parking slot and into a controlled, centralized electrical system."
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:col-span-7 space-y-4"
            >
              {solutionSteps.map((step) => (
                <motion.article key={step.title} variants={fadeUp} className="group rounded-3xl border border-white/70 bg-white/75 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:bg-white hover:-translate-y-1">
                  <div className="flex gap-4 sm:gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-neutral-900 text-primary-500 flex items-center justify-center text-sm font-black shadow-lg shadow-neutral-900/15">
                      {step.eyebrow}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900">{step.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-neutral-500 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="audiences" className="relative scroll-mt-32 py-14 md:py-28 border-b border-neutral-300 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Stakeholder portals"
            title="Built for the people who approve, operate, and use charging."
            description="Each audience gets the same low-friction infrastructure, tuned to the decision that matters most to them."
          />
          <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.article
                  id={audience.id}
                  key={audience.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.06 }}
                  className="group relative scroll-mt-32 overflow-hidden rounded-[2rem] border border-white/70 bg-[#FEFAF7]/95 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_-30px_rgba(23,23,20,0.35)]"
                >
                  <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-primary-100/70 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex h-full flex-col gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-primary-50 border border-white shadow-[0_8px_20px_rgba(242,221,52,0.22)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex h-full flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary-700">{audience.label}</span>
                      <h3 className="mt-2 text-xl lg:text-2xl font-black tracking-tight text-neutral-900 leading-tight">{audience.title}</h3>
                      <p className="mt-4 text-sm text-neutral-500 leading-relaxed">{audience.summary}</p>
                      <ul className="mt-auto pt-5 grid grid-cols-1 gap-2.5">
                        {audience.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-xs font-bold leading-snug text-neutral-700">
                            <CheckCircle2 className="mt-0.5 w-4 h-4 text-primary-600 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-28 border-b border-neutral-300 bg-transparent overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-primary-300/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Benefits"
                title="Lower admin, lower CAPEX, better resident experience."
                description="The core promise stays simple: make EV readiness easier to approve, easier to operate, and easier to use."
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-3xl border border-white/70 bg-white/75 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)] backdrop-blur-xl"
                >
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-primary-600 shrink-0" />
                  <p className="text-sm sm:text-base font-bold leading-relaxed text-neutral-800">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-28 border-b border-neutral-300 bg-transparent overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-[520px] h-[520px] bg-[#FDF4C4] rounded-full blur-[130px] pointer-events-none mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Deployment proof"
            title="Built around real property deployment patterns."
            description="The page avoids invented case-study names and instead uses the deployment contexts documented in Ebee's company material."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {proofPoints.map((point) => (
              <motion.article
                key={point.title}
                variants={fadeUp}
                className="rounded-3xl bg-[#FEFAF7]/95 border border-white/60 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-5 shadow-sm">
                  <FileCheck2 className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-extrabold text-neutral-900 tracking-tight">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{point.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-14 md:py-28 border-b border-neutral-300 bg-transparent overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/10 blur-[110px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <SectionHeader
                align="left"
                eyebrow="Operating model"
                title="A cleaner architecture for AC and DC charging."
                description="Use Smart DB based AC charging for everyday home charging, then add movable DC charging where fast top-ups need to reach any bay."
              />
            </motion.div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: CircuitBoard,
                  title: "Smart DB AC charging",
                  text: "Controls up to 32 AC charging points with one connectivity gateway, precision metering, thermal monitoring, and staggered power-on.",
                },
                {
                  icon: PlugZap,
                  title: "Basic socket access",
                  text: "Each bay stays cost-effective with a 16A socket and QR activation, reducing per-slot hardware complexity.",
                },
                {
                  icon: Zap,
                  title: "Movable DC charging",
                  text: "For fast charging, Ebee's movable DC approach can serve vehicles through secured 63A mechanical interlock socket loops.",
                },
                {
                  icon: MessageSquare,
                  title: "Same user journey",
                  text: "Slow AC or movable DC, the user experience stays familiar: park, plug, scan, pay, charge, and receive a receipt.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="rounded-3xl bg-white/80 border border-white/70 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-900 text-primary-500 flex items-center justify-center mb-5 shadow-lg shadow-neutral-900/15">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-neutral-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-transparent border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="rounded-3xl border border-white/70 bg-[#FEFAF7]/90 p-5 sm:p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.035)]"
              >
                <div className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 font-display">{stat.value}</div>
                <div className="mt-2 text-xs sm:text-sm font-extrabold text-neutral-800 leading-tight">{stat.label}</div>
                <div className="mt-2 text-[10px] sm:text-xs text-neutral-500 leading-snug">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-28 border-b border-neutral-300 bg-transparent overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Society meeting FAQ"
            title="The objections your committee will ask first."
            description="Short answers for the practical questions that decide whether a charging proposal moves forward."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <motion.article
                key={faq.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="rounded-3xl bg-white/80 border border-white/70 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <h3 className="text-base sm:text-lg font-black tracking-tight text-neutral-900">{faq.q}</h3>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(242,221,52,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2rem] sm:rounded-[3rem] border border-white/70 bg-[#FEFAF7]/90 p-8 sm:p-12 shadow-[0_30px_80px_-45px_rgba(23,23,20,0.45)] backdrop-blur-xl"
          >
            <Factory className="mx-auto w-10 h-10 text-primary-600 mb-5" />
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 font-display leading-tight">
              Start with a feasibility audit.
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-neutral-500 leading-relaxed">
              Ebee maps your load capacity, parking layout, Smart DB count, SLD route, billing model, and installation roadmap before a single socket goes live.
            </p>
            <motion.button
              onClick={onRequestAudit}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mt-8 inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-primary-300/50 bg-gradient-to-r from-primary-400 to-primary-500 px-9 py-5 text-[13px] font-black uppercase tracking-wider text-neutral-950 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.65)]"
            >
              <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Request Your Site Feasibility Audit
              <ArrowRight className="relative w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

import { useEffect, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BatteryCharging,
  Building2,
  Cable,
  CalendarClock,
  CheckCircle2,
  Clock3,
  CreditCard,
  Gauge,
  MapPin,
  MessageCircle,
  ParkingCircle,
  PlugZap,
  RadioTower,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

import { FeasibilityModal } from "../components/FeasibilityModal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import basementNetworkImage from "../assets/case-study-basement-network.png";
import highwayHubImage from "../assets/case-study-highway-hub.png";
import mobileChargerImage from "../assets/case-study-mobile-charger.png";

const viewport = { once: true, amount: 0.18 };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 34 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.21, 1.02, 0.49, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const outcomes = [
  { value: "40%", label: "reduction in charging wait time", icon: Clock3 },
  { value: "3x", label: "increase in EV adoption confidence", icon: Users },
  { value: "99%", label: "charger uptime target", icon: RadioTower },
  { value: "60%", label: "better parking flow efficiency", icon: ParkingCircle },
];

const driverProblems = [
  { title: "Chargers occupied too long", icon: Clock3 },
  { title: "Slow charging times", icon: BatteryCharging },
  { title: "Charging anxiety", icon: AlertTriangle },
  { title: "Poor charger availability", icon: MapPin },
  { title: "Lack of apartment charging", icon: Building2 },
  { title: "Power disruptions", icon: Zap },
  { title: "Confusing payment systems", icon: CreditCard },
  { title: "Unreliable maintenance", icon: Wrench },
  { title: "Unsafe cable management", icon: Cable },
  { title: "No remote monitoring", icon: RadioTower },
  { title: "Parking misuse", icon: ParkingCircle },
  { title: "Limited night charging", icon: CalendarClock },
];

const platformSolutions = [
  "Smart load balancing",
  "Dynamic power sharing",
  "Remote monitoring",
  "Real-time charger status",
  "Smart scheduling",
  "Energy optimization",
  "Fleet management integration",
  "Secure payment systems",
  "Maintenance alerts",
  "User-friendly mobile experience",
];

const caseStudies = [
  {
    clientType: "Residential Society",
    place: "High-density apartment parking",
    headline: "Residents stopped fighting over charging access.",
    image: basementNetworkImage,
    icon: Building2,
    before: [
      "Residents fought over charging access",
      "Charging cables created parking clutter",
      "Slow charging wasted overnight hours",
      "No monitoring system for the RWA",
      "Visitors had no charging support",
    ],
    after: [
      "Smart scheduled charging",
      "Dedicated EV parking slots",
      "Mobile monitoring for residents and facility teams",
      "Faster overnight charging",
      "Load balancing avoided power failures",
      "Residents adopted EVs more confidently",
    ],
    metrics: ["3x higher EV adoption confidence", "40% shorter wait time", "99% charger uptime target"],
  },
  {
    clientType: "Shopping Mall",
    place: "Retail destination charging",
    headline: "Charging anxiety became more time spent inside the mall.",
    image: highwayHubImage,
    icon: ShoppingBag,
    before: [
      "Customers avoided long stays due to charging anxiety",
      "Poor charger visibility",
      "Long charging queues",
      "Difficult payment systems",
      "Parking congestion near charging bays",
    ],
    after: [
      "Fast charging bays increased customer retention",
      "Clear wayfinding and charger visibility",
      "Seamless payment experience",
      "Better parking management",
      "Customers spent more time shopping while charging",
    ],
    metrics: ["60% smoother parking flow", "Higher retail dwell time", "Fewer payment drop-offs"],
  },
  {
    clientType: "Commercial Office Building",
    place: "Workplace EV charging",
    headline: "Employees could commute without battery stress.",
    image: mobileChargerImage,
    icon: BarChart3,
    before: [
      "Employees worried about battery range during commute",
      "Limited charging points",
      "Peak-hour electricity load issues",
      "Manual charger management",
      "No clear charging usage visibility",
    ],
    after: [
      "Smart energy optimization",
      "Scheduled workplace charging",
      "Better employee satisfaction",
      "Sustainable workplace branding",
      "Reduced operational complexity",
    ],
    metrics: ["Lower peak-load pressure", "Better employee satisfaction", "Cleaner facility operations"],
  },
];

function setMeta(selector: string, attr: "name" | "property", attrValue: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function useCaseStudiesSeo() {
  useEffect(() => {
    const title = "Case Studies | EbeeCharge EV charging success stories";
    const description =
      "See how EbeeCharge solves everyday EV charging frustrations across residential societies, malls, office buildings, and public parking spaces.";

    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", "EbeeCharge Case Studies and Success Stories");
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
  }, []);
}

function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`}
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-100/50 px-4 py-2 shadow-sm backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-primary-500" />
        <span className="text-[11px] font-bold uppercase leading-none tracking-widest text-primary-700">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{copy}</p>}
    </motion.div>
  );
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-primary-300/50 bg-gradient-to-r from-primary-400 to-primary-500 px-7 py-4 text-[12px] font-black uppercase leading-none tracking-wider text-neutral-950 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] sm:px-9"
    >
      <span className="absolute inset-y-0 left-1/2 h-full w-1/2 -translate-x-1/2 skew-x-12 bg-white/30 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 stroke-[3] transition-transform group-hover:translate-x-1" />
    </motion.button>
  );
}

function HeroImageStack() {
  return (
    <motion.div
      animate={{ y: [-7, 7, -7] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto max-w-[560px]"
    >
      <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,221,52,0.24)_0%,transparent_65%)] blur-3xl" />
      <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#FEFAF7]/95 p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-7">
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-100/70 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-primary-300/20 blur-3xl" />

        {[
          {
            src: basementNetworkImage,
            alt: "Basement parking level with EbeeCharge charging points",
            className: "left-5 top-8 w-[76%]",
            rotate: -3,
            delay: 0,
          },
          {
            src: highwayHubImage,
            alt: "Outdoor EbeeCharge EV charging destination hub",
            className: "right-5 top-28 w-[58%]",
            rotate: 4,
            delay: 0.16,
          },
          {
            src: mobileChargerImage,
            alt: "EbeeCharge technician connecting a movable EV charger in a parking bay",
            className: "bottom-8 left-10 w-[62%]",
            rotate: -2,
            delay: 0.32,
          },
        ].map((image) => (
          <motion.figure
            key={image.alt}
            initial={{ opacity: 0, scale: 0.86, rotate: image.rotate * 1.8, y: 42 }}
            animate={{ opacity: 1, scale: 1, rotate: image.rotate, y: 0 }}
            transition={{ duration: 0.75, delay: image.delay, ease: [0.21, 1.02, 0.49, 1] }}
            className={`absolute overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_24px_54px_-22px_rgba(0,0,0,0.36)] ${image.className}`}
          >
            <img src={image.src} alt={image.alt} className="h-44 w-full object-cover sm:h-52" />
          </motion.figure>
        ))}

        <div className="absolute bottom-6 right-6 rounded-2xl border border-neutral-200/80 bg-white/90 p-4 shadow-xl shadow-neutral-300/30 backdrop-blur-xl">
          <span className="block text-[9px] font-black uppercase tracking-widest text-primary-700">Visible transformation</span>
          <p className="mt-1 text-sm font-extrabold leading-tight text-neutral-900">Less waiting. More confidence.</p>
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudiesHero() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-transparent pt-12 pb-16 lg:pt-20 lg:pb-28"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-[760px] w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 z-0 h-[560px] w-[560px] rounded-full bg-primary-300/20 blur-[140px] mix-blend-multiply" />
      <div className="pointer-events-none absolute bottom-10 right-0 z-0 h-[520px] w-[520px] rounded-full bg-primary-200/30 blur-[150px] mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-left sm:mx-auto sm:max-w-2xl sm:text-center lg:col-span-6 lg:mx-0 lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-[11px] font-bold uppercase leading-none tracking-widest text-primary-700">
                Case Studies / Success Stories
              </span>
            </motion.div>

            <motion.h1
              id="case-studies-title"
              variants={fadeUp}
              className="font-display text-4xl font-black leading-[1.05] tracking-tight text-neutral-900 drop-shadow-sm sm:text-6xl lg:text-[4.5rem]"
            >
              Building EV charging that{" "}
              <span className="relative inline-block text-primary-600 drop-shadow-sm">people actually use</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg font-medium leading-relaxed text-neutral-600 sm:mx-auto sm:text-xl lg:mx-0"
            >
              Designed to solve the everyday frustrations EV owners face — from long charging waits to unreliable
              infrastructure.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#story-flow"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white/70 px-7 py-4 text-[12px] font-black uppercase tracking-wider text-neutral-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950"
              >
                View stories
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative lg:col-span-6"
          >
            <HeroImageStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

  function DriverProblems() {
    return (
      <section id="driver-problems" aria-labelledby="driver-problems-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] bg-[length:24px_24px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Everyday friction"
            title="Problems EV Drivers Face Every Day"
            copy="Most charging failures are not dramatic. They are small daily frustrations that make EV ownership feel uncertain."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
          >
            {driverProblems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={popIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group rounded-3xl border border-white/60 bg-[#FEFAF7]/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:bg-white sm:p-5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white bg-gradient-to-br from-white to-primary-50 shadow-[0_8px_20px_rgba(242,221,52,0.18)]">
                  <problem.icon className="h-5 w-5 text-primary-600" />
                </div>
                <p className="text-sm font-extrabold leading-snug text-neutral-900">{problem.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

function OutcomeMetrics() {
  return (
    <section id="impact-metrics" aria-labelledby="impact-metrics-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-14 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {outcomes.map((metric) => (
            <motion.article
              key={metric.label}
              variants={popIn}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl border border-white/60 bg-[#FEFAF7]/95 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:p-6"
            >
              <metric.icon className="mb-8 h-7 w-7 text-primary-600" />
              <span className="block font-display text-4xl font-black leading-none text-neutral-900 sm:text-5xl">{metric.value}</span>
              <span className="mt-3 block text-[10px] font-black uppercase tracking-widest text-primary-700">{metric.label}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// DriverProblems section removed

function PlatformSolutions() {
  return (
    <section id="platform-solutions" aria-labelledby="platform-solutions-title" className="border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="How Ebee solves it"
              title="A connected platform for calmer charging days."
              copy="The system combines hardware, monitoring, payments, and scheduling so the driver experience feels reliable and the operator experience stays manageable."
              align="left"
            />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8"
          >
            {platformSolutions.map((solution) => (
              <motion.div
                key={solution}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white/70 px-4 py-3 text-sm font-bold text-neutral-700 shadow-sm backdrop-blur-xl"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                <span>{solution}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StoryFlow() {
  return (
    <section id="story-flow" aria-labelledby="story-flow-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary-300/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before vs after"
          title="Success stories that feel different after installation."
          copy="Each case study is told through the emotional shift: from uncertainty and queues to confidence, visibility, and smoother parking flow."
        />

        <div className="mt-12 space-y-8">
          {caseStudies.map((story, index) => (
            <motion.article
              key={story.clientType}
              initial={{ opacity: 0, y: 44, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.21, 1.02, 0.49, 1] }}
              className="overflow-hidden rounded-[2rem] border border-white/60 bg-[#FEFAF7]/95 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[320px] overflow-hidden lg:col-span-5">
                  <img src={story.image} alt={`${story.clientType} EV charging case study`} className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-neutral-950">
                      <story.icon className="h-5 w-5" />
                    </div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-primary-400">{story.clientType}</span>
                    <h3 className="mt-2 text-2xl font-black tracking-tight">{story.headline}</h3>
                    <p className="mt-2 text-sm font-bold text-white/70">{story.place}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Before</span>
                      <ul className="mt-4 space-y-3">
                        {story.before.map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-neutral-600">
                            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary-700">After</span>
                      <ul className="mt-4 space-y-3">
                        {story.after.map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-bold leading-relaxed text-neutral-800">
                            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {story.metrics.map((metric) => (
                      <span key={metric} className="rounded-full border border-primary-200/60 bg-primary-100/50 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary-700">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HumanCenteredClose() {
  return (
    <section id="success-story-close" aria-labelledby="success-story-close-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.21, 1.02, 0.49, 1] }}
          className="overflow-hidden rounded-[2rem] border border-neutral-900 bg-neutral-900 shadow-xl shadow-neutral-900/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative min-h-[320px] lg:col-span-7">
              <img src={highwayHubImage} alt="EbeeCharge public EV charging destination hub" className="h-full min-h-[320px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/20 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:col-span-5">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">The feeling after rollout</span>
              <h2 id="success-story-close-title" className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl">
                These chargers actually solve real EV problems.
              </h2>
              <p className="mt-5 text-sm font-medium leading-relaxed text-white/65 sm:text-base">
                The outcome is not just a working charger. It is a calmer parking experience, fewer support calls, more
                confident EV owners, and a property that feels ready for the future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesCta({ onRequestAudit }: { onRequestAudit: () => void }) {
  return (
    <section id="case-studies-cta" aria-labelledby="case-studies-cta-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,221,52,0.18)_0%,transparent_58%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="mb-5 flex items-center justify-center gap-2">
          <PlugZap className="h-5 w-5 text-primary-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary-700">Build your own success story</span>
        </div>
        <h2 id="case-studies-cta-title" className="font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-5xl">
          Turn EV charging from a complaint into an amenity.
        </h2>
        <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
          Start with a site feasibility audit. EbeeCharge will map charging demand, parking behavior, power limits,
          payment flow, and the improvements your users should feel every day.
        </p>
        <div className="mt-8">
          <PrimaryButton onClick={onRequestAudit}>Request feasibility audit</PrimaryButton>
        </div>
      </motion.div>
    </section>
  );
}

export default function CaseStudies() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useCaseStudiesSeo();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-transparent font-body text-neutral-800 selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={() => setIsAuditModalOpen(true)} />

      <main className="flex-1">
        <CaseStudiesHero />
        <OutcomeMetrics />
    <DriverProblems />
        <PlatformSolutions />
        <StoryFlow />
        <HumanCenteredClose />
        <CaseStudiesCta onRequestAudit={() => setIsAuditModalOpen(true)} />
      </main>

      <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />

      <FeasibilityModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  );
}

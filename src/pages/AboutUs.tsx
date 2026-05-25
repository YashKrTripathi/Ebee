import Shuffle from "../components/ui/Shuffle";
import { useEffect, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Award, BadgeCheck, Building2, CheckCircle2, CircuitBoard, Globe2, Landmark, MapPin, RadioTower, ShieldCheck, Sparkles, Users, Waypoints, Zap } from "lucide-react";
import ebeeLogo from "../assets/ebee-charge-logo.svg";
import { FeasibilityModal } from "../components/FeasibilityModal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import DecryptedText from "../components/ui/DecryptedText";
const viewport = {
  once: true,
  amount: 0.18
};
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut"
    }
  }
};
const stagger: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08
    }
  }
};
const markets = [{
  id: "singapore-operations",
  city: "Singapore",
  label: "Regional engineering discipline",
  copy: "High-reliability operating standards, structured site documentation, and commissioning rigor inform every ebee deployment.",
  icon: Landmark
}, {
  id: "malaysia-operations",
  city: "Malaysia",
  label: "Scalable property operations",
  copy: "Multi-site learnings help the team design practical rollouts for dense residential, commercial, and mixed-use buildings.",
  icon: Building2
}, {
  id: "thailand-operations",
  city: "Thailand",
  label: "Regional deployment awareness",
  copy: "Southeast Asian infrastructure exposure shapes a service model that is compact, flexible, and property-team friendly.",
  icon: Globe2
}, {
  id: "india-operations",
  city: "India",
  label: "Mandate-ready EV infrastructure",
  copy: "EbeeCharge focuses on Indian RWAs, developers, and authorities that need app-less charging with UPI-native billing.",
  icon: MapPin
}];
const timeline = [{
  marker: "01",
  title: "WBG engineering foundation",
  copy: "Electrical infrastructure, field execution, and operating discipline form the base layer behind the EbeeCharge platform."
}, {
  marker: "02",
  title: "Property-first EV charging",
  copy: "The team focused on the hard problem inside buildings: safe load sharing, clear billing, and low-disruption installation."
}, {
  marker: "03",
  title: "WhatsApp and UPI experience",
  copy: "Charging moved from app downloads and wallet top-ups into the tools residents already use every day."
}, {
  marker: "04",
  title: "Smart DB operating model",
  copy: "Centralized control, smart metering, and remote monitoring came together to convert EV mandates into managed services."
}];
const achievements = ["App-less charging through WhatsApp", "UPI-native payments with digital receipts", "Dynamic load balancing for shared transformers", "Centralized Smart DB architecture", "Fair usage billing for RWAs and facility teams", "Remote monitoring for lower operating effort"];
const leadershipPods = [{
  title: "Grid Engineering",
  copy: "Electrical planning, Smart DB sizing, load-balancing logic, and commissioning controls for safe building operations.",
  icon: CircuitBoard
}, {
  title: "Product and Payments",
  copy: "WhatsApp workflows, UPI payment flows, resident receipts, dashboards, and billing visibility for property stakeholders.",
  icon: Waypoints
}, {
  title: "Customer Success",
  copy: "RWA onboarding, site audits, rollout coordination, training, and long-term monitoring for active charging communities.",
  icon: Users
}];
function setMeta(selector: string, attr: "name" | "property", attrValue: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
function useAboutSeo() {
  useEffect(() => {
    const title = "About EbeeCharge | WBG-backed app-less EV charging infrastructure";
    const description = "Learn about EbeeCharge, the WBG-backed EV charging company turning building EV mandates into WhatsApp-based, UPI-native customer delight.";
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", "About EbeeCharge");
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
  }, []);
}
function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`}>
      <div className="mb-5 inline-flex items-center gap-2 border border-primary-200/60 bg-primary-100/50 px-4 py-2 shadow-sm backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-primary-500" />
        <span className="text-[11px] font-bold uppercase leading-none tracking-widest text-primary-700">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">{copy}</p>}
    </motion.div>;
}
function PrimaryButton({
  onClick,
  children
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return <motion.button type="button" onClick={onClick} whileHover={{
    scale: 1.02,
    y: -2
  }} whileTap={{
    scale: 0.98
  }} className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-primary-300/50 bg-gradient-to-r from-primary-400 to-primary-500 px-7 py-4 text-[12px] font-black uppercase leading-none tracking-wider text-neutral-950 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] sm:px-9">
      <span className="absolute inset-y-0 left-1/2 h-full w-1/2 -translate-x-1/2 skew-x-12 bg-white/30 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 stroke-[3] transition-transform group-hover:translate-x-1" />
    </motion.button>;
}
function AboutHero({
  onRequestAudit
}: {
  onRequestAudit: () => void;
}) {
  return <section id="about-us" aria-labelledby="about-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent pt-12 pb-16 lg:pt-20 lg:pb-28">
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-[760px] w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 z-0 h-[560px] w-[560px] rounded-full bg-primary-300/20 blur-[140px] mix-blend-multiply" />
      <div className="pointer-events-none absolute bottom-10 right-0 z-0 h-[520px] w-[520px] rounded-full bg-primary-200/30 blur-[150px] mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6 text-left sm:mx-auto sm:max-w-2xl sm:text-center lg:col-span-6 lg:mx-0 lg:text-left">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-primary-200/60 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-[11px] font-bold uppercase leading-none tracking-widest text-primary-700">
                WBG legacy. Ebee simplicity.
              </span>
            </motion.div>

            <motion.h1 id="about-title" variants={fadeUp} className="font-display text-4xl font-black leading-[1.05] tracking-tight text-neutral-900 drop-shadow-sm sm:text-6xl lg:text-[4.5rem]">
              <DecryptedText text="Building EV charging that" animateOn="view" clickMode="once" revealDirection="start" speed={60} maxIterations={10} sequential={true} useOriginalCharsOnly={false} />{" "}
              <span className="relative inline-block text-primary-600 drop-shadow-sm"><DecryptedText text="people actually use." animateOn="view" clickMode="once" revealDirection="start" speed={60} maxIterations={10} sequential={true} useOriginalCharsOnly={false} /></span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-xl text-lg font-medium leading-relaxed text-neutral-600 sm:mx-auto sm:text-xl lg:mx-0">
              EbeeCharge transforms the EV charging mandate from a compliance checkbox into customer delight: no apps,
              no wallets, just WhatsApp, UPI, smart metering, and engineering discipline.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryButton onClick={onRequestAudit}>Request site audit</PrimaryButton>
              <a href="mailto:hello@ebeecharge.in" className="inline-flex items-center justify-center border border-neutral-300 bg-white/70 px-7 py-4 text-[12px] font-black uppercase tracking-wider text-neutral-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950">
                <Shuffle text="Talk to the team" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30,
          scale: 0.96
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} transition={{
          duration: 0.9,
          ease: "easeOut",
          delay: 0.2
        }} className="relative lg:col-span-6">
            <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,221,52,0.24)_0%,transparent_65%)] blur-3xl" />
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -left-2 top-10 hidden max-w-[168px] border border-neutral-200/80 bg-white/95 p-4 shadow-xl shadow-neutral-300/30 backdrop-blur-xl sm:block">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-primary-600">Core promise</span>
                <p className="mt-1 text-xs font-extrabold leading-tight text-neutral-900">Mandate to delight</p>
              </div>
              <div className="absolute -right-2 bottom-10 hidden max-w-[168px] border border-neutral-200/80 bg-white/95 p-4 shadow-xl shadow-neutral-300/30 backdrop-blur-xl sm:block">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-primary-600">User flow</span>
                <p className="mt-1 text-xs font-extrabold leading-tight text-neutral-900">Scan. Pay. Charge.</p>
              </div>

              <div className="relative overflow-hidden -[2rem] border border-white/70 bg-[#FEFAF7]/95 p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-100/70 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-primary-300/20 blur-3xl" />

                <div className="relative flex min-h-[170px] items-center justify-center -[1.5rem] p-4 sm:p-6">
                  <img src={ebeeLogo} alt="EbeeCharge logo" className="mx-auto h-auto w-full max-w-[275px] object-contain" />
                </div>

                <div className="relative mt-6 grid grid-cols-3 gap-3 text-center">
                  {[["32", "points per Smart DB"], ["15", "day rollout lens"], ["0", "apps or wallets"]].map(([value, label]) => <div key={label} className="border border-neutral-200/70 bg-white/80 px-3 py-4 shadow-sm">
                      <span className="block font-display text-2xl font-black leading-none text-neutral-900">{value}</span>
                      <span className="mt-1 block text-[10px] font-bold uppercase leading-tight tracking-wider text-neutral-500">
                        {label}
                      </span>
                    </div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
function CompanyStory() {
  return <section id="company-story" aria-labelledby="company-story-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary-300/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Company story" title="A charging company built from the realities of buildings." copy="EbeeCharge starts with the property, not the plug. The system is designed around RWAs, developers, facility teams, and residents who need EV readiness without operational drama." align="left" />
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {[{
            title: "Mandates need management",
            copy: "Regulatory readiness only works when billing, load safety, resident access, and maintenance are handled together.",
            icon: BadgeCheck
          }, {
            title: "Residents need less friction",
            copy: "No one wants another app for a basic utility. WhatsApp plus UPI keeps the charging action familiar and fast.",
            icon: CheckCircle2
          }, {
            title: "Properties need lower CAPEX",
            copy: "Centralized Smart DB design reduces duplicated wiring and creates a cleaner, more maintainable electrical layout.",
            icon: CircuitBoard
          }, {
            title: "Operators need visibility",
            copy: "Remote monitoring, analytics, and fair usage billing give RWAs and facility teams the confidence to scale.",
            icon: RadioTower
          }].map(item => <motion.article key={item.title} variants={fadeUp} whileHover={{
            y: -6,
            scale: 1.01
          }} className="group border border-white/60 bg-[#FEFAF7]/95 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(242,221,52,0.3)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-gradient-to-br from-white to-primary-50 shadow-[0_8px_20px_rgba(242,221,52,0.2)]">
                  <item.icon className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-neutral-500">{item.copy}</p>
              </motion.article>)}
          </motion.div>
        </div>
      </div>
    </section>;
}
function MissionVision() {
  return <section id="mission" aria-labelledby="mission-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary-300/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="relative z-10 max-w-5xl">
          <span className="mb-5 inline-flex items-center gap-2 border border-primary-200/60 bg-primary-100/50 px-4 py-2 text-[11px] font-bold uppercase leading-none tracking-widest text-primary-700 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            Mission and vision
          </span>
          <h2 id="mission-title" className="font-display text-4xl font-black tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
            Be part of the evolution
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="relative z-10 mt-10 h-56 overflow-hidden -[2rem] border border-white/70 bg-neutral-900 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.28)] sm:h-72 md:h-80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(242,221,52,0.26),transparent_32%),radial-gradient(circle_at_78%_35%,rgba(56,189,248,0.22),transparent_34%)]" />
          <svg viewBox="0 0 1200 360" className="absolute inset-0 h-full w-full opacity-80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M-80 260C180 110 360 360 620 170C825 20 980 205 1280 72" fill="none" stroke="#F2DD34" strokeWidth="8" strokeLinecap="round" opacity="0.72" />
            <path d="M-70 310C180 205 410 310 620 225C820 144 1030 210 1290 125" fill="none" stroke="#FEFAF7" strokeWidth="5" strokeLinecap="round" opacity="0.58" />
            <path d="M-90 180C210 80 440 230 680 120C870 34 1025 112 1300 42" fill="none" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
            <path d="M-80 238C185 155 360 238 610 196C805 162 1005 230 1280 162" fill="none" stroke="#F2DD34" strokeWidth="3" strokeLinecap="round" opacity="0.5" strokeDasharray="18 20" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Integrated charging infrastructure</span>
            <span className="hidden border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/80 backdrop-blur sm:inline-flex">
              Planning to commissioning
            </span>
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="relative z-10 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.article id="mission-copy" variants={fadeUp} className="space-y-4">
            <span className="text-[11px] font-black uppercase tracking-widest text-primary-700">Our mission</span>
            <p className="text-xl font-semibold leading-relaxed text-neutral-900 sm:text-2xl">
              Our mission is to support our customers make the right decisions regarding their charging infrastructure,
              to guide and support them through the planning, implementation and regulatory approvals to install and
              commission curated solutions for EV Charging Systems in a convenient and compliant way.
            </p>
          </motion.article>

          <motion.article id="vision" variants={fadeUp} className="space-y-4">
            <span className="text-[11px] font-black uppercase tracking-widest text-primary-700">Our vision</span>
            <p className="text-xl font-semibold leading-relaxed text-neutral-900 sm:text-2xl">
              We want our customers to recognize us as an efficient, effective, and innovative provider of fully
              integrated charging infrastructure solutions.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>;
}
function WbgLegacy() {
  return <section id="wbg-legacy" aria-labelledby="wbg-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] bg-[length:24px_24px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="WBG legacy" title="Engineering heritage behind a consumer-simple experience." copy="The front end feels lightweight because the back end is serious: electrical planning, central distribution logic, load safety, billing controls, and remote observability." align="left" />
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {[["Engineering base", "WBG field discipline", ShieldCheck], ["Core hardware", "Smart DB and smart sockets", CircuitBoard], ["User interface", "WhatsApp plus UPI", Zap], ["Operations layer", "Dashboard, billing, analytics", RadioTower]].map(([label, value, Icon], index) => <motion.article key={label as string} variants={fadeUp} className={` border p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] ${index === 0 ? "border-neutral-800 bg-neutral-900 text-white" : "border-white/60 bg-[#FEFAF7]/95 text-neutral-900"}`}>
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border ${index === 0 ? "border-white/10 bg-white/10 text-primary-500" : "border-white bg-gradient-to-br from-white to-primary-50 text-primary-600"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${index === 0 ? "text-primary-400" : "text-primary-700"}`}>
                  {label as string}
                </span>
                <h3 className={`mt-2 text-xl font-extrabold tracking-tight ${index === 0 ? "text-white" : "text-neutral-900"}`}>
                  {value as string}
                </h3>
              </motion.article>)}
          </motion.div>
        </div>
      </div>
    </section>;
}
function TimelineSection() {
  return <section id="timeline" aria-labelledby="timeline-title" className="border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Timeline" title="How the platform came together." copy="The EbeeCharge journey is a series of product decisions that reduce friction for residents while increasing control for property teams." />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-neutral-300 md:block" />
          <div className="grid grid-cols-1 gap-4">
            {timeline.map(item => <motion.article key={item.title} variants={fadeUp} className="relative md:pl-16">
                <div className="absolute left-0 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-primary-200 bg-primary-100 text-[11px] font-black text-primary-700 shadow-sm md:flex">
                  {item.marker}
                </div>
                <div className="border border-white/60 bg-[#FEFAF7]/95 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-700">Phase {item.marker}</span>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-neutral-900">{item.title}</h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-neutral-500">{item.copy}</p>
                </div>
              </motion.article>)}
          </div>
        </motion.div>
      </div>
    </section>;
}
function GlobalPresence() {
  return <section id="global-presence" aria-labelledby="presence-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Global presence" title="Regional insight, Indian building focus." copy="EbeeCharge combines Southeast Asian operating exposure with a focused Indian EV infrastructure model for societies, developers, authorities, and commercial buildings." />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map(market => <motion.article key={market.city} id={market.id} variants={fadeUp} whileHover={{
          y: -6,
          scale: 1.01
        }} className="border border-white/60 bg-[#FEFAF7]/95 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(242,221,52,0.3)]">
              <market.icon className="mb-8 h-8 w-8 text-primary-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-700">{market.label}</span>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-neutral-900">{market.city} Operations</h3>
              <p className="mt-4 text-sm font-normal leading-relaxed text-neutral-500">{market.copy}</p>
            </motion.article>)}
        </motion.div>
      </div>
    </section>;
}
function AchievementsLeadership() {
  return <section id="achievements" aria-labelledby="achievements-title" className="border-b border-neutral-300 bg-transparent py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Achievements" title="Designed around the blockers that slow EV adoption." copy="EbeeCharge measures progress by practical outcomes: lower friction for residents, lower CAPEX for properties, and lower operating effort for managers." align="left" />

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {achievements.map(achievement => <motion.div key={achievement} variants={fadeUp} className="flex items-center gap-3 border border-neutral-200/80 bg-white/70 px-4 py-3 text-sm font-bold text-neutral-700 shadow-sm backdrop-blur-xl">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                  <span>{achievement}</span>
                </motion.div>)}
            </motion.div>
          </div>

          <div id="leadership" className="lg:col-span-7">
            <SectionHeader eyebrow="Team" title="A cross-functional team for hardware, software, and operations." copy="The leadership model is deliberately integrated because the customer experience depends on the electrical layer, the software layer, and the service layer working together." align="left" />

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {leadershipPods.map(pod => <motion.article key={pod.title} variants={fadeUp} className="border border-white/60 bg-[#FEFAF7]/95 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                  <pod.icon className="mb-6 h-7 w-7 text-primary-600" />
                  <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">{pod.title}</h3>
                  <p className="mt-3 text-[13px] font-normal leading-relaxed text-neutral-500">{pod.copy}</p>
                </motion.article>)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}
function AboutCta({
  onRequestAudit
}: {
  onRequestAudit: () => void;
}) {
  return <section id="about-cta" aria-labelledby="about-cta-title" className="relative overflow-hidden border-b border-neutral-300 bg-transparent py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,221,52,0.18)_0%,transparent_58%)]" />
      <motion.div initial={{
      opacity: 0,
      y: 24
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={viewport} transition={{
      duration: 0.8,
      ease: "easeOut"
    }} className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-center gap-2">
          <Award className="h-5 w-5 text-primary-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary-700">Audit-ready infrastructure</span>
        </div>
        <h2 id="about-cta-title" className="font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-5xl">
          Make your property EV-ready without making residents learn another app.
        </h2>
        <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-neutral-500 sm:text-base">
          Start with a site feasibility audit. EbeeCharge will map your parking, transformer load, Smart DB sizing, billing
          model, and implementation path.
        </p>
        <div className="mt-8">
          <PrimaryButton onClick={onRequestAudit}>Request feasibility audit</PrimaryButton>
        </div>
      </motion.div>
    </section>;
}
export default function AboutUs() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  useAboutSeo();
  return <div className="flex min-h-screen flex-col overflow-x-hidden bg-transparent font-body text-neutral-800 selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={() => setIsAuditModalOpen(true)} />

      <main className="flex-1">
        <AboutHero onRequestAudit={() => setIsAuditModalOpen(true)} />
        <CompanyStory />
        <MissionVision />
        <WbgLegacy />
        <TimelineSection />
        <GlobalPresence />
        <AchievementsLeadership />
        <AboutCta onRequestAudit={() => setIsAuditModalOpen(true)} />
      </main>

      <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />

      <FeasibilityModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>;
}
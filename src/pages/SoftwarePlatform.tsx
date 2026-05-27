import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import CountUp from "react-countup";

import { FeasibilityModal } from "../components/FeasibilityModal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppSimulator } from "../components/WhatsAppSimulator";

const viewport = { once: true, margin: "-90px" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

function useSoftwarePlatformSeo() {
  useEffect(() => {
    const title = "EbeeCharge Software Platform | WhatsApp, UPI & Smart Dashboard";
    const description =
      "EbeeCharge software connects WhatsApp EV charging, UPI-native payments, and a Smart Dashboard for live socket monitoring, Smart DB health, and transformer-safe charging.";

    document.title = title;

    const setMeta = (attr: "name" | "property", value: string, content: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
  }, []);
}

function scrollToHashTarget() {
  const id = window.location.hash.replace("#", "");
  if (!id) return;

  window.setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, 300);
}

interface SoftwarePlatformProps {
  onRequestAudit?: () => void;
}

function WhatsAppIntegrationSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    "Detect Smart DB",
    "Select Socket",
    "Pay via UPI",
    "Monitor Live Charging",
    "Receive Digital Receipt"
  ];

  const features = [
    "No App Required",
    "No Wallet Needed",
    "UPI Native",
    "Instant Access",
    "Secure Payments",
    "Zero Learning Curve"
  ];

  return (
    <motion.section
      id="whatsapp-integration"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
      className="scroll-mt-36 rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#FEFAF7]/95 via-[#FDF2E5]/90 to-[#FEFAF7]/95 p-5 shadow-[0_20px_50px_-25px_rgba(23,23,20,0.28)] sm:p-7 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-200/15 blur-3xl" />
      </div>

      <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left: Phone Mockup */}
        <div className="flex justify-center items-center relative p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,221,52,0.25)_0%,transparent_65%)] scale-[1.5] blur-3xl pointer-events-none z-0"></div>
          
          <WhatsAppSimulator />
        </div>

        {/* Right: Content */}
        <div className="space-y-10 lg:pl-8 py-8 relative z-10">
          <motion.div variants={fadeUp}>
            <p className="text-[11px] font-black uppercase tracking-widest text-primary-700">WhatsApp Integration</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">EV Charging through <br/><span className="text-primary-600">WhatsApp & UPI</span></h2>
            <p className="mt-5 text-sm font-medium text-neutral-600 leading-relaxed max-w-md">
              EbeeCharge enables seamless EV charging sessions directly through WhatsApp with secure UPI-native payments and zero app dependency.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-center relative group cursor-pointer" onClick={() => setActiveStep(idx)}>
                {idx < steps.length - 1 && (
                  <div className="absolute left-[13px] top-8 h-8 w-[2px] bg-neutral-200"></div>
                )}
                <div className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${activeStep === idx ? "bg-primary-500 text-neutral-900 shadow-md shadow-primary-500/30 scale-110" : "bg-white text-neutral-500 border border-neutral-300"}`}>
                  {idx + 1}
                </div>
                <div className={`transition-all duration-300 ${activeStep === idx ? "opacity-100 translate-x-1" : "opacity-60"}`}>
                  <p className="text-[15px] font-bold text-neutral-900">{step}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 pt-6 border-t border-neutral-200/60">
            {features.map((feature, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-[11px] font-bold text-neutral-700 shadow-sm transition-all">
                {feature}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function SmartDashboardSection() {
  return (
    <motion.section
      id="smart-dashboard"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
      className="scroll-mt-36 overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#FEFAF7]/95 via-[#FDF2E5]/90 to-[#FEFAF7]/95 p-5 shadow-[0_20px_50px_-25px_rgba(23,23,20,0.28)] sm:p-7 lg:p-9 relative"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
        <div className="absolute -top-40 right-1/3 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl" />
        <div className="absolute bottom-20 -left-40 h-96 w-96 rounded-full bg-primary-200/15 blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div variants={fadeUp} className="mb-10">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary-700">Dashboard</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
            Command center for <span className="text-primary-600">every electron</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-medium text-neutral-600">Real-time EV infrastructure intelligence. Monitor sockets, load, and payment-linked sessions in one professional dashboard.</p>
        </motion.div>

        {/* Top 4 Metric Cards */}
        <motion.div variants={fadeUp} className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Energy", value: 12450, prefix: "", suffix: " kWh", icon: "⚡" },
            { label: "Revenue", value: 142000, prefix: "₹", suffix: "", icon: "💰" },
            { label: "Active Chargers", value: 28, prefix: "", suffix: " / 32", icon: "🔌" },
            { label: "Sessions Today", value: 156, prefix: "", suffix: "", icon: "📊" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:border-primary-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2">{metric.label}</p>
                  <div className="flex items-baseline gap-1">
                    {metric.prefix && <span className="text-lg font-bold text-neutral-600">{metric.prefix}</span>}
                    <span className="text-3xl font-black text-neutral-900">
                      <CountUp end={metric.value} duration={2} separator="," />
                    </span>
                    {metric.suffix && <span className="text-sm font-bold text-neutral-600">{metric.suffix}</span>}
                  </div>
                </div>
                <div className="text-2xl bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                  {metric.icon}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Middle 3 Columns */}
        <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-3 mb-6">
          
          {/* Column 1: Charger Status & Top Locations */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col h-full">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary-700 mb-4">Charger Status</p>
            <div className="grid grid-cols-4 gap-2.5 mb-8">
               {Array.from({ length: 16 }).map((_, i) => (
                 <div key={i} className={`aspect-square rounded-lg border font-bold text-[10px] flex items-center justify-center ${i % 3 === 0 ? "border-green-400 bg-green-50 text-green-700" : i % 7 === 0 ? "border-yellow-400 bg-yellow-50 text-yellow-700" : "border-neutral-200 bg-neutral-50 text-neutral-500"}`}>
                    {i % 3 === 0 ? "●" : "○"}
                 </div>
               ))}
            </div>
            
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary-700 mb-4 mt-auto">Top Locations</p>
            <div className="space-y-4">
               {[
                 { name: "Parkwood Apartments", value: "450 kWh" },
                 { name: "Tech Park SEZ", value: "320 kWh" },
                 { name: "City Mall", value: "280 kWh" }
               ].map(loc => (
                 <div key={loc.name} className="flex justify-between items-center text-[13px]">
                   <span className="font-semibold text-neutral-600">{loc.name}</span>
                   <span className="font-bold text-neutral-900">{loc.value}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Column 2: Energy Consumption */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary-700 mb-6">Energy Consumption</p>
            <div className="flex-1 flex flex-col justify-end min-h-[220px]">
              <div className="flex items-end justify-between gap-1.5 h-48 border-b border-neutral-200 pb-2">
                {[35, 42, 55, 48, 65, 82, 75, 60, 52, 45, 68, 70].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-primary-400 opacity-90 transition-opacity hover:opacity-100"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          {/* Column 3: Recent Sessions */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary-700 mb-4">Recent Sessions</p>
            <div className="space-y-3.5">
              {[
                { id: "TXN-8472", loc: "Socket A12", amount: "₹120", time: "2 mins ago", status: "Completed" },
                { id: "TXN-8471", loc: "Socket B04", amount: "₹340", time: "15 mins ago", status: "Completed" },
                { id: "TXN-8470", loc: "Socket C01", amount: "₹85", time: "1 hr ago", status: "Completed" },
                { id: "TXN-8469", loc: "Socket A08", amount: "₹210", time: "2 hrs ago", status: "Completed" },
                { id: "TXN-8468", loc: "Socket D12", amount: "₹150", time: "3 hrs ago", status: "Completed" },
              ].map(session => (
                <div key={session.id} className="flex justify-between items-center p-3.5 rounded-xl border border-neutral-100 bg-neutral-50">
                  <div>
                    <p className="text-[13px] font-bold text-neutral-900">{session.loc}</p>
                    <p className="text-[11px] font-medium text-neutral-500 mt-0.5">{session.id} • {session.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] font-bold text-green-600">{session.amount}</p>
                    <p className="text-[9px] font-bold text-neutral-400 uppercase mt-0.5">{session.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Load Distribution Over Time (Static Graph) */}
        <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wider text-primary-700 mb-6">Load Distribution Over Time</p>
          <div className="h-40 flex items-end gap-[3px] border-b border-neutral-200 pb-2">
            {[20, 25, 30, 22, 18, 15, 25, 45, 60, 80, 95, 85, 75, 88, 92, 85, 70, 60, 50, 45, 40, 35, 30, 25].map((h, i) => (
               <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-primary-300 opacity-90 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
             <span>00:00</span>
             <span>06:00</span>
             <span>12:00</span>
             <span>18:00</span>
             <span>23:59</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function SoftwarePlatform({ onRequestAudit }: SoftwarePlatformProps) {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  useSoftwarePlatformSeo();

  useEffect(() => {
    scrollToHashTarget();
    window.addEventListener("hashchange", scrollToHashTarget);
    return () => window.removeEventListener("hashchange", scrollToHashTarget);
  }, []);

  const openAudit = () => setIsAuditModalOpen(true);

  return (
    <div className="min-h-screen bg-transparent text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={openAudit} />

      <main className="flex-1">
        <section id="software-platform" className="relative overflow-hidden bg-transparent pt-12 pb-8 lg:pt-20 lg:pb-16">
          <div className="absolute top-0 left-0 h-[760px] w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))]" />
          <div className="absolute left-1/4 top-1/3 h-[560px] w-[560px] rounded-full bg-primary-300/20 blur-[140px] mix-blend-multiply" />
          <div className="absolute bottom-0 right-1/4 h-[640px] w-[640px] rounded-full bg-primary-200/30 blur-[150px] mix-blend-multiply" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 md:space-y-10">
              <WhatsAppIntegrationSection />
              <SmartDashboardSection />
            </div>
          </div>
        </section>
      </main>

      <Footer onRequestAudit={openAudit} />

      <FeasibilityModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialPropertyName=""
        initialEmail=""
      />
    </div>
  );
}

export default SoftwarePlatform;

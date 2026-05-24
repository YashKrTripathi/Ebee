import { useEffect, useState, useRef } from "react";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  CreditCard,
  Gauge,
  LockKeyhole,
  MessageCircle,
  MonitorDot,
  PlugZap,
  QrCode,
  RadioTower,
  ReceiptText,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import CountUp from "react-countup";

import { FeasibilityModal } from "../components/FeasibilityModal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const viewport = { once: true, margin: "-90px" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const whatsappSteps = [
  { icon: MessageCircle, title: "Send booth ID", text: "Resident texts booth number to Ebee's WhatsApp account." },
  { icon: QrCode, title: "View details", text: "Booth status, pricing, and available duration displayed instantly." },
  { icon: CreditCard, title: "Confirm payment", text: "User confirms session and UPI payment is initiated." },
  { icon: Zap, title: "Charging unlocks", text: "Socket powers on after payment verification." },
];

const whatsappBubbles = [
  { side: "right", text: "B2-18" },
  { side: "left", text: "Which booth? Enter booth ID to check status and pricing" },
  { side: "right", text: "Booth B2-18 selected" },
  { side: "left", text: "Booth details - Status: Available, Power: 7.4kW, Duration: 2 hours max" },
  { side: "left", text: "Estimated consumption: 11.2 kWh @ ₹8/kWh = ₹89.6" },
  { side: "right", text: "Start charging" },
  { side: "left", text: "Payment required. Tap to pay via UPI" },
  { side: "right", text: "Payment confirmed" },
  { side: "left", text: "✓ Charging started. Real-time updates will arrive here." },
];

const socketStates = [
  { bay: "A12", state: "Charging", power: "7.4kW", active: true },
  { bay: "A15", state: "Queued", power: "5.2kW", active: false },
  { bay: "B02", state: "Paid", power: "3.6kW", active: true },
  { bay: "B08", state: "Idle", power: "0.0kW", active: false },
  { bay: "C04", state: "Thermal OK", power: "6.8kW", active: true },
  { bay: "C11", state: "Locked", power: "0.0kW", active: false },
];

const activityFeed = [
  "UPI payment verified for Bay A12",
  "Smart DB shifted load from Phase R to Y",
  "Thermal sensor normal across 32 sockets",
  "WhatsApp receipt sent to resident",
];

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

function WhatsAppSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-advance timeline when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance when visible
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 5 ? prev + 1 : 0));
    }, 2000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const chargingJourney = [
    { title: "Park Vehicle", icon: "🚗", color: "from-blue-500 to-cyan-500" },
    { title: "Scan QR", icon: "📲", color: "from-purple-500 to-pink-500" },
    { title: "Message Sent", icon: "💬", color: "from-green-500 to-emerald-500" },
    { title: "Verify Payment", icon: "✓", color: "from-yellow-500 to-orange-500" },
    { title: "Socket Unlocks", icon: "🔓", color: "from-primary-500 to-primary-400" },
    { title: "Charging Starts", icon: "⚡", color: "from-primary-600 to-yellow-500" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="whatsapp-integration"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
      className="scroll-mt-36 rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#FEFAF7]/95 via-[#FDF2E5]/90 to-[#FEFAF7]/95 p-5 shadow-[0_20px_50px_-25px_rgba(23,23,20,0.28)] target:border-primary-400 target:shadow-[0_24px_52px_-16px_rgba(242,221,52,0.55)] sm:p-7 overflow-hidden"
    >
      <motion.div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-200/15 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      <div className="relative z-10">
        <motion.div variants={fadeUp} className="mb-12 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-primary-700">01 / WhatsApp Integration</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">Watch your charging journey <span className="text-primary-600">unfold</span> in real-time</h2>
            <p className="mt-4 max-w-xl text-sm font-medium text-neutral-600">From parking bay to live charging in seconds, powered by WhatsApp and Smart DB verification.</p>
          </div>
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-2xl sm:flex">
            <MessageCircle className="h-7 w-7" />
          </div>
        </motion.div>

        {/* Cinematic Charging Journey Timeline */}
        <motion.div variants={fadeUp} className="mb-12 relative">
          {/* Animated connecting line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
          <svg className="absolute top-0 left-0 w-full h-20 overflow-visible pointer-events-none" style={{ mixBlendMode: "multiply" }}>
            <motion.path
              d={`M 0 32 Q ${typeof window !== "undefined" ? window.innerWidth / 6 : 100} 8, ${typeof window !== "undefined" ? window.innerWidth / 3 : 200} 32 T ${typeof window !== "undefined" ? (window.innerWidth * 2) / 3 : 400} 32 T ${typeof window !== "undefined" ? window.innerWidth : 800} 32`}
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgb(242,221,52)", stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: "rgb(242,221,52)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgb(242,221,52)", stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>

          {/* Journey Steps */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {chargingJourney.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <motion.div
                  className="relative flex flex-col items-center gap-3 pt-4"
                  animate={activeStep === index ? { y: -4 } : {}}
                >
                  {/* Animated Node */}
                  <motion.div
                    className={`h-16 w-16 rounded-full flex items-center justify-center text-2xl shadow-lg relative`}
                    style={{
                      background: index <= activeStep
                        ? "linear-gradient(135deg, rgb(242,221,52), rgb(251,191,36))"
                        : "linear-gradient(135deg, rgb(229,231,235), rgb(209,213,219))",
                    }}
                    animate={{
                      boxShadow: index <= activeStep
                        ? ["0 0 0 rgba(242,221,52,0)", "0 0 20px rgba(242,221,52,0.6)", "0 0 0 rgba(242,221,52,0)"]
                        : "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 2.5, repeat: index <= activeStep ? Infinity : 0 }}
                  >
                    {step.icon}
                    {index <= activeStep && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary-500"
                        initial={{ scale: 0.8, opacity: 1 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Step Label */}
                  <motion.div
                    className="text-center"
                    animate={index <= activeStep ? { opacity: 1 } : { opacity: 0.6 }}
                  >
                    <p className="text-xs font-black uppercase tracking-wider text-primary-700">Step {index + 1}</p>
                    <p className="text-sm font-bold text-neutral-900">{step.title}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dual Layout: Phone + Visualization */}
        <motion.div variants={fadeUp} className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left: Charging Bay Visualization */}
          <div className="relative h-96 rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-white overflow-hidden shadow-2xl">
            {/* EV Bay Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-neutral-100 opacity-40" />
            
            {/* Animated EV Car */}
            <motion.div
              className="absolute top-1/4 left-1/4 text-6xl"
              animate={{
                x: activeStep >= 0 ? [0, 20, 0] : 0,
                y: activeStep >= 0 ? [0, -10, 0] : 0,
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🚗
            </motion.div>

            {/* Charging Socket */}
            <motion.div
              className="absolute bottom-1/4 right-1/4 text-5xl"
              animate={{
                scale: activeStep >= 4 ? [1, 1.1, 1] : 1,
                boxShadow: activeStep >= 4 ? ["0 0 0 rgba(242,221,52,0)", "0 0 30px rgba(242,221,52,0.8)", "0 0 0 rgba(242,221,52,0)"] : "0 0 0 rgba(0,0,0,0)",
              }}
              transition={{ duration: 1.5, repeat: activeStep >= 4 ? Infinity : 0 }}
            >
              ⚡
            </motion.div>

            {/* Animated Cable */}
            {activeStep >= 4 && (
              <motion.svg
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.path
                  d="M 150 180 Q 200 150, 280 200"
                  stroke="rgb(242,221,52)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="20,5"
                  initial={{ strokeDashoffset: 25 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.svg>
            )}

            {/* Floating Status Indicators */}
            <motion.div
              className="absolute top-6 right-6 rounded-full bg-white border-2 border-primary-500 px-4 py-2 text-xs font-bold text-primary-700 shadow-lg"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {activeStep >= 5 ? "🔋 Charging" : "Ready"}
            </motion.div>
          </div>

          {/* Right: WhatsApp Phone Interface */}
          <motion.div
            className="relative"
            variants={fadeUp}
          >
            {/* Premium Phone Frame */}
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] border-[12px] border-neutral-900 bg-neutral-900 shadow-2xl">
              {/* Camera Notch */}
              <div className="absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-3xl bg-neutral-900" />
              
              {/* Phone Screen */}
              <div className="relative flex flex-col bg-white h-[600px]">
                {/* WhatsApp Header */}
                <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3 pt-6 flex-shrink-0">
                  <motion.div
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageCircle className="text-white h-5 w-5" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">Ebee Charging</p>
                    <p className="text-[10px] font-medium text-white/80">
                      {activeStep >= 5 ? "Charging live" : "responding..."}
                    </p>
                  </div>
                </div>

                {/* Chat Messages */}
                <motion.div 
                  className="flex-1 overflow-hidden space-y-2 p-3 bg-white flex flex-col justify-end"
                >
                  <AnimatePresence mode="wait">
                    {activeStep >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="flex justify-end"
                      >
                        <div className="bg-[#F2DD34] rounded-lg rounded-br-sm px-3 py-2 max-w-[70%]">
                          <p className="text-xs font-medium text-neutral-950">Booth B2-18</p>
                        </div>
                      </motion.div>
                    )}
                    {activeStep >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, delay: 0.12 }}
                        className="flex justify-start"
                      >
                        <div className="bg-[#E5E5EA] rounded-lg rounded-bl-sm px-3 py-2 max-w-[70%]">
                          <p className="text-xs text-neutral-900">7.4kW • ₹8/kWh • Available now</p>
                        </div>
                      </motion.div>
                    )}
                    {activeStep >= 3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, delay: 0.24 }}
                        className="flex justify-end"
                      >
                        <div className="bg-[#F2DD34] rounded-lg rounded-br-sm px-3 py-2 max-w-[70%]">
                          <p className="text-xs font-medium text-neutral-950">Start charging</p>
                        </div>
                      </motion.div>
                    )}
                    {activeStep >= 4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, delay: 0.36 }}
                        className="flex justify-start"
                      >
                        <div className="bg-[#E5E5EA] rounded-lg rounded-bl-sm px-3 py-2 max-w-[70%]">
                          <p className="text-xs font-semibold text-green-600">✓ Payment verified</p>
                        </div>
                      </motion.div>
                    )}
                    {activeStep >= 5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, delay: 0.48 }}
                        className="flex justify-start"
                      >
                        <div className="bg-[#E5E5EA] rounded-lg rounded-bl-sm px-3 py-2 max-w-[70%]">
                          <p className="text-xs font-bold text-neutral-900">🔌 Live: 3.2 kWh • ₹25.60 • ETA 1h 45m</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Input Field */}
                <div className="border-t border-neutral-200 px-3 py-2 bg-neutral-50 flex items-center gap-2 flex-shrink-0">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    disabled
                    className="flex-1 text-xs bg-transparent text-neutral-400 placeholder-neutral-300 outline-none"
                  />
                  <motion.button
                    disabled
                    className="text-primary-600 opacity-50"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    ↓
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Auto-advance the timeline */}
        <motion.div
          className="h-1"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 12, repeat: Infinity }}
          onAnimationComplete={() => {
            if (activeStep < 5) {
              setActiveStep(activeStep + 1);
            } else {
              setActiveStep(0);
            }
          }}
        />
      </div>
    </motion.section>
  );
}

function UpiSection() {
  const [paymentStep, setPaymentStep] = useState(0);
  
  const paymentSteps = [
    { label: "QR Ready", icon: "📱", delay: 0 },
    { label: "Scanning", icon: "🔍", delay: 1 },
    { label: "Payment", icon: "₹", delay: 2 },
    { label: "Processing", icon: "⏳", delay: 3 },
    { label: "Verified", icon: "✓", delay: 4 },
    { label: "Unlocked", icon: "🔓", delay: 5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPaymentStep((prev) => (prev < paymentSteps.length - 1 ? prev + 1 : 0));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="upi-payment-system"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
      className="scroll-mt-36 rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#FEFAF7]/95 via-[#FDF2E5]/90 to-[#FEFAF7]/95 p-5 shadow-[0_20px_50px_-25px_rgba(23,23,20,0.28)] target:border-primary-400 target:shadow-[0_24px_52px_-16px_rgba(242,221,52,0.55)] sm:p-7 overflow-hidden"
    >
      <motion.div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
        <motion.div
          className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-primary-300/20 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative z-10">
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary-700">02 / UPI Payment System</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">Payments that <span className="text-primary-600">feel magical</span></h2>
          <p className="mt-4 max-w-2xl text-sm font-medium text-neutral-600">Real UPI verification on Smart DB before socket unlock. No intermediaries, just instant power.</p>
        </motion.div>

        {/* Main Payment Experience */}
        <motion.div variants={fadeUp} className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left: Payment Flow Description */}
          <div className="space-y-4">
            {paymentSteps.map((step, index) => (
              <motion.div
                key={step.label}
                variants={fadeUp}
                custom={index}
                className="relative"
              >
                <motion.div
                  className={`rounded-2xl border-2 px-5 py-4 transition-all duration-300 ${
                    paymentStep >= index
                      ? "border-primary-400 bg-gradient-to-r from-primary-50 to-transparent shadow-lg shadow-primary-200/50"
                      : "border-neutral-200 bg-white/50"
                  }`}
                  animate={paymentStep === index ? { scale: 1.02, x: 8 } : {}}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`text-3xl flex-shrink-0`}
                      animate={paymentStep === index ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black uppercase tracking-wider text-primary-700">Step {index + 1}</p>
                      <p className="text-sm font-bold text-neutral-900 mt-0.5">{step.label}</p>
                    </div>
                    {paymentStep >= index && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-primary-600 font-black text-lg"
                      >
                        ✓
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right: Premium Phone with Payment UI */}
          <motion.div className="relative" variants={fadeUp}>
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] border-[12px] border-neutral-900 bg-gradient-to-br from-primary-300/20 via-primary-200/10 to-transparent blur-2xl"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Phone Frame */}
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] border-[12px] border-neutral-900 bg-neutral-900 shadow-2xl">
              {/* Notch */}
              <div className="absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-3xl bg-neutral-900" />

              {/* Screen */}
              <div className="relative flex flex-col bg-white h-[620px]">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-4 pt-6 pb-2 text-xs font-semibold text-neutral-900">
                  <span>9:41</span>
                  <div className="flex gap-1 text-neutral-600">📶 📡 🔋</div>
                </div>

                {/* Dynamic Content Based on Payment Step */}
                <motion.div className="flex-1 overflow-hidden flex flex-col relative">
                  <AnimatePresence mode="wait">
                    {paymentStep === 0 && (
                      <motion.div
                        key="qr"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
                      >
                        <div className="text-6xl mb-4">📱</div>
                        <p className="text-xs font-semibold text-neutral-600 mb-4">Ready to scan</p>
                        <motion.div
                          className="w-32 h-32 border-4 border-dashed border-primary-400 rounded-xl flex items-center justify-center relative overflow-hidden"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="text-4xl">⬜</div>
                        </motion.div>
                        <p className="text-[9px] text-neutral-400 mt-4">Point camera at QR code</p>
                      </motion.div>
                    )}

                    {paymentStep === 1 && (
                      <motion.div
                        key="scanning"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
                      >
                        <div className="relative w-32 h-32 mb-4">
                          <motion.div
                            className="absolute inset-0 border-2 border-primary-500 rounded-lg"
                            animate={{ scale: [0.8, 1.2], opacity: [1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <div className="absolute inset-4 border-2 border-primary-600 rounded-lg flex items-center justify-center">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="text-2xl"
                            >
                              🔍
                            </motion.span>
                          </div>
                        </div>
                        <p className="text-xs font-semibold text-neutral-900">Scanning...</p>
                      </motion.div>
                    )}

                    {paymentStep === 2 && (
                      <motion.div
                        key="payment"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col p-6 justify-between"
                      >
                        <div>
                          <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-4">Verify Payment</p>
                          <motion.div
                            className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-6 mb-4"
                            animate={{ scale: [0.95, 1.02, 0.95] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <p className="text-3xl font-black text-primary-600">₹284</p>
                            <p className="text-xs text-neutral-600 mt-2">7.4 kW • 2 hours</p>
                          </motion.div>
                        </div>
                        <motion.button
                          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-900 font-bold py-3 rounded-xl text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Pay via UPI
                        </motion.button>
                      </motion.div>
                    )}

                    {paymentStep === 3 && (
                      <motion.div
                        key="processing"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
                      >
                        <motion.div
                          className="w-24 h-24 rounded-full border-4 border-primary-200 border-t-primary-600 flex items-center justify-center mb-4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <span className="text-3xl">💳</span>
                        </motion.div>
                        <p className="text-xs font-semibold text-neutral-900">Processing payment...</p>
                        <p className="text-[9px] text-neutral-500 mt-2">Verifying with Smart DB</p>
                      </motion.div>
                    )}

                    {paymentStep === 4 && (
                      <motion.div
                        key="verified"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
                      >
                        <motion.div
                          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 0.6, repeat: 2 }}
                        >
                          <motion.span
                            className="text-4xl"
                            animate={{ scale: [0, 1, 0.9] }}
                            transition={{ duration: 0.6, repeat: 2 }}
                          >
                            ✓
                          </motion.span>
                        </motion.div>
                        <p className="text-sm font-bold text-green-600 mb-1">Payment Verified!</p>
                        <p className="text-[9px] text-neutral-600">Socket unlocking...</p>
                      </motion.div>
                    )}

                    {paymentStep === 5 && (
                      <motion.div
                        key="unlocked"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col items-center justify-center px-6 text-center"
                      >
                        <motion.div
                          className="text-6xl mb-4"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          ⚡
                        </motion.div>
                        <p className="text-sm font-bold text-neutral-900 mb-4">Charging Started!</p>
                        <motion.div
                          className="w-full bg-gradient-to-r from-green-100 to-transparent rounded-lg p-3 border-l-4 border-green-500"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <p className="text-[9px] font-semibold text-green-700 text-left">🔋 3.2 kWh • ₹25.60 • 1h 45m</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Payment Flow Features */}
        <motion.div variants={fadeUp} className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { icon: "🔐", title: "Encrypted", text: "End-to-end secure" },
            { icon: "⚡", title: "Instant", text: "2 sec socket unlock" },
            { icon: "📊", title: "Verified", text: "Smart DB tracked" },
            { icon: "✓", title: "Tracked", text: "Payment linked" },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-neutral-200 bg-white/70 p-4 text-center transition-all duration-300 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-200/50"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <p className="text-xs font-black uppercase tracking-wider text-primary-700 mb-1">{feature.title}</p>
              <p className="text-[10px] text-neutral-600">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function SmartDashboardSection() {
  const [selectedSocket, setSelectedSocket] = useState(0);

  return (
    <motion.section
      id="smart-dashboard"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
      className="scroll-mt-36 overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#FEFAF7]/95 via-[#FDF2E5]/90 to-[#FEFAF7]/95 p-5 shadow-[0_20px_50px_-25px_rgba(23,23,20,0.28)] target:border-primary-400 target:shadow-[0_24px_52px_-16px_rgba(242,221,52,0.55)] sm:p-7 lg:p-9"
    >
      <motion.div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
        <motion.div
          className="absolute -top-40 right-1/3 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -left-40 h-96 w-96 rounded-full bg-primary-200/15 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      <div className="relative z-10">
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary-700">03 / Smart Dashboard</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
            Command center for <span className="text-primary-600">every electron</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-medium text-neutral-600">Real-time EV infrastructure intelligence. Monitor 32 sockets, transformer load, payment-linked sessions, and power distribution in one live dashboard.</p>
        </motion.div>

        {/* Key Metrics - Animated Counters */}
        <motion.div variants={fadeUp} className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Active Sessions", value: 12, icon: "🔌", color: "from-blue-400 to-blue-600" },
            { label: "Transformer Load", value: 68, icon: "⚡", color: "from-yellow-400 to-yellow-600", suffix: "%" },
            { label: "Total Power", value: 88, icon: "💡", color: "from-primary-400 to-primary-600", suffix: " kW" },
            { label: "Grid Health", value: 99, icon: "💪", color: "from-green-400 to-green-600", suffix: "%" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              custom={index}
              className="relative rounded-2xl border-2 border-gradient-to-r from-neutral-200 to-neutral-100 bg-white/80 p-5 overflow-hidden group hover:border-primary-300 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wider text-neutral-500 mb-2">{metric.label}</p>
                  <div className="flex items-baseline gap-2">
                    <motion.span
                      className="text-3xl font-black text-neutral-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={viewport}
                    >
                      <CountUp
                        end={metric.value}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </motion.span>
                    {metric.suffix && <span className="text-sm font-bold text-neutral-600">{metric.suffix}</span>}
                  </div>
                </div>
                <motion.div
                  className="text-3xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
                >
                  {metric.icon}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Dashboard Grid */}
        <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-3">
          {/* Left: Transformer & Power Flow */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border-2 border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-white p-6 shadow-lg"
          >
            <p className="text-xs font-black uppercase tracking-wider text-primary-700 mb-4">🏭 Power Distribution</p>
            
            {/* Transformer Visualization */}
            <div className="relative h-64 flex flex-col items-center justify-between mb-4">
              {/* Input Power Line */}
              <svg className="absolute top-0 left-1/2 w-20 h-16 transform -translate-x-1/2" viewBox="0 0 100 60">
                <motion.line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="30"
                  stroke="rgb(242,221,52)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  initial={{ strokeDashoffset: 10 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <text x="60" y="20" fontSize="10" fill="rgb(107, 114, 128)">In</text>
              </svg>

              {/* Transformer Box */}
              <motion.div
                className="relative w-24 h-24 border-4 border-primary-600 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(242,221,52,0.3)",
                    "0 0 40px rgba(242,221,52,0.6)",
                    "0 0 20px rgba(242,221,52,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-center">
                  <p className="text-xs font-black text-primary-700">3φ</p>
                  <p className="text-[10px] font-bold text-primary-600 mt-1">68% Load</p>
                </div>
              </motion.div>

              {/* Output Power Lines */}
              <svg className="absolute bottom-0 left-0 w-full h-20" viewBox="0 0 300 80">
                {[0, 1, 2].map((phase) => (
                  <motion.g key={phase}>
                    <motion.line
                      x1={50 + phase * 100}
                      y1="0"
                      x2={50 + phase * 100}
                      y2="40"
                      stroke={["rgb(59,130,246)", "rgb(239,68,68)", "rgb(34,197,94)"][phase]}
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      initial={{ strokeDashoffset: 8 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: phase * 0.2 }}
                    />
                    <motion.circle
                      cx={50 + phase * 100}
                      cy="50"
                      r="6"
                      fill={["rgb(59,130,246)", "rgb(239,68,68)", "rgb(34,197,94)"][phase]}
                      animate={{ r: [6, 10, 6] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: phase * 0.2 }}
                    />
                  </motion.g>
                ))}
              </svg>
            </div>

            {/* Phase Distribution */}
            <div className="space-y-2">
              {[
                { phase: "R", current: "42A", color: "from-blue-400 to-blue-600" },
                { phase: "Y", current: "38A", color: "from-yellow-400 to-yellow-600" },
                { phase: "B", current: "44A", color: "from-green-400 to-green-600" },
              ].map((item, index) => (
                <motion.div key={item.phase} className="flex items-center gap-3">
                  <span className="text-xs font-black text-neutral-700 w-4">{item.phase}</span>
                  <motion.div
                    className={`flex-1 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: ["60%", "75%", "65%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="text-[9px] font-bold text-neutral-600 w-8 text-right">{item.current}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center: Socket Grid */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border-2 border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-white p-6 shadow-lg"
          >
            <p className="text-xs font-black uppercase tracking-wider text-primary-700 mb-4">🔌 Socket Status (32)</p>
            
            {/* 4x4 Socket Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {socketStates.map((socket, index) => (
                <motion.button
                  key={socket.bay}
                  onClick={() => setSelectedSocket(index)}
                  className={`relative aspect-square rounded-lg border-2 font-bold text-xs transition-all duration-300 ${
                    selectedSocket === index
                      ? "border-primary-500 bg-primary-100 text-primary-700 shadow-lg shadow-primary-300/50"
                      : socket.active
                      ? "border-green-400 bg-green-100 text-green-700"
                      : "border-neutral-300 bg-white text-neutral-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {socket.active && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-current"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div className="flex items-center justify-center h-full">
                    {socket.active ? "●" : "○"}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Socket Legend */}
            <div className="grid grid-cols-3 gap-2 text-[9px] font-bold">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full border-2 border-neutral-400" />
                <span>Idle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>Queued</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Live Activity & Features */}
          <motion.div
            variants={fadeUp}
            className="space-y-4"
          >
            {/* Real-time Activity Feed */}
            <motion.div
              className="rounded-2xl border-2 border-neutral-200 bg-white/80 p-4 shadow-lg"
            >
              <p className="text-xs font-black uppercase tracking-wider text-primary-700 mb-3">📊 Live Activity</p>
              <div className="space-y-2">
                {activityFeed.map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-2 text-[9px] leading-tight text-neutral-600 group hover:text-neutral-900 transition-colors"
                  >
                    <motion.span
                      className="text-primary-500 mt-0.5 text-lg flex-shrink-0"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.25,
                      }}
                    >
                      ●
                    </motion.span>
                    <span className="font-medium">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Capabilities */}
            <motion.div
              className="grid grid-cols-2 gap-2"
            >
              {[
                { icon: "🌡️", label: "Thermal Safe" },
                { icon: "🛡️", label: "Protected" },
                { icon: "⚙️", label: "Load Balanced" },
                { icon: "✓", label: "Verified" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  variants={fadeUp}
                  custom={index}
                  className="rounded-lg border-2 border-neutral-200 bg-white/70 p-3 text-center group hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <p className="text-[8px] font-bold text-neutral-700">{feature.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Live Monitoring Graph */}
        <motion.div variants={fadeUp} className="mt-6 rounded-3xl border-2 border-neutral-200 bg-white/80 p-6 shadow-lg">
          <p className="text-xs font-black uppercase tracking-wider text-primary-700 mb-4">📈 Load Distribution Over Time</p>
          
          <div className="flex items-end justify-center gap-1 h-28">
            {[44, 52, 68, 58, 72, 65, 78, 62, 55, 48, 71, 64].map((height, index) => (
              <motion.div
                key={index}
                className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-primary-400 relative group"
                initial={{ height: "20%" }}
                animate={{
                  height: [`${Math.max(height - 15, 10)}%`, `${height}%`, `${Math.max(height - 10, 10)}%`, `${height}%`],
                }}
                transition={{
                  duration: 3.5 + index * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.08,
                }}
                whileHover={{ opacity: 1, filter: "brightness(1.1)" }}
              >
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {height}%
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between mt-4 text-[9px] font-bold text-neutral-500">
            <span>12:00</span>
            <span>12:30</span>
            <span>01:00</span>
            <span>01:30</span>
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
        <section id="software-platform" className="relative overflow-hidden border-b border-neutral-300 bg-transparent pt-12 pb-16 lg:pt-20 lg:pb-28">
          <div className="absolute top-0 left-0 h-[760px] w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))]" />
          <div className="absolute left-1/4 top-1/3 h-[560px] w-[560px] rounded-full bg-primary-300/20 blur-[140px] mix-blend-multiply" />
          <div className="absolute bottom-0 right-1/4 h-[640px] w-[640px] rounded-full bg-primary-200/30 blur-[150px] mix-blend-multiply" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 md:space-y-10">
              <WhatsAppSection />
              <UpiSection />
              <SmartDashboardSection />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-neutral-300 py-16 md:py-24">
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/10 blur-[110px]" />
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary-700">Ready for audit</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">Map WhatsApp + UPI charging for your property</h2>
            <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-neutral-500">
              Ebee can review parking layout, resident flow, payment settlement, and Smart Dashboard visibility before your first live charger.
            </p>
            <motion.button
              type="button"
              onClick={openAudit}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-8 py-4 text-[11px] font-black uppercase tracking-widest text-primary-500 shadow-xl shadow-neutral-900/20"
            >
              Request Site Audit
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
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

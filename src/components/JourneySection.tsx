import type { ComponentType, ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type StoryStep = {
  eyebrow: string;
  title: string;
  brief: string;
  Scene: ComponentType;
};

const viewportTrigger = { once: true, amount: 0.1 };
const qrModules = [132, 148, 164].flatMap((x) => [54, 70, 86].map((y) => ({ x, y })));

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.45 },
  },
};

const headerVariant: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const frameVariant: Variants = {
  hidden: { opacity: 0, y: 42, scale: 0.96 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 + index * 0.15 },
  }),
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay: 1.05 },
  },
};

const timelineVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.8, ease: "easeInOut" },
  },
};

function BasementBay() {
  return (
    <motion.g
      initial={{ opacity: 0.75 }}
      whileInView={{ opacity: [0.75, 1, 0.75] }}
      viewport={viewportTrigger}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M32 140H268" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" />
      <path d="M58 140L86 42H238L268 140" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
      <path d="M93 50H228" stroke="#DBEAFE" strokeWidth="4" />
      <path d="M118 68H148M170 68H208" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
    </motion.g>
  );
}

function ElectricCar({ charged = false }: { charged?: boolean }) {
  return (
    <motion.g
      initial={{ x: -18, opacity: 0.8 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={viewportTrigger}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      <motion.ellipse
        cx="132"
        cy="144"
        rx="78"
        ry="12"
        fill={charged ? "#10B981" : "#94A3B8"}
        opacity={charged ? "0.22" : "0.16"}
        whileInView={charged ? { scaleX: [0.9, 1.08, 0.9], opacity: [0.18, 0.32, 0.18] } : undefined}
        viewport={viewportTrigger}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <path
        d="M65 113C72 94 88 82 111 80H158C177 81 196 94 208 113L225 118C232 120 237 126 237 134V142H51V133C51 124 56 118 65 113Z"
        fill={charged ? "#ECFDF5" : "#EAF2FF"}
        stroke={charged ? "#10B981" : "#2563EB"}
        strokeWidth="3"
      />
      <path d="M104 88H154C167 89 178 99 186 113H85C89 100 95 92 104 88Z" fill="#BFDBFE" />
      <path d="M139 88L132 113" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
      <circle cx="86" cy="143" r="15" fill="#0F172A" />
      <circle cx="202" cy="143" r="15" fill="#0F172A" />
      <circle cx="86" cy="143" r="6" fill="#CBD5E1" />
      <circle cx="202" cy="143" r="6" fill="#CBD5E1" />
      <path d="M216 122H226" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
      <path d="M57 126H72" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
    </motion.g>
  );
}

function ChargerSocket() {
  return (
    <g>
      <rect x="230" y="70" width="28" height="44" rx="8" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
      <circle cx="244" cy="85" r="6" fill="#E0F2FE" stroke="#2563EB" strokeWidth="2" />
      <path d="M239 101H249" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
      <path d="M244 70V58" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <motion.g
      initial={{ y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={viewportTrigger}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <rect x="104" y="24" width="92" height="142" rx="18" fill="#0F172A" filter="url(#softShadow)" />
      <rect x="111" y="34" width="78" height="120" rx="12" fill="#F8FAFC" />
      <rect x="136" y="29" width="28" height="4" rx="2" fill="#334155" />
      {children}
    </motion.g>
  );
}

function WhatsAppHeader() {
  return (
    <g>
      <rect x="111" y="34" width="78" height="22" rx="10" fill="#25D366" />
      <circle cx="124" cy="45" r="5" fill="#FFFFFF" opacity="0.95" />
      <path d="M135 43H176M135 49H160" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
    </g>
  );
}

function ParkPlugScene() {
  return (
    <motion.svg viewBox="0 0 300 190" className="h-48 w-[300px] overflow-visible">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>
      <BasementBay />
      <ChargerSocket />
      <ElectricCar />
      <motion.path
        d="M232 105C202 108 178 111 151 124"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportTrigger}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.55 }}
      />
      <motion.circle
        cx="151"
        cy="124"
        r="6"
        fill="#FB923C"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: [0.8, 1.25, 0.8] }}
        viewport={viewportTrigger}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function ScanScene() {
  return (
    <motion.svg viewBox="0 0 300 190" className="h-48 w-[300px] overflow-visible">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>
      <BasementBay />
      <ElectricCar />
      <ChargerSocket />
      <PhoneShell>
        <rect x="126" y="48" width="48" height="48" rx="8" fill="#FFFFFF" stroke="#CBD5E1" />
        {qrModules.map(({ x, y }) => (
          <rect key={`qr-module-${x}-${y}`} x={x} y={y} width="7" height="7" rx="1.5" fill="#0F172A" />
        ))}
        <rect x="140" y="62" width="10" height="10" rx="2" fill="#25D366" />
        <motion.rect
          x="124"
          y="52"
          width="52"
          height="3"
          rx="1.5"
          fill="#25D366"
          initial={{ y: 52 }}
          whileInView={{ y: [52, 94, 52] }}
          viewport={viewportTrigger}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportTrigger}
          transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
        >
          <WhatsAppHeader />
          <rect x="121" y="110" width="58" height="12" rx="6" fill="#DCFCE7" />
          <rect x="121" y="128" width="44" height="12" rx="6" fill="#E2E8F0" />
        </motion.g>
      </PhoneShell>
    </motion.svg>
  );
}

function PaymentScene() {
  return (
    <motion.svg viewBox="0 0 300 190" className="h-48 w-[300px] overflow-visible">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>
      <PhoneShell>
        <WhatsAppHeader />
        <rect x="121" y="66" width="58" height="16" rx="8" fill="#DCFCE7" />
        <path d="M128 74H170" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
        <motion.text
          x="142"
          y="106"
          fill="#0F172A"
          fontSize="26"
          fontWeight="900"
          initial={{ scale: 0.92, opacity: 0.75 }}
          whileInView={{ scale: [0.92, 1.08, 0.92], opacity: [0.75, 1, 0.75] }}
          viewport={viewportTrigger}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ₹
        </motion.text>
        <rect x="121" y="120" width="56" height="22" rx="11" fill="#4F46E5" />
        <text x="137" y="135" fill="#FFFFFF" fontSize="10" fontWeight="900">
          Pay
        </text>
        <path d="M130 150H168" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
      </PhoneShell>
      {[0, 0.45, 0.9].map((delay, index) => (
        <motion.text
          key={delay}
          x={62 + index * 84}
          y="112"
          fill="#F59E0B"
          fontSize="22"
          fontWeight="900"
          initial={{ y: 112, opacity: 0, scale: 0.7 }}
          whileInView={{ y: [112, 78], opacity: [0, 1, 0], scale: [0.7, 1.1, 0.9] }}
          viewport={viewportTrigger}
          transition={{ duration: 3.8, delay, repeat: Infinity, ease: "easeOut" }}
        >
          ₹
        </motion.text>
      ))}
    </motion.svg>
  );
}

function PowerScene() {
  return (
    <motion.svg viewBox="0 0 300 190" className="h-48 w-[300px] overflow-visible">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>
      <BasementBay />
      <ChargerSocket />
      <ElectricCar />
      {[0, 0.25, 0.5].map((delay) => (
        <motion.path
          key={delay}
          d="M232 96C202 101 176 111 148 124"
          fill="none"
          stroke={delay === 0.25 ? "#FCD34D" : "#38BDF8"}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          viewport={viewportTrigger}
          transition={{ duration: 3.6, delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {[88, 124, 178].map((x, index) => (
        <motion.path
          key={x}
          d={`M${x} 58L${x - 12} 86H${x + 2}L${x - 8} 118L${x + 18} 78H${x + 2}L${x + 12} 58Z`}
          fill={index === 1 ? "#FCD34D" : "#38BDF8"}
          opacity="0.88"
          initial={{ scale: 0.8, opacity: 0.45 }}
          whileInView={{ scale: [0.8, 1.15, 0.8], opacity: [0.45, 1, 0.45] }}
          viewport={viewportTrigger}
          transition={{ duration: 3.4, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.g
        opacity="0.9"
        initial={{ x: 18, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.9 }}
        viewport={viewportTrigger}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <rect x="176" y="24" width="70" height="74" rx="16" fill="#0F172A" />
        <rect x="182" y="34" width="58" height="52" rx="10" fill="#F8FAFC" />
        <rect x="182" y="34" width="58" height="18" rx="9" fill="#25D366" />
        <path d="M190 67H232" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
        <path d="M190 76H218" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}

function ReceiptScene() {
  return (
    <motion.svg viewBox="0 0 300 190" className="h-48 w-[300px] overflow-visible">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>
      <motion.g opacity="0.42" transform="translate(-36 18) scale(0.86)">
        <ElectricCar charged />
      </motion.g>
      <PhoneShell>
        <WhatsAppHeader />
        <rect x="121" y="66" width="58" height="14" rx="7" fill="#DCFCE7" />
        <rect x="121" y="88" width="44" height="10" rx="5" fill="#E2E8F0" />
        <rect x="121" y="106" width="54" height="10" rx="5" fill="#E2E8F0" />
      </PhoneShell>
      <motion.g
        initial={{ x: -10, y: 24, rotate: -8, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 54, y: -8, rotate: 5, opacity: 1, scale: 1 }}
        viewport={viewportTrigger}
        transition={{ type: "spring", stiffness: 120, damping: 16, delay: 1.15, duration: 1.6 }}
      >
        <path d="M122 66H184V148L174 142L164 148L154 142L144 148L134 142L122 148Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" filter="url(#softShadow)" />
        <path d="M134 86H170M134 102H164M134 118H156" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
        <motion.path
          d="M139 132L148 140L168 116"
          fill="none"
          stroke="#10B981"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportTrigger}
          transition={{ duration: 1.4, delay: 1.45, ease: "easeOut" }}
        />
      </motion.g>
    </motion.svg>
  );
}

const storySteps = [
  {
    eyebrow: "Basement bay",
    title: "Park & Plug",
    brief: "Park. Plug in. Done.",
    Scene: ParkPlugScene,
  },
  {
    eyebrow: "QR on charger",
    title: "Scan to Chat",
    brief: "Scan QR → WhatsApp opens.",
    Scene: ScanScene,
  },
  {
    eyebrow: "UPI inside chat",
    title: "Pay via UPI",
    brief: "Tap to pay via UPI.",
    Scene: PaymentScene,
  },
  {
    eyebrow: "Live power",
    title: "Instant Power",
    brief: "Socket unlocks. Power flows.",
    Scene: PowerScene,
  },
  {
    eyebrow: "WhatsApp summary",
    title: "Digital Receipt",
    brief: "Summary on WhatsApp. Sorted.",
    Scene: ReceiptScene,
  },
] satisfies StoryStep[];

export function JourneySection() {
  return (
    <motion.section
      id="journey"
      className="relative overflow-hidden border-b border-neutral-200/70 bg-gradient-to-b from-neutral-50 via-white to-sky-50/60 py-12 md:py-20 text-neutral-950 font-body"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportTrigger}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] bg-[length:24px_24px]" />
      {/* All ambient motion uses whileInView so the story stays still until 35% of the section is visible. */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-sky-100/60 via-transparent to-transparent"
        initial={{ x: "-8%", opacity: 0.35 }}
        whileInView={{ x: ["-8%", "8%", "-8%"], opacity: [0.35, 0.65, 0.35] }}
        viewport={viewportTrigger}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {[12, 28, 44, 62, 76].map((left, index) => (
        <motion.span
          key={left}
          className="hidden lg:block absolute top-28 h-1.5 w-1.5 rounded-full bg-primary-400 shadow-[0_0_18px_rgba(251,146,60,0.8)]"
          style={{ left: `${left}%` }}
          initial={{ y: 0, opacity: 0.1 }}
          whileInView={{ y: [0, -18, 0], opacity: [0.1, 0.9, 0.1] }}
          viewport={viewportTrigger}
          transition={{ duration: 7 + index * 0.45, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute right-2 top-2 sm:right-4 sm:top-4 md:right-6 md:top-10 z-20 rounded-full border border-orange-200 bg-white/90 px-2.5 py-1 md:px-4 md:py-2 text-[10px] md:text-sm font-black text-orange-500 shadow-[0_0_28px_rgba(251,146,60,0.28)] backdrop-blur lg:right-16"
        initial={{ y: -5, rotate: -2, opacity: 0 }}
        whileInView={{ y: [-5, 6, -5], rotate: [-2, 2, -2], opacity: 1 }}
        viewport={viewportTrigger}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        5 sec
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto mb-8 md:mb-14 max-w-2xl text-center" variants={headerVariant}>
          <h2 className="text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
            Signature User Journey
          </h2>
          <p className="mt-4 text-sm font-bold text-neutral-500">
            The simplest WhatsApp + UPI EV charging flow ever built.
          </p>
        </motion.div>

        <div className="relative">
          <motion.svg
            className="pointer-events-none absolute left-0 top-[118px] hidden h-24 w-full overflow-visible lg:block"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            initial="hidden"
            whileInView="visible"
            viewport={viewportTrigger}
          >
            <defs>
              <linearGradient id="storyCurrent" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="55%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#25D366" />
              </linearGradient>
            </defs>
            <path
              d="M58 52C188 12 260 88 360 52C488 8 560 90 660 52C792 10 860 88 958 52C1045 20 1114 32 1160 52"
              fill="none"
              stroke="#DBEAFE"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.85"
            />
            <motion.path
              d="M58 52C188 12 260 88 360 52C488 8 560 90 660 52C792 10 860 88 958 52C1045 20 1114 32 1160 52"
              fill="none"
              stroke="url(#storyCurrent)"
              strokeWidth="5"
              strokeLinecap="round"
              variants={timelineVariant}
            />
          </motion.svg>

          <motion.div
            className="absolute left-12 top-[162px] hidden h-4 w-4 rounded-full bg-sky-300 shadow-[0_0_26px_rgba(56,189,248,0.95)] lg:block"
            initial={{ x: 0, opacity: 0, scale: 0.7 }}
            whileInView={{ x: [0, 1080], opacity: [0, 1, 1, 0], scale: [0.7, 1.2, 0.9] }}
            viewport={viewportTrigger}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-10 pl-0 md:gap-x-10 md:gap-y-14 lg:grid-cols-5 lg:gap-6">
            {/* MOBILE ANIMATED Z-CURVE TIMELINE & BUBBLES */}
            <motion.svg
              className="pointer-events-none absolute inset-0 block h-full w-full overflow-visible lg:hidden z-[-1]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="storyCurrentMobile" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#25D366" />
                </linearGradient>
              </defs>
              <path
                d="M -10 11 L 75 11 C 110 11, -10 46, 25 46 L 75 46 C 110 46, 50 81, 50 81"
                fill="none"
                stroke="#DBEAFE"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.85"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M -10 11 L 75 11 C 110 11, -10 46, 25 46 L 75 46 C 110 46, 50 81, 50 81"
                fill="none"
                stroke="url(#storyCurrentMobile)"
                strokeWidth="3"
                strokeLinecap="round"
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportTrigger}
                vectorEffect="non-scaling-stroke"
              />
              {/* Shooting blue bubble */}
              <ellipse rx="1.1" ry="0.6" fill="#38BDF8" opacity="0.9">
                <animateMotion
                  dur="7s"
                  repeatCount="indefinite"
                  path="M -10 11 L 75 11 C 110 11, -10 46, 25 46 L 75 46 C 110 46, 50 81, 50 81"
                />
              </ellipse>
            </motion.svg>

            {/* Mobile Bubbles (Static Orange Dots) */}
            {[
              { left: 25, top: 11 },
              { left: 75, top: 11 },
              { left: 25, top: 46 },
              { left: 75, top: 46 },
              { left: 50, top: 81 },
            ].map((pos, i) => (
              <motion.span
                key={i}
                className="absolute h-2 w-2 -ml-1 -mt-1 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)] lg:hidden z-[-1]"
                style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: [0, 1.5, 1], opacity: 1 }}
                viewport={viewportTrigger}
                transition={{ delay: i * 0.45, duration: 0.8 }}
              />
            ))}
            {storySteps.map((step, index) => (
              <motion.figure
                key={step.title}
                custom={index}
                variants={frameVariant}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 240, damping: 18, duration: 0.4 },
                }}
                className={`group relative text-center ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="relative mx-auto flex h-36 sm:h-48 md:h-56 items-center justify-center">
                  <motion.div
                    className="absolute bottom-5 h-12 w-56 rounded-[50%] bg-neutral-400/12 blur-xl transition group-hover:bg-sky-400/20"
                    initial={{ scaleX: 0.92, opacity: 0.35 }}
                    whileInView={{ scaleX: [0.92, 1.05, 0.92], opacity: [0.35, 0.58, 0.35] }}
                    viewport={viewportTrigger}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="transform scale-50 sm:scale-75 md:scale-100 origin-center">
                    <step.Scene />
                  </div>
                </div>
                <motion.figcaption variants={textVariant} className="relative mt-2 sm:-mt-2 px-2">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.22em] text-orange-500">
                    {step.eyebrow}
                  </span>
                  <h3 className="mt-1 sm:mt-2 text-base sm:text-xl font-black tracking-tight text-neutral-950 leading-tight">{step.title}</h3>
                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm font-semibold text-neutral-600 leading-snug">{step.brief}</p>
                </motion.figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}

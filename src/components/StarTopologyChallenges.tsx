import { motion } from "framer-motion";
import { ShieldCheck, Gauge, ReceiptIndianRupee, Smartphone } from "lucide-react";

const challenges = [
  {
    icon: ShieldCheck,
    title: "Safety disputes",
    text: "Ad hoc resident wiring creates visual clutter, cable risk, and fire-safety concerns in basements and podiums.",
    position: "top-left",
  },
  {
    icon: Gauge,
    title: "Transformer anxiety",
    text: "Societies worry that uncontrolled evening charging will trip breakers or force expensive power upgrades.",
    position: "top-right",
  },
  {
    icon: ReceiptIndianRupee,
    title: "Billing friction",
    text: "Flat-rate recovery and manual electricity collections lead to disputes between EV owners and the society.",
    position: "bottom-left",
  },
  {
    icon: Smartphone,
    title: "App fatigue",
    text: "Drivers do not want another charging app, signup process, Bluetooth pairing flow, or prepaid wallet.",
    position: "bottom-right",
  },
];

const PathLine = ({ className, d }: { className: string; d: string }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
    <motion.path
      d={d}
      stroke="url(#gradient)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      strokeDasharray="4 4"
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F2DD34" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#F2DD34" />
        <stop offset="100%" stopColor="#F2DD34" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

export function StarTopologyChallenges() {
  return (
    <section className="relative py-20 md:py-32 border-b border-neutral-300 bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop Layout */}
        <div className="hidden lg:block relative min-h-[600px] w-full">
          
          {/* Animated Connecting Lines (Abstract approximations connecting to center) */}
          <PathLine className="z-0" d="M 25 25 Q 50 25 50 50" />
          <PathLine className="z-0" d="M 75 25 Q 50 25 50 50" />
          <PathLine className="z-0" d="M 25 75 Q 50 75 50 50" />
          <PathLine className="z-0" d="M 75 75 Q 50 75 50 50" />

          {/* Center Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] text-center z-10 bg-[#FEFAF7]/80 p-8 -[3rem] backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_-20px_rgba(242,221,52,0.3)]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100/50 border border-primary-200/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest leading-none">Industry challenges</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-neutral-900 leading-[1.1] font-display mb-4">
              The current EV setup creates work for everyone.
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed font-medium">
              The problem is rarely demand. The problem is how charging gets installed, paid for, authorized, and kept safe as EV ownership grows.
            </p>
          </motion.div>

          {/* 4 Cards */}
          {challenges.map((item, i) => {
            const Icon = item.icon;
            
            // Positioning logic
            let positionClasses = "";
            if (item.position === "top-left") positionClasses = "top-0 left-0";
            if (item.position === "top-right") positionClasses = "top-0 right-0";
            if (item.position === "bottom-left") positionClasses = "bottom-0 left-0";
            if (item.position === "bottom-right") positionClasses = "bottom-0 right-0";

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`absolute w-[320px] ${positionClasses} z-10  bg-white/90 border border-white/60 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-md transition-transform hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-full bg-[#FEFAF7] border border-neutral-200 flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-extrabold text-neutral-900 tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="block lg:hidden text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100/50 border border-primary-200/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest leading-none">Industry challenges</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-neutral-900 leading-[1.1] font-display mb-4">
              The current EV setup creates work for everyone.
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed font-medium">
              The problem is rarely demand. The problem is how charging gets installed, paid for, authorized, and kept safe as EV ownership grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenges.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="text-left bg-white/90 border border-white/60 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-md"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FEFAF7] border border-neutral-200 flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <h3 className="text-base font-extrabold text-neutral-900 tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

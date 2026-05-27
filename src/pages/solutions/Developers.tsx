
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FeasibilityModal } from "../../components/FeasibilityModal";
import { motion, type Variants } from "framer-motion";
import { Building, Coins, ShieldCheck, Zap, TrendingUp, Settings2 } from "lucide-react";
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
const staggerChildren = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
export function Developers() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  useEffect(() => {
    document.title = "EV Solutions for Real Estate Developers | EbeeCharge";
  }, []);
  return <div className="min-h-screen bg-neutral-50 text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={() => setIsAuditModalOpen(true)} />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 overflow-hidden border-b border-neutral-300">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 border border-primary-200 text-primary-800 text-xs font-bold tracking-widest uppercase mb-6">
                <Building className="w-4 h-4" />
                <span>For Real Estate Developers</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight font-display mb-6">
                Turn an EV Mandate into a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Premium Selling Point</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
                Meet the 20% EV parking mandate with a centralized architecture that lowers your initial investment, provides immediate OC clearance support, and delivers true EV-readiness from day one.
              </motion.p>
              <motion.button variants={fadeUp} onClick={() => setIsAuditModalOpen(true)} whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex px-8 py-4 bg-neutral-900 text-primary-500 font-black tracking-wider uppercase transition-all shadow-xl hover:shadow-neutral-900/40 items-center justify-center gap-3">
                Schedule Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">Built for Builders</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
              icon: <Coins />,
              title: "Lower Initial Investment",
              desc: "Our Smart DB handles up to 32 bays from one unit. No need to purchase 32 expensive individual 'smart' chargers."
            }, {
              icon: <Zap />,
              title: "Pre-Wired Readiness",
              desc: "Sell 'EV-Ready' apartments by installing basic sockets and centralized intelligence during the construction phase."
            }, {
              icon: <ShieldCheck />,
              title: "OC Clearance Support",
              desc: "We provide the necessary as-built Single Line Diagrams (SLDs) and safety certifications required for regulatory approval."
            }, {
              icon: <Settings2 />,
              title: "Smart DB Architecture",
              desc: "Move all the expensive intelligence, metering, and relay controls off the parking pillar and into a secure, centralized DB unit."
            }, {
              icon: <TrendingUp />,
              title: "Ultimate Scalability",
              desc: "Start small and add basic sockets as EV adoption grows. Every new bay is EV-ready from day one at minimal additional cost."
            }].map((feature, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="bg-neutral-50 p-8 border border-neutral-200">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.desc}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-24 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6">The ebee Architecture vs Traditional</h2>
              <p className="text-neutral-400 text-lg">Why wire 32 smart chargers when you can install 1 Smart DB and 32 basic sockets?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Traditional */}
              <div className="bg-neutral-800/50 p-8 border border-neutral-700/50">
                <h3 className="text-xl font-bold text-neutral-400 mb-6 uppercase tracking-widest">Traditional Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-neutral-400">
                    <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                    <span>Every socket needs its own internet connection</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                    <span>High per-bay cost with full smart sockets</span>
                  </li>
                  <li className="flex items-start gap-3 text-neutral-400">
                    <div className="w-6 h-6 rounded-full bg-neutral-700 flex items-center justify-center shrink-0 mt-0.5">✕</div>
                    <span>20 bays = 20 separate firmware updates</span>
                  </li>
                </ul>
              </div>

              {/* ebee */}
              <div className="bg-neutral-800 p-8 border border-primary-500 shadow-[0_0_40px_rgba(242,221,52,0.1)]">
                <h3 className="text-xl font-bold text-primary-400 mb-6 uppercase tracking-widest">The Smart DB Solution</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-primary-500 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                    <span>One internet connection at the DB means bays need zero connectivity</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-primary-500 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                    <span>Low per-bay cost using a basic socket & QR code sticker</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-primary-500 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                    <span>Intelligence, metering & relay control move entirely into the central DB</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />
      <FeasibilityModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} initialPropertyName="" initialEmail="" />
    </div>;
}
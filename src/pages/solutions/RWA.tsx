
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FeasibilityModal } from "../../components/FeasibilityModal";
import { motion, type Variants } from "framer-motion";
import { Building2, ShieldAlert, Zap, Banknote, Smartphone, CheckCircle2, ChevronDown } from "lucide-react";
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
const faqs = [{
  q: "Will installing chargers trip our building's power?",
  a: "No. Our Smart DB features Dynamic Load Management that continuously monitors the building's load and intelligently throttles or staggers charging during peak times to prevent breaker trips."
}, {
  q: "Do we have to manually collect money from residents?",
  a: "No. With our recommended models, residents pay upfront via UPI directly through WhatsApp. The society does not need to handle any cash collection or billing."
}, {
  q: "Can we prevent outsiders from stealing our power?",
  a: "Absolutely. All ebee sockets remain 'dead' and carry zero voltage until an authorized resident scans the QR code and initiates a charging session."
}];
export function RWA() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => {
    document.title = "EV Solutions for Residential Societies | EbeeCharge";
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
                <Building2 className="w-4 h-4" />
                <span>For Residential Societies</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight font-display mb-6">
                Eliminate Basement <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Cable Chaos</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
                Transform your society's parking into a smart, fire-safe, and self-managing EV charging hub. Zero admin headaches, guaranteed fair billing, and no ugly web of cables.
              </motion.p>
              <motion.button variants={fadeUp} onClick={() => setIsAuditModalOpen(true)} whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex px-8 py-4 bg-neutral-900 text-primary-500 font-black tracking-wider uppercase transition-all shadow-xl hover:shadow-neutral-900/40 items-center justify-center gap-3">
                Request Site Feasibility Audit
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">The ebee Advantage for RWAs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              icon: <Banknote />,
              title: "Zero Admin Billing",
              desc: "We handle the billing. Residents pay via UPI; the society gets reimbursed automatically without lifting a finger."
            }, {
              icon: <Zap />,
              title: "Fair Usage Metering",
              desc: "No more flat-rate disputes. Our MID-certified metering ensures users pay exactly for the watts they consume."
            }, {
              icon: <ShieldAlert />,
              title: "Ultimate Fire Safety",
              desc: "Precision thermal monitoring at the DB level prevents hazards common with DIY wiring and overloaded sockets."
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

        {/* CHARGING MODELS */}
        <section className="py-24 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Flexible Charging Models</h2>
              <p className="text-neutral-400 text-lg">Choose the operation model that best fits your society's needs. Each model makes a different trade-off between simplicity, control, and who handles billing.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[{
              title: "Model 1: Open Access",
              subtitle: "Zero Involvement",
              desc: "Like a public station. Any resident can use any available charger. Users pay WBG directly and immediately via UPI.",
              effort: "Minimal"
            }, {
              title: "Model 2: Fixed Access + Upfront",
              subtitle: "Assigned Spots",
              desc: "Users charge strictly at their designated parking spot. Users pay WBG directly and immediately via UPI.",
              effort: "Low-Medium"
            }, {
              title: "Model 3: Fixed Access + Monthly",
              subtitle: "Full Billing Control",
              desc: "RWA retains full control. Users charge at their own assigned spot only and pay a monthly bill directly to the RWA.",
              effort: "High"
            }].map((model, i) => <div key={i} className="bg-neutral-800 p-8 border border-neutral-700 relative overflow-hidden group hover:border-primary-500/50 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Smartphone className="w-24 h-24" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-400 mb-1">{model.title}</h3>
                  <p className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-6">{model.subtitle}</p>
                  <p className="text-neutral-300 leading-relaxed mb-8">{model.desc}</p>
                  <div className="mt-auto pt-6 border-t border-neutral-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-400">RWA Effort:</span>
                      <span className="font-bold text-white">{model.effort}</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-neutral-900">Society Meeting FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => <div key={i} className="border border-neutral-200 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between bg-neutral-50 hover:bg-neutral-100 transition-colors">
                    <span className="font-bold text-left text-neutral-900 pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-6 py-4 bg-white text-neutral-600 leading-relaxed">
                      {faq.a}
                    </div>}
                </div>)}
            </div>
          </div>
        </section>
      </main>

      <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />
      <FeasibilityModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} initialPropertyName="" initialEmail="" />
    </div>;
}
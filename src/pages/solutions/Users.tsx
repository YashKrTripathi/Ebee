import Shuffle from '../../components/ui/Shuffle';
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SimulatorModal } from "../../components/SimulatorModal";
import { motion, type Variants } from "framer-motion";
import { Car, Smartphone, ScanLine, Wallet, Zap, Receipt, Clock, Users as UsersIcon } from "lucide-react";
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
export function Users() {
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  useEffect(() => {
    document.title = "EV Charging for Individual Users | EbeeCharge";
  }, []);
  return <div className="min-h-screen bg-neutral-50 text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={() => {}} />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 overflow-hidden border-b border-neutral-300">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 border border-primary-200 text-primary-800 text-xs font-bold tracking-widest uppercase mb-6">
                <UsersIcon className="w-4 h-4" />
                <span>For Individual EV Owners</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight font-display mb-6">
                Charge Your EV <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Without Apps</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
                No RFID cards. No mandatory wallets. No buggy apps. Just park, scan with your phone, and pay instantly via UPI through WhatsApp.
              </motion.p>
              <motion.button variants={fadeUp} onClick={() => setIsSimulatorModalOpen(true)} whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex px-8 py-4 bg-neutral-900 text-primary-500 font-black tracking-wider uppercase transition-all shadow-xl hover:shadow-neutral-900/40 items-center justify-center gap-3">
                <Shuffle text="Try the WhatsApp Simulator" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* SIGNATURE JOURNEY */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mb-4">Start Charging in 3 Steps</h2>
              <p className="text-neutral-500 text-lg">The world's first friction-less EV charging experience designed entirely around the apps you already use.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              icon: <Car className="w-8 h-8" />,
              step: "01",
              title: "Park & Plug",
              desc: "Park in your designated bay and plug the standard ebee connector into your vehicle."
            }, {
              icon: <ScanLine className="w-8 h-8" />,
              step: "02",
              title: "Scan to Chat",
              desc: "Scan the QR code on the socket. It instantly opens a secure WhatsApp chat with our bot."
            }, {
              icon: <Wallet className="w-8 h-8" />,
              step: "03",
              title: "Pay via UPI",
              desc: "Select your required charging units and pay securely using GPay, PhonePe, or any UPI app."
            }].map((step, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="relative bg-neutral-50 p-8 border border-neutral-200 text-center">
                  <div className="absolute top-4 right-6 text-6xl font-black text-neutral-200/50 select-none pointer-events-none">{step.step}</div>
                  <div className="w-16 h-16 bg-white border border-neutral-200 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed relative z-10">{step.desc}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Everything You Need, Nothing You Don't</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
              icon: <Smartphone />,
              title: "No App Installation",
              desc: "Why download another app just to charge your car? Use WhatsApp."
            }, {
              icon: <Zap />,
              title: "Instant Charging",
              desc: "The Smart DB unlocks power to your specific socket immediately upon payment."
            }, {
              icon: <Receipt />,
              title: "Digital Receipts",
              desc: "A summary of units consumed is sent directly to your WhatsApp upon completion."
            }, {
              icon: <Clock />,
              title: "Priority Charging",
              desc: "Top up instantly without waiting for monthly billing cycles to clear."
            }].map((feature, i) => <div key={i} className="bg-neutral-800 p-6 border border-neutral-700">
                  <div className="w-12 h-12 bg-neutral-700 text-primary-400 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{feature.desc}</p>
                </div>)}
            </div>
          </div>
        </section>
      </main>

      <Footer onRequestAudit={() => {}} />
      <SimulatorModal isOpen={isSimulatorModalOpen} onClose={() => setIsSimulatorModalOpen(false)} />
    </div>;
}
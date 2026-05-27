
import { useState } from "react";
import { ChevronRight, Zap } from "lucide-react";
import { motion } from "motion/react";

import { Header } from "../components/Header";
import { WhyEbee } from "../components/WhyEbee";
import { JourneySection } from "../components/JourneySection";
import { Footer } from "../components/Footer";
import { WhatsAppSimulator } from "../components/WhatsAppSimulator";
import { WebappSimulator } from "../components/WebappSimulator";
import { FeasibilityModal } from "../components/FeasibilityModal";
import { SimulatorModal } from "../components/SimulatorModal";
export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  const [modalPreloadName, setModalPreloadName] = useState("");
  const [modalPreloadEmail, setModalPreloadEmail] = useState("");
  const handleOpenGeneralAudit = () => {
    setModalPreloadName("");
    setModalPreloadEmail("");
    setIsAuditModalOpen(true);
  };
  return <div className="min-h-screen bg-transparent text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      
      {/* Sticky Top Header */}
      <Header onRequestAudit={handleOpenGeneralAudit} />

      {/* Main hero page layout */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-32 border-b border-neutral-300 bg-transparent">
          
          {/* Faded Background visual accents */}
          <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))] pointer-events-none z-0"></div>
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary-300/20 blur-[140px] rounded-full pointer-events-none mix-blend-multiply z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary-200/30 blur-[150px] rounded-full pointer-events-none mix-blend-multiply z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
              
              {/* Left Column Copy text and actions */}
              <div className="lg:col-span-12 space-y-6 lg:space-y-10 text-left sm:text-center lg:text-center sm:max-w-2xl sm:mx-auto lg:mx-auto lg:max-w-4xl">
                
                {/* Main Prominent Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-neutral-900 tracking-tight leading-[1.05] font-display drop-shadow-sm">
                  Smart EV Charging{" "}
                  <br className="hidden sm:block" />
                  <span className="text-primary-600 relative inline-block drop-shadow-sm">
                    Without Apps or Hassles.
                  </span>
                </h1>

                {/* Sub-description copy */}
                <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-lg font-medium sm:mx-auto lg:mx-0">
                  Meet the 20% EV Mandate with India's first App-less, Centralized Smart Charging System — powered entirely by WhatsApp + UPI.
                </p>

                {/* CTA Action Deck */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4 sm:items-center sm:justify-center lg:justify-center">
                  <motion.button onClick={handleOpenGeneralAudit} whileHover={{
                  scale: 1.02,
                  y: -2
                }} whileTap={{
                  scale: 0.98
                }} className="group relative px-10 py-5 bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-950 font-black text-[14px] tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] flex items-center justify-center gap-3 leading-none overflow-hidden border border-primary-300/50">
                    {/* Button Glint/Shine */}
                    <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    Request Site Feasibility Audit <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform drop-shadow-sm" />
                  </motion.button>
                </div>
              </div>



            </div>
          </div>
        </section>

        {/* WHY EBEE SECTION */}
        <WhyEbee />

        {/* HOW TO CHARGE SEQUENCING SECTION */}
        <JourneySection />

      </main>

      {/* FOOTER SECTION */}
      <Footer onRequestAudit={handleOpenGeneralAudit} />

      {/* FULL-SCREEN AI FEASIBILITY REPORT POPUP MODAL */}
      <FeasibilityModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} initialPropertyName="" initialEmail="" />

      {/* WHATSAPP SIMULATOR MOBILE MODAL */}
      <SimulatorModal isOpen={isSimulatorModalOpen} onClose={() => setIsSimulatorModalOpen(false)} />

    </div>;
}
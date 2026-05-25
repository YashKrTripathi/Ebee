import Shuffle from "../components/ui/Shuffle";
import { useState } from "react";
import { ChevronRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import DecryptedText from "../components/ui/DecryptedText";
import { Header } from "../components/Header";
import { WhyEbee } from "../components/WhyEbee";
import { JourneySection } from "../components/JourneySection";
import { Footer } from "../components/Footer";
import { WhatsAppSimulator } from "../components/WhatsAppSimulator";
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
              <div className="lg:col-span-6 space-y-6 lg:space-y-10 text-left sm:text-center lg:text-left sm:max-w-2xl sm:mx-auto lg:mx-0">
                
                {/* Main Prominent Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-neutral-900 tracking-tight leading-[1.05] font-display drop-shadow-sm">
                  <DecryptedText text="Smart EV Charging" animateOn="view" clickMode="once" revealDirection="start" speed={60} maxIterations={10} sequential={true} useOriginalCharsOnly={false} />{" "}
                  <br className="hidden sm:block" />
                  <span className="text-primary-600 relative inline-block drop-shadow-sm">
                    <DecryptedText text="Without Apps or Hassles." animateOn="view" clickMode="once" revealDirection="start" speed={60} maxIterations={10} sequential={true} useOriginalCharsOnly={false} />
                  </span>
                </h1>

                {/* Sub-description copy */}
                <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-lg font-medium sm:mx-auto lg:mx-0">
                  Meet the 20% EV Mandate with India's first App-less, Centralized Smart Charging System — powered entirely by WhatsApp + UPI.
                </p>

                {/* CTA Action Deck */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4 sm:items-center sm:justify-center lg:justify-start">
                  <motion.button onClick={handleOpenGeneralAudit} whileHover={{
                  scale: 1.02,
                  y: -2
                }} whileTap={{
                  scale: 0.98
                }} className="group relative px-10 py-5 bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-950 font-black text-[14px] tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(242,221,52,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] flex items-center justify-center gap-3 leading-none overflow-hidden border border-primary-300/50">
                    {/* Button Glint/Shine */}
                    <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <Shuffle text="Request Site Feasibility Audit" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" /> <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform drop-shadow-sm" />
                  </motion.button>
                </div>
              </div>

              {/* Right Column Interactive Phone Visual simulator representation */}
              <div id="phone-mockup-section" className="lg:col-span-6 flex justify-center items-center transition-all duration-500 p-2 sm:p-0 relative">
                {/* Spotlight directly behind the phone */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,221,52,0.25)_0%,transparent_65%)] scale-[1.5] blur-3xl pointer-events-none z-0"></div>

                {/* MOBILE WA BOT BUTTON WITH ANIMATED CABLES */}
                <div className="block lg:hidden relative z-20 w-full flex justify-center mt-12 mb-16 px-4">
                  {/* Cables Container */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
                    {/* Left Cable */}
                    <div className="absolute left-[-10px] sm:left-[5%] top-1/2 -translate-y-1/2 flex items-center z-0 opacity-80">
                      <div className="w-16 sm:w-24 h-1.5 bg-neutral-300/80 relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border border-neutral-400/20">
                        <motion.div className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-[#25D366] to-transparent" animate={{
                        x: [-40, 100]
                      }} transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }} />
                      </div>
                      <div className="w-4 h-3.5 bg-neutral-400/90 shadow-md border-r border-neutral-500/30"></div>
                      <div className="w-2 h-2.5 bg-neutral-300 border border-neutral-400/50"></div>
                    </div>
                    
                    {/* Right Cable */}
                    <div className="absolute right-[-10px] sm:right-[5%] top-1/2 -translate-y-1/2 flex items-center flex-row-reverse z-0 opacity-80">
                      <div className="w-16 sm:w-24 h-1.5 bg-neutral-300/80 relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border border-neutral-400/20">
                        <motion.div className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-[#25D366] to-transparent" animate={{
                        x: [100, -40]
                      }} transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }} />
                      </div>
                      <div className="w-4 h-3.5 bg-neutral-400/90 shadow-md border-l border-neutral-500/30"></div>
                      <div className="w-2 h-2.5 bg-neutral-300 border border-neutral-400/50"></div>
                    </div>
                    
                    {/* Bottom Left Cable */}
                    <div className="absolute left-[20%] -bottom-[60px] flex flex-col items-center z-0 opacity-80 rotate-[35deg] origin-top">
                      <div className="w-2.5 h-2 bg-neutral-300 border border-neutral-400/50"></div>
                      <div className="w-3.5 h-4 bg-neutral-400/90 shadow-md border-b border-neutral-500/30"></div>
                      <div className="w-1.5 h-20 bg-neutral-300/80 relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border border-neutral-400/20">
                        <motion.div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#25D366] to-transparent" animate={{
                        y: [80, -40]
                      }} transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5
                      }} />
                      </div>
                    </div>
                    
                    {/* Bottom Right Cable */}
                    <div className="absolute right-[20%] -bottom-[60px] flex flex-col items-center z-0 opacity-80 -rotate-[35deg] origin-top">
                      <div className="w-2.5 h-2 bg-neutral-300 border border-neutral-400/50"></div>
                      <div className="w-3.5 h-4 bg-neutral-400/90 shadow-md border-b border-neutral-500/30"></div>
                      <div className="w-1.5 h-20 bg-neutral-300/80 relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border border-neutral-400/20">
                        <motion.div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#25D366] to-transparent" animate={{
                        y: [80, -40]
                      }} transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.2
                      }} />
                      </div>
                    </div>
                  </div>

                  <button onClick={() => setIsSimulatorModalOpen(true)} className="group relative w-full max-w-[280px] px-8 py-5 bg-gradient-to-b from-[#31d871] to-[#128C7E] text-white font-black text-[14px] tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(37,211,102,0.6),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-4px_0_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.8),inset_0_2px_0_rgba(255,255,255,0.6)] flex items-center justify-center gap-3 leading-none overflow-hidden border border-[#1DA851]/50 z-10">
                    {/* Oversized faint lightning bolt watermark */}
                    <Zap className="absolute text-white/20 w-40 h-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none fill-white/10" />
                    
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current drop-shadow-sm shrink-0 relative z-10" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                    <span className="relative z-10 pt-0.5"><Shuffle text="TRY WA BOT DEMO" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" /></span>
                    <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform drop-shadow-sm shrink-0 relative z-10" />
                  </button>
                </div>

                <motion.div className="hidden lg:block relative w-full max-w-[340px] mx-auto perspective-1000 group z-10" animate={{
                y: [-8, 8, -8]
              }} transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}>
                  {/* Deep glowing separation aura behind phone */}
                  <div className="absolute -inset-20 bg-gradient-to-tr from-primary-400/20 via-primary-200/10 to-transparent blur-[80px] rounded-full opacity-100 pointer-events-none"></div>
                  
                  {/* Glassmorphism framing layer behind the phone */}
                  <div className="absolute -inset-8 -[70px] border border-white/60 shadow-[0_0_120px_rgba(242,221,52,0.3)] pointer-events-none opacity-90 backdrop-blur-md bg-white/20"></div>
                  
                  {/* Inner ambient glow */}
                  <div className="absolute inset-0 -[64px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(242,221,52,0.4),transparent_50%)] pointer-events-none blur-xl"></div>
                  
                  {/* Bottom anchor glow */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[340px] h-40 rounded-full bg-primary-500/20 blur-[80px] opacity-100 pointer-events-none"></div>

                  {/* Phone container */}
                  <div className="relative z-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] -[56px]">
                    <WhatsAppSimulator />
                  </div>
                  
                  {/* Floating badge for active DB */}
                  <motion.div animate={{
                  y: [-4, 4, -4]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }} className="absolute -left-16 xl:-left-32 top-24 bg-white/95 border border-neutral-200/80 p-3.5 shadow-xl shadow-neutral-300/30 max-w-[150px] hidden lg:block z-20 backdrop-blur-xl">
                    <span className="text-[9px] font-bold text-primary-600 tracking-wider uppercase block mb-1">Smart DB</span>
                    <span className="text-xs font-extrabold text-neutral-900 leading-tight block">32 days ready</span>
                    <p className="text-[9px] text-neutral-500 mt-1 leading-tight">Direct loop control signal active.</p>
                  </motion.div>

                  {/* Floating badge for live UPI payouts */}
                  <motion.div animate={{
                  y: [4, -4, 4]
                }} transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }} className="absolute -right-16 xl:-right-32 bottom-28 bg-white/95 border border-neutral-200/80 p-3.5 shadow-xl shadow-neutral-300/30 max-w-[150px] hidden lg:block z-20 backdrop-blur-xl">
                    <span className="text-[9px] font-bold text-primary-600 tracking-wider uppercase block mb-1">UPI Verified</span>
                    <span className="text-xs font-extrabold text-neutral-900 leading-tight block">Live settlements</span>
                    <p className="text-[9px] text-neutral-500 mt-1 leading-tight">To RWA accounts directly.</p>
                  </motion.div>
                </motion.div>
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
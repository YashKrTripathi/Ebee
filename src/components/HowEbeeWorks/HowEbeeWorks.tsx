import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SystemMap } from "./SystemMap";
import { StepCard } from "./StepCard";

const steps = [
  {
    step: "01",
    title: "Centralize the intelligence",
    text: "The Smart DB handles metering, relay control, safety logic, connectivity, and load management from one controlled electrical point.",
  },
  {
    step: "02",
    title: "Keep bays simple",
    text: "Parking slots get basic sockets and QR codes so every resident can access charging without per-bay internet or expensive hardware.",
  },
  {
    step: "03",
    title: "Let WhatsApp run the session",
    text: "Users scan, select charging units, pay through UPI, and receive receipts through a familiar WhatsApp flow.",
  },
  {
    step: "04",
    title: "Protect the property load",
    text: "Dynamic load balancing intelligently controls charging during peak demand so EV charging scales safely.",
  },
];

export function HowEbeeWorks() {
  const [activeStep, setActiveStep] = useState(1);

  // Use a proximity-based scroll logic to always highlight the card closest to the center of the viewport
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.scroll-step-card');
      const windowCenter = window.innerHeight / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - windowCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      setActiveStep(closestIndex + 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 md:py-32 border-b border-neutral-300 bg-transparent">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FDF4C4] rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100/50 border border-primary-200/50 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest leading-none">HOW EBEE SOLVES IT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-[1.05] font-display mb-4">
            One Smart DB. Many simple bays.
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed font-medium">
            Ebee moves the complexity out of every parking slot and into a controlled, centralized electrical system.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* Left: Sticky System Map (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28 self-start w-full z-10">
            <SystemMap activeStep={activeStep} />
          </div>

          {/* Mobile: Timeline Map */}
          <div className="block lg:hidden w-full mb-6">
            <SystemMap activeStep={4} />
          </div>

          {/* Right: Scroll Content Cards */}
          <div className="lg:col-span-6 relative pb-[50vh]">
            <div className="flex flex-col justify-center gap-y-10 lg:gap-y-32 pt-4 lg:pt-[20vh]">
              {steps.map((step, index) => (
                <div key={step.step} className="scroll-step-card relative">
                  {/* Connection line for mobile */}
                  <div className="absolute left-6 lg:hidden top-14 bottom-[-40px] w-0.5 bg-neutral-200 -z-10" />
                  
                  <StepCard 
                    step={step.step} 
                    title={step.title} 
                    text={step.text} 
                    isActive={activeStep === index + 1} 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

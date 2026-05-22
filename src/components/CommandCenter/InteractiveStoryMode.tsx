import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, Map, Wrench, Zap } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Site Audit",
    desc: "AI-driven assessment of electrical feasibility and parking layout.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Smart Design",
    desc: "Network mapped for 32 parallel slots with minimal cabling.",
    icon: Map,
  },
  {
    id: 3,
    title: "Installation",
    desc: "WBG engineers deploy the heavy infrastructure in under 15 days.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Active Charging",
    desc: "Residents scan and charge via WhatsApp. No apps needed.",
    icon: Zap,
  },
];

export function InteractiveStoryMode() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight font-display">
          How A Property Gets <span className="text-primary-600">EV Ready</span>
        </h2>
        <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
          Follow the deployment lifecycle of a smart EV community. Click through the phases to see how we compress months of work into days.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Background track line */}
        <div className="absolute top-12 left-0 w-full h-1 bg-neutral-200 hidden md:block" />

        {/* Progress line */}
        <motion.div
          className="absolute top-12 left-0 h-1 bg-primary-500 hidden md:block"
          animate={{ width: `${((activeStep - 1) / (STEPS.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === step.id;
            const isPast = activeStep > step.id;
            const Icon = step.icon;

            return (
              <div 
                key={step.id}
                className="flex flex-row md:flex-col items-center group cursor-pointer w-full md:w-1/4"
                onClick={() => setActiveStep(step.id)}
              >
                {/* Connector line for mobile vertical layout */}
                {idx !== 0 && (
                  <div className={`absolute left-12 w-0.5 h-full -top-full -z-10 md:hidden ${isPast || isActive ? 'bg-primary-500' : 'bg-neutral-200'}`} />
                )}

                <motion.div
                  animate={{ 
                    scale: isActive ? 1.1 : 1,
                    backgroundColor: isActive || isPast ? "#f2dd34" : "#ffffff",
                    borderColor: isActive || isPast ? "#e8d11a" : "#e5e5e5",
                  }}
                  className={`w-24 h-24 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shrink-0 border-4 shadow-sm transition-colors duration-300 relative z-10 ${
                    isActive ? "shadow-[0_0_30px_rgba(242,221,52,0.4)]" : ""
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isActive || isPast ? "text-neutral-900" : "text-neutral-400"}`} />
                </motion.div>

                <div className="ml-6 md:ml-0 md:mt-6 text-left md:text-center md:px-2">
                  <h3 className={`text-lg font-bold transition-colors ${isActive ? "text-primary-600" : "text-neutral-800"}`}>
                    Step {step.id}: {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { BatteryCharging, Cpu, ShieldCheck, Wifi, ReceiptIndianRupee, QrCode, MessageSquare, Zap, Gauge } from "lucide-react";

interface SystemMapProps {
  activeStep: number;
}

const Node = ({ 
  icon: Icon, 
  label, 
  isActive, 
  x, 
  y, 
  glowColor = "rgba(242,221,52,0.6)",
  textPosition = "bottom"
}: { 
  icon: any, 
  label: string, 
  isActive: boolean, 
  x: number, 
  y: number, 
  glowColor?: string,
  textPosition?: "bottom" | "left" | "right"
}) => (
  <motion.div
    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ 
      opacity: isActive ? 1 : 0.4,
      scale: isActive ? 1 : 0.9
    }}
    transition={{ duration: 0.5 }}
  >
    <div 
      className={`relative flex items-center justify-center w-12 h-12  border transition-colors duration-500 ${
        isActive 
          ? "bg-neutral-900 border-primary-400 text-primary-500" 
          : "bg-white border-neutral-300 text-neutral-500 shadow-sm"
      }`}
    >
      {isActive && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ boxShadow: `0 0 25px ${glowColor}` }}
        />
      )}
      <Icon className="w-5 h-5 relative z-10" />
    </div>

    {textPosition === 'bottom' && (
      <span className={`absolute top-full mt-2 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-center w-max max-w-[100px] leading-tight transition-colors duration-500 ${isActive ? "text-neutral-900" : "text-neutral-400"}`}>
        {label}
      </span>
    )}
    {textPosition === 'right' && (
      <span className={`absolute left-full ml-3 lg:ml-4 top-1/2 -translate-y-1/2 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-left w-max max-w-[140px] leading-tight transition-colors duration-500 ${isActive ? "text-neutral-900" : "text-neutral-400"}`}>
        {label}
      </span>
    )}
    {textPosition === 'left' && (
      <span className={`absolute right-full mr-3 lg:mr-4 top-1/2 -translate-y-1/2 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-right w-max max-w-[140px] leading-tight transition-colors duration-500 ${isActive ? "text-neutral-900" : "text-neutral-400"}`}>
        {label}
      </span>
    )}
  </motion.div>
);

const ConnectionPath = ({ d, isActive }: { d: string, isActive: boolean }) => (
  <>
    <path d={d} stroke="#E5E5E5" strokeWidth="2" fill="none" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
    <motion.path
      d={d}
      stroke="#F2DD34"
      strokeWidth="3"
      fill="none"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: isActive ? 1 : 0, 
        opacity: isActive ? 1 : 0 
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 4px rgba(242,221,52,0.8))" }}
    />
    {isActive && (
      <motion.path
        d={d}
        stroke="#FFFFFF"
        strokeWidth="4"
        fill="none"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
        animate={{ 
          pathOffset: 1,
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear",
          delay: 0.5 // Start pulsing after the main path draws
        }}
        style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,1))" }}
      />
    )}
  </>
);

export function SystemMap({ activeStep }: SystemMapProps) {
  // Logic: 
  // Step 1: Centralize intelligence (Smart DB + 4 top modules active)
  // Step 2: Keep bays simple (Smart DB -> Bay + QR active)
  // Step 3: WhatsApp session (Bay -> WhatsApp active)
  // Step 4: Protect property load (WhatsApp -> UPI -> Charging -> Dynamic Load active)
  
  return (
    <div className="relative w-full h-[600px] lg:h-[800px] lg:max-h-[calc(100vh-10rem)] bg-white/40 -[3rem] border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-xl overflow-hidden p-6 lg:p-8">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      {/* SVG Canvas for lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Central DB to Modules */}
        <ConnectionPath d="M 50 18 L 25 10" isActive={activeStep >= 1} />
        <ConnectionPath d="M 50 18 L 75 10" isActive={activeStep >= 1} />
        <ConnectionPath d="M 50 18 L 25 26" isActive={activeStep >= 1} />
        <ConnectionPath d="M 50 18 L 75 26" isActive={activeStep >= 1} />
        
        {/* Central DB to Flow */}
        <ConnectionPath d="M 50 18 L 50 40" isActive={activeStep >= 2} />
        <ConnectionPath d="M 50 40 L 50 52" isActive={activeStep >= 3} />
        <ConnectionPath d="M 50 52 L 50 64" isActive={activeStep >= 4} />
        <ConnectionPath d="M 50 64 L 50 76" isActive={activeStep >= 4} />
        <ConnectionPath d="M 50 76 L 50 88" isActive={activeStep >= 4} />
      </svg>

      {/* Top Section: Smart DB Architecture */}
      <motion.div
        className="absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-neutral-900 border border-primary-400 flex flex-col items-center justify-center text-primary-500 shadow-2xl z-10"
        animate={{
          boxShadow: activeStep >= 1 ? "0 0 50px rgba(242,221,52,0.4)" : "0 10px 30px rgba(0,0,0,0.2)",
          scale: activeStep >= 1 ? 1 : 0.95
        }}
        transition={{ duration: 0.5 }}
      >
        <BatteryCharging className="w-8 h-8 mb-2" />
        <span className="text-[10px] font-black uppercase tracking-widest text-white">Smart DB</span>
      </motion.div>

      {/* Peripherals */}
      <Node icon={Cpu} label="Load Management" x={25} y={10} isActive={activeStep >= 1} />
      <Node icon={ShieldCheck} label="Safety Logic" x={75} y={10} isActive={activeStep >= 1} />
      <Node icon={Wifi} label="Connectivity" x={25} y={26} isActive={activeStep >= 1} />
      <Node icon={ReceiptIndianRupee} label="Metering" x={75} y={26} isActive={activeStep >= 1} />

      {/* Vertical Flow */}
      <Node icon={QrCode} label="Simple Bay + QR" x={50} y={40} isActive={activeStep >= 2} textPosition="right" />
      <Node icon={MessageSquare} label="WhatsApp Session" x={50} y={52} isActive={activeStep >= 3} textPosition="right" />
      <Node icon={ReceiptIndianRupee} label="UPI Payment" x={50} y={64} isActive={activeStep >= 4} textPosition="right" />
      <Node icon={Zap} label="Charging Active" x={50} y={76} isActive={activeStep >= 4} glowColor="rgba(34,197,94,0.6)" textPosition="right" />
      <Node icon={Gauge} label="Load Safe" x={50} y={88} isActive={activeStep >= 4} textPosition="right" />
    </div>
  );
}

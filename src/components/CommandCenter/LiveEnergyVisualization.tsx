import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function LiveEnergyVisualization() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight font-display">
          Live <span className="text-primary-600">Energy Network</span>
        </h2>
        <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
          Our centralized control unit balances loads dynamically across up to 32 sockets, preventing grid overload while ensuring every vehicle charges efficiently.
        </p>
      </div>

      <div className="w-full h-[400px] md:h-[500px] bg-neutral-900 -[32px] border border-neutral-800 relative overflow-hidden flex items-center justify-center p-8 shadow-2xl">
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "24px 24px" }}
        />
        
        {/* Central Hub */}
        <motion.div
          animate={{ boxShadow: ["0 0 20px rgba(242,221,52,0.2)", "0 0 60px rgba(242,221,52,0.6)", "0 0 20px rgba(242,221,52,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-32 h-32 bg-neutral-800 rounded-full border-4 border-primary-500 flex flex-col items-center justify-center shadow-lg"
        >
          <Zap className="w-8 h-8 text-primary-500 mb-1" fill="#f2dd34" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">Smart DB</span>
        </motion.div>

        {/* Connections and Nodes */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: "drop-shadow(0 0 8px rgba(242,221,52,0.5))" }}>
          {/* Animated energy pulses along lines */}
          <g stroke="#f2dd34" strokeWidth="0.5" fill="none" opacity="0.3" vectorEffect="non-scaling-stroke">
            <path d="M 50 50 L 20 20" />
            <path d="M 50 50 L 80 20" />
            <path d="M 50 50 L 15 50" />
            <path d="M 50 50 L 85 50" />
            <path d="M 50 50 L 25 80" />
            <path d="M 50 50 L 75 80" />
          </g>

          <g stroke="#f2dd34" strokeWidth="1" fill="none" strokeDasharray="4 4" vectorEffect="non-scaling-stroke">
            <motion.path 
              d="M 50 50 L 20 20" 
              animate={{ strokeDashoffset: [0, -20] }} 
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }} 
            />
            <motion.path 
              d="M 50 50 L 80 20" 
              animate={{ strokeDashoffset: [0, -20] }} 
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} 
            />
            <motion.path 
              d="M 50 50 L 15 50" 
              animate={{ strokeDashoffset: [0, -20] }} 
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} 
            />
            <motion.path 
              d="M 50 50 L 85 50" 
              animate={{ strokeDashoffset: [0, -20] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
            />
            <motion.path 
              d="M 50 50 L 25 80" 
              animate={{ strokeDashoffset: [0, -20] }} 
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }} 
            />
            <motion.path 
              d="M 50 50 L 75 80" 
              animate={{ strokeDashoffset: [0, -20] }} 
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }} 
            />
          </g>
        </svg>

        {/* Destination Sockets */}
        <div className="absolute top-[20%] left-[20%] w-8 h-8 -ml-4 -mt-4 bg-neutral-800 rounded-full border-2 border-primary-500 z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[20%] left-[80%] w-8 h-8 -ml-4 -mt-4 bg-neutral-800 rounded-full border-2 border-primary-500 z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[50%] left-[15%] w-8 h-8 -ml-4 -mt-4 bg-neutral-800 rounded-full border-2 border-primary-500 z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[50%] left-[85%] w-8 h-8 -ml-4 -mt-4 bg-neutral-800 rounded-full border-2 border-primary-500 z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[80%] left-[25%] w-8 h-8 -ml-4 -mt-4 bg-neutral-800 rounded-full border-2 border-primary-500 z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-[80%] left-[75%] w-8 h-8 -ml-4 -mt-4 bg-neutral-800 rounded-full border-2 border-primary-500 z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        </div>

      </div>
    </div>
  );
}

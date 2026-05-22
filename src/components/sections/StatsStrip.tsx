"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { CommandCenterModal } from "../CommandCenter/CommandCenterModal";

export function StatsStrip() {
  const [isCommandCenterOpen, setIsCommandCenterOpen] = useState(false);

  return (
    <>
      <section id="live-stats" className="py-12 md:py-24 bg-transparent border-y border-neutral-300 relative overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6">
        
        {/* Ambient background glow for entry point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-400/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-600">Live Telemetry Active</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight font-display">
            Explore Our Live EV <br />
            <span className="text-primary-600">Command Center</span>
          </h2>
          
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-4">
            Step into the control room and interact with the data powering India's fastest growing smart EV infrastructure network.
          </p>
          
          <motion.button
            onClick={() => setIsCommandCenterOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-neutral-900 text-primary-500 font-bold text-sm rounded-full flex items-center gap-3 overflow-hidden shadow-xl shadow-neutral-900/20"
          >
            {/* Button Glint */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
            
            <Activity className="w-4 h-4" />
            <span className="uppercase tracking-widest text-[11px] font-black">View Dashboard</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </section>

      {/* The isolated Gamified Dashboard Modal */}
      <CommandCenterModal 
        isOpen={isCommandCenterOpen} 
        onClose={() => setIsCommandCenterOpen(false)} 
      />
    </>
  );
}

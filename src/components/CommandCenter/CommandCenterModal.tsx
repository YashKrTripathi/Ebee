import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { SmartMap } from "./SmartMap";
import { AchievementSystem } from "./AchievementSystem";
import { InteractiveStoryMode } from "./InteractiveStoryMode";
import { ComparisonSlider } from "./ComparisonSlider";
import { LiveEnergyVisualization } from "./LiveEnergyVisualization";
import { GamificationBadges } from "./GamificationBadges";
import { X, Activity, Map, Trophy, Zap, MapPin, CheckCircle, Navigation } from "lucide-react";

interface CommandCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandCenterModal({ isOpen, onClose }: CommandCenterModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/40 backdrop-blur-md font-body"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full sm:w-[96vw] sm:h-[96vh] bg-neutral-50 sm:-[32px] shadow-2xl overflow-hidden border border-neutral-300 flex flex-col"
          >
            {/* Header / Nav */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white/80 backdrop-blur-md z-10 sticky top-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center border border-primary-400">
                  <Activity className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-sm font-black text-neutral-900 tracking-tight uppercase">Live Command Center</h2>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">ebee Infrastructure</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors text-neutral-600"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto scroll-smooth">
              <div className="max-w-6xl mx-auto px-6 py-12 space-y-32">
                
                {/* Zone 1: Welcome Hub */}
                <section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 tracking-tight mb-6 font-display leading-[1.1]">
                      Powering India's Next Gen <br className="hidden md:block" />
                      <span className="text-primary-600 drop-shadow-sm">EV Communities</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-16 font-medium">
                      Explore live telemetry, infrastructure deployment speed, and the massive savings happening across the network right now.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                    {[
                      { label: "Active Sockets", value: 32, suffix: " Max", prefix: "" },
                      { label: "Cost Reduction", value: 40, suffix: "%", prefix: "" },
                      { label: "Deployment", value: 15, suffix: " Days", prefix: "" },
                      { label: "Capacity", value: 0, suffix: " MW", prefix: ">", endValue: 5 } // 5 MW example
                    ].map((stat, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                        className="relative bg-white -[24px] p-6 md:p-8 border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:border-primary-300 transition-colors"
                      >
                        {/* Ambient glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 group-hover:from-primary-500/10 transition-colors duration-500"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="text-4xl md:text-5xl font-black text-primary-600 font-mono tracking-tight flex items-baseline gap-1">
                            {stat.prefix && <span className="text-2xl">{stat.prefix}</span>}
                            <CountUp
                              start={0}
                              end={stat.endValue || stat.value}
                              duration={2.5}
                              separator=","
                              useEasing={true}
                              delay={0.2}
                            />
                            <span className="text-xl md:text-2xl font-bold">{stat.suffix}</span>
                          </div>
                          <div className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mt-3">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Zone 2: Smart Property Map */}
                <section className="h-[60vh] md:h-[70vh] flex flex-col items-center justify-center">
                  <div className="w-full h-full relative">
                    <SmartMap />
                  </div>
                </section>

                {/* Zone 3: Achievement System */}
                <section className="min-h-[50vh] flex flex-col items-center justify-center pt-10">
                  <AchievementSystem />
                </section>
                {/* Zone 4: Interactive Story Mode */}
                <section className="min-h-[50vh] flex flex-col items-center justify-center pt-20">
                  <InteractiveStoryMode />
                </section>

                {/* Zone 5: Comparison Slider */}
                <section className="min-h-[70vh] flex flex-col items-center justify-center pt-20">
                  <ComparisonSlider />
                </section>

                {/* Zone 6: Live Energy Visualization */}
                <section className="min-h-[70vh] flex flex-col items-center justify-center pt-20 pb-20">
                  <LiveEnergyVisualization />
                </section>
                
              </div>
            </div>

            {/* Zone 7: Gamification Badges (Floating) */}
            <GamificationBadges />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

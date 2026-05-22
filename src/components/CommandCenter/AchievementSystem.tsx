import { motion } from "framer-motion";
import { Trophy, CheckCircle, Zap, ShieldCheck, Cpu } from "lucide-react";
import { useState } from "react";

const ACHIEVEMENTS = [
  {
    id: "slots",
    icon: Cpu,
    title: "32 Parallel Slots",
    desc: "Single cabinet orchestrating 32 EVs simultaneously.",
    points: 100,
  },
  {
    id: "cost",
    icon: ShieldCheck,
    title: "40% Cost Reduction",
    desc: "Achieved massive savings on installation materials.",
    points: 250,
  },
  {
    id: "speed",
    icon: Zap,
    title: "15-Day Deployment",
    desc: "From audit to active charging in record time.",
    points: 500,
  },
  {
    id: "scale",
    icon: Trophy,
    title: "MW-Scale Ready",
    desc: "Operating heavy infrastructure seamlessly.",
    points: 1000,
  },
];

export function AchievementSystem() {
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight font-display">
          Milestones <span className="text-primary-600">Unlocked</span>
        </h2>
        <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
          Every deployment shatters industry standards. Discover the achievements our smart infrastructure has secured.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((ach, i) => {
          const isUnlocked = unlocked[ach.id];
          const Icon = ach.icon;

          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onViewportEnter={() => setUnlocked((prev) => ({ ...prev, [ach.id]: true }))}
              className={`relative overflow-hidden rounded-[24px] border p-6 transition-all duration-700 ${
                isUnlocked 
                  ? "bg-white border-primary-300 shadow-[0_10px_40px_rgba(242,221,52,0.15)]" 
                  : "bg-neutral-50 border-neutral-200"
              }`}
            >
              {/* Unlock glow burst */}
              {isUnlocked && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 2, 3], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary-400 blur-2xl rounded-full pointer-events-none"
                />
              )}

              <div className="relative z-10 flex items-center gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-colors duration-700 ${
                  isUnlocked ? "bg-primary-100 text-primary-600 border border-primary-200 shadow-inner" : "bg-neutral-100 text-neutral-300"
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isUnlocked ? 'text-primary-600' : 'text-neutral-400'}`}>
                      {isUnlocked ? "Achievement Unlocked" : "Locked"}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isUnlocked ? 'text-neutral-900' : 'text-neutral-400'}`}>
                      +{ach.points} XP
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-1 transition-colors duration-700 ${isUnlocked ? 'text-neutral-900' : 'text-neutral-400'}`}>
                    {ach.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-700 ${isUnlocked ? 'text-neutral-600' : 'text-neutral-400'}`}>
                    {ach.desc}
                  </p>
                </div>

                <div className="shrink-0 ml-2">
                  {isUnlocked ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                    >
                      <CheckCircle className="w-8 h-8 text-primary-500" />
                    </motion.div>
                  ) : (
                    <div className="w-8 h-8 rounded-full border-2 border-neutral-200" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

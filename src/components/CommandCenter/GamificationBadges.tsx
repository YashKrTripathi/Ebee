import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Medal, Compass, Shield, Zap, ChevronUp, ChevronDown } from "lucide-react";

const BADGES = [
  { id: "explorer", name: "Explorer", icon: Compass, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "expert", name: "Infra Expert", icon: Shield, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { id: "community", name: "Smart Community", icon: Medal, color: "text-purple-500", bg: "bg-purple-500/10" },
  { id: "pioneer", name: "EV Pioneer", icon: Zap, color: "text-primary-600", bg: "bg-primary-500/10" },
];

export function GamificationBadges() {
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<string | null>(null);

  // Simulate unlocking badges over time for the demo
  useEffect(() => {
    if (unlockedCount >= BADGES.length) return;

    const timer = setTimeout(() => {
      setUnlockedCount(prev => prev + 1);
      setRecentlyUnlocked(BADGES[unlockedCount].name);
      
      // Auto expand to show new badge
      setIsExpanded(true);
      
      setTimeout(() => setRecentlyUnlocked(null), 3000);
      
    }, 4000 + unlockedCount * 5000); // Unlock progressively slower

    return () => clearTimeout(timer);
  }, [unlockedCount]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Toast Notification for new badge */}
      <AnimatePresence>
        {recentlyUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="mb-4 bg-white px-4 py-2 shadow-[0_10px_30px_rgba(242,221,52,0.3)] border border-primary-300 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-xs font-bold text-neutral-800">Badge Unlocked: <span className="text-primary-600">{recentlyUnlocked}</span></span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 shadow-2xl overflow-hidden w-64"
        animate={{ height: isExpanded ? "auto" : "56px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header */}
        <div 
          className="h-14 px-4 flex items-center justify-between cursor-pointer hover:bg-neutral-800/50 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <Medal className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-bold text-white tracking-wide">Mission Log</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-primary-600 bg-primary-500/10 px-2 py-0.5">
              {unlockedCount}/{BADGES.length}
            </span>
            {isExpanded ? <ChevronDown className="w-4 h-4 text-neutral-400" /> : <ChevronUp className="w-4 h-4 text-neutral-400" />}
          </div>
        </div>

        {/* Badge Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 pt-0 grid grid-cols-2 gap-3"
            >
              {BADGES.map((badge, idx) => {
                const isUnlocked = idx < unlockedCount;
                const Icon = badge.icon;
                
                return (
                  <div 
                    key={badge.id}
                    className={`flex flex-col items-center justify-center p-3  border transition-all duration-500 ${
                      isUnlocked ? `${badge.bg} border-${badge.color.split('-')[1]}-500/30` : "bg-neutral-800/50 border-neutral-800 opacity-50 grayscale"
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-2 ${isUnlocked ? badge.color : "text-neutral-500"}`} />
                    <span className="text-[10px] font-bold text-center leading-tight text-neutral-300">{badge.name}</span>
                  </div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

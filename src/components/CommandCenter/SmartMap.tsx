import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, Users, Clock, Activity } from "lucide-react";

const PROPERTIES = [
  { id: 1, name: "Cyber Hub EV Base", x: 30, y: 20, chargers: 45, energy: "2.4 MWh", users: 1200, speed: "14 Days" },
  { id: 2, name: "BLR Tech Park", x: 65, y: 75, chargers: 32, energy: "1.8 MWh", users: 850, speed: "12 Days" },
  { id: 3, name: "Mumbai Skyline Res", x: 25, y: 60, chargers: 60, energy: "3.1 MWh", users: 2100, speed: "15 Days" },
  { id: 4, name: "Pune Auto Cluster", x: 35, y: 55, chargers: 20, energy: "0.9 MWh", users: 400, speed: "10 Days" },
  { id: 5, name: "Hyd Smart City", x: 55, y: 65, chargers: 50, energy: "2.8 MWh", users: 1600, speed: "16 Days" },
];

export function SmartMap() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <div className="w-full h-full min-h-[500px] relative bg-neutral-900 -[32px] overflow-hidden border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(242,221,52,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(242,221,52,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Glowing ambient center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="absolute inset-4 sm:inset-10 border border-white/5 p-4">
        {/* Map Nodes */}
        {PROPERTIES.map((prop) => (
          <div
            key={prop.id}
            className="absolute z-10"
            style={{ left: `${prop.x}%`, top: `${prop.y}%` }}
            onMouseEnter={() => setHoveredNode(prop.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* The Node Pin */}
            <motion.div 
              className="relative w-4 h-4 cursor-pointer"
              whileHover={{ scale: 1.5 }}
            >
              {/* Outer pulse */}
              <motion.div 
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary-500 rounded-full"
              />
              {/* Inner dot */}
              <div className="absolute inset-1 bg-primary-400 rounded-full shadow-[0_0_10px_#f2dd34]"></div>
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredNode === prop.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-neutral-800/90 backdrop-blur-xl border border-neutral-700 p-4 shadow-2xl pointer-events-none"
                >
                  <h4 className="text-white font-bold text-sm mb-3 border-b border-neutral-700 pb-2">{prop.name}</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex flex-col">
                      <span className="text-neutral-500 flex items-center gap-1"><Zap className="w-3 h-3 text-primary-500"/> Chargers</span>
                      <span className="text-neutral-200 font-mono font-bold mt-1">{prop.chargers}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 flex items-center gap-1"><Activity className="w-3 h-3 text-primary-500"/> Energy</span>
                      <span className="text-neutral-200 font-mono font-bold mt-1">{prop.energy}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 flex items-center gap-1"><Users className="w-3 h-3 text-primary-500"/> Residents</span>
                      <span className="text-neutral-200 font-mono font-bold mt-1">{prop.users}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 flex items-center gap-1"><Clock className="w-3 h-3 text-primary-500"/> Deployed</span>
                      <span className="text-neutral-200 font-mono font-bold mt-1">{prop.speed}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Abstract connection lines to simulate a network */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <path d="M 30 20 L 65 75 L 55 65 L 35 55 L 25 60 Z" fill="none" stroke="#f2dd34" strokeWidth="0.5" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="absolute bottom-6 left-6 max-w-xs">
          <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-4">
            <h3 className="text-primary-500 font-bold text-sm mb-1 uppercase tracking-wider">Live Network</h3>
            <p className="text-neutral-400 text-xs">Hover over active deployment zones to view real-time performance and usage metrics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

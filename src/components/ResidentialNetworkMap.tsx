
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, MapPin, Zap, Activity, Wifi, TrendingUp, Phone } from "lucide-react";
interface ResidentialNode {
  id: number;
  name: string;
  type: "apartment" | "society";
  available: number;
  total: number;
  charging: number;
  smartDbStatus: "active" | "inactive";
  energyLoad: number;
  waitTime: number;
  coordinates: {
    x: number;
    y: number;
  };
  whatsappEnabled: boolean;
}
const residentialNodes: ResidentialNode[] = [{
  id: 1,
  name: "Green Valley Residency",
  type: "society",
  available: 12,
  total: 28,
  charging: 4,
  smartDbStatus: "active",
  energyLoad: 65,
  waitTime: 8,
  coordinates: {
    x: 35,
    y: 28
  },
  whatsappEnabled: true
}, {
  id: 2,
  name: "Parkwood Apartments",
  type: "apartment",
  available: 8,
  total: 18,
  charging: 2,
  smartDbStatus: "active",
  energyLoad: 52,
  waitTime: 12,
  coordinates: {
    x: 62,
    y: 24
  },
  whatsappEnabled: true
}, {
  id: 3,
  name: "Amber Heights",
  type: "apartment",
  available: 16,
  total: 32,
  charging: 6,
  smartDbStatus: "active",
  energyLoad: 72,
  waitTime: 5,
  coordinates: {
    x: 48,
    y: 42
  },
  whatsappEnabled: true
}, {
  id: 4,
  name: "Silicon Towers",
  type: "apartment",
  available: 10,
  total: 24,
  charging: 3,
  smartDbStatus: "active",
  energyLoad: 58,
  waitTime: 15,
  coordinates: {
    x: 72,
    y: 38
  },
  whatsappEnabled: true
}, {
  id: 5,
  name: "Orchid Residency",
  type: "society",
  available: 14,
  total: 26,
  charging: 5,
  smartDbStatus: "active",
  energyLoad: 68,
  waitTime: 9,
  coordinates: {
    x: 28,
    y: 56
  },
  whatsappEnabled: true
}, {
  id: 6,
  name: "Lakeview Society",
  type: "society",
  available: 11,
  total: 22,
  charging: 2,
  smartDbStatus: "active",
  energyLoad: 48,
  waitTime: 18,
  coordinates: {
    x: 58,
    y: 64
  },
  whatsappEnabled: true
}, {
  id: 7,
  name: "Urban Nest Living",
  type: "apartment",
  available: 9,
  total: 20,
  charging: 4,
  smartDbStatus: "active",
  energyLoad: 61,
  waitTime: 11,
  coordinates: {
    x: 42,
    y: 72
  },
  whatsappEnabled: true
}, {
  id: 8,
  name: "Skyview Apartments",
  type: "apartment",
  available: 13,
  total: 30,
  charging: 7,
  smartDbStatus: "active",
  energyLoad: 75,
  waitTime: 6,
  coordinates: {
    x: 75,
    y: 58
  },
  whatsappEnabled: true
}, {
  id: 9,
  name: "EV Smart Residency",
  type: "society",
  available: 7,
  total: 18,
  charging: 3,
  smartDbStatus: "active",
  energyLoad: 54,
  waitTime: 16,
  coordinates: {
    x: 32,
    y: 82
  },
  whatsappEnabled: true
}, {
  id: 10,
  name: "Maple Greens",
  type: "apartment",
  available: 15,
  total: 28,
  charging: 5,
  smartDbStatus: "active",
  energyLoad: 71,
  waitTime: 7,
  coordinates: {
    x: 68,
    y: 76
  },
  whatsappEnabled: true
}];
const stats = [{
  label: "Societies Connected",
  value: "47",
  icon: MapPin
}, {
  label: "Smart DBs Online",
  value: "156",
  icon: Wifi
}, {
  label: "Active Sessions",
  value: "89",
  icon: Activity
}, {
  label: "Energy Balanced",
  value: "2.4 MWh",
  icon: TrendingUp
}];
interface HoveredNode {
  id: number;
  x: number;
  y: number;
}
export function ResidentialNetworkMap() {
  const [hoveredNode, setHoveredNode] = useState<HoveredNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<ResidentialNode | null>(null);
  const getNodeColor = (node: ResidentialNode) => {
    if (node.available > 10) return "rgba(84, 211, 124, 0.9)"; // Green
    if (node.available > 5) return "rgba(248, 190, 45, 0.9)"; // Yellow
    return "rgba(239, 68, 68, 0.9)"; // Red
  };
  return <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-16 sm:py-24 lg:py-32">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(242,221,52,0.03),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-stretch">
          {/* LEFT COLUMN - HEADLINE, DESCRIPTION, CTA, STATS */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-primary-500/30 bg-primary-500/5 px-4 py-2 backdrop-blur-sm w-fit">
                <Zap className="w-4 h-4 text-primary-400" />
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-primary-300">Hyperlocal Charging Hub</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-[3.5rem] font-black leading-[1.1] text-white">
                  Find EV-Ready{" "}
                  <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                    Societies
                  </span>
                  {" "}Near You
                </h1>

                <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                  Discover app-less, WhatsApp-based EV charging across 150+ residential communities. Real-time socket availability, Smart DB-powered energy management, and seamless charging access for apartments and societies.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button whileHover={{
                y: -2,
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="group inline-flex items-center justify-center bg-gradient-to-r from-primary-400 to-primary-500 px-8 py-4 font-black uppercase tracking-[0.24em] text-neutral-950 shadow-[0_20px_50px_-15px_rgba(242,221,52,0.6)] transition-all hover:shadow-[0_25px_60px_-15px_rgba(242,221,52,0.8)]">
                  Find Nearby Charging
                  <ChevronRight className="ml-3 w-5 h-5 stroke-[3]" />
                </motion.button>
                <motion.button whileHover={{
                y: -2,
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="inline-flex items-center justify-center border border-primary-500/40 bg-primary-500/5 px-8 py-4 font-black uppercase tracking-[0.24em] text-primary-300 transition-all hover:bg-primary-500/10 hover:border-primary-500/60">
                  Book Society Audit
                </motion.button>
              </div>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return <motion.div key={idx} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3 + idx * 0.1
              }} className="border border-primary-500/20 bg-gradient-to-br from-primary-500/10 to-primary-500/5 p-4 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-primary-400" />
                      <span className="text-xs uppercase tracking-[0.2em] text-primary-300 font-semibold">{stat.label}</span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                  </motion.div>;
            })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - INTERACTIVE MAP */}
          <motion.div initial={{
          opacity: 0,
          x: 40,
          scale: 0.95
        }} animate={{
          opacity: 1,
          x: 0,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            {/* Map Container */}
            <div className="relative -[32px] border border-primary-500/20 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-[0_40px_100px_-30px_rgba(242,221,52,0.15)] overflow-hidden aspect-square max-h-[600px] lg:max-h-none">
              {/* Background Grid */}
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(242,221,52,0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Smart DB Connection Network */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection Lines */}
                {residentialNodes.map((node, idx) => {
                if (idx < residentialNodes.length - 1) {
                  const nextNode = residentialNodes[idx + 1];
                  return <line key={`line-${idx}`} x1={`${node.coordinates.x}%`} y1={`${node.coordinates.y}%`} x2={`${nextNode.coordinates.x}%`} y2={`${nextNode.coordinates.y}%`} stroke="rgba(242,221,52,0.08)" strokeWidth="1" opacity="0.5" />;
                }
                return null;
              })}

                {/* Animated Energy Pulses */}
                {residentialNodes.map((node, idx) => <motion.circle key={`pulse-${idx}`} cx={`${node.coordinates.x}%`} cy={`${node.coordinates.y}%`} r="3" fill="none" stroke={getNodeColor(node)} strokeWidth="2" initial={{
                r: 3,
                opacity: 0.8
              }} animate={{
                r: 12,
                opacity: 0
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} />)}
              </svg>

              {/* Interactive Nodes */}
              <div className="absolute inset-0 w-full h-full">
                {residentialNodes.map(node => <motion.div key={node.id} className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style={{
                left: `${node.coordinates.x}%`,
                top: `${node.coordinates.y}%`
              }} onMouseEnter={() => setHoveredNode({
                id: node.id,
                x: node.coordinates.x,
                y: node.coordinates.y
              })} onMouseLeave={() => setHoveredNode(null)} onClick={() => setSelectedNode(node)}>
                    {/* Node Glow */}
                    <motion.div className="absolute -inset-3 rounded-full" animate={hoveredNode?.id === node.id ? {
                  scale: 1.3
                } : {
                  scale: 1
                }} style={{
                  background: getNodeColor(node),
                  filter: "blur(12px)",
                  opacity: 0.6
                }} />

                    {/* Node Circle */}
                    <motion.div className="relative w-6 h-6 rounded-full border-2 flex items-center justify-center" style={{
                  background: getNodeColor(node),
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: `0 0 20px ${getNodeColor(node)}`
                }} animate={hoveredNode?.id === node.id ? {
                  scale: 1.4
                } : {
                  scale: 1
                }} transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}>
                      <Zap className="w-3 h-3 text-white" />
                    </motion.div>

                    {/* Hover Label */}
                    <AnimatePresence>
                      {hoveredNode?.id === node.id && <motion.div initial={{
                    opacity: 0,
                    y: 8
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: 8
                  }} className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-50">
                          <div className="bg-neutral-950 border border-primary-500/40 px-3 py-2 shadow-lg shadow-primary-500/20 backdrop-blur-xl">
                            <p className="text-xs font-bold text-primary-300">{node.available} Free • {node.charging} Charging</p>
                          </div>
                        </motion.div>}
                    </AnimatePresence>
                  </motion.div>)}
              </div>

              {/* Map Center Info Card */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.5
            }} className="absolute inset-x-4 bottom-4 border border-primary-500/30 bg-gradient-to-r from-neutral-900/95 to-neutral-950/95 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-400 font-semibold">Live Network Status</p>
                    <p className="mt-1 text-sm text-neutral-300">47 Societies • 156 Smart DBs • 2.4 MWh Balanced</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-bold text-green-400">Active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* DETAILED INFO CARD - SHOWN ON NODE SELECTION */}
        <AnimatePresence>
          {selectedNode && <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: 20
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedNode(null)}>
              <motion.div className="w-full max-w-md border border-primary-500/40 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-[0_60px_120px_-40px_rgba(242,221,52,0.2)]" onClick={e => e.stopPropagation()}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-400 font-semibold">{selectedNode.type === "apartment" ? "Apartment Complex" : "Residential Society"}</p>
                    <h3 className="mt-2 text-2xl font-black text-white">{selectedNode.name}</h3>
                  </div>
                  <button onClick={() => setSelectedNode(null)} className="text-neutral-400 hover:text-white transition-colors">
                    \u2715
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Charging Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="border border-primary-500/20 bg-primary-500/5 p-3 text-center">
                      <p className="text-xs text-primary-300 font-semibold uppercase tracking-[0.15em]">Available</p>
                      <p className="mt-2 text-2xl font-black text-primary-300">{selectedNode.available}</p>
                    </div>
                    <div className="border border-primary-500/20 bg-primary-500/5 p-3 text-center">
                      <p className="text-xs text-primary-300 font-semibold uppercase tracking-[0.15em]">Charging</p>
                      <p className="mt-2 text-2xl font-black text-primary-300">{selectedNode.charging}</p>
                    </div>
                    <div className="border border-primary-500/20 bg-primary-500/5 p-3 text-center">
                      <p className="text-xs text-primary-300 font-semibold uppercase tracking-[0.15em]">Total</p>
                      <p className="mt-2 text-2xl font-black text-primary-300">{selectedNode.total}</p>
                    </div>
                  </div>

                  {/* Energy & Status */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-400">Energy Load</span>
                      <span className="text-sm font-bold text-primary-300">{selectedNode.energyLoad}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-primary-400 to-primary-500" animate={{
                    width: `${selectedNode.energyLoad}%`
                  }} transition={{
                    duration: 1
                  }} />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-neutral-400">Avg Wait Time</span>
                      <span className="text-sm font-bold text-primary-300">{selectedNode.waitTime} min</span>
                    </div>
                  </div>

                  {/* WhatsApp Badge */}
                  {selectedNode.whatsappEnabled && <div className="border border-green-500/30 bg-green-500/5 p-3 flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-400">WhatsApp Enabled</p>
                        <p className="text-xs text-green-300/80 mt-1">Book and charge via WhatsApp</p>
                      </div>
                    </div>}
                </div>

                <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="w-full bg-gradient-to-r from-primary-400 to-primary-500 px-6 py-3 font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all hover:shadow-[0_20px_40px_-10px_rgba(242,221,52,0.6)]">
                  Book on WhatsApp
                </motion.button>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </section>;
}
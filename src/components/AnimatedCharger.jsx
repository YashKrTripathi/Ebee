import React from "react";
import { motion } from "framer-motion";

export function AnimatedCharger() {
  return (
    <div className="animated-charger-container" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <motion.svg 
        viewBox="0 0 400 600" 
        style={{ width: "100%", maxWidth: "340px", height: "auto", filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.2))" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="bodyBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="10%" stopColor="#2563eb" />
            <stop offset="90%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="frontWhite" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f3f4f6" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
          <linearGradient id="darkTrim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* --- SHADOW --- */}
        <ellipse cx="200" cy="530" rx="150" ry="20" fill="rgba(0,0,0,0.25)" filter="blur(6px)" />

        {/* --- BACK REAR WHEELS --- */}
        <rect x="40" y="380" width="45" height="120" rx="22" fill="url(#wheelGrad)" />
        <rect x="315" y="380" width="45" height="120" rx="22" fill="url(#wheelGrad)" />
        
        {/* Hubcaps */}
        <ellipse cx="62" cy="440" rx="12" ry="30" fill="#111827" />
        <ellipse cx="338" cy="440" rx="12" ry="30" fill="#111827" />

        {/* --- BASE FRAME --- */}
        <path d="M80 470 L320 470 L300 520 L100 520 Z" fill="url(#darkTrim)" />

        {/* --- MAIN BODY SHELL (BLUE) --- */}
        <path d="M80 180 L320 180 L340 470 L60 470 Z" fill="url(#bodyBlue)" />
        
        {/* Outer Bevels / Geometric Cuts */}
        <path d="M60 470 L80 180 L110 180 L90 470 Z" fill="#1e3a8a" opacity="0.6" />
        <path d="M340 470 L320 180 L290 180 L310 470 Z" fill="#1e3a8a" opacity="0.6" />

        {/* --- TOP SLOPED FACE (BLACK) --- */}
        <path d="M120 100 L280 100 L290 230 L110 230 Z" fill="url(#darkTrim)" />
        
        {/* Top Handle Loop */}
        <path d="M120 100 C120 40, 160 20, 200 20 C240 20, 280 40, 280 100" fill="none" stroke="#111827" strokeWidth="26" strokeLinecap="round" />
        
        {/* --- FRONT WHITE PANEL --- */}
        <path d="M110 230 L290 230 L300 480 L100 480 Z" fill="url(#frontWhite)" />

        {/* --- SCREEN ON SLOPED FACE --- */}
        <path d="M140 120 L260 120 L270 210 L130 210 Z" fill="#000000" />
        
        {/* Animated Screen Inside */}
        <motion.path 
          d="M145 125 L255 125 L263 203 L137 203 Z" 
          fill="url(#screenGlow)"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* UI Elements on Screen */}
        <motion.rect x="150" y="140" width="45" height="5" rx="2.5" fill="#ffffff" opacity="0.9" />
        <motion.rect x="150" y="152" width="70" height="5" rx="2.5" fill="#ffffff" opacity="0.6" />
        <motion.circle cx="240" cy="160" r="16" fill="#ffffff" opacity="0.8" 
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />

        {/* --- LOGO ON WHITE PANEL --- */}
        <g transform="translate(200, 340)">
          <path d="M-35 -20 C-50 -20, -55 -5, -55 10 C-55 25, -50 40, -35 40 C-20 40, -15 25, -15 10 C-15 -5, -20 -20, -35 -20 Z" fill="none" stroke="#2563eb" strokeWidth="6"/>
          <text x="10" y="15" fontFamily="system-ui, sans-serif" fontSize="46" fontWeight="800" fill="#2563eb" letterSpacing="-2">ebee</text>
          <text x="-5" y="55" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#374151" letterSpacing="1">charge</text>
        </g>

        {/* Decorative lines on white panel */}
        <line x1="120" y1="450" x2="280" y2="450" stroke="#d1d5db" strokeWidth="3" />
        <line x1="115" y1="465" x2="285" y2="465" stroke="#d1d5db" strokeWidth="3" />

        {/* --- CHARGING GUNS (HOLSTERED) --- */}
        <path d="M50 200 L85 200 L95 300 L40 300 Z" fill="#111827" />
        <path d="M350 200 L315 200 L305 300 L360 300 Z" fill="#111827" />
        
        {/* Gun connectors hanging out */}
        <path d="M40 300 L95 300 L85 360 L50 360 Z" fill="#9ca3af" />
        <path d="M360 300 L305 300 L315 360 L350 360 Z" fill="#9ca3af" />

        {/* --- CABLES DRAPING DOWN --- */}
        <path d="M67 360 C 50 460, 20 540, 100 520 C 130 510, 150 480, 150 470" fill="none" stroke="#1f2937" strokeWidth="18" strokeLinecap="round" />
        <path d="M333 360 C 350 460, 380 540, 300 520 C 270 510, 250 480, 250 470" fill="none" stroke="#1f2937" strokeWidth="18" strokeLinecap="round" />

        {/* Cable highlights */}
        <path d="M67 360 C 50 460, 20 540, 100 520 C 130 510, 150 480, 150 470" fill="none" stroke="#374151" strokeWidth="8" strokeLinecap="round" />
        <path d="M333 360 C 350 460, 380 540, 300 520 C 270 510, 250 480, 250 470" fill="none" stroke="#374151" strokeWidth="8" strokeLinecap="round" />

        {/* Energy Pulse through cables */}
        <motion.path 
          d="M67 360 C 50 460, 20 540, 100 520 C 130 510, 150 480, 150 470" 
          fill="none" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M333 360 C 350 460, 380 540, 300 520 C 270 510, 250 480, 250 470" 
          fill="none" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.25 }}
        />

        {/* --- FRONT CASTERS --- */}
        <rect x="110" y="500" width="24" height="35" rx="8" fill="#030712" />
        <rect x="266" y="500" width="24" height="35" rx="8" fill="#030712" />
      </motion.svg>
    </div>
  );
}

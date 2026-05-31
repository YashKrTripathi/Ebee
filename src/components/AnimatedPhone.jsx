import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ChevronLeft, MoreVertical } from "lucide-react";

export function AnimatedPhone() {
  const [stage, setStage] = useState(0);

  // Sequence Timer
  useEffect(() => {
    const runAnimation = () => {
      setStage(0);
      const t1 = setTimeout(() => setStage(1), 1000); // Payment card
      const t2 = setTimeout(() => setStage(2), 2800); // Paid
      const t3 = setTimeout(() => setStage(3), 3600); // Charging started
      const t4 = setTimeout(() => setStage(4), 4500); // Live card
      const t5 = setTimeout(() => setStage(5), 5800); // Tick 1
      const t6 = setTimeout(() => setStage(6), 7200); // Tick 2
      const tReset = setTimeout(runAnimation, 10500); // Loop
      
      return [t1, t2, t3, t4, t5, t6, tReset];
    };

    const timers = runAnimation();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="animated-phone-container">
      <div className="phone-bezel">
        <div className="phone-island"></div>
        <div className="phone-screen">
          <div className="phone-header">
             <div className="phone-status-bar">
               <span className="time">9:41</span>
               <div className="status-icons">
                 <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1 9.5H3M5.33333 7H7.33333M9.66667 4.5H11.666M14 2H16" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/></svg>
                 <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 9.5C9.38071 9.5 10.5 8.38071 10.5 7C10.5 5.61929 9.38071 4.5 8 4.5C6.61929 4.5 5.5 5.61929 5.5 7C5.5 8.38071 6.61929 9.5 8 9.5Z" fill="#1f2937"/><path d="M2.5 3.5C5.53757 0.462434 10.4624 0.462434 13.5 3.5" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/></svg>
                 <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="18" height="10" rx="3" stroke="#1f2937" strokeWidth="1.5"/><rect x="3" y="3" width="14" height="6" rx="1.5" fill="#1f2937"/><path d="M21 4V8" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/></svg>
               </div>
             </div>
             <div className="wa-nav">
               <div className="wa-nav-left">
                 <ChevronLeft size={24} color="#1f2937" />
                 <div className="wa-avatar">
                   <span>eb</span>
                   <div className="online-dot"></div>
                 </div>
                 <div className="wa-title">
                   <strong>ebee Assistant</strong>
                   <span><span className="dot-green"></span> Online • Verified Bot</span>
                 </div>
               </div>
               <div className="wa-nav-right">
                 <div className="live-badge">Live DB</div>
                 <MoreVertical size={20} color="#1f2937" />
               </div>
             </div>
          </div>
          
          <div 
            className="phone-chat-area" 
            style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', background: '#f1ebd7', padding: '16px', display: 'flex', flexDirection: 'column-reverse', gap: '12px' }}
          >
             <div style={{ height: '16px', flexShrink: 0 }}></div>

             <AnimatePresence>
               {stage >= 4 && (
                 <motion.div 
                   layout
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   transition={{ type: "spring", stiffness: 260, damping: 20 }}
                   className="live-charging-card"
                 >
                   <div className="card-header-chip">
                     <Zap className="pulse-icon" size={14} /> LIVE CHARGING
                   </div>
                   
                   <div className="card-grid">
                     <span>Socket:</span> <strong>A12</strong>
                     <span>Power:</span> <strong className="text-yellow">7.4 kW</strong>
                     
                     <span>Energy:</span> 
                     <motion.strong
                        className="text-yellow"
                        initial={{ opacity: 0.5 }}
                        animate={stage >= 5 ? { opacity: 1 } : { opacity: 0.5 }}
                     >
                        {stage >= 6 ? "11.3 kWh" : stage >= 5 ? "4.2 kWh" : "0.0 kWh"}
                     </motion.strong>
                     
                     <span>Cost:</span> 
                     <motion.strong
                        className="text-green"
                        initial={{ opacity: 0.5 }}
                        animate={stage >= 5 ? { opacity: 1 } : { opacity: 0.5 }}
                     >
                        {stage >= 6 ? "₹136" : stage >= 5 ? "₹54" : "₹0"}
                     </motion.strong>
                     
                     <span>Time:</span> <strong>{stage >= 6 ? "5 min" : stage >= 5 ? "2 min" : "0 min"}</strong>
                   </div>

                   <div className="battery-section">
                     <div className="battery-labels">
                       <span>Battery:</span>
                       <span className="battery-range">
                          35% &rarr; {stage >= 6 ? "73%" : stage >= 5 ? "48%" : "35%"}
                       </span>
                     </div>
                     <div className="battery-bar-bg">
                       <motion.div 
                         className="battery-bar-fill"
                         initial={{ width: "35%" }}
                         animate={{ width: stage >= 6 ? "73%" : stage >= 5 ? "48%" : "35%" }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                       />
                     </div>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>

             <AnimatePresence>
               {stage >= 3 && (
                 <motion.div 
                   layout
                   initial={{ opacity: 0, scale: 0.95, y: 10 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   className="chat-bubble bot-bubble"
                 >
                   🚀 Charging session started!
                   <div className="timestamp">10:32 AM</div>
                 </motion.div>
               )}
             </AnimatePresence>

             <AnimatePresence>
               {stage >= 1 && (
                 <motion.div 
                   layout
                   initial={{ opacity: 0, scale: 0.95, y: 10 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   className="chat-bubble bot-bubble"
                   style={{ width: "100%", padding: "0", overflow: "hidden" }}
                 >
                   <div style={{ padding: "12px 14px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                     <div style={{ fontSize: "20px", fontWeight: "700", color: "#1f2937" }}>₹136.00</div>
                     <div style={{ fontSize: "11px", color: "#6b7280" }}>Ebee Charging - Socket A12</div>
                   </div>
                   <div style={{ padding: "10px" }}>
                     <motion.div 
                       style={{
                         background: stage >= 2 ? "#dcfce7" : "#eab308",
                         color: stage >= 2 ? "#16a34a" : "#fff",
                         padding: "8px",
                         borderRadius: "8px",
                         textAlign: "center",
                         fontWeight: "600",
                         fontSize: "13px",
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         gap: "6px"
                       }}
                       animate={{ backgroundColor: stage >= 2 ? "#dcfce7" : "#eab308" }}
                     >
                       {stage >= 2 ? "✅ Paid successfully" : "Pay with UPI"}
                     </motion.div>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>

             <motion.div 
               layout
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="chat-bubble bot-bubble faint"
             >
               📷 Bay QR scanned: Socket A12. Please complete your UPI payment to begin.
               <div className="timestamp">10:31 AM</div>
             </motion.div>

             <div style={{ flex: 1, minHeight: '16px' }}></div>
          </div>
          
          <div className="phone-input-area" style={{ background: '#f1ebd7', padding: '10px 14px 16px', zIndex: 5 }}>
             <div className="input-pill">
               <span className="placeholder">Auto-playing demo...</span>
               <div className="send-btn">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

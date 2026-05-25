import { MessageSquareCode, Zap, Landmark, Award } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const Particles = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary-400/30"
          initial={{
            width: Math.random() * 8 + 4 + "px",
            height: Math.random() * 8 + 4 + "px",
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50 + "px"],
            x: [null, Math.random() * 50 - 25 + "px"],
            opacity: [null, Math.random() * 0.8 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export function WhyEbee() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      icon: <MessageSquareCode className="w-6 h-6 text-primary-600 drop-shadow-sm" />,
      title: "No Apps",
      description: "Just WhatsApp + UPI. No complex iOS/Android downloads, no cumbersome signups, absolutely zero friction for your residents."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-600 drop-shadow-sm" />,
      title: "No Load Anxiety",
      description: "Dynamic active load balancing monitors building power spikes, capping chargers safely to shield your property's transformer."
    },
    {
      icon: <Landmark className="w-6 h-6 text-primary-600 drop-shadow-sm" />,
      title: "Low CAPEX",
      description: "Centralized Smart DB controls up to 32 charging points concurrently, reducing material and installation wiring costs by up to 40%."
    },
    {
      icon: <Award className="w-6 h-6 text-primary-600 drop-shadow-sm" />,
      title: "Engineering Legacy",
      description: "Proven high-capacity EV infrastructure backed by full WBG engineering deployments across Singapore, Malaysia, and India."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.21, 1.02, 0.49, 1.0], 
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="why-ebee" className="relative py-12 md:py-32 bg-transparent text-neutral-900 border-b border-neutral-300 font-body overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary-300/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#FDF4C4] rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0"></div>
      
      {/* Floating Particles */}
      {!shouldReduceMotion && <Particles />}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-10 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/50 border border-primary-200/50 backdrop-blur-sm mb-6 shadow-sm">
             <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
             <span className="text-[11px] font-bold text-primary-700 uppercase tracking-widest leading-none">Designed for human simplicity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 font-body">
            Why choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">ebee</span>
          </h2>
        </motion.div>

        {/* Dynamic Organic Grid */}
        <div className="relative grid grid-cols-2 gap-x-3 sm:gap-x-8 gap-y-6 md:gap-y-12 max-w-4xl mx-auto">
          
          {/* Animated Connecting Line SVG */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
               {/* Base soft line */}
               <path 
                 d="M 250 150 C 500 150, 500 450, 750 450" 
                 stroke="rgba(242,221,52,0.15)" 
                 strokeWidth="4" 
                 strokeLinecap="round"
               />
               <path 
                 d="M 750 150 C 500 150, 500 450, 250 450" 
                 stroke="rgba(242,221,52,0.15)" 
                 strokeWidth="4" 
                 strokeLinecap="round"
               />
               
               {/* Animated flowing line 1 */}
               <motion.path 
                 d="M 250 150 C 500 150, 500 450, 750 450" 
                 stroke="url(#flowGradient)" 
                 strokeWidth="4" 
                 strokeLinecap="round"
                 strokeDasharray="15 30"
                 initial={{ strokeDashoffset: 100 }}
                 animate={{ strokeDashoffset: 0 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
               
               {/* Animated flowing line 2 */}
               <motion.path 
                 d="M 750 150 C 500 150, 500 450, 250 450" 
                 stroke="url(#flowGradient)" 
                 strokeWidth="4" 
                 strokeLinecap="round"
                 strokeDasharray="15 30"
                 initial={{ strokeDashoffset: 100 }}
                 animate={{ strokeDashoffset: 0 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />

               <defs>
                 <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8D11A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F2DD34" stopOpacity="0.8" />
                 </linearGradient>
               </defs>
            </svg>
          </div>

          {cards.map((card, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                whileHover={!shouldReduceMotion ? "hover" : undefined}
                drag={!isMobile}
                dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                dragSnapToOrigin={true}
                whileDrag={!isMobile ? { scale: 1.05, zIndex: 50, cursor: "grabbing" } : undefined}
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className={`relative flex flex-col group cursor-grab ${isEven ? 'md:mt-0 md:-translate-y-10' : 'md:mt-0 md:translate-y-10'}`}
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-primary-400/20 -[2.5rem] md:-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-95 group-hover:scale-105 z-0"></div>
                
                {/* Organic Card Body */}
                <div className="relative bg-[#FEFAF7]/95 backdrop-blur-xl sm:-[2.5rem] md:-[3rem] p-4 sm:p-8 md:p-10 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col z-10 transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(242,221,52,0.3)] group-hover:border-white group-hover:bg-white h-full">
                  
                  {/* Prominent Circular Icon Node */}
                  <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-white to-primary-50 flex items-center justify-center mb-3 sm:mb-6 shadow-[0_8px_20px_rgba(242,221,52,0.2)] border border-white group-hover:scale-110 transition-transform duration-500 ease-out">
                    <div className="absolute inset-0 rounded-full bg-primary-300/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">{card.icon}</div>
                  </div>

                  <h3 className="text-base sm:text-xl font-extrabold text-neutral-900 tracking-tight mb-2 sm:mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-[11px] sm:text-sm leading-relaxed text-neutral-500 font-body font-normal">
                    {card.description}
                  </p>
                  
                  {/* Decorative abstract shape inside card */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

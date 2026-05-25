import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FeasibilityModal } from "../../components/FeasibilityModal";
import { motion, type Variants } from "framer-motion";
import { Globe2, MapPin, Zap, Building2, BatteryCharging, Bus } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const projects = [
  {
    title: "ChargeZone India",
    category: "Commercial CPO",
    location: "India",
    desc: "Deployment of high-capacity charging infrastructure for one of India's largest Charge Point Operators.",
    icon: <BatteryCharging className="w-6 h-6" />
  },
  {
    title: "DC Handal Hub",
    category: "Standalone EV Hub",
    location: "Johor, Malaysia",
    desc: "First-of-its-kind hub featuring 28 Kempower satellite terminals delivering 1.2MW total capacity. Integrated Dynamic Load Balancing to keep total load within grid limits.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "LTA Singapore Electric Buses",
    category: "Government Transport",
    location: "Singapore",
    desc: "Deployed 450kW Opportunity Charging (Pantograph) systems at Bukit Panjang and Bedok transport hubs, recharging electric buses in under 10 minutes.",
    icon: <Bus className="w-6 h-6" />
  },
  {
    title: "ChargeEV Network",
    category: "National CPO",
    location: "Malaysia",
    desc: "Extensive deployment of public charging infrastructure for Malaysia's largest CPO.",
    icon: <MapPin className="w-6 h-6" />
  }
];

export function Projects() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Our Projects & Deployments | EbeeCharge";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      <Header onRequestAudit={() => setIsAuditModalOpen(true)} />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 overflow-hidden border-b border-neutral-300">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,221,52,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 border border-primary-200 text-primary-800 text-xs font-bold tracking-widest uppercase mb-6">
                <Globe2 className="w-4 h-4" />
                <span>Global Engineering Legacy</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight font-display mb-6">
                Powered by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Proven Expertise</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
                ebee is backed by WBG's extensive history in deploying high-capacity charging infrastructure across Singapore, Malaysia, Thailand, and India.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-neutral-50 overflow-hidden border border-neutral-200 hover:border-primary-400 transition-colors">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-white shadow-sm border border-neutral-200 text-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 mb-2">{project.title}</h3>
                    <div className="flex items-center gap-1 text-primary-600 mb-4 font-semibold text-sm uppercase tracking-wider">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SUMMARY STATS */}
        <section className="py-24 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-16">Delivering Scale Since 2015</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Founded in", value: "2015" },
                { label: "Countries", value: "4" },
                { label: "Mega Watts Deployed", value: "10+" },
                { label: "Core Segments", value: "Land, Ports & Marine" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-black text-primary-500 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold tracking-widest uppercase text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer onRequestAudit={() => setIsAuditModalOpen(true)} />
      <FeasibilityModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} initialPropertyName="" initialEmail="" />
    </div>
  );
}

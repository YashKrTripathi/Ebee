import { useState, useEffect } from "react";
import { MapPin, Zap, Clock, TrendingUp, ChevronRight, Search, Filter, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FaqSection } from "../components/FaqSection";
import { ResidentialNetworkMap } from "../components/ResidentialNetworkMap";

export default function NetworkChargingMap() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenGeneralAudit = () => {
    setIsAuditModalOpen(true);
  };

  // Mock charging locations data
  const chargingLocations = [
    {
      id: 1,
      name: "Prestige Parkside Towers",
      location: "Bangalore, KA",
      sockets: 24,
      available: 18,
      region: "bangalore",
      status: "active",
      coordinates: { lat: 12.9352, lng: 77.6245 },
      uptimePercentage: 98.5,
      chargingSpeed: "7-11 kW",
      monthlyTransactions: 2847
    },
    {
      id: 2,
      name: "Marina Bay Heights",
      location: "Mumbai, MH",
      sockets: 32,
      available: 24,
      region: "mumbai",
      status: "active",
      coordinates: { lat: 19.0760, lng: 72.8777 },
      uptimePercentage: 99.2,
      chargingSpeed: "7-11 kW",
      monthlyTransactions: 3421
    },
    {
      id: 3,
      name: "Green Valley Residences",
      location: "Delhi, DL",
      sockets: 16,
      available: 12,
      region: "delhi",
      status: "active",
      coordinates: { lat: 28.6139, lng: 77.2090 },
      uptimePercentage: 97.8,
      chargingSpeed: "7-11 kW",
      monthlyTransactions: 1923
    },
    {
      id: 4,
      name: "Harmony Apartments",
      location: "Bangalore, KA",
      sockets: 20,
      available: 8,
      region: "bangalore",
      status: "active",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      uptimePercentage: 98.1,
      chargingSpeed: "7-11 kW",
      monthlyTransactions: 2134
    },
    {
      id: 5,
      name: "Oceanview Complex",
      location: "Mumbai, MH",
      sockets: 28,
      available: 22,
      region: "mumbai",
      status: "active",
      coordinates: { lat: 19.1136, lng: 72.8697 },
      uptimePercentage: 99.0,
      chargingSpeed: "7-11 kW",
      monthlyTransactions: 3156
    },
    {
      id: 6,
      name: "Tech Park Residency",
      location: "Bangalore, KA",
      sockets: 30,
      available: 28,
      region: "bangalore",
      status: "active",
      coordinates: { lat: 12.9352, lng: 77.6890 },
      uptimePercentage: 99.3,
      chargingSpeed: "7-11 kW",
      monthlyTransactions: 3012
    }
  ];

  const filteredLocations = chargingLocations.filter(location => {
    const matchesRegion = selectedRegion === "all" || location.region === selectedRegion;
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          location.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Network statistics
  const networkStats = [
    {
      number: "150+",
      label: "Active Charging Locations",
      description: "Across India's major metropolitan areas"
    },
    {
      number: "4,200+",
      label: "Total Charging Sockets",
      description: "Connected to the ebee network"
    },
    {
      number: "98.5%",
      label: "Average Network Uptime",
      description: "24/7 monitored and maintained"
    },
    {
      number: "2.1M+",
      label: "Monthly Charging Sessions",
      description: "Powered by WhatsApp + UPI"
    }
  ];

  // Benefits cards
  const benefits = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Neighborhood Discovery",
      description: "Find nearest charging stations with live availability updates and walking/driving directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Availability",
      description: "See exactly how many sockets are free right now, updated every 30 seconds across the network"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Charging Speed Info",
      description: "Compare charging speeds (7-11 kW AC, 50+ kW DC) and estimated charging times for your vehicle"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Usage Analytics",
      description: "Track your personal charging history, carbon footprint reduction, and spending patterns"
    }
  ];

  // How it works - Map usage
  const mapWorkflow = [
    {
      step: "1",
      title: "Open the Network Map",
      description: "Access the interactive charging network map through your ebee dashboard or WhatsApp"
    },
    {
      step: "2",
      title: "Search or Filter",
      description: "Search by location, or filter by availability, charging speed, and amenities"
    },
    {
      step: "3",
      title: "Reserve Spot",
      description: "Reserve an available socket for the next 30 minutes directly from the map"
    },
    {
      step: "4",
      title: "Navigate & Charge",
      description: "Get turn-by-turn navigation and charge seamlessly using WhatsApp + UPI"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-neutral-800 flex flex-col font-body selection:bg-primary-500 selection:text-neutral-900">
      
      {/* Sticky Header */}
      <Header onRequestAudit={handleOpenGeneralAudit} />

      <main className="flex-1">
        
        <ResidentialNetworkMap />

        {/* ==================== NETWORK OVERVIEW STATS ==================== */}
        <section className="py-16 bg-neutral-50 border-b border-neutral-200/50 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="text-3xl md:text-4xl font-mono font-extrabold text-primary-600 tracking-tight leading-none mb-2">
                    {stat.number}
                  </p>
                  <h3 className="text-sm font-bold text-neutral-800 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-body font-normal">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== INTERACTIVE MAP SECTION ==================== */}
        <section id="map-section" className="py-20 bg-white border-b border-neutral-200/50 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
                Live Network Map
              </h2>
              <p className="text-neutral-600 text-sm font-medium">
                Explore our growing network of charging locations. Data updates every 30 seconds.
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search by location or property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-neutral-500" />
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="all">All Regions</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Charging Locations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((location, idx) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }}
                  className="group bg-neutral-50 border border-neutral-200/50 rounded-2xl p-6 hover:border-primary-300 transition-all duration-300 cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-neutral-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-[12px] text-neutral-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {location.location}
                      </p>
                    </div>
                    <div className="px-2.5 py-1 bg-emerald-50 rounded-lg text-emerald-700 text-[10px] font-bold">
                      Active
                    </div>
                  </div>

                  {/* Availability Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[12px] font-bold text-neutral-700">Available Sockets</span>
                      <span className="text-[12px] font-bold text-primary-600">
                        {location.available}/{location.sockets}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(location.available / location.sockets) * 100}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-neutral-200/50">
                    <div>
                      <p className="text-[10px] text-neutral-500 font-semibold mb-1">Charging Speed</p>
                      <p className="text-sm font-bold text-neutral-800">{location.chargingSpeed}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-semibold mb-1">Uptime</p>
                      <p className="text-sm font-bold text-neutral-800">{location.uptimePercentage}%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-semibold mb-1">Monthly Uses</p>
                      <p className="text-sm font-bold text-neutral-800">{location.monthlyTransactions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-semibold mb-1">Region</p>
                      <p className="text-sm font-bold text-neutral-800 capitalize">{location.region}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full py-2.5 px-4 bg-primary-50 text-primary-600 font-bold text-sm rounded-xl hover:bg-primary-500 hover:text-neutral-950 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    View Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {filteredLocations.length === 0 && (
              <div className="text-center py-12">
                <AlertCircle className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                <p className="text-neutral-500 font-medium">No locations found matching your criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* ==================== BENEFITS SECTION ==================== */}
        <section className="py-20 bg-neutral-50 border-b border-neutral-200/50 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
                Network Map Features
              </h2>
              <p className="text-neutral-600 text-sm font-medium">
                Powerful tools to help you find and manage your charging experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-sm mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[12px] text-neutral-500 leading-relaxed font-body font-normal">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== HOW TO USE MAP SECTION ==================== */}
        <section className="py-20 bg-white border-b border-neutral-200/50 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
                How to Use the Map
              </h2>
              <p className="text-neutral-600 text-sm font-medium">
                Find and reserve your perfect charging spot in 4 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mapWorkflow.map((workflow, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connector line */}
                  {idx < mapWorkflow.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(100%+12px)] w-[calc(100%-24px)] h-0.5 bg-gradient-to-r from-primary-400 to-transparent pointer-events-none"></div>
                  )}

                  <div className="bg-neutral-50 border border-neutral-200/50 rounded-2xl p-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-neutral-950 font-extrabold text-sm mb-4 shadow-md">
                      {workflow.step}
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm mb-2">
                      {workflow.title}
                    </h3>
                    <p className="text-[12px] text-neutral-500 font-body font-normal">
                      {workflow.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== AVAILABILITY STATUS SECTION ==================== */}
        <section className="py-20 bg-neutral-50 border-b border-neutral-200/50 font-body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
                Real-Time Availability
              </h2>
              <p className="text-neutral-600 text-sm font-medium">
                Network status updates every 30 seconds across all locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Peak Hours Analytics */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-200/50 rounded-2xl p-8"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-6">Peak Usage Hours</h3>
                
                <div className="space-y-4">
                  {[
                    { time: "7 AM - 9 AM", usage: 85, label: "Morning Rush" },
                    { time: "12 PM - 2 PM", usage: 60, label: "Midday" },
                    { time: "5 PM - 7 PM", usage: 92, label: "Evening Peak" },
                    { time: "11 PM - 1 AM", usage: 45, label: "Night Charging" }
                  ].map((period, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-sm font-bold text-neutral-900">{period.time}</p>
                          <p className="text-[11px] text-neutral-500">{period.label}</p>
                        </div>
                        <span className="text-sm font-bold text-primary-600">{period.usage}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${period.usage}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recommended Charging Times */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-200/50 rounded-2xl p-8"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-6">Smart Charging Tips</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: "⚡", title: "Off-Peak Charging", desc: "2 AM - 6 AM offers lowest network congestion and fastest charging speeds." },
                    { icon: "💰", title: "Cost Optimization", desc: "Evening rates (8 PM - 10 PM) often come with special discounts for members." },
                    { icon: "📍", title: "Nearby Available", desc: "Check the map for sockets available within 500m of your current location." },
                    { icon: "🔔", title: "Smart Notifications", desc: "Get alerts when sockets become available at your favorite locations." }
                  ].map((tip, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-neutral-900">{tip.title}</p>
                        <p className="text-[12px] text-neutral-500 mt-1">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== FAQ SECTION ==================== */}
        <FaqSection />

        {/* ==================== FINAL CTA SECTION ==================== */}
        <section className="py-16 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 border-b border-primary-600/30 font-body relative overflow-hidden">
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 mb-4">
              Ready to Join the ebee Network?
            </h2>
            <p className="text-neutral-900 text-lg mb-8 max-w-2xl mx-auto font-medium">
              Start accessing our growing network of 150+ charging locations with WhatsApp + UPI. No app. No wallet. No hassles.
            </p>
            
            <motion.button
              onClick={handleOpenGeneralAudit}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-neutral-950 text-primary-500 font-black text-[14px] rounded-2xl tracking-wider uppercase transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] inline-flex items-center justify-center gap-3 leading-none overflow-hidden border border-neutral-800"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              Start Using the Network <ChevronRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onRequestAudit={handleOpenGeneralAudit} />
    </div>
  );
}

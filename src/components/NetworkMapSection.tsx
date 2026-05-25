import Shuffle from "./ui/Shuffle";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
interface NetworkMapSectionProps {
  onViewMap: () => void;
}
interface CityMarker {
  name: string;
  slots: string;
  coords: [number, number]; // [lat, lng]
}
const markersData: CityMarker[] = [{
  name: "Delhi",
  slots: "18 Free",
  coords: [28.6139, 77.2090]
}, {
  name: "Lucknow",
  slots: "12 Free",
  coords: [26.8467, 80.9462]
}, {
  name: "Guwahati",
  slots: "8 Free",
  coords: [26.1445, 91.7362]
}, {
  name: "Mumbai/Pune",
  slots: "24 Free",
  coords: [19.0760, 72.8777]
}, {
  name: "Hyderabad/Chennai",
  slots: "22 Free",
  coords: [15.5000, 79.5000]
} // Positioned beautifully between Hyderabad and Chennai
];
export function NetworkMapSection({
  onViewMap
}: NetworkMapSectionProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // 1. Initialize Leaflet Map
    // We target the center of India [22.9734, 78.6568]
    const map = L.map(mapContainerRef.current, {
      center: [22.9734, 78.6568],
      zoom: 4.8,
      zoomControl: false,
      attributionControl: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      boxZoom: false,
      dragPan: true,
      touchZoom: true
    });
    mapInstanceRef.current = map;

    // 2. Fetch and Render GeoJSON Layers
    Promise.all([fetch("/world_countries.json").then(res => {
      if (!res.ok) throw new Error("Failed to load world map");
      return res.json();
    }), fetch("/india_states.json").then(res => {
      if (!res.ok) throw new Error("Failed to load India map");
      return res.json();
    })]).then(([worldData, indiaData]) => {
      // A. Render World Countries (except India) in Light Cream (#FAF3DD)
      L.geoJSON(worldData, {
        style: {
          fillColor: "#FAF3DD",
          fillOpacity: 1,
          color: "#FFFFFF",
          weight: 1,
          opacity: 0.8
        },
        filter: feature => {
          return feature?.properties?.name !== "India";
        }
      }).addTo(map);

      // B. Render India States in Soft Yellow (#F8E5A1) with white state borders
      const indiaLayer = L.geoJSON(indiaData, {
        style: {
          fillColor: "#F8E5A1",
          fillOpacity: 1,
          color: "#FFFFFF",
          weight: 1.5,
          opacity: 1
        },
        onEachFeature: (feature, layer) => {
          // High fidelity hover animation on states
          layer.on({
            mouseover: e => {
              const l = e.target;
              l.setStyle({
                fillColor: "#F5D77F",
                // slightly highlighted yellow
                weight: 2
              });
            },
            mouseout: e => {
              indiaLayer.resetStyle(e.target);
            }
          });
        }
      }).addTo(map);

      // Fit map bounds to show India beautifully centered and fully visible
      map.fitBounds(indiaLayer.getBounds(), {
        padding: [24, 24]
      });

      // C. Render Custom Markers for key cities
      markersData.forEach(marker => {
        // Custom HTML containing Pulsing ring and Slot label below
        const markerHtml = `
            <div class="relative flex flex-col items-center select-none" style="transform: translate(-50%, -60%); min-width: 100px;">
              <!-- Outer expanding ripple pulse ring -->
              <div class="absolute w-8 h-8 rounded-full bg-[#E5A100]/20 map-pin-pulse-ring" style="top: -4px;"></div>
              
              <!-- Yellow Pin Circle container -->
              <div class="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-[#FFD60A] shadow-[0_4px_10px_rgba(0,0,0,0.15)] border-2 border-white transition-transform duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 text-neutral-950">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
              </div>
              
              <!-- Black Slots label with yellow bold text -->
              <div class="mt-1.5 px-3 py-1 rounded-full bg-neutral-950 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.25)] text-[10px] font-black text-[#FFD60A] tracking-wider uppercase whitespace-nowrap font-sans">
                ${marker.slots}
              </div>
            </div>
          `;
        const customIcon = L.divIcon({
          html: markerHtml,
          className: "",
          // clears default styles
          iconSize: [100, 60],
          iconAnchor: [50, 20]
        });
        L.marker(marker.coords, {
          icon: customIcon
        }).addTo(map);
      });
    }).catch(err => {
      console.error("Failed to load map GeoJSON assets:", err);
    });

    // Clean up on component unmount to prevent leaks and duplication
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  return <section id="charge-network-map" className="relative overflow-hidden bg-gradient-to-br from-[#FFF8E1] to-[#FCE38A] py-16 sm:py-24 lg:py-28">
      {/* Visual Ambient Light Spotlights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/40 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="space-y-4 sm:space-y-5">
              {/* Sparkles micro-badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5A100]/20 bg-white/70 px-4 py-2 backdrop-blur-md w-fit shadow-sm">
                <Sparkles className="w-4 h-4 text-[#E5A100] fill-current" />
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C98700]">
                  Live presence network
                </span>
              </div>

              {/* Styled Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.05] font-display">
                Charge{" "}
                <span className="bg-gradient-to-r from-[#E5A100] to-[#C98700] bg-clip-text text-transparent block sm:inline">
                  Anywhere, Anytime.
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-[#5C5C5C] leading-relaxed font-body font-medium">
                Discover the ebee charging network—150+ locations, 4,200+ sockets, and real-time availability across India's major cities. All accessible via WhatsApp.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-2">
              <motion.button onClick={onViewMap} whileHover={{
              scale: 1.03,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="group relative inline-flex items-center justify-center bg-[#FFD60A] px-8 py-4.5 text-xs font-black uppercase tracking-[0.2em] text-neutral-950 shadow-[0_12px_28px_-8px_rgba(255,214,10,0.6)] transition-all duration-300 hover:bg-[#E8C509] hover:shadow-[0_16px_35px_-8px_rgba(255,214,10,0.8)] border border-[#FFE152]">
                {/* Micro reflection shimmer sweep */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  <Shuffle text="View Full Network Map" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" /> 
                  <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </div>

          {/* RIGHT SIDE: Map Card Container */}
          <div className="lg:col-span-7 flex justify-center items-center w-full">
            <motion.div initial={{
            opacity: 0,
            y: 24,
            scale: 0.97
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="relative w-full aspect-[4/3] min-h-[350px] sm:min-h-[420px] -[24px] border border-white/60 bg-white/40 p-4 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              {/* Inner card padding wrapper */}
              <div className="relative w-full h-full overflow-hidden -[20px] border border-neutral-200/50 bg-[#E8ECEF] shadow-inner">
                
                {/* The Map Div */}
                <div ref={mapContainerRef} className="w-full h-full z-0" />

                {/* Floating Bottom-Left Info Card */}
                <div className="absolute bottom-5 left-5 z-[1000] flex items-center gap-3 -[18px] border border-neutral-100/40 bg-white/95 p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl pointer-events-auto">
                  {/* Yellow Pin Icon Box */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FFF9DB] text-[#FFD60A]">
                    <MapPin className="w-5 h-5 fill-current text-[#E5A100]" />
                  </div>
                  {/* Copy */}
                  <div>
                    <h4 className="text-[12px] font-black text-neutral-950 uppercase tracking-wider leading-none">
                      Interactive Network Map
                    </h4>
                    <p className="mt-1 text-[10px] font-bold text-neutral-500 leading-none font-sans">
                      150+ Locations • Real-time Updates
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>;
}
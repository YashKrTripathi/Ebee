import Shuffle from "./ui/Shuffle";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
interface FooterProps {
  onRequestAudit: () => void;
}
export function Footer({
  onRequestAudit
}: FooterProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return <footer className="bg-transparent text-neutral-800 pt-10 md:pt-16 pb-6 md:pb-8 border-t border-neutral-300 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-10 border-b border-neutral-300 pb-8 md:pb-12">
          
          {/* Logo Column */}
          <div className="col-span-1 space-y-3">
            <div>
              <span className="text-2xl font-black text-neutral-800 tracking-widest lowercase">
                ebee<span className="text-primary-500 font-extrabold">.</span>
              </span>
              <p className="mt-2 text-xs text-neutral-500 font-body font-normal leading-relaxed">
                App-less EV charging for modern Indian properties. Fully compliant with state EV building bylaws.
              </p>
            </div>
            
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#e8a317] font-semibold block leading-none">
                DEVELOPER CREDENTIAL
              </span>
              <span className="text-xs text-neutral-600 font-medium font-body">
                Powered by WBG Engineering
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1 border-t border-neutral-300/40 pt-4 md:border-0 md:pt-0">
            <button onClick={() => toggleSection('solutions')} className="w-full flex justify-between items-center md:pointer-events-none group">
              <h5 className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">
                <Shuffle text="Solutions" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
              </h5>
              <ChevronDown className={`w-4 h-4 text-neutral-400 md:hidden transition-transform duration-300 ${openSection === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 md:!max-h-full ${openSection === 'solutions' ? 'max-h-40 mt-3' : 'max-h-0'}`}>
              <ul className="space-y-2.5 text-xs font-medium text-neutral-500 font-body font-normal md:mt-4">
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">WhatsApp Charging</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">UPI Payments Gateways</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Centralized Smart DB</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Dynamic Load Balancing</span></li>
              </ul>
            </div>
          </div>

          {/* Audiences Column */}
          <div className="col-span-1 border-t border-neutral-300/40 pt-4 md:border-0 md:pt-0">
            <button onClick={() => toggleSection('audiences')} className="w-full flex justify-between items-center md:pointer-events-none group">
              <h5 className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">
                <Shuffle text="Property Audiences" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
              </h5>
              <ChevronDown className={`w-4 h-4 text-neutral-400 md:hidden transition-transform duration-300 ${openSection === 'audiences' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 md:!max-h-full ${openSection === 'audiences' ? 'max-h-40 mt-3' : 'max-h-0'}`}>
              <ul className="space-y-2.5 text-xs font-medium text-neutral-500 font-body font-normal md:mt-4">
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Apartment RWAs</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Facility Teams</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Real Estate Developers</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Electrical Contractors</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="hidden md:block col-span-1 space-y-3 md:space-y-4 border-t border-neutral-300/40 pt-4 md:border-0 md:pt-0">
            <div>
              <h5 className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-2 md:mb-4">
                Direct Contact
              </h5>
              <a href="mailto:hello@ebeecharge.in" className="text-xs text-primary-400 font-medium font-mono hover:underline leading-relaxed">
                hello@ebeecharge.in
              </a>
              <span className="text-[10px] text-neutral-500 block mt-1.5 leading-relaxed font-body font-normal">
                Bengaluru • Pune • Mumbai • Delhi NCR
              </span>
            </div>

            <button onClick={onRequestAudit} className="text-left py-1 text-xs text-[#e8a317] font-bold hover:underline transition focus:outline-none flex items-center gap-1 leading-none">
              <Shuffle text="Request Feasibility Audit \u2794" shuffleDirection="right" duration={0.35} shuffleTimes={1} ease="power3.out" stagger={0.03} triggerOnHover={true} loop={false} loopDelay={0} tag="span" />
            </button>
          </div>

        </div>

        {/* Foot Sub */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-between items-center sm:items-start md:items-center gap-3 text-[9px] md:text-[10px] text-neutral-500 text-center sm:text-left font-body font-normal">
          <p>© 2026 ebeecharge. All Rights Reserved. | Privacy Protocol | Electrical Terms of Use</p>
          <p className="tracking-wide">Built for Indian App-less EV Infrastructure Solutions.</p>
        </div>

      </div>
    </footer>;
}
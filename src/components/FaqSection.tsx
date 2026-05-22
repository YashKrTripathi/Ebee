import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      q: "What does 'App-less EV Charging' actually mean?",
      a: "App-less charging means your residents do not need to download another slow, dedicated smartphone app, create custom accounts, pre-load proprietary wallets, or fiddle with bluetooth connections. They simply scan a QR code on the physical charging terminal using their native camera or WhatsApp. The chat interface validates their socket, lets them pay in 5 seconds via standard Indian UPI apps, and starts charging. It represents the lowest possible path of resistance for users."
    },
    {
      q: "How does the centralized Smart DB architecture save 40% on CAPEX?",
      a: "Traditional setups require running individual heavy-gauge electrical copper wires from each separate apartment's submeter all the way to their parking slot—a highly expensive layout prone to cable theft and massive labor charges. ebee places a single, high-efficiency centralized Smart Distribution Board near the building's main breaker panel. From there, we daisy-chain lighter, highly cost-effective ducts and sockets directly across the parking spaces. This centralized approach significantly reduces material consumption up to 40%."
    },
    {
      q: "Does our building transformer have enough capacity? What about overloading?",
      a: "This is ebee's main engineering strength. Our centralized Smart DB runs active, cloud-managed Dynamic Load Balancing. If multiple vehicles plug in simultaneously at night, the ebee logic shifts phase loads, delays socket activation cycles, or throttles amperages safely dynamically. It guarantees that the cumulative EV current draw never exceeds your building's spared transformer limits. There is absolutely no need to purchase expensive grid sanction updates."
    },
    {
      q: "How does the RWA (Resident Welfare Association) handle billing and settlements?",
      a: "ebee completely automates payment handling and energy tracking. When a resident initiates a charge, UPI funds settle securely through ebee's central node logic. We automatically cross-reference the electricity units drawn and wire the accrued funds directly onto the RWA's bank account with fully itemized digital logs. RWAs get an intuitive dashboard representation to observe active power usage and generate reports."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white text-neutral-900 border-t border-neutral-100 font-body">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary-500" /> Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs text-neutral-500 font-mono">Everything you need to know about ebee infrastructure</p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-neutral-50 border border-neutral-200/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 text-neutral-900 font-extrabold text-sm tracking-tight focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="shrink-0 p-1 bg-white border border-neutral-200 rounded-lg text-primary-500">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                
                {/* Accordion panel body */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-neutral-500 text-[12px] leading-relaxed font-body font-normal border-t border-neutral-200/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

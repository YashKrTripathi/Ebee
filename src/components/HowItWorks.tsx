import { CheckSquare, ArrowRight, ScanLine, Wallet, Sparkle, Download } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Park & Plug",
      description: "Park your vehicle in your designated bay and plug the charger cable in. Fully compatible with any Indian standard electric vehicle."
    },
    {
      num: "2",
      title: "Scan to Chat",
      description: "Quickly scan the high-durability QR code stuck directly on the socket box. This opens the secure ebee WhatsApp Assistant chat automatically."
    },
    {
      num: "3",
      title: "Pay via UPI",
      description: "Tap the pre-selected dynamic payment chip. Complete secure, instant pre-authorization using Google Pay, PhonePe, or Paytm."
    },
    {
      num: "4",
      title: "Instant Power",
      description: "Electricity triggers instantly. Monitor the live SOC, power flow speed, and units dispensed directly in your current chat window."
    },
    {
      num: "5",
      title: "Digital Receipt",
      description: "Unplug when done. Power shuts off safely, and the ebee chatbot automatically bills your UPI log, transmitting a digital tax receipt."
    }
  ];

  return (
    <section id="societies" className="py-20 bg-neutral-50 border-b border-neutral-200/50 text-neutral-900 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <div className="max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 font-body">
            Charging in 5 Seconds.
          </h2>
          <p className="mt-3 text-[13px] text-neutral-500 font-bold tracking-wider uppercase">
            The simplest EV charging flow ever built.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line (visible only on desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1.5px] bg-neutral-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 border border-neutral-250/50 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Number Circle */}
                <span className="w-11 h-11 rounded-full bg-primary-500 font-extrabold text-[#1c1e23] text-xs flex justify-center items-center mb-5 shadow-sm border border-primary-600/10">
                  {step.num}
                </span>

                <h3 className="text-neutral-900 font-extrabold text-sm tracking-tight mb-2.5">
                  {step.title}
                </h3>
                
                <p className="text-[12px] leading-relaxed text-neutral-500 font-body font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

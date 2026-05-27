import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WebappSimulatorProps {
  activeStep?: number;
}

export function WebappSimulator({ activeStep: propActiveStep }: WebappSimulatorProps) {
  const [internalStep, setInternalStep] = useState(0);

  const activeStep = propActiveStep !== undefined ? propActiveStep : internalStep;

  useEffect(() => {
    if (propActiveStep !== undefined) return;
    const timer = setInterval(() => {
      setInternalStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [propActiveStep]);

  return (
    <div className="relative mx-auto max-w-[340px] w-full rounded-[56px] shadow-[0_0_0_2px_rgba(255,255,255,0.3)_inset,0_50px_100px_-20px_rgba(0,0,0,1),0_30px_60px_-30px_rgba(0,0,0,0.8),0_0_80px_rgba(56,189,248,0.4),-20px_-20px_60px_rgba(255,255,255,0.05)] group z-30 transition-transform duration-700 hover:-translate-y-2">
      
      {/* Hardware Buttons */}
      <div className="absolute top-28 -left-1 w-1 h-8 bg-gradient-to-r from-[#d1d1d6] to-[#8e8e93] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.8),inset_1px_0_1px_rgba(255,255,255,0.8)]"></div>
      <div className="absolute top-44 -left-1 w-1 h-14 bg-gradient-to-r from-[#d1d1d6] to-[#8e8e93] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.8),inset_1px_0_1px_rgba(255,255,255,0.8)]"></div>
      <div className="absolute top-64 -left-1 w-1 h-14 bg-gradient-to-r from-[#d1d1d6] to-[#8e8e93] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.8),inset_1px_0_1px_rgba(255,255,255,0.8)]"></div>
      <div className="absolute top-48 -right-1.5 w-1.5 h-20 bg-gradient-to-l from-[#d1d1d6] to-[#8e8e93] rounded-r-md shadow-[2px_0_4px_rgba(0,0,0,0.8),inset_-1px_0_1px_rgba(255,255,255,0.8)] z-0"></div>

      {/* Metallic Titanium Frame */}
      <div className="absolute inset-0 rounded-[56px] bg-gradient-to-br from-[#e5e5ea] via-[#8e8e93] to-[#d1d1d6] p-[3px] shadow-[inset_0_0_20px_rgba(255,255,255,0.6),inset_0_2px_4px_rgba(255,255,255,0.8)] z-10">
        <div className="absolute inset-[3px] rounded-[53px] bg-black shadow-[inset_0_0_0_3px_rgba(255,255,255,0.15)]"></div>
      </div>
      
      {/* Screen container */}
      <div className="relative bg-white rounded-[52px] border-[6px] border-black overflow-hidden m-[3px] h-[640px] flex flex-col z-20">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-7 w-32 bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.8)] border border-white/10">
          <div className="w-3 h-3 rounded-full bg-[#1a1d24] flex items-center justify-center border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-700/80"></div>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400/40 blur-[1px]"></div>
        </div>

        {/* Status Bar */}
        <div className="h-12 w-full flex justify-between items-end px-6 pb-2 text-[12px] font-semibold text-black z-30 shrink-0 bg-white">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center text-black">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L15.6 16.2C14.6 15.4 13.4 15 12 15C10.6 15 9.4 15.4 8.4 16.2L12 21ZM12 3C7.9 3 4.2 4.5 1.2 7L12 21L22.8 7C19.8 4.5 16.1 3 12 3ZM12 11C10.1 11 8.3 11.6 6.8 12.6L12 19L17.2 12.6C15.7 11.6 13.9 11 12 11Z"/></svg>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L23.6 5.3C23.1 4.9 18.6 1.5 12 1.5C5.4 1.5 0.9 4.9 0.4 5.3L12 21ZM12 15C10.6 15 9.3 15.5 8.2 16.3L12 21L15.8 16.3C14.7 15.5 13.4 15 12 15Z"/></svg>
            <svg className="w-5 h-5 opacity-90" viewBox="0 0 24 24" fill="currentColor"><path d="M17 4H7C5.9 4 5 4.9 5 6V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V6C19 4.9 18.1 4 17 4ZM17 18H7V6H17V18ZM19 10V14H21V10H19ZM9 8H15V16H9V8Z"/></svg>
          </div>
        </div>

        {/* Web App UI Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 bg-white z-10 shrink-0">
          <button className="text-neutral-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <span className="font-bold text-neutral-900 text-base">
            {activeStep < 4 ? "Set up session" : "Manage Session"}
          </span>
          <button className="text-neutral-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto bg-white flex flex-col relative px-5 py-6">
          {activeStep < 4 ? (
            <motion.div 
              key="setup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-[14px] text-neutral-800 h-full flex flex-col"
            >
              <div>
                <p className="mb-2 text-neutral-600">Wallet balance: <span className="text-neutral-900 font-semibold">₹1</span></p>
                <p className="text-neutral-600">Approx. Units: <span className="text-neutral-900 font-semibold">1.23</span></p>
              </div>
              
              <div className="relative mt-2">
                <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Amount (₹)</label>
                <input type="text" value="10" readOnly className="w-full border-2 border-neutral-300 rounded-[10px] px-4 py-3.5 text-neutral-900 font-medium outline-none" />
              </div>

              <div className="pt-2 flex-1">
                <h3 className="font-bold text-neutral-900 mb-5 text-[15px]">Choose mode</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-neutral-600 text-[14px]">Quick start with wallet</p>
                    <div className="w-5 h-5 rounded-full border-[2.5px] border-neutral-400"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-semibold text-[14px] ${activeStep === 3 ? "text-neutral-900" : "text-neutral-600"}`}>Top up wallet and start</p>
                      <p className="text-[12px] text-neutral-400 mt-0.5 font-medium">Wallet is not refundable</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-[2.5px] flex items-center justify-center ${activeStep === 3 ? "border-[#25D366]" : "border-neutral-400"}`}>
                      {activeStep === 3 && <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></div>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-semibold text-[14px] ${activeStep < 3 ? "text-neutral-900" : "text-neutral-600"}`}>UPI & Others</p>
                      <p className="text-[12px] text-neutral-400 mt-0.5 font-medium">Unused amount will be refunded</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-[2.5px] flex items-center justify-center ${activeStep < 3 ? "border-[#25D366]" : "border-neutral-400"}`}>
                      {activeStep < 3 && <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></div>}
                    </div>
                  </div>
                </div>
              </div>
              
              {activeStep === 3 && (
                <div className="mt-auto">
                  <button className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl text-[15px] transition-colors shadow-sm">
                    Pay and Start
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="manage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-[14px] text-neutral-800 h-full flex flex-col"
            >
              <div className="space-y-3">
                <p className="text-neutral-600">Units Charged: <span className="text-neutral-900 font-semibold">0.01 (Amount: ₹ 0.07)</span></p>
                <p className="text-neutral-600">Balance Amount: <span className="text-neutral-900 font-semibold">₹ 10</span></p>
              </div>

              <div className="pt-2 flex-1">
                <h3 className="font-bold text-neutral-900 mb-5 text-[15px]">Choose action</h3>
                <div className="space-y-6 border-b border-neutral-100 pb-6">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-neutral-900 text-[14px]">Refresh</p>
                    <div className="w-5 h-5 rounded-full border-[2.5px] border-[#25D366] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-neutral-600 text-[14px]">Top up session</p>
                    <div className="w-5 h-5 rounded-full border-[2.5px] border-neutral-400"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-neutral-600 text-[14px]">Stop session</p>
                    <div className="w-5 h-5 rounded-full border-[2.5px] border-neutral-400"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <button className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl text-[15px] transition-colors shadow-sm">
                  Refresh
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

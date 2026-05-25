import { useState, useRef, type MouseEvent as ReactMouseEvent, type TouchEvent as ReactTouchEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export function ComparisonSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50); // percentage

  const handleDrag = (e: ReactMouseEvent | ReactTouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as ReactMouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight font-display">
          See The <span className="text-primary-600">Advantage</span>
        </h2>
        <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
          Traditional EV infrastructure relies on bulky meters and expensive cabling. Drag the slider to see how ebee simplifies everything.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[600px] overflow-hidden cursor-ew-resize select-none bg-neutral-900 shadow-2xl"
        onMouseMove={(e) => { if (e.buttons === 1) handleDrag(e) }}
        onTouchMove={handleDrag}
        onMouseDown={handleDrag}
      >
        {/* RIGHT SIDE: ebee (Underneath) */}
        <div className="absolute inset-0 bg-primary-50 p-8 flex flex-col justify-center items-end text-right">
          <div className="w-full max-w-sm absolute right-8 top-1/2 -translate-y-1/2">
            <h3 className="text-4xl font-black text-primary-600 mb-6 uppercase tracking-tight">ebee Smart Infra</h3>
            <div className="space-y-6">
              <div className="bg-white p-4 shadow-sm border border-primary-200">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Architecture</p>
                <p className="font-bold text-neutral-800">1 Centralized DB Loop</p>
              </div>
              <div className="bg-white p-4 shadow-sm border border-primary-200">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Cabling Required</p>
                <p className="font-bold text-neutral-800">Minimal Single Run</p>
              </div>
              <div className="bg-white p-4 shadow-sm border border-primary-200">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Load Management</p>
                <p className="font-bold text-neutral-800">Dynamic AI Balancing</p>
              </div>
            </div>
          </div>
          {/* Subtle bg design for ebee side */}
          <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-primary-400/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>
        </div>

        {/* LEFT SIDE: Traditional (Clipped on top) */}
        <div 
          className="absolute inset-y-0 left-0 bg-neutral-900 text-white p-8 flex flex-col justify-center items-start text-left overflow-hidden border-r-2 border-primary-500 shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="w-[80vw] max-w-[800px] absolute left-8 top-1/2 -translate-y-1/2">
            <h3 className="text-4xl font-black text-neutral-400 mb-6 uppercase tracking-tight w-64">Legacy Setup</h3>
            <div className="space-y-6 w-64">
              <div className="bg-neutral-800 p-4 border border-neutral-700">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Architecture</p>
                <p className="font-bold text-neutral-200">32 Individual Meters</p>
              </div>
              <div className="bg-neutral-800 p-4 border border-neutral-700">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Cabling Required</p>
                <p className="font-bold text-neutral-200">Massive Spaghetti Mess</p>
              </div>
              <div className="bg-neutral-800 p-4 border border-neutral-700">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Load Management</p>
                <p className="font-bold text-neutral-200">Dumb Static Limits</p>
              </div>
            </div>
          </div>
          {/* Subtle bg design for legacy side */}
          <div className="absolute left-0 top-0 w-full h-full opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #333 10px, #333 20px)"}}></div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 flex items-center justify-center -ml-5 pointer-events-none z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-neutral-900 pointer-events-auto cursor-ew-resize">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

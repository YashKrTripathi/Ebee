import { X } from "lucide-react";
import { WhatsAppSimulator } from "./WhatsAppSimulator";

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimulatorModal({ isOpen, onClose }: SimulatorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-900/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[360px] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button above the simulator */}
        <div className="absolute -top-12 right-0 flex justify-end mb-4">
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The Simulator */}
        <div className="relative z-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] -[56px] overflow-hidden bg-white">
          <WhatsAppSimulator />
        </div>
        
        {/* Decorative Glow behind it */}
        <div className="absolute inset-0 bg-primary-500/30 blur-[80px] rounded-full pointer-events-none -z-10"></div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { CheckCheck } from "lucide-react";
import { ChatMessage } from "../types";

interface Message extends ChatMessage {
  receiptData?: {
    socket: string;
    duration: string;
    energy: string;
    amount: string;
    txnId: string;
    status: string;
  };
}

export function WhatsAppSimulator() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chargeProgress, setChargeProgress] = useState(0);
  const [energyDelivered, setEnergyDelivered] = useState(0.0);
  const [chargingTime, setChargingTime] = useState(0);
  const [batteryStart] = useState(35);
  const [currentBattery, setCurrentBattery] = useState(35);
  const [chargingActive, setChargingActive] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const nextMessageIdRef = useRef(0);

  const createMessageId = () => {
    const nextId = nextMessageIdRef.current++;
    return `msg-${Date.now()}-${nextId}`;
  };

  // Auto-scroll to bottom
  useEffect(() => {
    const chatScroll = chatScrollRef.current;

    if (!chatScroll) {
      return;
    }

    chatScroll.scrollTo({
      top: chatScroll.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  // Automated demo sequence
  useEffect(() => {
    let active = true;

    const runDemo = async () => {
      const timeNow = () =>
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      // Reset state
      nextMessageIdRef.current = 0;
      setMessages([]);
      setChargeProgress(0);
      setEnergyDelivered(0.0);
      setChargingTime(0);
      setCurrentBattery(batteryStart);
      setChargingActive(false);
      setIsTyping(false);

      // Helper to add message with delay
      const addMessage = (
        text: string,
        sender: "bot" | "user",
        delayMs: number = 1500,
        includeTyping: boolean = true
      ) => {
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            if (!active) {
              resolve();
              return;
            }

            if (includeTyping && sender === "bot") {
              setIsTyping(true);
              setTimeout(() => {
                if (!active) {
                  resolve();
                  return;
                }

                setIsTyping(false);
                setMessages((prev) => [
                  ...prev,
                  {
                    id: createMessageId(),
                    sender,
                    text,
                    timestamp: timeNow(),
                  },
                ]);
                resolve();
              }, 800);
            } else {
              setMessages((prev) => [
                ...prev,
                {
                  id: createMessageId(),
                  sender,
                  text,
                  timestamp: timeNow(),
                },
              ]);
              resolve();
            }
          }, delayMs);
        });
      };

      // Step 1: Welcome message
      await addMessage(
        "👋 Welcome to ebee EV Charging!",
        "bot",
        800,
        false
      );
      await addMessage(
        "Centralized, app-less charging for modern Indian properties.",
        "bot",
        1500
      );

      // Step 2: Smart DB detected
      await addMessage(
        "🔌 ebee Smart DB-1 detected at Parkwood Apartments.",
        "bot",
        1500
      );
      await addMessage(
        "📍 3 charging sockets available in your zone.",
        "bot",
        1500
      );

      // Step 3: Socket selection (auto-show and auto-select)
      await addMessage(
        "Please select your charging socket:\n\n• Socket A12 • Ready • 7.4kW\n• Socket A15 • Ready • 22kW\n• Socket B02 • Occupied",
        "bot",
        1500
      );

      // Auto-select Socket A12
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          if (!active) {
            resolve();
            return;
          }

          setMessages((prev) => [
            ...prev,
            {
              id: createMessageId(),
              sender: "user",
              text: "Socket A12 • Ready • 7.4kW",
              timestamp: timeNow(),
            },
          ]);
          resolve();
        }, 2000);
      });

      // Step 4: Plug in instruction
      await addMessage(
        "🟢 Socket A12 is ready for your EV.",
        "bot",
        1500
      );
      await addMessage(
        "⚡ Power available: 7.4kW | Rate: ₹12/kWh",
        "bot",
        1200
      );
      await addMessage(
        "💰 Scan the UPI QR code or tap to pay. No app, no wallet needed.",
        "bot",
        1500
      );

      // Auto-show UPI payment
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          if (!active) {
            resolve();
            return;
          }

          setMessages((prev) => [
            ...prev,
            {
              id: createMessageId(),
              sender: "user",
              text: "✅ Paid ₹300 via UPI",
              timestamp: timeNow(),
            },
          ]);
          resolve();
        }, 2500);
      });

      // Step 5: Payment confirmed & charging started
      await addMessage(
        "✅ Payment of ₹300 received! Ref ID: TXN847629EB",
        "bot",
        1200
      );
      await addMessage(
        "🚀 Charging session started on Socket A12!",
        "bot",
        1500
      );

      if (!active) {
        return;
      }

      // Step 6: Show live charging card and animate values
      setChargingActive(true);

      // Simulate charging for 8 seconds
      const chargeInterval = setInterval(() => {
        if (!active) {
          clearInterval(chargeInterval);
          return;
        }

        setChargeProgress((prev) => {
          if (prev >= 100) {
            clearInterval(chargeInterval);
            return 100;
          }
          const next = prev + 12.5; // 8 steps over 10 seconds
          setEnergyDelivered(parseFloat(((next / 100) * 18.0).toFixed(1)));
          setChargingTime((prev) => prev + 1);
          setCurrentBattery((prev) => Math.min(95, prev + 7.5)); // Battery 35% → 95%
          return next;
        });
      }, 1000);

      // Wait for charging to complete
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          if (!active) {
            resolve();
            return;
          }

          clearInterval(chargeInterval);
          setChargeProgress(100);
          setEnergyDelivered(18.0);
          setChargingTime(8);
          setCurrentBattery(95);
          resolve();
        }, 8000);
      });

      // Step 7: Charging complete
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          if (!active) {
            resolve();
            return;
          }

          setChargingActive(false);
          resolve();
        }, 500);
      });

      await addMessage(
        "✅ Charging complete! Smart DB safely disconnected.",
        "bot",
        1200
      );

      // Add receipt-style message
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          if (!active) {
            resolve();
            return;
          }

          setMessages((prev) => [
            ...prev,
            {
              id: createMessageId(),
              sender: "bot",
              text: "📄 Your charging receipt:",
              timestamp: timeNow(),
              type: "receipt",
              receiptData: {
                socket: "Socket A12",
                duration: "8 minutes",
                energy: "18.0 kWh",
                amount: "₹216",
                txnId: "TXN847629EB",
                status: "Completed",
              },
            },
          ]);
          resolve();
        }, 1500);
      });

      // Final message
      await addMessage(
        "⚡ Smart DB monitored voltage, current & temperature. Safe charging guaranteed!",
        "bot",
        2000
      );

      await addMessage(
        "Ready for your next session. Plug in anytime! 🔌",
        "bot",
        2000
      );

      // Wait before restarting
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });

      // Loop back
      if (active) {
        runDemo();
      }
    };

    runDemo();

    return () => {
      active = false;
    };
  }, [batteryStart]);

  return (
    <div className="relative mx-auto max-w-[340px] w-full rounded-[56px] shadow-[0_0_0_2px_rgba(255,255,255,0.3)_inset,0_50px_100px_-20px_rgba(0,0,0,1),0_30px_60px_-30px_rgba(0,0,0,0.8),0_0_80px_rgba(56,189,248,0.4),-20px_-20px_60px_rgba(255,255,255,0.05)] group transition-all duration-1000 hover:-translate-y-4 hover:shadow-[0_0_0_2px_rgba(255,255,255,0.4)_inset,0_60px_120px_-20px_rgba(0,0,0,1),0_0_100px_rgba(56,189,248,0.6)] z-30">
      
      {/* Hardware Buttons */}
      {/* Action Button */}
      <div className="absolute top-28 -left-1 w-1 h-8 bg-gradient-to-r from-[#d1d1d6] to-[#8e8e93] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.8),inset_1px_0_1px_rgba(255,255,255,0.8)]"></div>
      {/* Volume Up */}
      <div className="absolute top-44 -left-1 w-1 h-14 bg-gradient-to-r from-[#d1d1d6] to-[#8e8e93] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.8),inset_1px_0_1px_rgba(255,255,255,0.8)]"></div>
      {/* Volume Down */}
      <div className="absolute top-64 -left-1 w-1 h-14 bg-gradient-to-r from-[#d1d1d6] to-[#8e8e93] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.8),inset_1px_0_1px_rgba(255,255,255,0.8)]"></div>
      {/* Power Button */}
      <div className="absolute top-48 -right-1.5 w-1.5 h-20 bg-gradient-to-l from-[#d1d1d6] to-[#8e8e93] rounded-r-md shadow-[2px_0_4px_rgba(0,0,0,0.8),inset_-1px_0_1px_rgba(255,255,255,0.8)] z-0"></div>

      {/* Cinematic Lighting Highlights on device edges */}
      <div className="absolute -inset-1 rounded-[58px] bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-70 pointer-events-none mix-blend-overlay z-40"></div>

      {/* Metallic Titanium Frame */}
      <div className="absolute inset-0 rounded-[56px] bg-gradient-to-br from-[#e5e5ea] via-[#8e8e93] to-[#d1d1d6] p-[3px] shadow-[inset_0_0_20px_rgba(255,255,255,0.6),inset_0_2px_4px_rgba(255,255,255,0.8)] z-10">
        {/* Inner bezel wrapper */}
        <div className="absolute inset-[3px] rounded-[53px] bg-black shadow-[inset_0_0_0_3px_rgba(255,255,255,0.15)]"></div>
      </div>
      
      {/* Screen container */}
      <div className="relative bg-[#f0f2f5] rounded-[52px] border-[6px] border-black overflow-hidden m-[3px] h-[600px] flex flex-col shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] z-20">
        
        {/* Ambient Screen Glows */}
        <div className="absolute inset-x-0 top-4 h-32 rounded-full bg-primary-400/10 blur-3xl opacity-70 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-8 h-32 rounded-full bg-primary-400/20 blur-3xl opacity-60 pointer-events-none"></div>

        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-7 w-32 bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.8)] border border-white/10">
          {/* Camera Lens */}
          <div className="w-3 h-3 rounded-full bg-[#1a1d24] flex items-center justify-center border border-white/10">
             <div className="w-1.5 h-1.5 rounded-full bg-primary-700/80 shadow-[inset_0_0_4px_rgba(56,189,248,1)]"></div>
          </div>
          {/* Sensor */}
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400/40 blur-[1px]"></div>
        </div>

        {/* Glare / Glass Reflection Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-hidden rounded-[44px]">
           {/* Diagonal light streak */}
           <div className="absolute -inset-full top-0 -left-1/2 w-[200%] h-[40%] bg-gradient-to-b from-white/20 via-white/5 to-transparent -rotate-[25deg] transform translate-y-[-20%] group-hover:translate-y-[15%] transition-transform duration-1000 ease-in-out opacity-80"></div>
           {/* Edge rim light */}
           <div className="absolute inset-0 rounded-[44px] shadow-[inset_0_0_30px_rgba(255,255,255,0.08)] border border-white/15"></div>
        </div>

        {/* Status Bar */}
        <div className="h-12 w-full flex justify-between items-end px-6 pb-2 text-[12px] font-semibold text-neutral-800 z-30 shrink-0">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            {/* Signal */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L15.6 16.2C14.6 15.4 13.4 15 12 15C10.6 15 9.4 15.4 8.4 16.2L12 21ZM12 3C7.9 3 4.2 4.5 1.2 7L12 21L22.8 7C19.8 4.5 16.1 3 12 3ZM12 11C10.1 11 8.3 11.6 6.8 12.6L12 19L17.2 12.6C15.7 11.6 13.9 11 12 11Z"/></svg>
            {/* Wifi */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L23.6 5.3C23.1 4.9 18.6 1.5 12 1.5C5.4 1.5 0.9 4.9 0.4 5.3L12 21ZM12 15C10.6 15 9.3 15.5 8.2 16.3L12 21L15.8 16.3C14.7 15.5 13.4 15 12 15Z"/></svg>
            {/* Battery */}
            <svg className="w-5 h-5 opacity-90" viewBox="0 0 24 24" fill="currentColor"><path d="M17 4H7C5.9 4 5 4.9 5 6V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V6C19 4.9 18.1 4 17 4ZM17 18H7V6H17V18ZM19 10V14H21V10H19ZM9 8H15V16H9V8Z"/></svg>
          </div>
        </div>

        {/* WhatsApp Interface */}
        <div className="relative flex-1 bg-neutral-100/95 flex flex-col overflow-hidden text-neutral-800 z-20">
        {/* Chat Header */}
        <div className="bg-white/90 backdrop-blur-2xl p-3 px-4 flex items-center gap-2.5 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] shrink-0 z-30">
          <div className="relative">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-orange-500 font-bold text-neutral-800 border border-primary-300/50 text-xs flex justify-center items-center tracking-tight shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              eb
            </span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary-400 rounded-full border-2 border-[#15233c] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-[15px] font-bold tracking-tight truncate leading-tight text-neutral-800 drop-shadow-md">
              ebee Assistant
            </h4>
            <p className="text-[11px] text-primary-400 font-mono flex items-center gap-1.5 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.8)]"></span>
              Online • Verified Bot
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-[10px] bg-primary-500/10 px-2.5 py-1 rounded-md font-mono text-primary-400 font-bold border border-primary-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              Live DB
            </span>
          </div>
        </div>

        {/* Chat Messages */}
        <div
          ref={chatScrollRef}
          className="flex-1 overflow-y-auto p-3.5 space-y-4 bg-[#efeae2] scrollbar-thin scrollbar-thumb-neutral-700/80 scrollbar-track-transparent relative"
        >
          {/* Subtle background pattern/glow in chat */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_100%)] pointer-events-none"></div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[88%] animate-in fade-in slide-in-from-bottom-2 duration-300 relative z-10 ${
                msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
              }`}
            >
              <div
                className={`p-3.5 rounded-[20px] text-[13px] leading-relaxed shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md ${
                  msg.sender === "user"
                    ? "bg-[#d9fdd3] text-neutral-800 rounded-tr-sm border border-primary-400/30 shadow-[0_4px_15px_rgba(52,211,153,0.15)]"
                    : "bg-white text-neutral-800 rounded-tl-sm border border-white/10"
                }`}
              >
                <div className="whitespace-pre-line tracking-wide font-medium font-body">
                  {msg.text}
                </div>

                {/* Receipt Card */}
                {msg.type === "receipt" && msg.receiptData && (
                  <div className="mt-2.5 pt-2.5 border-t border-neutral-700/80 text-[11px] font-mono space-y-1.5 text-neutral-300">
                    <div className="flex justify-between font-bold text-primary-400 border-b border-dashed border-neutral-600/50 pb-1">
                      <span>ebee Receipt</span>
                      <span className="text-primary-400">
                        {msg.receiptData.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Socket:</span>
                      <span className="text-neutral-800 font-body">
                        {msg.receiptData.socket}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Duration:</span>
                      <span className="text-neutral-800 font-body">
                        {msg.receiptData.duration}
                      </span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-dashed border-neutral-600/50">
                      <span className="text-neutral-500">Energy:</span>
                      <span className="text-primary-400 font-bold">
                        {msg.receiptData.energy}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Cost:</span>
                      <span className="text-primary-400 font-bold">
                        {msg.receiptData.amount}
                      </span>
                    </div>
                    <div className="text-[9px] text-neutral-500 truncate pt-1">
                      TXN: {msg.receiptData.txnId}
                    </div>
                  </div>
                )}

                {/* Message time and read receipt */}
                <div className="mt-1 flex justify-end items-center gap-1.5 text-[9px] text-neutral-500 font-medium leading-none">
                  <span>{msg.timestamp}</span>
                  {msg.sender === "user" && (
                    <CheckCheck className="w-3.5 h-3.5 text-sky-400 shrink-0 drop-shadow-[0_0_2px_rgba(56,189,248,0.5)]" />
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Live Charging Status Card */}
          {chargingActive && (
            <div className="mr-auto max-w-[88%] w-full animate-in fade-in slide-in-from-bottom-2 duration-300 relative z-10">
              <div className="bg-gradient-to-br from-white/95 to-neutral-50/95 backdrop-blur-xl border border-primary-400/40 p-4 rounded-[20px] rounded-tl-sm shadow-[0_12px_40px_rgba(245,158,11,0.15)] relative overflow-hidden">
                {/* Background glow in card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-2xl rounded-full pointer-events-none"></div>

                {/* Header */}
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="animate-pulse w-3 h-3 rounded-full bg-primary-400 shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.8)] border border-white/20"></span>
                  <span className="text-[13px] font-black text-primary-400 uppercase tracking-widest drop-shadow-md">
                    Live Charging
                  </span>
                </div>

                {/* Status grid */}
                <div className="space-y-2 mb-4 text-[12px] font-medium relative z-10">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Socket:</span>
                    <span className="text-neutral-800 font-bold">A12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Power:</span>
                    <span className="text-primary-400 font-bold">7.4 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Energy:</span>
                    <span className="text-primary-400 font-bold tabular-nums">
                      {energyDelivered.toFixed(1)} kWh
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Cost:</span>
                    <span className="text-green-400 font-bold tabular-nums">
                      ₹{Math.round(energyDelivered * 12)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Time:</span>
                    <span className="text-neutral-800 font-bold tabular-nums">
                      {chargingTime} min
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2.5 mt-2.5">
                    <span className="text-neutral-500">Battery:</span>
                    <span className="text-primary-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]">
                      {batteryStart}% → {Math.round(currentBattery)}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-neutral-200 h-3 rounded-full overflow-hidden border border-white/5 shadow-inner relative z-10">
                  <div
                    className="bg-gradient-to-r from-primary-400 via-orange-400 to-primary-500 h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(245,158,11,0.6)] relative"
                    style={{ width: `${chargeProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 -translate-x-full animate-[ping_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="bg-white border border-white/10 p-3 rounded-[20px] rounded-tl-sm max-w-[60px] mr-auto flex justify-center items-center gap-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.1)] backdrop-blur-md relative z-10">
              <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce shadow-[0_0_5px_rgba(148,163,184,0.5)]"></span>
              <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s] shadow-[0_0_5px_rgba(148,163,184,0.5)]"></span>
              <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.4s] shadow-[0_0_5px_rgba(148,163,184,0.5)]"></span>
            </div>
          )}
        </div>

        {/* Input Bar (Disabled) */}
        <div className="bg-white/90 backdrop-blur-xl p-3 flex items-center gap-2.5 border-t border-white/10 shrink-0 z-30">
          <input
            disabled
            type="text"
            placeholder="Auto-playing demo..."
            className="flex-1 bg-neutral-100 rounded-full text-[12px] font-medium text-neutral-300 placeholder-neutral-500 px-4 py-2.5 focus:outline-none border border-white/5 shadow-inner"
          />
          <button className="bg-gradient-to-br from-primary-400 to-primary-500 p-2.5 rounded-full text-neutral-800 shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.4)] cursor-not-allowed flex items-center justify-center">
            <svg
              className="w-4 h-4 translate-x-[1px]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.5 1.5H3a1.5 1.5 0 00-1.5 1.5v14a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.5-1.5V9.5m-8-8l8 8m0 0v-3m0 3h-3" />
            </svg>
          </button>
        </div>
      </div>

      </div>
    </div>
  );
}

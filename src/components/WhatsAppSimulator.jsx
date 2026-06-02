import React, { useState, useEffect, useRef } from "react";
import { CheckCheck, Send } from "lucide-react";
import "./WhatsAppSimulator.css";

export function WhatsAppSimulator() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chargeProgress, setChargeProgress] = useState(0);
  const [energyDelivered, setEnergyDelivered] = useState(0.0);
  const [chargingTime, setChargingTime] = useState(0);
  const [batteryStart] = useState(35);
  const [currentBattery, setCurrentBattery] = useState(35);
  const [chargingActive, setChargingActive] = useState(false);
  const chatScrollRef = useRef(null);
  const nextMessageIdRef = useRef(0);

  const createMessageId = () => {
    const nextId = nextMessageIdRef.current++;
    return `msg-${Date.now()}-${nextId}`;
  };

  useEffect(() => {
    const chatScroll = chatScrollRef.current;
    if (!chatScroll) return;
    chatScroll.scrollTo({
      top: chatScroll.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    let active = true;

    const runDemo = async () => {
      const timeNow = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      nextMessageIdRef.current = 0;
      setMessages([]);
      setChargeProgress(0);
      setEnergyDelivered(0.0);
      setChargingTime(0);
      setCurrentBattery(batteryStart);
      setChargingActive(false);
      setIsTyping(false);

      const addMessage = (text, sender, delayMs = 1500, includeTyping = true) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (!active) return resolve();
            if (includeTyping && sender === "bot") {
              setIsTyping(true);
              setTimeout(() => {
                if (!active) return resolve();
                setIsTyping(false);
                setMessages((prev) => [...prev, { id: createMessageId(), sender, text, timestamp: timeNow() }]);
                resolve();
              }, 800);
            } else {
              setMessages((prev) => [...prev, { id: createMessageId(), sender, text, timestamp: timeNow() }]);
              resolve();
            }
          }, delayMs);
        });
      };

      await addMessage("👋 Welcome to ebee EV Charging!", "bot", 800, false);
      await addMessage("Centralized, app-less charging for modern Indian properties.", "bot", 1500);
      await addMessage("🔌 ebee Smart DB-1 detected at Parkwood Apartments.", "bot", 1500);
      await addMessage("📍 3 charging sockets available in your zone.", "bot", 1500);
      await addMessage("Please select your charging socket:\n\n• Socket A12 • Ready • 7.4kW\n• Socket A15 • Ready • 22kW\n• Socket B02 • Occupied", "bot", 1500);

      await new Promise((resolve) => {
        setTimeout(() => {
          if (!active) return resolve();
          setMessages((prev) => [...prev, { id: createMessageId(), sender: "user", text: "Socket A12 • Ready • 7.4kW", timestamp: timeNow() }]);
          resolve();
        }, 2000);
      });

      await addMessage("🟢 Socket A12 is ready for your EV.", "bot", 1500);
      await addMessage("⚡ Power available: 7.4kW | Rate: ₹12/kWh", "bot", 1200);
      await addMessage("💰 Scan the UPI QR code or tap to pay. No app, no wallet needed.", "bot", 1500);

      await new Promise((resolve) => {
        setTimeout(() => {
          if (!active) return resolve();
          setMessages((prev) => [...prev, { id: createMessageId(), sender: "user", text: "✅ Paid ₹300 via UPI", timestamp: timeNow() }]);
          resolve();
        }, 2500);
      });

      await addMessage("✅ Payment of ₹300 received! Ref ID: TXN847629EB", "bot", 1200);
      await addMessage("🚀 Charging session started on Socket A12!", "bot", 1500);

      if (!active) return;
      setChargingActive(true);

      const chargeInterval = setInterval(() => {
        if (!active) return clearInterval(chargeInterval);
        setChargeProgress((prev) => {
          if (prev >= 100) {
            clearInterval(chargeInterval);
            return 100;
          }
          const next = prev + 12.5;
          setEnergyDelivered(parseFloat(((next / 100) * 18.0).toFixed(1)));
          setChargingTime((t) => t + 1);
          setCurrentBattery((b) => Math.min(95, b + 7.5));
          return next;
        });
      }, 1000);

      await new Promise((resolve) => {
        setTimeout(() => {
          if (!active) return resolve();
          clearInterval(chargeInterval);
          setChargeProgress(100);
          setEnergyDelivered(18.0);
          setChargingTime(8);
          setCurrentBattery(95);
          resolve();
        }, 8000);
      });

      await new Promise((resolve) => {
        setTimeout(() => {
          if (!active) return resolve();
          setChargingActive(false);
          resolve();
        }, 500);
      });

      await addMessage("✅ Charging complete! Smart DB safely disconnected.", "bot", 1200);

      await new Promise((resolve) => {
        setTimeout(() => {
          if (!active) return resolve();
          setMessages((prev) => [
            ...prev,
            {
              id: createMessageId(),
              sender: "bot",
              text: "📄 Your charging receipt:",
              timestamp: timeNow(),
              type: "receipt",
              receiptData: { socket: "Socket A12", duration: "8 minutes", energy: "18.0 kWh", amount: "₹216", txnId: "TXN847629EB", status: "Completed" },
            },
          ]);
          resolve();
        }, 1500);
      });

      await addMessage("⚡ Smart DB monitored voltage, current & temperature. Safe charging guaranteed!", "bot", 2000);
      await addMessage("Ready for your next session. Plug in anytime! 🔌", "bot", 2000);

      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (active) runDemo();
    };

    runDemo();
    return () => { active = false; };
  }, [batteryStart]);

  return (
    <div className="wa-premium-shell group z-30" aria-label="Interactive WhatsApp charging simulator">
      
      {/* Hardware Buttons */}
      <div className="wa-premium-btn wa-premium-btn-action"></div>
      <div className="wa-premium-btn wa-premium-btn-vol-up"></div>
      <div className="wa-premium-btn wa-premium-btn-vol-down"></div>
      <div className="wa-premium-btn wa-premium-btn-power"></div>

      {/* Cinematic Lighting Highlights on device edges */}
      <div className="wa-premium-lighting"></div>

      {/* Metallic Titanium Frame */}
      <div className="wa-premium-frame">
        {/* Inner bezel wrapper */}
        <div className="wa-premium-bezel"></div>
      </div>
      
      {/* Screen container */}
      <div className="wa-premium-screen">
        
        {/* Ambient Screen Glows */}
        <div className="wa-premium-glow-top"></div>
        <div className="wa-premium-glow-bottom"></div>

        {/* Dynamic Island / Notch */}
        <div className="wa-premium-notch">
          {/* Camera Lens */}
          <div className="wa-premium-lens">
             <div className="wa-premium-lens-inner"></div>
          </div>
          {/* Sensor */}
          <div className="wa-premium-sensor"></div>
        </div>

        {/* Glare / Glass Reflection Overlay */}
        <div className="wa-premium-glare">
           <div className="wa-premium-streak"></div>
           <div className="wa-premium-rim"></div>
        </div>

        {/* Status Bar */}
        <div className="wa-premium-status-bar">
          <span>9:41</span>
          <div className="wa-premium-icons">
            {/* Signal */}
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L15.6 16.2C14.6 15.4 13.4 15 12 15C10.6 15 9.4 15.4 8.4 16.2L12 21ZM12 3C7.9 3 4.2 4.5 1.2 7L12 21L22.8 7C19.8 4.5 16.1 3 12 3ZM12 11C10.1 11 8.3 11.6 6.8 12.6L12 19L17.2 12.6C15.7 11.6 13.9 11 12 11Z"/></svg>
            {/* Wifi */}
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L23.6 5.3C23.1 4.9 18.6 1.5 12 1.5C5.4 1.5 0.9 4.9 0.4 5.3L12 21ZM12 15C10.6 15 9.3 15.5 8.2 16.3L12 21L15.8 16.3C14.7 15.5 13.4 15 12 15Z"/></svg>
            {/* Battery */}
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 4H7C5.9 4 5 4.9 5 6V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V6C19 4.9 18.1 4 17 4ZM17 18H7V6H17V18ZM19 10V14H21V10H19ZM9 8H15V16H9V8Z"/></svg>
          </div>
        </div>

        {/* WhatsApp Interface */}
        <div className="wa-premium-ui">
          {/* Chat Header */}
          <div className="wa-premium-header">
            <div className="wa-premium-avatar">
              eb
              <span className="wa-premium-avatar-status"></span>
            </div>

            <div className="wa-premium-title-wrap">
              <h4>ebee Assistant</h4>
              <p>
                <span className="wa-premium-online-dot"></span>
                Online • Verified Bot
              </p>
            </div>

            <div className="wa-premium-badge">
              Live DB
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={chatScrollRef} className="wa-premium-chat">
            {/* Subtle background pattern/glow in chat */}
            <div className="wa-premium-chat-bg"></div>

            {messages.map((msg) => (
              <div key={msg.id} className={`wa-premium-msg-row ${msg.sender === "user" ? "is-user" : "is-bot"}`}>
                <div className="wa-premium-bubble">
                  <div className="wa-premium-bubble-text">
                    {msg.text}
                  </div>

                  {/* Receipt Card */}
                  {msg.type === "receipt" && msg.receiptData && (
                    <div className="wa-premium-receipt">
                      <div className="wa-receipt-header">
                        <span>ebee Receipt</span>
                        <span className="wa-status-text">{msg.receiptData.status}</span>
                      </div>
                      <div className="wa-receipt-row">
                        <span className="wa-receipt-label">Socket:</span>
                        <span className="wa-receipt-val">{msg.receiptData.socket}</span>
                      </div>
                      <div className="wa-receipt-row">
                        <span className="wa-receipt-label">Duration:</span>
                        <span className="wa-receipt-val">{msg.receiptData.duration}</span>
                      </div>
                      <div className="wa-receipt-row wa-receipt-energy">
                        <span className="wa-receipt-label">Energy:</span>
                        <span className="wa-receipt-val-highlight">{msg.receiptData.energy}</span>
                      </div>
                      <div className="wa-receipt-row">
                        <span className="wa-receipt-label">Cost:</span>
                        <span className="wa-receipt-val-highlight">{msg.receiptData.amount}</span>
                      </div>
                      <div className="wa-receipt-txn">
                        TXN: {msg.receiptData.txnId}
                      </div>
                    </div>
                  )}

                  {/* Message time and read receipt */}
                  <div className="wa-premium-time">
                    <span>{msg.timestamp}</span>
                    {msg.sender === "user" && <CheckCheck className="wa-check" />}
                  </div>
                </div>
              </div>
            ))}

            {/* Live Charging Status Card */}
            {chargingActive && (
              <div className="wa-premium-msg-row is-live-card">
                <div className="wa-live-card">
                  <div className="wa-live-glow"></div>
                  <div className="wa-live-header">
                    <span className="wa-live-pulse"></span>
                    <span className="wa-live-title">Live Charging</span>
                  </div>
                  <div className="wa-live-grid">
                    <div className="wa-live-row"><span className="wa-live-label">Socket:</span><span className="wa-live-val">A12</span></div>
                    <div className="wa-live-row"><span className="wa-live-label">Power:</span><span className="wa-live-highlight">7.4 kW</span></div>
                    <div className="wa-live-row"><span className="wa-live-label">Energy:</span><span className="wa-live-highlight">{energyDelivered.toFixed(1)} kWh</span></div>
                    <div className="wa-live-row"><span className="wa-live-label">Cost:</span><span className="wa-live-green">₹{Math.round(energyDelivered * 12)}</span></div>
                    <div className="wa-live-row"><span className="wa-live-label">Time:</span><span className="wa-live-val">{chargingTime} min</span></div>
                    <div className="wa-live-row wa-live-battery">
                      <span className="wa-live-label">Battery:</span>
                      <span className="wa-live-highlight">{batteryStart}% → {Math.round(currentBattery)}%</span>
                    </div>
                  </div>
                  <div className="wa-live-progress-bar">
                    <div className="wa-live-progress-fill" style={{ width: `${chargeProgress}%` }}>
                      <div className="wa-live-progress-shine"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="wa-premium-typing">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>

          {/* Input Bar (Disabled) */}
          <div className="wa-premium-input">
            <input disabled type="text" placeholder="Typing..." />
            <button className="wa-premium-send" aria-label="Send message">
              <Send aria-hidden="true" strokeWidth={2.4} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

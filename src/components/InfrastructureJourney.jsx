import React from "react";

const steps = [
  { eyebrow: "Basement bay", title: "Park & Plug", brief: "Park. Plug in. Done.", scene: "park" },
  { eyebrow: "QR on charger", title: "Scan to Chat", brief: "Scan QR -> WhatsApp opens.", scene: "scan" },
  { eyebrow: "UPI inside chat", title: "Pay via UPI", brief: "Tap to pay via UPI.", scene: "pay" },
  { eyebrow: "Live power", title: "Instant Power", brief: "Socket unlocks. Power flows.", scene: "power" },
  { eyebrow: "WhatsApp summary", title: "Digital Receipt", brief: "Summary on WhatsApp. Sorted.", scene: "receipt" },
];

export function InfrastructureJourney() {
  return (
    <section className="journey-simulator" id="solutions" aria-labelledby="journey-simulator-title">
      <div className="journey-simulator-grid" aria-hidden="true"></div>
      <div className="journey-simulator-header reveal">
        <h2 id="journey-simulator-title">Signature User Journey</h2>
        <p>The simplest WhatsApp + UPI EV charging flow ever built.</p>
      </div>

      <div className="journey-simulator-stage reveal">
        <svg className="simulator-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="story-current-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="55%" stopColor="#ff6b00" />
              <stop offset="100%" stopColor="#25d366" />
            </linearGradient>
          </defs>
          <path className="current-base" d="M70 70C190 24 250 112 370 70S560 24 680 70S865 112 990 70S1110 34 1160 70" />
          <path className="current-active" d="M70 70C190 24 250 112 370 70S560 24 680 70S865 112 990 70S1110 34 1160 70" />
          <circle className="current-dot" r="8">
            <animateMotion dur="7s" repeatCount="indefinite" path="M70 70C190 24 250 112 370 70S560 24 680 70S865 112 990 70S1110 34 1160 70" />
          </circle>
        </svg>

        <div className="journey-step-grid">
          {steps.map((step, index) => (
            <article className="journey-card" key={step.title} style={{ "--delay": `${index * 0.18}s` }}>
              <Scene type={step.scene} />
              <p className="journey-eyebrow">{step.eyebrow}</p>
              <h3>{step.title}</h3>
              <p className="journey-brief">{step.brief}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scene({ type }) {
  return (
    <svg className="journey-scene" viewBox="0 0 240 170">
      <defs>
        <filter id={`sceneShadow-${type}`} x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#09111f" floodOpacity="0.16" />
        </filter>
      </defs>
      {(type === "park" || type === "scan" || type === "power" || type === "receipt") && <CarScene charged={type === "power" || type === "receipt"} />}
      {type === "park" && <ParkCable />}
      {type === "scan" && <ScenePhone mode="qr" />}
      {type === "pay" && <ScenePhone mode="pay" />}
      {type === "power" && <PowerBolts />}
      {type === "power" && <ScenePhone mode="live" small />}
      {type === "receipt" && <ScenePhone mode="summary" />}
      {type === "receipt" && <ReceiptPaper />}
    </svg>
  );
}

function CarScene({ charged = false }) {
  return (
    <g>
      <path className="garage-back" d="M18 132H222M44 132L68 42H180L206 132M78 54H170M91 70H115M132 70H158" />
      <path className={charged ? "journey-car charged" : "journey-car"} d="M42 105c7-21 25-34 54-35h50c29 1 48 14 61 35l16 6c9 4 14 12 14 23v8H29v-9c0-13 5-22 13-28Z" />
      <path className="car-window" d="M84 77h56c13 1 23 11 30 26H67c3-14 8-24 17-26Z" />
      <path className="car-window-line" d="M114 78l-8 25" />
      <circle className="wheel" cx="67" cy="140" r="14" />
      <circle className="wheel" cx="194" cy="140" r="14" />
      <circle className="wheel-hub" cx="67" cy="140" r="6" />
      <circle className="wheel-hub" cx="194" cy="140" r="6" />
      <rect className="socket-box" x="205" y="62" width="24" height="42" rx="8" />
      <circle className="socket-light" cx="217" cy="78" r="6" />
      <path className="socket-line" d="M212 95h10M217 62V51" />
    </g>
  );
}

function ParkCable() {
  return (
    <g>
      <path className="plug-cable" d="M209 93C176 98 146 106 118 118" />
      <circle className="plug-point" cx="118" cy="118" r="7" />
    </g>
  );
}

function ScenePhone({ mode, small = false }) {
  const transform = small ? "translate(138 16) scale(.72)" : mode === "pay" ? "translate(72 8)" : "translate(88 10)";
  return (
    <g className="scene-phone" transform={transform} filter={`url(#sceneShadow-${mode})`}>
      <rect className="phone-shell" x="0" y="0" width="76" height="126" rx="17" />
      <rect className="phone-screen" x="8" y="12" width="60" height="100" rx="10" />
      <rect className="phone-speaker" x="27" y="6" width="22" height="4" rx="2" />
      <rect className="wa-header" x="8" y="12" width="60" height="20" rx="9" />
      <circle className="wa-dot" cx="18" cy="22" r="5" />
      <path className="wa-lines" d="M29 19h28M29 25h18" />
      {mode === "qr" && <QrContent />}
      {mode === "pay" && <PayContent />}
      {mode === "live" && <LiveContent />}
      {mode === "summary" && <SummaryContent />}
    </g>
  );
}

function QrContent() {
  return (
    <g>
      {[18, 30, 42].map((x) => [46, 58, 70].map((y) => <rect className="qr-module" key={`${x}-${y}`} x={x} y={y} width="7" height="7" rx="1.5" />))}
      <rect className="chat-green" x="18" y="88" width="40" height="10" rx="5" />
      <rect className="chat-grey" x="18" y="103" width="34" height="9" rx="4.5" />
    </g>
  );
}

function PayContent() {
  return (
    <g>
      <rect className="chat-green" x="16" y="46" width="44" height="12" rx="6" />
      <text className="rupee" x="30" y="84">₹</text>
      <rect className="pay-button" x="18" y="92" width="40" height="20" rx="10" />
      <text className="pay-text" x="31" y="106">Pay</text>
    </g>
  );
}

function LiveContent() {
  return (
    <g>
      <rect className="chat-green" x="12" y="42" width="52" height="14" rx="7" />
      <rect className="chat-grey" x="16" y="68" width="36" height="9" rx="4.5" />
      <rect className="chat-grey" x="16" y="84" width="44" height="9" rx="4.5" />
    </g>
  );
}

function SummaryContent() {
  return (
    <g>
      <rect className="chat-green" x="14" y="42" width="48" height="13" rx="6.5" />
      <rect className="chat-green faint" x="16" y="68" width="42" height="10" rx="5" />
      <rect className="chat-grey" x="16" y="88" width="34" height="9" rx="4.5" />
      <rect className="chat-grey" x="16" y="106" width="40" height="9" rx="4.5" />
    </g>
  );
}

function PowerBolts() {
  return (
    <g className="power-bolts">
      <path className="bolt blue" d="M62 40 41 88h20l-16 46 45-67H66l20-27Z" />
      <path className="bolt yellow" d="M103 43 84 88h18l-14 42 40-62h-20l18-25Z" />
      <path className="plug-cable power" d="M205 92C172 98 146 107 118 120" />
    </g>
  );
}

function ReceiptPaper() {
  return (
    <g className="receipt-paper" transform="translate(152 48) rotate(6)">
      <path d="M0 0h58v76l-9-6-8 6-8-6-8 6-8-6-9 6Z" />
      <path d="M12 18h34M12 34h28M12 50h22" />
      <path className="receipt-check" d="M15 62l9 8 20-25" />
    </g>
  );
}

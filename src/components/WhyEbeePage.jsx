import React from "react";
import { Footer } from "./Footer.jsx";
import { withBase } from "../utils/routing.js";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";
import whatsappImage from "../../assets/WA.png";
import dashboardImage from "../../assets/DASHBOARD.png";
import carImage from "../../assets/car blank.png";

const proofPoints = [
  {
    title: "Every bay can become EV-ready",
    copy: "One Smart DB controls up to 32 charging points, so societies do not have to guess which residents deserve charging first.",
    icon: "bays",
  },
  {
    title: "Residents keep their own parking",
    copy: "Ebee uses basic sockets, QR access, and central control so residents can charge from their assigned bay.",
    icon: "parking",
  },
  {
    title: "No app, no wallet lock-in",
    copy: "Charging begins through WhatsApp and UPI, which keeps the resident experience familiar from the first session.",
    icon: "whatsapp",
  },
  {
    title: "Building load stays protected",
    copy: "Dynamic load management staggers and throttles sessions instead of letting peak-hour demand trip the property.",
    icon: "load",
  },
];

const storyRows = [
  {
    eyebrow: "Centralized intelligence",
    title: "The smart part moves into the DB.",
    copy: "Traditional smart sockets repeat internet, firmware, and metering hardware at every bay. Ebee centralizes relay control, safety monitoring, metering, and connectivity in one Smart DB.",
    image: smartDbImage,
    alt: "Ebee Smart DB product",
  },
  {
    eyebrow: "Resident simplicity",
    title: "Charging starts where residents already are.",
    copy: "Scan the QR code, open WhatsApp, pay by UPI, and the assigned socket unlocks. No new app, no prepaid wallet, no manual society collection.",
    image: whatsappImage,
    alt: "WhatsApp and UPI charging flow",
  },
  {
    eyebrow: "Operations clarity",
    title: "Billing becomes a system, not a meeting topic.",
    copy: "Per-socket metering shows who used energy, how much was consumed, and what was paid. The property team gets usage-based recovery without spreadsheet follow-ups.",
    image: dashboardImage,
    alt: "Ebee property dashboard",
  },
  {
    eyebrow: "Fast charging on demand",
    title: "DC charging moves to the resident, not the other way around.",
    copy: "The Movable Charger brings 30kW / 60kW DC charging to a bay through a secure 63A interlock socket system when a faster top-up is needed.",
    image: movableChargerImage,
    alt: "Ebee Movable Charger",
  },
];

const savingsRows = [
  ["Charging intelligence", "Repeated in every smart charger", "Centralized in Smart DB"],
  ["Internet connectivity", "Needed at each smart point", "Single connection at DB"],
  ["Per-bay hardware", "High-cost smart charger", "Basic socket + QR"],
  ["Billing recovery", "Manual follow-up or separate apps", "WhatsApp + UPI flow"],
  ["Scaling method", "Add more full chargers", "Add sockets to the Smart DB"],
];

const faqs = [
  {
    question: "Will Ebee trip our building power?",
    answer: "No. The system monitors available load and throttles charging during peak demand so EV charging does not overwhelm the property.",
  },
  {
    question: "Do residents need to download another app?",
    answer: "No. Residents scan the charger QR, continue in WhatsApp, and pay through UPI.",
  },
  {
    question: "Can outsiders use society power?",
    answer: "Sockets stay off until an authorized user scans, pays, and starts a valid session.",
  },
  {
    question: "How does the society recover electricity cost?",
    answer: "Each session is metered. Residents pay for usage, and the property receives transparent usage-based recovery.",
  },
  {
    question: "Can we start small and expand later?",
    answer: "Yes. A Smart DB can support up to 32 charging points, so societies can add bays as EV adoption grows.",
  },
];

export function WhyEbeePage() {
  return (
    <main className="why-page" id="power-of-ebee">
      <section className="why-hero">
        <p className="why-kicker">Power of EbeeCharge</p>
        <h1>Smart charging for every bay. Smarter investment for every property.</h1>
        <p>
          Ebee turns the 20% EV mandate into a resident-friendly infrastructure upgrade with Smart DB control,
          WhatsApp charging, UPI billing, and dynamic load management.
        </p>
        <div className="why-hero-device" aria-hidden="true">
          <img src={smartDbImage} alt="" />
        </div>
      </section>

      <section className="why-proof-strip" aria-label="EbeeCharge advantages">
        {proofPoints.map((point) => (
          <article key={point.title}>
            <WhyIcon type={point.icon} />
            <h2>{point.title}</h2>
            <p>{point.copy}</p>
          </article>
        ))}
      </section>

      <section className="why-story" aria-label="Why EbeeCharge works">
        {storyRows.map((row, index) => (
          <article className={`why-story-row ${index % 2 === 1 ? "is-reversed" : ""}`} key={row.title}>
            <div className="why-story-copy">
              <p className="section-label">{row.eyebrow}</p>
              <h2>{row.title}</h2>
              <p>{row.copy}</p>
            </div>
            <div className="why-story-visual">
              <img src={row.image} alt={row.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </section>

      <section className="why-savings" id="savings-calculator">
        <p className="section-label">Scale up as you grow</p>
        <h2>Lower cost comes from smarter architecture.</h2>
        <p className="why-savings-intro">
          Ebee avoids putting expensive intelligence in every parking bay. The Smart DB does the heavy lifting,
          while residents use simple sockets and familiar payments.
        </p>
        <div className="savings-comparison">
          <div className="savings-table" aria-label="Architecture comparison">
            {savingsRows.map(([label, oldWay, ebeeWay]) => (
              <div className="savings-row" key={label}>
                <span>{label}</span>
                <span>{oldWay}</span>
                <strong>{ebeeWay}</strong>
              </div>
            ))}
          </div>
          <div className="savings-card">
            <span>Designed for</span>
            <strong>20%</strong>
            <p>EV-ready parking mandates without overbuilding infrastructure on day one.</p>
          </div>
        </div>
      </section>

      <section className="why-faq" id="why-faq">
        <h2>Questions societies ask before installing Ebee.</h2>
        <div className="why-faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta why-page-cta">
        <div className="cta-image">
          <img src={carImage} alt="Ebee EV charging at a residential property" loading="lazy" />
          <div className="cta-overlay">
            <h2>Building EV charging that<br />people actually use.</h2>
            <div className="cta-actions">
              <a className="button" href="mailto:hello@ebeecharge.in?subject=EbeeCharge%20Site%20Audit">Book Audit</a>
              <a className="button button-ghost" href={withBase("/#journey")}>Watch WhatsApp Flow</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function WhyIcon({ type }) {
  return (
    <svg className="why-icon" viewBox="0 0 80 56" role="img" aria-hidden="true">
      {type === "bays" && (
        <>
          <path d="M10 44h60M18 44V14h13v30M40 44V14h13v30" />
          <path d="M16 14h39M62 20v24" />
          <circle cx="62" cy="16" r="4" />
        </>
      )}
      {type === "parking" && (
        <>
          <path d="M12 38c4-11 13-18 27-18h8c12 0 19 7 23 18l5 2v7H6v-7l6-2Z" />
          <circle cx="22" cy="47" r="5" />
          <circle cx="60" cy="47" r="5" />
          <path d="M32 20v18M50 20v18" />
        </>
      )}
      {type === "whatsapp" && (
        <>
          <rect x="20" y="7" width="40" height="42" rx="9" />
          <path d="M28 18h24M28 27h16M28 36h20" />
          <path d="M18 50l7-5" />
        </>
      )}
      {type === "load" && (
        <>
          <path d="M14 39h18l7-24 10 34 7-21h10" />
          <path d="M54 7 43 27h11l-8 22 19-29H54l8-13Z" />
        </>
      )}
    </svg>
  );
}

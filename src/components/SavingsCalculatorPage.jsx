import React, { useMemo, useState } from "react";
import { Footer } from "./Footer.jsx";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";
import carImage from "../../assets/car blank.png";

const defaultInputs = {
  parkingSpaces: 140,
  outlets: 22,
  evDrivers: 62,
  electricityCost: 8,
  markup: 6,
};

const partners = ["ESSEX", "US RESIDENTIAL", "Michaels", "WEIDNER", "TCR", "kadle"];

const flowSteps = [
  "Install Smart DB + sockets in assigned resident parking bays.",
  "Resident scans QR and starts WhatsApp charging flow instantly.",
  "UPI payment starts charging and session tracking in real time.",
  "Usage-based billing settles automatically for society and residents.",
];

const costRows = [
  { label: "Hardware cost per outlet", standard: "$2,000+", ebee: "$750" },
  { label: "Wifi and active network gear", standard: "$1,000+", ebee: "None" },
  { label: "Setup fees", standard: "$500", ebee: "None" },
  { label: "Electrical permits and licenses", standard: "$500+", ebee: "$400+" },
  { label: "Installation", standard: "$1,000+", ebee: "$1,500+" },
  { label: "Annual services fees", standard: "$300", ebee: "None" },
  { label: "Charging service fee", standard: "10% of revenue share", ebee: "kWh based usage fee" },
  { label: "Approx. yearly OPEX", standard: "$450", ebee: "None" },
];

export function SavingsCalculatorPage() {
  const [inputs, setInputs] = useState(defaultInputs);

  const calc = useMemo(() => {
    const parkingSpaces = Math.max(1, Number(inputs.parkingSpaces) || 0);
    const outlets = Math.max(1, Number(inputs.outlets) || 0);
    const evDrivers = Math.max(1, Number(inputs.evDrivers) || 0);
    const electricityCost = Math.max(0, Number(inputs.electricityCost) || 0);
    const markup = Math.max(0, Number(inputs.markup) || 0);

    const sessionsPerDriverMonthly = 10;
    const kwhPerSession = 14;
    const maxSessionsPerOutletMonthly = 56;
    const realizedDemandFactor = 0.88;

    const demandSessions = evDrivers * sessionsPerDriverMonthly;
    const supplySessions = outlets * maxSessionsPerOutletMonthly;
    const monthlySessions = Math.min(demandSessions, supplySessions) * realizedDemandFactor;
    const tariffPerKwh = electricityCost + markup;

    const monthlyRevenue = monthlySessions * kwhPerSession * tariffPerKwh;
    const tenYearRevenue = monthlyRevenue * 12 * 10;

    const annualMargin = monthlySessions * kwhPerSession * markup * 12;
    const siteInvestment = outlets * 750 + parkingSpaces * 160 + 2500;
    const yearsToBreakEven = annualMargin > 0 ? siteInvestment / annualMargin : Number.POSITIVE_INFINITY;

    const standardTotalCost = outlets * 2000 + 1000 + 500 + 500 + 1000 + 300 + 450;
    const ebeeTotalCost = outlets * 750 + 400 + 1500;
    const savingsPercent = standardTotalCost > 0 ? ((standardTotalCost - ebeeTotalCost) / standardTotalCost) * 100 : 0;

    return {
      tenYearRevenue,
      yearsToBreakEven,
      standardTotalCost,
      ebeeTotalCost,
      savingsPercent,
    };
  }, [inputs]);

  function updateInput(key, nextValue) {
    setInputs((prev) => ({ ...prev, [key]: nextValue }));
  }

  function stepValue(key, delta, min = 0, max = 500) {
    setInputs((prev) => {
      const current = Number(prev[key]) || 0;
      const next = Math.max(min, Math.min(max, current + delta));
      return { ...prev, [key]: next };
    });
  }

  const formatMoney = (value) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  const breakEvenLabel = Number.isFinite(calc.yearsToBreakEven) ? `${calc.yearsToBreakEven.toFixed(1)} years` : "-";

  return (
    <main className="why-page why-calc-page" id="savings-calculator-page">
      <section className="calc-hero" id="savings-calculator">
        <p className="calc-kicker">Ebee Savings Calculator</p>
        <h1>The most capital efficient way to meet code requirements.</h1>
        <p>
          Smart charging for every bay starts with better architecture. One Smart DB controls up to 32 charging points,
          so you can unlock EV-ready parking without overbuilding. Residents charge with WhatsApp charging, pay by UPI,
          and the property tracks usage automatically.
        </p>
        <p className="calc-subtext">Built for the 20% EV-ready parking mandate.</p>

        <div className="calc-grid-wrap" aria-label="Savings calculator">
          <div className="calc-inputs">
            <h2>Your property EV data</h2>
            <StepperInput
              label="Parking spaces in my property"
              value={inputs.parkingSpaces}
              min={1}
              max={500}
              onMinus={() => stepValue("parkingSpaces", -1, 1, 500)}
              onPlus={() => stepValue("parkingSpaces", 1, 1, 500)}
              onChange={(value) => updateInput("parkingSpaces", value)}
            />
            <StepperInput
              label="Number of Orange outlets"
              value={inputs.outlets}
              min={1}
              max={200}
              onMinus={() => stepValue("outlets", -1, 1, 200)}
              onPlus={() => stepValue("outlets", 1, 1, 200)}
              onChange={(value) => updateInput("outlets", value)}
            />
            <StepperInput
              label="Number of EV drivers currently"
              value={inputs.evDrivers}
              min={1}
              max={1000}
              onMinus={() => stepValue("evDrivers", -1, 1, 1000)}
              onPlus={() => stepValue("evDrivers", 1, 1, 1000)}
              onChange={(value) => updateInput("evDrivers", value)}
            />
            <div className="calc-inline-row">
              <StepperInput
                label="Cost of electricity in $/kWh"
                value={inputs.electricityCost}
                min={0}
                max={50}
                onMinus={() => stepValue("electricityCost", -0.5, 0, 50)}
                onPlus={() => stepValue("electricityCost", 0.5, 0, 50)}
                onChange={(value) => updateInput("electricityCost", value)}
                step={0.5}
              />
              <StepperInput
                label="Markup in $/kWh"
                value={inputs.markup}
                min={0}
                max={50}
                onMinus={() => stepValue("markup", -0.5, 0, 50)}
                onPlus={() => stepValue("markup", 0.5, 0, 50)}
                onChange={(value) => updateInput("markup", value)}
                step={0.5}
              />
            </div>
          </div>

          <div className="calc-output-column">
            <article className="calc-output-card">
              <p>{formatMoney(calc.tenYearRevenue)}</p>
              <span>10 Year Total Revenue</span>
            </article>
            <article className="calc-output-card">
              <p>{breakEvenLabel}</p>
              <span>Years to break even</span>
            </article>
            <article className="calc-output-card calc-cta-card">
              <div>
                <h3>Future-proof your property today!</h3>
                <a className="button button-small" href="mailto:hello@ebeecharge.in?subject=Savings%20Calculator%20Consultation">Contact Sales</a>
              </div>
              <img src={movableChargerImage} alt="Ebee Movable Charger" loading="lazy" />
            </article>
          </div>
        </div>
      </section>

      <section className="calc-partners" aria-label="Trusted by operators">
        {partners.map((partner) => (
          <p key={partner}>{partner}</p>
        ))}
      </section>

      <section className="calc-flow" aria-label="How Ebee works">
        <p>The complete EV charging solution.</p>
        <div className="calc-flow-grid">
          {flowSteps.map((step, index) => (
            <article key={step}>
              <i>{index + 1}</i>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="calc-comparison" aria-label="Cost comparison">
        <h2>Save thousands with reliable, zero-maintenance outlets.</h2>
        <div className="calc-comparison-grid">
          <div className="comparison-rows">
            {costRows.map((row) => (
              <div className="comparison-row" key={row.label}>
                <span>{row.label}</span>
                <span>{row.standard}</span>
                <strong>{row.ebee}</strong>
              </div>
            ))}
            <div className="comparison-total">
              <p>{formatMoney(calc.standardTotalCost)}</p>
              <span>Traditional networked charger estimate</span>
            </div>
          </div>
          <div className="comparison-highlight">
            <img src={smartDbImage} alt="Ebee Smart DB" loading="lazy" />
            <h3>Orange Outlets</h3>
            <p>{formatMoney(calc.ebeeTotalCost)}</p>
            <small>{Math.max(0, calc.savingsPercent).toFixed(0)}% of savings</small>
          </div>
        </div>
      </section>

      <section className="calc-testimonial" aria-label="Customer quote">
        <p>
          We have many chargers installed, and there is never an issue of drivers waiting to charge.
          I love the convenience and that I can schedule charging when the price is favorable.
        </p>
        <strong>John Kennedy</strong>
        <span>Ferrari Property Management</span>
      </section>

      <section className="final-cta why-page-cta">
        <div className="cta-image">
          <img src={carImage} alt="Ebee EV charging at a residential property" loading="lazy" />
          <div className="cta-overlay">
            <h2>Building EV charging that<br />people actually use.</h2>
            <div className="cta-actions">
              <a className="button" href="mailto:hello@ebeecharge.in?subject=EbeeCharge%20Site%20Audit">Book Audit</a>
              <a className="button button-ghost" href="/#journey">Watch WhatsApp Flow</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function StepperInput({ label, value, min, max, step = 1, onMinus, onPlus, onChange }) {
  return (
    <label className="calc-stepper">
      <span>{label}</span>
      <div>
        <button type="button" onClick={onMinus} aria-label={`Decrease ${label}`}>
          -
        </button>
        <input
          type="number"
          inputMode="decimal"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(event.target.value)}
          aria-label={label}
        />
        <button type="button" onClick={onPlus} aria-label={`Increase ${label}`}>
          +
        </button>
      </div>
    </label>
  );
}

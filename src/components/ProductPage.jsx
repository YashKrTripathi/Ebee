import React from "react";
import { Footer } from "./Footer.jsx";
import { withBase } from "../utils/routing.js";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";
import dashboardImage from "../../assets/DASHBOARD.png";
import whatsappImage from "../../assets/WA.png";
import reliabilityImage from "../../assets/MCHCOLOR.png";
import carImage from "../../assets/car blank.png";

const productContent = {
  "smart-db": {
    title: "Smart DB",
    subtitle: "Central intelligence for reliable everyday charging.",
    intro:
      "Smart DB centralizes control, metering, and safety in one distribution board so each resident can charge from an assigned bay without repeating expensive smart hardware everywhere.",
    image: smartDbImage,
    imageAlt: "Ebee Smart DB product image",
    ctaLabel: "Contact Sales",
    stats: [
      "Controls up to 32 charging points",
      "Dynamic load management protects building demand",
      "Per-socket metering for transparent billing",
      "Bluetooth + internet backed operations",
    ],
    features: [
      {
        title: "Centralized intelligence",
        copy:
          "Traditional setups repeat internet and control hardware in each charger. Smart DB keeps that intelligence centralized so each bay can stay simple and cost-efficient.",
        image: reliabilityImage,
        imageAlt: "Smart DB connected charging infrastructure",
      },
      {
        title: "WhatsApp + UPI resident flow",
        copy:
          "Residents scan a QR at their bay, continue in WhatsApp, and pay via UPI. Sessions activate only after authorization so energy access remains controlled.",
        image: whatsappImage,
        imageAlt: "WhatsApp charging session interface",
      },
      {
        title: "Operations dashboard visibility",
        copy:
          "Property teams can monitor usage, receipts, and charging behavior from one dashboard to reduce disputes and simplify monthly reconciliation.",
        image: dashboardImage,
        imageAlt: "Dashboard tracking charger usage and receipts",
      },
    ],
    specs: [
      { label: "Electrical specification", value: "230V AC compatible with per-point relay control and metering integration." },
      { label: "Connectivity", value: "Hybrid connectivity with centralized internet fallback and local Bluetooth operations." },
      { label: "Scale", value: "One Smart DB supports up to 32 charging points with load-aware control logic." },
    ],
  },
  "movable-charger": {
    title: "Movable Charger",
    subtitle: "DC charging on demand that moves to the resident.",
    intro:
      "Movable Charger provides fast 30kW / 60kW charging through controlled 63A interlock sockets, so high-power charging can be delivered where and when it is needed.",
    image: movableChargerImage,
    imageAlt: "Ebee Movable Charger product image",
    ctaLabel: "Contact Sales",
    stats: [
      "30kW / 60kW DC output options",
      "Moves to assigned bays for flexible use",
      "Uses secure 63A interlock socket system",
      "Built for retrofit-friendly deployments",
    ],
    features: [
      {
        title: "Fast charging without fixed-bay overbuild",
        copy:
          "Instead of installing DC hardware everywhere, one movable unit can serve multiple bays with intelligent scheduling and secure socket interfaces.",
        image: carImage,
        imageAlt: "EV charging in a residential parking bay",
      },
      {
        title: "Integrated with resident workflow",
        copy:
          "The movable unit plugs into the same resident flow: QR initiation, WhatsApp journey, UPI payment, and controlled session activation.",
        image: whatsappImage,
        imageAlt: "Resident charging flow through WhatsApp",
      },
      {
        title: "Managed through property operations stack",
        copy:
          "Movable charger sessions sync into the same operations dashboard so usage, billing, and settlements remain consistent across sites.",
        image: dashboardImage,
        imageAlt: "Property operations dashboard for charging",
      },
    ],
    specs: [
      { label: "Power options", value: "Available in 30kW and 60kW DC variants for diverse site requirements." },
      { label: "Charging interface", value: "Operates through interlocked 63A sockets with controlled access and safety checks." },
      { label: "Deployment model", value: "Ideal for phased rollouts where demand varies across bays and time slots." },
    ],
  },
};

const solutionSteps = [
  "Install Smart DB and charging points in resident parking bays.",
  "Residents onboard through QR and WhatsApp flow.",
  "Sessions start after UPI payment and authorization.",
  "Property monitors usage and settlements in one dashboard.",
];

const relatedProducts = [
  {
    key: "smart-db",
    title: "Smart DB",
    copy: "Centralized intelligence for everyday AC charging",
    tag: "Most scalable",
  },
  {
    key: "movable-charger",
    title: "Movable Charger",
    copy: "Flexible DC charging where residents need it",
    tag: "Best power to cost",
  },
  {
    key: "savings-calculator",
    title: "Savings Calculator",
    copy: "Estimate installation economics and break-even timelines.",
    tag: "Planning tool",
  },
];

export function ProductPage({ productKey }) {
  const product = productContent[productKey] || productContent["smart-db"];

  return (
    <main className="product-page" id={`product-${productKey}`}>
      <section className="product-page-hero">
        <div className="product-page-hero-visual">
          <div className="product-page-hero-carousel">
            <button type="button" aria-label="Previous product image">&lt;</button>
            <img className={`product-page-hero-image ${productKey === "smart-db" ? "is-smart-db" : ""}`} src={product.image} alt={product.imageAlt} loading="lazy" />
            <button type="button" aria-label="Next product image">&gt;</button>
          </div>
          <div className="product-page-dots" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
        </div>

        <div className="product-page-hero-copy">
          <h1>{product.title}</h1>
          <p className="product-page-subtitle">{product.subtitle}</p>
          <p>{product.intro}</p>
          <div className="product-page-actions">
            <a className="button" href="mailto:hello@ebeecharge.in?subject=Product%20Consultation">{product.ctaLabel}</a>
            <a className="button button-secondary" href="#product-specs">Learn More</a>
          </div>
          <ul className="product-page-stats">
            {product.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-page-features" aria-label="Product highlights">
        {product.features.map((feature, index) => (
          <article className={`product-feature-row ${index % 2 === 1 ? "is-reversed" : ""}`} key={feature.title}>
            <div className="product-feature-copy">
              <p className="section-label">{index + 1}</p>
              <h2>{feature.title}</h2>
              <p>{feature.copy}</p>
            </div>
            <div className="product-feature-image-wrap">
              <img src={feature.image} alt={feature.imageAlt} loading="lazy" />
            </div>
          </article>
        ))}
      </section>

      <section className="product-solution-strip" aria-label="Complete charging solution">
        <p>The complete EV charging solution.</p>
        <div className="product-solution-grid">
          {solutionSteps.map((step, index) => (
            <article key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="product-specs" id="product-specs">
        {product.specs.map((spec) => (
          <details key={spec.label}>
            <summary>{spec.label}</summary>
            <p>{spec.value}</p>
          </details>
        ))}
      </section>

      <section className="product-network-copy">
        <p>
          With Ebee, devices coordinate reliably across parking structures and basement conditions.
          Resident sessions are managed with low-friction access and property-safe controls.
        </p>
        <p>
          The platform combines on-site intelligence with cloud visibility so operators can scale
          charging confidently across portfolios without reworking billing operations.
        </p>
      </section>

      <section className="product-related">
        <p>
          Our product portfolio allows multifamily properties to choose the right level of power
          to meet resident charging needs.
        </p>
        <a className="tiny-button" href={withBase("/savings-calculator")}>See full comparison</a>
        <div className="product-related-grid">
          {relatedProducts.map((item) => (
            <a
              className={`product-related-card ${item.key === productKey ? "is-active" : ""}`}
              href={withBase(item.key === "savings-calculator" ? "/savings-calculator" : `/products/${item.key}`)}
              key={item.key}
            >
              <small>{item.tag}</small>
              <h3>{item.title}</h3>
              <span>{item.copy}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="final-cta why-page-cta">
        <div className="cta-image">
          <img src={carImage} alt="Ebee EV charging at a residential property" loading="lazy" />
          <div className="cta-overlay">
            <h2>Budget friendly charge for every parking spot.</h2>
            <div className="cta-actions">
              <a className="button" href="mailto:hello@ebeecharge.in?subject=Product%20Sales%20Call">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, BatteryCharging, CreditCard, KeyRound, RadioTower, Zap } from "lucide-react";
import { Footer } from "./Footer.jsx";
import { TestimonialCarousel } from "./TestimonialCarousel.jsx";
import { withBase } from "../utils/routing.js";
import ctaCarImage from "../../assets/car blank.png";

const benefits = [
  {
    title: "Set Energy Costs",
    copy: "Control EV charging rates by site, user group and property policy.",
    icon: Zap,
  },
  {
    title: "Access Control",
    copy: "Manage access for residents, guests and operators from one place.",
    icon: KeyRound,
  },
  {
    title: "Payment Platform",
    copy: "Collect UPI payments and keep every charging receipt traceable.",
    icon: CreditCard,
  },
  {
    title: "Reporting and Data",
    copy: "See energy, revenue and utilization across the full portfolio.",
    icon: BarChart3,
  },
];

const propertyCards = [
  ["Ebee Yards", "BKC Towers, Pune", "Online"],
  ["The Miller", "Andheri West, Mumbai", "Online"],
];

const groupRows = [
  ["Driveway", "8 chargers", "₹0.38 / min"],
  ["Level 1 Garage", "28 chargers", "₹0.88 / min"],
  ["Office parking lot", "17 chargers", "₹0.44 / min"],
];

export function EbeeOsPage() {
  return (
    <main className="ebee-os-page ebee-os-clone">
      <section className="os-clone-hero">
        <motion.div
          className="os-clone-hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1>Smart hardware,<br />powerful software.</h1>
          <p>
            Combine our Smart DB, movable chargers and charging software to manage your property's EV charging needs.
          </p>
          <div className="os-clone-actions">
            <a className="button" href="mailto:hello@ebeecharge.in?subject=ebeeOS%20Contact%20Sales">Contact Sales</a>
            <a className="os-text-link" href="#os-benefits">Learn more</a>
          </div>
        </motion.div>

        <motion.div
          className="os-laptop"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          aria-label="ebeeOS dashboard preview"
        >
          <div className="os-laptop-screen">
            <div className="os-mini-topbar">
              <span>Dashboard</span>
              <i></i>
            </div>
            <div className="os-mini-stats">
              <span><strong>12,480</strong> kWh</span>
              <span><strong>₹82.4K</strong> Revenue</span>
              <span><strong>326</strong> Sessions</span>
            </div>
            <div className="os-mini-properties">
              {propertyCards.map(([name, address, status]) => (
                <article key={name}>
                  <div></div>
                  <strong>{name}</strong>
                  <small>{address}</small>
                  <em>{status}</em>
                </article>
              ))}
            </div>
            <div className="os-mini-chart">
              {[38, 54, 48, 72, 64, 86, 58, 92, 78, 66, 84, 96].map((height, index) => (
                <span style={{ "--height": `${height}%` }} key={index}></span>
              ))}
            </div>
          </div>
          <div className="os-laptop-base"></div>
        </motion.div>
      </section>

      <section className="os-benefits-row" id="os-benefits" aria-label="ebeeOS platform benefits">
        {benefits.map(({ title, copy, icon: Icon }) => (
          <article key={title}>
            <Icon size={30} strokeWidth={1.6} />
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="os-story-grid" aria-label="ebeeOS product story">
        <div className="os-story-copy">
          <span className="os-line-icon"><BatteryCharging size={32} /></span>
          <p>
            ebeeOS makes it easy for you to see all your properties and their EV usage patterns, trends, and energy cost in one place.
            Drill down into individual properties, users and sessions for a detailed breakdown.
          </p>
        </div>
        <div className="os-soft-card os-properties-card">
          <div className="os-card-heading">
            <strong>My properties</strong>
            <span>+</span>
          </div>
          <div className="os-property-list">
            {propertyCards.map(([name, address, status]) => (
              <article key={name}>
                <div></div>
                <strong>{name}</strong>
                <small>{address}</small>
                <em>{status}</em>
              </article>
            ))}
          </div>
        </div>

        <div className="os-soft-card os-charging-card">
          <strong>Charging</strong>
          <div className="os-charge-values">
            <span><b>28 kWh</b> Usage</span>
            <span><b>₹717</b> Total cost</span>
          </div>
          <div className="os-charge-grid">
            <span>10:34 PM<br /><small>Start time</small></span>
            <span>07:01<br /><small>Charging time</small></span>
            <span>18 A<br /><small>Current</small></span>
            <span>120 V<br /><small>Voltage</small></span>
          </div>
          <button type="button">End session remotely</button>
        </div>
        <div className="os-story-copy">
          <span className="os-line-icon"><Zap size={32} /></span>
          <p>
            ebeeOS tracks and charges each driver's utilization on your property automatically, reimbursing your property at the end of the month.
          </p>
        </div>

        <div className="os-story-copy">
          <span className="os-line-icon"><BatteryCharging size={32} /></span>
          <p>
            Create public, private and semi-private groups to control access and set different pricing for different groups.
          </p>
        </div>
        <div className="os-soft-card os-groups-card">
          <strong>Ebee Yards</strong>
          <small>3 groups, 49 chargers</small>
          {groupRows.map(([name, chargers, price]) => (
            <p key={name}>
              <span></span>
              <b>{name}<small>{chargers}</small></b>
              <em>{price}</em>
            </p>
          ))}
        </div>

        <div className="os-soft-card os-scan-card">
          <div className="os-device-grid">
            <span>DB</span>
            <span>App</span>
            <span>DC</span>
            <span>QR</span>
          </div>
          <strong>SCAN ME</strong>
        </div>
        <div className="os-story-copy">
          <span className="os-line-icon"><RadioTower size={32} /></span>
          <p>
            Zero networking, setup or service fees. Ebee hardware and software work together seamlessly to help you manage every property’s EV charging needs.
          </p>
        </div>
      </section>

      <section className="os-roi-panel" aria-label="Savings calculator">
        <div>
          <small>Savings Calculator</small>
        </div>
        <div className="os-roi-copy">
          <p>
            With minimal upfront cost, low maintenance contracts and zero commissioning fees, ebee chargers help scale with your EV charging needs.
            Plus, usage-based fees help properties get to profitability faster than any other EV charger.
          </p>
          <a href={withBase("/savings-calculator")}>Savings Calculator</a>
        </div>
        <div className="os-roi-stats">
          <article><strong>5%</strong><span>Median energy cost surcharge used by property owners</span></article>
          <article><strong>₹12,500</strong><span>For 20 chargers</span></article>
          <article><strong>5</strong><span>Years to profit</span></article>
        </div>
      </section>

      <TestimonialCarousel className="testimonial os-shared-testimonial" />

      <section className="os-final-banner">
        <img src={ctaCarImage} alt="Ebee charging installed at a residential property" loading="lazy" />
        <div>
          <h2>Reliable, zero-maintenance, easy-to-install EV charger that's even easier to manage.</h2>
          <a className="button" href="mailto:hello@ebeecharge.in?subject=ebeeOS%20Contact%20Sales">Contact Sales</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

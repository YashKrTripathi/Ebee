import React from "react";
import { Footer } from "./Footer.jsx";
import { withBase } from "../utils/routing.js";
import image1 from "../../assets/image 1.png";
import image2 from "../../assets/image 2.png";
import image3 from "../../assets/image 3.png";
import image4 from "../../assets/image 4.png";
import image5 from "../../assets/image 5.png";
import ebeeLogo from "../../assets/ebee_charge_logo.png";
import retrofitImage from "../../assets/retrofit_basement.png";
import smartDbImage from "../../assets/smart db 1.png";
import rwaHero from "../../assets/rwa_hero.png";
import mchColor from "../../assets/MCHCOLOR.png";

const leadership = [
  { name: "Placeholder Name", title: "Chief Executive Officer", bio: "With over a decade in EV infrastructure, leading the charge on sustainable residential mobility." },
  { name: "Placeholder Name", title: "Chief Technology Officer", bio: "Architect of the app-less, socket-based smart charging system." },
  { name: "Placeholder Name", title: "Head of Operations", bio: "Ensuring seamless deployment across thousands of parking bays." },
  { name: "Placeholder Name", title: "VP of Engineering", bio: "Leading the development of Dynamic Load Management solutions." },
  { name: "Placeholder Name", title: "Head of Sales", bio: "Expanding Ebee's footprint across major real-estate developments." },
];

const advisors = [
  { name: "Advisor Name", title: "Urban Planning", bio: "Expert in smart city integration." },
  { name: "Advisor Name", title: "Grid Infrastructure", bio: "Former DISCOM executive." },
  { name: "Advisor Name", title: "Real Estate Strategy", bio: "Top-tier developer consultant." },
  { name: "Advisor Name", title: "Policy & Compliance", bio: "Navigating EV mandates." },
  { name: "Advisor Name", title: "Financial Modeling", bio: "Expert in EV CAPEX/OPEX." },
];

export function AboutUsPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-header">
          <h1>About us</h1>
        </div>
        <div className="about-hero-collage">
          <img src={image3} alt="Ebee charging 1" className="about-img-1" />
          <img src={image4} alt="Ebee charging 2" className="about-img-2" />
          <img src={image1} alt="Ebee charging 3" className="about-img-3" />
          <img src={image5} alt="Ebee charging 4" className="about-img-4" />
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-statement">
          <img src={ebeeLogo} alt="Ebee" className="mission-logo" />
          <p>
            Ebee was founded to transform EV charging from a "regulatory mandate" into "customer delight" through app-less, frictionless technology. We provide a solution where residents can charge their vehicles using the sockets in their parking spots with just WhatsApp and UPI, without the nightmare of fragmented apps or wallets.
          </p>
        </div>

        <div className="mission-stats">
          <article>
            <h2>40%</h2>
            <p>
              <strong>Lower Installation Costs</strong><br />
              Centralized intelligence means 40% lower installation costs compared to traditional smart chargers, reducing CAPEX for developers and RWAs.
            </p>
            <a href="#audit" className="text-link">Book an audit</a>
          </article>
          <article>
            <h2>32x</h2>
            <p>
              <strong>Scale with One Unit</strong><br />
              One Smart DB supports up to 32 charging points with load-aware control logic, meaning true plug-and-play scalability.
            </p>
            <a href="#products" className="text-link">See products</a>
          </article>
        </div>
      </section>

      <section className="about-history">
        <div className="history-header">
          <small>HISTORY</small>
          <h2>Why We Started Ebee</h2>
        </div>
        <div className="history-content">
          <article>
            <img src={retrofitImage} alt="Basement parking" />
            <p className="history-caption">From Public Transit to Residential EVs</p>
            <p>
              Built on WBG's history of 450kW bus chargers and 1.2MW charging hubs in Singapore and Malaysia, we realized that while public infrastructure was advancing, residential charging was chaotic. Existing solutions didn't work for landlords or EV owners.
            </p>
          </article>
          <article>
            <img src={smartDbImage} alt="Smart DB installation" />
            <p className="history-caption">Solving the Basement Reality</p>
            <p>
              Discoms refused to install green meters in basements with poor connectivity. Individual owners created an ugly web of cables and fire hazards. We engineered the Smart DB approach to centralize the intelligence and allow zero-connectivity charging at the parking bay.
            </p>
          </article>
        </div>
      </section>

      <section className="about-leadership">
        <h2>Leadership at Ebee</h2>
        <p className="leadership-sub">Guiding the future of zero-friction residential EV charging.</p>
        <div className="leadership-grid">
          {leadership.map((person, idx) => (
            <article key={idx} className="person-card">
              <div className="person-photo-placeholder">{person.name.split(' ').map(n => n[0]).join('')}</div>
              <h3>{person.name}</h3>
              <small>{person.title}</small>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-partners">
        <h2>Our partners</h2>
        <div className="partners-grid">
          <div className="partner-logo">ChargeEV</div>
          <div className="partner-logo">DC Handal</div>
          <div className="partner-logo">ChargeZone</div>
          <div className="partner-logo">LTA Singapore</div>
          <div className="partner-logo">Yinson GreenTech</div>
          <div className="partner-logo">ComfortDelGro</div>
        </div>
      </section>

      <section className="about-advisors">
        <h2>A Rare Breed of Multidisciplinary Advisors</h2>
        <div className="advisors-grid">
          {advisors.map((advisor, idx) => (
            <article key={idx} className="advisor-card">
              <div className="advisor-photo-placeholder">{advisor.name.split(' ').map(n => n[0]).join('')}</div>
              <h3>{advisor.name}</h3>
              <small>{advisor.title}</small>
              <p>{advisor.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-media">
        <h2>Ebee in the Media</h2>
        <a href="#news" className="text-link">See all</a>
        <div className="media-grid">
          <article className="media-card">
            <img src={rwaHero} alt="RWA EV setup" />
            <small>RESIDENTIAL CHARGING</small>
            <h3>How Ebee turned a 20% EV mandate into resident delight.</h3>
            <span className="text-link">Read article</span>
          </article>
          <article className="media-card">
            <img src={mchColor} alt="Movable charger" />
            <small>PRODUCT INNOVATION</small>
            <h3>DC Charging on Demand: The movable solution for basements.</h3>
            <span className="text-link">Read article</span>
          </article>
        </div>
      </section>

      <section className="about-hiring">
        <h2>We're hiring!</h2>
        <p>Join us in building a future-proof EV ecosystem.</p>
        <a href="mailto:careers@ebeecharge.in" className="button">View open roles</a>
      </section>

      <Footer />
    </main>
  );
}

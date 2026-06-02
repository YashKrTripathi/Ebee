import React from "react";
import { ClipboardCheck, Link as LinkIcon, Mail, Send, Share2, Zap } from "lucide-react";
import { withBase } from "../utils/routing.js";
import Masonry from "./Masonry.jsx";
import heroImage from "../../assets/rwa_hero.png";
import infographicImage from "../../assets/light_ev_dashboard.png";
import installationImage from "../../assets/retrofit_basement.png";
import supportingImage from "../../assets/rwa_committee_approval.png";
import ctaImage from "../../assets/mvch.png";

import image1 from "../../assets/image 1.png";
import image2 from "../../assets/image 2.png";
import image3 from "../../assets/image 3.png";
import image4 from "../../assets/image 4.png";
import image5 from "../../assets/image 5.png";
import image6 from "../../assets/image 6.png";
import image7 from "../../assets/image 7.png";
import image8 from "../../assets/image 8.png";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";

const heroImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const heroHeights = [400, 250, 320, 280, 600, 350, 500, 240, 450, 300];

const masonryItems = heroImages.map((img, index) => ({
  id: String(index + 1),
  img: img,
  url: img,
  height: heroHeights[index],
}));

const defaultImages = {
  hero: heroImage,
  infographic: infographicImage,
  installation: installationImage,
  supporting: supportingImage,
  cta: ctaImage,
};

const shareLinks = [
  { label: "Copy link", icon: LinkIcon, href: "#", action: "copy" },
  { label: "Email", icon: Mail, href: "mailto:?subject=Building%20EV%20charging%20that%20people%20actually%20use" },
  { label: "Share on LinkedIn", icon: Send, href: "https://www.linkedin.com/" },
];

export function CaseStudyPage({ images = {} }) {
  const visual = { ...defaultImages, ...images };

  return (
    <main className="case-study-page" id="top">
      <article className="case-article-shell">
        <header className="case-article-header">
          <nav className="case-breadcrumb" aria-label="Breadcrumb">
            <a href={withBase("/")}>Home</a>
            <span aria-hidden="true">/</span>
            <a href={withBase("/resources/case-studies/building-ev-charging")}>Resources</a>
            <span aria-hidden="true">/</span>
            <span>Case Studies</span>
          </nav>

          <div className="case-title-row">
            <div>
              <p className="case-category">Case Study</p>
              <h1>Building EV charging that people actually use</h1>
            </div>
            <ShareCluster label="Share case study" />
          </div>

          <div className="case-meta-row">
            <div className="case-author">
              <span className="case-author-avatar" aria-hidden="true">
                <Zap size={18} strokeWidth={2.4} />
              </span>
              <span>
                <strong>Ebee Team</strong>
                <small>Residential charging deployment story</small>
              </span>
            </div>
            <time dateTime="2024-05-14">May 14, 2024</time>
          </div>
        </header>

        <figure className="case-hero-image">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </figure>

        <div className="case-article-body">
          <section className="case-lead-section">
            <p className="case-lead">
              Two years ago, we started Ebee to solve a fundamental problem: making EV charging affordable and accessible to residents and visitors. The challenges of coordinating parking, managing charger availability, and delivering a simple user experience often prevent properties from delivering reliable charging.
            </p>
          </section>

          <figure className="case-wide-visual">
            <img src={visual.supporting} alt="Residential EV charging hardware installed near parking bays" loading="lazy" />
            <figcaption>Deployment planning starts with the parking flow residents already use every day.</figcaption>
          </figure>

          <section className="case-content-section">
            <h2>Problems before installation</h2>
            <p>
              Properties often have residents who are ready to shift to EVs, but the shared parking environment creates practical blockers before the first charger is installed. Access, payment, load control and day-to-day coordination all need to work together.
            </p>
          </section>

          <section className="case-infographic-block" aria-label="EV charging deployment statistics">
            <div className="case-infographic-copy">
              <p className="case-mini-label">Deployment model</p>
              <h2>Right-sized infrastructure, phased for real demand.</h2>
              <p>
                Ebee designed the rollout so the property could solve today's charging need while keeping the system ready for future EV adoption.
              </p>
            </div>
            <div className="case-stat-grid">
              <div>
                <strong>32</strong>
                <span>charging points supported by one Smart DB</span>
              </div>
              <div>
                <strong>UPI</strong>
                <span>simple payment and digital receipts</span>
              </div>
              <div>
                <strong>20%</strong>
                <span>EV-ready planning context for properties</span>
              </div>
            </div>
            <figure>
              <img src={visual.infographic} alt="Ebee dashboard view for charger utilization and network activity" loading="lazy" />
            </figure>
          </section>

          <section className="case-content-section">
            <h2>Our solution</h2>
            <p>
              We designed a right-sized deployment with a simple resident experience and centralised operations to ensure reliable access and improve parking flow. The solution was modular and built to scale with future EV demand.
            </p>
            <p>
              The approach kept the charging experience simple for residents while giving the property team better visibility into usage, payments, and availability.
            </p>
          </section>

          <section className="case-content-section">
            <h2>What needed to change</h2>
            <ul className="case-bullets">
              <li>Long waiting time for chargers</li>
              <li>Unavailable chargers when needed</li>
              <li>No proper charging management</li>
              <li>Residents and visitors facing inconvenience</li>
              <li>Poor parking and charging coordination</li>
            </ul>
          </section>

          <figure className="case-installation-visual">
            <img src={visual.installation} alt="EV charging installation in a covered residential parking area" loading="lazy" />
            <figcaption>Installation at a covered parking bay improved access and convenience.</figcaption>
          </figure>

          <section className="case-content-section">
            <h2>Positive impact</h2>
            <p>
              After deployment we saw improved user satisfaction, clearer charger availability, and easier adoption for residents and visitors.
            </p>
            <ul className="case-bullets">
              <li>Improved user satisfaction</li>
              <li>Reduced charging confusion</li>
              <li>Better charger utilization</li>
              <li>Easier EV adoption</li>
            </ul>
          </section>

          <section className="case-impact-section" aria-label="Deployment impact">
            <p className="case-mini-label">Impact</p>
            <h2>A quieter charging operation for residents and property teams.</h2>
            <div className="case-impact-grid">
              <div>
                <strong>Clarity</strong>
                <span>Residents know how to start, pay for and complete a session.</span>
              </div>
              <div>
                <strong>Control</strong>
                <span>Operations teams get centralized visibility over access and utilization.</span>
              </div>
              <div>
                <strong>Scale</strong>
                <span>The property can expand charging as adoption grows.</span>
              </div>
            </div>
          </section>

          <section className="case-final-section">
            <p className="case-mini-label">Final result</p>
            <h2>The property became more EV-ready and future-friendly.</h2>
            <p>
              The property became more EV-ready and future-friendly, simplifying daily charging and preparing the site for higher EV adoption.
            </p>
          </section>
        </div>

        <footer className="case-article-footer">
          <div className="case-share-panel">
            <p>Share this post</p>
            <ShareCluster label="Share this post" />
          </div>

          <div className="case-author-card">
            <span className="case-author-avatar case-author-avatar-large" aria-hidden="true">
              <ClipboardCheck size={22} strokeWidth={2.3} />
            </span>
            <span>
              <strong>Ebee Team</strong>
              <small>Residential EV infrastructure notes for developers, RWAs, and property operators.</small>
            </span>
          </div>
        </footer>
      </article>

      <section className="case-cta" aria-label="Book an Ebee consultation">
        <div className="case-cta-copy">
          <div className="case-cta-actions">
            <a className="button" href="mailto:hello@ebeecharge.in?subject=Feasibility%20Audit%20Request">Contact Sales</a>
            <a className="button button-secondary" href={withBase("/savings-calculator")}>Calculate Savings</a>
          </div>
          <p className="case-mini-label">EbeeCharge for communities</p>
          <h2>Want a tailored site audit?</h2>
          <p>
            Book an expert feasibility audit to understand costs, placement and the right approach for EV charging at your property.
          </p>
        </div>
        <img className="case-cta-image" src={visual.cta} alt="EbeeCharge movable charger product" loading="lazy" />
      </section>
    </main>
  );
}

function ShareCluster({ label }) {
  function handleShareClick(event, link) {
    if (link.action !== "copy") {
      return;
    }

    event.preventDefault();
    if (navigator.clipboard && window.location.href) {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <nav className="case-share-cluster" aria-label={label}>
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a href={link.href} aria-label={link.label} key={link.label} onClick={(event) => handleShareClick(event, link)}>
            <Icon size={15} strokeWidth={2.2} />
          </a>
        );
      })}
      <a href="#" aria-label="More share options">
        <Share2 size={15} strokeWidth={2.2} />
      </a>
    </nav>
  );
}

export default CaseStudyPage;

import React from "react";
import { ClipboardCheck, Link as LinkIcon, Mail, Send, Share2, Zap } from "lucide-react";
import { withBase } from "../utils/routing.js";
import heroImage from "../../assets/rwa_hero.png";
import basementImage from "../../assets/retrofit_basement.png";
import ctaProductImage from "../../assets/mvch.png";

const shareLinks = [
  { label: "Copy link", icon: LinkIcon, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:?subject=Right-sized%20EV%20charging%20for%20apartment%20communities" },
  { label: "Share on social", icon: Send, href: "https://www.linkedin.com/" },
];

export function BlogArticlePage() {
  return (
    <main className="blog-article-page" id="top">
      <article className="article-shell">
        <header className="article-header">
          <div className="article-breadcrumb">
            <a href={withBase("/")}>Blog</a>
            <span aria-hidden="true">/</span>
            <span>Ebee Insights</span>
          </div>

          <div className="article-title-row">
            <div>
              <p className="article-category">Residential charging</p>
              <h1>Right-sized EV charging for apartment communities</h1>
            </div>
            <ShareCluster label="Share article" />
          </div>

          <div className="article-meta-row">
            <div className="article-author">
              <span className="author-avatar" aria-hidden="true">
                <Zap size={18} strokeWidth={2.4} />
              </span>
              <span>
                <strong>EbeeCharge team</strong>
                <small>June 1, 2026</small>
              </span>
            </div>
          </div>
        </header>

        <figure className="article-hero-image">
          <img src={heroImage} alt="EbeeCharge EV charging setup at a residential apartment property" />
        </figure>

        <div className="article-content">
          <p>
            Apartment communities are reaching the point where EV charging has to become shared infrastructure, not a one-off amenity for the first few residents who ask. The challenge is making that shift without overbuilding electrical capacity, complicating billing, or turning every parking bay into a construction project.
          </p>

          <p>
            EbeeCharge designs around that reality. Instead of forcing every property to install a full charger at every reserved spot on day one, we separate the resident experience from the heavy infrastructure underneath it.
          </p>

          <ul>
            <li>Smart distribution boards control multiple charging points from one central location.</li>
            <li>Residents start sessions through a familiar WhatsApp and UPI flow.</li>
            <li>Dynamic load management protects the building while more EVs join over time.</li>
          </ul>

          <h2>Why right-sized infrastructure matters</h2>
          <p>
            Most properties need a phased path. Demand starts with a small group of EV owners, then expands as residents replace cars, developers hand over new towers, and local EV-readiness expectations become stricter. A rigid charger-per-bay approach can lock capital into unused hardware.
          </p>

          <section className="article-infographic" aria-label="EV charging infrastructure planning comparison">
            <div className="infographic-copy">
              <p className="mini-label">Planning model</p>
              <h3>Prepare every bay. Electrify in phases.</h3>
              <p>Central controls let communities make parking EV-ready while deploying active charging where demand exists today.</p>
            </div>
            <div className="infographic-grid" aria-hidden="true">
              <span className="is-active"></span>
              <span></span>
              <span></span>
              <span className="is-ready"></span>
              <span></span>
              <span className="is-active"></span>
              <span></span>
              <span className="is-ready"></span>
              <span></span>
              <span></span>
              <span className="is-active"></span>
              <span></span>
            </div>
          </section>

          <h2>What property teams need to solve</h2>
          <p>
            A working deployment has to satisfy residents, facility teams, and the electrical room at the same time. The critical decisions usually fall into a few buckets:
          </p>

          <ul>
            <li><strong>Capacity:</strong> Allocate power intelligently so charging does not create peak-load anxiety.</li>
            <li><strong>Access:</strong> Keep the start flow simple enough for every resident to use without training.</li>
            <li><strong>Recovery:</strong> Track energy and payments clearly so societies can recover usage costs.</li>
            <li><strong>Growth:</strong> Add more sockets or movable charging support as adoption increases.</li>
          </ul>

          <h2>How EbeeCharge approaches multifamily deployment</h2>
          <p>
            The Smart DB acts as the control layer for resident parking. It meters sessions, authorizes sockets, and manages available capacity. A resident scans a QR code, pays through UPI, and the socket activates only for that session. For higher energy needs, a movable charger can serve multiple bays without permanently occupying every parking spot.
          </p>

          <figure className="article-portrait-block">
            <img src={basementImage} alt="Basement parking with EV charging points installed for residents" loading="lazy" />
          </figure>

          <p>
            This keeps the physical installation quiet and modular. The property can begin with today's demand, prove the usage model, and then expand in a way that matches resident adoption rather than guesswork.
          </p>

          <h2>What changes for residents</h2>
          <p>
            The best infrastructure disappears into the routine. Residents do not need to chase the association for manual approvals, install a new app, or negotiate energy bills at the end of the month. They park, scan, pay, charge, and receive a record of the session.
          </p>

          <p>
            That simplicity is what makes apartment charging feel like a managed residential utility instead of an experimental add-on.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-share-panel">
            <p>Share this post</p>
            <ShareCluster label="Share this post" />
          </div>

          <div className="article-author-card">
            <span className="author-avatar author-avatar-large" aria-hidden="true">
              <ClipboardCheck size={22} strokeWidth={2.3} />
            </span>
            <span>
              <strong>EbeeCharge team</strong>
              <small>Residential EV infrastructure notes for developers, RWAs, and property operators.</small>
            </span>
          </div>
        </footer>
      </article>

      <section className="article-cta" aria-label="Book an EbeeCharge consultation">
        <div className="article-cta-copy">
          <div className="article-cta-actions">
            <a className="button" href="mailto:hello@ebeecharge.in?subject=EV%20Charging%20Consultation">Contact Sales</a>
            <a className="button button-secondary" href={withBase("/savings-calculator")}>Calculate Savings</a>
          </div>
          <p className="mini-label">EbeeCharge for communities</p>
          <h2>Plan a charging rollout that matches real resident demand.</h2>
        </div>
        <img className="article-cta-product" src={ctaProductImage} alt="EbeeCharge movable charger product" loading="lazy" />
      </section>
    </main>
  );
}

function ShareCluster({ label }) {
  return (
    <nav className="share-cluster" aria-label={label}>
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a href={link.href} aria-label={link.label} key={link.label}>
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

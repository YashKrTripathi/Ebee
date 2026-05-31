import React from "react";
import { AnimatedPhone } from "./AnimatedPhone.jsx";
import { AnimatedCharger } from "./AnimatedCharger.jsx";
import { Footer } from "./Footer.jsx";
import { withBase } from "../utils/routing.js";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";
import whatsappImage from "../../assets/WA.png";
import dashboardImage from "../../assets/DASHBOARD.png";
import lightEvDashboardImage from "../../assets/light_ev_dashboard.png";
import reliabilityImage from "../../assets/premium_movable_charger.png";
import carImage from "../../assets/car blank.png";
import developerBlueprintImage from "../../assets/developer_blueprint.jpg";
import portfolioCommandCenterImage from "../../assets/portfolio_command_center.png";
import rwaHeroImage from "../../assets/rwa_hero.png";
import newConstructionRowImage from "../../assets/new_construction_blueprint.png";
import retrofitRowImage from "../../assets/retrofit_basement.png";
import rwaCommitteeImage from "../../assets/rwa_committee_approval.png";
import developerHandoverImage from "../../assets/developer_handover_operations.png";

const solutionContent = {
  "new-construction": {
    eyebrow: "Projects",
    title: "New Construction",
    intro:
      "Plan EV charging into the building from day one so the parking layout, DB space, metering, and resident billing launch together instead of being patched later.",
    heroImage: smartDbImage,
    heroAlt: "Ebee Smart DB for new construction projects",
    ctaLabel: "Talk to Sales",
    ctaSubject: "New%20Construction%20Project%20Consultation",
    highlights: [
      { title: "Design it into the plans", copy: "Reserve power, parking, and control space before the building is handed over." },
      { title: "Launch resident-ready", copy: "Residents get QR access, WhatsApp flow, and UPI billing from the start." },
      { title: "Keep load protected", copy: "Dynamic load management prevents EV charging from overwhelming the property." },
      { title: "Scale by bay", copy: "Add charging points without rethinking the whole electrical architecture." },
    ],
    rows: [
      {
        eyebrow: "Design stage",
        title: "Reserve the right infrastructure before concrete is poured.",
        copy:
          "New projects can allocate DB space, cabling routes, and parking logic up front, which keeps later EV rollouts cleaner and less expensive.",
        image: newConstructionRowImage,
        alt: "Smart DB mounted in an Ebee parking infrastructure setup",
      },
    ],
    comparisonTitle: "Why the new-build model is easier to operate.",
    comparisonIntro:
      "A planned architecture saves cost later by concentrating intelligence in the DB instead of duplicating expensive hardware in every bay.",
    comparisonRows: [
      ["Electrical planning", "Retrofit decisions happen later", "Charging is designed into the building"],
      ["Resident onboarding", "New process added after launch", "WhatsApp and QR flow from day one"],
      ["Billing", "Separate tools and manual recovery", "Usage-based recovery through UPI"],
      ["Expansion", "Rework when demand grows", "Add bays to the same Smart DB"],
    ],
    comparisonCardTitle: "Ready for occupancy",
    comparisonCardValue: "20%",
    comparisonCardCopy: "A practical way to satisfy EV-ready parking expectations without overbuilding hardware at handover.",
    quote:
      "The smart choice is to prepare the building for EV charging before the first resident moves in, so the rollout feels like part of the project rather than an afterthought.",
    quoteBy: "Project Planning Team",
    faq: [
      ["How early should the EV plan start?", "The earlier the better. The best point is during electrical planning, before the parking and DB layout are frozen."],
      ["Will residents need more hardware later?", "No. The central DB approach lets you grow the number of sockets without redesigning the whole system."],
      ["Can the project launch in phases?", "Yes. You can light up a few bays first and expand as more residents adopt EVs."],
    ],
  },
  retrofit: {
    eyebrow: "Projects",
    title: "Retrofit",
    intro:
      "Add EV charging to an existing parking layout with a phased rollout that keeps civil work light, preserves resident parking, and avoids expensive full-charger overbuild.",
    heroImage: reliabilityImage,
    heroAlt: "Ebee retrofit charging infrastructure",
    ctaLabel: "Talk to Sales",
    ctaSubject: "Retrofit%20Project%20Consultation",
    highlights: [
      { title: "Minimal disruption", copy: "Keep the current parking layout and introduce charging with the smallest practical change set." },
      { title: "Phase by phase", copy: "Start with a few bays and expand only when resident demand grows." },
      { title: "Socket first", copy: "Use basic sockets and central control instead of repeating expensive smart hardware." },
      { title: "Safe to scale", copy: "Load-aware control helps the property add charging without overloading the building." },
    ],
    rows: [
      {
        eyebrow: "Existing basement",
        title: "Work with the parking you already have.",
        copy:
          "Retrofit projects benefit from a central Smart DB because the intelligence sits in one place while the parking bays stay straightforward to equip.",
        image: retrofitRowImage,
        alt: "Retrofitted EV charging hardware in a property basement",
      },
    ],
    comparisonTitle: "Why retrofit does not need to feel heavy.",
    comparisonIntro:
      "A retrofit succeeds when the resident experience stays simple and the property team doesn’t inherit a new operational burden.",
    comparisonRows: [
      ["Civil work", "Big changes at every bay", "Keep the parking structure largely intact"],
      ["Hardware", "Smart charger at every point", "Central intelligence with simple sockets"],
      ["Resident experience", "New app or separate wallet", "WhatsApp + QR + UPI"],
      ["Growth path", "Replace hardware when demand rises", "Add sockets and bays over time"],
    ],
    comparisonCardTitle: "Phased rollout",
    comparisonCardValue: "1 → 32",
    comparisonCardCopy: "Start with a small set of bays and expand the same architecture as EV adoption increases.",
    quote:
      "Retrofit works when the new system feels lighter than the old problem. Ebee keeps the property in control without making the basement look like a construction site.",
    quoteBy: "Operations Advisory",
    faq: [
      ["Do we need to rebuild the parking area?", "No. Retrofit is designed to fit into existing parking layouts with limited change."],
      ["Can we begin with a few sockets only?", "Yes. The rollout can start small and scale as the society sees real usage."],
      ["How do we avoid billing confusion?", "Each session is metered and reconciled, so usage remains transparent."],
    ],
  },
  developer: {
    eyebrow: "Roles",
    title: "Developer",
    intro:
      "Use EV-ready charging as a project differentiator: make the property easier to sell, easier to hand over, and easier to scale across future buildings.",
    heroImage: developerBlueprintImage,
    heroAlt: "Ebee movable charging setup in an office setting with developers reviewing a blueprint",
    ctaLabel: "Talk to Sales",
    ctaSubject: "Developer%20Solution%20Consultation",
    highlights: [
      { title: "Sales advantage", copy: "EV-ready parking becomes a visible project feature instead of a future promise." },
      { title: "Portfolio control", copy: "Track multiple sites from one dashboard after handover." },
      { title: "Cost discipline", copy: "Centralized intelligence helps avoid overbuilding charger hardware in every bay." },
      { title: "Mandate ready", copy: "A planned architecture supports EV-ready expectations without last-minute rework." },
    ],
    rows: [
      {
        eyebrow: "Project positioning",
        title: "Sell EV readiness as part of the development story.",
        copy:
          "When charging is planned into the project, developers can present a cleaner resident experience and a more compelling long-term ownership value proposition.",
        image: smartDbImage,
        alt: "Smart DB used in a developer-led project",
      },
      {
        eyebrow: "Handover",
        title: "Give residents a charging system that already works.",
        copy:
          "Because resident onboarding, payment, and session control are already built in, the property can transition from construction to operations smoothly.",
        image: developerHandoverImage,
        alt: "Modern property management tablet handover",
      },
      {
        eyebrow: "Scale across the portfolio",
        title: "Replicate the same operating model across sites.",
        copy:
          "Developers and operators can monitor usage and recovery across multiple properties from one place, which keeps rollout learning reusable.",
        image: portfolioCommandCenterImage,
        alt: "Multi-site EV charging dashboard",
      },
    ],
    comparisonTitle: "Why developers prefer a single operating model.",
    comparisonIntro:
      "One architecture reduces uncertainty during handover and makes it easier to standardize charging across future projects.",
    comparisonRows: [
      ["Project value", "Charging is an add-on", "EV readiness is a selling feature"],
      ["Handover", "New utility to explain later", "Resident flow already trained in"],
      ["Portfolio management", "Each site behaves differently", "One dashboard across sites"],
      ["Cost profile", "Expensive charger per bay", "Central intelligence and phased scale"],
    ],
    comparisonCardTitle: "Portfolio visibility",
    comparisonCardValue: "1 place",
    comparisonCardCopy: "Monitor charging, recovery, and utilization across the development pipeline from a single dashboard.",
    quote:
      "The best developer solution is one that can be handed over cleanly, sold convincingly, and operated consistently after occupancy.",
    quoteBy: "Developer Partnerships",
    faq: [
      ["Can this be standardized across projects?", "Yes. The same Smart DB and resident workflow can be repeated across properties."],
      ["Does it help sales conversations?", "Yes. EV readiness is a tangible feature buyers understand immediately."],
      ["Will operations stay manageable after handover?", "The dashboard and metering model keep site-level operations visible and structured."],
    ],
  },
  rwa: {
    eyebrow: "Roles",
    title: "RWA",
    intro:
      "Give the resident welfare association a charging system that is easy to approve, easy to explain, and easy to manage once residents start using it every day.",
    heroImage: rwaHeroImage,
    heroAlt: "Ebee resident charging flow for RWAs",
    ctaLabel: "Talk to Sales",
    ctaSubject: "RWA%20Solution%20Consultation",
    highlights: [
      { title: "Resident friendly", copy: "Residents use a familiar QR, WhatsApp, and UPI flow instead of learning a new app." },
      { title: "Committee friendly", copy: "The RWA can approve a controlled system with transparent usage-based recovery." },
      { title: "Load safe", copy: "Charging is throttled so the property stays protected during peak demand." },
      { title: "Transparent billing", copy: "Metered sessions make cost recovery easy to understand and audit." },
    ],
    rows: [
      {
        eyebrow: "Committee approval",
        title: "Install a system that is easy to explain to residents.",
        copy:
          "RWAs need a setup that protects common power, keeps parking rights intact, and gives residents a charging option without bringing in billing chaos.",
        image: rwaCommitteeImage,
        alt: "Property charging infrastructure designed for resident committees",
      },
      {
        eyebrow: "Resident use",
        title: "Keep the user journey as familiar as a chat.",
        copy:
          "Residents scan the bay QR, continue in WhatsApp, and pay through UPI, which means the society does not need to train everyone on a new app.",
        image: whatsappImage,
        alt: "WhatsApp charging flow for residents",
      },
      {
        eyebrow: "Operations and recovery",
        title: "Give the committee one dashboard for the whole system.",
        copy:
          "The property team can monitor sessions, receipts, and usage-based recovery without manual follow-ups or spreadsheet disputes.",
        image: lightEvDashboardImage,
        alt: "Dashboard for RWA charging operations",
      },
    ],
    comparisonTitle: "Why RWAs prefer simple operations.",
    comparisonIntro:
      "The charging system should stay understandable even after more residents adopt EVs and the committee changes over time.",
    comparisonRows: [
      ["Resident access", "New app or manual approval", "QR + WhatsApp + UPI flow"],
      ["Power safety", "Charging can overwhelm the building", "Dynamic load management protects capacity"],
      ["Billing", "Hard to reconcile later", "Transparent metering and recovery"],
      ["Expansion", "New project every time demand grows", "Same architecture scales by bay"],
    ],
    comparisonCardTitle: "Resident adoption",
    comparisonCardValue: "Easy",
    comparisonCardCopy: "A simple flow helps residents start charging without extra training or support overhead.",
    quote:
      "For an RWA, the right charging system is the one residents can use immediately and the committee can trust month after month.",
    quoteBy: "Resident Operations",
    faq: [
      ["Will residents need a new app?", "No. The flow uses WhatsApp and UPI so it stays familiar."],
      ["Can the society control who charges?", "Yes. Sessions are authorized before power is enabled."],
      ["How do we keep billing transparent?", "Each session is metered and recoverable, which keeps the math clear."],
    ],
  },
};

export function SolutionsPage({ solutionKey }) {
  const solution = solutionContent[solutionKey] || solutionContent["new-construction"];

  return (
    <main className="why-page solution-page" id={`solution-${solutionKey}`}>
      <section className="why-hero">
        <p className="why-kicker">{solution.eyebrow}</p>
        <h1>{solution.title}</h1>
        <p>{solution.intro}</p>
        <div className={`why-hero-device ${solutionKey === 'developer' || solutionKey === 'rwa' ? 'is-wide' : ''}`} aria-hidden="true">
          {solution.heroImage === whatsappImage ? <AnimatedPhone /> : <img src={solution.heroImage} alt="" />}
        </div>
      </section>

      <section className="why-proof-strip" aria-label={`${solution.title} advantages`}>
        {solution.highlights.map((item, index) => (
          <article key={item.title}>
            <SolutionIcon index={index} />
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="why-story" aria-label={`${solution.title} implementation details`}>
        {solution.rows.map((row, index) => {
          const isDashboard = row.image === lightEvDashboardImage || row.image === portfolioCommandCenterImage;
          return (
            <article className={`why-story-row ${index % 2 === 1 && !isDashboard ? "is-reversed" : ""} ${isDashboard ? "is-dashboard-row" : ""}`} key={row.title}>
            <div className="why-story-copy">
              <p className="section-label">{row.eyebrow}</p>
              <h2>{row.title}</h2>
              <p>{row.copy}</p>
            </div>
            <div className={`why-story-visual ${row.image === whatsappImage ? 'is-transparent' : ''}`}>
              {row.image === whatsappImage ? <AnimatedPhone /> : <img src={row.image} alt={row.alt} loading="lazy" />}
            </div>
          </article>
        );
        })}
      </section>

      <section className="why-savings">
        <p className="section-label">How it works</p>
        <h2>{solution.comparisonTitle}</h2>
        <p className="why-savings-intro">{solution.comparisonIntro}</p>
        <div className="savings-comparison">
          <div className="savings-table" aria-label={`${solution.title} comparison`}>
            {solution.comparisonRows.map(([label, oldWay, ebeeWay]) => (
              <div className="savings-row" key={label}>
                <span>{label}</span>
                <span>{oldWay}</span>
                <strong>{ebeeWay}</strong>
              </div>
            ))}
          </div>
          <div className="savings-card">
            <span>Best for</span>
            <strong>{solution.comparisonCardValue}</strong>
            <h3>{solution.comparisonCardTitle}</h3>
            <p>{solution.comparisonCardCopy}</p>
          </div>
        </div>
      </section>

      <section className="why-faq">
        <h2>Questions people ask before moving ahead.</h2>
        <div className="why-faq-list">
          {solution.faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
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
              <a className="button" href={`mailto:hello@ebeecharge.in?subject=${solution.ctaSubject}`}>{solution.ctaLabel}</a>
              <a className="button button-ghost" href={withBase("/savings-calculator")}>Compare Savings</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SolutionIcon({ index }) {
  return (
    <svg className="why-icon" viewBox="0 0 80 56" role="img" aria-hidden="true">
      {index === 0 && (
        <>
          <path d="M12 42h56M20 42V14h10v28M38 42V18h10v24M56 42V10h10v32" />
        </>
      )}
      {index === 1 && (
        <>
          <rect x="18" y="10" width="44" height="34" rx="10" />
          <path d="M28 22h24M28 30h16M28 38h20" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M14 38h18l8-22 10 30 8-18h8" />
          <path d="M52 10 42 28h10l-7 18 18-28H53l7-8Z" />
        </>
      )}
      {index === 3 && (
        <>
          <path d="M18 16h44M18 28h30M18 40h22" />
          <circle cx="62" cy="16" r="4" />
          <circle cx="50" cy="28" r="4" />
          <circle cx="42" cy="40" r="4" />
        </>
      )}
    </svg>
  );
}
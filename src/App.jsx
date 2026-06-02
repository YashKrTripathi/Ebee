import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { WhatsAppSimulator } from "./components/WhatsAppSimulator.jsx";
import { HeroVideo } from "./components/HeroVideo.jsx";
import { AccordionGroup } from "./components/AccordionGroup.jsx";
import { ProductGrid } from "./components/ProductGrid.jsx";
import { Footer } from "./components/Footer.jsx";
import { InfrastructureJourney } from "./components/InfrastructureJourney.jsx";
import { WhyEbeePage } from "./components/WhyEbeePage.jsx";
import { SavingsCalculatorPage } from "./components/SavingsCalculatorPage.jsx";
import { ProductPage } from "./components/ProductPage.jsx";
import { SolutionsPage } from "./components/SolutionsPage.jsx";
import { BlogArticlePage } from "./components/BlogArticlePage.jsx";
import { CaseStudyPage } from "./components/CaseStudyPage.jsx";
import { problems, reliabilityItems, simplicityItems, dashboardItems } from "./data/siteData.js";
import { getNormalizedPathname } from "./utils/routing.js";
import whatsappImage from "../assets/WA.png";
import dashboardImage from "../assets/DASHBOARD.png";
import reliabilityImage from "../assets/MCHCOLOR.png";
import ctaCarImage from "../assets/car blank.png";

const testimonials = [
  {
    logo: "Ferrari Properties",
    quote: "We have many chargers installed, and there is never an issue of drivers waiting to charge. I love the convenience and that I can schedule charging when the price is favorable.",
    name: "John Kennedy",
    role: "Ferrari Property Management",
  },
  {
    logo: "Urban Nest",
    quote: "Ebee helped us add resident charging without changing the parking layout. The setup is simple for residents and easy for our facilities team to monitor.",
    name: "Anita Rao",
    role: "Urban Nest Apartments",
  },
  {
    logo: "GreenGate",
    quote: "The WhatsApp flow made adoption surprisingly smooth. Residents understood how to start a session on day one, and billing stayed transparent.",
    name: "Rohan Mehta",
    role: "GreenGate Residency",
  },
  {
    logo: "Skyline RWA",
    quote: "We wanted a charging system that could grow bay by bay. Ebee gave us that flexibility without creating new operational work for the association.",
    name: "Priya Nair",
    role: "Skyline Heights RWA",
  },
  {
    logo: "Metro Habitat",
    quote: "The central dashboard gives us a clear view of sessions, energy, and collections. It feels built for residential properties, not adapted from a public charger model.",
    name: "Karan Shah",
    role: "Metro Habitat Operations",
  },
];

export default function App() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const normalizedPath = getNormalizedPathname();
  const isWhyPage = normalizedPath === "/why-ebee";
  const isSavingsPage = normalizedPath === "/savings-calculator";
  const solutionKey = normalizedPath.startsWith("/solutions/") ? normalizedPath.replace("/solutions/", "") : "";
  const isSolutionPage = ["new-construction", "retrofit", "developer", "rwa"].includes(solutionKey);
  const productKey = normalizedPath.startsWith("/products/") ? normalizedPath.replace("/products/", "") : "";
  const isProductPage = productKey === "smart-db" || productKey === "movable-charger";
  const isBlogArticlePage = normalizedPath === "/blog" || normalizedPath.startsWith("/blog/");
  const isCaseStudyPage = normalizedPath.startsWith("/resources/case-studies/");
  const isStandalonePage = isWhyPage || isSavingsPage || isSolutionPage || isProductPage || isBlogArticlePage;
  const activeTestimonial = testimonials[testimonialIndex];

  function changeTestimonial(direction) {
    setTestimonialIndex((currentIndex) => (currentIndex + direction + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    function scrollToHashTarget() {
      const hash = window.location.hash;
      if (!hash || hash === "#") {
        return;
      }

      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    const timeoutId = window.setTimeout(scrollToHashTarget, 80);
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToHashTarget);
    };
  }, [isWhyPage, isSavingsPage, isSolutionPage, isProductPage]);

  return (
    <>
      <Navbar variant={isBlogArticlePage ? "minimal" : "default"} />
      {isWhyPage ? (
        <WhyEbeePage />
      ) : isCaseStudyPage ? (
        <CaseStudyPage />
      ) : isSavingsPage ? (
        <SavingsCalculatorPage />
      ) : isSolutionPage ? (
        <SolutionsPage solutionKey={solutionKey} />
      ) : isProductPage ? (
        <ProductPage productKey={productKey} />
      ) : isBlogArticlePage ? (
        <BlogArticlePage />
      ) : (
      <main id="top">
        <HeroVideo />
        <ProductGrid />

        <section className="problem-strip" id="mandate" aria-label="EV charging problems">
          {problems.map((item) => (
            <article className="problem-item reveal" key={item.title}>
              <ProblemIcon type={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>

        <section className="feature-row" id="smart-db">
          <div className="feature-copy reveal">
            <p className="section-label">Reliability</p>
            <h2>Central intelligence for every socket.</h2>
            <AccordionGroup items={reliabilityItems} />
          </div>
          <div className="feature-visual reveal">
            <img className="feature-image reliability-image" src={reliabilityImage} alt="Ebee movable charging hardware" loading="lazy" />
          </div>
        </section>

        <section className="feature-row feature-row-alt" id="journey">
          <div className="feature-visual whatsapp-simulator-visual reveal">
            <WhatsAppSimulator />
          </div>
          <div className="feature-copy reveal">
            <p className="section-label">Simplicity</p>
            <h2>Charging that starts in WhatsApp.</h2>
            <AccordionGroup items={simplicityItems} />
          </div>
        </section>

        <section className="dashboard-section" id="dashboard">
          <div className="dashboard-copy reveal">
            <p className="section-label">Scalable</p>
            <h2>A property dashboard for charging operations.</h2>
            <AccordionGroup items={dashboardItems} />
          </div>
          <div className="laptop reveal">
            <img className="feature-image dashboard-image" src={dashboardImage} alt="Ebee property dashboard showing energy, revenue, chargers, sessions, and site activity" loading="lazy" />
          </div>
        </section>

        <InfrastructureJourney />

        <section className="testimonial" id="proof" aria-label="Customer testimonials">
          <button className="testimonial-arrow testimonial-arrow-prev" type="button" aria-label="Previous testimonial" onClick={() => changeTestimonial(-1)}>
            <span aria-hidden="true">{"<"}</span>
          </button>
          <div className="testimonial-card">
            <div className="testimonial-logo reveal">{activeTestimonial.logo}</div>
            <blockquote className="reveal">{activeTestimonial.quote}</blockquote>
            <p className="quote-name reveal">{activeTestimonial.name}</p>
            <p className="quote-role reveal">{activeTestimonial.role}</p>
            <div className="quote-dots" aria-label="Testimonial slides">
              {testimonials.map((testimonial, index) => (
                <button
                  className={index === testimonialIndex ? "is-active" : ""}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}: ${testimonial.logo}`}
                  aria-current={index === testimonialIndex ? "true" : undefined}
                  key={testimonial.logo}
                  onClick={() => setTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
          <button className="testimonial-arrow testimonial-arrow-next" type="button" aria-label="Next testimonial" onClick={() => changeTestimonial(1)}>
            <span aria-hidden="true">{">"}</span>
          </button>
        </section>

        <section className="final-cta" id="audit">
          <div className="cta-image reveal">
            <img src={ctaCarImage} alt="Ebee charging installed at a residential property parking bay" loading="lazy" />
            <div className="cta-overlay">
              <h2>Building EV charging that<br />people actually use.</h2>
              <div className="cta-actions">
                <a className="button" href="mailto:hello@ebeecharge.in?subject=Feasibility%20Audit%20Request">Book Audit</a>
                <a className="button button-ghost" href="#journey">Watch WhatsApp Flow</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}
      {(!isStandalonePage || isBlogArticlePage) && <Footer />}
    </>
  );
}

function ProblemIcon({ type }) {
  return (
    <svg className="problem-icon" viewBox="0 0 96 64" role="img" aria-label="">
      {type === "mandate" && (
        <>
          <path d="M18 17v30M38 17v30M58 17v30" />
          <path d="M24 21c-7-5-15 1-11 8 3 5 17 2 17 10 0 8-12 11-20 4M44 21c-7-5-15 1-11 8 3 5 17 2 17 10 0 8-12 11-20 4M64 21c-7-5-15 1-11 8 3 5 17 2 17 10 0 8-12 11-20 4" />
        </>
      )}
      {type === "connectivity" && (
        <>
          <path d="M18 43c16-18 43-18 59 0" />
          <path d="M29 33c11-10 26-10 37 0" />
          <path d="M40 23c6-4 12-4 18 0" />
          <path d="M70 18 28 52" />
        </>
      )}
      {type === "billing" && (
        <>
          <rect x="18" y="10" width="34" height="44" rx="3" />
          <path d="M25 17h20v7H25zM35 31l-7 10h8l-4 10 12-15h-8l4-5" />
          <path d="M66 13v12M74 13v12M70 25v14" />
          <path d="M61 39h18M66 39v13c0 4 8 4 8 0V39" />
        </>
      )}
      {type === "load" && (
        <>
          <path d="M25 18v30" />
          <path d="M31 22c-7-5-15 1-11 8 3 5 17 2 17 10 0 8-12 11-20 4" />
          <path d="M48 12 76 52" />
          <path d="M70 9 58 31h12l-8 24 19-32H68l9-14" />
        </>
      )}
    </svg>
  );
}

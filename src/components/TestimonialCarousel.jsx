import React, { useState } from "react";

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

const testimonialLogoMeta = {
  ferrariproperties: { name: "Ferrari Properties", descriptor: "Homes & investments", mark: "home" },
  urbannest: { name: "Urban Nest", descriptor: "Rental lifestyle communities", mark: "sprout" },
  greengate: { name: "GreenGate Residency", descriptor: "Low-carbon residential living", mark: "leafGate" },
  skylinerwa: { name: "Skyline Heights RWA", descriptor: "Resident welfare association", mark: "skyline" },
  metrohabitat: { name: "Metro Habitat", descriptor: "Managed living spaces", mark: "grid" },
  default: { name: "Ebee Partner", descriptor: "Residential charging community", mark: "grid" },
};

export function TestimonialCarousel({ className = "testimonial", id = "proof" }) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const activeTestimonial = testimonials[testimonialIndex];
  const logoKey = activeTestimonial.logo.toLowerCase().replace(/[^a-z]/g, "");
  const logoMeta = testimonialLogoMeta[logoKey] ?? testimonialLogoMeta.default;

  function changeTestimonial(direction) {
    setTestimonialIndex((currentIndex) => (currentIndex + direction + testimonials.length) % testimonials.length);
  }

  return (
    <section className={className} id={id} aria-label="Customer testimonials">
      <button className="testimonial-arrow testimonial-arrow-prev" type="button" aria-label="Previous testimonial" onClick={() => changeTestimonial(-1)}>
        <span aria-hidden="true">{"<"}</span>
      </button>
      <div className="testimonial-card">
        <div className={`testimonial-logo testimonial-brand-${logoKey}`}>
          <span className={`testimonial-logo-mark testimonial-logo-${logoKey}`} aria-hidden="true">
            <TestimonialMark type={logoMeta.mark} />
          </span>
          <span className="testimonial-logo-wordmark">
            <span className="testimonial-logo-name">{logoMeta.name}</span>
            <span className="testimonial-logo-descriptor">{logoMeta.descriptor}</span>
          </span>
        </div>
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
  );
}

function TestimonialMark({ type }) {
  if (type === "home") {
    return (
      <svg viewBox="0 0 64 56" aria-hidden="true">
        <path className="mark-fill" d="M8 27 32 6l24 21h-8v23H17V27z" />
        <path className="mark-reverse" d="M24 31h9v19h-9zM38 27h5v5h-5zM38 36h5v5h-5z" />
        <path className="mark-stroke" d="M8 52h49" />
      </svg>
    );
  }

  if (type === "sprout") {
    return (
      <svg viewBox="0 0 64 56" aria-hidden="true">
        <path className="mark-stroke mark-heavy" d="M13 48V12l28 36V12" />
        <path className="mark-fill mark-leaf" d="M39 13c7-9 15-6 19-2-4 9-13 12-19 7z" />
        <path className="mark-stroke" d="M38 24c4-8 9-11 17-13" />
      </svg>
    );
  }

  if (type === "leafGate") {
    return (
      <svg viewBox="0 0 64 56" aria-hidden="true">
        <path className="mark-stroke" d="M15 50V24h34v26M23 50V31h18v19M32 31v19" />
        <path className="mark-fill mark-leaf" d="M31 6c13 9 13 23 1 31C20 29 20 15 31 6z" />
        <path className="mark-reverse-stroke" d="M31 14v19" />
      </svg>
    );
  }

  if (type === "skyline") {
    return (
      <svg viewBox="0 0 64 56" aria-hidden="true">
        <path className="mark-fill" d="M9 50V26h11v24H9zm15 0V12h17v38H24zm21 0V30h10v20H45z" />
        <path className="mark-reverse" d="M29 19h4v5h-4zM36 19h4v5h-4zM29 29h4v5h-4zM36 29h4v5h-4z" />
        <path className="mark-stroke" d="M6 52h56" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 56" aria-hidden="true">
      <path className="mark-stroke" d="M12 14h40v38H12z" />
      <path className="mark-fill" d="M18 20h10v10H18zM36 20h10v10H36zM18 36h10v10H18zM36 36h10v10H36z" />
      <path className="mark-stroke" d="M12 14 22 6h40v38L52 52" />
    </svg>
  );
}

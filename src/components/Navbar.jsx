import React from "react";
import { useMegaMenu } from "../hooks/useMegaMenu.js";
import { navItems } from "../data/siteData.js";
import { withBase } from "../utils/routing.js";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";
import Masonry from "./Masonry.jsx";

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
  id: `mini-${index + 1}`,
  img: img,
  url: img,
  height: heroHeights[index],
}));

export function Navbar({ variant = "default" }) {
  const { activeMenu, mobileOpen, openMenu, closeMenu, toggleMenu, toggleMobile, closeMobile } = useMegaMenu();
  const isMinimal = variant === "minimal";

  return (
    <header className={`site-header ${isMinimal ? "site-header-minimal" : ""} ${mobileOpen ? "mobile-open" : ""}`} onMouseLeave={closeMenu}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href={withBase("/")} aria-label="EbeeCharge home">
          <img src={withBase("/ebee_charge_logo.png")} alt="ebee charge" style={{ height: "64px", width: "auto", margin: "-12px 0" }} />
        </a>

        <button className={`mobile-toggle ${isMinimal ? "minimal-toggle" : ""}`} type="button" aria-label="Open menu" aria-expanded={mobileOpen} onClick={toggleMobile}>
          <span></span>
          <span></span>
        </button>

        {!isMinimal && (
          <div className="nav-center">
            {navItems.map((item) => (
              <button
                className={`nav-item ${activeMenu === item.id ? "is-active" : ""}`}
                type="button"
                key={item.id}
                aria-expanded={activeMenu === item.id}
                onMouseEnter={() => openMenu(item.id)}
                onClick={() => toggleMenu(item.id)}
              >
                {item.label}
                <span className="chevron" aria-hidden="true"></span>
              </button>
            ))}
          </div>
        )}

        {!isMinimal && (
          <div className="nav-actions">
            <a href={withBase("/#dashboard")}>Partner Login</a>
            <a className="button button-small" href={withBase("/#audit")}>Book Audit</a>
          </div>
        )}
      </nav>

      <div className="mobile-menu" aria-hidden={!mobileOpen}>
        <div className="mobile-menu-scroll">
          {navItems.map((item) => (
            <section className="mobile-menu-section" key={item.id}>
              <h2>{item.label}</h2>
              <div className="mobile-menu-links">
                {getMobileLinks(item).map((link) => (
                  <a href={toPageHref(link.href)} key={`${item.id}-${link.label}`} onClick={closeMobile}>
                    <span>{link.label}</span>
                    {link.copy && <small>{link.copy}</small>}
                  </a>
                ))}
              </div>
            </section>
          ))}
          <div className="mobile-menu-actions">
            <a href={withBase("/#dashboard")} onClick={closeMobile}>Partner Login</a>
            <a className="button" href={withBase("/#audit")} onClick={closeMobile}>Book Audit</a>
          </div>
        </div>
      </div>

      {!isMinimal && (
        <div className={`mega ${activeMenu ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <section className={`mega-panel ${activeMenu === item.id ? "is-active" : ""}`} key={item.id} aria-label={`${item.label} menu`}>
              <MegaPanel item={item} />
            </section>
          ))}
        </div>
      )}
    </header>
  );
}

function getMobileLinks(item) {
  if (item.type === "simple" || item.type === "resources") {
    return item.links;
  }

  if (item.type === "products") {
    return item.products;
  }

  return item.columns.flatMap((column) => column.links);
}

function MegaPanel({ item }) {
  if (item.type === "simple") {
    return (
      <div className="mega-simple">
        {item.links.map((link) => <a href={toPageHref(link.href)} key={link.label}>{link.label}</a>)}
      </div>
    );
  }

  if (item.type === "products") {
    const productImages = {
      "Smart DB": smartDbImage,
      "Movable Charger": movableChargerImage,
    };

    return (
      <div className="mega-products">
        {item.products.map((product) => (
          <a className="mega-product" href={toPageHref(product.href)} key={product.label}>
            <img className="mega-product-image" src={productImages[product.label]} alt={product.label} loading="lazy" />
            <strong>{product.label}</strong>
            <small>{product.copy}</small>
          </a>
        ))}
      </div>
    );
  }

  if (item.type === "columns") {
    return (
      <div className="mega-columns">
        {item.columns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <a href={toPageHref(link.href)} key={link.label}>{link.label}</a>)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mega-resources">
      <div>
        <h3>Resources</h3>
        {item.links.map((link) => <a href={toPageHref(link.href)} key={link.label}>{link.label}</a>)}
      </div>
      <a className="featured-story" href={withBase("/resources/case-studies/20-percent-ev-mandate")}>
        <span className="story-collage" aria-hidden="true">
          <div className="mini-masonry-wrapper">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={false}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </span>
        <span>
          <strong>Turning the 20% EV mandate into resident delight</strong>
          <small>Read the deployment story</small>
        </span>
      </a>
    </div>
  );
}

function toPageHref(href) {
  return withBase(href.startsWith("#") ? `/${href}` : href);
}

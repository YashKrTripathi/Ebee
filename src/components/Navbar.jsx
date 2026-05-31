import React from "react";
import { useMegaMenu } from "../hooks/useMegaMenu.js";
import { navItems } from "../data/siteData.js";
import { withBase } from "../utils/routing.js";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";

export function Navbar() {
  const { activeMenu, mobileOpen, openMenu, closeMenu, toggleMenu, toggleMobile } = useMegaMenu();

  return (
    <header className={`site-header ${mobileOpen ? "mobile-open" : ""}`} onMouseLeave={closeMenu}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href={withBase("/")} aria-label="EbeeCharge home">
          <span className="brand-mark" aria-hidden="true"><span></span></span>
          <span>EBEE</span>
        </a>

        <button className="mobile-toggle" type="button" aria-label="Open menu" aria-expanded={mobileOpen} onClick={toggleMobile}>
          <span></span>
          <span></span>
        </button>

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

        <div className="nav-actions">
          <a href={withBase("/#dashboard")}>Partner Login</a>
          <a className="button button-small" href={withBase("/#audit")}>Book Audit</a>
        </div>
      </nav>

      <div className={`mega ${activeMenu ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <section className={`mega-panel ${activeMenu === item.id ? "is-active" : ""}`} key={item.id} aria-label={`${item.label} menu`}>
            <MegaPanel item={item} />
          </section>
        ))}
      </div>
    </header>
  );
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
      <a className="featured-story" href={withBase("/#mandate")}>
        <span className="story-collage" aria-hidden="true"><i></i><i></i><i></i></span>
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

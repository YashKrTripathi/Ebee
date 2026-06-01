import React from "react";
import { useMegaMenu } from "../hooks/useMegaMenu.js";
import { navItems } from "../data/siteData.js";
import { withBase } from "../utils/routing.js";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";
import logoImage from "../../assets/ebee-charge-logo.svg";

export function Navbar() {
  const { activeMenu, mobileOpen, openMenu, closeMenu, toggleMenu, toggleMobile, closeMobile } = useMegaMenu();

  return (
    <header className={`site-header ${mobileOpen ? "mobile-open" : ""}`} onMouseLeave={closeMenu}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href={withBase("/")} aria-label="EbeeCharge home">
          <img src={withBase("/ebee_charge_logo.png")} alt="ebee charge" style={{ height: "64px", width: "auto", margin: "-12px 0" }} />
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

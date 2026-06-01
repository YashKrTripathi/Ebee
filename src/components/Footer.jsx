import React from "react";
import { footerColumns } from "../data/siteData.js";
import { withBase } from "../utils/routing.js";
import logoImage from "../../assets/ebee-charge-logo.svg";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        {footerColumns.map((column) => (
          <details className="footer-section" key={column.title} open>
            <summary>{column.title}</summary>
            <div>
              {column.links.map((link) => <a href={toPageHref(link.href)} key={link.label}>{link.label}</a>)}
            </div>
          </details>
        ))}
      </div>
      <div className="footer-bottom">
        <a className="brand footer-brand" href={withBase("/")}>
          <img src={withBase("/ebee_charge_logo.png")} alt="ebee charge" style={{ height: "48px", width: "auto", margin: "-10px 0" }} />
        </a>
        <p>© 2026 EbeeCharge. All rights reserved.</p>
      </div>
    </footer>
  );
}

function toPageHref(href) {
  return withBase(href.startsWith("#") ? `/${href}` : href);
}

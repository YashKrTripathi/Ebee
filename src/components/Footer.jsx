import React from "react";
import { Send } from "lucide-react";
import { footerColumns } from "../data/siteData.js";
import { withBase } from "../utils/routing.js";

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
        <p>&copy; 2026 EbeeCharge. All rights reserved.</p>
        <a className="footer-social" href="https://www.linkedin.com/" aria-label="EbeeCharge social profile">
          <Send size={15} strokeWidth={2.4} />
        </a>
      </div>
    </footer>
  );
}

function toPageHref(href) {
  return withBase(href.startsWith("#") ? `/${href}` : href);
}

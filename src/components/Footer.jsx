import React from "react";
import { footerColumns } from "../data/siteData.js";
import { withBase } from "../utils/routing.js";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <a href={toPageHref(link.href)} key={link.label}>{link.label}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <a className="brand footer-brand" href={withBase("/")}>
          <span className="brand-mark"><span></span></span>
          <span>EBEE</span>
        </a>
        <p>© 2026 EbeeCharge. All rights reserved.</p>
      </div>
    </footer>
  );
}

function toPageHref(href) {
  return withBase(href.startsWith("#") ? `/${href}` : href);
}

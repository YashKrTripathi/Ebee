import React from "react";
import { products } from "../data/siteData.js";
import { withBase } from "../utils/routing.js";
import smartDbImage from "../../assets/SMART DB.png";
import movableChargerImage from "../../assets/mvch.png";

const productImages = {
  "smart-db-product": smartDbImage,
  "movable-charger": movableChargerImage,
};

const productLinks = {
  "smart-db-product": withBase("/products/smart-db"),
  "movable-charger": withBase("/products/movable-charger"),
};

export function ProductGrid() {
  return (
    <section className="product-cloud section-pad" id="products" aria-labelledby="ecosystem-title">
      <div className="product-grid reveal">
        {products.map((product) => (
          <article className="product-card product-showcase-card" id={product.id} key={product.title}>
            <a className="product-card-link" href={productLinks[product.id]}>
              <div className="product-render" aria-hidden="true">
                <img src={productImages[product.id]} alt="" loading="lazy" />
              </div>
              <div className="product-card-copy">
                <p>{product.eyebrow}</p>
                <h2>{product.title}</h2>
                <ul>
                  {product.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </a>
          </article>
        ))}
      </div>
      <div className="center-copy reveal">
        <p id="ecosystem-title">
          Ebee has two core infrastructure products: the Smart DB for everyday AC charging access, and the Movable Charger for flexible DC charging on demand.
        </p>
        <a className="tiny-button" href={withBase("/products/smart-db")}>Explore Smart DB</a>
      </div>
    </section>
  );
}

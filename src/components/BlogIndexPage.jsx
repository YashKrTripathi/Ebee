import React, { useState } from "react";
import { Footer } from "./Footer.jsx";
import { allBlogs } from "../data/blogs.js";
import { withBase } from "../utils/routing.js";

import waterImg from "../../assets/image 1.png";
import buildingImg from "../../assets/developer_blueprint.jpg";
import solarImg from "../../assets/image 5.png";
import chargingImg from "../../assets/image 4.png";

const themeImageMap = {
  water: waterImg,
  building: buildingImg,
  solar: solarImg,
  charging: chargingImg,
};

export function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredBlog = allBlogs[0];
  const gridBlogs = allBlogs.slice(1);

  // Derive unique categories
  const categories = ["All", ...new Set(allBlogs.map(b => b.category))];

  const filteredBlogs = gridBlogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="blog-index-page">
      <section className="blog-header-section">
        <h1>Blog</h1>
      </section>

      <section className="blog-featured-section">
        <a href={withBase(`/blog/${featuredBlog.slug}`)} className="featured-card">
          <div className="featured-content">
            <span className="blog-tag">{featuredBlog.category}</span>
            <h2>{featuredBlog.title}</h2>
            <p>{featuredBlog.excerpt}</p>
            <div className="blog-meta">
              <span>{featuredBlog.author}</span> • <span>{featuredBlog.date}</span> • <span>{featuredBlog.readTime}</span>
            </div>
          </div>
          <div className="featured-image">
            <img src={themeImageMap[featuredBlog.coverTheme] || waterImg} alt={featuredBlog.title} />
          </div>
        </a>
      </section>

      <section className="blog-filters-section">
        <div className="blog-categories">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`category-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="blog-search">
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <section className="blog-grid-section">
        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">
            {filteredBlogs.map(blog => (
              <a href={withBase(`/blog/${blog.slug}`)} key={blog.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={themeImageMap[blog.coverTheme] || waterImg} alt={blog.title} loading="lazy" />
                </div>
                <div className="blog-card-content">
                  <span className="blog-tag">{blog.category}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt.substring(0, 100)}...</p>
                  <div className="blog-meta">
                    <span>{blog.date}</span> • <span>{blog.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or category filter.</p>
          </div>
        )}
      </section>

      <section className="blog-load-more">
        <button className="button button-ghost">Load More Articles</button>
      </section>

      <section className="blog-newsletter">
        <div className="newsletter-content">
          <h2>Stay ahead of the curve</h2>
          <p>Get the latest insights on EV infrastructure, policy updates, and resident experience directly in your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

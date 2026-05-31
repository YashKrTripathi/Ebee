import React from "react";

const heroVideoSrc = new URL("../../assets/vid_mp_.mp4", import.meta.url).href;

export function HeroVideo() {
  return (
    <section className="hero hero-video" aria-labelledby="hero-title">
      <video
        className="hero-video-media"
        src={heroVideoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Ebee EV charging infrastructure preview"
      />
      <div className="hero-video-shade" aria-hidden="true"></div>
      <div className="hero-copy">
        <p className="eyebrow">Smart EV infrastructure for Indian properties</p>
        <h1 id="hero-title">Make every parking bay EV-ready.</h1>
        <p>
          Ebee connects Smart Distribution Boards, WhatsApp charging, UPI billing, and dynamic load management into one retrofit-friendly property platform.
        </p>
        <div className="hero-actions">
          <a className="button" href="#audit">Book Feasibility Audit</a>
          <a className="button button-secondary" href="#journey">See How It Works</a>
        </div>
      </div>
    </section>
  );
}

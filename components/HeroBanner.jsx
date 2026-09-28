import React from 'react';
import '@/hero-banner.css';

export default function HeroBanner() {
  return (
    <section className="hero-cinema">
      <div className="hero-cinema-center">
        <div className="hero-banner-brand">
          <div className="hero-banner-logo">🏢</div>
          <h2 className="hero-banner-tagline">Our Global Offices</h2>
          <div className="hero-banner-divider" />
        </div>
        <h1 className="hero-cinema-title">Connecting Across Continents</h1>
        <p className="hero-banner-subtitle">
          Discover our presence in India and Dubai. Click the pins on the map to view office details.
        </p>
      </div>
    </section>
  );
}

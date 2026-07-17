'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const TABS = [
  { id: 'rent', label: 'Rent', icon: 'fas fa-building' },
  { id: 'buy', label: 'Buy', icon: 'fas fa-clipboard-list' },
  { id: 'new', label: 'New Projects', icon: 'fas fa-house-chimney' },
  { id: 'invest', label: 'Invest', icon: 'fas fa-chart-line' },
];

const TRENDING = [
  { label: 'Mumbai', href: '/city?city=mumbai' },
  { label: 'Bangalore', href: '/city?city=bangalore' },
  { label: 'Pune', href: '/city?city=pune' },
  { label: 'Hyderabad', href: '/city?city=hyderabad' },
  { label: 'Gurgaon', href: '/listings' },
];

export default function HomeHero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('buy');
  const [query, setQuery] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/listings?q=${encodeURIComponent(q)}&type=${activeTab}`);
    } else {
      router.push(`/listings?type=${activeTab}`);
    }
  }

  return (
    <section className="hero-cinema hero-housing" id="heroBanner" aria-label="Property search hero">
      <div className="hero-cinema-media" aria-hidden="true">
        <video
          className="hero-cinema-video"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster="https://images.pexels.com/videos/3280311/pictures/preview-0.jpg"
        >
          <source src="https://cdn.pixabay.com/video/2026/07/09/362909_large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-cinema-shade" aria-hidden="true" />

      <div className="hero-cinema-center" id="heroSearchSection">
        <div className="hero-banner-brand">
          <span className="hero-banner-logo" aria-hidden="true">
            <i className="fas fa-home" />
          </span>
          <p className="hero-banner-tagline">Your Home. Your World. Your Way.</p>
          <span className="hero-banner-divider" aria-hidden="true" />
        </div>

        <h1 className="hero-cinema-title">
          Discover India&apos;s
          <br />
          <span>Finest Properties</span>
        </h1>
        <p className="hero-banner-subtitle">
          Buy, Rent or Invest in the best properties across top cities in India.
        </p>

        <div className="hero-cinema-tabs" role="tablist" aria-label="Property search type">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`hero-cinema-tab${activeTab === tab.id ? ' active' : ''}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon} aria-hidden="true" /> {tab.label}
            </button>
          ))}
        </div>

        <form className="hero-cinema-search" onSubmit={handleSearch}>
          <label className="visually-hidden" htmlFor="hero-search-input">
            City, locality, or project
          </label>
          <div className="hero-search-combo">
            <div className="hero-search-field">
              <div className="hero-search-input-wrap city-search-wrap">
                <i className="fas fa-location-dot" aria-hidden="true" />
                <input
                  className="hero-cinema-input"
                  id="hero-search-input"
                  type="text"
                  placeholder="Try Mumbai, Dubai, Goa..."
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <button className="hero-cinema-search-btn" type="submit">
              <i className="fas fa-magnifying-glass" aria-hidden="true" />
              <span>Search</span>
            </button>
          </div>
        </form>

        <div className="hero-cinema-meta">
          <div className="hero-cinema-trust">
            <span className="hero-trust-item">
              <i className="fas fa-home" aria-hidden="true" />
              <strong>850+</strong>
              <em>Listings</em>
            </span>
            <span className="hero-trust-item">
              <i className="fas fa-calendar-check" aria-hidden="true" />
              <strong>15+</strong>
              <em>Years</em>
            </span>
            <span className="hero-trust-item">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              <strong>12</strong>
              <em>Cities</em>
            </span>
            <span className="hero-trust-item">
              <i className="fas fa-users" aria-hidden="true" />
              <strong>50+</strong>
              <em>Developers</em>
            </span>
          </div>
          <div className="hero-housing-popular hero-cinema-trending">
            <span>Trending</span>
            {TRENDING.map((city) => (
              <Link key={city.label} href={city.href}>
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/listings?q=${encodeURIComponent(searchQuery)}`;
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-row">
            <div>
              <h2 className="footer-title">Discover Verified Properties Across India</h2>
              <p className="footer-subtitle">Explore curated homes, premium projects, and investment opportunities across India&apos;s top cities.</p>
            </div>
            <div className="footer-search">
              <form onSubmit={handleSearch} style={{ display: 'contents' }}>
                <input
                  type="text"
                  placeholder="Search city, project, builder"
                  aria-label="Search properties"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="footer-search-btn" type="submit">Search</button>
              </form>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-block">
              <h4>Popular Cities</h4>
              <div className="footer-links">
                <Link href="/explore">Properties in Mumbai</Link>
                <Link href="/explore">Properties in Pune</Link>
                <Link href="/explore">Properties in Bangalore</Link>
                <Link href="/explore">Properties in Hyderabad</Link>
                <Link href="/explore">Properties in Gurugram</Link>
                <Link href="/projects">Properties in Noida</Link>
              </div>
            </div>

            <div className="footer-block">
              <h4>Property Types</h4>
              <div className="footer-links">
                <Link href="/projects">2 BHK Apartments</Link>
                <Link href="/projects">3 BHK Apartments</Link>
                <Link href="/projects">Luxury Villas</Link>
                <Link href="/projects">Ready to Move Homes</Link>
                <Link href="/projects">New Launch Projects</Link>
                <Link href="/projects">Commercial Spaces</Link>
              </div>
            </div>

            <div className="footer-block">
              <h4>Real Estate Services</h4>
              <div className="footer-links">
                <Link href="/contact">Home Buying Assistance</Link>
                <Link href="/home-loan">Home Loan Assistance</Link>
                <Link href="/emi-calculator">EMI Calculator</Link>
                <Link href="/investment-opportunities">Investment Advisory</Link>
                <Link href="/market-insights">Market Insights</Link>
                <Link href="/design-your-house">Design Your House</Link>
                <Link href="/contact">Property Legal Check</Link>
                <Link href="/contact">Site Visit Booking</Link>
                <Link href="/contact">NRI Property Services</Link>
              </div>
            </div>

            <div className="footer-block">
              <h4>Quick Access</h4>
              <div className="footer-links">
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/compare-properties">Compare Properties</Link>
                <Link href="/developers">Developers</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms">Terms &amp; Conditions</Link>
              </div>
              <div className="footer-contact">
                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                <p><a href="mailto:support@inchbrickrealty.com">support@inchbrickrealty.com</a></p>
              </div>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">yt</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>

          <div className="footer-seo-strip">
            <Link href="/projects">Best Property Deals 2026</Link>
            <Link href="/developers">Top Builders in India</Link>
            <Link href="/explore">Buy Flats Near Metro</Link>
            <Link href="/explore">High ROI Investment Zones</Link>
            <Link href="/projects">RERA Approved Projects</Link>
            <Link href="/explore">Affordable Homes in Tier 1 Cities</Link>
            <Link href="/projects">Luxury Homes in India</Link>
            <Link href="/projects">Upcoming Township Projects</Link>
          </div>
        </div>

        <div className="footer-bottom">© 2026 Inchbrick Realty. All rights reserved.</div>
      </div>
    </footer>
  );
}

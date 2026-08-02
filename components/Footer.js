'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const AUTH_KEY = 'inchbrick-auth';

const GUEST_QUICK_LINKS = [
  { href: '/', label: 'Home', icon: 'fa-house', match: (p) => p === '/' },
  { href: '/projects', label: 'Projects', icon: 'fa-building', match: (p) => p.startsWith('/projects') || p.startsWith('/listings') },
  { href: '/events-expo', label: 'Expos', icon: 'fa-globe', match: (p) => p.startsWith('/events-expo') || p.startsWith('/event-detail') },
  { href: '/auth#login', label: 'Login', icon: 'fa-user', match: (p) => p.startsWith('/auth') || p.startsWith('/login') },
];

const AUTH_QUICK_LINKS = [
  { href: '/', label: 'Home', icon: 'fa-house', match: (p) => p === '/' },
  { href: '/projects', label: 'Projects', icon: 'fa-building', match: (p) => p.startsWith('/projects') || p.startsWith('/listings') },
  { href: '/saved-properties', label: 'Saved', icon: 'fa-heart', match: (p) => p.startsWith('/saved-properties') },
  { href: '/contact', label: 'Account', icon: 'fa-user-circle', match: (p) => p.startsWith('/contact') },
];

function readLoggedIn() {
  try {
    return Boolean(localStorage.getItem(AUTH_KEY));
  } catch {
    return false;
  }
}

export default function Footer() {
  const pathname = usePathname() || '/';
  const [searchQuery, setSearchQuery] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);

  useEffect(() => {
    const syncAuth = () => setLoggedIn(readLoggedIn());
    syncAuth();
    window.addEventListener('storage', syncAuth);
    window.addEventListener('inchbrick-auth-change', syncAuth);
    return () => {
      window.removeEventListener('storage', syncAuth);
      window.removeEventListener('inchbrick-auth-change', syncAuth);
    };
  }, []);

  useEffect(() => {
    const onAuthPage = pathname.startsWith('/auth') || pathname.startsWith('/login');
    setShowQuickNav(!onAuthPage);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('has-mobile-quick-nav', showQuickNav);
    return () => document.body.classList.remove('has-mobile-quick-nav');
  }, [showQuickNav]);

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/listings?q=${encodeURIComponent(searchQuery)}`;
    }
  }

  return (
    <>
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
                  <Link href="/home-buying-assistance">Home Buying Assistance</Link>
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
                  <Link href="/projects">Projects</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/careers">Careers</Link>
                  <Link href="/compare-properties">Compare Properties</Link>
                  <Link href="/developers">Developers</Link>
                  <Link href="/lifestyle">Lifestyle</Link>
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

      {showQuickNav && (
        <nav className="mobile-quick-nav" aria-label="Quick links">
          {(loggedIn ? AUTH_QUICK_LINKS : GUEST_QUICK_LINKS).map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={`mobile-quick-nav__link${active ? ' is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                <i className={`fas ${item.icon}`} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}

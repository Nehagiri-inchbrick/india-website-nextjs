'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  {
    key: 'listings',
    label: 'Property Listing',
    href: '/listings',
    hasMega: true,
    mega: {
      cols: [
        {
          label: 'Buy Properties',
          links: [
            { label: 'Flats & Apartments', href: '/listings' },
            { label: 'Independent Houses', href: '/listings' },
            { label: 'Luxury Villas', href: '/listings' },
            { label: 'Penthouse & Duplex', href: '/listings' },
            { label: 'Plots & Land', href: '/listings' },
          ],
        },
        {
          label: 'Rent Properties',
          links: [
            { label: 'Furnished Rentals', href: '/listings' },
            { label: 'Unfurnished Homes', href: '/listings' },
            { label: 'Co-living Spaces', href: '/listings' },
            { label: 'PG & Hostels', href: '/listings' },
            { label: 'Commercial Lease', href: '/listings' },
          ],
        },
        {
          label: 'By Configuration',
          links: [
            { label: '1 BHK Flats', href: '/listings' },
            { label: '2 BHK Flats', href: '/listings' },
            { label: '3 BHK Flats', href: '/listings' },
            { label: '4+ BHK Homes', href: '/listings' },
            { label: 'Studio Apartments', href: '/listings' },
          ],
        },
        {
          label: 'Popular Cities',
          links: [
            { label: 'Mumbai', href: '/listings' },
            { label: 'Bangalore', href: '/listings' },
            { label: 'Pune', href: '/listings' },
            { label: 'Delhi NCR', href: '/listings' },
            { label: 'Hyderabad', href: '/listings' },
          ],
        },
      ],
    },
  },
  {
    key: 'nri',
    label: 'NRI Corner',
    href: '/nri-corner',
  },
  {
    key: 'blog',
    label: 'Blog',
    href: '/blog',
    dropdown: [
      { label: 'Blog & Articles', href: '/blog' },
      { label: 'Market Insights', href: '/market-insights' },
    ],
  },
  {
    key: 'events',
    label: 'Global Expos',
    href: '/events-expo',
  },
  {
    key: 'services',
    label: 'Service',
    href: '/contact',
    hasServices: true,
    dropdown: [
      {
        label: 'Home Buying Assistance',
        href: '/contact',
        desc: 'End-to-end support from shortlist to booking',
        icon: 'fa-house-chimney',
      },
      {
        label: 'Home Loan Assistance',
        href: '/home-loan',
        desc: 'Best rates with leading banks & NBFCs',
        icon: 'fa-landmark',
      },
      {
        label: 'EMI Calculator',
        href: '/emi-calculator',
        desc: 'Plan monthly payments instantly',
        icon: 'fa-calculator',
      },
      {
        label: 'Compare Properties',
        href: '/compare-properties',
        desc: 'Side-by-side project comparison',
        icon: 'fa-code-compare',
      },
      {
        label: 'Saved Properties',
        href: '/saved-properties',
        desc: 'Your personal shortlist',
        icon: 'fa-heart',
      },
      {
        label: 'Investment Advisory',
        href: '/investment-opportunities',
        desc: 'ROI tools & growth corridors',
        icon: 'fa-chart-line',
      },
      {
        label: 'Market Insights',
        href: '/market-insights',
        desc: 'Trends, forecasts & expert views',
        icon: 'fa-newspaper',
      },
      {
        label: 'Design Your House',
        href: '/design-your-house',
        desc: 'Styles, floor plans & interiors',
        icon: 'fa-compass-drafting',
      },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNav, setOpenNav] = useState(null);
  const [moreOpen, setMoreOpen] = useState(false);

  // Active page mapping
  function getActiveKey() {
    if (pathname === '/' || pathname.startsWith('/home')) return 'home';
    if (pathname.startsWith('/listings')) return 'listings';
    if (pathname.startsWith('/nri')) return 'nri';
    if (pathname.startsWith('/blog') || pathname.startsWith('/market')) return 'blog';
    if (pathname.startsWith('/events')) return 'events';
    if (pathname.startsWith('/contact') || pathname.startsWith('/home-loan') || pathname.startsWith('/emi') || pathname.startsWith('/compare') || pathname.startsWith('/saved') || pathname.startsWith('/investment') || pathname.startsWith('/design')) return 'services';
    return '';
  }

  const activeKey = getActiveKey();

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!headerRef.current?.contains(e.target)) {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  function toggleMenuBtn(e) {
    e.stopPropagation();
    setMenuOpen((v) => !v);
    if (moreOpen) setMoreOpen(false);
  }

  useEffect(() => {
    setMenuOpen(false);
    setOpenNav(null);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('header-nav-open', menuOpen);
    return () => document.body.classList.remove('header-nav-open');
  }, [menuOpen]);

  function isMobile() {
    return typeof window !== 'undefined' && window.innerWidth <= 1024;
  }

  function handleNavClick(key, e) {
    if (!isMobile()) return;
    const item = NAV_ITEMS.find(n => n.key === key);
    if (!item?.dropdown && !item?.hasMega && !item?.hasServices) return;
    e.preventDefault();
    setOpenNav(prev => prev === key ? null : key);
  }

  return (
    <header className="header" id="header" ref={headerRef}>
      <div className="container nav">
        {/* Brand */}
        <div className="nav-brand">
          <Link href="/" className="logo-brand" aria-label="Inchbrick Realty Home">
            <img
              src="/img/inchbrick-logo.png"
              alt="Inchbrick Realty"
              className="logo-img"
              width={180}
              height={48}
            />
          </Link>
          <span className="nav-brand-divider" aria-hidden="true"></span>
        </div>

        {/* Nav Links */}
        <nav
          className={`nav-links${menuOpen ? ' open' : ''}`}
          id="navLinks"
          aria-label="Main navigation"
          onClick={(e) => {
            if (e.target.closest('a[href]')) {
              setMenuOpen(false);
              setOpenNav(null);
            }
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeKey === item.key;
            const isOpen = openNav === item.key;
            const hasDropdown = item.dropdown || item.hasMega;
            const isServices = item.hasServices;

            return (
              <div
                key={item.key}
                className={`nav-item${item.hasMega ? ' nav-item--mega' : ''}${isServices ? ' nav-item--services' : ''}${isActive ? ' active' : ''}${isOpen ? ' open' : ''}`}
                data-nav={item.key}
              >
                {hasDropdown ? (
                  <button
                    type="button"
                    className="nav-trigger"
                    onClick={(e) => handleNavClick(item.key, e)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className="nav-chevron" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ) : (
                  <Link href={item.href} className="nav-trigger">
                    {item.label}
                  </Link>
                )}

                {/* Mega dropdown */}
                {item.hasMega && (
                  <div className="nav-dropdown nav-dropdown--mega">
                    <div className="nav-dropdown-inner nav-mega">
                      <div className="nav-mega-grid">
                        {item.mega.cols.map((col, ci) => (
                          <div className="nav-mega-col" key={ci}>
                            <span className="nav-mega-label">{col.label}</span>
                            {col.links.map((link, li) => (
                              <Link href={link.href} key={li}>{link.label}</Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <aside className="nav-mega-feature">
                        <span className="nav-mega-badge">Verified Listings</span>
                        <strong>5,200+ Properties</strong>
                        <p>RERA-approved homes from India's most trusted developers. Zero brokerage on select listings.</p>
                        <Link href="/listings" className="nav-mega-cta">Browse All Properties →</Link>
                      </aside>
                    </div>
                  </div>
                )}

                {/* Services mega dropdown */}
                {isServices && item.dropdown && (
                  <div className="nav-dropdown nav-dropdown--services">
                    <div className="nav-dropdown-inner nav-services">
                      <div className="nav-services-head">
                        <div>
                          <span className="nav-services-kicker">Inchbrick Services</span>
                          <strong>Professional real estate support</strong>
                        </div>
                        <Link href="/contact" className="nav-services-cta">Talk to Expert →</Link>
                      </div>
                      <div className="nav-services-grid">
                        {item.dropdown.map((link, li) => (
                          <Link href={link.href} key={li} className="nav-service-card">
                            <span className="nav-service-ico" aria-hidden="true">
                              <i className={`fas ${link.icon}`}></i>
                            </span>
                            <span className="nav-service-copy">
                              <strong>{link.label}</strong>
                              <em>{link.desc}</em>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular dropdown */}
                {item.dropdown && !isServices && (
                  <div className="nav-dropdown">
                    <div className="nav-dropdown-inner">
                      {item.dropdown.map((link, li) => (
                        <Link
                          href={link.href}
                          key={li}
                          className={link.className || ''}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <div className="header-actions-group"></div>

          <Link href="/contact" className="header-cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 14V11C4 7.13 7.13 4 11 4H13C16.87 4 20 7.13 20 11V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
              <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
            </svg>
            <span>Talk to Expert</span>
            <svg className="header-cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <button
            className={`menu-btn${menuOpen ? ' active' : ''}`}
            type="button"
            id="menuBtn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={toggleMenuBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className={`header-more-menu${moreOpen ? ' open' : ''}`} id="headerMoreMenu">
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="mailto:support@inchbrickrealty.com">support@inchbrickrealty.com</a>
            <Link href="/auth">Login</Link>
            <Link href="/contact#contactForm" className="header-menu-callback">Get Callback</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

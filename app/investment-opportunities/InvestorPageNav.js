'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { INVESTOR_PAGE_NAV } from './investor-page-sections';

export default function InvestorPageNav() {
  const [activeId, setActiveId] = useState(INVESTOR_PAGE_NAV[0]?.id ?? '');
  const [pinned, setPinned] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const sectionIds = INVESTOR_PAGE_NAV.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const onScroll = () => {
      const hero =
        document.querySelector('.inv-hero-v3-fullscreen') ||
        document.querySelector('.inv-land-hero');
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      const height = navRef.current?.offsetHeight ?? navHeight;
      setPinned(heroBottom <= 8);

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      setScrollPct(maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0);

      // Active section: last section whose top is above the sticky nav line
      const marker = height + 24;
      let current = sectionIds[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [navHeight]);

  // Keep the active tab visible in the horizontal strip
  useEffect(() => {
    const list = listRef.current;
    if (!list || !activeId) return;
    const link = list.querySelector(`[href="#${activeId}"]`);
    if (link && typeof link.scrollIntoView === 'function') {
      link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeId]);

  const jump = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const height = navRef.current?.offsetHeight ?? 48;
    const top = el.getBoundingClientRect().top + window.scrollY - height - 12;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    setActiveId(id);
  }, []);

  return (
    <div
      className="inv-page-nav-slot"
      style={pinned ? { height: navHeight || undefined } : undefined}
    >
      <nav
        ref={navRef}
        className={`inv-page-nav${pinned ? ' is-pinned' : ''}`}
        aria-label="Investment page sections"
      >
        <div
          className="inv-page-nav-progress"
          style={{ transform: `scaleX(${scrollPct / 100})` }}
          aria-hidden="true"
        />
        <div className="inv-wrap inv-page-nav-inner">
          <span className="inv-page-nav-label">On this page</span>
          <ul className="inv-page-nav-list" ref={listRef}>
            {INVESTOR_PAGE_NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`inv-page-nav-link${activeId === item.id ? ' is-active' : ''}`}
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={(e) => jump(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

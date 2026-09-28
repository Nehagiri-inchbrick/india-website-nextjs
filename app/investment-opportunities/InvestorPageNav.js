'use client';

import { useCallback, useEffect, useState } from 'react';
import { INVESTOR_PAGE_NAV } from './investor-page-sections';

export default function InvestorPageNav() {
  const [activeId, setActiveId] = useState(INVESTOR_PAGE_NAV[0]?.id ?? '');
  const [pinned, setPinned] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const sectionIds = INVESTOR_PAGE_NAV.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const onScroll = () => {
      const hero = document.querySelector('.inv-land-hero');
      const navEl = document.querySelector('.inv-page-nav');
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      const navHeight = navEl?.offsetHeight ?? 0;
      setPinned(heroBottom <= navHeight + 8);

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      setScrollPct(maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0);

      const marker = window.scrollY + navHeight + 120;
      let current = sectionIds[0];
      for (const section of sections) {
        if (section.offsetTop <= marker) {
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
  }, []);

  const jump = useCallback((e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);
  }, []);

  return (
    <nav
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
        <ul className="inv-page-nav-list">
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
  );
}

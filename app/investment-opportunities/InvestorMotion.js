'use client';

import { useEffect } from 'react';

function reveal(el) {
  el.classList.add('is-visible');
  el.setAttribute('data-inv-visible', '1');
}

export default function InvestorMotion() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.inv-reveal'));
    if (!nodes.length) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      nodes.forEach(reveal);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -4% 0px', threshold: [0, 0.08, 0.15] }
    );

    nodes.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (inView) {
        reveal(el);
      } else {
        io.observe(el);
      }
    });

    // Client components re-render and wipe className — restore is-visible from data attr.
    const mo = new MutationObserver(() => {
      nodes.forEach((el) => {
        if (el.getAttribute('data-inv-visible') === '1' && !el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
        }
      });
    });
    nodes.forEach((el) => mo.observe(el, { attributes: true, attributeFilter: ['class'] }));

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

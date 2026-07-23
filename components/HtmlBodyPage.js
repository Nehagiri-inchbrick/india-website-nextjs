'use client';

import { useEffect, useMemo, useState } from 'react';

/**
 * Renders extracted HTML body content and loads page scripts
 * so Next.js pages match the static HTML designs.
 */
export default function HtmlBodyPage({ html, bodyClass = '', scriptSrc, scripts = [] }) {
  const scriptKey = useMemo(
    () => [...scripts, scriptSrc].filter(Boolean).join('|'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scriptSrc, JSON.stringify(scripts)]
  );

  // Strip inline <script> tags — they break hydration and often reference undefined globals
  const safeHtml = useMemo(
    () => String(html || '').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ''),
    [html]
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const classes = bodyClass.split(/\s+/).filter(Boolean);
    if (classes.length) document.body.classList.add(...classes);

    const list = scriptKey ? scriptKey.split('|') : [];
    const loaded = [];
    let cancelled = false;

    async function loadSequential() {
      for (const src of list) {
        if (cancelled || !src) continue;
        document
          .querySelectorAll(`script[data-html-page-src="${src}"]`)
          .forEach((el) => el.remove());

        await new Promise((resolve) => {
          const s = document.createElement('script');
          s.src = src + (src.includes('?') ? '&' : '?') + 'v=' + Date.now();
          s.async = false;
          s.dataset.htmlPageSrc = src;
          s.onload = () => resolve();
          s.onerror = () => resolve();
          document.body.appendChild(s);
          loaded.push(s);
        });
      }

      if (!cancelled && typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('html-page-scripts-ready'));
        if (typeof window.__inchbrickInitBrandShowcase === 'function') {
          window.__inchbrickInitBrandShowcase();
        }
        if (typeof window.__inchbrickInitEventsExpo === 'function') {
          window.__inchbrickInitEventsExpo();
        }
      }
    }

    loadSequential();

    return () => {
      cancelled = true;
      if (classes.length) document.body.classList.remove(...classes);
      loaded.forEach((s) => s.remove());
      list.forEach((src) => {
        document
          .querySelectorAll(`script[data-html-page-src="${src}"]`)
          .forEach((el) => el.remove());
      });
    };
  }, [mounted, bodyClass, scriptKey]);

  // Keep a single DOM node so script listeners / injected markup are not wiped
  // by a mounted-gated remount.
  return (
    <div
      className="html-body-page"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}

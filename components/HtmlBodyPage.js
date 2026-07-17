'use client';

import { useEffect, useMemo } from 'react';

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

  useEffect(() => {
    const classes = bodyClass.split(/\s+/).filter(Boolean);
    if (classes.length) document.body.classList.add(...classes);

    const list = scriptKey ? scriptKey.split('|') : [];
    const loaded = [];
    let cancelled = false;

    async function loadSequential() {
      for (const src of list) {
        if (cancelled || !src) continue;
        if (document.querySelector(`script[data-html-page-src="${src}"]`)) continue;
        await new Promise((resolve) => {
          const s = document.createElement('script');
          s.src = src;
          s.async = false;
          s.dataset.htmlPageSrc = src;
          s.onload = () => resolve();
          s.onerror = () => resolve();
          document.body.appendChild(s);
          loaded.push(s);
        });
      }
    }

    loadSequential();

    return () => {
      cancelled = true;
      if (classes.length) document.body.classList.remove(...classes);
      loaded.forEach((s) => s.remove());
    };
  }, [bodyClass, scriptKey]);

  return <div className="html-body-page" dangerouslySetInnerHTML={{ __html: html }} />;
}

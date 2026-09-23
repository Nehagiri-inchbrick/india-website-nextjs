'use client';

import { useEffect } from 'react';

function loadScript(src) {
  return new Promise((resolve) => {
    if (document.querySelector('script[data-global-src="' + src + '"]')) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.dataset.globalSrc = src;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

export default function GlobalScripts() {
  useEffect(() => {
    loadScript('/js/currency-apply.js');
  }, []);

  return null;
}

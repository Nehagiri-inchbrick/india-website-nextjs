'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuthSession } from '@/lib/inchbrick-auth';

/**
 * Public routes accessible without login:
 * - "/" (Who's exploring today? front page & login portal)
 * - "/index2" (Redirects to /)
 * - "/home" (Home page)
 */
export function isPublicRoute(pathname) {
  if (!pathname) return true;
  const path = pathname.split('?')[0].split('#')[0];
  if (path === '/' || path === '/home' || path === '/index2') return true;
  return false;
}

export default function AuthGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState({
    checking: true,
    authorized: false,
  });

  useEffect(() => {
    function checkAccess() {
      if (isPublicRoute(pathname)) {
        setStatus({ checking: false, authorized: true });
        return;
      }

      const session = getAuthSession();
      if (session) {
        setStatus({ checking: false, authorized: true });
      } else {
        setStatus({ checking: false, authorized: false });
        const redirectUrl = `/?redirect=${encodeURIComponent(pathname)}`;
        router.replace(redirectUrl);
      }
    }

    checkAccess();

    const handleAuthChange = () => {
      checkAccess();
    };

    window.addEventListener('inchbrick-auth-change', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('inchbrick-auth-change', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, [pathname, router]);

  // Intercept clicks on protected route links when not logged in to redirect straight to front login page (/)
  useEffect(() => {
    function handleDocumentClick(e) {
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:')
      ) {
        return;
      }

      // If user is logged in or destination is a public route, allow standard navigation
      if (getAuthSession() || isPublicRoute(href)) {
        return;
      }

      // Target page is protected and user is not logged in -> redirect immediately to front page login
      e.preventDefault();
      e.stopPropagation();
      router.push(`/?redirect=${encodeURIComponent(href)}`);
    }

    document.addEventListener('click', handleDocumentClick, true);
    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, [router]);

  if (status.checking) {
    return null;
  }

  if (!status.authorized) {
    return (
      <div
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          background: 'var(--bg-dark, #0b0f17)',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            border: '3px solid rgba(255, 255, 255, 0.1)',
            borderTopColor: '#c9a962',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '1.5rem',
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
          Authentication Required
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Please sign in on the front page to access this feature. Redirecting...
        </p>
      </div>
    );
  }

  return children;
}

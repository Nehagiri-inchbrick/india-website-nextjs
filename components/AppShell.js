'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthGuard from '@/components/AuthGuard';

export default function AppShell({ children }) {
  return (
    <>
      <Header />
      <main id="main-content">
        <AuthGuard>{children}</AuthGuard>
      </main>
      <Footer />
    </>
  );
}


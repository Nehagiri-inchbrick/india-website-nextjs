'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AppShell({ children }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

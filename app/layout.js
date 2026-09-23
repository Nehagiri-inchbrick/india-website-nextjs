import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import '@/styles/common.css';
import '@/styles/theme.css';
import '@/styles/layout.css';
import '../hero-banner.css';
import '@/styles/typography.css';
import AppShell from '@/components/AppShell';
import GlobalScripts from '@/components/GlobalScripts';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Inchbrick Realty - Find Your Dream Home',
  description: "Discover RERA-verified properties across India's top cities. Flats, villas, plots, and exclusive builder projects with zero brokerage.",
  keywords: 'real estate India, buy property, flats, villas, RERA, Inchbrick Realty',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={plusJakarta.variable}>
        <Script src="/js/currency.js" strategy="beforeInteractive" />
        <AppShell>{children}</AppShell>
        <GlobalScripts />
      </body>
    </html>
  );
}

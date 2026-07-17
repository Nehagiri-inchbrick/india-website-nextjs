import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import '@/styles/common.css';
import '@/styles/theme.css';
import '@/styles/layout.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../hero-banner.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
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
      <body className={`${plusJakarta.variable} ${playfair.variable}`}>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

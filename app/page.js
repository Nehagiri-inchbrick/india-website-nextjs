import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/home';
import '@/styles/home-inline.css';
import '@/styles/homes-deals.css';
import '@/styles/nri-section.css';
import '@/styles/client-video-mobile.css';

export const metadata = {
  title: 'Inchbrick Realty - Find Your Dream Home in India',
  description: "Discover RERA-verified properties across India's top cities. Flats, villas, plots, and exclusive builder projects.",
};

export default function HomePage() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={['/js/brand-showcase.js', '/js/mood-slider.js', '/js/cities-data.js', '/js/city-search.js', '/js/hot-deals.js', '/js/home-reviews-link.js']}
    />
  );
}

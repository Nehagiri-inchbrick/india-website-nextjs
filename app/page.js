import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/home';
import '@/styles/home-inline.css';
import '@/styles/homes-deals.css';
import '@/styles/nri-section.css';

export const metadata = {
  title: 'Inchbrick Realty - Find Your Dream Home in India',
  description: "Discover RERA-verified properties across India's top cities. Flats, villas, plots, and exclusive builder projects.",
};

export default function HomePage() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={['/js/cities-data.js', '/js/city-search.js']}
    />
  );
}

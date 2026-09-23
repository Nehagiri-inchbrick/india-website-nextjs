import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/recent-views';
import '@/styles/recent-views.css';

export const metadata = {
  title: 'Recent Views | Inchbrick Realty',
  description: 'Recently viewed properties on your device — pick up your home search where you left off.',
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={[
        '/js/listings-data.js',
        '/js/recent-views-store.js',
        '/js/saved-store.js',
        '/js/recent-views.js',
      ]}
    />
  );
}

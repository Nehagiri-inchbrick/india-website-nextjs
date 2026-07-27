import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/reviews';
import '@/styles/testimonials.css';

export const metadata = {
  title: 'Client Reviews | Inchbrick Realty',
  description: 'Read verified buyer reviews, video stories, and purchase journeys from Inchbrick Realty clients.',
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={['/js/testimonials.js']}
    />
  );
}

import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/event-detail';
import '@/styles/event-detail.css';

export const metadata = {
  title: 'Event Detail | Inchbrick Realty',
  description: 'Property expo details, schedule, registration, and venue information.',
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={['/js/events-data.js', '/js/event-detail.js']}
    />
  );
}

import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/nri-faq';
import '@/styles/faq.css';
import '@/styles/nri-faq.css';

export const metadata = {
  title: 'NRI FAQ | Inchbrick Realty',
  description:
    'Frequently asked questions for NRIs buying property in India — FEMA, documentation, remittance, POA, taxation, and home loans.',
};

export default function Page() {
  return <HtmlBodyPage html={html} bodyClass={bodyClass} scripts={[]} />;
}

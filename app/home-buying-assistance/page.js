import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/home-buying-assistance';
import '@/styles/home-buying-assistance.css';

export const metadata = {
  title: 'Home Buying Assistance | Inchbrick Realty',
  description:
    'End-to-end home buying support — property shortlisting, site visits, negotiation, paperwork, and RERA-guided decisions.',
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={['/js/home-buying-assistance.js']}
    />
  );
}

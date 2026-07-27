import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/faq';
import '@/styles/faq.css';

export const metadata = {
  title: 'FAQ | Inchbrick Realty',
  description:
    'Frequently asked questions about buying property, home loans, NRI support, RERA verification, and Inchbrick Realty services.',
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={[]}
    />
  );
}

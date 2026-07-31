import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/terms';
import '@/styles/legal.css';

export const metadata = {
  title: 'Terms & Conditions | Inchbrick Realty',
  description:
    'Terms and Conditions for using Inchbrick Realty website and property advisory services.',
};

export default function Page() {
  return <HtmlBodyPage html={html} bodyClass={bodyClass} scripts={[]} />;
}

import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/privacy-policy';
import '@/styles/legal.css';

export const metadata = {
  title: 'Privacy Policy | Inchbrick Realty',
  description:
    'Privacy Policy for Inchbrick Realty — how we collect, use, and protect your personal information.',
};

export default function Page() {
  return <HtmlBodyPage html={html} bodyClass={bodyClass} scripts={[]} />;
}

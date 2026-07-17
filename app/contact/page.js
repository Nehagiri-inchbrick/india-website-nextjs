import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/contact';
import '@/styles/contact-banner.css';
import '@/styles/contact-inline.css';

export const metadata = {
  title: "Contact Us | Inchbrick Realty",
  description: "Contact Inchbrick Realty.",
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

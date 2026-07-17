import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/about';
import '@/styles/about.css';

export const metadata = {
  title: "About Us | Inchbrick Realty",
  description: "About Inchbrick Realty.",
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

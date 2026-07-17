import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/careers';
import '@/styles/careers.css';

export const metadata = {
  title: "Careers | Inchbrick Realty",
  description: "Careers at Inchbrick Realty.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/careers.js"]}
    />
  );
}

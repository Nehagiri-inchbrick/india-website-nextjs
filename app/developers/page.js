import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/developers';
import '@/styles/developers.css';

export const metadata = {
  title: "Developers | Inchbrick Realty",
  description: "Trusted developers and builders across India.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/developers-data.js","/js/developers.js"]}
    />
  );
}

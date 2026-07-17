import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/listings';
import '@/styles/listings.css';

export const metadata = {
  title: "Property Listings | Inchbrick Realty",
  description: "Browse verified property listings.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/listings-data.js","/js/listings.js"]}
    />
  );
}

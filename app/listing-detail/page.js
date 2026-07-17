import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/listing-detail';
import '@/styles/listing-detail.css';

export const metadata = {
  title: "Property Detail | Inchbrick Realty",
  description: "View property details.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/listings-data.js","/js/listing-detail.js"]}
    />
  );
}

import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/location-detail';
import '@/styles/location-detail.css';

export const metadata = {
  title: "Location Detail | Inchbrick Realty",
  description: "Explore locality insights and properties.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/locations-data.js","/js/location-detail.js"]}
    />
  );
}

import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/compare-properties';
import '@/styles/compare-properties.css';

export const metadata = {
  title: "Compare Properties | Inchbrick Realty",
  description: "Compare properties side by side.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/listings-data.js","/js/compare-properties.js"]}
    />
  );
}

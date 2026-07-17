import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/nri-corner';
import '@/styles/nri-corner.css';

export const metadata = {
  title: "NRI Corner | Inchbrick Realty",
  description: "NRI property buying guide for India.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/nri-corner.js"]}
    />
  );
}

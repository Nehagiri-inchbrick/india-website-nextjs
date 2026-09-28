import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/nri-corner';
import '@/styles/nri-corner.css';

export const metadata = {
  title: "NRI Corner | Invest in India From Anywhere | Inchbrick Realty",
  description:
    "Discover, compare and invest in premium Indian properties with complete NRI support — from Dubai, London, Singapore, and beyond.",
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

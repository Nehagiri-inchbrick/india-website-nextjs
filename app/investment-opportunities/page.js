import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/investment-opportunities';
import '@/styles/investment-opportunities.css';

export const metadata = {
  title: "Investment Opportunities | Inchbrick Realty",
  description: "Real estate investment opportunities across India.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/investment-opportunities.js"]}
    />
  );
}

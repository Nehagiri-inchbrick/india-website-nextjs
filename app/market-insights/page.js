import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/market-insights';
import '@/styles/market-insights.css';

export const metadata = {
  title: "Market Insights | Inchbrick Realty",
  description: "Property news, market reports, price trends, forecasts, and expert opinions.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/market-insights.js"]}
    />
  );
}

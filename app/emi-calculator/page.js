import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/emi-calculator';
import '@/styles/emi-calculator.css';

export const metadata = {
  title: "EMI Calculator | Inchbrick Realty",
  description: "Calculate your home loan EMI.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/emi-calculator.js"]}
    />
  );
}

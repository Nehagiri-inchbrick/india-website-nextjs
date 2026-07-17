import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/home-loan';
import '@/styles/home-loan.css';

export const metadata = {
  title: "Home Loan Assistance | Inchbrick Realty",
  description: "Home loan assistance and guidance.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/home-loan.js"]}
    />
  );
}

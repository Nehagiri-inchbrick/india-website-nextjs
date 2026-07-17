import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/design-your-house';
import '@/styles/design-your-house.css';

export const metadata = {
  title: "Design Your Own House | Inchbrick Realty",
  description: "Design your dream home with Inchbrick — house styles, floor plans, interiors, and consultation.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/design-your-house.js"]}
    />
  );
}

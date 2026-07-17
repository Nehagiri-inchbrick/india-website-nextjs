import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/lifestyle';
import '@/styles/lifestyle.css';

export const metadata = {
  title: "Lifestyle | Inchbrick Realty",
  description: "Lifestyle destinations and living experiences.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/lifestyle.js"]}
    />
  );
}

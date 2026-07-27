import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/lifestyle-detail';
import '@/styles/lifestyle.css';

export const metadata = {
  title: "Lifestyle Collection | Inchbrick Realty",
  description: "Explore curated lifestyle collections — spiritual living, luxury, waterfront, and more.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/lifestyle-detail.js"]}
    />
  );
}

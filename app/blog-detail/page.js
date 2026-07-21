import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/blog-detail';
import '@/styles/blog-detail.css';

export const metadata = {
  title: "Blog Article | Inchbrick Realty",
  description: "Real estate insights and market guides from Inchbrick Realty.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/blog-data.js", "/js/blog-detail.js"]}
    />
  );
}

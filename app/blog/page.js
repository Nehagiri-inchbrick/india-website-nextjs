import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/blog';
import '@/styles/blog.css';

export const metadata = {
  title: "Blog & Insights | Inchbrick Realty",
  description: "Real estate blogs and insights.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/blog-data.js","/js/blog.js"]}
    />
  );
}

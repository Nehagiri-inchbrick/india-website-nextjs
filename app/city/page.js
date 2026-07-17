import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/city';
import '@/styles/city.css';

export const metadata = {
  title: "City Guide | Inchbrick Realty",
  description: "City real estate investment guides.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/cities-data.js","/js/city-search.js","/js/city.js"]}
    />
  );
}

import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/saved-properties';
import '@/styles/saved-properties.css';

export const metadata = {
  title: "Saved Properties | Inchbrick Realty",
  description: "Your saved property shortlist.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/saved-store.js","/js/saved-properties.js"]}
    />
  );
}

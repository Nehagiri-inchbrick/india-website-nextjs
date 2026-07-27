import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/developer-detail';
import '@/styles/developer-detail.css';

export const metadata = {
  title: "Developer Profile | Inchbrick Realty",
  description: "View developer profile details.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/developers-data.js", "/js/developer-detail.js"]}
    />
  );
}

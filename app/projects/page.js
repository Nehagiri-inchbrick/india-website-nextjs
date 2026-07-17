import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/projects';
import '@/styles/projects.css';
import '@/styles/projects-inline.css';

export const metadata = {
  title: "Projects | Inchbrick Realty",
  description: "Explore verified real estate projects.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/projects-data.js","/js/projects.js"]}
    />
  );
}

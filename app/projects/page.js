import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/projects';
import '@/styles/projects.css';
import '@/styles/projects-inline.css';

export const metadata = {
  title: 'Projects | Inchbrick Realty',
  description:
    'Explore featured, ready-to-move, under-construction, new launch, luxury, commercial, and township projects across India.',
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

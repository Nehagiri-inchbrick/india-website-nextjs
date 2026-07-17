import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/events-expo';
import '@/styles/events-expo.css';

export const metadata = {
  title: "Events & Expo | Inchbrick Realty",
  description: "Upcoming property events and expos.",
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={["/js/events-data.js","/js/events-expo.js"]}
    />
  );
}

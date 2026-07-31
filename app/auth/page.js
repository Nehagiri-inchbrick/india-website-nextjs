import HtmlBodyPage from '@/components/HtmlBodyPage';
import { html, bodyClass } from '@/lib/html-bodies/auth';
import '@/styles/auth.css';

export const metadata = {
  title: 'Login & Register | Inchbrick Realty',
  description:
    'Sign in or create an Inchbrick Realty account to save properties, compare projects, and manage enquiries.',
};

export default function Page() {
  return (
    <HtmlBodyPage
      html={html}
      bodyClass={bodyClass}
      scripts={['/js/auth.js']}
    />
  );
}

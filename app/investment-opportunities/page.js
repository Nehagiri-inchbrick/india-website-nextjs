import InvestorHub from './InvestorHub';
import '@/styles/investment-opportunities.css';

export const metadata = {
  title: 'Investment Opportunities | Inchbrick Realty',
  description:
    'Compare markets, match projects, model payments, and preview ROI — one streamlined investment hub for India and Dubai.',
};

export default function Page() {
  return <InvestorHub />;
}

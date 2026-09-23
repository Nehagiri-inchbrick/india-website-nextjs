import InvestorHub from './InvestorHub';
import '@/styles/investment-opportunities.css';

export const metadata = {
  title: 'Investment Opportunities | Inchbrick Realty',
  description:
    'Growth corridors, market insights, new launches, top 10 projects, and an investment calculator for Indian real estate.',
};

export default function Page() {
  return <InvestorHub />;
}

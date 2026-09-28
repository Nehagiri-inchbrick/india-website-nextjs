import InvestorLeadSection from './InvestorLeadSection';
import InvestorMotion from './InvestorMotion';
import InvestorHeroSection from './InvestorHeroSection';
import InvestorPageNav from './InvestorPageNav';
import InvestorCityCompareSection from './InvestorCityCompareSection';
import InvestorPopularAreasSection from './InvestorPopularAreasSection';
import InvestorMarketGrowthSection from './InvestorMarketGrowthSection';
import InvestorTopProjectsSection from './InvestorTopProjectsSection';
import InvestorCompareProjectsSection from './InvestorCompareProjectsSection';
import InvestorPaymentPlanSection from './InvestorPaymentPlanSection';
import InvestorTransparentPricingSection from './InvestorTransparentPricingSection';
import InvestorBuildInvestmentSection from './InvestorBuildInvestmentSection';
import InvestorGrowthVisualizer from './InvestorGrowthVisualizer';
import InvestorJourneySection from './InvestorJourneySection';
import { INVESTOR_PAGE_CHAPTERS } from './investor-page-sections';

const [markets, projects, discover, partner] = INVESTOR_PAGE_CHAPTERS;

export default function InvestorHub() {
  return (
    <div className="inv-page inv-page-land">
      <InvestorMotion />

      <InvestorHeroSection />

      <InvestorPageNav />

      <div className="inv-land-chapter" data-chapter={markets.id}>
        <InvestorCityCompareSection />
        <InvestorTransparentPricingSection />
        <InvestorPopularAreasSection />
        <InvestorMarketGrowthSection />
      </div>

      <div className="inv-land-chapter inv-land-chapter--soft" data-chapter={projects.id}>
        <InvestorTopProjectsSection />
        <InvestorCompareProjectsSection />
      </div>

      <div className="inv-land-chapter" data-chapter={discover.id}>
        <InvestorBuildInvestmentSection />
        <InvestorPaymentPlanSection />
        <InvestorGrowthVisualizer />
      </div>

      <div className="inv-land-chapter inv-land-chapter--partner" data-chapter={partner.id}>
        <InvestorJourneySection />
        <InvestorLeadSection />
      </div>
    </div>
  );
}

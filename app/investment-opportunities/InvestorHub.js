import InvestorLeadSection from './InvestorLeadSection';
import InvestorMotion from './InvestorMotion';
import InvestorHeroSection from './InvestorHeroSection';
import InvestorHeroSearchResults from './InvestorHeroSearchResults';
import InvestorCityCompareSection from './InvestorCityCompareSection';
import InvestorPopularAreasSection from './InvestorPopularAreasSection';
import InvestorMarketGrowthSection from './InvestorMarketGrowthSection';
import InvestorTopProjectsSection from './InvestorTopProjectsSection';
import InvestorCompareProjectsSection from './InvestorCompareProjectsSection';
import InvestorPaymentPlanSection from './InvestorPaymentPlanSection';
import InvestorTransparentPricingSection from './InvestorTransparentPricingSection';
import InvestorGrowthVisualizer from './InvestorGrowthVisualizer';
import InvestorJourneySection from './InvestorJourneySection';
import { INVESTOR_PAGE_CHAPTERS } from './investor-page-sections';

const [markets, projects, discover, partner] = INVESTOR_PAGE_CHAPTERS;

export default function InvestorHub() {
  return (
    <div className="inv-page inv-page-land">
      <InvestorMotion />

      <InvestorHeroSection />

      <div className="inv-land-chapter" data-chapter={markets.id}>
        <InvestorHeroSearchResults />
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

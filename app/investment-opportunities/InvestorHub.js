import InvestorLeadSection from './InvestorLeadSection';
import InvestorMotion from './InvestorMotion';
import InvestorHeroSection from './InvestorHeroSection';
import InvestorPageNav from './InvestorPageNav';
import InvestorHeroSearchResults from './InvestorHeroSearchResults';
import InvestorCityGrowthShowcaseSection from './InvestorCityGrowthShowcaseSection';
import InvestorPopularAreasSection from './InvestorPopularAreasSection';
import InvestorMarketGrowthSection from './InvestorMarketGrowthSection';
import InvestorTopProductsSection from './InvestorTopProductsSection';
import InvestorPicksSection from './InvestorPicksSection';
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

      <div className="inv-post-hero" aria-label="City growth, products, and investor picks">
        <InvestorCityGrowthShowcaseSection />
        <InvestorTopProductsSection />
        <InvestorPicksSection />
      </div>

      <InvestorPageNav />

      <div className="inv-land-chapter" data-chapter={markets.id}>
        <InvestorHeroSearchResults />
        <InvestorTransparentPricingSection />
        <InvestorPopularAreasSection />
        <InvestorMarketGrowthSection />
      </div>

      <div className="inv-land-chapter inv-land-chapter--soft" data-chapter={projects.id}>
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

import { INVESTOR_TRANSPARENT_PRICING } from './investor-landing-data';

export default function InvestorTransparentPricingSection() {
  const content = INVESTOR_TRANSPARENT_PRICING;

  return (
    <section
      className="inv-pricing-trust inv-land-block inv-reveal"
      id="transparent-pricing"
      aria-labelledby="inv-pricing-trust-title"
    >
      <div className="inv-pricing-trust-bg" aria-hidden="true" />
      <div className="inv-wrap inv-pricing-trust-inner">
        <div className="inv-pricing-trust-copy">
          <h2 id="inv-pricing-trust-title">{content.title}</h2>
          <p className="inv-pricing-trust-tagline">{content.tagline}</p>
        </div>
        <ul className="inv-pricing-trust-pills" aria-label="Pricing commitments">
          {content.points.map((point) => (
            <li key={point.label}>
              <span className="inv-pricing-trust-pill">
                <i className={`fas ${point.icon}`} aria-hidden="true" />
                {point.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function InvestorLeadSection() {
  return (
    <section className="inv-final-cta inv-creative inv-creative--cta inv-reveal" id="invest-cta" aria-labelledby="inv-final-cta-title">
      <div className="inv-final-cta-bg" aria-hidden="true" />
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-final-cta-inner inv-creative-inner">
        <h2 id="inv-final-cta-title">Ready to Explore Your Next Investment?</h2>
        <p className="inv-final-cta-sub">
          Tell us your ticket size and goals — we&apos;ll shortlist verified opportunities built around you.
        </p>
        <div className="inv-final-cta-actions">
          <Link href="/contact#contactForm" className="inv-btn inv-btn-gold inv-btn-shine inv-final-cta-btn">
            Get Personalised Opportunities
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
          <Link href="/contact#contactForm" className="inv-btn inv-final-cta-btn-outline">
            Talk to an Investment Advisor
          </Link>
        </div>
        <p className="inv-final-cta-note">
          <i className="fas fa-shield-halved" aria-hidden="true" />
          RERA-verified projects · No obligation consultation
        </p>
      </div>
    </section>
  );
}

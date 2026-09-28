import { INVESTMENT_JOURNEY } from './investor-landing-data';

export default function InvestorJourneySection() {
  return (
    <section
      className="inv-journey inv-creative inv-creative--timeline inv-land-block inv-reveal"
      id="investment-journey"
      aria-labelledby="inv-journey-title"
    >
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-journey-head inv-mock-section-head inv-mock-section-head--center">
          <p className="inv-mock-eyebrow">Your Investment Journey</p>
          <h2 id="inv-journey-title">From First Conversation to Ownership</h2>
          <p className="inv-journey-lead">
            A clear, guided path so first-time investors always know what comes next.
          </p>
        </header>

        <div className="inv-journey-stage">
          <div className="inv-journey-rail" aria-hidden="true">
            <span className="inv-journey-rail-bg" />
            <span className="inv-journey-rail-fill" />
            <span className="inv-journey-rail-pulse" />
          </div>

          <ol className="inv-journey-flow">
            {INVESTMENT_JOURNEY.map((item, i) => (
              <li key={item.title} className="inv-journey-item" style={{ '--inv-journey-i': i }}>
                <article className="inv-journey-step">
                  <span className="inv-journey-num">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
                {i < INVESTMENT_JOURNEY.length - 1 ? (
                  <span className="inv-journey-connector" aria-hidden="true">
                    <i className="fas fa-arrow-down inv-journey-connector-down" />
                    <i className="fas fa-chevron-right inv-journey-connector-right" />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

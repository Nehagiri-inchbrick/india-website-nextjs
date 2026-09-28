import { WHY_INVEST_WITH_US } from './investor-landing-data';

export default function InvestorWhySection() {
  return (
    <section className="inv-why-us inv-land-block inv-reveal" aria-labelledby="inv-why-us-title">
      <div className="inv-wrap">
        <header className="inv-mock-section-head inv-mock-section-head--center">
          <h2 id="inv-why-us-title">Why Invest With Us?</h2>
        </header>
        <ul className="inv-why-us-grid">
          {WHY_INVEST_WITH_US.map((item, i) => (
            <li key={item.title}>
              <article
                className="inv-why-us-card"
                style={{ '--inv-why-i': i }}
                tabIndex={0}
              >
                <span className="inv-why-us-ico" aria-hidden="true">
                  <i className={`fas ${item.icon}`} />
                </span>
                <h3>{item.title}</h3>
                <p className="inv-why-us-detail">{item.copy}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

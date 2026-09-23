import Link from 'next/link';
import InvestorLeadSection from './InvestorLeadSection';
import InvestorMotion from './InvestorMotion';
import InvestorTrendCarousel from './InvestorTrendCarousel';
import {
  EXPO_PROMO,
  HOT_DEMAND,
  INSIGHT_LANDING,
  LANDING_HERO_BG,
  LANDING_HERO_FEATURES,
  TRUST_PILLARS,
} from './investor-landing-data';
import { LAUNCHES, OPPORTUNITIES, TOP10, UPCOMING } from './investor-data';

const TOP10_PANEL =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80';

export default function InvestorHub() {
  return (
    <div className="inv-page inv-page-land">
      <InvestorMotion />

      <section className="inv-land-hero">
        <div className="inv-land-hero-bg" style={{ backgroundImage: `url('${LANDING_HERO_BG}')` }} aria-hidden="true" />
        <div className="inv-land-hero-shade" aria-hidden="true" />
        <div className="inv-wrap inv-land-hero-layout">
          <div className="inv-land-hero-inner inv-reveal">
            <h1>
              Your dream property in <em>India</em> awaits
            </h1>
            <p className="inv-land-hero-lead">
              Premium apartments, luxury villas &amp; high-yield investment opportunities across India&apos;s
              leading corridors — curated by Inchbrick Realty.
            </p>
            <ul className="inv-land-hero-feats">
              {LANDING_HERO_FEATURES.map((f) => (
                <li key={f.label}>
                  <span className="inv-land-feat-ico">
                    <i className={`fas ${f.icon}`} aria-hidden="true" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <div className="inv-land-hero-actions">
              <Link href="#launches" className="inv-btn inv-btn-gold">
                Explore properties
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link href="/home" className="inv-btn inv-land-btn-outline">
                <i className="fas fa-play" aria-hidden="true" />
                Watch video
              </Link>
            </div>
          </div>
          <p className="inv-land-hero-vertical" aria-hidden="true">
            Live · Invest · Grow
          </p>
        </div>
      </section>

      <section className="inv-land-expo-wrap inv-reveal">
        <div className="inv-wrap">
          <Link href={EXPO_PROMO.href} className="inv-land-expo-strip">
            <span className="inv-land-expo-thumb">
              <img src={EXPO_PROMO.img} alt="" />
              <span className="inv-land-expo-brand-mark">{EXPO_PROMO.brand}</span>
            </span>
            <span className="inv-land-expo-text">
              <span className="inv-land-expo-kicker">{EXPO_PROMO.kicker}</span>
              <strong>{EXPO_PROMO.title}</strong>
              <span>
                {EXPO_PROMO.date} · {EXPO_PROMO.time} · {EXPO_PROMO.place}
              </span>
            </span>
            <span className="inv-btn inv-btn-gold inv-land-expo-btn">
              Learn more
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      <InvestorTrendCarousel
        id="launches"
        theme="launch"
        titleBefore="Newly"
        titleAccent="launched"
        description="Fresh inventory from trusted developers — early pricing and launch benefits."
        badgeLabel="New launch"
        badgeIcon="fa-star"
        ariaLabel="Newly launched projects"
        items={LAUNCHES.map((item) => ({
          key: item.name,
          name: item.name,
          loc: item.loc,
          price: item.price,
          status: item.type || item.tag,
          img: item.img,
          badge: item.tag === 'New Launch' ? 'New launch' : item.tag || 'New launch',
        }))}
      />

      <InvestorTrendCarousel
        id="top10"
        layout="trending-panel"
        theme="trending"
        titleBefore="Top 10"
        titleAccent="projects"
        description="Investor favourites ranked on liquidity, developer record, and corridor momentum."
        panelImage={TOP10_PANEL}
        badgeIcon="fa-fire"
        ariaLabel="Top 10 investment projects"
        items={TOP10.map((item) => ({
          key: String(item.rank),
          name: item.name,
          loc: item.loc,
          price: item.price,
          status: item.type,
          img: item.img,
          rank: item.rank,
        }))}
      />

      <InvestorTrendCarousel
        id="upcoming"
        theme="launch"
        titleBefore="Upcoming"
        titleAccent="projects"
        description="Pre-launch and pipeline assets — register interest before public release."
        badgeLabel="Upcoming"
        badgeIcon="fa-clock"
        ariaLabel="Upcoming projects"
        items={UPCOMING.map((item) => ({
          key: item.id,
          name: item.name,
          loc: item.loc,
          price: item.price,
          status: item.status,
          img: item.img,
        }))}
      />

      <section className="inv-land-trust inv-land-trust--dark inv-reveal">
        <div className="inv-wrap inv-land-trust-grid">
          <div className="inv-land-trust-copy">
            <h2>Your trusted real estate partner</h2>
            <div className="inv-land-trust-pillars">
              {TRUST_PILLARS.map((p) => (
                <article key={p.title}>
                  <span className="inv-land-trust-ico">
                    <i className={`fas ${p.icon}`} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="inv-land-trust-visual">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
              alt=""
            />
            <div className="inv-land-trust-overlay">
              <h3>
                Invest today,
                <br />
                build tomorrow
              </h3>
              <Link href="/contact" className="inv-btn inv-btn-gold">
                Talk to Expert
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="inv-land-strategy inv-land-block" id="opportunities">
        <div className="inv-wrap">
          <header className="inv-mock-section-head inv-mock-section-head--center inv-reveal">
            <p className="inv-mock-eyebrow">Simple &amp; seamless</p>
            <h2>Four ways to put capital to work</h2>
          </header>
          <div className="inv-land-strategy-row inv-reveal">
            {OPPORTUNITIES.map((item, i) => (
              <article key={item.title} className="inv-land-strategy-item">
                <span className="inv-land-strategy-ico">
                  <i className={`fas ${item.icon}`} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                {i < OPPORTUNITIES.length - 1 ? (
                  <span className="inv-land-strategy-arrow" aria-hidden="true">
                    <i className="fas fa-arrow-right" />
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-land-corridors inv-land-block" id="corridors">
        <div className="inv-wrap">
          <header className="inv-mock-section-head inv-reveal">
            <div>
              <p className="inv-mock-eyebrow">Hot demand</p>
              <h2>Where demand and infrastructure meet</h2>
            </div>
          </header>
          <div className="inv-land-demand-grid inv-reveal">
            {HOT_DEMAND.map((item) => (
              <Link href="/projects" key={item.city} className="inv-land-demand-card">
                <span className="inv-land-demand-pin">
                  <i className="fas fa-location-dot" aria-hidden="true" />
                </span>
                <span className="inv-land-demand-body">
                  <span className="inv-land-corr-tag">{item.outlook}</span>
                  <strong>{item.city}</strong>
                  <span className="inv-land-demand-region">{item.region}</span>
                  <span className="inv-land-demand-desc">{item.desc}</span>
                  <span className="inv-land-demand-meta">
                    <em>{item.ticket}</em> · {item.bhk}
                  </span>
                </span>
                <i className="fas fa-chevron-right inv-land-demand-chevron" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-land-insights inv-land-block" id="insights">
        <div className="inv-wrap">
          <header className="inv-mock-section-head inv-reveal">
            <div>
              <p className="inv-mock-eyebrow">Real market insights</p>
              <h2>Signals moving prices this quarter</h2>
            </div>
          </header>
          <div className="inv-land-insight-row inv-reveal">
            {INSIGHT_LANDING.map((item) => (
              <Link
                href="/market-insights"
                key={item.title}
                className={`inv-land-insight inv-land-insight--${item.tone}`}
              >
                <span className="inv-land-insight-ico">
                  <i className={`fas ${item.icon}`} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Link>
            ))}
          </div>
          <p className="inv-land-insights-foot inv-reveal">
            <Link href="/market-insights" className="inv-ref-viewall">
              View all insights
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <InvestorLeadSection />
    </div>
  );
}

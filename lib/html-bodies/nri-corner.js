export const bodyClass = "nri-page";
export const html = `
  <section class="nri-hero nri-hero--banner nri-hero--spotlight" aria-labelledby="nri-hero-spot-title">
    <div class="nri-hero-spot-bg" aria-hidden="true">
      <img
        src="/images/investment-hero-banner-bg.jpg"
        alt=""
        class="nri-hero-spot-bg-img"
        loading="eager"
      />
      <div class="nri-hero-spot-scrim"></div>
    </div>

    <div class="nri-hero-spot-inner">
      <div class="nri-hero-spot-layout">
        <div class="nri-hero-spot-copy">
          <p class="nri-hero-spot-kicker">
            <span class="nri-hero-spot-kicker-dot" aria-hidden="true"></span>
            NRI spotlight · #1 ranked project
          </p>

          <h1 id="nri-hero-spot-title" class="nri-hero-spot-title">
            <span class="nri-hero-spot-title-line">Your best move</span>
            <span class="nri-hero-spot-title-line nri-hero-spot-title-line--name">DLF Privana</span>
            <span class="nri-hero-spot-title-line nri-hero-spot-title-line--sub">from anywhere in the world</span>
          </h1>

          <p class="nri-hero-spot-lead">
            Premium residential towers on Gurgaon&apos;s Golf Course Extension — RERA-verified, high demand with NRIs, and a flexible
            <strong>20:80</strong> payment plan. Listings from <strong>₹4.5 Cr</strong>.
          </p>

          <div class="nri-hero-spot-actions">
            <a href="/listings" class="nri-btn nri-btn--primary nri-btn--light">
              Explore this Project <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="/contact" class="nri-btn nri-btn--outline-light">
              <i class="far fa-calendar-alt" aria-hidden="true"></i> Book NRI Consultation
            </a>
          </div>

          <ul class="nri-hero-spot-trust" aria-label="Project trust points">
            <li>
              <i class="fas fa-house" aria-hidden="true"></i>
              <span><strong>Prime Location</strong><small>Golf Course Extension</small></span>
            </li>
            <li>
              <i class="fas fa-certificate" aria-hidden="true"></i>
              <span><strong>RERA Verified</strong><small>100% Transparent</small></span>
            </li>
            <li>
              <i class="fas fa-handshake" aria-hidden="true"></i>
              <span><strong>Flexible Payment</strong><small>20:80 Plan</small></span>
            </li>
          </ul>
        </div>

        <aside class="nri-hero-spot-chart" aria-labelledby="nri-hero-growth-title">
          <div class="nri-hero-spot-chart-head">
            <div>
              <h2 id="nri-hero-growth-title" class="nri-hero-spot-chart-title">Project price growth</h2>
              <p class="nri-hero-spot-chart-sub">DLF Privana · last 4 months</p>
            </div>
            <p class="nri-hero-spot-chart-total">
              <span><i class="fas fa-arrow-up" aria-hidden="true"></i> +3.8%</span>
              cumulative
            </p>
          </div>

          <figure class="nri-hero-spot-chart-fig">
            <svg class="nri-hero-spot-chart-svg" viewBox="0 0 340 200" role="img" aria-labelledby="nri-hero-growth-title nri-hero-growth-desc">
              <title id="nri-hero-growth-desc">Month-wise price growth for DLF Privana over four months</title>
              <defs>
                <linearGradient id="nriHeroGrowthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(194, 154, 99, 0.4)" />
                  <stop offset="100%" stop-color="rgba(194, 154, 99, 0)" />
                </linearGradient>
              </defs>
              <g class="nri-hero-spot-chart-grid" stroke="rgba(15,35,57,0.1)" stroke-width="1">
                <line x1="40" y1="36" x2="40" y2="148" />
                <line x1="40" y1="148" x2="310" y2="148" />
                <line x1="40" y1="92" x2="310" y2="92" stroke-dasharray="4 6" />
                <line x1="40" y1="64" x2="310" y2="64" stroke-dasharray="4 6" />
              </g>
              <path
                d="M 40 148 L 40 122 L 120 104 L 200 88 L 270 68 L 310 54 L 310 148 Z"
                fill="url(#nriHeroGrowthFill)"
              />
              <polyline
                class="nri-hero-spot-chart-line"
                fill="none"
                stroke="#c29a63"
                stroke-width="2.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="40,122 120,104 200,88 270,68 310,54"
              />
              <g fill="#fff" stroke="#c29a63" stroke-width="2.2">
                <circle cx="40" cy="122" r="4.5" />
                <circle cx="120" cy="104" r="4.5" />
                <circle cx="200" cy="88" r="4.5" />
                <circle cx="270" cy="68" r="4.5" />
                <circle cx="310" cy="54" r="5.5" class="nri-hero-spot-chart-dot--last" />
              </g>
              <g fill="#64748b" font-size="11" font-family="Plus Jakarta Sans, system-ui, sans-serif">
                <text x="40" y="170" text-anchor="middle">Jun</text>
                <text x="120" y="170" text-anchor="middle">Jul</text>
                <text x="200" y="170" text-anchor="middle">Aug</text>
                <text x="270" y="170" text-anchor="middle">Sep</text>
              </g>
              <g fill="#0f2339" font-size="10" font-weight="700" font-family="Plus Jakarta Sans, system-ui, sans-serif">
                <text x="40" y="112" text-anchor="middle">+0.9%</text>
                <text x="120" y="94" text-anchor="middle">+1.1%</text>
                <text x="200" y="78" text-anchor="middle">+0.8%</text>
                <text x="270" y="58" text-anchor="middle">+1.0%</text>
              </g>
            </svg>
          </figure>

          <ul class="nri-hero-spot-chart-legend">
            <li><span>Jun</span><strong>+0.9%</strong></li>
            <li><span>Jul</span><strong>+1.1%</strong></li>
            <li><span>Aug</span><strong>+0.8%</strong></li>
            <li><span>Sep</span><strong>+1.0%</strong></li>
          </ul>
          <p class="nri-hero-spot-chart-note">Illustrative month-on-month list-price trend · not investment advice</p>
        </aside>
      </div>

      <div class="nri-hero-spot-stats" role="list">
        <article class="nri-hero-spot-stat nri-hero-spot-stat--growth" role="listitem">
          <span class="nri-hero-spot-stat-ico" aria-hidden="true"><i class="fas fa-chart-line"></i></span>
          <div>
            <p class="nri-hero-spot-stat-label">Growth</p>
            <p class="nri-hero-spot-stat-value">+11.2%</p>
            <p class="nri-hero-spot-stat-sub">5Y CAGR</p>
          </div>
        </article>
        <article class="nri-hero-spot-stat nri-hero-spot-stat--yield" role="listitem">
          <span class="nri-hero-spot-stat-ico" aria-hidden="true"><i class="fas fa-house"></i></span>
          <div>
            <p class="nri-hero-spot-stat-label">Rental Yield</p>
            <p class="nri-hero-spot-stat-value">3.8%</p>
            <p class="nri-hero-spot-stat-sub">Annual</p>
          </div>
        </article>
        <article class="nri-hero-spot-stat nri-hero-spot-stat--segment" role="listitem">
          <span class="nri-hero-spot-stat-ico" aria-hidden="true"><i class="fas fa-location-dot"></i></span>
          <div>
            <p class="nri-hero-spot-stat-label">Segment</p>
            <p class="nri-hero-spot-stat-value">Residential</p>
            <p class="nri-hero-spot-stat-sub">Luxury Living</p>
          </div>
        </article>
        <article class="nri-hero-spot-stat nri-hero-spot-stat--demand" role="listitem">
          <span class="nri-hero-spot-stat-ico" aria-hidden="true"><i class="fas fa-star"></i></span>
          <div>
            <p class="nri-hero-spot-stat-label">Demand</p>
            <p class="nri-hero-spot-stat-value">High</p>
            <p class="nri-hero-spot-stat-sub">NRI Preference</p>
          </div>
        </article>
      </div>
    </div>

    <a href="/contact" class="nri-hero-spot-chat">
      <i class="fas fa-headset" aria-hidden="true"></i>
      Chat with NRI Assistant
    </a>
  </section>

  <nav class="nri-jump" aria-label="Page sections">
    <div class="nri-container nri-jump-inner">
      <a href="#nri-why">Market pulse</a>
      <a href="#nri-journey">Journey &amp; support</a>
      <a href="#nri-opportunities">Investment opportunities</a>
      <a href="#nri-compare">Metro compare</a>
      <a href="#nri-calculator">Investment calculator</a>
      <a href="#nri-docs">Documentation</a>
      <a href="#nri-tax">Taxation</a>
      <a href="#nri-stories">Testimonials</a>
      <a href="#nri-faq">FAQs</a>
    </div>
  </nav>

  <div class="nri-main" data-html-main>
    <section class="nri-section nri-market-pulse" id="nri-why" aria-labelledby="nri-market-pulse-title">
      <div class="nri-market-pulse-rule nri-market-pulse-rule--top" aria-hidden="true"></div>
      <div class="nri-container">
        <header class="nri-market-pulse-head nri-reveal">
          <p class="nri-market-pulse-eyebrow">India real estate · built for NRIs</p>
          <h2 id="nri-market-pulse-title">India property market pulse</h2>
          <p class="nri-market-pulse-period">2025 corridor snapshot · illustrative YTD</p>
        </header>

        <div class="nri-market-pulse-stats nri-reveal" role="list">
          <article class="nri-market-pulse-stat" role="listitem">
            <span class="nri-market-pulse-num">+18.2%</span>
            <span class="nri-market-pulse-label">Weighted price momentum*</span>
          </article>
          <article class="nri-market-pulse-stat" role="listitem">
            <span class="nri-market-pulse-num">3.4%</span>
            <span class="nri-market-pulse-label">Avg. gross rental yield</span>
          </article>
          <article class="nri-market-pulse-stat" role="listitem">
            <span class="nri-market-pulse-num">RERA</span>
            <span class="nri-market-pulse-label">Escrow-backed delivery</span>
          </article>
          <article class="nri-market-pulse-stat" role="listitem">
            <span class="nri-market-pulse-num">NRE/NRO</span>
            <span class="nri-market-pulse-label">FEMA-compliant payments</span>
          </article>
        </div>

        <div class="nri-vchart-card nri-reveal">
          <div class="nri-vchart-decor nri-vchart-decor--bl" aria-hidden="true"></div>
          <div class="nri-vchart-decor nri-vchart-decor--sky" aria-hidden="true"></div>

          <div class="nri-vchart-card-head">
            <div>
              <p class="nri-vchart-kicker"><i class="fas fa-chart-line" aria-hidden="true"></i> YOY CAPITAL APPRECIATION</p>
              <h3 class="nri-vchart-title">City Growth &amp; <span>Yield Overview</span></h3>
              <p class="nri-vchart-lead">Premium locations. Stronger growth. Better opportunities.</p>
            </div>
            <span class="nri-vchart-chip">
              <i class="fas fa-arrow-up-right" aria-hidden="true"></i>
              Top NRI Corridors (2024–2025)
            </span>
          </div>

          <div class="nri-vchart-stage">
            <div class="nri-vchart-y-axis" aria-hidden="true">
              <span class="nri-vchart-y-label">Growth Rate (%)</span>
              <span>20</span><span>18</span><span>16</span><span>14</span><span>12</span>
              <span>10</span><span>8</span><span>6</span><span>4</span><span>2</span><span>0</span>
            </div>

            <div class="nri-vchart-plot">
              <div class="nri-vchart-hgrid" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
              </div>

              <svg class="nri-vchart-trend" viewBox="0 0 600 340" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <filter id="nriTrendGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.2" result="b"/>
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                <path
                  d="M50 228 C 90 215, 110 195, 150 178 S 210 145, 250 128 S 310 100, 350 92 S 410 78, 450 70 S 510 48, 550 38"
                  fill="none"
                  stroke="#e8a317"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  filter="url(#nriTrendGlow)"
                />
                <circle cx="50" cy="228" r="5" fill="#fff" stroke="#e8a317" stroke-width="2.5"/>
                <circle cx="150" cy="178" r="5" fill="#fff" stroke="#e8a317" stroke-width="2.5"/>
                <circle cx="250" cy="128" r="5" fill="#fff" stroke="#e8a317" stroke-width="2.5"/>
                <circle cx="350" cy="92" r="5" fill="#fff" stroke="#e8a317" stroke-width="2.5"/>
                <circle cx="450" cy="70" r="5" fill="#fff" stroke="#e8a317" stroke-width="2.5"/>
                <circle cx="550" cy="38" r="5" fill="#fff" stroke="#e8a317" stroke-width="2.5"/>
              </svg>

              <div class="nri-vchart-grid">
                <div class="nri-vchart-col nri-vchart-col--red" style="--c:#dc2626; --c2:#f87171; --bar-pct:39%;">
                  <div class="nri-vchart-top">
                    <div class="nri-vchart-val">7.8%</div>
                  </div>
                  <div class="nri-vchart-bar-container">
                    <div class="nri-vchart-bar">
                      <span class="nri-vchart-skyline" aria-hidden="true"></span>
                      <span class="nri-vchart-glass" aria-hidden="true"></span>
                    </div>
                    <span class="nri-vchart-pedestal" aria-hidden="true"></span>
                  </div>
                  <div class="nri-vchart-bottom">
                    <div class="nri-vchart-icon-circle"><i class="fas fa-gopuram" aria-hidden="true"></i></div>
                    <h4 class="nri-vchart-city">Hyderabad</h4>
                    <p class="nri-vchart-sub">HITEC City &amp; Gachibowli</p>
                    <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 4.1% yield</div>
                  </div>
                </div>

                <div class="nri-vchart-col nri-vchart-col--blue" style="--c:#2563eb; --c2:#60a5fa; --bar-pct:53%;">
                  <div class="nri-vchart-top">
                    <div class="nri-vchart-val">10.6%</div>
                  </div>
                  <div class="nri-vchart-bar-container">
                    <div class="nri-vchart-bar">
                      <span class="nri-vchart-skyline" aria-hidden="true"></span>
                      <span class="nri-vchart-glass" aria-hidden="true"></span>
                    </div>
                    <span class="nri-vchart-pedestal" aria-hidden="true"></span>
                  </div>
                  <div class="nri-vchart-bottom">
                    <div class="nri-vchart-icon-circle"><i class="fas fa-building-columns" aria-hidden="true"></i></div>
                    <h4 class="nri-vchart-city">Bengaluru</h4>
                    <p class="nri-vchart-sub">Outer Ring Rd &amp; Whitefield</p>
                    <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.8% yield</div>
                  </div>
                </div>

                <div class="nri-vchart-col nri-vchart-col--orange" style="--c:#ea580c; --c2:#fb923c; --bar-pct:67%;">
                  <div class="nri-vchart-top">
                    <div class="nri-vchart-val">13.4%</div>
                  </div>
                  <div class="nri-vchart-bar-container">
                    <div class="nri-vchart-bar">
                      <span class="nri-vchart-skyline" aria-hidden="true"></span>
                      <span class="nri-vchart-glass" aria-hidden="true"></span>
                    </div>
                    <span class="nri-vchart-pedestal" aria-hidden="true"></span>
                  </div>
                  <div class="nri-vchart-bottom">
                    <div class="nri-vchart-icon-circle"><i class="fas fa-landmark-dome" aria-hidden="true"></i></div>
                    <h4 class="nri-vchart-city">Pune</h4>
                    <p class="nri-vchart-sub">Kharadi &amp; Hinjawadi</p>
                    <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.5% yield</div>
                  </div>
                </div>

                <div class="nri-vchart-col nri-vchart-col--yellow" style="--c:#ca8a04; --c2:#facc15; --bar-pct:71%;">
                  <div class="nri-vchart-top">
                    <div class="nri-vchart-val">14.2%</div>
                  </div>
                  <div class="nri-vchart-bar-container">
                    <div class="nri-vchart-bar">
                      <span class="nri-vchart-skyline" aria-hidden="true"></span>
                      <span class="nri-vchart-glass" aria-hidden="true"></span>
                    </div>
                    <span class="nri-vchart-pedestal" aria-hidden="true"></span>
                  </div>
                  <div class="nri-vchart-bottom">
                    <div class="nri-vchart-icon-circle"><i class="fas fa-building" aria-hidden="true"></i></div>
                    <h4 class="nri-vchart-city">Noida (NCR)</h4>
                    <p class="nri-vchart-sub">Noida Exp. &amp; Sector 150</p>
                    <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.3% yield</div>
                  </div>
                </div>

                <div class="nri-vchart-col nri-vchart-col--green" style="--c:#16a34a; --c2:#4ade80; --bar-pct:75.5%;">
                  <div class="nri-vchart-top">
                    <div class="nri-vchart-val">15.1%</div>
                  </div>
                  <div class="nri-vchart-bar-container">
                    <div class="nri-vchart-bar">
                      <span class="nri-vchart-skyline" aria-hidden="true"></span>
                      <span class="nri-vchart-glass" aria-hidden="true"></span>
                    </div>
                    <span class="nri-vchart-pedestal" aria-hidden="true"></span>
                  </div>
                  <div class="nri-vchart-bottom">
                    <div class="nri-vchart-icon-circle"><i class="fas fa-archway" aria-hidden="true"></i></div>
                    <h4 class="nri-vchart-city">Mumbai (MMR)</h4>
                    <p class="nri-vchart-sub">Coastal Road &amp; BKC</p>
                    <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 2.9% yield</div>
                  </div>
                </div>

                <div class="nri-vchart-col nri-vchart-col--gold" style="--c:#d4a017; --c2:#f0c14b; --bar-pct:91%;">
                  <div class="nri-vchart-top">
                    <span class="nri-vchart-crown-pill"><i class="fas fa-crown" aria-hidden="true"></i> TOP PERFORMER</span>
                    <div class="nri-vchart-val">18.2%</div>
                  </div>
                  <div class="nri-vchart-bar-container">
                    <div class="nri-vchart-bar">
                      <span class="nri-vchart-skyline" aria-hidden="true"></span>
                      <span class="nri-vchart-glass" aria-hidden="true"></span>
                    </div>
                    <span class="nri-vchart-pedestal" aria-hidden="true"></span>
                  </div>
                  <div class="nri-vchart-bottom">
                    <div class="nri-vchart-icon-circle"><i class="fas fa-city" aria-hidden="true"></i></div>
                    <h4 class="nri-vchart-city">Gurugram</h4>
                    <p class="nri-vchart-sub">Golf Course Ext. &amp; Dwarka Exp.</p>
                    <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.2% yield</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nri-vchart-footer-rule">
            <span class="nri-vchart-footer-line"></span>
            <span class="nri-vchart-footer-text">Indicative corridor blend &amp; market appreciation — not a guarantee of future returns.</span>
            <span class="nri-vchart-footer-line"></span>
          </div>
        </div>
      </div>
      <div class="nri-market-pulse-rule nri-market-pulse-rule--bottom" aria-hidden="true"></div>
    </section>

    <section class="nri-section nri-path" id="nri-journey" aria-labelledby="nri-path-title">
      <span id="nri-support" class="nri-sr-only" tabindex="-1">NRI support</span>
      <span id="nri-process" class="nri-sr-only" tabindex="-1">Buying process</span>
      <div class="nri-container">
        <header class="nri-path-head nri-reveal">
          <p class="nri-path-kicker">Remote buying · end to end</p>
          <h2 id="nri-path-title">
            Everything you need,<br />
            even from <em>miles away</em>
          </h2>
          <p class="nri-path-lead">Your NRI investment journey in six clear steps — with dedicated support at every stage, most of it doable without flying to India.</p>
        </header>

        <ol class="nri-path-steps nri-reveal" aria-label="NRI investment journey steps">
          <li class="nri-path-step nri-path-step--gold">
            <span class="nri-path-step-num">01</span>
            <span class="nri-path-step-ico" aria-hidden="true"><i class="fas fa-magnifying-glass"></i></span>
            <strong>Discover</strong>
            <span class="nri-path-step-hint">Curated shortlists</span>
          </li>
          <li class="nri-path-sep" aria-hidden="true"><i class="fas fa-chevron-right"></i></li>
          <li class="nri-path-step nri-path-step--red">
            <span class="nri-path-step-num">02</span>
            <span class="nri-path-step-ico" aria-hidden="true"><i class="fas fa-scale-balanced"></i></span>
            <strong>Compare</strong>
            <span class="nri-path-step-hint">Price &amp; plans</span>
          </li>
          <li class="nri-path-sep" aria-hidden="true"><i class="fas fa-chevron-right"></i></li>
          <li class="nri-path-step nri-path-step--gold">
            <span class="nri-path-step-num">03</span>
            <span class="nri-path-step-ico" aria-hidden="true"><i class="fas fa-house-laptop"></i></span>
            <strong>Virtual tour</strong>
            <span class="nri-path-step-hint">Live walkthroughs</span>
          </li>
          <li class="nri-path-sep" aria-hidden="true"><i class="fas fa-chevron-right"></i></li>
          <li class="nri-path-step nri-path-step--red">
            <span class="nri-path-step-num">04</span>
            <span class="nri-path-step-ico" aria-hidden="true"><i class="fas fa-file-circle-check"></i></span>
            <strong>Verify</strong>
            <span class="nri-path-step-hint">Legal &amp; RERA</span>
          </li>
          <li class="nri-path-sep" aria-hidden="true"><i class="fas fa-chevron-right"></i></li>
          <li class="nri-path-step nri-path-step--gold">
            <span class="nri-path-step-num">05</span>
            <span class="nri-path-step-ico" aria-hidden="true"><i class="fas fa-file-signature"></i></span>
            <strong>Book</strong>
            <span class="nri-path-step-hint">NRE/NRO · FEMA</span>
          </li>
          <li class="nri-path-sep" aria-hidden="true"><i class="fas fa-chevron-right"></i></li>
          <li class="nri-path-step nri-path-step--red">
            <span class="nri-path-step-num">06</span>
            <span class="nri-path-step-ico" aria-hidden="true"><i class="fas fa-user"></i></span>
            <strong>Manage</strong>
            <span class="nri-path-step-hint">Handover &amp; rent</span>
          </li>
        </ol>

        <div class="nri-path-cta nri-reveal">
          <a href="/contact" class="nri-btn nri-btn--primary">Start your journey <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a href="/listings" class="nri-btn nri-btn--outline-gold">
            <i class="fas fa-th-large" aria-hidden="true"></i> Browse NRI listings
          </a>
        </div>
      </div>
    </section>

    <section class="nri-section nri-section--inv" id="nri-opportunities" aria-labelledby="nri-inv-title">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-building"></i> Investor hub</span>
          <h2 id="nri-inv-title">India Investment <em>Opportunities</em></h2>
          <p>Compare entry tickets, historical growth, and rental yield across India&apos;s top corridors — then continue on our full investment platform.</p>
        </div>
        <div class="nri-inv-tabs nri-reveal" role="tablist" aria-label="Investment opportunity filters" id="nriInvTabs"></div>
        <div class="nri-inv-grid nri-reveal" id="nriInvGrid" role="tabpanel" aria-live="polite"></div>
        <p class="nri-inv-disclaimer nri-reveal">* Indicative metrics for illustration. Verify with Inchbrick advisors before booking.</p>
      </div>
    </section>

    <section class="nri-section nri-metro-arena" id="nri-compare" aria-labelledby="nri-metro-arena-title">
      <div class="nri-container">
        <header class="nri-metro-arena-head nri-reveal">
          <p class="nri-metro-arena-eyebrow">Compare before you commit</p>
          <h2 id="nri-metro-arena-title">Metro <em>Showdown</em> <i class="fas fa-arrow-trend-up" aria-hidden="true"></i></h2>
          <p>Three cities. Three growth stories. Compare NRIs, rental yield, and capital appreciation to find your ideal investment destination.</p>
        </header>

        <div class="nri-metro-city-tabs nri-reveal" role="tablist" aria-label="Jump to city">
          <button type="button" class="nri-metro-city-tab is-active" role="tab" aria-selected="true" data-metro-city="gurugram">Gurugram</button>
          <button type="button" class="nri-metro-city-tab" role="tab" aria-selected="false" data-metro-city="bengaluru">Bengaluru</button>
          <button type="button" class="nri-metro-city-tab" role="tab" aria-selected="false" data-metro-city="mumbai">Mumbai</button>
        </div>

        <div class="nri-metro-arena-grid nri-reveal">
          <article class="nri-metro-card nri-metro-card--gold is-active" id="nri-metro-gurugram" data-metro-city="gurugram" style="--metro-accent:#c29a63; --metro-accent-soft:rgba(194,154,99,0.14); --metro-chart:#0f766e; --metro-chart-soft:#ccfbf1;">
            <div class="nri-metro-card-media">
              <img src="/images/nri-cities/gurugram.png" alt="" class="nri-metro-card-img" loading="lazy" />
              <div class="nri-metro-card-scrim" aria-hidden="true"></div>
              <span class="nri-metro-card-crown"><i class="fas fa-crown" aria-hidden="true"></i> Top Performer</span>
              <span class="nri-metro-card-heat"><i class="fas fa-arrow-up" aria-hidden="true"></i> +24.5% Growth Heat</span>
              <div class="nri-metro-card-place">
                <h3>Gurugram</h3>
                <p><i class="fas fa-location-dot" aria-hidden="true"></i> NCR · Dwarka Expressway belt</p>
              </div>
            </div>

            <ul class="nri-metro-card-metrics">
              <li>
                <i class="fas fa-building" aria-hidden="true"></i>
                <div>
                  <strong>₹8.5 Cr+</strong>
                  <span>Avg. Property Price</span>
                </div>
              </li>
              <li>
                <i class="fas fa-percent" aria-hidden="true"></i>
                <div>
                  <strong>3.2%</strong>
                  <span>Rental Yield</span>
                </div>
              </li>
              <li>
                <i class="fas fa-layer-group" aria-hidden="true"></i>
                <div>
                  <strong>25+</strong>
                  <span>Proj. Pipeline</span>
                </div>
              </li>
            </ul>

            <div class="nri-metro-trend">
              <h4>Price Growth Trend <span>(Past 5 Years)</span></h4>
              <div class="nri-metro-trend-chart" role="img" aria-label="Gurugram price growth from 2020 to 2024">
                <div class="nri-metro-trend-y" aria-hidden="true">
                  <span>40%</span><span>30%</span><span>20%</span><span>10%</span><span>0%</span>
                </div>
                <div class="nri-metro-trend-plot">
                  <div class="nri-metro-trend-grid" aria-hidden="true"></div>
                  <svg class="nri-metro-trend-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polyline fill="none" stroke="var(--metro-chart)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" points="10,80 30,70 50,60 70,47.5 90,30" />
                    <g fill="var(--metro-chart)">
                      <circle cx="10" cy="80" r="2.2" />
                      <circle cx="30" cy="70" r="2.2" />
                      <circle cx="50" cy="60" r="2.2" />
                      <circle cx="70" cy="47.5" r="2.2" />
                      <circle cx="90" cy="30" r="2.2" />
                    </g>
                  </svg>
                  <div class="nri-metro-trend-bars">
                    <div class="nri-metro-trend-col" style="--h:20%">
                      <span class="nri-metro-trend-val">8%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2020</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:30%">
                      <span class="nri-metro-trend-val">12%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2021</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:40%">
                      <span class="nri-metro-trend-val">16%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2022</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:52.5%">
                      <span class="nri-metro-trend-val">21%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2023</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:70%">
                      <span class="nri-metro-trend-val">28%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="nri-metro-card-foot">
              <p><i class="fas fa-thumbs-up" aria-hidden="true"></i> Highest NRI demand corridor with strong resale liquidity.</p>
              <a href="/listings?city=gurugram">Explore Gurugram <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </article>

          <article class="nri-metro-card nri-metro-card--navy" id="nri-metro-bengaluru" data-metro-city="bengaluru" style="--metro-accent:#0f2339; --metro-accent-soft:rgba(15,35,57,0.08); --metro-chart:#2563eb; --metro-chart-soft:#dbeafe;">
            <div class="nri-metro-card-media">
              <img src="/images/nri-cities/bengaluru.png" alt="" class="nri-metro-card-img" loading="lazy" />
              <div class="nri-metro-card-scrim" aria-hidden="true"></div>
              <span class="nri-metro-card-heat"><i class="fas fa-arrow-up" aria-hidden="true"></i> +17.0% Growth Heat</span>
              <div class="nri-metro-card-place">
                <h3>Bengaluru</h3>
                <p><i class="fas fa-location-dot" aria-hidden="true"></i> ORR · Peripheral townships</p>
              </div>
            </div>

            <ul class="nri-metro-card-metrics">
              <li>
                <i class="fas fa-building" aria-hidden="true"></i>
                <div>
                  <strong>₹6.2 Cr+</strong>
                  <span>Avg. Property Price</span>
                </div>
              </li>
              <li>
                <i class="fas fa-percent" aria-hidden="true"></i>
                <div>
                  <strong>3.4%</strong>
                  <span>Rental Yield</span>
                </div>
              </li>
              <li>
                <i class="fas fa-layer-group" aria-hidden="true"></i>
                <div>
                  <strong>30+</strong>
                  <span>Proj. Pipeline</span>
                </div>
              </li>
            </ul>

            <div class="nri-metro-trend">
              <h4>Price Growth Trend <span>(Past 5 Years)</span></h4>
              <div class="nri-metro-trend-chart" role="img" aria-label="Bengaluru price growth from 2020 to 2024">
                <div class="nri-metro-trend-y" aria-hidden="true">
                  <span>40%</span><span>30%</span><span>20%</span><span>10%</span><span>0%</span>
                </div>
                <div class="nri-metro-trend-plot">
                  <div class="nri-metro-trend-grid" aria-hidden="true"></div>
                  <svg class="nri-metro-trend-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polyline fill="none" stroke="var(--metro-chart)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" points="10,85 30,75 50,62.5 70,50 90,32.5" />
                    <g fill="var(--metro-chart)">
                      <circle cx="10" cy="85" r="2.2" />
                      <circle cx="30" cy="75" r="2.2" />
                      <circle cx="50" cy="62.5" r="2.2" />
                      <circle cx="70" cy="50" r="2.2" />
                      <circle cx="90" cy="32.5" r="2.2" />
                    </g>
                  </svg>
                  <div class="nri-metro-trend-bars">
                    <div class="nri-metro-trend-col" style="--h:15%">
                      <span class="nri-metro-trend-val">6%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2020</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:25%">
                      <span class="nri-metro-trend-val">10%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2021</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:37.5%">
                      <span class="nri-metro-trend-val">15%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2022</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:50%">
                      <span class="nri-metro-trend-val">20%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2023</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:67.5%">
                      <span class="nri-metro-trend-val">27%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="nri-metro-card-foot">
              <p><i class="fas fa-graduation-cap" aria-hidden="true"></i> Deep IT rental demand across ORR micro-markets.</p>
              <a href="/listings?city=bengaluru">Explore Bengaluru <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </article>

          <article class="nri-metro-card nri-metro-card--red" id="nri-metro-mumbai" data-metro-city="mumbai" style="--metro-accent:#c9242b; --metro-accent-soft:rgba(201,36,43,0.1); --metro-chart:#7c3aed; --metro-chart-soft:#ede9fe;">
            <div class="nri-metro-card-media">
              <img src="/images/nri-cities/mumbai.png" alt="" class="nri-metro-card-img" loading="lazy" />
              <div class="nri-metro-card-scrim" aria-hidden="true"></div>
              <span class="nri-metro-card-heat"><i class="fas fa-arrow-up" aria-hidden="true"></i> +12.6% Growth Heat</span>
              <div class="nri-metro-card-place">
                <h3>Mumbai</h3>
                <p><i class="fas fa-location-dot" aria-hidden="true"></i> Coastal Rd · Metro 3 corridors</p>
              </div>
            </div>

            <ul class="nri-metro-card-metrics">
              <li>
                <i class="fas fa-building" aria-hidden="true"></i>
                <div>
                  <strong>₹12.8 Cr+</strong>
                  <span>Avg. Property Price</span>
                </div>
              </li>
              <li>
                <i class="fas fa-percent" aria-hidden="true"></i>
                <div>
                  <strong>2.9%</strong>
                  <span>Rental Yield</span>
                </div>
              </li>
              <li>
                <i class="fas fa-layer-group" aria-hidden="true"></i>
                <div>
                  <strong>20+</strong>
                  <span>Proj. Pipeline</span>
                </div>
              </li>
            </ul>

            <div class="nri-metro-trend">
              <h4>Price Growth Trend <span>(Past 5 Years)</span></h4>
              <div class="nri-metro-trend-chart" role="img" aria-label="Mumbai price growth from 2020 to 2024">
                <div class="nri-metro-trend-y" aria-hidden="true">
                  <span>40%</span><span>30%</span><span>20%</span><span>10%</span><span>0%</span>
                </div>
                <div class="nri-metro-trend-plot">
                  <div class="nri-metro-trend-grid" aria-hidden="true"></div>
                  <svg class="nri-metro-trend-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polyline fill="none" stroke="var(--metro-chart)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" points="10,87.5 30,80 50,70 70,57.5 90,45" />
                    <g fill="var(--metro-chart)">
                      <circle cx="10" cy="87.5" r="2.2" />
                      <circle cx="30" cy="80" r="2.2" />
                      <circle cx="50" cy="70" r="2.2" />
                      <circle cx="70" cy="57.5" r="2.2" />
                      <circle cx="90" cy="45" r="2.2" />
                    </g>
                  </svg>
                  <div class="nri-metro-trend-bars">
                    <div class="nri-metro-trend-col" style="--h:12.5%">
                      <span class="nri-metro-trend-val">5%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2020</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:20%">
                      <span class="nri-metro-trend-val">8%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2021</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:30%">
                      <span class="nri-metro-trend-val">12%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2022</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:42.5%">
                      <span class="nri-metro-trend-val">17%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2023</span>
                    </div>
                    <div class="nri-metro-trend-col" style="--h:55%">
                      <span class="nri-metro-trend-val">22%</span>
                      <span class="nri-metro-trend-bar"></span>
                      <span class="nri-metro-trend-year">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="nri-metro-card-foot">
              <p><i class="fas fa-train-subway" aria-hidden="true"></i> Coastal Road &amp; Metro 3 powering premium demand.</p>
              <a href="/listings?city=mumbai">Explore Mumbai <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </article>
        </div>

        <p class="nri-metro-arena-foot nri-reveal">* Indicative corridor data for illustration — not ranked advice. Verify project-level numbers with Inchbrick before investing.</p>
      </div>
    </section>

    <section class="nri-calc" id="nri-calculator" aria-labelledby="nri-calc-title">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-calculator"></i> Calculate your investment potential</span>
          <h2 id="nri-calc-title">Calculate Your <em>Investment Potential</em></h2>
          <p>Drag the sliders to match your scenario. All figures below are <strong>forward-looking estimates</strong>, not historical performance.</p>
        </div>

        <div class="nri-calc-shell nri-reveal">
          <div class="nri-calc-controls" aria-label="Investment scenario inputs">
            <div class="nri-calc-field">
              <div class="nri-calc-field-top">
                <span class="nri-calc-label">Property</span>
                <output class="nri-calc-display" id="nriCalcPropertyOut" for="nriCalcProperty">₹2.5 Cr</output>
              </div>
              <input type="range" class="nri-calc-range" id="nriCalcProperty" min="5000000" max="100000000" step="2500000" value="25000000" aria-valuetext="2.5 crore rupees" />
            </div>
            <div class="nri-calc-field">
              <div class="nri-calc-field-top">
                <span class="nri-calc-label">Down Payment</span>
                <output class="nri-calc-display" id="nriCalcDownOut" for="nriCalcDown">₹75 L</output>
              </div>
              <input type="range" class="nri-calc-range" id="nriCalcDown" min="1000000" max="25000000" step="500000" value="7500000" aria-valuetext="75 lakh rupees" />
            </div>
            <div class="nri-calc-field">
              <div class="nri-calc-field-top">
                <span class="nri-calc-label">Holding Period</span>
                <output class="nri-calc-display" id="nriCalcHoldOut" for="nriCalcHold">5 Years</output>
              </div>
              <input type="range" class="nri-calc-range" id="nriCalcHold" min="1" max="15" step="1" value="5" aria-valuetext="5 years" />
            </div>
            <div class="nri-calc-field">
              <div class="nri-calc-field-top">
                <span class="nri-calc-label">Expected Rent</span>
                <output class="nri-calc-display" id="nriCalcRentOut" for="nriCalcRent">₹60K / Month</output>
              </div>
              <input type="range" class="nri-calc-range" id="nriCalcRent" min="15000" max="250000" step="5000" value="60000" aria-valuetext="60 thousand rupees per month" />
            </div>
            <div class="nri-calc-field nri-calc-field--assumption">
              <div class="nri-calc-field-top">
                <span class="nri-calc-label">Assumed price growth <span class="nri-calc-label-note">(estimate only)</span></span>
                <output class="nri-calc-display nri-calc-display--sm" id="nriCalcGrowthOut" for="nriCalcGrowth">8% / Year</output>
              </div>
              <input type="range" class="nri-calc-range" id="nriCalcGrowth" min="4" max="14" step="0.5" value="8" aria-valuetext="8 percent per year assumed" />
              <p class="nri-calc-assumption-copy">Used only to project future property value — not based on past market returns.</p>
            </div>
          </div>

          <div class="nri-calc-results">
            <div class="nri-calc-results-head">
              <span class="nri-calc-badge">Projection estimate</span>
              <p class="nri-calc-results-lead">Illustrative totals for your inputs. Excludes loan interest, tax, vacancy, and maintenance.</p>
            </div>
            <div class="nri-calc-out-grid">
              <article class="nri-calc-out">
                <span class="nri-calc-out-kicker">Estimated Property Value</span>
                <strong class="nri-calc-out-val" id="nriCalcFv">—</strong>
                <span class="nri-calc-out-sub">After holding period at assumed growth</span>
              </article>
              <article class="nri-calc-out">
                <span class="nri-calc-out-kicker">Capital Appreciation</span>
                <strong class="nri-calc-out-val" id="nriCalcCap">—</strong>
                <span class="nri-calc-out-sub">Projected value minus purchase price</span>
              </article>
              <article class="nri-calc-out">
                <span class="nri-calc-out-kicker">Rental Income</span>
                <strong class="nri-calc-out-val" id="nriCalcRentTotal">—</strong>
                <span class="nri-calc-out-sub">Gross rent × months held (estimate)</span>
              </article>
              <article class="nri-calc-out nri-calc-out--roi">
                <span class="nri-calc-out-kicker">Estimated ROI</span>
                <strong class="nri-calc-out-val" id="nriCalcRoi">—</strong>
                <span class="nri-calc-out-sub">On down payment over holding period</span>
              </article>
            </div>
            <div class="nri-calc-split" aria-hidden="true">
              <div class="nri-calc-split-bar">
                <span class="nri-calc-split-cap" id="nriCalcSplitCap"></span>
                <span class="nri-calc-split-rent" id="nriCalcSplitRent"></span>
              </div>
              <div class="nri-calc-split-legend">
                <span><i class="nri-calc-dot nri-calc-dot--cap"></i> Appreciation (est.)</span>
                <span><i class="nri-calc-dot nri-calc-dot--rent"></i> Rent (est.)</span>
              </div>

            </div>
            <p class="nri-calc-disclaimer">
              <strong>Not historical data.</strong> Projections use your assumed growth rate and steady rent — actual prices, yields, and costs will differ. Use this to explore scenarios; confirm numbers with Inchbrick before investing.
            </p>
            <a href="/listings" class="nri-btn nri-btn--primary nri-calc-cta">Explore Matching Projects <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </section>

    <section class="nri-section nri-doc-desk" id="nri-docs" aria-labelledby="nri-doc-desk-title">
      <div class="nri-container">
        <header class="nri-doc-desk-head nri-reveal">
          <p class="nri-doc-desk-eyebrow">KYC · FEMA · title</p>
          <h2 id="nri-doc-desk-title">Documentation <em>checklist</em></h2>
          <p>Four phases for a remote purchase — identity, funding, booking, and registration.</p>
        </header>

        <div class="nri-doc-desk-grid nri-reveal">
          <article class="nri-doc-phase">
            <header class="nri-doc-phase-head">
              <span class="nri-doc-phase-num">01</span>
              <h3>Identity &amp; NRI status</h3>
            </header>
            <ul class="nri-doc-items">
              <li><span class="nri-doc-item-name">Valid passport (Indian or foreign)</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">PAN card</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Overseas address proof</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">OCI / PIO card</span><span class="nri-doc-tag nri-doc-tag--opt">If applicable</span></li>
              <li><span class="nri-doc-item-name">Indian address proof</span><span class="nri-doc-tag nri-doc-tag--opt">If available</span></li>
            </ul>
          </article>

          <article class="nri-doc-phase">
            <header class="nri-doc-phase-head">
              <span class="nri-doc-phase-num">02</span>
              <h3>Banking &amp; remittance</h3>
            </header>
            <ul class="nri-doc-items">
              <li><span class="nri-doc-item-name">NRE / NRO account statements</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">FEMA declaration for remittance</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Wire transfer / SWIFT confirmation</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Form 15CA / 15CB</span><span class="nri-doc-tag nri-doc-tag--opt">Large transfers</span></li>
            </ul>
          </article>

          <article class="nri-doc-phase">
            <header class="nri-doc-phase-head">
              <span class="nri-doc-phase-num">03</span>
              <h3>Booking &amp; agreements</h3>
            </header>
            <ul class="nri-doc-items">
              <li><span class="nri-doc-item-name">Application / allotment letter</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Builder–buyer agreement</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Payment schedule &amp; receipts</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">RERA registration certificate</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
            </ul>
          </article>

          <article class="nri-doc-phase">
            <header class="nri-doc-phase-head">
              <span class="nri-doc-phase-num">04</span>
              <h3>Registration &amp; title</h3>
            </header>
            <ul class="nri-doc-items">
              <li><span class="nri-doc-item-name">Power of Attorney (notarised &amp; apostilled)</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Sale deed / conveyance deed</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Encumbrance certificate</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
              <li><span class="nri-doc-item-name">Occupancy / completion certificate</span><span class="nri-doc-tag nri-doc-tag--req">Required</span></li>
            </ul>
          </article>
        </div>

        <footer class="nri-doc-desk-foot nri-reveal">
          <p>Requirements vary by country and developer — we&apos;ll send a tailored checklist.</p>
          <a href="/contact" class="nri-btn nri-btn--primary">Request checklist <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        </footer>
      </div>
    </section>

    <section class="nri-section nri-section--alt" id="nri-tax">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-calculator"></i> Compliance</span>
          <h2>Taxation <em>Essentials</em></h2>
          <p>Key tax considerations for NRIs owning residential property in India. Consult a CA for personalised advice.</p>
        </div>
        <div class="nri-tax-grid">
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-file-invoice-dollar"></i> TDS on Purchase</h3>
            <p>When buying from a resident seller, TDS @ 1% applies if property value exceeds ₹50 lakh.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-percent"></i> TDS on Sale</h3>
            <p>Buyer deducts TDS @ 20% (+ surcharge) when purchasing from an NRI seller under Section 195.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-home"></i> Rental Income</h3>
            <p>Taxable in India with 30% standard deduction. DTAA may provide relief based on residence.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-chart-pie"></i> Capital Gains</h3>
            <p>Long-term gains (24+ months) taxed at 12.5% without indexation. Exemptions under 54/54F.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-landmark"></i> Wealth Tax</h3>
            <p>Wealth tax abolished. Declare property in Indian ITR if you qualify as RNOR or resident.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-globe-americas"></i> Global Reporting</h3>
            <p>Declare foreign assets as required (FATCA, CRA). Keep Indian tax records for 7 years.</p>
          </article>
        </div>
        <p class="nri-disclaimer">*Indicative information only. Tax laws change — consult a qualified CA familiar with NRI taxation and DTAA.</p>
      </div>
    </section>

    <section class="nri-section nri-country-voices" id="nri-stories" aria-labelledby="nri-country-voices-title">
      <div class="nri-container">
        <header class="nri-country-voices-head nri-reveal">
          <p class="nri-country-voices-eyebrow">Client testimonials</p>
          <h2 id="nri-country-voices-title">What NRIs say <em>about us</em></h2>
          <p>Verified buyer reviews by country — star-rated feedback from NRIs who purchased in India remotely.</p>
        </header>

        <div class="nri-country-tabs nri-reveal" id="nriCountryTabs" role="tablist" aria-label="Filter stories by country"></div>

        <div class="nri-country-panel nri-reveal" id="nriCountryPanel" role="tabpanel" aria-live="polite"></div>

        <p class="nri-country-voices-foot nri-reveal">Representative client experiences shared with permission. Outcomes vary by project, lender, and residency status.</p>
      </div>
    </section>

    <section class="nri-section nri-section--alt" id="nri-faq">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-circle-question"></i> Common questions</span>
          <h2>FAQs</h2>
          <p>Quick answers to the most asked NRI property questions.</p>
        </div>
        <div class="nri-faq-list" id="nriFaqList"></div>
        <div class="nri-faq-cta nri-reveal">
          <p>Still have questions?</p>
          <a href="/contact" class="nri-btn nri-btn--primary">Contact NRI Desk</a>
        </div>
      </div>
    </section>
  </div>
`;

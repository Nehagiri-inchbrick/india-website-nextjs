export const bodyClass = "nri-page";
export const html = `
  <section class="nri-hero nri-hero--banner nri-hero--spotlight" aria-labelledby="nri-hero-spot-title">
    <div class="nri-hero-spot-bg" aria-hidden="true">
      <img
        src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1920&q=80"
        alt=""
        class="nri-hero-spot-bg-img"
        loading="eager"
      />
      <div class="nri-hero-spot-scrim"></div>
      <div class="nri-hero-spot-glow"></div>
    </div>

    <div class="nri-hero-spot-inner">
      <div class="nri-hero-spot-layout">
      <div class="nri-hero-spot-copy">
        <p class="nri-hero-spot-kicker"><span class="nri-hero-spot-kicker-dot" aria-hidden="true"></span> NRI spotlight · #1 ranked project</p>
        <h1 id="nri-hero-spot-title" class="nri-hero-spot-title">
          <span class="nri-hero-spot-title-line">Your best move</span>
          <span class="nri-hero-spot-title-line nri-hero-spot-title-line--name">DLF Privana</span>
          <span class="nri-hero-spot-title-line nri-hero-spot-title-line--sub">from anywhere in the world</span>
        </h1>
        <p class="nri-hero-spot-lead">
          Premium residential towers on Gurgaon&apos;s Golf Course Extension — RERA-verified, high demand with NRIs, and a flexible
          <strong>20:80</strong> payment plan. Listings from <strong>₹4.5 Cr</strong>.
        </p>

        <dl class="nri-hero-spot-metrics" aria-label="Project highlights">
          <div class="nri-hero-spot-metric nri-hero-spot-metric--growth">
            <dt>Growth</dt>
            <dd>+11.2%</dd>
          </div>
          <div class="nri-hero-spot-metric">
            <dt>Rental yield</dt>
            <dd>3.8%</dd>
          </div>
          <div class="nri-hero-spot-metric">
            <dt>Segment</dt>
            <dd>Residential</dd>
          </div>
          <div class="nri-hero-spot-metric">
            <dt>Demand</dt>
            <dd>High</dd>
          </div>
        </dl>

        <div class="nri-hero-spot-actions">
          <a href="/listings" class="nri-btn nri-btn--primary nri-btn--light">Explore this project <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a href="/contact" class="nri-btn nri-btn--outline-light"><i class="far fa-calendar-alt" aria-hidden="true"></i> Book NRI consultation</a>
        </div>
        <p class="nri-hero-spot-note">Illustrative metrics · confirm live inventory with Inchbrick</p>
      </div>

      <aside class="nri-hero-spot-chart" aria-labelledby="nri-hero-growth-title">
        <div class="nri-hero-spot-chart-head">
          <div>
            <h2 id="nri-hero-growth-title" class="nri-hero-spot-chart-title">Project price growth</h2>
            <p class="nri-hero-spot-chart-sub">DLF Privana · last 4 months</p>
          </div>
          <p class="nri-hero-spot-chart-total"><span>+3.8%</span> cumulative</p>
        </div>
        <figure class="nri-hero-spot-chart-fig">
          <svg class="nri-hero-spot-chart-svg" viewBox="0 0 340 200" role="img" aria-labelledby="nri-hero-growth-title nri-hero-growth-desc">
            <title id="nri-hero-growth-desc">Month-wise price growth for DLF Privana over four months</title>
            <defs>
              <linearGradient id="nriHeroGrowthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(184, 245, 168, 0.45)" />
                <stop offset="100%" stop-color="rgba(184, 245, 168, 0)" />
              </linearGradient>
            </defs>
            <g class="nri-hero-spot-chart-grid" stroke="rgba(255,255,255,0.08)" stroke-width="1">
              <line x1="48" y1="40" x2="48" y2="152" />
              <line x1="48" y1="152" x2="308" y2="152" />
              <line x1="48" y1="96" x2="308" y2="96" stroke-dasharray="4 6" />
              <line x1="48" y1="68" x2="308" y2="68" stroke-dasharray="4 6" />
            </g>
            <path
              class="nri-hero-spot-chart-area"
              d="M 48 152 L 48 128 L 118 108 L 188 92 L 258 72 L 308 58 L 308 152 Z"
              fill="url(#nriHeroGrowthFill)"
            />
            <polyline
              class="nri-hero-spot-chart-line"
              fill="none"
              stroke="#b8f5a8"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="48,128 118,108 188,92 258,72 308,58"
            />
            <g class="nri-hero-spot-chart-dots" fill="#fff" stroke="#138808" stroke-width="2">
              <circle cx="48" cy="128" r="4" />
              <circle cx="118" cy="108" r="4" />
              <circle cx="188" cy="92" r="4" />
              <circle cx="258" cy="72" r="4" />
              <circle cx="308" cy="58" r="5" class="nri-hero-spot-chart-dot--last" />
            </g>
            <g class="nri-hero-spot-chart-labels" fill="rgba(255,255,255,0.55)" font-size="11" font-family="Plus Jakarta Sans, system-ui, sans-serif">
              <text x="48" y="172" text-anchor="middle">Jun</text>
              <text x="118" y="172" text-anchor="middle">Jul</text>
              <text x="188" y="172" text-anchor="middle">Aug</text>
              <text x="258" y="172" text-anchor="middle">Sep</text>
            </g>
            <g class="nri-hero-spot-chart-pct" fill="#b8f5a8" font-size="10" font-weight="700" font-family="Plus Jakarta Sans, system-ui, sans-serif">
              <text x="48" y="118" text-anchor="middle">+0.9%</text>
              <text x="118" y="98" text-anchor="middle">+1.1%</text>
              <text x="188" y="82" text-anchor="middle">+0.8%</text>
              <text x="258" y="62" text-anchor="middle">+1.0%</text>
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
    </div>
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
          <div class="nri-vchart-bg-pattern" aria-hidden="true"></div>
          <div class="nri-vchart-grid">
          <div class="nri-vchart-col nri-vchart-col--blue">
              <div class="nri-vchart-top">
                <div class="nri-vchart-val"><i class="fas fa-arrow-up-right" aria-hidden="true"></i> 12.6%</div>
              </div>
              <div class="nri-vchart-bar-container" style="--bar-height: 155px;">
                <div class="nri-vchart-bar">
                  <svg class="nri-vchart-bar-trend" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M 10 85 Q 45 65 90 15" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <div class="nri-vchart-bottom">
                <div class="nri-vchart-icon-circle"><i class="fas fa-archway" aria-hidden="true"></i></div>
                <h4 class="nri-vchart-city">Mumbai (MMR)</h4>
                <p class="nri-vchart-sub">Coastal Road &amp; BKC</p>
                <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 2.9% yield</div>
              </div>
            </div>
            <!-- NOIDA (NCR) -->
            <div class="nri-vchart-col nri-vchart-col--cyan">
              <div class="nri-vchart-top">
                <div class="nri-vchart-val"><i class="fas fa-arrow-up-right" aria-hidden="true"></i> 14.2%</div>
              </div>
              <div class="nri-vchart-bar-container" style="--bar-height: 175px;">
                <div class="nri-vchart-bar">
                  <svg class="nri-vchart-bar-trend" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M 10 85 Q 45 65 90 15" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <div class="nri-vchart-bottom">
                <div class="nri-vchart-icon-circle"><i class="fas fa-building" aria-hidden="true"></i></div>
                <h4 class="nri-vchart-city">Noida (NCR)</h4>
                <p class="nri-vchart-sub">Noida Exp. &amp; Sector 150</p>
                <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.3% yield</div>
              </div>
            </div>
            <!-- PUNE -->
            <div class="nri-vchart-col nri-vchart-col--amber">
              <div class="nri-vchart-top">
                <div class="nri-vchart-val"><i class="fas fa-arrow-up-right" aria-hidden="true"></i> 15.4%</div>
              </div>
              <div class="nri-vchart-bar-container" style="--bar-height: 195px;">
                <div class="nri-vchart-bar">
                  <svg class="nri-vchart-bar-trend" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M 10 85 Q 45 65 90 15" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <div class="nri-vchart-bottom">
                <div class="nri-vchart-icon-circle"><i class="fas fa-landmark-dome" aria-hidden="true"></i></div>
                <h4 class="nri-vchart-city">Pune</h4>
                <p class="nri-vchart-sub">Kharadi &amp; Hinjawadi</p>
                <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.5% yield</div>
              </div>
            </div>

            <!-- BENGALURU -->
            <div class="nri-vchart-col nri-vchart-col--teal">
              <div class="nri-vchart-top">
                <div class="nri-vchart-val"><i class="fas fa-arrow-up-right" aria-hidden="true"></i> 17.8%</div>
              </div>
              <div class="nri-vchart-bar-container" style="--bar-height: 220px;">
                <div class="nri-vchart-bar">
                  <svg class="nri-vchart-bar-trend" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M 10 85 Q 45 65 90 15" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <div class="nri-vchart-bottom">
                <div class="nri-vchart-icon-circle"><i class="fas fa-building-columns" aria-hidden="true"></i></div>
                <h4 class="nri-vchart-city">Bengaluru</h4>
                <p class="nri-vchart-sub">Outer Ring Rd &amp; Whitefield</p>
                <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.8% yield</div>
              </div>
            </div>

           

            <!-- HYDERABAD -->
            <div class="nri-vchart-col nri-vchart-col--green">
              <div class="nri-vchart-top">
                <div class="nri-vchart-val"><i class="fas fa-arrow-up-right" aria-hidden="true"></i> 21.2%</div>
              </div>
              <div class="nri-vchart-bar-container" style="--bar-height: 255px;">
                <div class="nri-vchart-bar">
                  <svg class="nri-vchart-bar-trend" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M 10 85 Q 45 65 90 15" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <div class="nri-vchart-bottom">
                <div class="nri-vchart-icon-circle"><i class="fas fa-gopuram" aria-hidden="true"></i></div>
                <h4 class="nri-vchart-city">Hyderabad</h4>
                <p class="nri-vchart-sub">HITEC City &amp; Gachibowli</p>
                <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 4.1% yield</div>
              </div>
            </div>

            <!-- MUMBAI (MMR) -->
             <!-- GURUGRAM (TOP PERFORMER) -->
            <div class="nri-vchart-col nri-vchart-col--gold">
              <div class="nri-vchart-top">
                <span class="nri-vchart-crown-pill"><i class="fas fa-crown" aria-hidden="true"></i> TOP PERFORMER</span>
                <div class="nri-vchart-val"><i class="fas fa-arrow-up-right" aria-hidden="true"></i> 24.5%</div>
              </div>
              <div class="nri-vchart-bar-container" style="--bar-height: 290px;">
                <div class="nri-vchart-bar">
                  <svg class="nri-vchart-bar-trend" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M 10 85 Q 45 65 90 15" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <div class="nri-vchart-bottom">
                <div class="nri-vchart-icon-circle"><i class="fas fa-city" aria-hidden="true"></i></div>
                <h4 class="nri-vchart-city">Gurugram</h4>
                <p class="nri-vchart-sub">Golf Course Ext. &amp; Dwarka Exp.</p>
                <div class="nri-vchart-yield-pill"><i class="fas fa-coins" aria-hidden="true"></i> 3.2% yield</div>
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
          <p class="nri-path-kicker"><i class="fas fa-route" aria-hidden="true"></i> Remote buying · end to end</p>
          <h2 id="nri-path-title">Everything you need, even from <em>miles away</em></h2>
          <p class="nri-path-lead">Your NRI investment journey in six clear steps — with dedicated support at every stage, most of it doable without flying to India.</p>
        </header>

        <ol class="nri-path-steps nri-reveal" aria-label="NRI investment journey steps">
          <li class="nri-path-step">
            <span class="nri-path-step-num">01</span>
            <strong>Discover</strong>
            <span class="nri-path-step-hint">Curated shortlists</span>
          </li>
          <li class="nri-path-step">
            <span class="nri-path-step-num">02</span>
            <strong>Compare</strong>
            <span class="nri-path-step-hint">Price &amp; plans</span>
          </li>
          <li class="nri-path-step">
            <span class="nri-path-step-num">03</span>
            <strong>Virtual tour</strong>
            <span class="nri-path-step-hint">Live walkthroughs</span>
          </li>
          <li class="nri-path-step">
            <span class="nri-path-step-num">04</span>
            <strong>Verify</strong>
            <span class="nri-path-step-hint">Legal &amp; RERA</span>
          </li>
          <li class="nri-path-step">
            <span class="nri-path-step-num">05</span>
            <strong>Book</strong>
            <span class="nri-path-step-hint">NRE/NRO · FEMA</span>
          </li>
          <li class="nri-path-step">
            <span class="nri-path-step-num">06</span>
            <strong>Manage</strong>
            <span class="nri-path-step-hint">Handover &amp; rent</span>
          </li>
        </ol>

        <div class="nri-path-cta nri-reveal">
          <a href="/contact" class="nri-btn nri-btn--primary">Start your journey <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a href="/listings" class="nri-btn nri-btn--outline-dark">Browse NRI listings</a>
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
        <div class="nri-inv-platform nri-reveal">
          <p>Ready to shortlist projects, compare payment plans, and track growth?</p>
          <a href="/investment-opportunities" class="nri-btn nri-btn--primary">Open investment platform <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </section>

    <section class="nri-section nri-metro-arena" id="nri-compare" aria-labelledby="nri-metro-arena-title">
      <div class="nri-container">
        <header class="nri-metro-arena-head nri-reveal">
          <p class="nri-metro-arena-eyebrow">Compare before you commit</p>
          <h2 id="nri-metro-arena-title">Metro <em>showdown</em></h2>
          <p>Three cities NRIs shortlist most — entry ticket, growth heat, and rental yield in one glance.</p>
        </header>

        <div class="nri-metro-arena-grid nri-reveal">
          <article class="nri-metro-pillar nri-metro-pillar--lead">
            <span class="nri-metro-rank">#1 NRI flow</span>
            <h3>Gurugram</h3>
            <p class="nri-metro-tag">NCR · Dwarka Expressway belt</p>
            <div class="nri-metro-growth">
              <div class="nri-metro-growth-top">
                <span>Growth heat*</span>
                <strong>+24.5%</strong>
              </div>
              <div class="nri-metro-growth-track" role="presentation">
                <span class="nri-metro-growth-fill" style="--nri-metro-pct: 92"></span>
              </div>
            </div>
            <ul class="nri-metro-facts">
              <li><span>Entry</span><strong>₹1.8 Cr+</strong></li>
              <li><span>Yield</span><strong>3.2%</strong></li>
              <li><span>Depth</span><strong>25+ projects</strong></li>
            </ul>
          </article>

          <article class="nri-metro-pillar">
            <span class="nri-metro-rank">Tech rental hub</span>
            <h3>Bengaluru</h3>
            <p class="nri-metro-tag">ORR · Peripheral townships</p>
            <div class="nri-metro-growth">
              <div class="nri-metro-growth-top">
                <span>Growth heat*</span>
                <strong>+17.0%</strong>
              </div>
              <div class="nri-metro-growth-track" role="presentation">
                <span class="nri-metro-growth-fill" style="--nri-metro-pct: 68"></span>
              </div>
            </div>
            <ul class="nri-metro-facts">
              <li><span>Entry</span><strong>₹80 L+</strong></li>
              <li><span>Yield</span><strong>3.4%</strong></li>
              <li><span>Depth</span><strong>30+ projects</strong></li>
            </ul>
          </article>

          <article class="nri-metro-pillar">
            <span class="nri-metro-rank">Legacy premium</span>
            <h3>Mumbai</h3>
            <p class="nri-metro-tag">Coastal Rd · Metro 3 corridors</p>
            <div class="nri-metro-growth">
              <div class="nri-metro-growth-top">
                <span>Growth heat*</span>
                <strong>+12.6%</strong>
              </div>
              <div class="nri-metro-growth-track" role="presentation">
                <span class="nri-metro-growth-fill" style="--nri-metro-pct: 52"></span>
              </div>
            </div>
            <ul class="nri-metro-facts">
              <li><span>Entry</span><strong>₹2.4 Cr+</strong></li>
              <li><span>Yield</span><strong>2.9%</strong></li>
              <li><span>Depth</span><strong>20+ projects</strong></li>
            </ul>
          </article>
        </div>

        <p class="nri-metro-arena-foot nri-reveal">* Trailing 18-month indicative corridor data — not ranked advice. Use our full compare tools for project-level due diligence.</p>
        <div class="nri-metro-arena-cta nri-reveal">
          <a href="/compare-properties" class="nri-btn nri-btn--primary">Compare properties <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <a href="/investment-opportunities" class="nri-btn nri-btn--ghost">Open investor hub</a>
        </div>
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

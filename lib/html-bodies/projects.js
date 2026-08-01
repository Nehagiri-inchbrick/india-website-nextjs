export const bodyClass = "pj-page";
export const html = `
  <div class="pj-page">
  <section class="pj-hero">
    <div class="pj-hero-bg" aria-hidden="true"></div>
    <div class="pj-container pj-hero-inner">
      <p class="pj-brand">Inchbrick Realty</p>
      <h1>Explore curated projects</h1>
      <p class="pj-lead">RERA-guided homes and townships from trusted developers.</p>
    </div>
  </section>

  <div class="pj-main" data-html-main>
    <div class="pj-container pj-layout">

      <aside class="pj-side">
        <div class="pj-side-overview">
          <p class="pj-side-kicker">Project desk</p>
          <h2 class="pj-side-heading">Find the right launch</h2>
          <p class="pj-side-copy">Filter by status, city, and category. Each card shows configuration, size, amenities, and RERA ID.</p>
          <ul class="pj-side-stats" aria-label="Catalogue snapshot">
            <li><strong data-pj-stat="total">18+</strong><span>Projects</span></li>
            <li><strong data-pj-stat="cities">8+</strong><span>Cities</span></li>
            <li><strong data-pj-stat="devs">6+</strong><span>Developers</span></li>
          </ul>
        </div>

        <p class="pj-side-title">Browse by category</p>
        <nav class="pj-tabs" aria-label="Project categories" data-pj-tabs>
          <button type="button" class="is-active" data-pj-tab="featured">
            <i class="fas fa-star" aria-hidden="true"></i>
            <span>Featured</span>
            <em data-pj-count="featured"></em>
          </button>
          <button type="button" data-pj-tab="ready">
            <i class="fas fa-key" aria-hidden="true"></i>
            <span>Ready-to-Move</span>
            <em data-pj-count="ready"></em>
          </button>
          <button type="button" data-pj-tab="under-construction">
            <i class="fas fa-helmet-safety" aria-hidden="true"></i>
            <span>Under Construction</span>
            <em data-pj-count="under-construction"></em>
          </button>
          <button type="button" data-pj-tab="new-launch">
            <i class="fas fa-rocket" aria-hidden="true"></i>
            <span>New Launches</span>
            <em data-pj-count="new-launch"></em>
          </button>
          <button type="button" data-pj-tab="luxury">
            <i class="fas fa-gem" aria-hidden="true"></i>
            <span>Luxury</span>
            <em data-pj-count="luxury"></em>
          </button>
          <button type="button" data-pj-tab="commercial">
            <i class="fas fa-briefcase" aria-hidden="true"></i>
            <span>Commercial</span>
            <em data-pj-count="commercial"></em>
          </button>
          <button type="button" data-pj-tab="township">
            <i class="fas fa-city" aria-hidden="true"></i>
            <span>Township</span>
            <em data-pj-count="township"></em>
          </button>
        </nav>

        <div class="pj-side-details">
          <p class="pj-side-title">What you get</p>
          <ul class="pj-side-points">
            <li>
              <i class="fas fa-shield-halved" aria-hidden="true"></i>
              <div>
                <strong>RERA-guided shortlists</strong>
                <span>Registration clarity and delivery signals reviewed upfront.</span>
              </div>
            </li>
            <li>
              <i class="fas fa-building" aria-hidden="true"></i>
              <div>
                <strong>Trusted developers</strong>
                <span>DLF, Lodha, Prestige, Godrej, Oberoi, Brigade and more.</span>
              </div>
            </li>
            <li>
              <i class="fas fa-calendar-check" aria-hidden="true"></i>
              <div>
                <strong>Clear timelines</strong>
                <span>Configuration, size, and key amenities on every card.</span>
              </div>
            </li>
            <li>
              <i class="fas fa-map-location-dot" aria-hidden="true"></i>
              <div>
                <strong>City-ready filters</strong>
                <span>Search by project, developer, city, status, or RERA ID.</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="pj-side-card">
          <span class="pj-side-card-kicker">Advisor support</span>
          <p>Need a shortlist matched to budget, possession, and city? Speak with an Inchbrick advisor.</p>
          <ul class="pj-side-card-list">
            <li>Zero-brokerage guidance</li>
            <li>Site-visit planning</li>
            <li>Payment-plan clarity</li>
          </ul>
          <a href="/home-buying-assistance" class="pj-btn pj-btn--primary pj-btn--full">Get Buying Help</a>
        </div>
      </aside>

      <section class="pj-panel">
        <form class="pj-search" data-pj-search-form role="search">
          <div class="pj-filter-bar" data-pj-filter-bar>
            <button type="button" class="pj-filter-ico is-active" data-pj-open="search" aria-label="Open search">
              <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
            </button>
            <button type="button" class="pj-filter-ico" data-pj-open="city" aria-label="Open city filter">
              <i class="fas fa-location-dot" aria-hidden="true"></i>
              <span class="pj-filter-dot" data-pj-dot="city" hidden></span>
            </button>
            <button type="button" class="pj-filter-ico" data-pj-open="status" aria-label="Open status filter">
              <i class="fas fa-sliders" aria-hidden="true"></i>
              <span class="pj-filter-dot" data-pj-dot="status" hidden></span>
            </button>
            <button type="button" class="pj-filter-ico pj-filter-ico--reset" data-pj-clear aria-label="Reset filters">
              <i class="fas fa-rotate-left" aria-hidden="true"></i>
            </button>
          </div>

          <div class="pj-filter-sheet" data-pj-sheet>
            <div class="pj-filter-sheet-head">
              <strong data-pj-sheet-title>Search</strong>
              <button type="button" class="pj-filter-sheet-close" data-pj-sheet-close aria-label="Close filters">
                <i class="fas fa-xmark" aria-hidden="true"></i>
              </button>
            </div>

            <label class="pj-search-field" data-pj-panel="search">
              <span class="sr-only">Search projects</span>
              <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
              <input type="search" data-pj-search placeholder="Search project, developer, city, RERA…" autocomplete="off">
            </label>

            <div class="pj-filter-row">
              <label class="pj-filter-field" data-pj-panel="city">
                <span class="pj-filter-label">City</span>
                <select data-pj-city aria-label="Filter projects by city">
                  <option value="">All cities</option>
                </select>
                <i class="fas fa-chevron-down" aria-hidden="true"></i>
              </label>
              <label class="pj-filter-field" data-pj-panel="status">
                <span class="pj-filter-label">Status</span>
                <select data-pj-status aria-label="Filter projects by status">
                  <option value="">All statuses</option>
                  <option value="Ready to Move">Ready to Move</option>
                  <option value="Under Construction">Under Construction</option>
                  <option value="New Launch">New Launch</option>
                </select>
                <i class="fas fa-chevron-down" aria-hidden="true"></i>
              </label>
            </div>

            <button class="pj-clear pj-clear--desk" type="button" data-pj-clear-desk>
              <i class="fas fa-rotate-left" aria-hidden="true"></i>
              <span>Reset</span>
            </button>
          </div>
        </form>

        <header class="pj-panel-head">
          <div>
            <h2 data-pj-title>Featured Projects</h2>
            <p data-pj-desc>Top picks with strong demand, trusted builders, and clear possession timelines.</p>
          </div>
          <div class="pj-filter-summary" aria-live="polite" data-pj-summary></div>
        </header>

        <div class="pj-grid" data-pj-grid></div>
      </section>

    </div>
  </div>

  <div class="pj-mobile-cta" aria-label="Advisor help">
    <p>Need help shortlisting?</p>
    <a href="/home-buying-assistance" class="pj-btn pj-btn--primary">Talk to advisor</a>
  </div>
  </div>
`;

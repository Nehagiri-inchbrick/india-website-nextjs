export const bodyClass = "listings-page";
export const html = `
  <div class="listings-hero-wrap">
    <section class="listings-hero" aria-label="Property listings">
      <div class="listings-hero-inner">
        <div class="listings-hero-main">
          <span class="listings-hero-kicker"><i class="fas fa-building"></i> Verified Listings</span>
          <h1>Property <span>Listings</span></h1>
          <p class="listings-hero-desc">RERA-approved homes — filter by city, budget, and BHK.</p>
        </div>
      </div>
    </section>
  </div>

  <div class="listings-body">
    <div class="listings-rail">
      <div class="listings-side-overview">
        <p class="listings-side-kicker">Listing desk</p>
        <h2 class="listings-side-heading">Shortlist with clarity</h2>
        <p class="listings-side-copy">Use city, type, BHK, budget, status, and lifestyle filters. Cards show price, configuration, area, and location at a glance.</p>
        <ul class="listings-side-stats" aria-label="Catalogue snapshot">
          <li><strong data-ls-stat="total">28+</strong><span>Listings</span></li>
          <li><strong data-ls-stat="cities">8+</strong><span>Cities</span></li>
          <li><strong data-ls-stat="types">3</strong><span>Property types</span></li>
        </ul>
      </div>

      <aside class="listings-filters" aria-label="Filter properties" data-listings-filters>
        <p class="listings-filters-mobile-title">Refine shortlist <span>Tap a tool</span></p>
        <div class="listings-filter-bar" data-listings-filter-bar>
          <button type="button" class="listings-filter-ico" data-ls-open="search" aria-label="Open search">
            <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
            <span class="listings-filter-ico-label">Search</span>
          </button>
          <button type="button" class="listings-filter-ico" data-ls-open="filters" aria-label="Open filters">
            <i class="fas fa-sliders" aria-hidden="true"></i>
            <span class="listings-filter-ico-label">Filters</span>
            <span class="listings-filter-dot" data-ls-dot hidden></span>
          </button>
          <button type="button" class="listings-filter-ico listings-filter-ico--reset" id="filterReset" aria-label="Reset filters">
            <i class="fas fa-rotate-left" aria-hidden="true"></i>
            <span class="listings-filter-ico-label">Reset</span>
          </button>
        </div>

        <div class="listings-filter-sheet" data-ls-sheet>
          <div class="listings-filters-head">
            <h2 data-ls-sheet-title><i class="fas fa-sliders"></i> Filters</h2>
            <div class="listings-filters-head-actions">
              <button type="button" class="filter-reset" id="filterResetDesk">Reset all</button>
              <button type="button" class="listings-filter-sheet-close" data-ls-sheet-close aria-label="Close filters">
                <i class="fas fa-xmark" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <form id="listingsFilterForm">
            <div class="filter-group" data-ls-panel="search">
              <label for="filterSearch">Search by name</label>
              <input type="text" id="filterSearch" name="q" placeholder="e.g. Villa, Goa…" autocomplete="off" />
            </div>

            <div class="filter-group" data-ls-panel="filters">
              <label for="filterCity">City</label>
              <select id="filterCity" name="city">
                <option value="">All cities</option>
              </select>
            </div>

            <div class="filter-group" data-ls-panel="filters">
              <label for="filterType">Property type</label>
              <select id="filterType" name="type">
                <option value="">All types</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
              </select>
            </div>

            <div class="filter-group" data-ls-panel="filters">
              <label for="filterBhk">Bedrooms (BHK)</label>
              <select id="filterBhk" name="bhk">
                <option value="">Any BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="0">Plot</option>
              </select>
            </div>

            <div class="filter-group" data-ls-panel="filters">
              <label for="filterPrice">Max budget</label>
              <select id="filterPrice" name="priceMax">
                <option value="">No limit</option>
                <option value="50">Up to ₹ 50 L</option>
                <option value="100">Up to ₹ 1 Cr</option>
                <option value="200">Up to ₹ 2 Cr</option>
                <option value="500">Up to ₹ 5 Cr</option>
              </select>
            </div>

            <div class="filter-group" data-ls-panel="filters">
              <label for="filterStatus">Status</label>
              <select id="filterStatus" name="status">
                <option value="">Any status</option>
                <option value="Ready">Ready to move</option>
                <option value="New Launch">New launch</option>
                <option value="Under Construction">Under construction</option>
              </select>
            </div>

            <div class="filter-group" data-ls-panel="filters">
              <label for="filterMood">Lifestyle / mood</label>
              <select id="filterMood" name="mood">
                <option value="">All lifestyles</option>
                <option value="cozy">Family Living</option>
                <option value="urban">City Life</option>
                <option value="beachside">Beach Life</option>
                <option value="nature">Peace &amp; Quiet</option>
                <option value="wfh">Work From Home</option>
                <option value="investment">Investment</option>
              </select>
            </div>

            <button type="submit" class="filter-apply">Apply filters</button>
          </form>
        </div>
      </aside>

      <div class="listings-side-details">
        <p class="listings-side-title">What you get</p>
        <ul class="listings-side-points">
          <li>
            <i class="fas fa-shield-halved" aria-hidden="true"></i>
            <div>
              <strong>RERA-checked options</strong>
              <span>Shortlists focused on clarity and verified inventory.</span>
            </div>
          </li>
          <li>
            <i class="fas fa-sliders" aria-hidden="true"></i>
            <div>
              <strong>Precise filters</strong>
              <span>City, type, BHK, budget, status, and lifestyle mood.</span>
            </div>
          </li>
          <li>
            <i class="fas fa-map-location-dot" aria-hidden="true"></i>
            <div>
              <strong>Location-first browsing</strong>
              <span>Compare homes across India’s key residential markets.</span>
            </div>
          </li>
          <li>
            <i class="fas fa-handshake" aria-hidden="true"></i>
            <div>
              <strong>Advisor support</strong>
              <span>Zero-brokerage help from shortlist to site visit.</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="listings-side-card">
        <span class="listings-side-card-kicker">Need a shortlist?</span>
        <p>Tell us your city, budget, and BHK — we’ll match ready, launch, and under-construction options.</p>
        <ul class="listings-side-card-list">
          <li>Budget-matched picks</li>
          <li>Site-visit planning</li>
          <li>Payment-plan clarity</li>
        </ul>
        <a href="/home-buying-assistance" class="listings-side-cta">Get Buying Help</a>
      </div>
    </div>

    <section class="listings-results" aria-label="Property results">
      <div class="listings-results-bar">
        <p class="listings-count" id="listingsCount"><strong>0</strong> properties found</p>
        <div class="listings-active-tags" id="listingsActiveTags"></div>
        <label class="listings-sort-wrap">
          Sort
          <select id="listingsSort" aria-label="Sort results">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
      </div>

      <div class="listings-list" id="listingsList" aria-live="polite"></div>
    </section>
  </div>

  <div class="listings-mobile-cta" aria-label="Advisor help">
    <p>Need help shortlisting?</p>
    <a href="/home-buying-assistance">Talk to advisor</a>
  </div>
`;

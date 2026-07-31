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
        <div class="listings-hero-stats">
          <div class="listings-hero-stat"><strong>28+</strong><span>Live listings</span></div>
          <div class="listings-hero-stat"><strong>8</strong><span>Cities</span></div>
          <div class="listings-hero-stat"><strong>100%</strong><span>RERA checked</span></div>
        </div>
      </div>
    </section>
  </div>

  <div class="listings-body">
    <div class="listings-body-layout">
      <aside class="listings-filters" aria-label="Filter properties" data-listings-filters>
        <div class="listings-filter-bar" data-listings-filter-bar>
          <button type="button" class="listings-filter-ico" data-ls-open="search" aria-label="Open search">
            <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
          </button>
          <button type="button" class="listings-filter-ico" data-ls-open="filters" aria-label="Open filters">
            <i class="fas fa-sliders" aria-hidden="true"></i>
            <span class="listings-filter-dot" data-ls-dot hidden></span>
          </button>
          <button type="button" class="listings-filter-ico listings-filter-ico--reset" id="filterReset" aria-label="Reset filters">
            <i class="fas fa-rotate-left" aria-hidden="true"></i>
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
  </div>
`;

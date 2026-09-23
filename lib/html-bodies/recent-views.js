export const bodyClass = 'rv-page';
export const html = `
  <section class="rv-hero" aria-label="Recent property views">
    <div class="rv-container">
      <a href="/listings" class="rv-back"><i class="fas fa-arrow-left"></i> Back to Listings</a>
      <div class="rv-hero-inner">
        <div class="rv-hero-copy">
          <span class="rv-kicker"><i class="fas fa-clock-rotate-left"></i> Browsing history</span>
          <h1>Recent <span>Views</span></h1>
          <p>Properties you opened on this device — jump back in one click.</p>
        </div>
        <div class="rv-hero-meta">
          <span class="rv-pill"><b id="rvStatCount">0</b> viewed</span>
          <span class="rv-pill rv-pill--muted">Last <b id="rvStatLast">—</b></span>
        </div>
      </div>
    </div>
  </section>

  <div class="rv-main" data-html-main>
    <div class="rv-container">
      <section class="rv-toolbar" aria-label="Recent views actions">
        <div class="rv-toolbar-left">
          <h2><i class="fas fa-history"></i> Recently viewed</h2>
          <span class="rv-count" id="rvCount">0 in history</span>
        </div>
        <div class="rv-toolbar-actions">
          <a href="/listings" class="rv-link-chip"><i class="fas fa-compass"></i> Listings</a>
          <a href="/saved-properties" class="rv-link-chip"><i class="fas fa-heart"></i> Saved</a>
          <button type="button" class="rv-btn rv-btn--ghost" id="rvClearBtn">
            <i class="fas fa-eraser"></i> Clear
          </button>
          <a href="/listings" class="rv-btn rv-btn--primary"><i class="fas fa-plus"></i> Explore</a>
        </div>
      </section>

      <section class="rv-grid-wrap" id="rvGridWrap">
        <div class="rv-grid" id="rvGrid"></div>
        <div class="rv-empty" id="rvEmpty" hidden>
          <div class="rv-empty-icon"><i class="fas fa-binoculars"></i></div>
          <h3>No recent views yet</h3>
          <p>Open any listing detail and it will show up here.</p>
          <a href="/listings" class="rv-btn rv-btn--primary">Browse properties</a>
        </div>
      </section>
    </div>
  </div>

  <div class="rv-toast" id="rvToast" role="status" aria-live="polite"></div>
`;

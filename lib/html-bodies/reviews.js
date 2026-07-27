export const bodyClass = "ts-page";
export const html = `
  <section class="ts-hero" aria-label="Client reviews">
    <div class="ts-container">
      <a href="/" class="ts-back"><i class="fas fa-arrow-left"></i> Back to Home</a>
      <div class="ts-hero-grid">
        <div class="ts-hero-copy">
          <span class="ts-kicker"><i class="fas fa-star"></i> Social Proof</span>
          <h1>Client <span>Reviews</span></h1>
          <p>Verified buyer feedback, video stories, and real purchase journeys with Inchbrick Realty.</p>
        </div>
        <div class="ts-hero-mini-stats" aria-label="Review highlights">
          <span><strong>4.9</strong> Google rating</span>
          <span><strong>150+</strong> happy buyers</span>
          <span><strong>9</strong> featured reviews</span>
        </div>
      </div>
    </div>
  </section>

  <main class="ts-main" data-html-main>
    <section class="ts-section">
      <div class="ts-container">
        <div class="ts-sec-head">
          <span class="ts-sec-kicker"><i class="fas fa-google"></i> Google Reviews</span>
          <h2>What buyers say about us</h2>
          <p>Real feedback from first-time buyers, investors, NRI clients, and families across major cities.</p>
        </div>
        <div class="ts-google-banner">
          <div class="ts-google-score">
            <strong>4.9</strong>
            <div>
              <div class="ts-stars">★★★★★</div>
              <p>Excellent on Google</p>
            </div>
          </div>
          <div class="ts-google-meta">
            <span>Verified buyer stories</span>
            <span>Pan-India advisory</span>
            <span>Transparent property guidance</span>
          </div>
        </div>
        <div class="ts-review-intro">
          <div class="ts-review-intro-card">
            <small>Why clients recommend us</small>
            <strong>Clear advice over pressure selling</strong>
            <p>Every review here reflects the same experience: better shortlists, honest comparisons, and support that stays until keys are in hand.</p>
          </div>
        </div>
        <div class="ts-review-grid" id="tsReviewGrid"></div>
      </div>
    </section>

    <section class="ts-section ts-section--alt">
      <div class="ts-container">
        <div class="ts-sec-head">
          <span class="ts-sec-kicker"><i class="fas fa-play-circle"></i> Video Stories</span>
          <h2>Short client moments</h2>
          <p>Quick clips from buyers who used Inchbrick for local site visits, virtual tours, and end-to-end support.</p>
        </div>
        <div class="ts-video-grid" id="tsVideoGrid"></div>
      </div>
    </section>

  </main>
`;

export const bodyClass = "ex-page";
export const html = `
  <!-- ═══ ACTIVE EVENT BANNER ═══ -->
  <section class="ex-hero" id="exActiveBanner" aria-label="Active expo">
    <div class="ex-hero-media" aria-hidden="true">
      <video class="ex-hero-video" id="exBannerVideo" muted loop playsinline autoplay preload="auto"
        poster="https://images.unsplash.com/photo-1507992781348-31024be7976e?auto=format&fit=crop&w=2200&q=90">
        <source id="exBannerVideoSrc" src="https://videos.pexels.com/video-files/3209676/3209676-hd_1920_1080_25fps.mp4" type="video/mp4">
      </video>
      <img class="ex-hero-bg" id="exBannerImg" src="https://images.unsplash.com/photo-1507992781348-31024be7976e?auto=format&fit=crop&w=2200&q=90" alt="">
    </div>
    <div class="ex-hero-shade"></div>
    <div class="ex-hero-grain"></div>

    <div class="ex-wrap ex-hero-content">
      <span class="ex-hero-kicker" id="exBannerKicker">
        <span class="ex-dot-live"></span> Live Now
      </span>
      <h1 id="exBannerTitle">Toronto Property Expo</h1>
      <p class="ex-hero-sub" id="exBannerSub">India's largest overseas property expo — meet top developers live.</p>

      <ul class="ex-banner-meta" id="exBannerMeta">
        <li><i class="far fa-calendar" aria-hidden="true"></i> <span>14–15 Jun 2025</span></li>
        <li><i class="far fa-clock" aria-hidden="true"></i> <span>10:00 AM – 7:00 PM</span></li>
        <li><i class="fas fa-map-marker-alt" aria-hidden="true"></i> <span>Metro Toronto Convention Centre</span></li>
      </ul>

      <div class="ex-banner-stats" id="exBannerStats" aria-label="Event highlights"></div>

      <div class="ex-banner-actions">
        <button type="button" class="ex-btn ex-btn--fill openRegisterModalBtn" id="exBannerRegister" data-event="toronto-june">
          Get VIP Pass <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </button>
        <a class="ex-btn ex-btn--line" id="exBannerDetail" href="/event-detail?slug=toronto-june">
          View Details
        </a>
      </div>

      <div class="ex-banner-devs" id="exBannerDevs" aria-label="Participating developers"></div>
    </div>
  </section>

  <!-- ═══ WHY ATTEND ═══ -->
  <section class="ex-section ex-section--light" id="ex-why">
    <div class="ex-wrap">
      <header class="ex-head">
        <span class="ex-tag">Why Attend</span>
        <h2>Everything You Need Under One Roof</h2>
        <p class="ex-head-sub">From first enquiry to final booking — connect with India's top developers, advisors, and exclusive launches in a single visit.</p>
      </header>
      <div class="ex-why-grid">
        <article class="ex-why-card">
          <span class="ex-why-ico" aria-hidden="true"><i class="fas fa-building"></i></span>
          <h3>Top Developers</h3>
          <p>Meet RERA-verified builders like DLF, Lodha, Godrej, Prestige, and more — face to face.</p>
        </article>
        <article class="ex-why-card">
          <span class="ex-why-ico" aria-hidden="true"><i class="fas fa-rocket"></i></span>
          <h3>Exclusive Launches</h3>
          <p>Be first to see new projects, early-bird pricing, and expo-only payment plans.</p>
        </article>
        <article class="ex-why-card">
          <span class="ex-why-ico" aria-hidden="true"><i class="fas fa-user-tie"></i></span>
          <h3>NRI Advisory Desk</h3>
          <p>On-site guidance for FEMA, taxation, repatriation, and home-loan options.</p>
        </article>
        <article class="ex-why-card">
          <span class="ex-why-ico" aria-hidden="true"><i class="fas fa-handshake"></i></span>
          <h3>Direct Deals</h3>
          <p>Book one-on-one meetings with sales heads — compare projects and close faster.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- ═══ UPCOMING TIMELINE ═══ -->
  <section class="ex-section" id="ex-upcoming">
    <div class="ex-wrap">
      <header class="ex-head">
        <span class="ex-tag">Upcoming Expos</span>
        <h2>Expo Timeline</h2>
        <p class="ex-head-sub" id="exUpcomingSub">Follow our global calendar — register early for priority VIP access.</p>
      </header>

      <div class="ex-filters" id="exFilters" role="toolbar" aria-label="Filter upcoming expos">
        <button type="button" class="ex-filter is-active" data-region="all">All <span id="exCountAll">0</span></button>
        <button type="button" class="ex-filter" data-region="americas">Americas</button>
        <button type="button" class="ex-filter" data-region="europe">Europe</button>
        <button type="button" class="ex-filter" data-region="middle-east">Middle East</button>
        <button type="button" class="ex-filter" data-region="asia-pacific">Asia Pacific</button>
        <button type="button" class="ex-filter" data-region="india">India</button>
      </div>

      <p class="ex-tl-hint" id="exTlHint">Showing next expos — use filters or Show more for the full calendar.</p>

      <ol class="ex-timeline" id="exTimeline" aria-label="Next upcoming expos"></ol>

      <div class="ex-compact-wrap" id="exCompactWrap" hidden>
        <h3 class="ex-compact-title">More on the calendar</h3>
        <ul class="ex-compact-list" id="exCompactList" aria-label="More upcoming expos"></ul>
      </div>

      <div class="ex-tl-more" id="exTlMoreBar">
        <button type="button" class="ex-btn ex-btn--gold-outline" id="exShowMoreBtn">
          Show more expos <i class="fas fa-chevron-down" aria-hidden="true"></i>
        </button>
        <button type="button" class="ex-btn ex-btn--gold-outline" id="exShowLessBtn" hidden>
          Show less <i class="fas fa-chevron-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- ═══ HOW IT WORKS ═══ -->
  <section class="ex-section ex-section--light" id="ex-how">
    <div class="ex-wrap">
      <header class="ex-head">
        <span class="ex-tag">Simple Process</span>
        <h2>How Your Expo Visit Works</h2>
        <p class="ex-head-sub">Four clear steps from registration to investment-ready conversations.</p>
      </header>
      <ol class="ex-steps">
        <li class="ex-step">
          <span class="ex-step-num">01</span>
          <h3>Register Free</h3>
          <p>Claim your VIP pass online in under 2 minutes — priority entry confirmed by email.</p>
        </li>
        <li class="ex-step">
          <span class="ex-step-num">02</span>
          <h3>Arrive &amp; Check In</h3>
          <p>Show your e-pass at the welcome desk, collect your expo map and schedule.</p>
        </li>
        <li class="ex-step">
          <span class="ex-step-num">03</span>
          <h3>Explore &amp; Meet</h3>
          <p>Tour project booths, attend workshops, and book private builder sessions.</p>
        </li>
        <li class="ex-step">
          <span class="ex-step-num">04</span>
          <h3>Decide with Confidence</h3>
          <p>Use on-site advisory and shortlist projects before you leave the venue.</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- ═══ VIP BENEFITS ═══ -->
  <section class="ex-section" id="ex-vip">
    <div class="ex-wrap ex-vip-grid">
      <div class="ex-vip-copy">
        <span class="ex-tag">VIP Access</span>
        <h2>What Your Free VIP Pass Includes</h2>
        <p>Every registered visitor gets premium access — no hidden fees, no queues for priority slots.</p>
        <button type="button" class="ex-btn ex-btn--fill openRegisterModalBtn" data-event="toronto-june">
          Get VIP Pass <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <ul class="ex-vip-list">
        <li><i class="fas fa-check" aria-hidden="true"></i> Priority entry &amp; express check-in</li>
        <li><i class="fas fa-check" aria-hidden="true"></i> Access to exclusive launch presentations</li>
        <li><i class="fas fa-check" aria-hidden="true"></i> Pre-booked developer meeting slots</li>
        <li><i class="fas fa-check" aria-hidden="true"></i> Free NRI tax &amp; legal advisory desk</li>
        <li><i class="fas fa-check" aria-hidden="true"></i> Expo-only offers &amp; payment plans</li>
        <li><i class="fas fa-check" aria-hidden="true"></i> Networking lounge &amp; welcome kit</li>
      </ul>
    </div>
  </section>

  <!-- ═══ EXPO GALLERY ═══ -->
  <section class="ex-gallery-section" id="ex-gallery" aria-label="Expo gallery">
    <div class="ex-gal-head-wrap">
      <div class="ex-gal-head-inner">
        <h2>Expo Gallery</h2>
        <div class="ex-gal-top-meta">
          <span class="ex-gal-counter" id="exGalCounter">01 / 06</span>
          <div class="ex-gal-nav-btns">
            <button type="button" class="ex-gal-nav" id="exGalPrev" aria-label="Previous scene"><i class="fas fa-chevron-left"></i></button>
            <button type="button" class="ex-gal-nav" id="exGalNext" aria-label="Next scene"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="ex-gal-viewport-shell">
      <div class="ex-gal-viewport">
        <div class="ex-gal-track" id="exGalTrack">
          <article class="ex-gal-slide is-active" data-title="Main Hall" data-place="Toronto Expo">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=90" alt="Expo main hall" loading="eager">
          </article>

          <article class="ex-gal-slide" data-title="Private Meetings" data-place="VIP Suites">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=90" alt="Private meetings" loading="lazy">
          </article>

          <article class="ex-gal-slide" data-title="Launch Stage" data-place="Keynote Arena">
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f39d4692?auto=format&fit=crop&w=2000&q=90" alt="Launch stage" loading="lazy">
          </article>

          <article class="ex-gal-slide" data-title="Model Homes" data-place="Experience Zone">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=90" alt="Model homes" loading="lazy">
          </article>

          <article class="ex-gal-slide" data-title="VIP Lounge" data-place="Members Only">
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=90" alt="VIP lounge" loading="lazy">
          </article>

          <article class="ex-gal-slide" data-title="Happy Buyers" data-place="Closing Moments">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=90" alt="Happy buyers" loading="lazy">
          </article>
        </div>
      </div>
    </div>

    <div class="ex-gal-foot-wrap">
      <div class="ex-gal-foot-inner">
        <p class="ex-gal-label" id="exGalLabel">Main Hall · Toronto Expo</p>
        <div class="ex-gal-thumbs" id="exGalThumbs" role="tablist" aria-label="Gallery scenes"></div>
      </div>
    </div>
  </section>

  <!-- ═══ PAST EVENTS ═══ -->
  <section class="ex-section ex-past-section" id="ex-past">
    <div class="ex-wrap">
      <header class="ex-head ex-head--past">
        <div>
          <span class="ex-tag">Past Expos</span>
          <h2>Where We've Been</h2>
          <p class="ex-head-sub">Memorable editions across global cities — venue, dates, and highlights from our journey.</p>
        </div>
        <div class="ex-past-nav" id="exPastNav">
          <button type="button" class="ex-past-nav-btn" id="exPastPrev" aria-label="Previous past events"><i class="fas fa-chevron-left"></i></button>
          <button type="button" class="ex-past-nav-btn" id="exPastNext" aria-label="Next past events"><i class="fas fa-chevron-right"></i></button>
        </div>
      </header>
      <div class="ex-past-track-wrap">
        <div class="ex-past-track" id="pastExposTrack" aria-label="Past expo events"></div>
      </div>
    </div>
  </section>

  <!-- ═══ TESTIMONIALS ═══ -->
  <section class="ex-section" id="ex-stories">
    <div class="ex-wrap">
      <header class="ex-head">
        <span class="ex-tag">Visitor Stories</span>
        <h2>What Buyers Say About Our Expos</h2>
      </header>
      <div class="ex-quote-grid">
        <blockquote class="ex-quote">
          <p>“Met three developers in one afternoon and shortlisted a Bangalore apartment with full NRI paperwork support. Saved weeks of travel.”</p>
          <footer>
            <strong>Rahul Mehta</strong>
            <span>NRI · Toronto Expo 2025</span>
          </footer>
        </blockquote>
        <blockquote class="ex-quote">
          <p>“The VIP lounge and one-on-one slots made it feel premium. We locked an early-bird plan that wasn't available online.”</p>
          <footer>
            <strong>Priya &amp; Arjun Shah</strong>
            <span>Investors · Dubai Expo 2024</span>
          </footer>
        </blockquote>
        <blockquote class="ex-quote">
          <p>“Clear advice on FEMA and home loans on-site. Finally understood what I could buy from the UK without guesswork.”</p>
          <footer>
            <strong>Ananya Krishnan</strong>
            <span>NRI · London Expo 2024</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>

  <!-- ═══ FAQ ═══ -->
  <section class="ex-section ex-section--light" id="ex-faq">
    <div class="ex-wrap ex-faq-wrap">
      <header class="ex-head">
        <span class="ex-tag">FAQ</span>
        <h2>Questions Before You Register</h2>
      </header>
      <div class="ex-faq-list" id="exFaqList">
        <details class="ex-faq-item" open>
          <summary>Is entry really free?</summary>
          <p>Yes. VIP passes are free with online registration. Priority entry and advisory desks are included — there is no ticket fee at the door for registered visitors.</p>
        </details>
        <details class="ex-faq-item">
          <summary>Who should attend?</summary>
          <p>End-users, NRIs, and investors looking at residential or commercial projects in India. Advisors are available for first-time buyers and seasoned investors alike.</p>
        </details>
        <details class="ex-faq-item">
          <summary>Can I book a private meeting with a developer?</summary>
          <p>Yes. After registration you can request meeting slots. On the day, visit the VIP desk to confirm or add appointments subject to availability.</p>
        </details>
        <details class="ex-faq-item">
          <summary>Do I need to bring documents?</summary>
          <p>Bring a government ID and any prior shortlists. For NRI advisory, passport and overseas address details help advisors give accurate guidance.</p>
        </details>
        <details class="ex-faq-item">
          <summary>Are projects RERA verified?</summary>
          <p>Inchbrick features RERA-verified developers and projects. Ask our on-site team for project-wise registration details before you book.</p>
        </details>
      </div>
    </div>
  </section>

  <!-- ═══ CTA ═══ -->
  <section class="ex-cta-strip">
    <div class="ex-wrap ex-cta-strip-inner">
      <div class="ex-cta-copy">
        <h2>Reserve Your Free VIP Pass</h2>
        <p>Join thousands of buyers and NRIs at Inchbrick expos worldwide.</p>
      </div>
      <div class="ex-cta-actions">
        <button class="ex-btn ex-btn--fill openRegisterModalBtn" id="exCtaRegister" data-event="toronto-june">
          Register Now <i class="fas fa-arrow-right"></i>
        </button>
        <a class="ex-cta-help" href="tel:+919999999999"><i class="fas fa-phone" aria-hidden="true"></i> +91 99999 99999</a>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div class="ex-modal" id="expoRegisterModal" role="dialog" aria-modal="true" aria-label="Register">
    <div class="ex-modal-box">
      <button class="ex-modal-x" id="closeModalBtn" aria-label="Close"><i class="fas fa-times"></i></button>
      <div class="ex-modal-visual">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=85" alt="">
        <div class="ex-modal-visual-cap"><strong>Free Entry</strong><span>Priority access · Builder meetings</span></div>
      </div>
      <div class="ex-modal-form">
        <h3>Registration</h3>
        <form id="expoRegisterForm" novalidate>
          <div class="ex-form-row">
            <div class="ex-fi"><label for="exName">Name *</label><input type="text" id="exName" required placeholder="Full name"></div>
            <div class="ex-fi"><label for="exPhone">Phone *</label><input type="tel" id="exPhone" required placeholder="+91 99999 99999"></div>
          </div>
          <div class="ex-fi"><label for="exEmail">Email *</label><input type="email" id="exEmail" required placeholder="you@email.com"></div>
          <div class="ex-fi">
            <label for="exEvent">Event *</label>
            <select id="exEvent" required>
              <option value="">Select expo</option>
            </select>
          </div>
          <button type="submit" class="ex-form-submit"><i class="fas fa-ticket"></i> Confirm</button>
          <p class="ex-form-msg" id="exFormNote"></p>
        </form>
      </div>
    </div>
  </div>
`;

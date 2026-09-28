'use client';

import { useRef, useState } from 'react';
import {
  INVESTOR_TRUST_MEDIA,
  INVESTOR_TRUST_STATS,
  INVESTOR_TRUST_VIDEOS,
} from './investor-landing-data';

function TrustVideoCard({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <article className="inv-trust-video-card">
      <div className="inv-trust-video-frame">
        <video
          ref={videoRef}
          className="inv-trust-video-el"
          src={item.src}
          poster={item.poster}
          playsInline
          controls={playing}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {!playing ? (
          <button type="button" className="inv-trust-video-play" onClick={togglePlay} aria-label="Play testimonial">
            <i className="fas fa-play" aria-hidden="true" />
          </button>
        ) : null}
        <span className="inv-trust-video-tag">{item.tag}</span>
      </div>
      <blockquote className="inv-trust-video-quote">
        <p>&ldquo;{item.quote}&rdquo;</p>
        <footer>{item.meta}</footer>
      </blockquote>
    </article>
  );
}

export default function InvestorTrustSection() {
  return (
    <section
      className="inv-trust inv-land-block inv-reveal"
      id="investor-trust"
      aria-labelledby="inv-trust-title"
    >
      <div className="inv-wrap">
        <p className="inv-mock-eyebrow inv-trust-eyebrow">Investor Stories + Trust</p>

        <div className="inv-trust-split">
          <div className="inv-trust-media">
            <video
              className="inv-trust-media-video"
              src={INVESTOR_TRUST_MEDIA.video}
              poster={INVESTOR_TRUST_MEDIA.poster}
              playsInline
              muted
              loop
              autoPlay
              preload="metadata"
              aria-label={INVESTOR_TRUST_MEDIA.alt}
            />
          </div>

          <div className="inv-trust-copy">
            <h2 id="inv-trust-title">More Than Property. A Smarter Way to Invest.</h2>
            <p className="inv-trust-intro">
              Verified projects, transparent advisory, and end-to-end support — the same standards our investors rely
              on from first call to registration.
            </p>
            <ul className="inv-trust-stats">
              {INVESTOR_TRUST_STATS.map((stat, i) => (
                <li key={stat.label} style={{ '--inv-trust-i': i }}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="inv-trust-videos">
          <h3 className="inv-trust-videos-label">Investor stories in their words</h3>
          <div className="inv-trust-videos-grid">
            {INVESTOR_TRUST_VIDEOS.map((item) => (
              <TrustVideoCard key={item.meta} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

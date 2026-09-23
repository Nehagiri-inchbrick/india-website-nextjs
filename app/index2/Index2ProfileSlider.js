'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

function getVisibleCount() {
  if (typeof window === 'undefined') return 4;
  if (window.matchMedia('(max-width: 640px)').matches) return 2;
  if (window.matchMedia('(max-width: 1100px)').matches) return 3;
  return 4;
}

export default function Index2ProfileSlider({ profiles }) {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      setVisible(getVisibleCount());
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setIndex((current) => {
      const max = Math.max(0, profiles.length - visible);
      return Math.min(current, max);
    });
  }, [visible, profiles.length]);

  const maxIndex = Math.max(0, profiles.length - visible);
  const canNext = index < maxIndex;
  const canBack = index > 0 && !canNext;

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const goBack = useCallback(() => {
    setIndex(0);
  }, []);

  const onNavClick = () => {
    if (canNext) goNext();
    else if (canBack) goBack();
  };

  const trackStyle = {
    '--ix2-count': profiles.length,
    transform: `translateX(-${index * (100 / profiles.length)}%)`,
  };

  const sliderStyle = {
    '--ix2-count': profiles.length,
    '--ix2-visible': visible,
  };

  return (
    <div className="ix2-slider-row">
      <div className="ix2-slider" style={sliderStyle}>
        <div className="ix2-cards-track" style={trackStyle} role="list">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              href={profile.href}
              className="ix2-card"
              role="listitem"
              aria-label={`${profile.title}. ${profile.description}`}
            >
              <span className="ix2-card-ico" aria-hidden="true">
                <i className={`fas ${profile.icon}`} />
              </span>
              <span className="ix2-card-title">{profile.title}</span>
              <span className="ix2-card-desc">{profile.description}</span>
              <span className="ix2-card-go" aria-hidden="true">
                <i className="fas fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="ix2-slider-nav ix2-slider-nav--next"
        onClick={onNavClick}
        disabled={!canNext && !canBack}
        aria-label={canBack ? 'Show first profiles' : 'Show more profiles'}
      >
        <i className={`fas fa-chevron-${canBack ? 'left' : 'right'}`} aria-hidden="true" />
      </button>
    </div>
  );
}

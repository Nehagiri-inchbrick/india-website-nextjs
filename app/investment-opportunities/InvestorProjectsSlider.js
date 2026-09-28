'use client';

import { useCallback, useRef } from 'react';

export default function InvestorProjectsSlider({ ariaLabel, slideClassName = '', children }) {
  const viewportRef = useRef(null);

  const scrollByStep = useCallback((direction) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const slide = viewport.querySelector('.inv-proj-slider-slide');
    const track = viewport.querySelector('.inv-proj-slider-track');
    const gap = track ? parseFloat(getComputedStyle(track).gap) || 16 : 16;
    const step = slide ? slide.getBoundingClientRect().width + gap : viewport.clientWidth * 0.88;
    viewport.scrollBy({ left: direction * step, behavior: 'smooth' });
  }, []);

  return (
    <div className="inv-proj-slider">
      <div className="inv-proj-slider-toolbar">
        <p className="inv-proj-slider-hint">Swipe or use arrows to browse</p>
        <div className="inv-proj-slider-nav">
          <button
            type="button"
            className="inv-proj-slider-btn"
            aria-label="Previous slide"
            onClick={() => scrollByStep(-1)}
          >
            <i className="fas fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inv-proj-slider-btn"
            aria-label="Next slide"
            onClick={() => scrollByStep(1)}
          >
            <i className="fas fa-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="inv-proj-slider-viewport" ref={viewportRef} tabIndex={0}>
        <div className="inv-proj-slider-track" role="list" aria-label={ariaLabel}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSliderSlide({ className = '', children }) {
  return (
    <div className={`inv-proj-slider-slide${className ? ` ${className}` : ''}`} role="listitem">
      {children}
    </div>
  );
}

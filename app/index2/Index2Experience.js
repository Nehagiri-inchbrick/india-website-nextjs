import { Suspense } from 'react';
import Link from 'next/link';
import { EXPLORING_PROFILES } from './exploring-data';
import Index2ProfileSlider from './Index2ProfileSlider';

export default function Index2Experience() {
  return (
    <section className="ix2 ix2--exploring" aria-label="Who is exploring today">
      <div className="ix2-ambient" aria-hidden="true">
        <span className="ix2-orb ix2-orb--1" />
        <span className="ix2-orb ix2-orb--2" />
        <span className="ix2-orb ix2-orb--3" />
        <span className="ix2-scanline" />
      </div>
      <div className="ix2-grid-glow" aria-hidden="true" />
      <div className="ix2-overlay ix2-overlay--black" aria-hidden="true" />
      <div className="ix2-grain" aria-hidden="true" />

      <Link href="/home" className="ix2-logo" aria-label="Inchbrick Realty Home">
        <img src="/img/inchbrick-logo.png" alt="" width={180} height={48} />
      </Link>

      <div className="ix2-inner">
        <header className="ix2-head ix2-head--animate">
          <p className="ix2-kicker">
            <i className="fas fa-compass" aria-hidden="true" />
            Choose your experience
          </p>
          <h1 className="ix2-title">
            Who&apos;s exploring <span className="ix2-title-accent">today?</span>
          </h1>
          <p className="ix2-lead">
            Pick the path that matches your goals — we&apos;ll tailor projects, insights, and advisor support for you.
          </p>
        </header>

        <Suspense fallback={null}>
          <Index2ProfileSlider profiles={EXPLORING_PROFILES} />
        </Suspense>

        <Link href="/home" className="ix2-skip ix2-skip--animate" aria-label="Skip to main site">
          Skip to site
        </Link>
      </div>
    </section>
  );
}

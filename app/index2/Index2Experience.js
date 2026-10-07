import { Suspense } from 'react';
import Link from 'next/link';
import { EXPLORING_PROFILES } from './exploring-data';
import Index2ProfileSlider from './Index2ProfileSlider';

export default function Index2Experience() {
  return (
    <section className="ix2 ix2--exploring" aria-label="Who is exploring today">
      <Link href="/home" className="ix2-logo" aria-label="Inchbrick Realty Home">
        <img src="/img/inchbrick-logo.png" alt="" width={180} height={48} />
      </Link>

      <div className="ix2-inner">
        <header className="ix2-head">
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

        <Link href="/home" className="ix2-skip" aria-label="Skip to main site">
          Skip to site
        </Link>
      </div>
    </section>
  );
}

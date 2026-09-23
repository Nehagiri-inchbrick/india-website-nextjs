import Link from 'next/link';
import { EXPLORING_HERO_BG, EXPLORING_PROFILES } from './exploring-data';
import Index2ProfileSlider from './Index2ProfileSlider';

export default function Index2Experience() {
  return (
    <section className="ix2" aria-label="Who is exploring today">
      <div className="ix2-bg" style={{ backgroundImage: `url('${EXPLORING_HERO_BG}')` }} aria-hidden="true" />
      <div className="ix2-overlay" aria-hidden="true" />
      <div className="ix2-grain" aria-hidden="true" />

      <Link href="/home" className="ix2-logo" aria-label="Inchbrick Realty Home">
        <img src="/img/inchbrick-logo.png" alt="" width={180} height={48} />
      </Link>

      <div className="ix2-inner">
        <header className="ix2-head">
          <p className="ix2-kicker">Choose your experience</p>
          <h1 className="ix2-title">Who&apos;s exploring today?</h1>
          <p className="ix2-lead">
            Choose what best describes you and let us help you find the right property for your goals.
          </p>
        </header>

        <Index2ProfileSlider profiles={EXPLORING_PROFILES} />

        <Link href="/home" className="ix2-skip" aria-label="Skip to main site">
          Skip to site
        </Link>
      </div>
    </section>
  );
}

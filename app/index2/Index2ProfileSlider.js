'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getAuthSession } from '@/lib/inchbrick-auth';
import { isPublicRoute } from '@/components/AuthGuard';
import Index2LoginModal from './Index2LoginModal';

export default function Index2ProfileSlider({ profiles }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loginProfile, setLoginProfile] = useState(null);

  useEffect(() => {
    const redirectTarget = searchParams?.get('redirect');
    if (redirectTarget && !getAuthSession()) {
      setLoginProfile({
        id: 'explore-login',
        title: 'Sign in to Continue',
        description: 'Please sign in with your email and phone number to explore this page.',
        href: redirectTarget,
      });
    }
  }, [searchParams]);

  const onProfileClick = (profile) => {
    if (getAuthSession() || isPublicRoute(profile.href)) {
      router.push(profile.href);
      return;
    }
    setLoginProfile(profile);
  };

  const closeModal = () => {
    setLoginProfile(null);
    if (searchParams?.get('redirect')) {
      router.replace('/');
    }
  };

  const onLoggedIn = () => {
    const href = loginProfile?.href;
    setLoginProfile(null);
    if (href) {
      router.push(href);
    } else {
      router.push('/home');
    }
  };

  const sliderStyle = {
    '--ix2-count': profiles.length,
    '--ix2-visible': profiles.length,
  };

  const trackStyle = {
    '--ix2-count': profiles.length,
  };

  return (
    <>
      <div className="ix2-slider-row">
        <div className="ix2-slider" style={sliderStyle}>
          <div className="ix2-cards-track" style={trackStyle} role="list">
            {profiles.map((profile, i) => (
              <button
                key={profile.id}
                type="button"
                className={`ix2-card ix2-card--${profile.id}`}
                role="listitem"
                style={{
                  '--ix2-accent': profile.accent,
                  '--ix2-glow': profile.glow,
                  '--ix2-stagger': i,
                }}
                aria-label={`${profile.title}. ${profile.description}`}
                onClick={() => onProfileClick(profile)}
              >
                <span className="ix2-card-ico" aria-hidden="true">
                  <span className="ix2-card-ico-ring" />
                  <span className="ix2-card-ico-core">
                    <i className={`fas ${profile.icon}`} />
                  </span>
                </span>
                <span className="ix2-card-title">{profile.title}</span>
                <span className="ix2-card-go" aria-hidden="true">
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {loginProfile ? (
        <Index2LoginModal profile={loginProfile} onClose={closeModal} onLoggedIn={onLoggedIn} />
      ) : null}
    </>
  );
}

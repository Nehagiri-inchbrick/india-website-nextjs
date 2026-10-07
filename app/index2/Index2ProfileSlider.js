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

  return (
    <>
      <div className="ix2-cards" role="list">
        {profiles.map((profile, i) => (
          <button
            key={profile.id}
            type="button"
            className={`ix2-card ix2-card--${profile.id}`}
            role="listitem"
            style={{
              '--ix2-accent': profile.accent,
              '--ix2-stagger': i,
            }}
            aria-label={`${profile.title}. ${profile.description}`}
            onClick={() => onProfileClick(profile)}
          >
            <span className="ix2-card-media">
              <img src={profile.image} alt="" loading="eager" />
            </span>
            <span className="ix2-card-body">
              <span className="ix2-card-ico" aria-hidden="true">
                <i className={`fas ${profile.icon}`} />
              </span>
              <span className="ix2-card-title">{profile.title}</span>
              <span className="ix2-card-desc">{profile.description}</span>
              <span className="ix2-card-go" aria-hidden="true">
                <i className="fas fa-arrow-right" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {loginProfile ? (
        <Index2LoginModal profile={loginProfile} onClose={closeModal} onLoggedIn={onLoggedIn} />
      ) : null}
    </>
  );
}

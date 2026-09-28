'use client';

import { useEffect, useRef, useState } from 'react';
import {
  isValidEmail,
  isValidPhone,
  normalizePhone,
  setAuthSession,
} from '@/lib/inchbrick-auth';

export default function Index2LoginModal({ profile, onClose, onLoggedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  function validateBoth() {
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.');
      return false;
    }
    if (!isValidPhone(phone)) {
      setError('Enter a valid phone number (10–15 digits).');
      return false;
    }
    return true;
  }

  function finish(method, data) {
    if (!setAuthSession({ ...data, method })) {
      setError('Could not sign in. Try again.');
      setBusy(false);
      return;
    }
    onLoggedIn();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!validateBoth()) return;
    setBusy(true);
    window.setTimeout(
      () =>
        finish('email', {
          name: name.trim(),
          email: email.trim(),
          phone: normalizePhone(phone),
        }),
      350
    );
  }

  function handleGoogle() {
    setError('');
    let addr = email.trim();
    if (!addr) {
      const input = window.prompt('Enter your Gmail address to continue (demo sign-in):');
      if (input === null) return;
      addr = input.trim();
      setEmail(addr);
    }
    if (!isValidEmail(addr)) {
      setError('Enter a valid email or Gmail address.');
      return;
    }
    if (!isValidPhone(phone)) {
      setError('Enter your phone number together with email to continue.');
      return;
    }
    setBusy(true);
    window.setTimeout(
      () =>
        finish('google', {
          name: name.trim(),
          email: addr,
          phone: normalizePhone(phone),
        }),
      350
    );
  }

  if (!profile) return null;

  return (
    <div className="ix2-modal" role="dialog" aria-modal="true" aria-labelledby="ix2ModalTitle">
      <button type="button" className="ix2-modal-backdrop" onClick={onClose} aria-label="Close" />
      <div className="ix2-modal-panel">
        <button type="button" className="ix2-modal-close" onClick={onClose} aria-label="Close dialog">
          <i className="fas fa-xmark" aria-hidden="true" />
        </button>

        <p className="ix2-modal-kicker">Sign in to continue</p>
        <h2 id="ix2ModalTitle" className="ix2-modal-title">
          {profile.title}
        </h2>
        <p className="ix2-modal-lead">{profile.description}</p>

        <form className="ix2-modal-form" onSubmit={handleSubmit}>
          <label className="ix2-modal-label" htmlFor="ix2ModalName">
            Full name
          </label>
          <div className="ix2-modal-input-row">
            <i className="far fa-user" aria-hidden="true" />
            <input
              ref={nameRef}
              id="ix2ModalName"
              type="text"
              autoComplete="name"
              placeholder="Your name (e.g. Rahul Sharma)"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              disabled={busy}
            />
          </div>

          <label className="ix2-modal-label" htmlFor="ix2ModalEmail">
            Email
          </label>
          <div className="ix2-modal-input-row">
            <i className="far fa-envelope" aria-hidden="true" />
            <input
              id="ix2ModalEmail"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              disabled={busy}
              required
            />
          </div>

          <label className="ix2-modal-label" htmlFor="ix2ModalPhone">
            Phone number
          </label>
          <div className="ix2-modal-input-row">
            <i className="fas fa-phone" aria-hidden="true" />
            <input
              id="ix2ModalPhone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              disabled={busy}
              required
            />
          </div>

          <button type="submit" className="ix2-modal-submit" disabled={busy}>
            Continue
          </button>
        </form>

        <div className="ix2-modal-or">
          <span>or</span>
        </div>

        <button type="button" className="ix2-modal-google" onClick={handleGoogle} disabled={busy}>
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt=""
            width={18}
            height={18}
          />
          Continue with Gmail
        </button>
        <p className="ix2-modal-hint">Gmail sign-in also needs your phone number above.</p>

        {error ? (
          <p className="ix2-modal-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}

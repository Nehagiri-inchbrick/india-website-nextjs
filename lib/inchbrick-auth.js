/** Client-side session (localStorage) for exploring gate & site header. */

export const AUTH_KEY = 'inchbrick-auth';

export function getAuthSession() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data) return null;
    const hasEmail = typeof data.email === 'string' && data.email.trim();
    const hasPhone = typeof data.phone === 'string' && data.phone.trim();
    if (!hasEmail && !hasPhone) return null;
    return data;
  } catch {
    return null;
  }
}

export function setAuthSession({ name, email, phone, method }) {
  if (typeof window === 'undefined') return false;
  const payload = {
    at: Date.now(),
    method: method || (email ? 'email' : phone ? 'phone' : 'email'),
  };
  if (name && String(name).trim()) payload.name = String(name).trim();
  if (email && String(email).trim()) payload.email = String(email).trim();
  if (phone && String(phone).trim()) payload.phone = String(phone).trim();
  if (!payload.email && !payload.phone) return false;
  localStorage.setItem(AUTH_KEY, JSON.stringify(payload));
  window.dispatchEvent(new Event('inchbrick-auth-change'));
  return true;
}

export function isValidEmail(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) return false;
  if (typeof document !== 'undefined') {
    const input = document.createElement('input');
    input.type = 'email';
    input.value = trimmed;
    return input.checkValidity();
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

export function isValidPhone(value) {
  const digits = String(value || '').replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export function normalizePhone(value) {
  const digits = String(value || '').replace(/\D/g, '');
  if (digits.length === 10) return `+91 ${digits}`;
  if (digits.length === 12 && digits.startsWith('91')) return `+${digits.slice(0, 2)} ${digits.slice(2)}`;
  if (digits.length > 10) return `+${digits}`;
  return digits;
}

'use client';

import { useSyncExternalStore } from 'react';

export const INV_PROJECT_COMPARE_KEY = 'inchbrick-inv-project-compare';
export const INV_PROJECT_COMPARE_EVENT = 'inchbrick-inv-project-compare-change';
export const INV_PROJECT_COMPARE_MAX = 3;

/** Stable empty list for `useProjectCompareIds()` — do not pass `[]` inline. */
export const EMPTY_COMPARE_IDS = [];

export function readProjectCompareIds() {
  if (typeof window === 'undefined') return EMPTY_COMPARE_IDS;
  try {
    const raw = sessionStorage.getItem(INV_PROJECT_COMPARE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed) || parsed.length === 0) return EMPTY_COMPARE_IDS;
    return parsed.slice(0, INV_PROJECT_COMPARE_MAX);
  } catch {
    return EMPTY_COMPARE_IDS;
  }
}

export function persistProjectCompareIds(ids) {
  if (typeof window === 'undefined') return;
  const next = ids.slice(0, INV_PROJECT_COMPARE_MAX);
  try {
    sessionStorage.setItem(INV_PROJECT_COMPARE_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(INV_PROJECT_COMPARE_EVENT, { detail: next }));
  return next;
}

export function toggleProjectCompareId(id, current) {
  if (current.includes(id)) {
    return persistProjectCompareIds(current.filter((x) => x !== id));
  }
  if (current.length >= INV_PROJECT_COMPARE_MAX) {
    return persistProjectCompareIds([...current.slice(1), id]);
  }
  return persistProjectCompareIds([...current, id]);
}

function subscribeToProjectCompare(onStoreChange) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(INV_PROJECT_COMPARE_EVENT, onStoreChange);
  return () => window.removeEventListener(INV_PROJECT_COMPARE_EVENT, onStoreChange);
}

function snapshotKey(ids, fallback) {
  if (ids.length) return ids.join('\0');
  return `fb:${fallback.join('\0')}`;
}

const snapshotCaches = new Map();

function getCompareSnapshot(fallback) {
  const stored = readProjectCompareIds();
  const ids = stored.length ? stored : fallback;
  const key = snapshotKey(ids, fallback);
  const cached = snapshotCaches.get(key);
  if (cached) {
    return cached;
  }
  snapshotCaches.set(key, ids);
  return ids;
}

/**
 * SSR-safe compare IDs. Pass a stable module-level fallback when storage is empty
 * (e.g. `DEFAULT_COMPARE_IDS`), or omit for an empty shortlist.
 */
export function useProjectCompareIds(defaultIds = EMPTY_COMPARE_IDS) {
  const fallback = defaultIds.length ? defaultIds : EMPTY_COMPARE_IDS;

  return useSyncExternalStore(
    subscribeToProjectCompare,
    () => getCompareSnapshot(fallback),
    () => fallback
  );
}

export function trackEvent(event: string, payload?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  console.log('analytics:event', event, payload ?? {});
}

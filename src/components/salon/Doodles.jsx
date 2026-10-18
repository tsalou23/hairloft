/**
 * Hand-drawn marks used as stickers and eye-guides across the page.
 * All are stroke-based SVGs so they inherit the current text colour.
 */

export function StarBurst({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
    </svg>
  );
}

export function StarOutline({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={className}>
      <path d="M16 2l3.4 9.1 9.6.6-7.5 6 2.6 9.3L16 21.6 7.9 27l2.6-9.3-7.5-6 9.6-.6z" />
    </svg>
  );
}

export function ScribbleArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true" className={className}>
      <path d="M4 46c18-4 30-14 38-32" />
      <path d="M28 12l14 2-4 13" />
      <path d="M52 40c22-2 40-12 56-32" />
      <path d="M92 8l16 0-7 14" />
    </svg>
  );
}

export function Squiggle({ className = "" }) {
  return (
    <svg viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true" className={className}>
      <path d="M4 12c6-10 12-10 18 0s12 10 18 0 12-10 18 0 12 10 18 0 12-10 18 0" />
    </svg>
  );
}

export function CircleRing({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <circle cx="50" cy="50" r="45" strokeDasharray="6 9" />
    </svg>
  );
}

export function LogoMark({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true" className={className}>
      <path d="M92.5 67.6L67.6 92.5H32.4L7.5 67.6V32.4L32.4 7.5H67.6L92.5 32.4Z" strokeLinejoin="round" />
      <circle cx="38" cy="36" r="12" />
      <path d="M60 20v26" strokeLinecap="round" />
      <rect x="28" y="58" width="17" height="17" strokeLinejoin="round" />
      <path d="M62 75h22L73 54z" strokeLinejoin="round" />
    </svg>
  );
}
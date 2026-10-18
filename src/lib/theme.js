/**
 * Salon theme: turns the hex colours in `salonConfig.theme` into HSL channel
 * variables that the Tailwind `brand-*` colours read at runtime.
 */

const BRAND_TOKENS = {
  cream: "--brand-cream",
  ink: "--brand-ink",
  coral: "--brand-coral",
  butter: "--brand-butter",
  lilac: "--brand-lilac",
};

export function hexToHslChannels(hex) {
  if (typeof hex !== "string") return null;
  const value = hex.trim().replace(/^#/, "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  if (!/^[0-9a-f]{6}$/i.test(full)) return null;

  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;
  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    if (max === r) h = 60 * (((g - b) / delta) % 6);
    else if (max === g) h = 60 * ((b - r) / delta + 2);
    else h = 60 * ((r - g) / delta + 4);
  }
  if (h < 0) h += 360;

  return `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function applyBrandTheme(theme) {
  if (!theme || typeof document === "undefined") return;
  Object.entries(BRAND_TOKENS).forEach(([key, token]) => {
    const channels = hexToHslChannels(theme[key]);
    if (channels) document.documentElement.style.setProperty(token, channels);
  });
}
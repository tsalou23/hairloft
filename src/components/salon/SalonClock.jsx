import { useEffect, useState } from "react";

const supportedTimezones = (() => {
  try {
    return new Set(Intl.supportedValuesOf ? Intl.supportedValuesOf("timeZone") : []);
  } catch {
    return null;
  }
})();

export default function SalonClock({ timezone }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const valid = timezone && (!supportedTimezones || supportedTimezones.size === 0 || supportedTimezones.has(timezone));
  if (!valid) return null;

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone,
  }).format(now);

  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-ink/60">
      Studio time <span className="text-brand-ink">{time}</span>
    </p>
  );
}
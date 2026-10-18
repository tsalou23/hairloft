import { cn } from "@/lib/utils";
import { StarBurst } from "./Doodles";

export default function Ticker({ items = [], className = "" }) {
  const words = (items || []).filter(Boolean);
  if (!words.length) return null;
  const loop = [...words, ...words];

  return (
    <div className={cn("overflow-hidden border-y-2 border-brand-ink bg-brand-ink py-3", className)}>
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {loop.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center">
            <span className="px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-cream">
              {word}
            </span>
            <StarBurst className="h-2.5 w-2.5 shrink-0 text-brand-butter" />
          </span>
        ))}
      </div>
    </div>
  );
}
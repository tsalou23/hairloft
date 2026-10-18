import { cn } from "@/lib/utils";

/**
 * The studio sign: a painted yellow plaque carrying the salon name and its
 * credit line, read straight from `identity` in the salon config. It sits on
 * the leafage wall in the top bar.
 */
export default function Sign({ identity = {}, className = "" }) {
  const name = identity.name || identity.wordmark;

  return (
    <span
      className={cn(
        "inline-block -rotate-1 rounded-[3px] border-2 border-brand-ink/15 bg-brand-butter px-4 py-2.5",
        "shadow-[5px_5px_0_0_hsl(var(--brand-ink)/0.32)]",
        "transition-transform duration-300 ease-out hover:-rotate-2",
        className
      )}
    >
      <span className="block font-heading text-[15px] font-black uppercase leading-none tracking-[-0.02em] text-brand-ink sm:text-lg">
        {name}
      </span>
      {identity.byline && (
        <span className="mt-1.5 block font-mono text-[9px] uppercase leading-none tracking-[0.16em] text-brand-ink/70 sm:text-[10px]">
          {identity.byline}
        </span>
      )}
    </span>
  );
}
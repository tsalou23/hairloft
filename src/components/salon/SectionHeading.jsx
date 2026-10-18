import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import { Squiggle } from "./Doodles";

export default function SectionHeading({ eyebrow, title, accent, intro, align = "left", className = "" }) {
  if (!title && !eyebrow) return null;

  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-coral">{eyebrow}</p>
      )}
      {title && (
        <h2 className="font-heading text-[clamp(2.1rem,6vw,4.25rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-brand-ink">
          {title}
          {accent && (
            <>
              {" "}
              <span className="font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.01em] text-brand-coral">
                {accent}
              </span>
            </>
          )}
        </h2>
      )}
      {title && (
        <Squiggle className={cn("mt-6 h-4 w-28 text-brand-butter", align === "center" && "mx-auto")} />
      )}
      {intro && <p className="mt-6 text-lg leading-relaxed text-brand-ink/70">{intro}</p>}
    </Reveal>
  );
}
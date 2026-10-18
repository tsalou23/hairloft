import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TONES = ["bg-brand-butter", "bg-brand-lilac", "bg-brand-coral"];

export default function Services({ config }) {
  const [openIndex, setOpenIndex] = useState(0);

  const categories = (config.services?.categories || []).filter((c) => c?.items?.length);
  if (!categories.length) return null;

  return (
    <section id="services" className="border-y-2 border-brand-ink bg-brand-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow={config.services.eyebrow}
          title={config.services.heading}
          accent={config.services.headingAccent}
          intro={config.services.intro}
        />

        <div className="mt-12 border-2 border-brand-ink">
          {categories.map((category, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal
                key={category.name}
                delay={index * 0.05}
                className={cn(index > 0 && "border-t-2 border-brand-ink")}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-5 py-6 text-left transition-colors duration-300 sm:px-8",
                      isOpen ? TONES[index % TONES.length] : "bg-brand-cream hover:bg-brand-ink/[0.04]"
                    )}
                  >
                    <span className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-[11px] tabular-nums text-brand-ink/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-[clamp(1.6rem,4.5vw,3rem)] font-black uppercase leading-none tracking-[-0.04em] text-brand-ink">
                        {category.name}
                      </span>
                    </span>
                    <span className="flex items-center gap-4">
                      {category.blurb && (
                        <span className="hidden max-w-[15rem] text-sm leading-snug text-brand-ink/70 lg:block">
                          {category.blurb}
                        </span>
                      )}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-ink">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div className="bg-brand-cream px-5 pb-4 sm:px-8">
                    <ul>
                      {category.items.map((item, i) => (
                        <li
                          key={item.name}
                          className={cn(
                            "flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-5",
                            i > 0 && "border-t border-brand-ink/15"
                          )}
                        >
                          <div className="max-w-xl">
                            <p className="font-heading text-lg font-bold text-brand-ink">{item.name}</p>
                            {item.description && (
                              <p className="mt-1 text-sm leading-relaxed text-brand-ink/65">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-4 font-mono text-sm text-brand-ink">
                            {item.duration && <span className="text-brand-ink/55">{item.duration}</span>}
                            {item.price && (
                              <span className="rounded-full bg-brand-ink px-4 py-1.5 font-bold text-brand-cream">
                                {item.price}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
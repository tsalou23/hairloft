import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { StarBurst } from "./Doodles";

export default function Testimonials({ config }) {
  const items = (config.testimonials?.items || []).filter((t) => t?.quote);
  if (!items.length) return null;

  return (
    <section id="testimonials" className="bg-brand-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow={config.testimonials.eyebrow}
          title={config.testimonials.heading}
          accent={config.testimonials.headingAccent}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.quote.slice(0, 24)} delay={index * 0.06}>
              <figure className="flex h-full flex-col justify-between border-2 border-brand-ink bg-brand-cream p-7 sm:p-9">
                <StarBurst className="h-4 w-4 text-brand-coral" />
                <blockquote className="mt-6 font-serif text-2xl italic leading-snug text-brand-ink sm:text-3xl">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-ink/60">
                  <span>{item.author}</span>
                  {item.service && <span className="text-brand-ink/35">·</span>}
                  {item.service && <span>{item.service}</span>}
                  {item.sample && (
                    <span className="rounded-full border border-brand-ink/30 px-2.5 py-1 text-brand-ink/50">
                      Sample
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
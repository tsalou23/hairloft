import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { StarOutline } from "./Doodles";

export default function About({ config }) {
  const about = config.about;
  if (!about || !about.image?.src) return null;

  const body = (about.body || []).filter(Boolean);
  if (!body.length && !about.heading) return null;

  return (
    <section id="about" className="bg-brand-cream">
      <div className="mx-auto grid max-w-[1400px] items-start gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20 lg:py-28">
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.heading} accent={about.headingAccent} />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-brand-ink/80">
            {body.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {about.pullQuote && (
            <Reveal className="mt-10 border-l-4 border-brand-coral pl-6">
              <p className="font-serif text-2xl italic leading-snug text-brand-ink sm:text-3xl">
                “{about.pullQuote}”
              </p>
            </Reveal>
          )}
        </div>

        <Reveal className="relative">
          <SmartImage
            src={about.image.src}
            alt={about.image.alt}
            ratio={about.image.ratio || "portrait"}
            crop={about.image.crop}
            className="shadow-[16px_18px_0_0_hsl(var(--brand-lilac))]"
          />
          <StarOutline className="absolute -right-3 -top-6 h-10 w-10 animate-spin-slow text-brand-coral motion-reduce:animate-none" />
        </Reveal>
      </div>
    </section>
  );
}
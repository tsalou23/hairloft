import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { isActiveSection } from "@/lib/sections";
import SmartImage from "./SmartImage";
import BookButton from "./BookButton";
import Ticker from "./Ticker";
import { ScribbleArrow, StarBurst, StarOutline, CircleRing } from "./Doodles";

const ACCENT_TONES = {
  coral: "text-brand-coral",
  butter: "text-brand-butter",
  lilac: "text-brand-lilac",
};

export default function Hero({ config }) {
  const reduceMotion = useReducedMotion();

  const { hero } = config;
  if (!hero) return null;

  const collage = (hero.collage || []).filter((photo) => photo?.src);

  const CollageItem = ({ item, className }) => {
    if (item.isVideo) {
      return (
        <video
          src={item.src}
          className={cn("w-full h-full object-cover", className)}
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    return <SmartImage src={item.src} alt={item.alt} ratio={item.ratio || "portrait"} crop={item.crop} className={className} />;
  };
  const accentTone = ACCENT_TONES[hero.headline?.accentTone] || ACCENT_TONES.coral;
  const showWork = isActiveSection(config, "gallery");

  return (
    <section id="top" className="relative bg-brand-cream">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-10 lg:pb-24 lg:pt-20">
        {/* ---------------------------------------------------------- headline */}
        <div className="relative">
          {hero.kicker && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.24em] text-brand-ink/60"
            >
              {hero.kicker}
            </motion.p>
          )}

          <h1 className="font-heading text-[clamp(2.6rem,10vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.045em] text-brand-ink">
            {(hero.headline?.lines || []).map((line, i) => (
              <motion.span
                key={line}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
            {hero.headline?.accent && (
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={cn("block font-serif text-[1.08em] font-normal normal-case italic", accentTone)}
              >
                {hero.headline.accent}
              </motion.span>
            )}
          </h1>

          {hero.description && (
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-brand-ink/75">{hero.description}</p>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <BookButton booking={config.booking} className="px-8 py-4" />
            {showWork && hero.secondaryCta && (
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 border-b-2 border-brand-ink pb-1 font-heading text-sm font-bold uppercase tracking-[0.12em] text-brand-ink transition-colors hover:border-brand-coral hover:text-brand-coral"
              >
                {hero.secondaryCta}
              </a>
            )}
          </div>

          {config.ticker?.length > 0 && (
            <div className="mt-10 hidden items-center gap-3 text-brand-coral lg:flex">
              <ScribbleArrow className="h-8 w-16" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                {config.booking?.note || "Pick a time that suits you"}
              </span>
            </div>
          )}
        </div>

        {/* ----------------------------------------------------------- collage */}
        {collage.length > 0 && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[540px] pb-16 pr-6 sm:pb-20 sm:pr-10 lg:max-w-none"
          >
            {collage[0] && (
              <CollageItem
                item={collage[0]}
                className="ml-auto w-[88%] shadow-[14px_16px_0_0_hsl(var(--brand-butter))]"
              />
            )}

            {collage[1] && (
              <CollageItem
                item={collage[1]}
                className="absolute -bottom-2 left-0 z-20 w-[42%] border-4 border-brand-cream shadow-[8px_10px_0_0_hsl(var(--brand-lilac))] sm:-bottom-6"
              />
            )}

            {collage[2] && (
              <CollageItem
                item={collage[2]}
                className="absolute -bottom-12 right-0 z-30 w-[30%] border-4 border-brand-cream shadow-[8px_10px_0_0_hsl(var(--brand-coral))] sm:-bottom-14"
              />
            )}

            <BookButton
              booking={config.booking}
              className={cn(
                "absolute left-[6%] top-[16%] z-40 -rotate-6 px-5 py-3 text-[11px] shadow-[5px_6px_0_0_hsl(var(--brand-ink))]",
                "hover:-translate-y-0.5 hover:-rotate-3"
              )}
            >
              {hero.sticker || "Book now"}
            </BookButton>

            <StarOutline className="absolute right-[6%] top-[4%] z-40 h-8 w-8 animate-spin-slow text-brand-ink motion-reduce:animate-none" />
            <CircleRing className="absolute -left-2 top-[42%] z-10 h-20 w-20 text-brand-ink/30" />
            <StarBurst className="absolute bottom-[8%] right-[2%] z-40 h-5 w-5 text-brand-coral" />
          </motion.div>
        )}
      </div>

      <Ticker items={config.ticker} />
    </section>
  );
}
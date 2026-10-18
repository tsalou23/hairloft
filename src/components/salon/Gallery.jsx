import { useMemo, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export default function Gallery({ config }) {
  const [tag, setTag] = useState("All");
  const [openIndex, setOpenIndex] = useState(-1);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const images = useMemo(() => (config.gallery?.images || []).filter((i) => i?.src || i?.video), [config.gallery]);
  const tags = useMemo(() => [...new Set(images.map((i) => i.tag).filter(Boolean))], [images]);

  if (!images.length) return null;

  const filtered = tag === "All" ? images : images.filter((i) => i.tag === tag);
  const current = lightboxIndex >= 0 ? filtered[lightboxIndex] : null;
  const step = (delta) => setLightboxIndex((prev) => (prev + delta + filtered.length) % filtered.length);

  return (
    <section id="gallery" className="bg-brand-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow={config.gallery.eyebrow}
            title={config.gallery.heading}
            accent={config.gallery.headingAccent}
            intro={config.gallery.intro}
          />

          {config.gallery.showFilters && tags.length > 1 && (
            <Reveal className="flex flex-wrap gap-2">
              {["All", ...tags].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setTag(item);
                    setLightboxIndex(-1);
                  }}
                  aria-pressed={tag === item}
                  className={cn(
                    "rounded-full border-2 border-brand-ink px-5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                    tag === item ? "bg-brand-ink text-brand-cream" : "text-brand-ink hover:bg-brand-ink/5"
                  )}
                >
                  {item}
                </button>
              ))}
            </Reveal>
          )}
        </div>

        <div className="mt-12 gap-2.5 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {filtered.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(-1)}
              onFocus={() => setOpenIndex(index)}
              onBlur={() => setOpenIndex(-1)}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open image: ${image.alt || "gallery photo"}`}
              className="group relative mb-2.5 block w-full break-inside-avoid overflow-hidden text-left"
            >
              {image.video ? (
                <div style={{aspectRatio: image.ratio === 'square' ? '1/1' : image.ratio === 'landscape' ? '16/9' : '9/16'}} className="w-full">
                  <video
                    src={image.video}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    onMouseEnter={e => e.target.play()}
                    onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
                  />
                </div>
              ) : (
                <SmartImage src={image.src} alt={image.alt} ratio={image.ratio || "portrait"} crop={image.crop} />
              )}
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 flex items-end bg-brand-ink/45 p-4 transition-opacity duration-300",
                  openIndex === index ? "opacity-100" : "opacity-0 group-focus-visible:opacity-100"
                )}
              >
                {image.video && <span className="absolute inset-0 flex items-center justify-center"><svg className="h-10 w-10 text-brand-cream/80" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>}
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-cream">
                  {image.tag || "View"}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        image={current}
        position={current ? `${lightboxIndex + 1} / ${filtered.length}` : ""}
        onClose={() => setLightboxIndex(-1)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </section>
  );
}
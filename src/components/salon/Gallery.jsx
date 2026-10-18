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

        <div className="mt-12 grid grid-cols-3 gap-1 sm:grid-cols-4 lg:grid-cols-5">
          {filtered.map((image, index) => (
            <button
              key={image.video || image.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open: ${image.alt || "gallery photo"}`}
              className="relative aspect-square w-full overflow-hidden bg-brand-ink/10"
            >
              {image.video ? (
                <video
                  src={image.video}
                  className="h-full w-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <SmartImage src={image.src} alt={image.alt} ratio="square" crop={image.crop} />
              )}
              {image.video && (
                <span className="absolute inset-0 flex items-center justify-center bg-brand-ink/20">
                  <svg className="h-7 w-7 text-brand-cream/90" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
              )}
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
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Lightbox({ image, onClose, onPrev, onNext, position }) {
  useEffect(() => {
    if (!image) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [image, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt || "Gallery image"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex flex-col bg-brand-ink/97 px-4 py-6 sm:px-8"
        >
          <div className="flex items-center justify-between text-brand-cream">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-cream/60">
              {position} — {image.tag || "Studio"}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-cream/50 transition-colors hover:border-brand-butter hover:text-brand-butter"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <motion.div
            key={image.src || image.video}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
            className="mt-4 flex min-h-0 flex-1 items-center justify-center"
          >
            {image.video ? (
              <video
                src={image.video}
                className="h-[58vh] sm:h-[68vh] rounded-sm"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt || ""}
                fittingType="fit"
                className="h-[58vh] w-full rounded-sm sm:h-[68vh]"
              />
            )}
          </motion.div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-cream/50 text-brand-cream transition-colors hover:border-brand-butter hover:text-brand-butter"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <p className="max-w-md text-center font-mono text-[11px] uppercase tracking-[0.16em] text-brand-cream/70">
              {image.alt}
            </p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-cream/50 text-brand-cream transition-colors hover:border-brand-butter hover:text-brand-butter"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
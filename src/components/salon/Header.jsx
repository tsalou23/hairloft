import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/sections";
import { Image } from "@/components/ui/image";
import BookButton from "./BookButton";
import Sign from "./Sign";
import Logo from "./Logo";

export default function Header({ config }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = navItems(config);
  const leafage = config.header?.leafageImage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b-2 border-brand-ink/40 transition-shadow duration-300",
        scrolled && "shadow-[0_12px_34px_-20px_hsl(var(--brand-ink)/0.85)]"
      )}
    >
      {/* Leafage wall */}
      <div
        className="absolute inset-0 bg-brand-ink"
        style={leafage ? { backgroundImage: `url(${leafage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      />

      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="#top" aria-label={`${config.identity?.name || "Home"} — back to top`} className="shrink-0">
          <Sign identity={config.identity} />
        </a>

        {items.length > 0 && (
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-full bg-brand-butter/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-ink transition-colors hover:bg-brand-butter"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <BookButton
            booking={config.booking}
            variant="butter"
            className="hidden px-6 py-3 text-[11px] sm:inline-flex"
          />
          {items.length > 0 && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-cream/70 text-brand-cream md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-brand-ink px-6 py-6 text-brand-cream md:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo identity={config.identity} inverted />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-cream/60"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-12 flex flex-col gap-2">
              {items.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="font-heading text-4xl font-black uppercase leading-tight tracking-[-0.03em] text-brand-cream hover:text-brand-butter"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto">
              <BookButton
                booking={config.booking}
                variant="butter"
                className="w-full"
                onClick={() => setOpen(false)}
              />
              {config.identity?.tagline && (
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-cream/60">
                  {config.identity.tagline}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
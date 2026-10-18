import { cn } from "@/lib/utils";
import { bookingHref, isExternalBooking } from "@/lib/sections";

const VARIANTS = {
  coral: "bg-brand-coral text-brand-cream",
  butter: "bg-brand-butter text-brand-ink",
  ink: "bg-brand-ink text-brand-cream",
  outline: "border-2 border-brand-ink text-brand-ink",
};

/**
 * One booking button used everywhere. Opens the configured booking URL in a
 * new tab, or scrolls to the contact section when no URL is set.
 */
export default function BookButton({ booking, children, variant = "coral", className = "", onClick }) {
  const href = bookingHref(booking);
  const external = isExternalBooking(booking);
  const label = children || booking?.label || "Book now";

  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5",
        "font-heading text-sm font-bold uppercase tracking-[0.12em]",
        "transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
        VARIANTS[variant] || VARIANTS.coral,
        className
      )}
    >
      {label}
    </a>
  );
}
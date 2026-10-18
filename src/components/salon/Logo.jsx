import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { LogoMark } from "./Doodles";

export default function Logo({ identity = {}, inverted = false, className = "", markClassName = "" }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      {identity.logoImage ? (
        <Image src={identity.logoImage} alt={identity.name || "Salon logo"} className={cn("h-9 w-auto", markClassName)} />
      ) : (
        <LogoMark className={cn("h-9 w-9 shrink-0", inverted ? "text-brand-butter" : "text-brand-ink", markClassName)} />
      )}
      <span
        className={cn(
          "font-heading text-base font-black uppercase leading-none tracking-[-0.02em] sm:text-lg",
          inverted ? "text-brand-cream" : "text-brand-ink"
        )}
      >
        {identity.wordmark || identity.name}
      </span>
    </span>
  );
}
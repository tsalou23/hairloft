import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const RATIOS = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[3/2]",
  wide: "aspect-[16/9]",
};

/**
 * Photo block with a fixed crop frame. `crop` { x, y } (0–1) sets the focal
 * point so portraits, squares and landscapes can all be swapped in without
 * re-cropping. Missing or broken URLs fall back to the platform placeholder.
 */
export default function SmartImage({ src, alt = "", ratio = "portrait", crop, className = "", fittingType = "fill" }) {
  return (
    <div className={cn("relative overflow-hidden bg-brand-ink/10", RATIOS[ratio] || RATIOS.portrait, className)}>
      <Image
        src={src || ""}
        alt={alt}
        fittingType={fittingType}
        focalPointX={typeof crop?.x === "number" ? crop.x : undefined}
        focalPointY={typeof crop?.y === "number" ? crop.y : undefined}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
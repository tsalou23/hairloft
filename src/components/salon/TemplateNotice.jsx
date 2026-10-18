import { StarBurst } from "./Doodles";

export default function TemplateNotice({ enabled }) {
  if (!enabled) return null;
  return (
    <div className="bg-brand-ink px-4 py-2.5 text-center text-brand-cream">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
        <StarBurst className="mr-2 inline-block h-3 w-3 text-brand-butter" />
        Template preview — sample content. Replace copy, photos and links before launch.
      </p>
    </div>
  );
}
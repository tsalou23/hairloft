import { ArrowUpRight, Instagram, Facebook, Youtube, Music2, Link2 } from "lucide-react";
import { navItems, activeSocials } from "@/lib/sections";
import BookButton from "./BookButton";
import Logo from "./Logo";
import { StarBurst } from "./Doodles";

const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  tiktok: Music2,
  link: Link2,
};

export default function Footer({ config }) {
  const items = navItems(config);
  const socials = activeSocials(config.contact);
  const links = (config.footer?.links || []).filter((l) => l?.href && l?.label);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-brand-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-sm">
            <Logo identity={config.identity} inverted />
            <p className="mt-5 text-sm leading-relaxed text-brand-cream/70">
              {config.identity?.description || config.identity?.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            {items.length > 0 && (
              <nav aria-label="Footer">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-cream/45">Explore</p>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-sm text-brand-cream/85 transition-colors hover:text-brand-butter"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {socials.length > 0 && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-cream/45">Follow</p>
                <ul className="mt-4 space-y-2.5">
                  {socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.icon] || Link2;
                    return (
                      <li key={social.label}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-brand-cream/85 transition-colors hover:text-brand-butter"
                        >
                          <Icon className="h-4 w-4" />
                          {social.label}
                          <ArrowUpRight className="h-3 w-3 opacity-60" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <BookButton booking={config.booking} variant="butter" />
        </div>

        {links.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-cream/60 transition-colors hover:text-brand-butter"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-brand-cream/20 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-cream/50">
            © {year} {config.identity?.name}
          </p>
          {config.footer?.note && (
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-cream/40">
              <StarBurst className="h-2.5 w-2.5 text-brand-coral" />
              {config.footer.note}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
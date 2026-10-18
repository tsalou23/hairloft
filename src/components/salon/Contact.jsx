import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Facebook, Youtube, Music2, Link2 } from "lucide-react";
import { activeSocials, hasContact, mapsHref } from "@/lib/sections";
import SectionHeading from "./SectionHeading";
import BookButton from "./BookButton";
import Reveal from "./Reveal";
import SalonClock from "./SalonClock";
import { ScribbleArrow } from "./Doodles";

const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  tiktok: Music2,
  link: Link2,
};

export default function Contact({ config }) {
  const contact = config.contact || {};
  if (!hasContact(contact)) return null;

  const socials = activeSocials(contact);
  const maps = mapsHref(contact);
  const details = [
    { key: "phone", label: "Call", value: contact.phone, href: contact.phone ? `tel:${contact.phone.replace(/\s+/g, "")}` : "", icon: Phone, external: false },
    { key: "email", label: "Email", value: contact.email, href: contact.email ? `mailto:${contact.email}` : "", icon: Mail, external: false },
    { key: "address", label: "Studio", value: contact.address, href: maps, icon: MapPin, external: true },
  ].filter((detail) => detail.value && detail.href);

  return (
    <section id="contact" className="border-t-2 border-brand-ink bg-brand-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.heading}
          accent={contact.headingAccent}
          intro={contact.intro}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          {/* ------------------------------------------------------- details */}
          <div className="grid gap-2.5 sm:grid-cols-2">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Reveal
                  key={detail.key}
                  delay={index * 0.05}
                  className={index === 2 ? "sm:col-span-2" : undefined}
                >
                  <a
                    href={detail.href}
                    {...(detail.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full items-start gap-4 border-2 border-brand-ink p-6 transition-colors duration-300 hover:bg-brand-butter"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral transition-colors group-hover:text-brand-ink" />
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-ink/55">
                        {detail.label}
                      </span>
                      <span className="mt-1.5 block font-heading text-lg font-bold leading-snug text-brand-ink">
                        {detail.value}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-brand-ink/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Reveal>
              );
            })}

            {socials.length > 0 && (
              <Reveal className={details.length % 2 === 0 ? "sm:col-span-2" : undefined}>
                <div className="flex flex-wrap items-center gap-3 border-2 border-brand-ink p-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-ink/55">
                    Follow
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((social) => {
                      const Icon = SOCIAL_ICONS[social.icon] || Link2;
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border-2 border-brand-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-ink transition-colors hover:bg-brand-lilac"
                        >
                          <Icon className="h-4 w-4" />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* --------------------------------------------------------- hours */}
          <Reveal className="border-2 border-brand-ink bg-brand-cream p-7 sm:p-9">
            <h3 className="font-heading text-xl font-black uppercase tracking-[-0.02em] text-brand-ink">
              Opening hours
            </h3>
            {contact.hours?.length > 0 && (
              <ul className="mt-6 space-y-3">
                {contact.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-baseline justify-between gap-6 border-b border-dashed border-brand-ink/25 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-brand-ink/75">{row.day}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-ink">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-7">
              <SalonClock timezone={contact.timezone} />
            </div>
          </Reveal>
        </div>

        {/* ---------------------------------------------------------- CTA band */}
        <Reveal className="relative mt-14 overflow-hidden border-2 border-brand-ink bg-brand-butter px-7 py-12 sm:px-12 sm:py-16">
          <ScribbleArrow className="absolute right-8 top-8 hidden h-10 w-20 text-brand-ink/50 sm:block" />
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-ink/70">
            {config.identity?.tagline || "Ready when you are"}
          </p>
          <h3 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,6vw,3.75rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-brand-ink">
            Ready for a{" "}
            <span className="font-serif text-[1.05em] font-normal normal-case italic">change</span>?
          </h3>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <BookButton booking={config.booking} variant="ink" className="px-8 py-4" />
            {config.booking?.note && (
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-ink/70">
                {config.booking.note}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
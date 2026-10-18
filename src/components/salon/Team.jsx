import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

export default function Team({ config }) {
  const members = (config.team?.members || []).filter((m) => m?.name);
  if (!members.length) return null;

  return (
    <section id="team" className="border-y-2 border-brand-ink bg-brand-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow={config.team.eyebrow}
          title={config.team.heading}
          accent={config.team.headingAccent}
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.06}>
              <SmartImage
                src={member.image?.src}
                alt={member.image?.alt || member.name}
                ratio={member.image?.ratio || "tall"}
                crop={member.image?.crop}
                className="border-2 border-brand-ink"
              />
              <p className="mt-4 font-heading text-lg font-bold text-brand-ink">{member.name}</p>
              {member.role && (
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-ink/60">
                  {member.role}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
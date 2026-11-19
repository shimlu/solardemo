import { solarBenefits, solarGuarantees } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Benefits() {
  return (
    <Section id="benefits" tone="white">
      <SectionHeading {...siteConfig.sectionCopy.benefits} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solarBenefits.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.06} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-light text-accent">
                  <Icon name={b.icon} size={24} />
                </span>
                <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                  {b.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-snug text-brand-dark">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{b.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-10">
        <div className="grid gap-4 rounded-3xl border border-brand/15 bg-gradient-to-r from-brand-light via-white to-accent-light p-5 sm:grid-cols-3 sm:p-6">
          {solarGuarantees.map((g) => (
            <div key={g.id} className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-card">
                <Icon name={g.icon} size={22} />
              </span>
              <div>
                <p className="font-display text-base font-extrabold text-brand-dark">{g.title}</p>
                <p className="text-xs font-medium text-muted sm:text-sm">{g.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

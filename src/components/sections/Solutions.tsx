import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeading {...siteConfig.sectionCopy.solutions} />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand">
                <Icon name={s.icon} size={28} />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-accent">
                {s.audience}
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-brand-dark">{s.title}</h3>
              <p className="mt-3 text-sm text-muted">{s.description}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm font-medium">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 shrink-0 text-accent" size={16} />
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.contact.messenger}
                external
                variant="outline"
                className="mt-6 w-full"
              >
                {siteConfig.cta.quote}
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


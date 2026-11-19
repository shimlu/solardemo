import { orderSteps } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function HowToOrder() {
  return (
    <Section id="how-to-order">
      <SectionHeading {...siteConfig.sectionCopy.steps} />
      <ol className="relative grid gap-8 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-accent/40 md:block"
        />
        {orderSteps.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.1}>
            <li className="relative flex flex-col items-center text-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lift">
                <Icon name={s.icon} size={28} />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-dark text-xs font-extrabold">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-brand-dark">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">{s.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}


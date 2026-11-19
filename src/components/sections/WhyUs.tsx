import { whyUs } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function WhyUs() {
  return (
    <Section id="why-us" tone="dark">
      <SectionHeading {...siteConfig.sectionCopy.why} light />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {whyUs.map((w, i) => (
          <Reveal key={w.id} delay={i * 0.07} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun text-brand-dark">
                <Icon name={w.icon} size={24} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold">{w.title}</h3>
              <p className="mt-2 text-sm text-white/75">{w.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


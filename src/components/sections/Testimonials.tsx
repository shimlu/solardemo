import { testimonials } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Testimonials() {
  return (
    <Section id="reviews" tone="surface">
      <SectionHeading {...siteConfig.sectionCopy.testimonials} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.06} className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-0.5 text-sun" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Icon
                        key={idx}
                        name="star"
                        size={16}
                        className="fill-current text-sun"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-bold text-accent-dark">
                    {t.highlight}
                  </span>
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-ink sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                <div>
                  <p className="text-sm font-extrabold text-brand-dark">{t.author}</p>
                  <p className="text-xs font-medium text-muted">{t.product}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Icon name="quote" size={16} />
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

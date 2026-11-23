import { trustStats } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section aria-label="Trust highlights" className="relative z-20 -mt-12 px-4 sm:-mt-14 sm:px-6">
      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-lift md:grid-cols-4 md:divide-x md:divide-y-0">
          {trustStats.map((s) => (
            <div key={s.id} className="flex items-center gap-3.5 p-5 sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                <Icon name={s.icon} size={22} />
              </span>
              <div>
                <p className="font-display text-xl font-extrabold leading-tight text-brand-dark sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-muted sm:text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

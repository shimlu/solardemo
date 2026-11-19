import { trustStats } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section aria-label="Trust highlights" className="bg-brand-dark py-8 text-white">
      <Reveal className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4">
        {trustStats.map((s) => (
          <div key={s.id} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-sun">
              <Icon name={s.icon} size={22} />
            </span>
            <div>
              <p className="font-display text-xl font-extrabold leading-tight">{s.value}</p>
              <p className="text-xs text-white/75 sm:text-sm">{s.label}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}


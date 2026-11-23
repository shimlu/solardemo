import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  tone = "white",
  children,
}: {
  id?: string;
  tone?: "white" | "surface" | "dark";
  children: ReactNode;
}) {
  const bg =
    tone === "surface" ? "bg-surface" : tone === "dark" ? "bg-brand-dark text-white" : "bg-white";
  return (
    <section id={id} className={`${bg} py-16 sm:py-24`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <span
        className={`mb-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
          light
            ? "bg-white/10 text-sun ring-1 ring-white/15"
            : "bg-accent-light text-accent-dark ring-1 ring-accent/20"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sun" : "bg-accent"}`} />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}


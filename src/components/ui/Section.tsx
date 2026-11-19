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
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-sun" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/80" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}


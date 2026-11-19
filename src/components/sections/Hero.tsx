"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const reduce = useReducedMotion();
  const { hero } = siteConfig;
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-light via-white to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sun/20 blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-light px-3 py-1.5 text-xs font-bold text-accent-dark"
          >
            <Icon name="sun" size={14} /> {hero.badge}
          </motion.span>

          <motion.h1
            {...fade(0.08)}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] text-brand-dark sm:text-5xl lg:text-6xl"
          >
            {hero.headlineLead} <span className="text-accent">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            {hero.subheadline}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.contact.messenger} external variant="messenger" icon="messageCircle">
              {siteConfig.cta.primaryLong}
            </Button>
            <Button href="#products" variant="outline">
              {siteConfig.cta.secondary}
            </Button>
          </motion.div>

          <motion.ul {...fade(0.32)} className="mt-8 grid gap-2 text-sm font-semibold text-ink sm:grid-cols-2">
            {hero.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <Icon name="check" className="shrink-0 text-accent" size={18} />
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
            <Image
              src={siteConfig.cover}
              alt="Solar-lit Filipino home and street lights by Solar EcoPrime"
              width={851}
              height={315}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
            <div className="grid grid-cols-3 divide-x divide-line border-t border-line bg-white text-center">
              {[
                ["11K+", "Followers"],
                ["5+", "Years"],
                ["100%", "Eco-friendly"],
              ].map(([v, l]) => (
                <div key={l} className="px-2 py-4">
                  <p className="font-display text-xl font-extrabold text-brand">{v}</p>
                  <p className="text-xs font-semibold text-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-dark shadow-lift sm:left-8">
            <Icon name="shield" className="text-accent" size={16} />
            {siteConfig.registration.label} · {siteConfig.registration.year}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


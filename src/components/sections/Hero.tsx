"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
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
    <section id="top" className="relative isolate overflow-hidden bg-[#081b38] text-white">
      {/* Full-bleed architectural solar background */}
      <Image
        src="/products/street-light-allinone.jpg"
        alt="Solar street lighting illuminating a Philippine community road at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center scale-[1.02]"
      />

      {/* Executive directional navy gradient overlay for crisp legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#06142b]/95 via-[#0a2144]/85 to-[#0a2144]/55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#06142b]/90 via-transparent to-[#06142b]/40"
      />
      {/* Subtle warm solar glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-sun/20 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-24">
        {/* Left: Core Mission, Headline & Conversion CTAs */}
        <div className="lg:col-span-7">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-sun shadow-[0_0_8px_#F29426]" />
            Bicol&apos;s Trusted Solar Partner · {hero.badge}
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
          >
            {hero.headlineLead}{" "}
            <span className="bg-gradient-to-r from-[#FFBE55] to-[#F29426] bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.contact.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-sun px-7 py-3.5 text-sm font-extrabold text-[#081b38] shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffaa42] sm:text-base"
            >
              <Icon name="messageCircle" size={19} />
              Get a Free Quote
            </a>
            <a
              href="#products"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 sm:text-base"
            >
              {siteConfig.cta.secondary}
            </a>
          </motion.div>

          <motion.ul
            {...fade(0.32)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/15 pt-6 text-xs font-semibold text-white/90 sm:text-sm"
          >
            <li className="flex items-center gap-2">
              <Icon name="shield" size={16} className="text-sun" />
              {siteConfig.registration.label} ({siteConfig.registration.year})
            </li>
            <li className="flex items-center gap-2">
              <Icon name="check" size={16} className="text-sun" />
              1-Year Warranty
            </li>
            <li className="flex items-center gap-2">
              <Icon name="droplets" size={16} className="text-sun" />
              IP65 Weatherproof
            </li>
          </motion.ul>
        </div>

        {/* Right: Executive Frosted Showcase & Quick Contact Panel */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="rounded-3xl border border-white/15 bg-[#091d3b]/80 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sun">
                  Residential · Commercial · LGU
                </p>
                <p className="mt-0.5 font-display text-lg font-extrabold text-white">
                  Built for Philippine Weather
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sun/15 text-sun ring-1 ring-sun/30">
                <Icon name="sun" size={22} />
              </span>
            </div>

            {/* Real-life solar application preview strip */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/products/home-garden-light.jpg"
                  alt="Residential solar lighting"
                  fill
                  sizes="(min-width: 1024px) 220px, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5">
                  <p className="text-xs font-bold text-white">Homes &amp; Gates</p>
                </div>
              </div>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/products/commercial-highmast.jpg"
                  alt="Commercial and LGU solar lighting"
                  fill
                  sizes="(min-width: 1024px) 220px, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5">
                  <p className="text-xs font-bold text-white">LGU &amp; Projects</p>
                </div>
              </div>
            </div>

            {/* Bullet checklist */}
            <ul className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-white/85">
              {hero.bullets.map((b) => (
                <li key={b} className="flex items-start gap-1.5">
                  <Icon name="check" size={14} className="mt-0.5 shrink-0 text-sun" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Direct action strip */}
            <div className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-4 sm:flex-row">
              <a
                href={siteConfig.contact.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#0866FF] px-4 text-xs font-bold text-white transition-colors hover:bg-[#0756d6] sm:text-sm"
              >
                <Icon name="messageCircle" size={16} />
                Message on Facebook
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 text-xs font-bold text-white transition-colors hover:bg-white/15 sm:text-sm"
              >
                <Icon name="mapPin" size={15} className="text-sun" />
                2 Bicol Stores
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

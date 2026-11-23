"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top corporate utility bar (desktop) */}
      <div className="hidden bg-[#081b38] text-xs text-white/85 md:block">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Icon name="store" size={14} className="text-sun" />
              Physical Stores: Tabaco City (Main) &amp; Naga City
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Icon name="shield" size={14} className="text-sun" />
              {siteConfig.registration.label} · 1-Year Warranty
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+639481465509"
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-sun"
            >
              <Icon name="phone" size={13} className="text-sun" />
              Tabaco: 0948 146 5509
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-sun"
            >
              <Icon name="phone" size={13} className="text-sun" />
              Naga: {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="border-b border-line/80 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={72}
              height={72}
              className="h-12 w-12 object-contain"
              priority
            />
            <div className="leading-none">
              <span className="block font-display text-lg font-extrabold tracking-tight text-brand-dark">
                SOLAR <span className="text-accent">ECOPRIME</span>
              </span>
              <span className="mt-0.5 hidden text-[10px] font-bold uppercase tracking-[0.14em] text-muted sm:block">
                Lighting Homes, Empowering Communities
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {siteConfig.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-ink/80 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              href={siteConfig.contact.messenger}
              external
              icon="messageCircle"
              className="hidden !min-h-10 !px-5 !text-sm md:inline-flex"
            >
              {siteConfig.cta.quote}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full text-brand-dark hover:bg-brand-light lg:hidden"
            >
              <Icon name={open ? "x" : "menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-line bg-white shadow-lift lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {siteConfig.nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-brand-light"
                >
                  {l.label}
                </a>
              ))}
              <Button
                href={siteConfig.contact.messenger}
                external
                icon="messageCircle"
                className="mt-2"
                onClick={close}
              >
                {siteConfig.cta.quote}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

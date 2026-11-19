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
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={72}
            height={72}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="font-display text-lg font-extrabold leading-none text-brand-dark">
            Solar <span className="text-accent">EcoPrime</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteConfig.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={siteConfig.contact.messenger}
            external
            icon="messageCircle"
            className="hidden !min-h-10 !px-5 md:inline-flex"
          >
            {siteConfig.cta.primary}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-brand-dark hover:bg-brand-light md:hidden"
          >
            <Icon name={open ? "x" : "menu"} size={24} />
          </button>
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
            className="overflow-hidden border-t border-line bg-white md:hidden"
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


"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section id="faq" tone="surface">
      <SectionHeading {...siteConfig.sectionCopy.faq} />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f) => {
          const open = openId === f.id;
          return (
            <div key={f.id} className="rounded-2xl border border-line bg-white shadow-card">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-${f.id}`}
                  onClick={() => setOpenId(open ? null : f.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-brand-dark"
                >
                  {f.question}
                  <motion.span animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-accent">
                    <Icon name="chevronDown" size={22} />
                  </motion.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`faq-${f.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted sm:text-base">{f.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}


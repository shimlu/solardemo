"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, productCategories, type ProductCategory } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProductVisual } from "@/components/ui/ProductVisual";

export function Products() {
  const [active, setActive] = useState<"all" | ProductCategory>("all");
  const copy = siteConfig.sectionCopy.products;
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <Section id="products" tone="surface">
      <SectionHeading {...copy} />

      <div
        role="tablist"
        aria-label="Product categories"
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
      >
        {productCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${
              active === c.id
                ? "border-brand bg-brand text-white"
                : "border-line bg-white text-muted hover:border-brand hover:text-brand"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-lift"
            >
              <ProductVisual product={p} />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold leading-snug text-brand-dark">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.summary}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 shrink-0 text-accent" size={16} />
                      {s}
                    </li>
                  ))}
                </ul>
                {/* Future: swap this CTA for Add-to-Cart / Quote Calculator */}
                <Button
                  href={siteConfig.contact.messenger}
                  external
                  variant="messenger"
                  icon="messageCircle"
                  className="mt-5 w-full"
                  data-product-id={p.id}
                >
                  Inquire via Messenger
                </Button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}


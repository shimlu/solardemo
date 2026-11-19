"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";

const interests = ["Home solar lights", "Street & outdoor lights", "Commercial / systems", "LGU / Barangay project", "Other"];

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function Contact() {
  const { contact, location, branches } = siteConfig;
  const [sent, setSent] = useState(false);

  // Tier 1: frontend-only. Opens the user's email app with the message prefilled.
  // Future: replace with a server action / API route / CRM webhook.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Interested in: ${d.get("interest")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    const subject = `Inquiry from ${d.get("name")} — ${siteConfig.name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const rows: { icon: IconName; label: string; value: string; href?: string }[] = [
    { icon: "mapPin", label: "Main Location", value: location.addressLine },
    { icon: "phone", label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: "facebook", label: "Facebook", value: "Solar EcoPrime - Naga, Camarines Sur", href: contact.facebookPage },
  ];

  return (
    <>
      <Section id="contact">
        <SectionHeading {...siteConfig.sectionCopy.contact} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <ul className="space-y-4">
              {rows.map((r) => (
                <li key={r.label} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4 shadow-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon name={r.icon} size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">{r.label}</p>
                    {r.href ? (
                      <a href={r.href} className="break-words font-semibold text-brand-dark hover:text-accent">
                        {r.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-brand-dark">{r.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid gap-3 sm:grid-cols-2">
              {branches.map((b) => (
                <div key={b.name} className="rounded-2xl bg-accent-light p-4">
                  <p className="text-sm font-extrabold text-accent-dark">{b.name}</p>
                  <p className="mt-1 text-sm text-ink">{b.address}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted">{contact.hours}</p>

            <Button href={contact.messenger} external variant="messenger" icon="messageCircle" className="w-full sm:w-auto">
              {siteConfig.cta.primaryLong}
            </Button>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <h3 className="text-xl font-extrabold text-brand-dark">Send an inquiry</h3>
            <p className="mt-1 text-sm text-muted">We&apos;ll reply with a recommendation and quote.</p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm font-semibold">
                Your name
                <input name="name" required autoComplete="name" className={`${inputCls} mt-1.5`} placeholder="Juan Dela Cruz" />
              </label>
              <label className="block text-sm font-semibold">
                Mobile number
                <input name="phone" required type="tel" autoComplete="tel" className={`${inputCls} mt-1.5`} placeholder="09XX XXX XXXX" />
              </label>
              <label className="block text-sm font-semibold">
                I&apos;m interested in
                <select name="interest" className={`${inputCls} mt-1.5`}>
                  {interests.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold">
                Message
                <textarea name="message" required rows={4} className={`${inputCls} mt-1.5`} placeholder="Tell us what you need, quantity, and your location." />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
              >
                <Icon name="send" size={18} /> Send Inquiry
              </button>
              {sent && (
                <p role="status" className="text-center text-sm font-semibold text-brand">
                  Opening your email app… you can also message us directly on Messenger.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                <Icon name="mapPin" size={22} />
              </span>
              <div>
                <p className="font-extrabold text-brand-dark">Find us on the map</p>
                <p className="text-sm text-muted">{siteConfig.map.label}</p>
              </div>
            </div>
            <Button href={siteConfig.map.directionsUrl} external variant="secondary" icon="mapPin">
              Get Directions
            </Button>
          </div>
          <div className="aspect-[4/3] w-full sm:aspect-[21/9]">
            <iframe
              title={`Map of ${siteConfig.name} location`}
              src={siteConfig.map.embedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <footer className="bg-brand-dark pb-28 pt-12 text-white md:pb-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="rounded-2xl bg-white p-1">
              <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} width={64} height={64} className="h-16 w-16 object-contain" />
            </span>
            <div>
              <p className="font-display text-lg font-extrabold">{siteConfig.name}</p>
              <p className="text-sm text-white/70">{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="text-sm text-white/70 md:text-right">
            <p>
              {siteConfig.registration.label} · RSN {siteConfig.registration.rsn}
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} {siteConfig.name} — {location.city}, {location.province}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


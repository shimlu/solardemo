import { siteConfig } from "@/data/siteConfig";
import { Icon } from "@/components/ui/Icon";

/** Sticky bottom CTA, mobile only. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <div className="flex gap-2">
        <a
          href={siteConfig.contact.messenger}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#0866FF] font-bold text-white"
        >
          <Icon name="messageCircle" size={20} /> {siteConfig.cta.primaryLong}
        </a>
        <a
          href={siteConfig.contact.phoneHref}
          aria-label={`Call ${siteConfig.contact.phone}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white"
        >
          <Icon name="phone" size={20} />
        </a>
      </div>
    </div>
  );
}


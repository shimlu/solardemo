import Image from "next/image";
import { Icon, type IconName } from "./Icon";
import type { Product, ProductCategory } from "@/data/products";

const visuals: Record<ProductCategory, { icon: IconName; gradient: string }> = {
  home: { icon: "lightbulb", gradient: "from-accent-light to-brand-light" },
  street: { icon: "zap", gradient: "from-brand-light to-accent-light" },
  commercial: { icon: "building", gradient: "from-brand-light to-white" },
};

/** Responsive aspect-ratio image container with branded fallback when no photo is set. */
export function ProductVisual({ product }: { product: Product }) {
  const v = visuals[product.category];
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${v.gradient}`}
    >
      {product.image ? (
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="absolute h-32 w-32 rounded-full bg-sun/25 blur-2xl" aria-hidden="true" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-brand shadow-card">
            <Icon name={v.icon} size={36} />
          </span>
        </div>
      )}
      {product.badge && (
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
          {product.badge}
        </span>
      )}
    </div>
  );
}


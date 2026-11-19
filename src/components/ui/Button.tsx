import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "outline" | "messenger";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white shadow-card hover:bg-accent-dark",
  secondary: "bg-brand text-white shadow-card hover:bg-brand-dark",
  outline: "border border-line bg-white text-brand-dark hover:border-brand hover:bg-brand-light",
  messenger: "bg-[#0866FF] text-white shadow-card hover:bg-[#0756d6]",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  icon?: IconName;
  external?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  icon,
  external,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:text-base ${variants[variant]} ${className}`}
    >
      {icon && <Icon name={icon} size={18} />}
      {children}
    </a>
  );
}


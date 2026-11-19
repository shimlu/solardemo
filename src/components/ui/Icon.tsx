import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CloudSun,
  Droplets,
  Facebook,
  Heart,
  Home,
  Landmark,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Power,
  Quote,
  Send,
  Shield,
  Star,
  Store,
  Sun,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons = {
  award: Award,
  building: Building2,
  check: CheckCircle2,
  chevronDown: ChevronDown,
  clipboard: ClipboardList,
  cloudSun: CloudSun,
  droplets: Droplets,
  facebook: Facebook,
  heart: Heart,
  home: Home,
  landmark: Landmark,
  leaf: Leaf,
  lightbulb: Lightbulb,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  messageCircle: MessageCircle,
  phone: Phone,
  power: Power,
  quote: Quote,
  send: Send,
  shield: Shield,
  star: Star,
  store: Store,
  sun: Sun,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  x: X,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
  size = 20,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  const Cmp = icons[name];
  return <Cmp className={className} size={size} aria-hidden="true" />;
}


import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = `${siteConfig.name} — Solar Lights & Systems in Naga, Camarines Sur`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description: siteConfig.description,
  keywords: ["solar lights", "solar street light", "Naga City", "Camarines Sur", "Bicol", "Solar EcoPrime", "LGU solar lighting"],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    images: [{ url: siteConfig.cover, width: 851, height: 315, alt: siteConfig.tagline }],
  },
  twitter: { card: "summary_large_image", title, description: siteConfig.description, images: [siteConfig.cover] },
  icons: { icon: siteConfig.logo },
};

export const viewport: Viewport = { themeColor: "#103466", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}


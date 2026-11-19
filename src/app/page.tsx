import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Benefits } from "@/components/sections/Benefits";
import { Products } from "@/components/sections/Products";
import { Solutions } from "@/components/sections/Solutions";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Benefits />
        <Products />
        <Solutions />
        <WhyUs />
        <HowToOrder />
        <Faq />
        <Contact />
      </main>
      <MobileCtaBar />
    </>
  );
}


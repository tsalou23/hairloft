import { useEffect } from "react";
import salonConfig from "@/data/salonConfig";
import { applyBrandTheme } from "@/lib/theme";
import TemplateNotice from "@/components/salon/TemplateNotice";
import Header from "@/components/salon/Header";
import Hero from "@/components/salon/Hero";
import About from "@/components/salon/About";
import Services from "@/components/salon/Services";
import Gallery from "@/components/salon/Gallery";
import Team from "@/components/salon/Team";
import Testimonials from "@/components/salon/Testimonials";
import Contact from "@/components/salon/Contact";
import Footer from "@/components/salon/Footer";

export default function Home() {
  useEffect(() => {
    applyBrandTheme(salonConfig.theme);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-brand-cream font-body text-brand-ink antialiased">
      <TemplateNotice enabled={salonConfig.showTemplateNotice} />
      <Header config={salonConfig} />
      <main>
        <Hero config={salonConfig} />
        <About config={salonConfig} />
        <Services config={salonConfig} />
        <Gallery config={salonConfig} />
        <Team config={salonConfig} />
        <Testimonials config={salonConfig} />
        <Contact config={salonConfig} />
      </main>
      <Footer config={salonConfig} />
    </div>
  );
}
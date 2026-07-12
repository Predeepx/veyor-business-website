import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import FAQSection from "@/components/services/FAQSection";
import ServicesCTA from "@/components/services/ServicesCTA";


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <FAQSection />
      <ServicesCTA />
    </main>
  );
}

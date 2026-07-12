import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <main className="bg-black">
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <GoogleMap />
      <ContactCTA />
    </main>
  );
}

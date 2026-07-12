import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import ExperienceStats from "@/components/about/ExperienceStats";
import AboutCTA from "@/components/about/AboutCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about VEYOR and our 7+ years of experience in wood works, fabrication and construction services in Chennai.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <ExperienceStats />
      <AboutCTA />
    </main>
  );
}

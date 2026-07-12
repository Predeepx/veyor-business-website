"use client";

import { useState } from "react";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectStats from "@/components/projects/ProjectStats";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="bg-black pt-24">
      <ProjectsHero />

      <ProjectFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProjectsGrid activeFilter={activeFilter} />

      <ProjectStats />

      <ProjectsCTA />
    </main>
  );
}

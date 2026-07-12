"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectsGridProps {
  activeFilter: string;
}

const projects = [
  {
    title: "Modern Modular Kitchen",
    category: "Wood Works",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop",
    description:
      "Premium modular kitchen with customized storage solutions and elegant finishes.",
  },
  {
    title: "Luxury Wardrobe Installation",
    category: "Wood Works",
    location: "Red Hills",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
    description:
      "Custom wardrobe with premium wood finish and optimized storage layout.",
  },
  {
    title: "Decorative Metal Gate",
    category: "Metal Works",
    location: "Poonamallee",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    description:
      "Custom fabricated metal gate designed for durability and aesthetics.",
  },
  {
    title: "Industrial Fabrication Project",
    category: "Welding & Fabrication",
    location: "Ambattur",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    description:
      "Heavy-duty welding and fabrication work for industrial requirements.",
  },
  {
    title: "Premium False Ceiling",
    category: "False Ceiling",
    location: "Anna Nagar",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    description:
      "Modern false ceiling design with integrated LED lighting solutions.",
  },
  {
    title: "Aluminium Window System",
    category: "Aluminium Works",
    location: "Avadi",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    description:
      "High-quality aluminium windows built for durability and modern design.",
  },
  {
    title: "PVC Interior Panels",
    category: "PVC Works",
    location: "Mogappair",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    description:
      "Stylish and durable PVC interior panel installations for homes and offices.",
  },
  {
    title: "UPVC Window Installation",
    category: "UPVC Works",
    location: "Kolathur",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    description:
      "Energy-efficient UPVC windows with modern aesthetics and durability.",
  },
];

export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C89B6D] uppercase tracking-[0.3em] text-sm mb-4">
            OUR PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Craftsmanship You Can See
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto rounded-full" />

          <p className="text-white/70 max-w-3xl mx-auto mt-6 text-lg">
            Explore some of our residential, commercial, and industrial projects
            completed across Chennai and surrounding areas.
          </p>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24">
            <h3 className="text-3xl font-bold text-white mb-4">
              No Projects Found
            </h3>

            <p className="text-white/60">
              Projects for this category will be added soon.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  bg-[#111111]
                  border border-white/10
                  rounded-3xl
                  overflow-hidden
                  hover:border-[#C89B6D]
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 bg-[#C89B6D] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-[#C89B6D] mb-4">
                    <MapPin size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-white/65 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <button
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[#C89B6D]
                      font-semibold
                      hover:gap-4
                      transition-all duration-300
                    "
                  >
                    View Project
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

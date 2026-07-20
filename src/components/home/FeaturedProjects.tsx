"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Luxury Wooden Interior",
    category: "Wood Works",
    image:
      "https://images.unsplash.com/photo-1750161627803-ee0936a9264d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern False Ceiling",
    category: "False Ceiling",
    image:
      "https://images.unsplash.com/photo-1610459716431-e07abcf74230?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Commercial Fabrication",
    category: "Metal Works",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Premium Aluminium Installation",
    category: "Aluminium Works",
    image:
      "https://images.unsplash.com/photo-1615315120852-afc256684134?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Built With Precision.
            <br />
            Delivered With Quality.
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            Explore some of our residential, commercial, and industrial projects
            that showcase our craftsmanship, attention to detail, and commitment
            to quality.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-[#C89B6D] uppercase tracking-[0.2em] text-sm mb-3">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <div
                  className="
                    w-0
                    h-[2px]
                    bg-[#C89B6D]
                    mt-4
                    group-hover:w-24
                    transition-all
                    duration-500
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link
            href="/projects"
            className="
              bg-[#C89B6D]
              hover:bg-[#b98b5c]
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

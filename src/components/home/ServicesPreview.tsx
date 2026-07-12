"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Wrench,
  Building2,
  Paintbrush,
  Layers,
  Warehouse,
  DoorOpen,
  Drill,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Wood Works",
    description:
      "Custom furniture, wardrobes, modular interiors, and premium wood craftsmanship.",
  },
  {
    icon: Warehouse,
    title: "Metal Works",
    description:
      "Structural metal fabrication, gates, railings, and industrial metal solutions.",
  },
  {
    icon: DoorOpen,
    title: "PVC Works",
    description:
      "Durable PVC doors, partitions, wall panels, and customized installations.",
  },
  {
    icon: Building2,
    title: "UPVC Works",
    description: "Modern UPVC doors and windows with long-lasting performance.",
  },
  {
    icon: Wrench,
    title: "Welding & Fabrication",
    description:
      "Precision welding and fabrication solutions for residential and commercial projects.",
  },
  {
    icon: Paintbrush,
    title: "Wood Polishing & Varnish",
    description:
      "Premium finishing, polishing, and restoration services for wood surfaces.",
  },
  {
    icon: Layers,
    title: "False Ceiling Works",
    description: "Modern gypsum and decorative false ceiling installations.",
  },
  {
    icon: Drill,
    title: "Aluminium Works",
    description: "Aluminium doors, windows, partitions, and office solutions.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-black py-28">
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
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Professional Solutions
            <br />
            For Every Project
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            VEYOR provides complete construction, fabrication, and interior
            solutions tailored for residential, commercial, and industrial
            spaces across Chennai.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  bg-[#111111]
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:border-[#C89B6D]
                  hover:-translate-y-3
                  hover:shadow-[0_20px_60px_rgba(200,155,109,0.15)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#C89B6D]/10
                    flex
                    items-center
                    justify-center
                    mb-8
                    group-hover:bg-[#C89B6D]
                    transition-all
                    duration-500
                  "
                >
                  <Icon
                    size={32}
                    className="
                      text-[#C89B6D]
                      group-hover:text-white
                      transition-colors
                      duration-500
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className="
                    w-0
                    h-[2px]
                    bg-[#C89B6D]
                    mt-8
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

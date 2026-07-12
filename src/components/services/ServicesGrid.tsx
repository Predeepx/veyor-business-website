"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Wood Works",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
    description:
      "Custom woodwork solutions including wardrobes, modular kitchens, TV units, office furniture, and premium interior finishes.",
    features: [
      "Custom Furniture",
      "Modular Kitchens",
      "Wardrobes & Storage",
      "Interior Wood Finishes",
    ],
  },
  {
    title: "Metal Works",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    description:
      "Professional metal fabrication solutions for residential, commercial, and industrial projects.",
    features: [
      "Metal Gates",
      "Railings",
      "Structural Fabrication",
      "Industrial Solutions",
    ],
  },
  {
    title: "False Ceiling Works",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    description:
      "Modern false ceiling solutions designed to improve aesthetics and functionality.",
    features: [
      "Gypsum Ceiling",
      "Decorative Ceiling",
      "LED Integration",
      "Commercial Ceiling Solutions",
    ],
  },
  {
    title: "Aluminium Works",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    description:
      "Durable and elegant aluminium solutions for homes, offices, and commercial spaces.",
    features: [
      "Aluminium Doors",
      "Windows",
      "Office Partitions",
      "Commercial Installations",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="space-y-28">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`
                grid lg:grid-cols-2 gap-16 items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-[#C89B6D] uppercase tracking-[0.3em] text-sm mb-4">
                  VEYOR Services
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h2>

                <div className="w-24 h-1 bg-[#C89B6D] rounded-full mb-8"></div>

                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#C89B6D]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
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
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
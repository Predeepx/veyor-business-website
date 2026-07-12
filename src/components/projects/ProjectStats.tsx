"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Hammer, Star } from "lucide-react";

const stats = [
  {
    icon: Hammer,
    number: "150+",
    title: "Projects Completed",
    description:
      "Successfully delivered residential, commercial, and industrial projects.",
  },
  {
    icon: Users,
    number: "100+",
    title: "Happy Clients",
    description: "Trusted by homeowners and businesses across Chennai.",
  },
  {
    icon: Briefcase,
    number: "7+",
    title: "Years Experience",
    description:
      "Professional experience in construction and interior solutions.",
  },
  {
    icon: Star,
    number: "8+",
    title: "Core Services",
    description:
      "Comprehensive solutions under one roof for all your project needs.",
  },
];

export default function ProjectStats() {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
            Our Achievements
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Results That Speak
            <br />
            For Themselves
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            Over the years, VEYOR has earned the trust of customers through
            quality workmanship, timely delivery, and professional service.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  bg-[#111111]
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  text-center
                  hover:border-[#C89B6D]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-16 h-16
                    mx-auto
                    rounded-2xl
                    bg-[#C89B6D]/10
                    flex
                    items-center
                    justify-center
                    mb-6
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

                {/* Number */}
                <h3 className="text-5xl font-bold text-[#C89B6D] mb-4">
                  {stat.number}
                </h3>

                {/* Title */}
                <h4 className="text-2xl font-semibold text-white mb-4">
                  {stat.title}
                </h4>

                {/* Description */}
                <p className="text-white/65 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

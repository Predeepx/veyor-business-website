"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Hammer, MapPin } from "lucide-react";

const stats = [
  {
    number: "7+",
    title: "Years Experience",
    description:
      "Delivering professional wood, metal and construction solutions.",
    icon: Briefcase,
  },
  {
    number: "150+",
    title: "Projects Delivered",
    description: "Successfully completed residential and commercial projects.",
    icon: Hammer,
  },
  {
    number: "100+",
    title: "Happy Clients",
    description: "Trusted by homeowners and businesses across Chennai.",
    icon: Users,
  },
  {
    number: "8",
    title: "Professional Services",
    description: "Comprehensive solutions under one roof.",
    icon: MapPin,
  },
];

export default function ExperienceStats() {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
            Our Experience
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Numbers That Reflect
            <br />
            Our Commitment.
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            Over the years, VEYOR has built a reputation for quality,
            reliability, and professional execution across Chennai and
            surrounding areas.
          </p>
        </motion.div>

        {/* Stats Grid */}
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
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(200,155,109,0.15)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    mx-auto
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

                {/* Bottom Accent */}
                <div
                  className="
                    w-0
                    h-[2px]
                    bg-[#C89B6D]
                    mx-auto
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

        {/* Coverage Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-20
            bg-[#111111]
            border
            border-white/10
            rounded-3xl
            p-10
            text-center
          "
        >
          <MapPin size={40} className="text-[#C89B6D] mx-auto mb-6" />

          <h3 className="text-3xl font-bold text-white mb-4">
            Serving Chennai & Surrounding Areas
          </h3>

          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            VEYOR proudly provides professional construction, fabrication, and
            interior solutions throughout Chennai and nearby locations, ensuring
            reliable service and timely project completion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

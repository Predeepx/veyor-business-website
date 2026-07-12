"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock3,
  ShieldCheck,
  Users,
  Hammer,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "7+ Years Experience",
    description:
      "Over seven years of delivering quality craftsmanship across residential and commercial projects.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Experienced and skilled craftsmen committed to precision and attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description:
      "We use only high-quality materials to ensure durability and long-lasting performance.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Projects are completed according to schedule without compromising quality standards.",
  },
  {
    icon: Hammer,
    title: "Customized Solutions",
    description:
      "Every project is tailored to your requirements, style preferences, and budget.",
  },
  {
    icon: BadgeCheck,
    title: "Customer Satisfaction",
    description:
      "Our commitment to quality workmanship has earned the trust of customers across Chennai.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-28">
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
            Why Choose VEYOR
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Built On Trust.
            <br />
            Driven By Quality.
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            We combine craftsmanship, premium materials, and reliable execution
            to deliver construction and interior solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  hover:border-[#C89B6D]
                  transition-all
                  duration-500
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
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
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

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-24
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            text-center
          "
        >
          <div>
            <h3 className="text-5xl font-bold text-[#C89B6D]">7+</h3>
            <p className="text-white/60 mt-3">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#C89B6D]">150+</h3>
            <p className="text-white/60 mt-3">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#C89B6D]">100+</h3>
            <p className="text-white/60 mt-3">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#C89B6D]">100%</h3>
            <p className="text-white/60 mt-3">Commitment to Quality</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  MapPinned,
  FileText,
  Hammer,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    icon: PhoneCall,
    title: "Consultation",
    description:
      "Discuss your requirements, ideas, budget, and project goals with our team.",
  },
  {
    icon: MapPinned,
    title: "Site Visit",
    description:
      "We visit your location to understand the space and project requirements.",
  },
  {
    icon: FileText,
    title: "Quotation",
    description:
      "Receive a transparent quotation with timeline and material details.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description:
      "Our skilled team starts work using quality materials and professional methods.",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description:
      "Project completion with final inspection and customer approval.",
  },
];

export default function ProcessSection() {
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
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Simple, Transparent,
            <br />
            Professional.
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            From the first consultation to final delivery, VEYOR follows a
            structured process to ensure quality, transparency, and timely
            completion.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  relative
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
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-[#C89B6D]/20 text-5xl font-bold">
                  {index + 1}
                </div>

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

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 leading-relaxed">
                  {step.description}
                </p>

                {/* Accent Line */}
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
      </div>
    </section>
  );
}

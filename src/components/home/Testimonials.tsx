"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Chennai",
    review:
      "VEYOR completed our home woodwork project with excellent craftsmanship and attention to detail. The team delivered on time and exceeded our expectations.",
  },
  {
    name: "Suresh Babu",
    location: "Ambattur",
    review:
      "Professional team with quality workmanship. The false ceiling and aluminium works were completed exactly as promised.",
  },
  {
    name: "Prakash",
    location: "Avadi",
    review:
      "Highly satisfied with the fabrication work and finishing quality. Communication was clear throughout the project.",
  },
];

export default function Testimonials() {
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
            Client Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Trusted By Homeowners
            <br />
            And Businesses Across Chennai
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            Our clients value our craftsmanship, reliability, and commitment to
            delivering quality results on every project.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-[#C89B6D]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(200,155,109,0.15)]
              "
            >
              {/* Stars */}
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#C89B6D] text-[#C89B6D]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-white/70 leading-relaxed text-lg mb-8">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-6" />

              {/* Customer Info */}
              <div>
                <h3 className="text-white text-xl font-semibold">
                  {testimonial.name}
                </h3>

                <p className="text-[#C89B6D] mt-2">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
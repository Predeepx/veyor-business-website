"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  ShieldCheck,
  Hammer,
} from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="bg-black py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building Trust Through
              <br />
              Quality Craftsmanship.
            </h2>

            {/* Accent Line */}
            <div className="w-24 h-1 bg-[#C89B6D] mt-8 rounded-full"></div>

            {/* Description */}
            <p className="mt-8 text-white/70 text-lg leading-relaxed">
              VEYOR was established with a simple vision:
              to provide reliable workmanship, premium quality
              materials, and exceptional customer service in
              every project we undertake.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Over the last seven years, we have successfully
              completed residential, commercial, and industrial
              projects across Chennai, earning the trust of our
              customers through professionalism, precision,
              and timely delivery.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              From custom woodwork and fabrication to false
              ceilings and aluminium solutions, our team is
              committed to delivering results that combine
              durability, functionality, and modern design.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#C89B6D]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="text-[#C89B6D]" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Mission
                  </h3>

                  <p className="text-white/60">
                    Deliver quality workmanship with honesty,
                    reliability, and attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#C89B6D]/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="text-[#C89B6D]" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Vision
                  </h3>

                  <p className="text-white/60">
                    Become one of Chennai's most trusted
                    names in construction and interiors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#C89B6D]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-[#C89B6D]" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Quality
                  </h3>

                  <p className="text-white/60">
                    We use premium materials and proven
                    methods for long-lasting results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#C89B6D]/10 flex items-center justify-center flex-shrink-0">
                  <Hammer className="text-[#C89B6D]" size={28} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Craftsmanship
                  </h3>

                  <p className="text-white/60">
                    Every project receives careful attention
                    and professional execution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[650px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1681965825791-7befca134490?q=80&w=1657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="VEYOR Team at Work"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-[#C89B6D] rounded-3xl p-8 shadow-2xl">
              <h3 className="text-5xl font-bold text-white">10+</h3>
              <p className="text-white/90 mt-2">
                Years of
                <br />
                Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
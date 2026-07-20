"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#0B0B0B] py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[650px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1721508490122-445daade2d39?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="VEYOR Construction Work"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-10 -right-10 bg-[#C89B6D] p-8 rounded-3xl shadow-2xl">
              <h3 className="text-5xl font-bold text-white">10+</h3>
              <p className="text-white/90 mt-2">
                Years of
                <br />
                Experience
              </p>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Label */}
            <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
              About VEYOR
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Crafting Quality Spaces
              <br />
              With Precision &
              <br />
              Experience.
            </h2>

            {/* Accent Line */}
            <div className="w-24 h-1 bg-[#C89B6D] mt-8 rounded-full"></div>

            {/* Description */}
            <p className="mt-8 text-white/70 text-lg leading-relaxed">
              With over 7 years of experience, VEYOR specializes in premium wood
              works, fabrication, interiors, false ceilings, aluminium
              solutions, and customized construction services for residential,
              commercial, and industrial projects.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Our commitment to quality workmanship, premium materials, and
              timely project completion has earned the trust of customers across
              Chennai and surrounding areas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-[#C89B6D]">150+</h3>
                <p className="text-white/60 mt-2">Projects Delivered</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#C89B6D]">100+</h3>
                <p className="text-white/60 mt-2">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#C89B6D]">8</h3>
                <p className="text-white/60 mt-2">Services Offered</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#C89B6D]">100%</h3>
                <p className="text-white/60 mt-2">Quality Commitment</p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-12">
              <Link
                href="/about"
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
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

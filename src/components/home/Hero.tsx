"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1547609434-b732edfee020?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 min-h-screen flex items-center pt-28 lg:pt-32">
        <div className="border-l-4 border-[#C89B6D] pl-8 max-w-4xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6"
          >
            Professional Wood • Metal • Construction Solutions
          </motion.p>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-[0.95]
              text-white
            "
          >
            BUILD
            <br />
            RENOVATE
            <br />
            CREATE
          </motion.h1>

          {/* Gold Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-[#C89B6D] mt-8 rounded-full"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="
              mt-8
              max-w-2xl
              text-lg
              md:text-xl
              text-white/75
              leading-relaxed
            "
          >
            With over 7 years of experience, VEYOR delivers premium wood,
            fabrication, interior, and construction solutions for residential,
            commercial, and industrial projects across Chennai.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <Link
              href="/contact"
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
              Get Free Consultation
            </Link>

            <Link
              href="/projects"
              className="
                border
                border-white/30
                hover:border-[#C89B6D]
                text-white
                px-8
                py-4
                rounded-full
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              View Projects
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
              mt-20
            "
          >
            <div>
              <h3 className="text-4xl font-bold text-[#C89B6D]">7+</h3>
              <p className="text-white/60 mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C89B6D]">150+</h3>
              <p className="text-white/60 mt-2">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C89B6D]">50+</h3>
              <p className="text-white/60 mt-2">Commercial Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C89B6D]">100%</h3>
              <p className="text-white/60 mt-2">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#C89B6D] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604691634001-006dd07cf639?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-[#C89B6D] pl-8 max-w-4xl"
        >
          {/* Label */}
          <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
            About VEYOR
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Crafting Quality
            <br />
            Spaces For
            <br />
            Over 11 Years
          </h1>

          {/* Accent Line */}
          <div className="w-28 h-1 bg-[#C89B6D] mt-8 rounded-full" />

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
            VEYOR delivers premium wood works, fabrication,
            interior solutions, false ceiling installations,
            aluminium works, and customized construction
            services for residential, commercial, and
            industrial projects across Chennai.
          </p>

          {/* Breadcrumb */}
          <div className="mt-10 flex items-center gap-3 text-white/60">
            <span>Home</span>
            <span className="text-[#C89B6D]">/</span>
            <span className="text-[#C89B6D]">About</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
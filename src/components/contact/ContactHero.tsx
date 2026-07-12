"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-[#C89B6D] pl-8 max-w-4xl"
        >
          <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
            Contact VEYOR
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Let's Build
            <br />
            Something Great
            <br />
            Together.
          </h1>

          <div className="w-24 h-1 bg-[#C89B6D] mt-8 rounded-full" />

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
            Looking for professional wood works, metal fabrication, false
            ceilings, aluminium works, or complete interior solutions? Contact
            VEYOR today for a free consultation and quotation.
          </p>

          <div className="mt-10 flex items-center gap-3 text-white/60">
            <span>Home</span>
            <span className="text-[#C89B6D]">/</span>
            <span className="text-[#C89B6D]">Contact</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

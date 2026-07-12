"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111111]" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C89B6D]/10 via-transparent to-[#C89B6D]/10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6"
        >
          Ready To Start Your Project?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Let's Build Something
          <br />
          Exceptional Together.
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed"
        >
          Whether it's wood works, fabrication, false ceiling,
          aluminium solutions, or complete interior projects,
          VEYOR is ready to bring your ideas to life with
          quality craftsmanship and professional execution.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/916369749294"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
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
            <MessageCircle size={20} />
            Get Free Quote
            <ArrowRight size={18} />
          </a>

          {/* Call */}
          <a
            href="tel:+916369749294"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              border
              border-white/20
              hover:border-[#C89B6D]
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:bg-white/5
            "
          >
            <Phone size={20} />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
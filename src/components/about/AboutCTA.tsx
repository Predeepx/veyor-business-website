"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C89B6D]/10 via-transparent to-[#C89B6D]/10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6"
        >
          Let's Work Together
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Ready To Start
          <br />
          Your Next Project?
        </motion.h2>

        {/* Gold Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed"
        >
          Whether you need custom woodwork, fabrication, false ceiling
          solutions, aluminium works, or complete interior services, VEYOR is
          ready to deliver quality craftsmanship with professional execution.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
        >
          {/* WhatsApp Button */}
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

          {/* Call Button */}
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

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-white/50 text-sm"
        >
          <p>
            Owner: <span className="text-white">Kishore</span> • Phone:{" "}
            <span className="text-white">+91 63697 49294</span> • Chennai, Tamil
            Nadu
          </p>
        </motion.div>
      </div>
    </section>
  );
}

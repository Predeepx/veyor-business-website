"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C89B6D]/10 via-transparent to-[#C89B6D]/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6"
        >
          Ready To Start?
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Bring Your Vision
          <br />
          To Life With VEYOR
        </motion.h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full" />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed"
        >
          From custom wood works and fabrication to complete interior
          solutions, VEYOR delivers quality craftsmanship with reliable
          service and on-time completion.
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
              inline-flex items-center justify-center gap-3
              bg-[#25D366]
              hover:scale-105
              text-white
              px-8 py-4
              rounded-full
              font-semibold
              transition-all duration-300
            "
          >
            <MessageCircle size={20} />
            WhatsApp Us
            <ArrowRight size={18} />
          </a>

          {/* Call */}
          <a
            href="tel:+916369749294"
            className="
              inline-flex items-center justify-center gap-3
              border border-[#C89B6D]
              text-[#C89B6D]
              hover:bg-[#C89B6D]
              hover:text-white
              px-8 py-4
              rounded-full
              font-semibold
              transition-all duration-300
            "
          >
            <Phone size={20} />
            Call Now
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
          <span>✓ Free Consultation</span>
          <span>✓ Transparent Pricing</span>
          <span>✓ Premium Materials</span>
          <span>✓ On-Time Delivery</span>
        </div>
      </div>
    </section>
  );
}
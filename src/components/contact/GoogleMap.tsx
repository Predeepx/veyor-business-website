"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GoogleMap() {
  return (
    <section id="map" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-4">
            Visit Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Our Location
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto rounded-full mb-6" />

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Visit our office or contact us for a free consultation and project
            estimate.
          </p>
        </motion.div>

        {/* Address Card */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 mb-8 flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#C89B6D]/10 flex items-center justify-center">
            <MapPin className="text-[#C89B6D]" size={28} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">VEYOR</h3>

            <p className="text-white/70 leading-relaxed">
              No. 1/236, Bajanai Koil Street,
              <br />
              Padiyanallur,
              <br />
              Chennai, Tamil Nadu - 600052
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Padiyanallur,Chennai,Tamil%20Nadu%20600052&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

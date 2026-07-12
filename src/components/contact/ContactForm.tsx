"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-4">
              Get A Free Quote
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Tell Us About
              <br />
              Your Project.
            </h2>

            <div className="w-24 h-1 bg-[#C89B6D] rounded-full mb-8" />

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Whether you need wood works, fabrication, false ceiling,
              aluminium installations, or complete interior solutions,
              our team is ready to help.
            </p>

            <div className="space-y-4 text-white/70">
              <p>✓ Free consultation</p>
              <p>✓ Affordable pricing</p>
              <p>✓ Premium quality materials</p>
              <p>✓ On-time project completion</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8 space-y-6"
          >
            <div>
              <label className="block text-white mb-3">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#C89B6D]"
              />
            </div>

            <div>
              <label className="block text-white mb-3">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#C89B6D]"
              />
            </div>

            <div>
              <label className="block text-white mb-3">Service Required</label>

              <select className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#C89B6D]">
                <option>Wood Works</option>
                <option>Metal Works</option>
                <option>PVC Works</option>
                <option>UPVC Works</option>
                <option>False Ceiling</option>
                <option>Aluminium Works</option>
                <option>Welding & Fabrication</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-3">Message</label>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#C89B6D] resize-none"
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-[#C89B6D]
                hover:bg-[#b5895d]
                text-white
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
              "
            >
              Send Inquiry
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
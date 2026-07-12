"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const services = [
  "Wood Works",
  "Metal Works",
  "PVC Works",
  "UPVC Works",
  "Welding & Fabrication",
  "False Ceiling Works",
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-4 gap-14">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold tracking-[0.2em] text-white">
              VEYOR
            </h2>

            <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mt-3">
              Build • Renovate • Create
            </p>

            <p className="text-white/70 leading-relaxed mt-8 max-w-xl">
              VEYOR provides premium wood works, fabrication, interior
              solutions, false ceiling installations, aluminium works, and
              customized construction services for residential, commercial, and
              industrial projects across Chennai.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/916369749294"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#C89B6D]
                  hover:bg-[#b98b5c]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  transition-all
                  duration-300
                "
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <a
                href="tel:+916369749294"
                className="
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-white/20
                  hover:border-[#C89B6D]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  transition-all
                  duration-300
                "
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      className="
                      text-white/70
                      hover:text-[#C89B6D]
                      transition-colors
                      duration-300
                      flex
                      items-center
                      gap-2
                    "
                    >
                      <ArrowUpRight size={16} />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8">Services</h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="
                    text-white/70
                    hover:text-[#C89B6D]
                    transition-colors
                    duration-300
                  "
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10">
          <div className="flex items-start gap-4">
            <Phone className="text-[#C89B6D] mt-1" size={22} />

            <div>
              <h4 className="text-white font-semibold mb-2">Phone</h4>

              <a
                href="tel:+916369749294"
                className="text-white/70 hover:text-[#C89B6D]"
              >
                +91 63697 49294
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-[#C89B6D] mt-1" size={22} />

            <div>
              <h4 className="text-white font-semibold mb-2">Email</h4>

              <a
                href="mailto:kishoreharish6369@gmail.com"
                className="text-white/70 hover:text-[#C89B6D]"
              >
                kishoreharish6369@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-[#C89B6D] mt-1" size={22} />

            <div>
              <h4 className="text-white font-semibold mb-2">Address</h4>

              <p className="text-white/70">
                No.1/236, Bajanai Koil Street, Pudiamallur, Chennai, Tamil Nadu
                - 600052
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} VEYOR. All rights reserved.
          </p>

          <p className="text-white/50 text-sm">
            Designed & Developed by{" "}
            <a
              href="https://predeepx.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C89B6D] hover:text-white transition-colors"
            >
              Predeep
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 63697 49294",
    link: "tel:+916369749294",
    button: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 63697 49294",
    link: "https://wa.me/916369749294",
    button: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "kishoreharish6369@gmail.com",
    link: "mailto:kishoreharish6369@gmail.com",
    button: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "No. 1/236, Bajanai Koil Street, Padiyanallur, Chennai - 600052",
    link: "#map",
    button: "View Location",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  bg-[#111111]
                  border border-white/10
                  rounded-3xl
                  p-8
                  hover:border-[#C89B6D]
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-[#C89B6D]/10
                    flex items-center justify-center
                    mb-6
                    group-hover:bg-[#C89B6D]
                    transition-all duration-500
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-[#C89B6D]
                      group-hover:text-white
                      transition-colors duration-500
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* Value */}
                <p className="text-white/70 leading-relaxed mb-6">
                  {item.value}
                </p>

                {/* Button */}
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-5 py-3
                    rounded-full
                    bg-[#C89B6D]
                    hover:bg-[#b5895d]
                    text-white
                    font-medium
                    transition-all duration-300
                  "
                >
                  {item.button}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

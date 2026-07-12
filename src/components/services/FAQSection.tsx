"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes, VEYOR provides free consultations and quotations for all residential, commercial, and industrial projects.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We primarily serve Chennai and surrounding areas, including Ambattur, Avadi, Red Hills, and nearby locations.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project duration depends on the scope and complexity. Small projects may take a few days, while larger interior or construction projects can take several weeks.",
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Yes. Every project is tailored to your space, style preferences, and budget requirements.",
  },
  {
    question: "What types of materials do you use?",
    answer:
      "We use premium-quality materials sourced from trusted suppliers to ensure durability and long-lasting performance.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. VEYOR undertakes residential, commercial, office, and industrial projects across multiple service categories.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#C89B6D] uppercase tracking-[0.35em] text-sm mb-6">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Questions We
            <br />
            Frequently Receive
          </h2>

          <div className="w-24 h-1 bg-[#C89B6D] mx-auto mt-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-white/70 text-lg mt-8 leading-relaxed">
            Here are answers to some of the most common questions about our
            services, process, and project timelines.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-[#C89B6D]
                transition-all
                duration-300
              "
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-7
                  text-left
                "
              >
                <span className="text-white text-lg md:text-xl font-medium">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`
                    text-[#C89B6D]
                    transition-transform
                    duration-300
                    ${openIndex === index ? "rotate-180" : ""}
                  `}
                  size={28}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-7 pb-7 text-white/70 leading-relaxed border-t border-white/10 pt-5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
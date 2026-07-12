"use client";

import { motion } from "framer-motion";

interface ProjectFiltersProps {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const filters = [
  "All",
  "Wood Works",
  "Metal Works",
  "PVC Works",
  "UPVC Works",
  "Welding & Fabrication",
  "False Ceiling",
  "Aluminium Works",
];

export default function ProjectFilters({
  activeFilter,
  setActiveFilter,
}: ProjectFiltersProps) {
  return (
    <section className="bg-black py-12 border-t border-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm md:text-base
                transition-all duration-300 border
                ${
                  activeFilter === filter
                    ? "bg-[#C89B6D] border-[#C89B6D] text-white shadow-lg shadow-[#C89B6D]/20"
                    : "bg-[#111111] border-white/10 text-white/70 hover:border-[#C89B6D] hover:text-white hover:bg-[#1a1a1a]"
                }
              `}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

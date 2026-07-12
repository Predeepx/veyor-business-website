"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col select-none">
          <span className="text-3xl font-bold tracking-[0.25em] text-white">
            VEYOR
          </span>

          <span className="text-xs uppercase tracking-[0.4em] text-[#C89B6D] mt-1">
            Build • Renovate • Create
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative
                text-white/80
                hover:text-white
                transition-colors
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#C89B6D]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/916369749294"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#C89B6D]
              text-white
              px-8
              py-4
              rounded-full
              font-medium
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_10px_30px_rgba(200,155,109,0.4)]
            "
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-white/80
                  hover:text-[#C89B6D]
                  text-lg
                  transition-colors
                  duration-300
                "
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/916369749294"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                bg-[#C89B6D]
                text-white
                py-4
                rounded-full
                text-center
                font-medium
                hover:bg-[#b98b5c]
                transition-colors
              "
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

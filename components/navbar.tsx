"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollLink from "@/components/scroll-link";

const navItems = [
  { label: "Beranda", href: "/", section: "hero" },
  { label: "Layanan", href: "/layanan", section: "layanan" },
  { label: "Visi Misi", href: "/visi-misi", section: "visi-misi" },
  { label: "Klien", href: "/customers", section: "klien" },
  { label: "Tim", href: "/team", section: "tim" },
  { label: "Agenda", href: "/", section: "agenda" },
  { label: "Kontak", href: "/contact", section: "kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center">
            <div className="relative w-22 h-22 md:w-32 md:h-32">
              <Image
                src="/pijar-logo.png"
                alt="Pijar Teknologi Mediatama Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                href={item.section ? `#${item.section}` : item.href}
                targetId={item.section}
                className={`text-sm font-medium hover:text-[#293279] transition-colors ${
                  scrolled ? "text-[#414141]" : "text-[#414141]"
                }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className={scrolled ? "text-[#414141]" : "text-[#414141]"}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              scrolled ? "text-[#414141]" : "text-[#414141]"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-white/20 py-4">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                href={item.section ? `#${item.section}` : item.href}
                targetId={item.section}
                className="text-sm text-[#414141] hover:text-[#293279] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
            <Button variant="ghost" size="sm" className="justify-start pl-0">
              <Search className="h-5 w-5 text-[#414141] mr-2" />
              <span className="text-[#414141]">Cari</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

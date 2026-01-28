"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { companyData } from "@/data/company";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Portafolio", href: "/#portafolio" },
  { name: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10">
              {/* Logo glow effect on hover */}
              <div className="absolute inset-0 bg-amber-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-stone-950 font-bold text-xl font-display">
                  F
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-stone-100 font-semibold text-lg tracking-tight">
                Foxley
              </span>
              <span className="text-stone-500 text-sm block -mt-0.5">
                Digital Signage
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-stone-400 hover:text-stone-100 transition-colors text-sm font-medium group"
              >
                {item.name}
                {/* Hover underline */}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <Link
              href="/#contacto"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/30 rounded-full text-sm font-medium text-stone-100 transition-all duration-300"
            >
              Cotizar Proyecto
              <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-stone-300 hover:text-stone-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-6 border-t border-stone-800/50">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-stone-300 hover:text-stone-100 hover:bg-stone-900/50 rounded-lg transition-colors text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-stone-800/50">
                <Link
                  href="/#contacto"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-amber-500 hover:bg-amber-400 rounded-full text-sm font-semibold text-stone-950 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cotizar Proyecto
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

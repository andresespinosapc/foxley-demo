"use client";

import { Container } from "@/components/layout/Container";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="servicios" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      <div className="absolute right-12 top-32 w-px h-64 bg-gradient-to-b from-amber-500/20 to-transparent hidden lg:block" />

      <Container className="relative z-10">
        {/* Section header - editorial asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <span className="text-amber-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Servicios
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-stone-100 leading-[1.1]">
              Soluciones que
              <br />
              <span className="italic text-gradient-gold">brillan</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-lg text-stone-400 leading-relaxed font-light">
              Desde la instalación de hardware hasta la creación de contenido y
              gestión de campañas. Todo lo que necesitas para transformar tus
              espacios en experiencias memorables.
            </p>
          </div>
        </div>

        {/* Services grid - magazine-style layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800/50 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "group relative bg-[#0a0a0a] p-8 lg:p-10",
                "transition-all duration-500 ease-out",
                "hover:bg-stone-900/50"
              )}
            >
              {/* Number - decorative, hidden from screen readers */}
              <span
                aria-hidden="true"
                className="absolute top-6 right-6 text-5xl font-display text-stone-500 group-hover:text-amber-500/30 transition-colors duration-500"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 mb-8 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all duration-500">
                <service.icon className="w-6 h-6 text-stone-400 group-hover:text-amber-400 transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-stone-100 mb-3 group-hover:text-amber-50 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-400 text-sm mb-6 leading-relaxed group-hover:text-stone-300 transition-colors">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-stone-400"
                  >
                    <span className="w-1 h-1 bg-amber-500/50 rounded-full group-hover:bg-amber-400 transition-colors" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover reveal link */}
              <div className="flex items-center gap-2 text-amber-500 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span>Más información</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

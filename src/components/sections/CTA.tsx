"use client";

import { Container } from "@/components/layout/Container";
import { LeadFormSheet } from "@/components/forms/LeadFormSheet";
import { Zap } from "lucide-react";

export function CTA() {
  return (
    <section id="contacto" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Dramatic radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

      {/* Grid pattern fading out */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <Zap className="w-8 h-8 text-amber-400" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-light text-stone-100 leading-[1.1] mb-6">
            <span className="italic text-gradient-gold">Enciende</span>
            <br />
            tu próximo proyecto
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Descarga nuestro brochure y descubre cómo el digital signage puede
            impulsar tu negocio. Incluye casos de éxito, servicios y precios
            referenciales.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <LeadFormSheet
              triggerText="Solicitar Propuesta Gratuita"
              triggerClassName="text-lg px-10 py-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-1"
            />

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Respuesta en 24h
              </span>
              <span className="flex items-center gap-2 hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Asesoría personalizada
              </span>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-12 left-12 w-24 h-24 border-l border-t border-stone-800/50 rounded-tl-3xl hidden lg:block" />
          <div className="absolute bottom-12 right-12 w-24 h-24 border-r border-b border-stone-800/50 rounded-br-3xl hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { LeadFormSheet } from "@/components/forms/LeadFormSheet";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { companyData } from "@/data/company";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise-overlay">
      {/* Deep background with gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Diagonal gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-orange-600/[0.02]" />

      {/* Grid pattern - more subtle and sophisticated */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-[100px]" />

      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium tracking-wide uppercase">
                  Digital Signage Premium
                </span>
              </div>
            </div>

            {/* Main headline - editorial style with mixed typography */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-light text-stone-100 leading-[0.95] tracking-tight">
                Ilumina
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display italic text-gradient-gold leading-[0.95] tracking-tight">
                tus espacios
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-light text-stone-100 leading-[0.95] tracking-tight">
                con luz digital
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-400 max-w-xl leading-relaxed font-light">
              {companyData.tagline}. Creamos experiencias visuales que capturan
              miradas y transforman la comunicación de tu marca.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <LeadFormSheet
                triggerText="Solicitar Propuesta"
                triggerClassName="text-base px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
              />
              <Link
                href="/#portafolio"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-stone-300 border border-stone-800 rounded-full hover:border-stone-600 hover:text-stone-100 transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-full bg-stone-800 group-hover:bg-stone-700 flex items-center justify-center transition-colors">
                  <Play className="w-3 h-3 ml-0.5" />
                </span>
                Ver Proyectos
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Visual element - 5 columns */}
          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Main screen mockup */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent rounded-3xl blur-2xl" />

              {/* Screen frame */}
              <div className="relative bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-1.5 shadow-2xl shadow-black/50">
                {/* Screen bezel */}
                <div className="bg-stone-950 rounded-xl p-1">
                  {/* Screen content */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative scanlines animate-flicker">
                    {/* Image */}
                    <Image
                      src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80"
                      alt="Digital signage en centro comercial"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 bg-gradient-to-t from-stone-950/70 via-stone-950/30 to-transparent">
                      <p className="text-2xl font-display italic drop-shadow-lg">Tu contenido</p>
                      <p className="text-lg font-light opacity-90 drop-shadow-lg">brillando 24/7</p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/50" />
                    <div className="absolute bottom-4 left-4 text-xs font-mono text-white/70">
                      LIVE
                    </div>
                  </div>
                </div>

                {/* Stand */}
                <div className="flex justify-center mt-2">
                  <div className="w-16 h-1 bg-stone-700 rounded-full" />
                </div>
              </div>

              {/* Floating metric cards */}
              <div className="absolute -top-8 -right-8 bg-stone-900/90 backdrop-blur-sm rounded-xl p-4 border border-stone-800 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 text-xl font-bold">+</span>
                  </div>
                  <div>
                    <div className="text-stone-100 font-semibold text-lg">45%</div>
                    <div className="text-xs text-stone-500">más engagement</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-8 bg-stone-900/90 backdrop-blur-sm rounded-xl p-4 border border-stone-800 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-stone-100 font-semibold">En vivo</div>
                    <div className="text-xs text-stone-500">500+ pantallas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 pt-12 border-t border-stone-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "500+", label: "Pantallas activas" },
              { value: "50+", label: "Clientes satisfechos" },
              { value: "10+", label: "Años de experiencia" },
              { value: "24/7", label: "Soporte técnico" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center md:text-left"
              >
                <div className="text-3xl md:text-4xl font-display text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-500 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

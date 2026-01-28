"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  retail: "Retail",
  corporativo: "Corporativo",
  eventos: "Eventos",
  exterior: "Exterior",
};

const categoryColors: Record<string, string> = {
  retail: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  corporativo: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  eventos: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  exterior: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export function Portfolio() {
  const projects = getFeaturedProjects();

  return (
    <section id="portafolio" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-stone-950" />

      {/* Subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stone-800/30 to-transparent hidden lg:block" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-amber-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Portafolio
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-stone-100 leading-[1.1] mb-6">
              Proyectos que
              <br />
              <span className="italic text-gradient-gold">iluminan marcas</span>
            </h2>
            <p className="text-lg text-stone-400 leading-relaxed font-light">
              Conoce cómo hemos ayudado a empresas líderes a transformar sus
              espacios con soluciones de digital signage innovadoras.
            </p>
          </div>
          <Link
            href="/#portafolio"
            className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors shrink-0"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects grid - asymmetric masonry-inspired */}
        <div className="grid lg:grid-cols-12 gap-6">
          {projects.map((project, index) => {
            const isLarge = index === 0;
            return (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  "bg-stone-900/50 border border-stone-800/50",
                  "hover:border-amber-500/30 transition-all duration-500",
                  isLarge ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
                )}
              >
                {/* Thumbnail area */}
                <div
                  className={cn(
                    "relative overflow-hidden",
                    isLarge ? "aspect-[4/3]" : "aspect-video"
                  )}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-amber-500/10 to-orange-500/20" />

                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245,158,11,0.3) 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-stone-950/80 backdrop-blur-sm flex items-center justify-center border border-stone-700/50 group-hover:scale-110 group-hover:border-amber-500/50 group-hover:bg-stone-950/90 transition-all duration-500">
                      <Play className="w-6 h-6 text-stone-300 ml-1 group-hover:text-amber-400 transition-colors" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm",
                        categoryColors[project.category]
                      )}
                    >
                      {categoryLabels[project.category]}
                    </span>
                  </div>

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-950 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Client name */}
                  <p className="text-amber-400 text-sm font-medium mb-2 flex items-center gap-2">
                    {project.client}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>

                  {/* Title */}
                  <h3
                    className={cn(
                      "font-display font-light text-stone-100 mb-3 group-hover:text-amber-50 transition-colors",
                      isLarge ? "text-2xl lg:text-3xl" : "text-xl"
                    )}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-500 text-sm line-clamp-2 mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <div className="flex gap-8 pt-4 border-t border-stone-800/50">
                      {project.results.slice(0, isLarge ? 3 : 2).map((result) => (
                        <div key={result.metric}>
                          <div className="text-xl font-display text-gradient-gold">
                            {result.value}
                          </div>
                          <div className="text-xs text-stone-600 mt-1">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-px bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-2xl" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

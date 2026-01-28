import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  retail: "Retail",
  corporativo: "Corporativo",
  eventos: "Eventos",
  exterior: "Exterior",
};

const categoryColors: Record<string, string> = {
  retail: "bg-emerald-500/20 text-emerald-400",
  corporativo: "bg-blue-500/20 text-blue-400",
  eventos: "bg-purple-500/20 text-purple-400",
  exterior: "bg-amber-500/20 text-amber-400",
};

export function Portfolio() {
  const projects = getFeaturedProjects();

  return (
    <section id="portafolio" className="py-24 bg-slate-900">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proyectos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                destacados
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Conoce cómo hemos ayudado a empresas líderes a transformar sus
              espacios con soluciones de digital signage.
            </p>
          </div>
          <Link
            href="/#portafolio"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className={cn(
                "group relative bg-slate-800/50 rounded-2xl overflow-hidden",
                "border border-slate-700/50 hover:border-slate-600",
                "transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5"
              )}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-blue-800/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      categoryColors[project.category]
                    )}
                  >
                    {categoryLabels[project.category]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sky-400 text-sm font-medium mb-1">
                  {project.client}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Results preview */}
                {project.results && project.results.length > 0 && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-slate-700/50">
                    {project.results.slice(0, 2).map((result) => (
                      <div key={result.metric}>
                        <div className="text-white font-semibold">
                          {result.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

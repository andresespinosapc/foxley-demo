import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { VideoPlayer } from "@/components/portfolio/VideoPlayer";
import { BreadcrumbJsonLd, VideoJsonLd } from "@/components/seo/JsonLd";
import { LeadFormSheet } from "@/components/forms/LeadFormSheet";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} - ${project.client}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `/portfolio/${project.slug}`,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Inicio", url: "https://foxley.cl" },
    { name: "Portafolio", url: "https://foxley.cl/#portafolio" },
    { name: project.title, url: `https://foxley.cl/portfolio/${project.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <VideoJsonLd project={project} />

      <article className="min-h-screen bg-slate-950 pt-24 pb-16">
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-slate-600" />
              <li>
                <Link
                  href="/#portafolio"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portafolio
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-slate-600" />
              <li className="text-white font-medium truncate max-w-[200px]">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Back link */}
          <Link
            href="/#portafolio"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portafolio
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  categoryColors[project.category]
                )}
              >
                {categoryLabels[project.category]}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{project.client}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              {project.shortDescription}
            </p>
          </header>

          {/* Video */}
          <section className="mb-12">
            <VideoPlayer
              src={project.videoUrl}
              poster={project.videoThumbnail}
              title={project.title}
            />
          </section>

          {/* Content grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Sobre el proyecto
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              {/* Technologies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Tecnologías utilizadas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Resultados
                  </h3>
                  <ul className="space-y-4">
                    {project.results.map((result) => (
                      <li
                        key={result.metric}
                        className="flex justify-between items-center"
                      >
                        <span className="text-slate-400">{result.metric}</span>
                        <span className="text-xl font-bold text-sky-400">
                          {result.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-sky-600/20 to-blue-600/20 border border-sky-500/20 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  ¿Quieres un proyecto similar?
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Descarga nuestro brochure con más casos de éxito y servicios.
                </p>
                <LeadFormSheet
                  triggerText="Descargar Brochure"
                  size="default"
                  triggerClassName="w-full"
                />
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { LeadFormSheet } from "@/components/forms/LeadFormSheet";
import { ArrowRight, Play } from "lucide-react";
import { companyData } from "@/data/company";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              Líderes en Digital Signage en Chile
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforma tu espacio en una{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                experiencia digital
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              {companyData.tagline}. Soluciones de cartelería digital que
              capturan la atención, comunican tu mensaje y generan resultados
              medibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <LeadFormSheet
                triggerText="Descargar Brochure Gratuito"
                triggerClassName="text-base px-6 py-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/25"
              />
              <Link
                href="/#portafolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white border border-slate-700 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <Play className="w-4 h-4" />
                Ver Proyectos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Pantallas instaladas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Clientes activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-slate-400">Años experiencia</div>
              </div>
            </div>
          </div>

          {/* Visual element - mockup preview */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main screen */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 shadow-2xl shadow-black/50">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                    alt="Digital Signage en acción"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-medium">Digital Signage Premium</p>
                    <p className="text-sm opacity-75">Contenido dinámico en tiempo real</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-lg">↑</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">+45%</div>
                    <div className="text-xs text-slate-400">Engagement</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sky-400 text-lg">◉</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">En vivo</div>
                    <div className="text-xs text-slate-400">12 pantallas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

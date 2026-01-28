import { Container } from "@/components/layout/Container";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Soluciones integrales de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Digital Signage
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Desde la instalación de hardware hasta la creación de contenido y
            gestión de campañas. Todo lo que necesitas para transformar tus
            espacios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "group relative p-6 bg-slate-900/50 border border-slate-800 rounded-2xl",
                "hover:bg-slate-900 hover:border-slate-700 transition-all duration-300",
                "hover:shadow-xl hover:shadow-sky-500/5"
              )}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-sky-500/30 group-hover:to-blue-600/30 transition-colors">
                <service.icon className="w-6 h-6 text-sky-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

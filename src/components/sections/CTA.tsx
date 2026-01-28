import { Container } from "@/components/layout/Container";
import { LeadFormSheet } from "@/components/forms/LeadFormSheet";

export function CTA() {
  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 via-transparent to-blue-600/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tus espacios?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Descarga nuestro brochure y descubre cómo el digital signage puede
            impulsar tu negocio. Incluye casos de éxito, servicios y precios
            referenciales.
          </p>
          <LeadFormSheet
            triggerText="Descargar Brochure Gratuito"
            triggerClassName="text-lg px-8 py-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/25"
          />
          <p className="mt-6 text-sm text-slate-500">
            Sin compromiso. Descarga instantánea.
          </p>
        </div>
      </Container>
    </section>
  );
}

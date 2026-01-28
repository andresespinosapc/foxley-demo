export const companyData = {
  name: "Foxley Digital Signage",
  tagline: "Transformamos espacios en experiencias digitales",
  description:
    "Líderes en soluciones de cartelería digital en Chile y Latinoamérica. Creamos experiencias visuales que capturan la atención y generan resultados.",
  address: "Av. Providencia 1234, Oficina 501, Santiago, Chile",
  phone: "+56 2 2345 6789",
  email: "contacto@foxley.cl",
  social: {
    linkedin: "https://linkedin.com/company/foxley",
    instagram: "https://instagram.com/foxley_digital",
  },
};

export interface GroupCompany {
  name: string;
  url: string;
  description: string;
}

export const groupCompanies: GroupCompany[] = [
  {
    name: "Foxley Media",
    url: "https://foxleymedia.cl",
    description: "Producción audiovisual y contenido digital",
  },
  {
    name: "Foxley Tech",
    url: "https://foxleytech.cl",
    description: "Desarrollo de software y soluciones tecnológicas",
  },
  {
    name: "Foxley Events",
    url: "https://foxleyevents.cl",
    description: "Producción de eventos corporativos",
  },
  {
    name: "Foxley Agency",
    url: "https://foxleyagency.cl",
    description: "Marketing digital y estrategia de marca",
  },
];

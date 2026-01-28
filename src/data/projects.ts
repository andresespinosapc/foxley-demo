export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  shortDescription: string;
  category: "retail" | "corporativo" | "eventos" | "exterior";
  thumbnail: string;
  images: string[];
  videoUrl: string;
  videoThumbnail: string;
  videoDuration: string;
  technologies: string[];
  results?: {
    metric: string;
    value: string;
  }[];
  date: string;
  updatedAt: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "retail-mall-plaza",
    title: "Transformación Digital Mall Plaza",
    client: "Mall Plaza",
    description:
      "Implementación de una red de más de 200 pantallas LED en 15 centros comerciales de Chile. El proyecto incluyó videowalls de gran formato en accesos principales, tótems interactivos de wayfinding y pantallas de señalización en pasillos. Desarrollamos un CMS centralizado que permite gestionar todo el contenido desde una única plataforma, con capacidad de segmentación por ubicación y horario.",
    shortDescription: "Red de 200+ pantallas en 15 centros comerciales",
    category: "retail",
    thumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
      "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    videoThumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    videoDuration: "PT2M30S",
    technologies: ["LED Indoor P2.5", "CMS Propietario", "Sensores de Audiencia"],
    results: [
      { metric: "Pantallas instaladas", value: "200+" },
      { metric: "Centros comerciales", value: "15" },
      { metric: "Incremento engagement", value: "+45%" },
    ],
    date: "2024-08-15",
    updatedAt: "2024-08-20",
    featured: true,
  },
  {
    id: "2",
    slug: "corporativo-banco-chile",
    title: "Digitalización Sucursales Banco de Chile",
    client: "Banco de Chile",
    description:
      "Proyecto de modernización de la experiencia en sucursales bancarias. Instalamos pantallas de señalización digital para comunicación interna y cartelería dinámica orientada al cliente. El sistema incluye integración con APIs del banco para mostrar información en tiempo real como tasas, promociones y tiempos de espera.",
    shortDescription: "Señalización digital en 50 sucursales bancarias",
    category: "corporativo",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoThumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    videoDuration: "PT1M45S",
    technologies: ["Pantallas 55\"", "Integración API", "Contenido Dinámico"],
    results: [
      { metric: "Sucursales digitalizadas", value: "50" },
      { metric: "Reducción tiempo espera percibido", value: "-30%" },
      { metric: "Satisfacción cliente", value: "+25%" },
    ],
    date: "2024-06-10",
    updatedAt: "2024-06-15",
    featured: true,
  },
  {
    id: "3",
    slug: "evento-lollapalooza-2024",
    title: "Lollapalooza Chile 2024",
    client: "Lotus Producciones",
    description:
      "Producción e instalación de pantallas LED gigantes para los escenarios principales del festival Lollapalooza Chile 2024. Incluimos pantallas laterales, backdrop LED de alta resolución y sistemas de video mapping. Coordinación completa con producción artística para sincronización de visuales con presentaciones en vivo.",
    shortDescription: "Pantallas LED gigantes para festival musical",
    category: "eventos",
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    videoThumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    videoDuration: "PT3M00S",
    technologies: ["LED Outdoor P3.9", "Video Mapping", "Control Show"],
    results: [
      { metric: "Escenarios equipados", value: "4" },
      { metric: "m² de pantalla LED", value: "500+" },
      { metric: "Asistentes impactados", value: "200K+" },
    ],
    date: "2024-03-18",
    updatedAt: "2024-03-25",
    featured: true,
  },
  {
    id: "4",
    slug: "exterior-autopista-central",
    title: "Red de Pantallas Autopista Central",
    client: "Autopista Central",
    description:
      "Instalación de pantallas LED de gran formato a lo largo de la Autopista Central para publicidad y mensajería de seguridad vial. Pantallas de alta luminosidad diseñadas para visibilidad diurna y nocturna, con sistema de gestión de contenido que permite actualizaciones en tiempo real para alertas de tráfico.",
    shortDescription: "Pantallas publicitarias en autopista urbana",
    category: "exterior",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoThumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    videoDuration: "PT1M30S",
    technologies: ["LED Outdoor P10", "Alta Luminosidad", "Gestión Remota"],
    results: [
      { metric: "Pantallas instaladas", value: "12" },
      { metric: "Impresiones diarias", value: "2M+" },
      { metric: "Uptime garantizado", value: "99.9%" },
    ],
    date: "2024-01-20",
    updatedAt: "2024-02-01",
    featured: false,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return projects.filter((p) => p.category === category);
}

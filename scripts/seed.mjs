import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlrcatwyhivzowlhasxy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZscmNhdHd5aGl2em93bGhhc3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2MTQyODcsImV4cCI6MjA4NTE5MDI4N30.gyKwxjY3hW7Vb0SixS1RBtGbWo7-mh5_1bkNmOKGh0A";

const supabase = createClient(supabaseUrl, supabaseKey);

const projects = [
  {
    slug: "retail-mall-plaza",
    title: "Transformación Digital Mall Plaza",
    client: "Mall Plaza",
    description: "Implementación de una red de más de 200 pantallas LED en 15 centros comerciales de Chile. El proyecto incluyó videowalls de gran formato en accesos principales, tótems interactivos de wayfinding y pantallas de señalización en pasillos. Desarrollamos un CMS centralizado que permite gestionar todo el contenido desde una única plataforma, con capacidad de segmentación por ubicación y horario.",
    short_description: "Red de 200+ pantallas en 15 centros comerciales",
    category: "retail",
    thumbnail: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=1200&q=80",
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
    ],
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    video_thumbnail: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80",
    video_duration: "PT2M30S",
    technologies: ["LED Indoor P2.5", "CMS Propietario", "Sensores de Audiencia"],
    results: [
      { metric: "Pantallas instaladas", value: "200+" },
      { metric: "Centros comerciales", value: "15" },
      { metric: "Incremento engagement", value: "+45%" }
    ],
    date: "2024-08-15",
    featured: true
  },
  {
    slug: "corporativo-banco-chile",
    title: "Digitalización Sucursales Banco de Chile",
    client: "Banco de Chile",
    description: "Proyecto de modernización de la experiencia en sucursales bancarias. Instalamos pantallas de señalización digital para comunicación interna y cartelería dinámica orientada al cliente. El sistema incluye integración con APIs del banco para mostrar información en tiempo real como tasas, promociones y tiempos de espera.",
    short_description: "Señalización digital en 50 sucursales bancarias",
    category: "corporativo",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
    ],
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    video_thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    video_duration: "PT1M45S",
    technologies: ["Pantallas 55\"", "Integración API", "Contenido Dinámico"],
    results: [
      { metric: "Sucursales digitalizadas", value: "50" },
      { metric: "Reducción tiempo espera percibido", value: "-30%" },
      { metric: "Satisfacción cliente", value: "+25%" }
    ],
    date: "2024-06-10",
    featured: true
  },
  {
    slug: "evento-lollapalooza-2024",
    title: "Lollapalooza Chile 2024",
    client: "Lotus Producciones",
    description: "Producción e instalación de pantallas LED gigantes para los escenarios principales del festival Lollapalooza Chile 2024. Incluimos pantallas laterales, backdrop LED de alta resolución y sistemas de video mapping. Coordinación completa con producción artística para sincronización de visuales con presentaciones en vivo.",
    short_description: "Pantallas LED gigantes para festival musical",
    category: "eventos",
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80"
    ],
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    video_thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    video_duration: "PT3M00S",
    technologies: ["LED Outdoor P3.9", "Video Mapping", "Control Show"],
    results: [
      { metric: "Escenarios equipados", value: "4" },
      { metric: "m² de pantalla LED", value: "500+" },
      { metric: "Asistentes impactados", value: "200K+" }
    ],
    date: "2024-03-18",
    featured: true
  },
  {
    slug: "exterior-autopista-central",
    title: "Red de Pantallas Autopista Central",
    client: "Autopista Central",
    description: "Instalación de pantallas LED de gran formato a lo largo de la Autopista Central para publicidad y mensajería de seguridad vial. Pantallas de alta luminosidad diseñadas para visibilidad diurna y nocturna, con sistema de gestión de contenido que permite actualizaciones en tiempo real para alertas de tráfico.",
    short_description: "Pantallas publicitarias en autopista urbana",
    category: "exterior",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
    ],
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    video_thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    video_duration: "PT1M30S",
    technologies: ["LED Outdoor P10", "Alta Luminosidad", "Gestión Remota"],
    results: [
      { metric: "Pantallas instaladas", value: "12" },
      { metric: "Impresiones diarias", value: "2M+" },
      { metric: "Uptime garantizado", value: "99.9%" }
    ],
    date: "2024-01-20",
    featured: false
  }
];

const services = [
  {
    slug: "pantallas-led",
    title: "Pantallas LED Indoor & Outdoor",
    description: "Instalación de pantallas LED de alta resolución para interiores y exteriores. Desde videowalls corporativos hasta grandes formatos publicitarios.",
    icon: "Tv",
    features: ["Alta luminosidad", "Resolución 4K/8K", "Resistencia climática", "Mantenimiento incluido"]
  },
  {
    slug: "totems-interactivos",
    title: "Tótems Interactivos",
    description: "Kioscos digitales táctiles para autoatención, wayfinding y experiencias interactivas en puntos de venta y espacios públicos.",
    icon: "Monitor",
    features: ["Pantalla táctil", "Diseño personalizado", "Integración con sistemas", "Analíticas de uso"]
  },
  {
    slug: "gestion-contenido",
    title: "Gestión de Contenido (CMS)",
    description: "Plataforma propietaria para administrar y programar contenido en todas tus pantallas desde cualquier lugar.",
    icon: "Settings",
    features: ["Control remoto", "Programación automática", "Multi-ubicación", "Reportes en tiempo real"]
  },
  {
    slug: "creacion-contenido",
    title: "Creación de Contenido",
    description: "Diseño y producción de contenido audiovisual optimizado para digital signage que captura la atención de tu audiencia.",
    icon: "Palette",
    features: ["Motion graphics", "Video producción", "Diseño gráfico", "Animaciones 3D"]
  },
  {
    slug: "analiticas",
    title: "Analíticas y Métricas",
    description: "Medición del impacto de tus campañas con sensores de audiencia, conteo de personas y análisis de engagement.",
    icon: "BarChart3",
    features: ["Conteo de personas", "Tiempo de atención", "Mapas de calor", "ROI medible"]
  },
  {
    slug: "soporte",
    title: "Soporte 24/7",
    description: "Monitoreo continuo y soporte técnico especializado para garantizar que tus pantallas siempre estén funcionando.",
    icon: "Headphones",
    features: ["Monitoreo remoto", "Respuesta inmediata", "Mantenimiento preventivo", "SLA garantizado"]
  }
];

const leads = [
  { nombre: "Juan Pérez", cargo: "Gerente de Marketing", empresa: "Retail Corp", correo: "juan.perez@retailcorp.cl" },
  { nombre: "María González", cargo: "Directora Comercial", empresa: "Banco Nacional", correo: "maria.gonzalez@banconacional.cl" },
  { nombre: "Carlos Rodríguez", cargo: "CEO", empresa: "Eventos Premium", correo: "carlos@eventospremium.cl" }
];

async function seed() {
  console.log("🌱 Starting database seed...\n");

  // Insert projects
  console.log("📦 Inserting projects...");
  const { data: projectsData, error: projectsError } = await supabase
    .from("projects")
    .insert(projects)
    .select();

  if (projectsError) {
    console.error("❌ Error inserting projects:", projectsError.message);
  } else {
    console.log(`✅ Inserted ${projectsData.length} projects`);
  }

  // Insert services
  console.log("🔧 Inserting services...");
  const { data: servicesData, error: servicesError } = await supabase
    .from("services")
    .insert(services)
    .select();

  if (servicesError) {
    console.error("❌ Error inserting services:", servicesError.message);
  } else {
    console.log(`✅ Inserted ${servicesData.length} services`);
  }

  // Insert leads
  console.log("👥 Inserting sample leads...");
  const { data: leadsData, error: leadsError } = await supabase
    .from("leads")
    .insert(leads)
    .select();

  if (leadsError) {
    console.error("❌ Error inserting leads:", leadsError.message);
  } else {
    console.log(`✅ Inserted ${leadsData.length} leads`);
  }

  console.log("\n🎉 Seed completed!");
}

seed().catch(console.error);

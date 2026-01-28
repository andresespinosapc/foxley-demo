import { Monitor, Tv, BarChart3, Palette, Settings, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "pantallas-led",
    title: "Pantallas LED Indoor & Outdoor",
    description:
      "Instalación de pantallas LED de alta resolución para interiores y exteriores. Desde videowalls corporativos hasta grandes formatos publicitarios.",
    icon: Tv,
    features: [
      "Alta luminosidad",
      "Resolución 4K/8K",
      "Resistencia climática",
      "Mantenimiento incluido",
    ],
  },
  {
    id: "totems-interactivos",
    title: "Tótems Interactivos",
    description:
      "Kioscos digitales táctiles para autoatención, wayfinding y experiencias interactivas en puntos de venta y espacios públicos.",
    icon: Monitor,
    features: [
      "Pantalla táctil",
      "Diseño personalizado",
      "Integración con sistemas",
      "Analíticas de uso",
    ],
  },
  {
    id: "gestion-contenido",
    title: "Gestión de Contenido (CMS)",
    description:
      "Plataforma propietaria para administrar y programar contenido en todas tus pantallas desde cualquier lugar.",
    icon: Settings,
    features: [
      "Control remoto",
      "Programación automática",
      "Multi-ubicación",
      "Reportes en tiempo real",
    ],
  },
  {
    id: "creacion-contenido",
    title: "Creación de Contenido",
    description:
      "Diseño y producción de contenido audiovisual optimizado para digital signage que captura la atención de tu audiencia.",
    icon: Palette,
    features: [
      "Motion graphics",
      "Video producción",
      "Diseño gráfico",
      "Animaciones 3D",
    ],
  },
  {
    id: "analiticas",
    title: "Analíticas y Métricas",
    description:
      "Medición del impacto de tus campañas con sensores de audiencia, conteo de personas y análisis de engagement.",
    icon: BarChart3,
    features: [
      "Conteo de personas",
      "Tiempo de atención",
      "Mapas de calor",
      "ROI medible",
    ],
  },
  {
    id: "soporte",
    title: "Soporte 24/7",
    description:
      "Monitoreo continuo y soporte técnico especializado para garantizar que tus pantallas siempre estén funcionando.",
    icon: Headphones,
    features: [
      "Monitoreo remoto",
      "Respuesta inmediata",
      "Mantenimiento preventivo",
      "SLA garantizado",
    ],
  },
];

-- Foxley Digital Signage - Seed Data
-- Run this SQL in Supabase SQL Editor after creating the schema

-- Clear existing data (optional, uncomment if needed)
-- TRUNCATE projects, services, leads RESTART IDENTITY CASCADE;

-- Insert Projects with placeholder images from Unsplash
INSERT INTO projects (slug, title, client, description, short_description, category, thumbnail, images, video_url, video_thumbnail, video_duration, technologies, results, date, featured)
VALUES
  (
    'retail-mall-plaza',
    'Transformación Digital Mall Plaza',
    'Mall Plaza',
    'Implementación de una red de más de 200 pantallas LED en 15 centros comerciales de Chile. El proyecto incluyó videowalls de gran formato en accesos principales, tótems interactivos de wayfinding y pantallas de señalización en pasillos. Desarrollamos un CMS centralizado que permite gestionar todo el contenido desde una única plataforma, con capacidad de segmentación por ubicación y horario.',
    'Red de 200+ pantallas en 15 centros comerciales',
    'retail',
    'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80',
    ARRAY[
      'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=1200&q=80',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80'
    ],
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80',
    'PT2M30S',
    ARRAY['LED Indoor P2.5', 'CMS Propietario', 'Sensores de Audiencia'],
    '[{"metric": "Pantallas instaladas", "value": "200+"}, {"metric": "Centros comerciales", "value": "15"}, {"metric": "Incremento engagement", "value": "+45%"}]'::jsonb,
    '2024-08-15',
    true
  ),
  (
    'corporativo-banco-chile',
    'Digitalización Sucursales Banco de Chile',
    'Banco de Chile',
    'Proyecto de modernización de la experiencia en sucursales bancarias. Instalamos pantallas de señalización digital para comunicación interna y cartelería dinámica orientada al cliente. El sistema incluye integración con APIs del banco para mostrar información en tiempo real como tasas, promociones y tiempos de espera.',
    'Señalización digital en 50 sucursales bancarias',
    'corporativo',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    ARRAY[
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
    ],
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    'PT1M45S',
    ARRAY['Pantallas 55"', 'Integración API', 'Contenido Dinámico'],
    '[{"metric": "Sucursales digitalizadas", "value": "50"}, {"metric": "Reducción tiempo espera percibido", "value": "-30%"}, {"metric": "Satisfacción cliente", "value": "+25%"}]'::jsonb,
    '2024-06-10',
    true
  ),
  (
    'evento-lollapalooza-2024',
    'Lollapalooza Chile 2024',
    'Lotus Producciones',
    'Producción e instalación de pantallas LED gigantes para los escenarios principales del festival Lollapalooza Chile 2024. Incluimos pantallas laterales, backdrop LED de alta resolución y sistemas de video mapping. Coordinación completa con producción artística para sincronización de visuales con presentaciones en vivo.',
    'Pantallas LED gigantes para festival musical',
    'eventos',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    ARRAY[
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80'
    ],
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    'PT3M00S',
    ARRAY['LED Outdoor P3.9', 'Video Mapping', 'Control Show'],
    '[{"metric": "Escenarios equipados", "value": "4"}, {"metric": "m² de pantalla LED", "value": "500+"}, {"metric": "Asistentes impactados", "value": "200K+"}]'::jsonb,
    '2024-03-18',
    true
  ),
  (
    'exterior-autopista-central',
    'Red de Pantallas Autopista Central',
    'Autopista Central',
    'Instalación de pantallas LED de gran formato a lo largo de la Autopista Central para publicidad y mensajería de seguridad vial. Pantallas de alta luminosidad diseñadas para visibilidad diurna y nocturna, con sistema de gestión de contenido que permite actualizaciones en tiempo real para alertas de tráfico.',
    'Pantallas publicitarias en autopista urbana',
    'exterior',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    ARRAY[
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80'
    ],
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    'PT1M30S',
    ARRAY['LED Outdoor P10', 'Alta Luminosidad', 'Gestión Remota'],
    '[{"metric": "Pantallas instaladas", "value": "12"}, {"metric": "Impresiones diarias", "value": "2M+"}, {"metric": "Uptime garantizado", "value": "99.9%"}]'::jsonb,
    '2024-01-20',
    false
  );

-- Insert Services
INSERT INTO services (slug, title, description, icon, features)
VALUES
  (
    'pantallas-led',
    'Pantallas LED Indoor & Outdoor',
    'Instalación de pantallas LED de alta resolución para interiores y exteriores. Desde videowalls corporativos hasta grandes formatos publicitarios.',
    'Tv',
    ARRAY['Alta luminosidad', 'Resolución 4K/8K', 'Resistencia climática', 'Mantenimiento incluido']
  ),
  (
    'totems-interactivos',
    'Tótems Interactivos',
    'Kioscos digitales táctiles para autoatención, wayfinding y experiencias interactivas en puntos de venta y espacios públicos.',
    'Monitor',
    ARRAY['Pantalla táctil', 'Diseño personalizado', 'Integración con sistemas', 'Analíticas de uso']
  ),
  (
    'gestion-contenido',
    'Gestión de Contenido (CMS)',
    'Plataforma propietaria para administrar y programar contenido en todas tus pantallas desde cualquier lugar.',
    'Settings',
    ARRAY['Control remoto', 'Programación automática', 'Multi-ubicación', 'Reportes en tiempo real']
  ),
  (
    'creacion-contenido',
    'Creación de Contenido',
    'Diseño y producción de contenido audiovisual optimizado para digital signage que captura la atención de tu audiencia.',
    'Palette',
    ARRAY['Motion graphics', 'Video producción', 'Diseño gráfico', 'Animaciones 3D']
  ),
  (
    'analiticas',
    'Analíticas y Métricas',
    'Medición del impacto de tus campañas con sensores de audiencia, conteo de personas y análisis de engagement.',
    'BarChart3',
    ARRAY['Conteo de personas', 'Tiempo de atención', 'Mapas de calor', 'ROI medible']
  ),
  (
    'soporte',
    'Soporte 24/7',
    'Monitoreo continuo y soporte técnico especializado para garantizar que tus pantallas siempre estén funcionando.',
    'Headphones',
    ARRAY['Monitoreo remoto', 'Respuesta inmediata', 'Mantenimiento preventivo', 'SLA garantizado']
  );

-- Insert sample leads for testing
INSERT INTO leads (nombre, cargo, empresa, correo)
VALUES
  ('Juan Pérez', 'Gerente de Marketing', 'Retail Corp', 'juan.perez@retailcorp.cl'),
  ('María González', 'Directora Comercial', 'Banco Nacional', 'maria.gonzalez@banconacional.cl'),
  ('Carlos Rodríguez', 'CEO', 'Eventos Premium', 'carlos@eventospremium.cl');

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          client: string;
          description: string | null;
          short_description: string | null;
          category: "retail" | "corporativo" | "eventos" | "exterior";
          thumbnail: string | null;
          images: string[] | null;
          video_url: string | null;
          video_thumbnail: string | null;
          video_duration: string | null;
          technologies: string[] | null;
          results: { metric: string; value: string }[] | null;
          date: string | null;
          updated_at: string;
          featured: boolean;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          client: string;
          description?: string | null;
          short_description?: string | null;
          category: "retail" | "corporativo" | "eventos" | "exterior";
          thumbnail?: string | null;
          images?: string[] | null;
          video_url?: string | null;
          video_thumbnail?: string | null;
          video_duration?: string | null;
          technologies?: string[] | null;
          results?: { metric: string; value: string }[] | null;
          date?: string | null;
          updated_at?: string;
          featured?: boolean;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          client?: string;
          description?: string | null;
          short_description?: string | null;
          category?: "retail" | "corporativo" | "eventos" | "exterior";
          thumbnail?: string | null;
          images?: string[] | null;
          video_url?: string | null;
          video_thumbnail?: string | null;
          video_duration?: string | null;
          technologies?: string[] | null;
          results?: { metric: string; value: string }[] | null;
          date?: string | null;
          updated_at?: string;
          featured?: boolean;
        };
      };
      services: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string | null;
          icon: string | null;
          features: string[] | null;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description?: string | null;
          icon?: string | null;
          features?: string[] | null;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string | null;
          icon?: string | null;
          features?: string[] | null;
        };
      };
      leads: {
        Row: {
          id: string;
          nombre: string;
          cargo: string;
          empresa: string;
          correo: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          nombre: string;
          cargo: string;
          empresa: string;
          correo: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          nombre?: string;
          cargo?: string;
          empresa?: string;
          correo?: string;
          created_at?: string;
        };
      };
    };
  };
}

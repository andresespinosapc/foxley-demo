import { z } from "zod";

export const leadFormSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  cargo: z
    .string()
    .min(2, "El cargo debe tener al menos 2 caracteres")
    .max(100, "El cargo es demasiado largo"),
  empresa: z
    .string()
    .min(2, "La empresa debe tener al menos 2 caracteres")
    .max(200, "El nombre de la empresa es demasiado largo"),
  correo: z
    .string()
    .email("Ingresa un correo electrónico válido")
    .max(254, "El correo es demasiado largo"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

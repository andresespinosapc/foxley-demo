"use server";

import { leadFormSchema, LeadFormData } from "@/lib/validations";
import { supabase } from "@/lib/supabase";

interface ActionResult {
  success: boolean;
  message: string;
  downloadUrl?: string;
}

export async function submitLeadForm(
  formData: LeadFormData
): Promise<ActionResult> {
  const validatedData = leadFormSchema.safeParse(formData);

  if (!validatedData.success) {
    return {
      success: false,
      message: "Datos inválidos. Por favor revisa el formulario.",
    };
  }

  const { nombre, cargo, empresa, correo } = validatedData.data;

  try {
    const { error } = await supabase.from("leads").insert({
      nombre,
      cargo,
      empresa,
      correo,
    });

    if (error) {
      console.error("Error al guardar lead en Supabase:", error);
      return {
        success: false,
        message: "Hubo un error. Por favor intenta nuevamente.",
      };
    }

    return {
      success: true,
      message:
        "¡Gracias por tu interés! Tu descarga comenzará automáticamente.",
      downloadUrl: "/downloads/brochure-digital-signage.pdf",
    };
  } catch (error) {
    console.error("Error al procesar lead:", error);
    return {
      success: false,
      message: "Hubo un error. Por favor intenta nuevamente.",
    };
  }
}

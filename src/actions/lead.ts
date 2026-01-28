"use server";

import { leadFormSchema, LeadFormData } from "@/lib/validations";

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
    // In production, you would save the lead to a database or CRM
    // Example: Supabase, Airtable, HubSpot, etc.
    console.log("Lead captured:", { nombre, cargo, empresa, correo });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

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

"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormData } from "@/lib/validations";
import { submitLeadForm } from "@/actions/lead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface LeadFormProps {
  onSuccess?: () => void;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      nombre: "",
      cargo: "",
      empresa: "",
      correo: "",
    },
  });

  async function onSubmit(data: LeadFormData) {
    startTransition(async () => {
      const response = await submitLeadForm(data);
      setResult(response);

      if (response.success && response.downloadUrl) {
        // Trigger automatic download
        const link = document.createElement("a");
        link.href = response.downloadUrl;
        link.download = "brochure-digital-signage.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close form after a delay
        setTimeout(() => {
          onSuccess?.();
        }, 2000);
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre completo</Label>
        <Input
          id="nombre"
          placeholder="Juan Pérez"
          {...form.register("nombre")}
          aria-invalid={!!form.formState.errors.nombre}
          disabled={isPending}
        />
        {form.formState.errors.nombre && (
          <p className="text-sm text-red-500">
            {form.formState.errors.nombre.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cargo">Cargo</Label>
        <Input
          id="cargo"
          placeholder="Gerente de Marketing"
          {...form.register("cargo")}
          aria-invalid={!!form.formState.errors.cargo}
          disabled={isPending}
        />
        {form.formState.errors.cargo && (
          <p className="text-sm text-red-500">
            {form.formState.errors.cargo.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="empresa">Empresa</Label>
        <Input
          id="empresa"
          placeholder="Empresa S.A."
          {...form.register("empresa")}
          aria-invalid={!!form.formState.errors.empresa}
          disabled={isPending}
        />
        {form.formState.errors.empresa && (
          <p className="text-sm text-red-500">
            {form.formState.errors.empresa.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="correo">Correo electrónico</Label>
        <Input
          id="correo"
          type="email"
          placeholder="juan@empresa.com"
          {...form.register("correo")}
          aria-invalid={!!form.formState.errors.correo}
          disabled={isPending}
        />
        {form.formState.errors.correo && (
          <p className="text-sm text-red-500">
            {form.formState.errors.correo.message}
          </p>
        )}
      </div>

      {result && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 ${
            result.success
              ? "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200"
              : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"
          }`}
        >
          {result.success ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <span className="text-sm">{result.message}</span>
        </div>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          "Descargar Brochure Gratuito"
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        Al enviar aceptas nuestra política de privacidad. Tus datos están
        seguros con nosotros.
      </p>
    </form>
  );
}

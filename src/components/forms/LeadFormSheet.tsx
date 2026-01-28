"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";
import { Download } from "lucide-react";

interface LeadFormSheetProps {
  triggerText?: string;
  triggerClassName?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

export function LeadFormSheet({
  triggerText = "Descargar Brochure",
  triggerClassName,
  variant = "default",
  size = "lg",
}: LeadFormSheetProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={variant} size={size} className={triggerClassName}>
          <Download className="w-4 h-4 mr-2" />
          {triggerText}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl">
            Descarga nuestro brochure
          </SheetTitle>
          <SheetDescription>
            Completa tus datos y recibe información detallada sobre nuestras
            soluciones de digital signage, casos de éxito y servicios.
          </SheetDescription>
        </SheetHeader>
        <LeadForm onSuccess={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}

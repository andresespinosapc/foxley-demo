import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950",
  {
    variants: {
      variant: {
        default:
          "bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30",
        destructive:
          "bg-red-500 text-white hover:bg-red-400 shadow-lg shadow-red-500/20",
        outline:
          "border border-stone-800 bg-transparent text-stone-100 hover:bg-stone-900 hover:border-stone-700",
        secondary:
          "bg-stone-900 text-stone-100 hover:bg-stone-800 border border-stone-800",
        ghost:
          "text-stone-400 hover:text-stone-100 hover:bg-stone-900",
        link: "text-amber-400 underline-offset-4 hover:underline hover:text-amber-300",
      },
      size: {
        default: "h-10 px-5 py-2 rounded-full",
        xs: "h-7 gap-1 rounded-full px-3 text-xs",
        sm: "h-9 rounded-full gap-1.5 px-4",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "size-10 rounded-full",
        "icon-xs": "size-7 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

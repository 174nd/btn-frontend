import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button style variants
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50 text-sm font-medium whitespace-nowrap gap-2 [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent border",
        ghost: "bg-transparent border-none",
      },
      color: {
        default: "",
        success: "",
        error: "",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    compoundVariants: [
      // DEFAULT variant
      {
        variant: "default",
        color: "default",
        className: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-700",
      },
      {
        variant: "default",
        color: "success",
        className: "bg-emerald-500 text-white hover:bg-emerald-600 focus-visible:ring-emerald-600",
      },
      {
        variant: "default",
        color: "error",
        className: "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-600",
      },

      // OUTLINE variant
      {
        variant: "outline",
        color: "default",
        className: "text-primary-600 border-primary-600 hover:text-primary-700 hover:border-primary-700",
      },
      {
        variant: "outline",
        color: "success",
        className: "text-emerald-500 border-emerald-500 hover:text-emerald-600 hover:border-emerald-600",
      },
      {
        variant: "outline",
        color: "error",
        className: "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600",
      },

      // GHOST variant
      {
        variant: "ghost",
        color: "default",
        className: "text-primary-600 hover:text-primary-700",
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-emerald-500 hover:text-emerald-600",
      },
      {
        variant: "ghost",
        color: "error",
        className: "text-red-500 hover:text-red-600",
      },
    ],

    defaultVariants: {
      variant: "default",
      color: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, color, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, color, size }), className)} ref={ref} {...props} />;
});

Button.displayName = "Button";

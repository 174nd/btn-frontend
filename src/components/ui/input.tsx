import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "./label";

// Input Variants
export const inputVariants = cva(
  "flex w-full rounded-md border border-primary-700 focus-within:bg-primary-100 hover:bg-primary-200 transition-colors bg-transparent text-base file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-primary-700 focus-visible:ring-offset-0 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-10 px-4 text-base",
        lg: "h-11 px-5 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
  error?: boolean;
  iconBefore?: React.ReactElement<{ className?: string }>;
  iconAfter?: React.ReactElement<{ className?: string; onClick?: () => void }>;
  label?: React.ReactNode;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, size, iconBefore, iconAfter, label, hint, id, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <div className="space-y-1">
        {label && (
          <Label htmlFor={inputId} className="text-foreground block text-sm font-medium">
            {label}
          </Label>
        )}
        <div className="relative flex items-center">
          {iconBefore &&
            React.isValidElement(iconBefore) &&
            React.cloneElement(iconBefore, {
              className: cn("absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", iconBefore.props.className),
            })}

          <input
            id={inputId}
            type={type}
            autoComplete="off"
            ref={ref}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? hint : undefined}
            className={cn(inputVariants({ size }), iconBefore && "pl-10", iconAfter && "pr-10", error && "border-red-500", className)}
            {...props}
          />

          {iconAfter &&
            React.isValidElement(iconAfter) &&
            React.cloneElement(iconAfter, {
              className: cn(
                "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
                iconAfter.props.className,
                iconAfter.props.onClick && "cursor-pointer",
              ),
            })}
        </div>
        {hint && <p className={cn("text-sm", !error ? "text-black/50" : "text-red-500")}>{hint}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

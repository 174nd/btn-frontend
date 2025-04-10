import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { HiChevronDown } from "react-icons/hi";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "./label";

// Select Variants (mengadopsi inputVariants)
export const selectVariants = cva(
  "flex w-full rounded-md border border-primary-700 focus-within:bg-primary-100 hover:bg-primary-200 transition-colors bg-transparent text-base focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-primary-700 focus-visible:ring-offset-0 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
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

export interface SelectProps extends VariantProps<typeof selectVariants> {
  label?: React.ReactNode;
  hint?: string;
  error?: boolean;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  iconBefore?: React.ReactElement<{ className?: string }>;
  iconAfter?: React.ReactElement<{ className?: string }>;
  className?: string;
  disabled?: boolean;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    { label, hint, error, placeholder = "Pilih opsi...", value, onValueChange, options, iconBefore, iconAfter, className, size, disabled, ...props },
    ref,
  ) => {
    const selectId = React.useId();
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-1">
        {label && (
          <Label htmlFor={selectId} className="text-foreground block text-sm font-medium">
            {label}
          </Label>
        )}

        <SelectPrimitive.Root value={value} onValueChange={onValueChange} open={open} onOpenChange={setOpen} disabled={disabled}>
          <div className="relative flex items-center">
            {iconBefore &&
              React.isValidElement(iconBefore) &&
              React.cloneElement(iconBefore, {
                className: cn("absolute left-3 top-1/2 -translate-y-1/2 text-black", value == "" && "opacity-50", iconBefore.props.className),
              })}

            <SelectPrimitive.Trigger
              ref={ref}
              id={selectId}
              className={cn(
                "flex items-center justify-between",
                selectVariants({ size }),
                iconBefore && "pl-10",
                (iconAfter || !iconAfter) && "pr-10",
                error && "border-red-500",
                className,
              )}
              {...props}
            >
              <SelectPrimitive.Value placeholder={<span className={"text-black/50"}>{placeholder}</span>} />

              <SelectPrimitive.Icon
                className={cn("absolute top-1/2 right-3 -translate-y-1/2 text-black transition-transform", open ? "rotate-180" : "rotate-0")}
              >
                {iconAfter ? iconAfter : <HiChevronDown className="h-5 w-5" />}
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
          </div>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              position="popper"
              sideOffset={4}
              className={cn(
                "border-primary-700 animate-in fade-in-80 z-50 mt-1 overflow-hidden rounded-md border bg-white shadow-md",
                "w-[var(--radix-select-trigger-width)]",
              )}
            >
              <SelectPrimitive.Viewport className="p-1">
                {options.map((opt) => (
                  <SelectPrimitive.Item
                    key={opt.value}
                    value={opt.value}
                    className={cn(
                      "text-foreground relative flex cursor-pointer items-center rounded-md px-3 py-2 text-base transition-colors outline-none select-none",
                      "hover:bg-primary-100 focus:bg-primary-200 radix-state-checked:bg-primary-300",
                    )}
                  >
                    <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {hint && <p className={cn("text-sm", !error ? "text-black/50" : "text-red-500")}>{hint}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";

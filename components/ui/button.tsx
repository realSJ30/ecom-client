"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "subtle";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-primary shadow-[0_10px_30px_-10px_hsl(258_90%_66%/0.45)] hover:bg-primary/90 hover:-translate-y-px",
  ghost:
    "bg-surface-2 text-foreground border border-border hover:bg-surface-3 hover:border-primary/40",
  outline:
    "bg-transparent text-foreground border border-border hover:border-primary/60 hover:bg-surface-1",
  subtle:
    "bg-white/5 text-foreground backdrop-blur border border-white/10 hover:bg-white/10",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      disabled,
      type = "button",
      variant = "primary",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        disabled={disabled}
        {...props}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0",
          sizes[size],
          variants[variant],
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
